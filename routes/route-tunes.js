import { Router } from "express";
import { createTune, getAllTunes } from "../services/service-tune.js";
import { generateRandomString } from "../utils/utils.js";
import Tune from "../models/model-tune.js";

const router = Router();

// GET all tunes
router.get("/", async (req, res, next) => {
  const tunes = await getAllTunes();

  if (tunes) {
    res.json({
      success: true,
      tunes: tunes,
    });
  } else {
    next({
      status: 404,
      message: "No tunes found.",
    });
  }
});

// Atlas Search
router.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Missing search term" });
  try {
    const tunes = await Tune.aggregate([
      {
        $search: {
          index: "default",
          text: { query: query, path: ["title", "category.main", "category.sub", "composer", "location"], fuzzy: { maxEdits: 2 } },
        },
      },
      { $limit: 10 },
      // {
      //   $project: {
      //     title: 1,
      //     tuneId: 1,
      //     score: { $meta: "searchScore" },
      //   },
      // },
    ]);
    res.json({
      success: true,
      tunes: tunes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Search failed", details: error.message });
  }
});

// Atlas autocomplete
router.get("/autocomplete", async (req, res) => {
  const query = req.query.q;

  if (!query) return res.status(400).json({ error: "Missing search term" });
  try {
    const tunes = await Tune.aggregate([
      {
        $search: {
          index: "autocomplete_index",
          compound: {
            should: [
              {
                autocomplete: {
                  query: query,
                  path: "title",
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "composer",
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "location",
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "category.main",
                  fuzzy: { maxEdits: 1 },
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "category.sub",
                  fuzzy: { maxEdits: 1 },
                },
              },
            ],
          },
        },
      },
      { $limit: 5 },
      { $project: { _id: 1, tuneId: 1, title: 1, score: { $meta: "searchScore" } } },
    ]);
    res.json({ success: true, tunes: tunes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Search failed", details: error.message });
  }
});

router.post("/", async (req, res, next) => {
  const { title, category, location, composer, isComposedByUs, recordings } = req.body;
  const tunes = await getAllTunes();

  const result = await createTune({
    tuneId: `tune-${generateRandomString()}`,
    tuneNumber: tunes.length + 1,
    title: title,
    category: { main: category.main, sub: category.sub ?? null },
    location: location ?? null,
    composer: composer ?? null,
    isComposedByUs: isComposedByUs ?? false,
    recordings: { main: recordings.main, sub: recordings.sub ?? null },
  });

  if (result) {
    res.status(201).json({ success: true, message: "Tune added successfully." });
  } else {
    res.status(400).json({ success: false, message: "Tune could not be added." });
  }
});

export default router;
