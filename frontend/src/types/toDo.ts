export type  ToDo = {
    id:string;
    description:string;
    status: ToDoStatus;
}

export enum ToDoStatus {
    OPEN,
    IN_PROGRESS,
    DONE
}