// **** dado un arreglo realizar funciones de filtrado para cumplir con el objetivo
let personas = [
    {
      nombre: "Jhony",
      asistente: null,
      seccion: "gold",
      rol: "speaker"
    },
    {
      nombre: "Manuel",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Fran",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Cintia",
      seccion: "platino",
      rol: "viewer"
    },
    {
      nombre: "Marcos",
      asistente: null,
      seccion: "gold",
      rol: "viewer"
    },
    {
      nombre: "Victoria",
      asistente: true,
      seccion: "platino",
      rol: "speaker"
    }
  ];
  
  function asistentes(listaPersonas) {
    /**
     * Esta fución debe calcular el total de asistentes
     * según una lista de personas.
     *
     * Se considera que una persona esta "asistente" si
     * la propiedad respectiva es distinta a null y undefined
     *
     * La función debe retornar el número de asistencias.
     */
    return listaPersonas.filter(
      (persona) => persona.asistente !== undefined && persona.asistente !== null
    ).length;
  }
  
  function getAsistentes(listaPersonas) {
    return listaPersonas.filter((persona) => persona.asistente === true);
  }
  
  function getAsistentesPlatino(listaPersonas) {
    return listaPersonas.filter((persona) => persona.seccion === "platino");
  }
  
  let totalAsistentes = asistentes(personas);
  console.log(totalAsistentes); // debe ser 3
  
  let listaAsistentes = getAsistentes(personas);
  console.log(listaAsistentes);
  
  let listaAsistentesPlatino = getAsistentesPlatino(personas);
  console.log(listaAsistentesPlatino);
  