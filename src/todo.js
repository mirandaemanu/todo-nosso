class Todo {
    #title;
    #description;
    #completed;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#completed = false;
    }

    done() {
        this.#completed = true;
    }

    get title() { return this.#title; }

    get description() { return this.#description; }

    get dueDate() { return this.#dueDate; }

    get priority() { return this.#priority; }


    set title(newTitle) {
        this.#title = newTitle;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    set dueDate(newDate) {
        this.#dueDate = newDate;
    } 

    set priority(newPriority) {
        this.#priority = newPriority;
    } 

}

export { Todo }