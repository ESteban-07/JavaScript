
import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementIDs = {
    ClearCompleted: '.clear-completed',
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

    // Funcion sincrona que crea el HTML
    // Cuando la función App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );

        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementIDs.TodoList );
    const ClearCompletedButton = document.querySelector( ElementIDs.ClearCompleted );
    
    // Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;
        
        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]');
        if ( !element ) return;

        const elementId = element.dataset.id;
        const targetClass = event.target.className;
        

        if (targetClass === "toggle" || targetClass === "destroy") {
            
            if ( targetClass === "toggle" ) {
                todoStore.toggleTodo( elementId )
            } else if ( targetClass === "destroy") {
                todoStore.deleteTodo( elementId );
            }

            displayTodos();
        }
    });

    ClearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });
}