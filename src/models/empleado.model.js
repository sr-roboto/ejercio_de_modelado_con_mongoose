import { Model, Schema } from 'mongoose';

const empladoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  contraenia: {
    type: String,
    required: true,
  },
  ventas: {
    type: Schema.ObjectId,
    ref: 'Venta',
  },
});

const Empleado = Model('Empleado', empladoSchema);

export { Empleado };
