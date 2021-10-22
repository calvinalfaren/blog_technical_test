import {SortModel, PageableModel} from './common.model';

export class AccountActivateContent {
    email: string;
    firstName: string;
}

export class AdminModel {
  active: boolean;
  email: string;
  emailLanguage: string;
  firstName: string;
  id: string;
  lastName: string;
}

export class AdminSaveModel {
  active: boolean;
  email: string;
  emailLanguage: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  roleId: number;
}

export class AdminOrgSaveModel extends AdminSaveModel {
  orgId: string;
  permissions: [];
}

export class AdminOrgGroupSaveModel extends AdminSaveModel {
  orgGroupId: string;
  permissions: [];
}

export class Need2FA {
    deviceId: string;
    userKey: string;
    deviceKey: string;
    code: string;
    rememberDevice: boolean;
    email: string;
    user:UserContent;

}

export class LoginModel {
    deviceId: string;
    userKey: string;
    deviceKey: string;
    email: string;
    password: string;
    rememberMe: boolean;
    code: string;
    need2FA: boolean;
    code1: number;
    code2: number;
    code3: number;
    code4: number;
    code5: number;
    code6: number;
    user: UserContent;
}

export class UserStatisticResponse {
    error: string;

    totalUsersToday: number;
    totalUsersThisMonth: number;
    totalUsersThisYear: number;
}

export class LoginResponse {
    error: string;
    userKey: string;
    deviceId: string;
    deviceKey: string;
    code: string;
    password: string;
    id: string;
    email: string;
    status: boolean;
    rememberMe: boolean;
    user: UserContent;
    data: LoginModel;
}

export class VerifyResponse {
    deviceKey: string;
    code: string;
    error: string;
    data: Need2FA;
}

/*export class LoginRes{
  userKey: string;
}*/

export class UserResponse {
    search: string;
    status: number;
    error: string;
    code: string;
    user: UserContent;
    users: UserModel;
    page: UserPageModel;
    data: UserContent[] = [];
}

export class UserModel2 {
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: SortModel;
    pageable: PageableModel;
    content: UserContent[] = [];
}

export class UserPageModel {

    page: number;
    totalPage: number;
    itemsPerPage: number;
    totalItem: number;
    totalElements: number;


}

export class UserModel {
    last: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: SortModel;
    pageable: PageableModel;
    content: UserContent[] = [];
}

export class UserContent {
    id: string;
    phone: string;
    // authKey: string;
    deviceId: string;
    userKey: string;
    passwordResetToken: string;
    validationToken: string;
    resetToken: string;
    enabled: boolean;
    firstName: string;
    lastName: string;
    nationality: string;
    passport: string;
    password: string;
    address: string;
    status: number;
    channelId: string;
    orgId: string;
   active: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    authorities: Authorities[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    username: string;
    photoFileId: string;
    backICFileId: string;
    frontICFileId: string;
    contactNumber: string;
    data: UserContent;
    emailLanguage: string;
    orgGroupId?: string;
    merchantId?: string;
}

export class Authorities {
    authority: string;
}

export class FilterUserContent {
    status: number;
    search: string;
    sorting: string;
    asc: boolean;
}

export class USER_PAGE {
    public static LIST = '/pages/user';
}

export class UserStatus {
    public static STATUS_UNVERIFIED: number = 10;
    public static STATUS_DELETED: number = 0;
    public static STATUS_APPROVED: number = 2;
    public static STATUS_REJECTED: number = 12;
    public static STATUS_SUBMITTED: number = 11;
}

export class RegisterForm {
    firstName: string;
    email: string;
    address: string;
    password: string;
    photoFileId: string;
    shopId: string;
}

export function getStatusText(status: boolean) {
    switch (status) {
        case true:
            return 'Active';
        case false:
            return 'Inactive';

    }
}


export class ForgotPasswordForm {
    email: string;
    deviceId: string;
}

export class ResetPasswordForm {
    deviceId: string;
    password: string;
    token: string;
}
