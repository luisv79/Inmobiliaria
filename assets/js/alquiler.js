const propiedadesAlquiler = [
    {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        titulo: "Apartamento en el centro de la ciudad",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccion: "123 Main Street, Anytown, CA 91234",
        cantidadHabitacion: 2,
        cantidadBano: 2,
        precio: "2.000",
        smoke: true,
        pets: false
    },
    {
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        titulo: "Apartamento luminoso con vista al mar",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
        direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
        cantidadHabitacion: 3,
        cantidadBano: 3,
        precio: "2.500",
        smoke: true,
        pets: true
    },
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        titulo: "Apartamento luminoso con vista al mar",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
        direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
        cantidadHabitacion: 3,
        cantidadBano: 3,
        precio: "2.500",
        smoke: false,
        pets: true
    }
]

const seccionAlquiler = document.querySelector("#alquilerSeccion");

for (const propiedad of propiedadesAlquiler) {
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
    const plantillaAlquiler = `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
              src = "${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
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
                  <i class="fas fa-bed"></i>  ${propiedad.cantidadHabitacion} Habitaciones |
                  <i class="fas fa-bath"></i>  ${propiedad.cantidadBano} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                <p class="${claseFumar}">${iconoFumar} ${mensajeFumar}</p>
                <p class="${claseMascotas}">${iconoMascotas} ${mensajeMascotas}</p>
              </div>
            </div>
          </div>
    `;
    seccionAlquiler.innerHTML += plantillaAlquiler;
}