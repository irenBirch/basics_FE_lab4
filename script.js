//  ЗАВДАННЯ 1: 
const targetElementId = document.getElementById('target-id-1');     
const targetElementSelector = document.querySelector('#target-selector-2'); 

let isPinkActive = false;
let isGreenActive = false;

if (targetElementId) {
    targetElementId.addEventListener('click', function() {
        if (!isPinkActive) {
            targetElementId.classList.add('highlight-id');
            isPinkActive = true;
        } else {
            targetElementId.classList.remove('highlight-id');
            targetElementId.classList.add('highlight-selector');
        }
    });
}

if (targetElementSelector) {
    targetElementSelector.addEventListener('click', function() {
        if (!isGreenActive) {
            targetElementSelector.classList.add('highlight-selector');
            isGreenActive = true;
        } else {
            targetElementSelector.classList.remove('highlight-selector');
            targetElementSelector.classList.add('highlight-id');
        }
    });
}


//  ЗАВДАННЯ 2: 

const imageElement = document.getElementById('my-image');
const imageContainer = document.getElementById('image-container');
const addButton = document.getElementById('add-image');
const increaseButton = document.getElementById('increase-size');
const decreaseButton = document.getElementById('decrease-size');
const removeButton = document.getElementById('remove-image');

if (imageElement) {
    imageElement.classList.add('hidden');
}

addButton.addEventListener('click', () => {
    let currentImage = document.getElementById('my-image');
    if (currentImage) {
        currentImage.classList.remove('hidden');
    } else {
        const newImage = document.createElement('img');
        newImage.id = 'my-image';
        newImage.src = 'https://www.h-hotels.com/_Resources/Persistent/b/5/8/7/b5879b8d0c12e16d528497b01e1254569019ad73/stephansdom-wien-03.jpg';
        newImage.alt = 'Собор Святого Штефана у Відні';
        newImage.width = 500;
        imageContainer.appendChild(newImage); 
    }
});

increaseButton.addEventListener('click', () => {
    const currentImage = document.getElementById('my-image'); 
    if (currentImage) {
        let currentWidth = currentImage.width;
        currentImage.width = currentWidth + 50; 
    }
});

decreaseButton.addEventListener('click', () => {
    const currentImage = document.getElementById('my-image');
    if (currentImage) {
        let currentWidth = currentImage.width;
        currentImage.width = Math.max(100, currentWidth - 50); 
    }
});

removeButton.addEventListener('click', () => {
    const currentImage = document.getElementById('my-image');
    if (currentImage) {
        currentImage.remove(); 
    }
});