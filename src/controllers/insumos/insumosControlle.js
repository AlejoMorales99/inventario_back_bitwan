const insumosModel = require("../../model/insumos/insumos.modal");
const validarToken = require("../../validarTokenServicios/validarToken.js");

async function getAllInsumos(req, res) {
  
  try {

    const token = req.headers.authorization.split(" ")[1]; // Obtengo el token del encabezado de la solicitud
   
    if (!token) {
      // Si no se proporciona un token, se devuelve un código de estado 401 con un mensaje indicando que el token no fue proporcionado.
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const data = await validarToken(token);

    if (data.code == 200) {

      const numeroTerceroUsuario = req.params.numeroTercero;
      

      const getAllInsumos = await insumosModel.getAllInsumos(numeroTerceroUsuario);

      res.status(200).json(getAllInsumos);

    }else{
      console.log("Autorizacion invalida");
      return res.status(401).json({ message: 'Token inválido' });
    }
    
  } catch (error) {
    console.log("Error en listar los insumos " + error);
    return res.status(401).json({mensaje: "Error al listar los insumos"})
  }
}

async function getAllHistorialInsumos(req, res) {
  
  try {

    const token = req.headers.authorization.split(" ")[1]; // Obtengo el token del encabezado de la solicitud
   
    if (!token) {
      // Si no se proporciona un token, se devuelve un código de estado 401 con un mensaje indicando que el token no fue proporcionado.
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const data = await validarToken(token);

    if (data.code == 200) {

      const getAllHistorialInsumos = await insumosModel.getAllHistorialInsumos();

      res.status(200).json(getAllHistorialInsumos);

    }else{
      console.log("Autorizacion invalida");
      return res.status(401).json({ message: 'Token inválido' });
    }
    
  } catch (error) {
    console.log("Error en listar el historial de las compras " + error);
    return res.status(401).json({mensaje: "Error al listar el historial de las compras"})
  }
}

async function getInsumosFechaInicioFechFin(req, res) {
  
  try {

    const token = req.headers.authorization.split(" ")[1]; // Obtengo el token del encabezado de la solicitud
   
    if (!token) {
      // Si no se proporciona un token, se devuelve un código de estado 401 con un mensaje indicando que el token no fue proporcionado.
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const data = await validarToken(token);

    if (data.code == 200) {

      const fechaInicio = req.params.fechaInicio;
      const fechaFin = req.params.fechaFin;
      const insumoTextHistorial = req.params.insumoTextHistorial

      const getAllHistorialInsumos = await insumosModel.getInsumosFechaInicioFechFin(fechaInicio,fechaFin,insumoTextHistorial);

      res.status(200).json(getAllHistorialInsumos);

    }else{
      console.log("Autorizacion invalida");
      return res.status(401).json({ message: 'Token inválido' });
    }
    
  } catch (error) {
    console.log("Error en listar el historial de las compras " + error);
    return res.status(401).json({mensaje: "Error al listar el historial de las compras"})
  }
}

async function postInsumosExistentes(req, res) {
  
  try {

    const token = req.headers.authorization.split(" ")[1]; // Obtengo el token del encabezado de la solicitud
   
    if (!token) {
      // Si no se proporciona un token, se devuelve un código de estado 401 con un mensaje indicando que el token no fue proporcionado.
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const data = await validarToken(token);

    if (data.code == 200) {

      const nuevoInsumos = req.body.nuevoInsumos;
      const cantidadNuevoInsumos = req.body.cantidadNuevoInsumos;
      const proveedor = req.body.proveedor;
      const marcaText = req.body.marcaText;
      const usuario = req.body.usuario;

      const cantidadSinPuntos = parseInt(cantidadNuevoInsumos.replace(/\./g, ''), 10);

      const postInsumosExistentes = await insumosModel.postInsumosExistentes(nuevoInsumos,cantidadSinPuntos,proveedor,marcaText,usuario);

      if(postInsumosExistentes == 1){

        res.status(200).json({mensaje: "Insumo aumentado con exito",estado:200});

      }else{
        res.status(422).json({mensaje: "Error al aumentar el insumo",estado:500});
      }


    }else{
      console.log("Autorizacion invalida");
      return res.status(401).json({ message: 'Token inválido' });
    }
    
  } catch (error) {
    console.log("Error en aumentar los insumos " + error);
    return res.status(401).json({mensaje: "Error al aumentar los insumos"})
  }
}



async function postInsumoNuevo(req, res) {
  
  try {

    const token = req.headers.authorization.split(" ")[1]; // Obtengo el token del encabezado de la solicitud
   
    if (!token) {
      // Si no se proporciona un token, se devuelve un código de estado 401 con un mensaje indicando que el token no fue proporcionado.
      return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const data = await validarToken(token);

    if (data.code == 200) {

      const nuevoInsumos = req.body.nuevoInsumos;
      const cantidadNuevoInsumos = req.body.cantidadNuevoInsumos;
      const stockMinimo = req.body.stockMinimo;
      const proveedor = req.body.proveedor;
      const marcaText = req.body.marcaText;
      const usuario = req.body.usuario;

      const cantidadSinPuntos = parseInt(cantidadNuevoInsumos.replace(/\./g, ''), 10);
   

       const postInsumoNuevo = await insumosModel.postInsumoNuevo(nuevoInsumos,cantidadSinPuntos,stockMinimo,proveedor,marcaText,usuario); 

       if(postInsumoNuevo == 1){

        res.status(200).json({mensaje: "Insumo registrado con exito",estado:200});

      }else if(postInsumoNuevo == 2){
        res.status(200).json({mensaje: "Este insumo ya existe",estado:409});
      }else{
        res.status(200).json({mensaje: "error al registrar el insumo",estado:500});
      }


    }else{
      console.log("Autorizacion invalida");
      return res.status(401).json({ message: 'Token inválido' });
    }
    
  } catch (error) {
    console.log("Error en registrar los insumos " + error);
    return res.status(401).json({mensaje: "Error al registrar los insumos"})
  }
}

module.exports = {
  getAllInsumos,
  getAllHistorialInsumos,
  getInsumosFechaInicioFechFin,
  postInsumosExistentes,
  postInsumoNuevo
};
