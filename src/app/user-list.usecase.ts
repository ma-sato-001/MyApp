import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from './store.service';
import { User } from "./user";
import { UserApiService } from './user-api.service';

@Injectable({ providedIn: 'root' })
export class UserListUsecase {

    get users$() {
        return this.store.select(state =>
            state.userList.items.filter(user => user.name.includes(state.userListFilter.nameFilter))
        );
    }

    get filter$() {
        return this.store.select(state => state.userListFilter);
    }

    constructor(private userApi: UserApiService, private store: Store) { }

    async fetchUsers() {
        const users = await this.userApi.getAllUsers();

        this.store.update(state => ({
            ...state,
            userList: {
                ...state.userList,
                items: users,
            }
        }));
    }

    setNameFilter(nameFilter: string) {
        this.store.update(state => ({
            ...state,
            userListFilter: {
                nameFilter
            }
        }));
    }
}