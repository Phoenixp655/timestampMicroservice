const express = require('express');
const app = express();


//@ set default views folder and ejs as render engine
app.set('views', __dirname + "/views");
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)

//@ home route
app.use('/', require('./routes/homeRoute'));

//@ timestamp route
app.use('/api/', require('./routes/TimestampRoute'))

//@ server listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))