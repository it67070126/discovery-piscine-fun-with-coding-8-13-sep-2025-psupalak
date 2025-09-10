const balloon = document.getElementById('balloon');

let size = 200;
const minSize = 200;
const maxSize = 420;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10;
    colorIndex = (colorIndex + 1)  % colors.length;

    if (size > maxSize) {
        size = minSize;
        colorIndex = 0;
    }

    updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
    size -= 5;
    if (size < minSize)
        size = minSize;

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}
