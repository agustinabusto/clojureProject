-- noinspection SqlDialectInspectionForFile

-- :name get-buscar-proveedor-por-login :? :1
-- :doc retrieve a user given the username.
SELECT
	prov.idProveedor, prov.nombre, prov.codigo, prov.direccionLegal, prov.tel, prov.fax, prov.fechaAlta, prov.condicionTributaria, prov.cuentaDeposito, prov.email
	FROM Facturacion.Proveedor as prov
	WHERE prov.userLogin = :username;

-- :name get-buscar-proveedor-por-login-post :? :1
-- :doc probando post con body params
SELECT
	prov.idProveedor, prov.nombre, prov.codigo, prov.direccionLegal, prov.tel, prov.fax, prov.fechaAlta, prov.condicionTributaria, prov.cuentaDeposito, prov.email, prov.userLogin, prov.password, prov.cuit
	FROM Facturacion.Proveedor as prov
	WHERE prov.userLogin = :username
	and prov.password = :password;

-- :name get-buscar-solicitudes-proveedor-facturables :? :*
-- :doc Obtiene todas las Ordenes de Servicio o Solicitudes que posee el proveedor asignadas. En estado Facturable.
select
   sol.idSolicitud, sol.nroSolicitud, sol.idCliente, sol.estadoSolicitud, sol.descripcionEstado
   , cli.razonSocial, cli.cuit, cli.tipoPago
   , ordenServ.detalleServicio, ordenServ.idOrdenServicio, ordenServ.estado, ordenServ.nroOrdenServicio,  ordenServ.lugarEntrega, ordenServ.fechaEntrega
   , ordenCompra.nroOrdenCompra, ordenCompra.fechaEmision, ordenCompra.cantidad, ordenCompra.precioUnitario, ordenCompra.importe, ordenCompra.totalOC
   , ordenCompra.netoSIVA, ordenCompra.totalCIVA
   from Facturacion.Solicitud as sol
                        inner join Facturacion.Cliente as cli on cli.idCliente = sol.idCliente
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        inner join Facturacion.OrdenServicio as ordenServ on ordenServ.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as ordenCompra on ordenCompra.idOrdenCompra = sol.idOrdenCompra
                        where sol.idProveedor =  :idproveedor
                        and sol.estadoSolicitud = 'EN_CURSO';


-- :name get-buscar-lista-solicitudes-proveedor :? :*
-- :doc Obtiene todas las Ordenes de Servicio o Solicitudes que posee el proveedor asignadas. En cualquier estado que no sea EN_CURSO
select
   sol.idSolicitud, sol.nroSolicitud, sol.idCliente, sol.estadoSolicitud, sol.descripcionEstado
   , cli.razonSocial, cli.cuit, cli.tipoPago
   , ordenServ.detalleServicio, ordenServ.idOrdenServicio, ordenServ.estado, ordenServ.nroOrdenServicio,  ordenServ.lugarEntrega, ordenServ.fechaEntrega
   , ordenCompra.nroOrdenCompra, ordenCompra.fechaEmision, ordenCompra.cantidad, ordenCompra.precioUnitario, ordenCompra.importe, ordenCompra.totalOC
   , ordenCompra.netoSIVA, ordenCompra.totalCIVA
   from Facturacion.Solicitud as sol
                        inner join Facturacion.Cliente as cli on cli.idCliente = sol.idCliente
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        inner join Facturacion.OrdenServicio as ordenServ on ordenServ.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as ordenCompra on ordenCompra.idOrdenCompra = sol.idOrdenCompra
                        where sol.idProveedor =  :idproveedor
                        and sol.estadoSolicitud != 'EN_CURSO';


-- :name get-buscar-solicitudes-proveedor-gestion :? :*
-- :doc Obtiene todas las Ordenes de Servicio o Solicitudes que posee el proveedor asignadas. Estado en Gestion ( Pendientes de ser facturables).
select
   sol.idSolicitud, sol.nroSolicitud, sol.idCliente, sol.estadoSolicitud, sol.descripcionEstado
   , ordenServ.detalleServicio, ordenServ.idOrdenServicio, ordenServ.estado, ordenServ.nroOrdenServicio,  ordenServ.lugarEntrega, ordenServ.fechaEntrega
   , ordenCompra.nroOrdenCompra, ordenCompra.fechaEmision, ordenCompra.cantidad, ordenCompra.precioUnitario, ordenCompra.importe, ordenCompra.totalOC
   , ordenCompra.netoSIVA, ordenCompra.totalCIVA
   from Facturacion.Solicitud as sol
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        inner join Facturacion.OrdenServicio as ordenServ on ordenServ.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as ordenCompra on ordenCompra.idOrdenCompra = sol.idOrdenCompra
                        where sol.idProveedor =  :idproveedor
                        and sol.estadoSolicitud = 'EN_GESTION';

