import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get(`http://3.134.95.50:3000/users/usersMe`);
	}

	register(user: any) {
		return this.http.post(`http://3.134.95.50:3000/users/registerMe`, user);
	}

	delete(id: number) {
		return this.http.delete(`http://3.134.95.50:3000/users/${id}`);
	}

	getuserByuserName(userName :any){
		return this.http.get(`http://3.134.95.50:3000/users/userName/${userName}`);
	}
}