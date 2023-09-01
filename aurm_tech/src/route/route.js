const express=require('express');
const route= express.Router();

const {CreateGoldPrice,GetGoldPrices}= require('../controllers/GoldController');
const {CreateBankBranch,GetBankBranchesWithRadius}= require('../controllers/BankController');

route.post('/Creategold',CreateGoldPrice);
route.get('/Getgold/:dayOfWeek',GetGoldPrices);

route.post('/Createbank',CreateBankBranch);
route.get('/Getbank',GetBankBranchesWithRadius);




module.exports=route