import express from "express";
import livros from "./livrosRoutes.js";

const router = (app) => {
  app.router("/").get((req, res) => {
    res.status(200).send("Hello World!");
  });

  app.use(express.json(), livros);
};

export default router;
