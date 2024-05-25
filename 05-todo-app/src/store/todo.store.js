import { Todo } from '../todos/models/todo.model';

// Filters con mayúscula será una unemeración
const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
   todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
    new Todo('Piedra del tiempo'),
    new Todo('Piedra del poder'),
    new Todo('Piedra del realidad'),
   ],
   filter: Filters.All,
};

const initStore = () => {
    console.log(state);
    console.log('Init Store 🥑');
}

const getTodos = ( filter = Filters.All ) => {
    console.log('Filtering...');

    switch ( filter ) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}


const loadStore = () => {
    throw new Error('Not implemented')
}

/**
 * 
 * @param { String } description 
 */
const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');

    state.todos.push( new Todo(description) );
}

/**
 * 
 * @param { String } todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    } )
}

/**
 * 
 * @param { String } todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos =  state.todos.filter( todo => todo.id !== todoId );
};

/**
 * 
 * @param { String } description 
 * @param { String } todoId 
 */
const updateTodo = ( description, todoId ) => {
    if ( !description || description.trim().length === 0 ) throw new Error("The description is required");
    if ( !todoId ) throw new Error(`TodoId ${ todoId } not found`);

    state.status = state.status.map(todo => {
        if (todo.id === todoId) {
            todo.description = description;
        }

        return todo;
    });
}

const deleteCompleted = () => {
    return state.todos.filter( todo => !todo.done );
}

/**
 * 
 * @param { Filters } newFilter
 */
const setSelectedFilter = ( newFilter = Filters.All ) => {

    if (! (Object.keys(Filters)).includes(newFilter) ) {
        throw new Error(`The filter ${ newFilter} is not valid`);
    }

    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}
 
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setSelectedFilter,
    toggleTodo,
    updateTodo,
}