import { Request, Response } from "express";

export const uploadFile = (req: Request, res: Response) => {

    console.log(req.file);
    res.json({});
};