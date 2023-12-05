import addBtnIcon from "./assets/add-circle-outline.svg";
import { Todo } from "./todo";
import { TodoLayout } from "./todoLayout";

const container = document.querySelector('.container');

let newTaskBtnActive = false;
class PageLayout {
    static appContainer = this.createAppContainer();

    static createPage() {
        const header = this.createHeader();
        const sidebar = this.createSidebar();
        const layoutContainer = document.createElement('div');
        const addTaskBtn = this.createAddTaskButton();
        layoutContainer.classList.add('layout-container');
        layoutContainer.appendChild(sidebar);
        this.appContainer.appendChild(addTaskBtn);
        layoutContainer.appendChild(this.appContainer);

        container.appendChild(header);
        container.appendChild(layoutContainer);
    }



    static createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');

        const logoWrapper = document.createElement('div');
        const logoTitle = document.createElement('h1');
        const logoImage = document.createElement('img');
        const logoTitleFirstWord = document.createElement('span');
        const sloganText = document.createElement('p');
        logoWrapper.classList.add('logo-wrapper');
        logoTitle.classList.add('logo-title');
        logoImage.classList.add('logo-image');
        logoTitleFirstWord.classList.add('logo-title-first-word');
        sloganText.classList.add('slogan-text')
        logoTitleFirstWord.textContent = "to-do";
        logoTitle.textContent = " nosso";
        sloganText.textContent = "a to-do list feita para agilizar o seu trampo 🎯"
        logoTitle.prepend(logoTitleFirstWord);


        logoWrapper.appendChild(logoTitle);
        logoWrapper.appendChild(logoImage);

        header.appendChild(logoWrapper);
        header.appendChild(sloganText);

        return header;
    }

    static createSidebar() {
        const sidebar = document.createElement('aside');
        const sidebarHomeTitle = document.createElement('h2');
        const sidebarProjectsTitle = document.createElement('h2');
        const sidebarHomeSection = this.createSidebarHomeSection();
        const sidebarProjectSection = this.createSidebarProjectSection();
        sidebar.classList.add('sidebar');
        sidebarHomeTitle.classList.add('sidebar-home-title');
        sidebarProjectsTitle.classList.add('sidebar-projects-title');
        sidebarHomeTitle.textContent = "Home"
        sidebarProjectsTitle.textContent = "Projetos";

        
        sidebar.appendChild(sidebarHomeTitle);
        sidebar.appendChild(sidebarHomeSection);
        sidebar.appendChild(sidebarProjectsTitle);
        sidebar.appendChild(sidebarProjectSection);

        return sidebar;
    }

    static createSidebarHomeSection() {
        const taskList = document.createElement('ul');
        const allTasks = document.createElement('li');
        const todayTasks = document.createElement('li');
        const weekTasks = document.createElement('li');
        taskList.classList.add('task-list');
        allTasks.classList.add('task-item');
        todayTasks.classList.add('task-item');
        weekTasks.classList.add('task-item');
        allTasks.textContent = "Novas tarefas";
        todayTasks.textContent = "De hoje";
        weekTasks.textContent = "Dessa semana";

        taskList.appendChild(allTasks);
        taskList.appendChild(todayTasks);
        taskList.appendChild(weekTasks);

        return taskList;
    }

    static createSidebarProjectSection() {
        const projectList = document.createElement('ul');
        const addProject = document.createElement('li');
        projectList.classList.add('project-list');
        addProject.classList.add('task-item', 'add-project');
        addProject.textContent = "Criar projeto"

        projectList.appendChild(addProject);

        return projectList;
    }

    static createAppContainer() {
        const appContainerModel = document.createElement('div');
        appContainerModel.classList.add('app-container');

        return appContainerModel;
    }

    static createAddTaskButton() {
        const addTaskWrapper = document.createElement('div');
        const taskButtonIcon = document.createElement('img');
        const taskButtonText = document.createElement('p');
        addTaskWrapper.classList.add('add-task-wrapper');
        taskButtonIcon.addEventListener('click', () => {
            this.addNewTask();
        });
        taskButtonIcon.classList.add('task-button-icon');
        taskButtonText.classList.add('task-button-text');
        taskButtonIcon.src = addBtnIcon;
        taskButtonText.textContent = "Adicionar tarefa";
        addTaskWrapper.appendChild(taskButtonIcon);
        addTaskWrapper.appendChild(taskButtonText);


        return addTaskWrapper;
    }

    
    static addNewTask() {
        if(newTaskBtnActive) { return; }
        const newTaskDiv = document.createElement('div');
        const newTaskTitle =  document.createElement('p');
        const newTaskTitleInput = document.createElement('input');
        const newTaskDescription = document.createElement('p');
        const newTaskDescriptionInput = document.createElement('input');
        const newTaskDate = document.createElement('p');
        const newTaskDateInput = document.createElement('input');
        const newTaskButtonsDiv = document.createElement('div');
        const newTaskAddButton = document.createElement('button');
        const newTaskCancelButton = document.createElement('button');
        newTaskDiv.classList.add('new-task-div');
        newTaskTitle.classList.add('new-task-title');
        newTaskTitleInput.classList.add('new-task-input');
        newTaskTitleInput.setAttribute('id', 'new-task-title-input');
        newTaskDescription.classList.add('new-task-description');
        newTaskDescriptionInput.classList.add('new-task-input');
        newTaskDescriptionInput.setAttribute('id', 'new-task-description-input');
        newTaskDate.classList.add('new-task-date');
        newTaskDateInput.classList.add('new-task-input');
        newTaskDateInput.setAttribute('id', 'new-task-date-input');
        newTaskButtonsDiv.classList.add('new-task-buttons-div');
        newTaskAddButton.classList.add('new-task-add-button');
        newTaskCancelButton.classList.add('new-task-cancel-button');

        newTaskTitle.textContent = "Titulo:";
        newTaskDescription.textContent = "Descrição:";
        newTaskDate.textContent = "Data:";
        newTaskAddButton.textContent = "Adicionar";
        newTaskCancelButton.textContent = "Cancelar";

        newTaskCancelButton.addEventListener('click', () => this.closeAddTaskWindow());
        newTaskAddButton.addEventListener('click', () => {
            this.createNewTodo();
            this.closeAddTaskWindow();
            newTaskBtnActive = false;
        })

        newTaskButtonsDiv.appendChild(newTaskAddButton);
        newTaskButtonsDiv.appendChild(newTaskCancelButton);

        newTaskDiv.appendChild(newTaskTitle);
        newTaskDiv.appendChild(newTaskTitleInput);
        newTaskDiv.appendChild(newTaskDescription);
        newTaskDiv.appendChild(newTaskDescriptionInput);
        newTaskDiv.appendChild(newTaskDate);
        newTaskDiv.appendChild(newTaskDateInput);
        newTaskDiv.appendChild(newTaskButtonsDiv);

        const appContainerDom = document.querySelector('.app-container');
        appContainerDom.appendChild(newTaskDiv);
        newTaskBtnActive = true;

    }

    static createNewTodo() {
        if(!newTaskBtnActive) { return; }
        const taskName = document.querySelector('#new-task-title-input').value;
        const taskDescription = document.querySelector('#new-task-description-input').value;
        const taskDueDate = document.querySelector('#new-task-date-input').value;

        const todo = new Todo(taskName, taskDescription, taskDueDate);
        TodoLayout.createTodo(todo);
    }

    static closeAddTaskWindow() {
        if(!newTaskBtnActive) { return; }
        const newTaskBtn = document.querySelector('.new-task-div');
        newTaskBtn.remove();
        newTaskBtnActive = false;
    }

}

export {
    PageLayout
}