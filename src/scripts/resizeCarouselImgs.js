const { spawnSync } = require('child_process');
const fs = require('fs');
let images = fs.readdirSync('./public/img/carrusel');

images.forEach( imgSrc => {
    let command = `./src/scripts/ffmpeg.exe -i ./public/img/carrusel/${imgSrc} -vf scale=720:-1 -y ./public/img/carrusel/${imgSrc}`
    console.log(spawnSync(command).output);
})