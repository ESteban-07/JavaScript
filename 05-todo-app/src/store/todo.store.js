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

const initStore = () => {
    console.log(state);
    console.log('Init Store 🥑');
}

export default {
    initStore,
}