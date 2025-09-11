const calcForm = document.getElementById('calc-form');
setInterval(() => {
    alert("Please, use me...");
    }, 30000)
function showOperation(obt) {
    console.log(obt.value);
}

function calulation(a, b, operation) {
    if (operation == "divide" || operation == "mod") {
        if (b == 0){
            alert("It's over 9000");
            console.log("It's over 9000!");
            return;
        }
    }
    switch(operation){
        case "plus":
            alert(`result: ${parseInt(a) + parseInt(b)}`);
            console.log(`result: ${parseInt(a) + parseInt(b)}`);
            break;
        case "minus":
            alert(`result: ${parseInt(a) - parseInt(b)}`);
            console.log(`result: ${parseInt(a) - parseInt(b)}`);
            break;
        case "multiply":
            alert(`result: ${parseInt(a) * parseInt(b)}`);
            console.log(`result: ${parseInt(a) * parseInt(b)}`);
            break;
        case "divide":
            alert(`result: ${parseInt(a) / parseInt(b)}`);
            console.log(`result: ${parseInt(a) / parseInt(b)}`);
            break;
        case "mod":
            alert(`result: ${parseInt(a) % parseInt(b)}`);
            console.log(`result: ${parseInt(a) % parseInt(b)}`);
            break;
    }
}

document.getElementById("calcBtn").addEventListener("click", () => {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    calulation(a, b, operation);
});