import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router();

router.get("/ping", apiController.ping);
router.get("/random", apiController.random);
router.get("/nome/:nome", apiController.nome);

export default router;
