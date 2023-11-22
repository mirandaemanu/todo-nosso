import { pageLayout } from "./pageLayout";
import { Todo } from "./todo";
import { TodoLayout } from "./todoLayout";


pageLayout.createPage();

let todo = new Todo("Gravar vídeo", "Ensinando a fazer aquilo lá", "22/11/2023", 1);
TodoLayout.createTodo(todo);