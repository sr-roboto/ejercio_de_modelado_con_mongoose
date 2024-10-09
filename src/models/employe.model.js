import { model, Schema } from 'mongoose';

const employeSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sales: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale',
    },
  ],
});

const Employe = model('Employe', employeSchema);

export { Employe };
