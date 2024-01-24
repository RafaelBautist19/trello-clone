export interface ToDo {
    id: string;
    title: string;
    date: string;
}

export interface Column {
    title: string;
    tasks: ToDo[];
    showInput: boolean;
}