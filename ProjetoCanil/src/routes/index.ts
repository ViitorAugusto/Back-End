import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchControlle";


const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);
router.get("/turtle", PageController.turtle);
router.get('/birds', PageController.birds);
router.get("/search", SearchController.search);


export default router;