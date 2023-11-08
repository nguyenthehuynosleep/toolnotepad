
let blurButton = document.getElementById('blurButton');
let grayButton = document.getElementById('grayButton');

const textInput = document.getElementById('text-input');
const textColorInput = document.getElementById('text-color-input');
const addTextButton = document.getElementById('add-text-button');
const imageInput = document.getElementById('image-input');
const previewImage = document.getElementById('preview-image');
const imageContainer = document.getElementById('image-container');
imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        previewImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
});
// addTextButton.addEventListener('click', function () {
//     const text = textInput.value;
//     const textColor = textColorInput.value; // Get the selected text color
//     const textElement = document.createElement('div');
//     textElement.innerText = text;
//     textElement.style.position = 'absolute';
//     textElement.style.fontSize = '20px';
//     textElement.style.fontWeight = 'bold';
//     textElement.style.cursor = 'move';
//     textElement.style.userSelect = 'none';
//     textElement.style.top = '50px'; // Set initial top position
//     textElement.style.left = '50px'; // Set initial left position
//     textElement.style.color = textColor; // Apply selected text color
//     imageContainer.appendChild(textElement);

//     let isDragging = false;
//     let startX, startY, initialX, initialY;
//     textElement.addEventListener('mousedown', function (event) {
//         isDragging = true;
//         startX = event.clientX - textElement.getBoundingClientRect().left;
//         startY = event.clientY - textElement.getBoundingClientRect().top;
//         initialX = textElement.getBoundingClientRect().left;
//         initialY = textElement.getBoundingClientRect().top;
//     });       
// textElement.addEventListener('dblclick', function () {
//     const newText = prompt('Nhập nội dung mới:');
//     if (newText !== null) {
//         textElement.innerText = newText;
//     }
// });
//     document.addEventListener('mousemove', function (event) {
//         if (isDragging) {
//             const mouseX = event.clientX;
//             const mouseY = event.clientY;
//             const deltaX = mouseX - startX - initialX;
//             const deltaY = mouseY - startY - initialY;
//             // Get the boundaries of the image container
//             const maxX = imageContainer.clientWidth - textElement.clientWidth;
//             const maxY = imageContainer.clientHeight - textElement.clientHeight;
//             // Calculate the new position of the text element
//             const newX = Math.min(Math.max(0, initialX + deltaX), maxX);
//             const newY = Math.min(Math.max(0, initialY + deltaY), maxY);
//             textElement.style.left = newX + 'px';
//             textElement.style.top = newY + 'px';
//         }
//     });
//     document.addEventListener('mouseup', function () {
//         isDragging = false;
//     });
// });
function applyBlur() {
    const src = cv.imread(previewImage);
    console.log(src);
    // showImage();
    const blurred = new cv.Mat();
    cv.GaussianBlur(src, blurred, new cv.Size(15, 15), 0, 0, cv.BORDER_DEFAULT);
    cv.imshow('output', blurred);
    src.delete();
    blurred.delete();
}
function swapColor() {
    // showImage();
    let src = cv.imread(previewImage);
    let dst = new cv.Mat();
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('output', dst);
    src.delete();
    dst.delete();
}
blurButton.addEventListener('click', function(){
    applyBlur();
});
grayButton.addEventListener('click', function() {
    swapColor();
});
