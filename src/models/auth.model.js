import { model, Schema } from 'mongoose';

const authSchema = new Schema({
  employe: {
    type: Schema.Types.ObjectId,
    ref: 'Employe',
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
});

const Auth = model('Auth', authSchema);

export { Auth };
