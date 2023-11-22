const container = document.querySelector('.container');
class pageLayout {
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
        const appContainer = document.createElement('div');
        appContainer.classList.add('app-container');

        return appContainer;
    }

    static createAddTaskButton() {
        const addTaskWrapper = document.createElement('div');
        const taskButtonIcon = document.createElement('img');
        const taskButtonText = document.createElement('p');
        taskButtonIcon.src = "./assets/add-circle-outline.svg";
        taskButtonText.textContent = "Adicionar tarefa";
        addTaskWrapper.appendChild(taskButtonIcon);
        addTaskWrapper.appendChild(taskButtonText);

        return addTaskWrapper;
    }


}

export {
    pageLayout
}