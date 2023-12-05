import { PageLayout } from "./pageLayout";

import doneIcon from "./assets/checkmark-outline.svg";



class TodoLayout {
    static createTodo(todo) {
        const appContainer = document.querySelector('.app-container');
        const todoDiv = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDescription = document.createElement('p');
        const todoInfo = document.createElement('div');
        const optionsDiv = document.createElement('div');
        const todoDueDate = document.createElement('p');
        const todoDoneBtn = document.createElement('div');
        const doneBtnImg = document.createElement('img');
        const dropdownOptions = document.createElement('div');
  
        optionsDiv.appendChild(todoDueDate);
        optionsDiv.appendChild(todoDoneBtn);
        optionsDiv.appendChild(dropdownOptions);
        todoDoneBtn.appendChild(doneBtnImg);

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
        doneBtnImg.classList.add('done-btn-img');

        todoTitle.textContent = todo.title;
        todoDescription.textContent = todo.description;
        todoDueDate.textContent = todo.dueDate;
        doneBtnImg.src = doneIcon;

        todoDiv.appendChild(todoInfo);
        todoDiv.appendChild(optionsDiv);

        doneBtnImg.addEventListener("click", (e) => {
            TodoLayout.completeTodo(e);
        });
        appContainer.appendChild(todoDiv);
    }

    static completeTodo(todo) {
        const todoParent = todo.target.parentNode.parentNode.parentNode;
        (todoParent.classList.contains('todo-done-btn-completed')) ? todoParent.classList.remove('todo-done-btn-completed') : todoParent.classList.add('todo-done-btn-completed');
        
    }


}


export {
    TodoLayout
}