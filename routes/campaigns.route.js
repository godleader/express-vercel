const express = require('express');
const router = express.Router();
const campaignsController = require('../controllers/campaigns.controller');
const authenticateToken = require('../common/auth.middleware');

// 获取 campaigns 列表
router.get('/list', authenticateToken, campaignsController.getCampaignsList);

// 获取特定 campaign 的 performance
router.get('/performance/:id', authenticateToken, campaignsController.getCampaignPerformance);

// 创建 campaign 的四个步骤
router.post('/create/step1', authenticateToken, campaignsController.createCampaignStep1);
router.post('/create/step2', authenticateToken, campaignsController.createCampaignStep2);
router.post('/create/step3', authenticateToken, campaignsController.createCampaignStep3);
router.post('/create/step4', authenticateToken, campaignsController.createCampaignStep4);

module.exports = router;
