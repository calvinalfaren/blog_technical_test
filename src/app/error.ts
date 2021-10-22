export function getErrorMessage(msg: string) {
    switch (msg) {
        case '#2000100':
            return 'Min Purchase is not satisfied';
        case '#2000403' :
            return 'Uang tidak cukup di bank';
        case '#3000403' :
            return 'Nomor sudah diregister';
        case '#3000407' :
            return 'OTP not valid!';
        case '#1000404':
            return `Email or password is incorrect`;
        case '#3000405':
            return `Email or password is incorrect`;
        case '#3000408':
            return `Email already existed`;
        case '#3000411':
            return `In use`;
        case "#1000800":
            return "Restaurant code already exists";
        case '#3000410': 
            return `User Deactivated`;
        case 'INTERNAL_SERVER_ERROR':
            return 'INTERNAL SERVER ERROR';
            
        case '#4000403':
            return 'This category is related to other products or categories';
        default:
            return msg;

    }
}
