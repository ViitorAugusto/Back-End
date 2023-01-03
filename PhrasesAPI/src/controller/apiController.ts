import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";
export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const random = (req: Request, res: Response) => {
  let random: number = Math.floor(Math.random() * 10);
  res.json({ number: random });
};

export const nome = (req: Request, res: Response) => {
  let nome: string = req.params.nome;
  res.json({ nome });
};
