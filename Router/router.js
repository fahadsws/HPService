const express = require('express');
const router = express.Router();
const product = require('../Controller/AllGetAPi/Product');
const sentotp = require('../Controller/Auth/SentOtp');
const sumbitotp = require('../Controller/Auth/SumbitOtp');
const addcomplaine = require('../Controller/AllPostApi/AddComplaine');
const complaine = require('../Controller/AllGetAPi/Compaines');
const history = require('../Controller/AllGetAPi/History');
const detail = require('../Controller/AllGetAPi/Detail');
const city = require('../Controller/AllGetAPi/City');
const shops = require('../Controller/AllGetAPi/Shops');
const multerConfig = require('../Middelware/Uplods');
























router.get(`/product`, product);
router.post(`/otp`, sentotp);
router.post(`/sumbitotp`, sumbitotp);
router.post('/addcomplaine', multerConfig, addcomplaine);
router.get(`/compalines/:id`, complaine);
router.get(`/history/:id`, history);
router.get(`/detail/:id`, detail);
router.get(`/city`, city);
router.get(`/shops/:id`, shops);


























module.exports = router;
