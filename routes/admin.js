const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();



const adminController = require('../controllers/admin')


router.get("/add-product", adminController.getAddProducts);

// /admin/products  => GET
router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct)

/* 
module.exports.routes = router;
exports.products = products; */
module.exports = router;

