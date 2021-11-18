import React, { useState, useContext } from "react";
import { useQuery, QueryClient } from "react-query";
import useCuentas from "../hooks/useCuentas";
import styled from "styled-components";

export default function CuentaBancaria() {
  const [Cuenta, setCuenta] = useState("");
  const [ListaCuentas, setListaCuentas] = useState([]);
  const [ControlLista, setControl] = useState(0);
  const [Mensaje, setMensaje] = useState("");
  const Limite = 5;
  const { data: cuenta, isSuccess } = useCuentas(Cuenta);
  var listaCuentas;
  if (isSuccess) {
    listaCuentas = cuenta.misDatos;
  }
  const handleInputChange = (e) => {
    setMensaje("");
    setListaCuentas(listaCuentas);
    setCuenta(e.target.value);
    console.log(e.target.value.type);
    if (e.target.value.length === 0) {
      document.getElementById("ListaCu").style.display = "none";
      setListaCuentas([]);
    } else {
      document.getElementById("ListaCu").style.display = "list-item";
      setCuenta(e.target.value);
      //BuscaUsuario(e.target.value)
    }
  };

  const Teclapresionada = (e) => {
    if (e.key === "ArrowDown" && ControlLista < Limite) {
      setControl((prevControl) => prevControl + 1);
      if (ControlLista > Limite - 1) {
        setControl(Limite - 1);
      }
    } else if (e.key === "ArrowUp" && ControlLista > 0) {
      setControl((prevControl) => prevControl - 1);
    } else if (e.key === "Enter") {
      //      console.log(misDatos[ControlLista].Nombre)
      setCuenta(listaCuentas[ControlLista].cuenta_bancaria_movimiento);
      setControl(0);
      document.getElementById("ListaCu").style.display = "none";
    }
  };

  const Clickenopciones = (tabla) => {
    document.getElementById("ListaCu").style.display = "none";
    setMensaje("");
    setCuenta(tabla);
    setControl(0);
  };

  return (
    <div>
      <Styles>
        <p>
          Cuenta Bancaria:
          <div>
            <input
              type="text"
              onChange={handleInputChange}
              onKeyDown={Teclapresionada}
              value={Cuenta}
              id="Usuarios"
              name="usuarios"
              placeholder="Buscar"
              className="cuentas-control"
            />

            {Mensaje}
            <ul id="ListaCu" className="list-group" style={{ display: "none" }}>
              {listaCuentas &&
                listaCuentas.map((Dato, i) => {
                  return (
                    <li
                      className="list-group-item"
                      key={Dato.cuenta_bancaria_movimiento + i}
                      onClick={() =>
                        Clickenopciones(Dato.cuenta_bancaria_movimiento)
                      }
                      value={Dato.cuenta_bancaria_movimiento}
                      style={{
                        display: i <= Limite ? "list-item" : "none",
                        background: i === ControlLista ? "aquamarine" : "gray",
                      }}
                    >
                      {Dato.cuenta_bancaria_movimiento}{" "}
                    </li>
                  );
                })}
            </ul>
          </div>
        </p>
      </Styles>
    </div>
  );
}

const Styles = styled.div`
  .list-group {
    background-color: white;
    display: none;
    list-style-type: none;
    margin: 0 0 0 10px;
    padding: 0;
    position: absolute;
    width: 150px;
  }

  .list-group > li {
    border-color: gray;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 1px 0;
    padding-left: 5px;
  }

  .list-group > li:last-child {
    border-bottom: 1px solid gray;
  }

  .cuentas-control:focus + .list-group {
    display: block;
  }
`;
