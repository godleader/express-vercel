const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  targetAudience: { type: String },
  creatives: { type: [String] },
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
