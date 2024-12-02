document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    
    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodoToDOM(todo);
        });
    };

    
    const addTodoToDOM = (todo) => {
        const li = document.createElement('li');
        li.textContent = todo;
        todoList.appendChild(li);
    };

   
    const saveTodoToLocalStorage = (todo) => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    
    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoToDOM(todoText);
            saveTodoToLocalStorage(todoText);
            todoInput.value = ''; 
        }
    });

    
    loadTodos();
});