export const homePageLogo = "img/logo.png";
export const whatsappLogoUrl = "img/whatsappicon.png";
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
        unit: 'bote de 250g',
        text: "Rico frijol con puerco al estilo sinaloense",
        cost: 50,
        imgUrl: "img/productos/chilofrijol.png",
    },
    chilorio:{
        title: "Chilorio",
        unit: 'bote de 250g',
        text: "De pierna de puerco, con poca grasa, especias y chiles secos!",
        cost: 50,
        imgUrl: "img/productos/chilorio.png",
    },
    chorizo:{
        title: "Chorizo",
        unit: 'bolsa de 200g',
        text: "De pierna de puerco, con poca grasa, especias y chiles secos!",
        cost: 20,
        imgUrl: "img/productos/chorizo.png",
    },
    GalletasDeAvena:{
        title: "Galleta de Avena",
        unit: "bolsa de 3 piezas",
        text: "Galletas de avena bien sabrosas uwu",
        cost: 10,
        imgUrl: "img/productos/GalletasDeAvena.png",
    },
    coricos:{
        title: "Coricos",
        unit: "bolsa de 6 piezas",
        text: "Tradicionales galletas de harina de maiz, dulces y crujientes!",
        cost: 10,
        imgUrl: "img/productos/coricos.png",
    },
    tortillas:{
        title: "Tortillas de harina",
        unit: "bolsa de 15 piezas (500g)",
        text: "Tortillas de harina caseras y frescas",
        cost: 25,
        imgUrl: "img/productos/tortillas.png",
    },
    tamalDulce:{
        title: "Tamal de Dulce",
        unit: 'Paquete: 1 Tamal (130g)',
        text: "Con grano de maiz recien molido, endulzado con azucar",
        cost: 15,
        imgUrl: "img/productos/tamalDulce.png",
    },
    tamalRajas:{
        title: "Tamal de Rajas con queso",
        unit: 'Paquete: 1 tamal (130g)',
        text: "El queso es chihuahua y las rajas son poblanas",
        cost: 16,
        imgUrl: "img/productos/tamalRajas.png",
    },
    tamalChilorio:{
        title: "Tamal de Chilorio",
        unit: 'Paquete: 1 tamal (130g)',
        text: "Relleno con chilorio guizado a la mxicana",
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
        text: 'Harinas y Postres',
        products: ['tortillas', "GalletasDeAvena", 'coricos']
    },
    deLaHornilla: {
        text: 'De la hornilla',
        products: ["tamalDulce", 'tamalRajas', 'tamalChilorio', 'frijolesConChorizo']
    }
}
export const homeCarouselItems = [
    {
        img: "img/IMG_20200918_091951.jpg",
        title: "Hola familia",
        subtitle: "A",
    },
    {
        img: "img/IMG_20201004_130834.jpg",
        title: "Fullheight title",
        subtitle: "B",
    },
    {
        img: "img/IMG_20201014_184350.jpg",
        title: "Fullheight title",
        subtitle: "C",
    },
    {
        img: "img/IMG_20201023_212514.jpg",
        title: "Fullheight title",
        subtitle: "D",
    },
    {
        img: "img/IMG_20201026_211710.jpg",
        title: "Fullheight title",
        subtitle: "E",
    },
]