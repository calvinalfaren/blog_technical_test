export function containSpecialCharacter(str : string) : boolean {
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return format.test(str);
}

export function containSemicolonCharacter(str  : string) {
    return str.indexOf(";") > -1;    
}