import { TodoItem } from "./todoitem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor() {
        this.name = "Tuğba";
        this.items = [
            { description: "kahvaltı", action: true },
            { description: "spor", action: true },
            { description: "alışveriş", action: false }
        ];
    }
}

// const m = new Model();  ---->todo.component.ts'e gitti