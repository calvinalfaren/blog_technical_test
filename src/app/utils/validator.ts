import { FormGroup, FormControl } from "@angular/forms";

export function emailValidator(control: FormControl): { [key: string]: any } {
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        const password = group.controls[passwordKey];
        const passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}

export function passwordValidator(control: FormControl): { [key: string]: any } {
    const passwordRegExp = /^(?=.{8,})(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^!&*+=]).*$/;
    if (control.value && !passwordRegExp.test(control.value)) {
        return { invalidPassword: true };
    }
}


