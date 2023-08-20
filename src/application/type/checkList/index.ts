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
    essential: false;
    itemDtoList: listItem[];
}