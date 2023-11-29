import './style.css';
import { Todo } from "./todo";
import { PageLayout } from "./pageLayout";
import { TodoLayout } from './todoLayout';

console.log("passou 1");

PageLayout.createPage();

let todo = new Todo("Gravar vídeo", "Ensinando a fazer aquilo lá", "22/11/2023", 1);
TodoLayout.createTodo(todo);
