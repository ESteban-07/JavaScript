import { v4 as uuid } from "uuid";

export class Todo {
    /**
     * 
     * @param { String } description 
     */
    constructor( description, done = false ) {
        this.id = uuid();
        this.description = description;
        this.done = done; //
        this.createdAt = new Date();
    }
}