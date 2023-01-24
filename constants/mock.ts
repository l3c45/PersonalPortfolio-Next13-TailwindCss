export const workExp = [
  {
    name: "NoCountry",
    date: "Nov-Dec 2022",
    description: "Dessarrollamos una aplicacion movil",
  },
  {
    name: "Independiente",
    date: "Nov-Dec 2022",
    description: "Reparacion de pc y notebooks , Armado de redes",
  },
];
export const educationExp = [
  {
    name: "EEST N°2",
    date: "Nov-Dec 2022",
    description: "Tecnico Electromecanico",
  },
  { name: "ICAI", date: "Nov-Dec 2020", description: "Administrador de redes" },
  {
    name: "ICAI",
    date: "Nov-Dec 2019",
    description: "Reparacion de Pc y soporte",
  },
  {
    name: "Rockwell INC",
    date: "Nov-Dec 2015",
    description: "Fundamentos de la programacion ,Programacion RsLogix 5000",
  },
];

export const exp = [
  { title: "Trabajo", data: workExp },
  { title: "Educacion", data: educationExp },
];

export const proyects = [
  {
    imgUrl: "/task.png",
    title: "TASKS Manager",

    subtitle:
      "Aplicacion WEB para gestionar tareas al estilo de Trello.Implementación de Static Generation y Server Side Rendering.Uso de cookies para establecer el tema . Peristencia de datos mediante API que almacena información en MongoDB ",

    git: "https://github.com/l3c45/TaskManager-NextJs-MUI",
    demo: "https://task-manager-next-js-mui.vercel.app/",
    tech: [1, 3, 9, 13],
  },
  {
    imgUrl: "/ardruino.jpg",
    title: "PowerMetter",

    subtitle:
      "Dispositivo que mide los niveles de potencia, tensión del suministro eléctrico y almecena los datos en DB. Web para visualización de registros e informacion en tiempo real .   Implementacion de bot Whatsapp en curso.",

    git: "https://github.com/l3c45/PowerMetter",
    demo: "https://merry-puppy-89d7fb.netlify.app/",
    tech: [1, 10, 2, 6],
  },

  {
    imgUrl: "/monshine.png",
    title: "Monshine App",

    subtitle:
      "Aplicación Móvil (Android) para gestión de clientes, ventas e inventario. Creación de perfiles, generación de facturas y reportes. Integración con funciones nativas del SO. Uso de Places Api de Google",

    git: "https://github.com/No-Country/C8-79-ft-ReactNative",
    demo: "https://github.com/No-Country/C8-79-ft-ReactNative/releases/download/v1.0.0/monshine.apk",
    tech: [4, 8, 5, 17, 18],
  },
  {
    imgUrl: "/coinapp.png",
    title: "CoinApp",

    subtitle:
      "Aplicación Móvil (Android) que consume Api y muestra información acerca de las distintas criptomonedas. Detalle de las últimas 24hs. Creación de usuarios para almacenar favoritos. Sección que permite enviar mensajes entre los usuarios registrados en la app.",

    git: "https://github.com/l3c45/ReactNative-CoinApp",
    demo: "https://github.com/l3c45/ReactNative-CoinApp",
    tech: [4, 8, 5, 19],
  },
  {
    imgUrl: "/tvgl.png",
    title: "The Game Library",
    subtitle:
      "Página web que consume una API y muestra los resultados. Posee scroll infinito, pantalla de carga entre páginas. Uso de enrutamiento dinámico y uso de Server Side Rendering. Buscador. Completamente Responsiva",
    git: "https://github.com/l3c45/NextJS-Tailwind-GameLibrary",
    demo: "https://next-js-tailwind-game-library.vercel.app/",
    tech: [3, 12, 19],
  },

  {
    imgUrl: "/encriptador.png",
    title: "Encriptador de Texto",

    subtitle:
      "Pagina construida con JS y Css responsivo , forma parte de un Challengue del bootcamp ONE – Oracle Next Education",

    git: "https://github.com/l3c45/Alura-Challengue-ONE",
    demo: "https://l3c45.github.io/Alura-Challengue-ONE",
    tech: [0, 11],
  },

  {
    imgUrl: "/regalos.png",
    title: "Adviency App",

    subtitle:
      "SPA construida con React. Consiste en un listado de regalos , al cual se pueden añadir nuevos, eliminar , editar o duplicar los existentes. Almacena la información en LocalStorage.",

    git: "https://github.com/l3c45/Adviency-Reto-Gonzalo-Pozzo",
    demo: "https://gleeful-brioche-7b7081.netlify.app/",
    tech: [2, 11, 16],
  },
  {
    imgUrl: "/timestamp.png",
    title: "Convertidor de Timestamp Microservicio",
    subtitle:
      "API que devuelve la fecha introducida al formato UTC y viceversa",
    git: "https://github.com/l3c45/MicroService-Timestamp-Node",
    demo: "https://github.com/l3c45/MicroService-Timestamp-Node",
    tech: [6, 7],
  },
  {
    imgUrl: "/url.png",
    title: "Acortador de Url Microservicio",
    subtitle: "API que devuelve la url acordata y viceversa",
    git: "https://github.com/l3c45/-Microservice-UrlShortener",
    demo: "https://github.com/l3c45/-Microservice-UrlShortener",
    tech: [6, 7],
  },
];
