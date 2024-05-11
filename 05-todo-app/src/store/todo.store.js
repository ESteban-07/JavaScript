import { Todo } from '../todos/models/todo.model';

// Filters con mayúscula será una unemeración
const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
   todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
    new Todo('Piedra del tiempo'),
   ],
   filter: Filters.All,
};

// This is only for testing purpouses
state.todos.push(new Todo('Nuevo todo', true), new Todo('Otro todo', true))

const initStore = () => {
    console.log(state);
    console.log('Init Store 🥑');
}

const getTodos = (( filter = Filters.All ) => {
    const todos = state.todos;

    const filteredTodos = todos.filter(item => {
        if (filter == 'all') return item;

        return item.done === (filter == "Completed")

    });

    console.log({filteredTodos});
})("Completed")

const loadStore = () => {
    throw new Error('Not implemented')
}

/**
 * 
 * @param { String } description 
 */
const addTodo = ( description ) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param { String } todoId 
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param { String } todoId 
 */
const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setSelectedFilter = ( newFilter = Filters.All ) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}
 
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setSelectedFilter,
    toggleTodo,
}