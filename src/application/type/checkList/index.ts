export interface listItem {
    //checkListId : number;
    id : number;
    isChecked : boolean;
    title : string;
    
}

export interface checkList {
    id: number; 
    name: string; 
    list: listItem[];
    emoji: string;
}