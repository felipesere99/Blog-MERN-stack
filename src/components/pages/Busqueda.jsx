import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Global } from '../helper/Global';
import { Peticion } from '../helper/Peticion';
import { Listado } from './Listado';

export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "buscar/"+params.busqueda, "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulosEncontrados);
    } else {
      setArticulos([]);
    }

    setCargando(false)
    console.log(datos)
  }
  

  return (
    <>
      {cargando ? "Cargando..." :
        (
          articulos.length >= 1 ?
            <Listado articulos={articulos} setArticulos={setArticulos}/>
            : <h1>No hay articulos!</h1>
        )}

    </>
  )
}
