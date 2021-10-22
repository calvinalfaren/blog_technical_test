
export class SortModel {
    sorted: boolean;
    unsorted: boolean;
}

export class PageableModel {
    sort: SortModel;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}


export class Authorities {
    authority: string;
}

export class ResponseModel<T> {
  timestamp: number;
  code: string;
  status: number;
  data: T;
  page: PageModel;
  error: string;
}

export class PageModel {
  pageable: PageableModel;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: SortModel;
  totalPages: number;
  totalElements: number;
}


export const TIME_MODELS = [
  {
    text: "1 min", 
    value: 1
  },
  {
    text: "2 mins",
    value: 2
  },
  {
    text: "3 mins",
    value: 3
  },
  {
    text: "4 mins", 
    value: 4
  },
  {
    text: "5 mins",
    value: 5
  },
  {
    text: "6 mins",
    value: 6
  },
  
  {
    text: "10 mins", 
    value: 10
  },
  {
    text: "12 mins",
    value: 12
  },
  {
    text: "15 mins",
    value: 15
  },
  {
    text: "20 mins", 
    value: 20
  },
  {
    text: "30 mins",
    value: 30
  },
  {
    text: "60 mins",
    value: 60
  },
  
]