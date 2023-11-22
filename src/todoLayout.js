import { pageLayout } from "./pageLayout";
import { Todo } from "./todo";

const container = document.querySelector('.container');
const appContainer = pageLayout.appContainer;

class TodoLayout {

    static createTodo(todo) {
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDescription = document.createElement('p');
        const todoInfo = document.createElement('div');
        const optionsDiv = document.createElement('div');
        const todoDueDate = document.createElement('p');
        const todoDoneBtn = document.createElement('div');
        const dropdownOptions = document.createElement('div');
        optionsDiv.appendChild(todoDueDate);
        optionsDiv.appendChild(todoDoneBtn);
        optionsDiv.appendChild(dropdownOptions);

        todoInfo.appendChild(todoTitle);
        todoInfo.appendChild(todoDescription);

        todoDiv.classList.add('todo-div');
        todoTitle.classList.add('todo-title');
        todoDescription.classList.add('todo-description');
        todoInfo.classList.add('todo-info');
        optionsDiv.classList.add('options-div');
        todoDueDate.classList.add('todo-due-date');
        todoDoneBtn.classList.add('todo-done-btn');
        dropdownOptions.classList.add('dropdown-options');

        todoTitle.textContent = todo.title;
        todoDescription.textContent = todo.description;
        todoDueDate.textContent = todo.dueDate;

        todoDiv.appendChild(todoInfo);
        todoDiv.appendChild(optionsDiv);

        appContainer.appendChild(todoDiv);
    }
}


export {
    TodoLayout
}