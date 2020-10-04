const Product = require('../models/products');

exports.getAddProducts = (req, res, next) => {
    res.status(200).render('admin/add-product', {
        formsCSS: true,
        pageTitle: "Add Product",
        productCSS: true,
        activeShop: false,
        activeAddProduct: true,
        path: '/admin/add-product'
    })
}


exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save()

    res.redirect('/');
}


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}

