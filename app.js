const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/templates/index.html'));
});

app.use('/', router);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.listen('3000', () =>{
    console.log('Server started');
});