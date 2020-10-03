const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();



const productController = require('../controllers/product')


router.get("/add-product", productController.getAddProducts);

router.post("/add-product", productController.postAddProduct)

/* 
module.exports.routes = router;
exports.products = products; */
module.exports = router;

