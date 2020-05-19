import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GenericService} from './generic.service';
import {User} from '../models/user';
import {Credentials} from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }
  login(credentials: Credentials) {
    const url = environment.baseUrl + '/auth/login';
    return this.http.post<any>(url, credentials);
  }
  register(user: User) {
    const url = environment.baseUrl + '/register';
    return this.http.post(url, user);

  }
}
