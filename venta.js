const propiedades = [
  {
    id: 1,
    disponibilePara: "venta",
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcionimagen: "Imagen del departamento",
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    precio: "5.000",
    fumarPermitido: false,
    mascotaPermitida: false,
  },
  {
    id: 2,
    disponibilePara: "venta",
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcionimagen: "Imagen casa rodante en el lago",
    titulo: "Casa rodante para ir a la montaña",
    descripcion:
      "Esta casa rodante permite hacer viajes familiares para estar en contacto con la naturaleza",
    ubicacion: "89 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    precio: "1.200",
    fumarPermitido: true,
    mascotaPermitida: true,
  },
  {
    id: 3,
    disponibilePara: "venta",
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcionimagen: "Imagen de la mansión",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue,Skyview City, CA 56789",
    habitaciones: 7,
    baños: 6,
    precio: "8.900",
    fumarPermitido: false,
    mascotaPermitida: true,
  },
  {
    id: 4,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen del departamento",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    precio: "2.000",
    fumarPermitido: false,
    mascotaPermitida: true,
  },
  {
    id: 5,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1564454941998-ca87e7cc6fee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen del departamento",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    precio: "2.500",
    fumarPermitido: true,
    mascotaPermitida: true,
  },
  {
    id: 6,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen del departamento",
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    precio: "2.200",
    fumarPermitido: false,
    mascotaPermitida: false,
  },
  {
    id: 7,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen de la mansión",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue,Skyview City, CA 56789",
    habitaciones: 7,
    baños: 6,
    precio: "8.900",
    fumarPermitido: true,
    mascotaPermitida: true,
  },
  {
    id: 8,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen del departamento",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    precio: "2.000",
    fumarPermitido: false,
    mascotaPermitida: false,
  },
  {
    id: 9,
    disponibilePara: "venta",
    imagen:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcionimagen: "Imagen del departamento",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    precio: "2.500",
    fumarPermitido: true,
    mascotaPermitida: false,
  },
];

nuevaTarjeta = (prop) => {
  let card;
  let permiteFumar = "";
  let permiteMascotas = "";
  let iconoFumar = "";
  let iconoMascota = "";
  let textoRestriccionFumar = "";
  let textoRestriccionMascota = "";

  if (prop.fumarPermitido && true) {
    permiteFumar = "Permitido Fumar";
    iconoFumar = "fas fa-smoking";
    textoRestriccionFumar = "text-success";
  } else {
    permiteFumar = "No se permite fumar";
    iconoFumar = "fas fa-smoking-ban";
    textoRestriccionFumar = "text-danger";
  }

  if (prop.mascotaPermitida && true) {
    permiteMascotas = "Mascotas permitidas";
    iconoMascota = "fas fa-paw";
    textoRestriccionMascota = "text-success";
  } else {
    permiteMascotas = "No se permiten mascotas";
    iconoMascota = "fa-solid fa-ban";
    textoRestriccionMascota = "text-danger";
  }

  card = `<div class="col-md-4 mb-4">
    <div class="card">
      <img
      src=${prop.imagen}
      class="card-img-top"
      alt=${prop.descripcionimagen}
      />
      <div class="card-body">
        <h5 class="card-title">
          ${prop.titulo}
        </h5>
        <p class="card-text">
          ${prop.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${prop.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${prop.precio}</p>
        <p class="${textoRestriccionFumar}">
          <i class="${iconoFumar}"></i> ${permiteFumar} 
        </p>
        <p class="${textoRestriccionMascota}">
          <i class="${iconoMascota}"></i> ${permiteMascotas}
        </p>
      </div>
    </div>
  </div>`;

  return card;
};

let tarjetasPropArriendo = "";
let tarjetasPropVenta = "";

for (let propiedad of propiedades) {
  if (propiedad.disponibilePara == "venta") {
    tarjetasPropArriendo += nuevaTarjeta(propiedad);
  }
}

/* Crear Secciones del Contenedor de Tarjetas*/
let secciones = "";

secciones = `

<section id="alquiler" class="mb-5">
  <h1>Todas nuestras propiedades en venta</h1>
  <div class="row">
    ${tarjetasPropArriendo}
  <div>
</section>`;

const seccionesHtml = document.querySelector(".contenedor_propiedades");

seccionesHtml.innerHTML = secciones;
