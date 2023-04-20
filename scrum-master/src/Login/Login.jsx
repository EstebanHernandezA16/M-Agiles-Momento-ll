import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './Login.css'

import {
  EnvelopeCheckFill,
  PersonSquare,
  CalendarDay,
  Lock,
  Watch,
} from "react-bootstrap-icons";
//import { useHistory } from "react-router-dom";

export function Login() {
    const usuarios =[
        {email: 'admin123@cstate.com', password: '1234', nombre: 'Esteban' },
        {email: 'operario@columbia.com', password: 'asdf', nombre: 'Rodri'},
        {email: 'congresista@2botasderechas.com', password: 'plataoplomo', nombre: 'CastroC'}
    ]
  //const [redireccion, setRedireccion] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [date, setDate] = useState("");
  //const history = useHistory();
  const URL = "http://localhost:3001";


  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(`${URL}/Back/ApiLog`, { email, password, nombre, hora, date })
    //   .then((response) => {
    //     //response es lo que me llega del back
    //     console.log(response.data);
    //     history.push('/Home')
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const registroEncontrado =  usuarios.find((usuario)=> usuario.email === email && usuario.password=== password)
    registroEncontrado? alert(`Bienvenido, ${nombre}, credenciales encontrados`) : alert('Registro no encontrado');
    
  };

  return (
    <>
    
      
        <div className="loginScreen">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 py-4">
                <h1>Agenda tu Cita </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <EnvelopeCheckFill size={16} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className="input-group-text txtbox  " id="basic-addon2">
                  @mail.com
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <PersonSquare />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <Lock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.toString())}
                />
              </div>
            </div>
            <div className="row">
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <CalendarDay />
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Dia"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value.toString());
                  }}
                />
              </div>
              <div className="col input-group mb-3">
                <span className="input-group-text txtbox" id="basic-addon1">
                  <Watch />
                </span>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Hora"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={hora}
                  onChange={(e) => setHora(e.target.value.toString())}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-4 btnIng">
                <button type="submit" className="btn btn-light">
                  Renacer... digo ingresar
                </button>
              </div>
            </div>
          </form>
        </div>
      
    </>
  );
}
