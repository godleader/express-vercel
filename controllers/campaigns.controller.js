const Campaign = require('../models/campaign.model');
const TemporaryCampaign = require('../models/temporaryCampaign.model');
const Performance = require('../models/performance.model');

// 获取 campaigns 列表
exports.getCampaignsList = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving campaigns', error });
  }
};

// 获取特定 campaign 的 performance
exports.getCampaignPerformance = async (req, res) => {
  try {
    const campaignId = req.params.id;
    const performance = await Performance.findOne({ campaignId: campaignId });
    if (!performance) {
      return res.status(404).json({ message: 'Performance data not found' });
    }
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving performance data', error });
  }
};

// 创建 campaign 的第一个步骤
exports.createCampaignStep1 = async (req, res) => {
  try {
    const tempCampaign = new TemporaryCampaign();
    tempCampaign.step1 = req.body;
    await tempCampaign.save();
    res.status(201).json(tempCampaign._id);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign step 1', error });
  }
};

// 创建 campaign 的第二个步骤
exports.createCampaignStep2 = async (req, res) => {
  try {
    const tempCampaign = await TemporaryCampaign.findById(req.body.id);
    if (!tempCampaign) {
      return res.status(404).json({ message: 'Temporary campaign not found' });
    }
    tempCampaign.step2 = req.body;
    await tempCampaign.save();
    res.status(200).json(tempCampaign._id);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign step 2', error });
  }
};

// 创建 campaign 的第三个步骤
exports.createCampaignStep3 = async (req, res) => {
  try {
    const tempCampaign = await TemporaryCampaign.findById(req.body.id);
    if (!tempCampaign) {
      return res.status(404).json({ message: 'Temporary campaign not found' });
    }
    tempCampaign.step3 = req.body;
    await tempCampaign.save();
    res.status(200).json(tempCampaign._id);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign step 3', error });
  }
};

// 创建 campaign 的第四个步骤
exports.createCampaignStep4 = async (req, res) => {
  try {
    const tempCampaign = await TemporaryCampaign.findById(req.body.id);
    if (!tempCampaign) {
      return res.status(404).json({ message: 'Temporary campaign not found' });
    }
    tempCampaign.step4 = req.body;

    // 保存完整的 campaign 到数据库
    const campaign = new Campaign({
      ...tempCampaign.step1,
      ...tempCampaign.step2,
      ...tempCampaign.step3,
      ...tempCampaign.step4
    });
    await campaign.save();
    await TemporaryCampaign.findByIdAndDelete(req.body.id);

    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign step 4', error });
  }
};
