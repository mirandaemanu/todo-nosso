import { PageLayout } from "./pageLayout";

import doneIcon from "./assets/checkmark-outline.svg";
import dropdownIcon from "./assets/reorder-three-outline.svg";
import { Todo } from "./todo";
import { DateFormatter } from "./dateFormatter";



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
        const dropdownImg = document.createElement('img');
        const dropdownMenu = PageLayout.createDropdownMenu();
  
        optionsDiv.appendChild(todoDueDate);
        optionsDiv.appendChild(todoDoneBtn);
        optionsDiv.appendChild(dropdownOptions);
        todoDoneBtn.appendChild(doneBtnImg);
        dropdownOptions.appendChild(dropdownImg);
        dropdownOptions.appendChild(dropdownMenu);
        dropdownImg.addEventListener('click', (e) => PageLayout.showDropdownOptions(e));

        todoInfo.appendChild(todoTitle);
        todoInfo.appendChild(todoDescription);

        dropdownMenu.classList.add('dropdown-div');
        todoDiv.classList.add('todo-div');
        todoTitle.classList.add('todo-title');
        todoDescription.classList.add('todo-description');
        todoInfo.classList.add('todo-info');
        optionsDiv.classList.add('options-div');
        todoDueDate.classList.add('todo-due-date');
        todoDoneBtn.classList.add('todo-done-btn');
        dropdownOptions.classList.add('dropdown-options');
        doneBtnImg.classList.add('done-btn-img');
        dropdownImg.classList.add('dropdown-img');

        todoTitle.textContent = todo.title;
        todoDescription.textContent = todo.description;
        todoDueDate.textContent = todo.dueDate;
        doneBtnImg.src = doneIcon;
        dropdownImg.src = dropdownIcon;

        todoDiv.appendChild(todoInfo);
        todoDiv.appendChild(optionsDiv);

        doneBtnImg.addEventListener("click", (e) => {
            TodoLayout.completeTodo(e);
        });
        return todoDiv;
    }

    static completeTodo(todo) {
        const todoParent = todo.target.parentNode.parentNode.parentNode;
        (todoParent.classList.contains('todo-done-btn-completed')) ? todoParent.classList.remove('todo-done-btn-completed') : todoParent.classList.add('todo-done-btn-completed');
        
    }

    static editTodo(todo) {
        const oldTodoTitle = document.querySelector('.todo-title').textContent;
        const oldTodoDescription = document.querySelector('.todo-description').textContent;
        const oldTodoDueDate = document.querySelector('.todo-due-date').textContent;
        
        const newTitleInput = document.createElement('input');
        const newDescriptionInput = document.createElement('input');
        const newDueDateInput = document.createElement('input');
        newDueDateInput.type = 'date';
        const todoDiv = document.createElement('div');
        const saveChangesBtn = document.createElement('button');
        saveChangesBtn.textContent = "Salvar";

        todoDiv.appendChild(newTitleInput);
        todoDiv.appendChild(newDescriptionInput);
        

        newTitleInput.classList.add('edit-name-input');
        newDescriptionInput.classList.add('edit-description-input');
        newDueDateInput.classList.add('edit-date-input');
        todoDiv.classList.add('todo-info');
        saveChangesBtn.classList.add('save-btn');

        newTitleInput.value = oldTodoTitle;
        newDescriptionInput.value = oldTodoDescription;

        const todoParentNode = todo.target.parentNode.parentNode.parentNode.parentNode;

        this.clearTodoParentNode(todo);

        todoParentNode.appendChild(todoDiv);
        todoParentNode.appendChild(saveChangesBtn);
        todoParentNode.appendChild(newDueDateInput);

        saveChangesBtn.addEventListener('click', (e) => {
            const todoTitle = document.querySelector('.edit-name-input').value;
            const todoDescription = document.querySelector('.edit-description-input').value;
            const todoDate = document.querySelector('.edit-date-input').value;
            const formattedTodoDate = DateFormatter.convertDateFormat(todoDate);
            const nodeParent = e.target.parentNode;
            const metaTodo = new Todo(todoTitle, todoDescription, formattedTodoDate);

            nodeParent.textContent = "";
            this.replaceTodo(nodeParent, metaTodo);
        })
    }

    static replaceTodo(node, todo) {
        const domTodo = this.createTodo(todo);
        domTodo.classList.remove('todo-div');
        domTodo.classList.add('dom-div');
        node.appendChild(domTodo);

    }

    static clearTodoParentNode(todo) {
        const todoParentNode = todo.target.parentNode.parentNode.parentNode.parentNode;
        todoParentNode.textContent = '';
    }


}


export {
    TodoLayout
}