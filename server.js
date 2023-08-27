const express = require('express');
const app = express();
const db = require('./db/db.js');
const productRouter = require('./routes/productsRouter.js');


// app.get('/',(req,res) => {
//     res.send("hi")
// })


db();

app.use('/api', productRouter);

app.listen(3000,()=>{
    console.log('listening on port 3000')
});

