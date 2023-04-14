import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Agenda() {
  return (
    <>
        <form action="">
            <div className="row">
                <div className="col-12 py-4">
                    <h1>Agenda tu Cita </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 input-group mb-3">
                <input type="text" className="form-control" placeholder="Ingresa tu correo" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
            </div>
            <div className="row">
                <div className="col input-group mb-3">
                 <span className="input-group-text" id="basic-addon1">@</span>
                 <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="col input-group mb-3">
                 <span className="input-group-text" id="basic-addon1">@</span>
                 <input type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="row">
            <div className="col input-group mb-3">
                 <span className="input-group-text" id="basic-addon1">@</span>
                 <input type="text" className="form-control" placeholder="Dia" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="col input-group mb-3">
                 <span className="input-group-text" id="basic-addon1">@</span>
                 <input type="text" className="form-control" placeholder="Hora" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

            </div>
        </form>
    </>
  );
}
