//const products = [];
const Product = require('../models/products');

exports.getAddProducts = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input  type="text" name="title"/><button type="submit">Submit</button></form>')

    /* res.sendFile(path.join(rootDir, 'views', 'add-product.html'), error => {
        if (error) {
            console.log("Error in path of add-product.html", error);
        }

    }) */
    res.status(200).render('add-product', {
        formsCSS: true,
        pageTitle: "Add Product",
        productCSS: true,
        activeShop: false,
        activeAddProduct: true
    })
}


exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({ title: req.body.title });

    const product = new Product(req.body.title);
    product.save()

    res.redirect('/');
}


exports.getProducts = (req, res, next) => {
    //console.log(adminData.products);
    //const products = adminData.products
    const products = Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProduct: products.length > 0,
            productCSS: true,
            formsCSS: true,
            activeShop: true,
            activeAddProduct: false
        });
    });

    /*  res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'), error => {
         if (error) {
             console.log("Error in path of shop.html", error);
         }
 
     }); */
}