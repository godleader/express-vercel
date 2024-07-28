const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  campaignId: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
  impressions: { type: Number, required: true },
  clicks: { type: Number, required: true },
  conversions: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Performance', performanceSchema);
