export class Todo {

    static counter = 0;

    /**
     * 
     * @param { String } description 
     */
    constructor( description ) {
        this.id = Todo.counter++;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}