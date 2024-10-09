import { model, Schema } from 'mongoose';

const saleSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

const Sale = model('Sale', saleSchema);

export { Sale };
