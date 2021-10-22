export class LanguageModel {
    id: string;
    name: string;
    code: string;
    content: LanguageContent[] = [];
}

export class LanguageContent {
    id: string;
    name: string;
    code: string;
}

export class LanguageResponse {
    data: LanguageContent[] = [];
}


export interface ILanguageListener {
    handleLanguageChange(languages: LanguageContent[]): void;
}
