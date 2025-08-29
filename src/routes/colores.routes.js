import { Router } from "express";
import { borrarColor, crearColor, editarColor, leerColores, leerColorPorId } from "../controllers/colores.controllers.js";

const router = Router()

router.route('/').get(leerColores).post(crearColor)
router.route('/:id').get(leerColorPorId).delete.apply(borrarColor).put(editarColor)

export default router;