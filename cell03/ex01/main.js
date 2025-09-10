const balloon = document.getElementById('balloon');

let size = 200;
const minSize = 200;
const maxSize = 420;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

// Handle click: grow size + change color
balloon.addEventListener('click', () => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > maxSize) {
        // Explode and reset
        size = minSize;
        colorIndex = 0;
    }

    updateBalloon();
});

// Handle mouse leave: shrink size + reverse color
balloon.addEventListener('mouseleave', () => {
    size -= 5;
    if (size < minSize) size = minSize;

    // Reverse color order
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon();
});

// Update balloon style
function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}
