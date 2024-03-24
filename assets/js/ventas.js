const propiedadesVentas = [
    {
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        titulo: "Apartamento de lujo en zona exclusiva",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        cantidadHabitacion: 2,
        cantidadBano: 4,
        precio: "5.000",
        smoke: true,
        pets: false
    },
    {
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        titulo: "Apartamento acogedor en la montaña",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road, Summit Peaks, CA 23456",
        cantidadHabitacion: 2,
        cantidadBano: 1,
        precio: "1.200",
        smoke: false,
        pets: true
    },
    { 
        src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        titulo: "Penthouse de lujo con terraza panorámica",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        cantidadHabitacion: 3,
        cantidadBano: 3,
        precio: "4.500",
        smoke: false,
        pets: false
    }

]

const seccionVentas = document.querySelector("#ventaSeccion");

for (const propiedad of propiedadesVentas) {
    let mensajeFumar = "";
    let mensajeMascotas = "";
    let iconoFumar = "";
    let iconoMascotas = "";
    let claseFumar = "";
    let claseMascotas = "";

    if (propiedad.smoke) {
        mensajeFumar = "Se permite fumar";
        iconoFumar = `<i class="fas fa-smoking"></i>`;
        claseFumar = "text-success";
    } else {
        mensajeFumar = "No se permite fumar";
        iconoFumar = `<i class="fas fa-smoking-ban"></i>`;
        claseFumar = "text-danger";
    }

    if (propiedad.pets) {
        mensajeMascotas = "Se permiten mascotas";
        iconoMascotas = `<i class="fas fa-dog"></i>`;
        claseMascotas = "text-success";
    } else {
        mensajeMascotas = "No se permiten mascotas";
        iconoMascotas = `<i class="fas fa-ban"></i>`;
        claseMascotas = "text-danger";
    }
    const plantillaventas = `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img src = "${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="card-title">
                 ${propiedad.titulo}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.cantidadHabitacion} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.cantidadBano} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                <p class="${claseFumar}">${iconoFumar} ${mensajeFumar}</p>
                <p class="${claseMascotas}">${iconoMascotas} ${mensajeMascotas}</p>
              </div>
            </div>
          </div>
    `;
   
    
    seccionVentas.innerHTML += plantillaventas;
   }
    
        
        