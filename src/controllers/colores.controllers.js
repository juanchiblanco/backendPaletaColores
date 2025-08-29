import Color from "../models/color.js";

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({ mensaje: "El color fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el color" });
  }
};

export const leerColores = async (req, res) => {
  try {
    const listaColores = await Color.find();
    res.status(200).json(listaColores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los colores" });
  }
};

export const leerColorPorId = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "Color no encontrado" });
    }
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el color solicitado" });
  }
};

export const borrarColor = async (req,res) => {
  try {
    const colorBorrado = await Color.findByIdAndDelete(req.params.id);
    if (!colorBorrado) {
      return res.status(404).json({ mensaje: "No se encontro el color y no pudimos borrarlo" });
    }
    res.status(200).json({mensaje: 'Color eliminado exitosamente'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el color" });
  }
}

export const editarColor = async (req,res) => {
  try {
    const colorEditado = await Color.findByIdAndUpdate(req.params.id, req.body);
    if (!colorEditado) {
      return res.status(404).json({ mensaje: "No se encontro el color y no pudimos editarlo" });
    }
    res.status(200).json({mensaje: 'Color editado exitosamente'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar el color" });
  }
}