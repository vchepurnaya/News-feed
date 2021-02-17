export class NewItem {
    id: number;
    title: string;
    text: string;
    category: string;
    date: Date;
    author: string;
    editedFlag: boolean;
    userId: number;

    constructor(id: number, title: string, text: string, category: string, date: Date, author: string, editedFlag: boolean, userId: number) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.category = category;
        this.date = date;
        this.author = author;
        this.editedFlag = editedFlag;
        this.userId = userId;
    }
}
