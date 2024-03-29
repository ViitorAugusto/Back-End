import { Router } from "express";
import * as apiController from "../controller/apiController";
import * as phrasesController from "../controller/phrasesController";
import * as upLoadFile from "../controller/upLoadFile";
import multer from "multer";

const upload = multer({ dest: "./tmp" });


const router = Router();

router.post('/frases', phrasesController.createPhrase);
router.get('/frases', phrasesController.getPhrases);
router.get('/frase/random', phrasesController.randomPhrase);  
router.get('/frase/:id', phrasesController.getPhrase);
router.put('/frase/:id', phrasesController.updatePhrase);
router.delete('/frase/:id', phrasesController.deletePhrase);


router.get("/ping", apiController.ping);
router.get("/random", apiController.random);
router.get("/nome/:nome", apiController.nome);


router.post("/upload", upload.single("avatar"), upLoadFile.uploadFile);


export default router;
