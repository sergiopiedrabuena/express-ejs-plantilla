const express = require('express');
const app = express();
const path = require('path')

//Set de motor de plantillas EJS
app.set('view engine','ejs')
app.set('views', path.join(__dirname, '/src/views'));

//body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

//render de index principal
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

//print en console
app.listen(3000, ()=>{
    console.log('Servidor activo en http://localhost:3000')
})
