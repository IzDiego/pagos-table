import React, { useState, useContext } from "react";
import useCuentas from "../../lib/utils/hooks/useCuentas";
import { Autocomplete, TextField } from "@mui/material";

export default function CuentaBancaria() {
  const [Cuenta, setCuenta] = useState(null);
  const { data: cuentas, isSuccess, isLoading, error } = useCuentas(Cuenta);

  const handleInputChange= e =>{   
    if(e.target.value.length===0){
      setCuenta(null)
    }
    else{
      setCuenta(e.target.value);
        }
            
    }
  if (isLoading){
    return <p>Loading...</p>
  }
  if (isSuccess) {
    let opciones = [];
    cuentas && cuentas.map((cuenta,i)=>{
      opciones[i] = cuenta.cuenta_bancaria_movimiento_nombre;      
    })
    return (
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={opciones}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleInputChange}
              label="Cuenta bancaria"
            />
          )}
        />        
      </div>
    );
  }
      
  }
