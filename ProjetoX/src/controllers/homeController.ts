import { Request, Response } from "express";
import { Op } from "sequelize";
import { User } from "../models/User";
import { Pokemon } from "../models/Pokemon";

import { Product } from "../models/Product";

export const home = async (req: Request, res: Response) => {
  let user = await User.findAll({
   where: {
      age: {
        [Op.between] : [20, 50], // .between = entre
        //[Op.eq]: 45, // .eq = igual
        //[Op.gt]: 45, // .gt = maior que
        //[Op.gte]: 45, // .gte = menor ou igual
        //[Op.lt]: 45, // .lt = menor que
        //[Op.lte]: 45, // .lte = menor ou igual
      }
   }
  });

  let user2 = await Pokemon.findAll({
    attributes: ["nome", "type"],
  });

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
    user2,
  });
};
