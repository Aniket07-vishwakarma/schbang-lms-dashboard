import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    isLogin: boolean = false;
    basePath: any = "http://localhost:9000";
    constructor() {}

    setIsLogin(val: boolean){
        this.isLogin = val;        
    }

    getIsLogin() {
        return this.isLogin
    }
}