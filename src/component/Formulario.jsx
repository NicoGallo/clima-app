import React, {useState} from 'react';
import Error from './Error'; 
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {




    const [error, guardarError] = useState(false);

    //extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    //funcion que colola elementos en state
    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //cuando el usuaro da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //pasarlo al componente principal
        setConsultar(true)

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error mensaje = "Ambos campos son obligatorios " /> : null}

            <div className="form-group ">
                <label for="ciudad">Ciudad</label>
                <input
                 type="text" 
                 className="form-control bg-white"
                  placeholder="Coloca tu ciudad" 
                  name="ciudad" 
                  id="ciudad"
                  value={ciudad}
                   onChange={handleChange}
                   />

                <div class="form-group mt-4 ">
                    <label for="pais">Seleccionar País</label>
                    <select
                     class="form-control" 
                     id="pais" 
                     name="pais"
                      value={pais}
                      onChange={handleChange}
                      >
                        <option value="">Pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
            </div>

            <div>
                <input 
                type="submit"
                value="Buscar Clima"
                className="btn btn-primary w-100"
                />
            </div>
        </form>
     );
}


Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    setBusqueda : PropTypes.func.isRequired,
    setConsultar : PropTypes.func.isRequired
}
 
export default Formulario;