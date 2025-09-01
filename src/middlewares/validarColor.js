import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionColor = [
  body("inputColor")
    .notEmpty()
    .withMessage("El color es obligatorio")
    .matches(
      /^#[0-9A-Fa-f]{6}$/
    )
    .withMessage(
      "El color debe ser de tipo hexadecimal"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionColor;
