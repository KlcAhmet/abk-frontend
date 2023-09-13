import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: { type: String },
    mail: { type: String },
    message: String,
  },
  { timestamps: true, strict: true, strictQuery: true },
);
export default mongoose.model('abk-frontend', schema, 'tickets');