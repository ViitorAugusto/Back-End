import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("Hello World");
};

export const dogs = (req: Request, res: Response) => {
  res.send("Hello World");
};

export const cats = (req: Request, res: Response) => {
  res.send("Hello World");
};

export const fishes = (req: Request, res: Response) => {
  res.send("Hello World");
};
