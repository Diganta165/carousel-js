const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg'
];

let imageIndex = 0;
const imageElement = document.getElementById('slider-image');
setInterval(()=>{

    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imageURL = images[imageIndex];
    
    imageElement.setAttribute('src', imageURL);

    imageIndex++;

},1500);