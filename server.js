const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const exp = require('constants');
const connectDB = require('./server/database/connection');


dotenv.config({ path: 'config.env' })
const port = process.env.PORT || 3000

// env variables

// Log http requests and errors
app.use(morgan('tiny'))

// MongoDB Connection
connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// Set view engine
app.set('view engine', 'ejs')
    // If we changed the view package
    // app.set('views', path.resolve(__dirname, 'views/ejs'))

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))


// Include Routers
const routers = require('./server/routes/router');
app.use('/', routers);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})