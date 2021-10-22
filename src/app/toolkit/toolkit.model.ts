export class FileModel {
    
    id : string;
    path : string;
    status : number;
    userId : string;

    constructor() {
        this.id = null;
        this.path = null;
        this.status = null;
        this.userId = null;
    }
}
 
export class SearchResponse {
    status : boolean;
  
    data : SearchItemResponse[];
}


export class SearchItemResponse {
    text : string;

    value : string;
}


export class DropdownResponse {
    status : boolean;
  
    data : DropdownItemModel[];
}


export class DropdownItemModel {
    text : string;

    value : string;
}

export class RadioItemModel {
    text : string;

    value : string;
}