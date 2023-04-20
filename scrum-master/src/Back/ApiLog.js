const express = require('express');
const bodyParser = require('body-parser');
const puerto = 3001;

const usuarios =[
    {email: 'admin123@cstate.com', password: '1234', nombre: 'Esteban' },
    {email: 'operario@columbia.com', password: 'asdf', nombre: 'Rodri'},
    {email: 'congresista@2botasderechas.com', password: 'plataoplomo', nombre: 'CastroC'}
]

const api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

//ruta por la que va a llegar la peticion
api.post('/Back/ApiLog', (req,res)=>{
    const {email, password} = req.body;

    const user = usuarios.find(u => u.email === email && u.password === password)
    //verificar si user es true gracias a este if parecido al ternario
    if(user){
        res.json({success: true, mensaje: `Bienvenido, ${user.nombre}`});
    }else{
        res.json({success: false, mensaje: 'Credenciales invalidos'});
    }
});
app.listen(3001, () =>console.log(`El back está escuchando en el puerto ${puerto}`));