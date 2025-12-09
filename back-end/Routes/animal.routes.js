import { Router } from "express";
import { supabase } from "../client.js";

const router = Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("Animals").select();
  res.status(200).send(data);
});

router.post("/newAnimal", async (req, res) => {
  try {
    const animalInfo = req.body;
    const { data, error } = await supabase
      .from("Animals")
      .insert(animalInfo)
      .select();
    res.status(201).send(data);
  } catch (e) {
    console.log("error adding animal");
  }
});

export default router;
