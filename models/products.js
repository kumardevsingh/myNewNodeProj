//const products = [];

const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const p = path.join(
    rootDir,
    'data',
    'product.json'
);

getProductsFromFile = (cb) => {
    fs.readFile(p, (error, fileConntent) => {
        if (error) {
            return cb([]);
        }
        cb(JSON.parse(fileConntent));
    });
    // return products;

}



module.exports = class Products {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
        // products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error)
            })
        })

        /*  fs.readFile(p, (error, fileConntent) => {
             let products = [];
              if (!error) {
                 console.log("fileConntent", fileConntent);
                 products = JSON.parse(fileConntent);
             } 
 
              products.push(this);
             fs.writeFile(p, JSON.stringify(products), (error) => {
                 console.log(error)
             }) 
 
         }) */
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }

}