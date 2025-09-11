function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
    }

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    const prefix = name + "=";
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(prefix) === 0) {
        return c.substring(prefix.length, c.length);
        }
    }
    return "";
}

const ftList = document.getElementById("ft_list");

function saveTodos() {
    const todos = Array.from(ftList.children).map(div => div.textContent);
    setCookie("todos", JSON.stringify(todos), 7);
}

function loadTodos() {
    const data = getCookie("todos");
    if (data) {
        const todos = JSON.parse(data);
        todos.forEach(text => createTodo(text));
    }
}

function createTodo(text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.addEventListener("click", () => {
        if (confirm("Remove this TO DO?")) {
        div.remove();
        saveTodos();
        }
    });
    ftList.appendChild(div);
    saveTodos();
}

document.getElementById("newBtn").addEventListener("click", () => {
    const todo = prompt("Enter new TO DO:");
    if (todo && todo.trim() !== "") {
        createTodo(todo.trim());
    }
});

loadTodos();
