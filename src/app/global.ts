import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public isLogin: boolean = false;
    basePath: any = "http://localhost:9000";
    constructor() { }

    setIsLogin() {
        this.isLogin = true;
        return this.isLogin;
    }
}