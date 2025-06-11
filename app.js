import { Jimp } from "jimp";

const inputPath = './input.jpeg';
const outputPath = './output.jpg';

Jimp.read(inputPath)
    .then(image => {
        return image
            .greyscale()
            .write(outputPath);
    })
    .catch(err => {
        console.error('Error al procesar la imagen:', err);
    });
