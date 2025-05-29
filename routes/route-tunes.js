import { Router } from "express";
import { getAllTunes } from "../services/service-tune.js";

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

export default router;
