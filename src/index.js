const express = require('express');
const  app = express();
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares


// routes
app.use(require('./routes/index'));

// static file
app.use(express.static(path.join(__dirname, 'public')));


// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});