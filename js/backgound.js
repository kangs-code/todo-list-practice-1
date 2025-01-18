const image = ["0.jpg", "1.jpg", "2.jpg"]

const backgourndImg = image[Math.floor(Math.random()*image.length)];
const img = document.createElement("img");
document.body.appendChild(img);
img.src = `image/${backgourndImg}`

