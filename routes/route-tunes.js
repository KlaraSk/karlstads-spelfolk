import { Router } from "express";
import { createTune, getAllTunes } from "../services/service-tune.js";
import { generateRandomString } from "../utils/utils.js";

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
