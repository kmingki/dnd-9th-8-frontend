export interface listItem {
    itemId : number;
    title : string;
    order : number;
    isChecked : boolean;
    
}

export interface checkList {
    checkListId : number;
    title: string; 
    order: number;
    itemDtoList: listItem[];
}