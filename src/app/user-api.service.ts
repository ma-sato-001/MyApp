import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const apiHost = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class UserApiService {

    constructor(private http: HttpClient) { }

    async getAllUsers() {
        return await this.http.get<User[]>('${apiHost}/users').toPromise();
    }

    async getUserById(id: string) {
        return await this.http.get<User>('${apiHost}/users/${id}').toPromise();
    }
}