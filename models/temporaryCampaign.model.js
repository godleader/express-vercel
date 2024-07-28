const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temporaryCampaignSchema = new Schema({
  step1: {
    name: { type: String },
    startDate: { type: Date },
    endDate: { type: Date }
  },
  step2: {
    budget: { type: Number },
  },
  step3: {
    targetAudience: { type: String },
  },
  step4: {
    creatives: { type: [String] },
  }
});

module.exports = mongoose.model('TemporaryCampaign', temporaryCampaignSchema);
