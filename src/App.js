import React, {Fragment, useState, useEffect} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Clima from './component/Clima';
import Error from './component/Error';


function App() {

 //state del formulario
  const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: ''
    });

  const [consultar, setConsultar] = useState(false); 
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false) 


    const {ciudad, pais} = busqueda;

    useEffect(() => {
     const consultarAPI = async () => {

        if(consultar){
          
          const appId = `c005a35f04b7614cbcf32ab7e1c6516c`;
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

          const respuesta = await fetch(url)
          const resultado = await respuesta.json();

          setResultado(resultado);
          setConsultar(false);

          //verifica si hay errores en la consulta
          if(resultado.cod === "404"){
            setError(true);
          }else{
            setError(false);
          };

        }
      
     }
      consultarAPI();
    }, [consultar])

    let componente;

    if(error){
      componente = <Error mensaje="No hay resultados" />
    }else{
     componente =  <Clima 
          resultado={resultado}
      />
    }


  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-md-6">
             <Formulario 
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
             />
            </div>
            <div className=" col-12 col-md-6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
