export class NewItem {
    id: number;
    title: string;
    text: string;
    category: string;
    date: Date;
    editedFlag: boolean;

    constructor(id: number, title: string, text: string, category: string, date: Date, editedFlag: boolean) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.category = category;
        this.date = date;
        this.editedFlag = editedFlag;
    }
}