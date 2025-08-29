import coloresRoutes from "./colores.routes.js";
import { Router } from "express";

const router = Router()

router.use('/colores', coloresRoutes)

export default router;