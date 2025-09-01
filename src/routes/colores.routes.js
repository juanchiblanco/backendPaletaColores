import { Router } from "express";
import { borrarColor, crearColor, editarColor, leerColores, leerColorPorId } from "../controllers/colores.controllers.js";
import validacionColor from "../middlewares/validarColor.js";

const router = Router()

router.route('/').get(leerColores).post(validacionColor,crearColor)
router.route('/:id').get(leerColorPorId).delete(borrarColor).put(validacionColor,editarColor)

export default router;