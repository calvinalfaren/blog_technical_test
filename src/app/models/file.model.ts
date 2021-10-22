export class FileModel {
  id : string;
  userId : string;
  path : string;
  status : number;
  createdAt : number;
  updatedAt : number;
  typeId : number;
  private : boolean;
  listed : boolean;
}

export class FileResponse {
  data : FileUrlResponse;
}

export class FileUrlResponse {
  value: string;
  thumbnailUrl: string;
  url: string;
  url200: string;
  url400: string;
}
