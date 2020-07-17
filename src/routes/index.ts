import { Router } from "express";

const router = Router();

let info = 1;

router.get("/", (req, res) => {
  res.json({ info });
});

router.post("/", (req, res) => {
  info++;
  res.send("success!");
});

export default router;
