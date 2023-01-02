import { Request, Response } from "express";
import { Op } from "sequelize";
import { User } from "../models/User";
import { Pokemon } from "../models/Pokemon";

import { Product } from "../models/Product";

export const home = async (req: Request, res: Response) => {
  const [usuario, created] = await User.findOrCreate({
    where: { nome: "Victor" },
    defaults: {
      nome: "Victor",
      age: 28,
    },
  });
  if (created) {
    console.log("Usuario criado com sucesso!");
  } else {
    console.log("Achamos o usuario!");
  }

  console.log("Nome:", usuario.nome);

  let deleteResult = await User.findAll({ where: { nome: "raupp" } });

  if (deleteResult.length > 0) {
    let user = deleteResult[0];
    await user.destroy();
  }

  let result = await User.findAll({ where: { id: 34 } });

  if (result.length > 0) {
    let user = result[0];
    user.age = 50;
    user.nome = "Lacerda";
    await user.save();
  }

  let user = await User.findAll();
  // let user = await User.findAll({
  //   where: {
  //     age: {
  //       //[Op.between] : [20, 50], // .between = entre
  //       //[Op.eq]: 45, // .eq = igual
  //       //[Op.gt]: 45, // .gt = maior que
  //       [Op.gte]: 18, // .gte = menor ou igual
  //       //[Op.lt]: 45, // .lt = menor que
  //       //[Op.lte]: 45, // .lte = menor ou igual
  //       //[Op.Like]: "B%", // .Like = começa com a letra B
  //     },
  //   },
  //   order: [
  //     ['age', 'ASC'],
  //     ['nome', 'DESC']
  //   ],
  //   offset: 0, // pular 0 registros
  //   limit: 3, // limitar a 3 registros
  // });

  // const user2 = Pokemon.build({
  //   idtb_pok: 3,
  //   nome: "Bonieky",
  //   type: "Fogo",
  // });
  // await user2.save();

  // const user = await User.create({
  //   id: 9,
  //   nome: "Bonieky",
  //   age: 39,
  // });

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    user,
    //user2,
  });
};

export const contatoAction = async (req: Request, res: Response) => {
  let body = req.body;

  await User.create({
    nome: body.nome,
    age: body.age,
  });

  res.redirect("/");
};
