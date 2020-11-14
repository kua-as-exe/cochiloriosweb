export const homePageLogo = "img/logo.png";
export const whatsappLogoUrl = "img/misc/whatsappicon.png";
export const cochiloriosNavbarLogo = "img/logo-cochilorios.png";

export const minCost = 100;
export const WhatsappNumber = '+5212222798807'
export const whatsappMessageLabels = [
    'Va, enviar',
    'Vamos allá!',
    'Quiero mi chilorio!'
]
export const orderModalTitleLabels = [
    'Estamos listos! 🚀',
    'Amonos! ✈',
    'Ya viene 🐷, ya le marqué a su nextel 📱'
]

export const random = (list) => list[Math.floor((Math.random()*list.length))];

export const products = {
    frijolesConChorizo:{
        title: "Frijoles con chorizo",
        unit: 'Bote de 500g',
        text: "Rico frijol con chorizo de la casa",
        cost: 30,
        imgUrl: "img/productos/chilofrijol.png",
    },
    chilorioConPapas:{
        title: "Chilorio con papas",
        unit: 'Bote de 500g',
        text: "Chilorio con papas guisado a la mexicana",
        cost: 75,
        imgUrl: "img/productos/chilorioconpapas.png",
    },
    chorizoConPapas:{
        title: "Chorizo con papas",
        unit: 'Bote de 500g',
        text: "Chorizo con papas guisado a la mexicana",
        cost: 60,
        imgUrl: "img/productos/chorizoconpapas.png",
    },
    chilorio:{
        title: "Chilorio",
        unit: 'Bote de 250g',
        text: "De pierna de puerco, con poca grasa, chiles secos y especias",
        cost: 50,
        imgUrl: "img/productos/chilorio.png",
    },
    chorizo:{
        title: "Chorizo",
        unit: 'Bolsa de 200g',
        text: "De pierna de puerco 80-20, chiles secos y especias",
        cost: 25,
        imgUrl: "img/productos/chorizo.png",
    },
    GalletasDeAvena:{
        title: "Galleta de Avena",
        unit: "Bolsa de 3 piezas",
        text: "Con arandanos deshidratados",
        cost: 10,
        imgUrl: "img/productos/GalletasDeAvena.png",
    },
    coricos:{
        title: "Coricos",
        unit: "Bolsa de 6 piezas",
        text: "Tradicionales galletas de harina de maiz, dulces y crujientes!",
        cost: 10,
        imgUrl: "img/productos/coricos.png",
    },
    tortillas:{
        title: "Tortillas de harina",
        unit: "Bolsa de 15 piezas (500g)",
        text: "Tortillas de harina caseras",
        cost: 25,
        imgUrl: "img/productos/tortillas.png",
    },
    tamalDulce:{
        title: "Tamal de Elote Dulce",
        unit: 'Paquete: 1 Tamal (130g)',
        text: "Con granos de Elote tiernos recién molidos y endulzados con azúcar",
        cost: 15,
        imgUrl: "img/productos/tamalDulce.png",
    },
    tamalRajas:{
        title: "Tamal de Elote con Rajas y Queso",
        unit: 'Paquete: 1 tamal (145g)',
        text: "El queso es chihuahua y las rajas son poblanas",
        cost: 16,
        imgUrl: "img/productos/tamalRajas.png",
    },
    tamalChilorio:{
        title: "Tamal de Elote con Chilorio",
        unit: 'Paquete: 1 tamal (150g)',
        text: "Con chilorio guisado a la mexicana",
        cost: 16,
        imgUrl: "img/productos/tamalChilorio.png",
    },
}

export const sections = {
    carnicos: {
        text: 'Cárnicos',
        products: ['chilorio', 'chorizo']
    },
    harinasYPostres: {
        text: 'De Harinas y Postres',
        products: ['tortillas', "GalletasDeAvena", 'coricos']
    },
    deLaHornilla: {
        text: 'De la hornilla',
        products: ["tamalDulce", 'tamalRajas', 'tamalChilorio', 'frijolesConChorizo', 'chilorioConPapas', 'chorizoConPapas']
    }
}

export const homeCarouselConfig = {
    //navigationSwipe: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    duration: 300,
    //pauseOnHover: true,
    autoplaySpeed: 4000,
    autoplay: true,
}
export const homeCarouselItems = [
    {
      "img": "img/carrusel/A.jpg",
      "title": "Bienvenido a Cochilorios",
      "subtitle": "Chilorio en bote de 250g",
      "text": ""
    },
    {
      "img": "img/carrusel/B.jpg",
      "title": "En esta página",
      "subtitle": "Huevos con Chilorio",
      "text": ""
    },
    {
      "img": "img/carrusel/C.png",
      "title": "Encontrarás nuestro catálogo de",
      "subtitle": "Frijoles con Chorizo, Chilorio y Tortillas de Harina",
      "text": ""
    },
    {
      "img": "img/carrusel/D.jpg",
      "title": "PRODUCTOS ALIMENTICIOS",
      "subtitle": "Tamales de Elote: Dulces, con Rajas y Queso, y con Chilorio",
      "text": "",
      "size": 4
    },
    {
      "img": "img/carrusel/E.jpg",
      "title": "Para que puedas",
      "subtitle": "Galletas de Avena en el Horno",
      "text": ""
    },
    {
      "img": "img/carrusel/F.jpg",
      "title": "Seleccionar y Pedir..",
      "subtitle": "Chilorio, Frijoles con Chorizo y Tortillas de Harina",
      "text": ""
    },
    {
      "img": "img/carrusel/G.jpg",
      "title": "Nosotros te los llevamos",
      "subtitle": "Burritos de Chilorio",
      "text": ""
    },
    {
      "img": "img/carrusel/H.jpg",
      "title": "Son Sabrosos Productos",
      "subtitle": "Tamal de Elote con Chilorio",
      "text": ""
    },
    {
      "img": "img/carrusel/I.jpg",
      "title": "Con un estilo Norteño..",
      "subtitle": "Tamal de Elote con rajas y queso",
      "text": ""
    },
    {
      "img": "img/carrusel/J.jpg",
      "title": "Escoge lo que se te antoje",
      "subtitle": "Tamal de Elote Dulce",
      "text": ""
    },
    {
      "img": "img/carrusel/K.jpg",
      "title": "Llena tus datos",
      "subtitle": "Galletas de Avena y Coricos",
      "text": ""
    },
    { //
      "img": "img/carrusel/L.jpg",
      "title": "Dinos la fecha y hora de entrega",
      "subtitle": "Usamos Ingredientes 100% Naturales",
      "text": ""
    },
    {
      "img": "img/carrusel/M.jpg",
      "title": "Oprime \"Quiero mi Comida\"",
      "subtitle": "Con métodos tradicionales",
      "text": ""
    },
    { //
      "img": "img/carrusel/N.jpg",
      "title": "y entraremos en contacto contigo",
      "subtitle": "Tacos de Chilorio con Frijol",
      "text": ""
    },
    { //
      "img": "img/carrusel/O.jpg",
      "title": "por WhatsApp",
      "subtitle": "Tortas de Chilorio con Queso",
      "text": ""
    },
    {
      "img": "img/carrusel/P.png",
      "title": "¡Nos vemos pronto!",
      "subtitle": "Chilorio con Papas",
      "text": ""
    }
  ]