const todoList = document.getElementById('todo-list');
const todoContent = document.getElementById('todo-content');
const addItem = document.getElementById('add-item');
const uncheckedList = document.getElementById('todo-list')


function addItemTodo(text) {
    const item = document.createElement('li');
    item.classList.add("todo-item", "list-item");
    item.innerHTML = text;

    const btns = document.createElement('div');
    btns.classList.add('btns');

    const remove = document.createElement('button');
    remove.classList.add('remove');

    const iconTrash = document.createElement('i');
    iconTrash.classList.add("fa", "fa-trash-o");

    const uncomplete = document.createElement('button');
    uncomplete.classList.add('uncomplete');

    const iconUncheck = document.createElement('i');
    iconUncheck.classList.add("fa", "fa-check-square-o");
    remove.appendChild(iconTrash);
    uncomplete.appendChild(iconUncheck);
    btns.appendChild(remove);
    btns.appendChild(uncomplete);
    item.appendChild(btns);
    uncheckedList.appendChild(item);
    console.log("Done");
}

// alert('Oops, the box is empty! Please write your todo item ...');
function add() {
    if (todoContent.value === '') {
        
    }else {
        addItemTodo(todoContent.value);
    }
}


addItem.addEventListener('click', add);