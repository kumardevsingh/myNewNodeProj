const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000

//const expressHbs = require('express-handlebars');

/* you have to pass { layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' } config in expresshub */

//app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));

/* app.set('view engine', 'hbs'); */


app.set('view engine', 'ejs');

app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const boadyParser = require('body-parser');

app.use(boadyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));




app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(port, () => {
    console.log("Server is listing on port no:" + port)
});