import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
    AdminModel,
    AdminSaveModel,
    VerifyResponse,
    Need2FA,
    LoginModel,
    LoginResponse,
    UserContent,
    UserResponse,
    RegisterForm,
    UserStatisticResponse,
    ResetPasswordForm,
    ForgotPasswordForm
} from '../models/user.model';
import { ResponseModel } from '../models/common.model';
import { AppSettings } from '../app.setting';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

    userIdToModelMap: Map<string, UserContent> = new Map<string, UserContent>();
    adminIdToModelMap: Map<string, ResponseModel<AdminModel>> = new Map<string, ResponseModel<AdminModel>>();

    constructor(private _httpClient: HttpClient, private _authService: AuthService) { }


    getMyInfo(token: string): Observable<UserContent> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        return this._httpClient.get('./api/auth/my-info', { headers: headers })
            .map((response: UserContent) => response);
    }


    approve(userId: string, token: string): Observable<UserResponse> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        const obj = {
            userId: userId
        };

        return this._httpClient.post('./api/user/user/verify', obj, { headers: headers })
            .map((response: UserResponse) => response);
    }


    reject(userId: string, token: string): Observable<UserResponse> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        const obj = {
            userId: userId
        };

        return this._httpClient.post('./api/user/user/reject', obj, { headers: headers })
            .map((response: UserResponse) => response);
    }


    login(loginModel: LoginModel): Observable<LoginResponse> {
        return this._httpClient.post(AppSettings.USER_LOGIN, loginModel)
            .map((response: LoginResponse) => response);
    }

    needToVerify(codeVerify: Need2FA): Observable<VerifyResponse> {
        return this._httpClient.post(AppSettings.Need2FA, codeVerify)
            .map((response: VerifyResponse) => response)
            .do((response) => {
                const responseUser = response.data;
                if (responseUser) {
                    this._authService.addStoredUserList(responseUser.user.firstName, responseUser.user.email);
                } else {
                    return;
                }
            });
    }

    forgetPassword(model: ForgotPasswordForm): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.post('./api/auth/forgot-password', model, { headers: headers })
            .map((response) => response)

    }

    resetPassword(model: ResetPasswordForm): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.post('./api/auth/reset-password', model, { headers: headers })
            .map((response) => response)

    }


    resendOTP(deviceId: string, email: string, userKey: string): Observable<VerifyResponse> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
        const obj = {
            deviceId: deviceId,
            email: email,
            userKey: userKey
        };


        return this._httpClient.post('./api/auth/device/request', obj)
            .map((response: VerifyResponse) => response);
    }


    list(search: string, page: number, size: number, status: number, sort: string = null, asc: boolean = true): Observable<UserResponse> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        let httpParams = new HttpParams()
            .set('search', search)
            .set('page', page.toString())
            .set('size', size.toString());

        if (status) {
            httpParams = httpParams.append('status', status.toString());
        }

        return this._httpClient.get(AppSettings.USER_LIST, { headers: headers, params: httpParams })
            .map((response: UserResponse) => response);
    }


    listSearch(search: string, page: number, size: number, role: string, isActive: number): Observable<UserResponse> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        let httpParams = new HttpParams()
            .set('data', search)
            .set('page', page.toString())
            .set('size', size.toString())
            .set('sort', 'createdAt,asc')
            .set('isActive', isActive === null || isActive === undefined ? "" : isActive + "");

        if (role) {
            httpParams = httpParams.set("role", role);
        }

        // if (status) httpParams = httpParams.append('status', status.toString());

        return this._httpClient.get('./api/admins', { headers: headers, params: httpParams })
            .map((response: UserResponse) => response);
    }


    get(id: string): Observable<ResponseModel<AdminModel>> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.get('./api/admins/' + id, { headers: headers })
            .map((response: ResponseModel<AdminModel>) => response)
            .do(response => {
                if (response.status === 200) {
                    this.adminIdToModelMap.set(id, response);
                }
            }
        );
    }

    language(): Observable<UserResponse> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.get('./api/admins/language', { headers: headers })
            .map((response: UserResponse) => response)

    }


    addUser(admin: AdminSaveModel): Observable<ResponseModel<AdminModel>> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.post('./api/admins', admin, { headers: headers })
            .map((response: ResponseModel<AdminModel>) => response)

    }

    updateUser(admin: AdminSaveModel): Observable<ResponseModel<AdminModel>> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.put('./api/admins', admin, { headers: headers })
            .map((response: ResponseModel<AdminModel>) => response)
            .do(response => {
                if (response.code === 'OK' && this.adminIdToModelMap.has(admin.id)) {
                    Observable.of(this.adminIdToModelMap.set(admin.id, response));
                }
            });

    }
    removeDeviceId(id: string): Observable<UserResponse> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.delete('./api/auth/forget/' + id, { headers: headers })
            .map((response: UserResponse) => response)

    }

    remove(id: string): Observable<UserResponse> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());

        return this._httpClient.delete('./api/admins/' + id, { headers: headers })
              .map((response: UserResponse) => response)
    }

    registerByAdmin(contact: RegisterForm, token: string): Observable<UserResponse> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        return this._httpClient.post('./api/user/email/contact/register', contact, { headers: headers })
            .map((response: UserResponse) => response)

    }


    getUserStatistic(token: string): Observable<UserStatisticResponse> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + token);

        return this._httpClient.get('./api/user/user/admin/statistic', { headers: headers })
            .map((response: UserStatisticResponse) => response)
    }
}
