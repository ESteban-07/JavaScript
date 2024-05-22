
import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { createTodoHTML, renderTodos } from "./use-cases";

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param { String } elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos )
    }

    // Cunado la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );

        displayTodos();
    })();

    // Recuperar valor del input e insertar un nuevo todo
    document.querySelector( ElementIDs.NewTodoInput ).addEventListener('keydown', ( e ) => {
        if ( e.key == 'Enter') {

            todoStore.addTodo( e.currentTarget.value );

            displayTodos();

            e.currentTarget.value = "";
        }

    })

}