-- :name get-buscar-solicitudes-proveedor-rechazada :? :*
-- :doc Obtiene todas las Ordenes de Servicio o Solicitudes que posee el proveedor asignadas. Estado en Rechazadas por el cliente.
select
   sol.idSolicitud, sol.nroSolicitud, sol.idCliente, sol.estadoSolicitud, sol.descripcionEstado
   , ordenServ.detalleServicio, ordenServ.idOrdenServicio, ordenServ.estado, ordenServ.nroOrdenServicio,  ordenServ.lugarEntrega, ordenServ.fechaEntrega
   , ordenCompra.nroOrdenCompra, ordenCompra.fechaEmision, ordenCompra.cantidad, ordenCompra.precioUnitario, ordenCompra.importe, ordenCompra.totalOC
   , ordenCompra.netoSIVA, ordenCompra.totalCIVA
   from Facturacion.Solicitud as sol
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        inner join Facturacion.OrdenServicio as ordenServ on ordenServ.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as ordenCompra on ordenCompra.idOrdenCompra = sol.idOrdenCompra
                        where sol.idProveedor =  :idproveedor
                        and sol.estadoSolicitud = 'RECHAZADA';

-- :name get-buscar-solicitudes-proveedor-aprobada :? :*
-- :doc Obtiene todas las Ordenes de Servicio o Solicitudes que posee el proveedor asignadas. Estado en Aprobadas, pendiente de tomar por mesa de entrada por el cliente.
select
   sol.idSolicitud, sol.nroSolicitud, sol.idCliente, sol.estadoSolicitud, sol.descripcionEstado
   , ordenServ.detalleServicio, ordenServ.idOrdenServicio, ordenServ.estado, ordenServ.nroOrdenServicio,  ordenServ.lugarEntrega, ordenServ.fechaEntrega
   , ordenCompra.nroOrdenCompra, ordenCompra.fechaEmision, ordenCompra.cantidad, ordenCompra.precioUnitario, ordenCompra.importe, ordenCompra.totalOC
   , ordenCompra.netoSIVA, ordenCompra.totalCIVA
   from Facturacion.Solicitud as sol
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        inner join Facturacion.OrdenServicio as ordenServ on ordenServ.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as ordenCompra on ordenCompra.idOrdenCompra = sol.idOrdenCompra
                        where sol.idProveedor =  :idproveedor
                        and sol.estadoSolicitud = 'APROBADA';

-- :name get-obtener-solicitante-por-id :? :1
-- :doc Obtiene el objeto solicitante desde su id
select * from Facturacion.Solicitante where idSolicitante = :id-solicitante;

-- :name get-obtener-cliente-por-id :? :1
-- :doc Obtiene el objeto cliente desde su id
select * from Facturacion.Cliente where idCliente = :id-cliente;

-- :name get-obtener-solicitud-por-id :? :1
-- :doc Obtiene una solicitud por ID.
select  sol.idSolicitud, sol.nroSolicitud, sol.idCliente,
                                solic.nombreApellido, solic.fechaInicio,
                                os.idOrdenServicio, os.lugarEntrega, os.fechaEntrega,
                                oc.nroOrdenCompra, oc.fechaEmision, oc.cantidad, oc.precioUnitario, oc.importe, oc.totalOC, oc.netoSIVA, oc.totalCIVA,
                                prov.codigo
                from Facturacion.DetalleSolicitud as detSol, Facturacion.Solicitud as sol
                        inner join Facturacion.Solicitante as solic on solic.idSolicitante = sol.idSolicitante
                        inner join Facturacion.OrdenServicio as os on os.idOrdenServicio = sol.idOrdenServicio
                        inner join Facturacion.OrdenCompra as oc on oc.idOrdenCompra = sol.idOrdenCompra
                        inner join Facturacion.Proveedor as prov on prov.idProveedor = sol.idProveedor
                        where  sol.idSolicitud  = :idsolicitud


-- :name get-obtener-proveedor-por-id :? :1
-- :doc Obtiene al proveedor por su id
select
   prov.idProveedor, prov.nombre, prov.codigo, prov.direccionLegal, prov.tel, prov.fax, prov.fechaAlta, prov.condicionTributaria, prov.cuentaDeposito, prov.email, prov.cuit
    from Facturacion.Proveedor as prov
    where idProveedor = :idproveedor;

-- :name post-guardar-detalle-factura :<!
-- :doc guarda los datos del detalle de la factura cargada por el proveedor
insert into Facturacion.DetalleFactura
OUTPUT Inserted.idFactura
  values(
          :codigo,
          :detalle,
          :cantidad,
          :idfactura,
          :preciounitario,
          :precioTotalCantidad,
          :idDetalleDocumento
  )


-- :name post-guardar-factura :<!
-- :doc guarda los datos de la factura cargados por el proveedor
 insert into Facturacion.Facturas
 OUTPUT Inserted.idFactura
        values(
               									       :tipolegal,
                                       :importeparcial,
                                       :importetotal,
                                       :tipofactura,
                                       :cae,
                                       :cai,
                                       :idproveedor,
                                       :fechafactura,
                                       'INICIADA',
                                       :tipoletrafactura,
                                       :porcentajeimpuesto,
                                       :descripcionfactura,
                                       :fechavencimientocae,
                                       :fechavencimientocai,
                                       'INICIADA',
                                       :cuit,
                                       :notas

        )
      ;

-- :name guardar-documentos-adjuntos :<!
-- :doc guarda la url del documento adjunto por el usuario para la factura en el servidor
 insert into Facturacion.DocumentosAdjuntos
        OUTPUT Inserted.idDocumentoAdjunto
        values(
                :idFactura,
                :nombre,
                :path
        )
      ;
