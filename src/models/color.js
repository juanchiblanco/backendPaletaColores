import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
  inputTarea: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^#[0-9A-Fa-f]{6}$/.test(
          valor
        );
      },
    },
  },
});

const Color = mongoose.model("color", colorSchema);

export default Color;
