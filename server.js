const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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