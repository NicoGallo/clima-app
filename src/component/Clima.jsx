import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //se extraen valores

    const {name, main} = resultado;

    if(!name) return null;

    //grados kelvin
    const kelvin = 273.15;

    return (
        <div>
            <div className="contenedor-clima">
                <h1 className="titulo-principal-clima">Clima en {name}</h1>

                <h2 className="titulo-temperatura">Temperatura:</h2>
                <p className="numero-clima">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>

                <h2 className="titulo-temperatura">Temperatura máxima:</h2>
                <p className="numero-clima">
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>

                <h2 className="titulo-temperatura">Temperatura mínima:</h2>
                <p className="numero-clima">
                    {parseFloat(main.temp_min  - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>

    );
}
 
Clima.propTypes = {
    resultado : PropTypes.object.isRequired
}



export default Clima;