import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth';

constructor(private http: Http) { }

login(model: any){
    const headers = new Headers({'Contetnt-type': 'application/json'});
    return this.http.post(this.baseUrl + 'login', model, )
}

}