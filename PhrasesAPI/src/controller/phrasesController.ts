import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/Phrase";

export const createPhrase = async (req: Request, res: Response) => {
  let { author, txt } = req.body;
  let newPhrase = await Phrase.create({ author, txt });
  res.status(201).json({ id: newPhrase.id, author, txt });
};

export const getPhrases = async (req: Request, res: Response) => {
  let phrases = await Phrase.findAll();
  res.status(200).json(phrases);
};

export const getPhrase = async (req: Request, res: Response) => {
  let { id } = req.params;
  let phrase = await Phrase.findByPk(id);
  if (phrase) {
    res.status(200).json(phrase);
  } else {
    res.status(404).json({ message: "Frase não achada" });
  }
};

export const updatePhrase = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { author, txt } = req.body;
  let phrase = await Phrase.findByPk(id);
  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;
    await phrase.save();
    res.status(200).json({ phrase });
  } else {
    res.status(404).json({ message: "Frase não encontrada para EDITAR" });
  }
};
export const deletePhrase = async (req: Request, res: Response) => {
  let { id } = req.params;
  let phrase = await Phrase.findByPk(id);
  if (phrase) {
    await phrase.destroy();
    res.status(200).json({ message: "Frase Deletada" });
  } else {
    res.status(404).json({ message: "Frase não encontrada para Deletar" });
  }
};

export const randomPhrase = async (req: Request, res: Response) => {
  let phrase = await Phrase.findOne({
    order: [Sequelize.fn("RAND")],
  });
  if (phrase) {
    res.status(200).json(phrase);
  } else {
    res.status(404).json({ message: " not " });
  }
};
