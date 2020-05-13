import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GenericService} from './generic.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(private http: HttpClient) {
    super();
  }

  register(user: User) {
    const url = environment.baseUrl + '/register';
    return this.http.post(url, user);

  }
}
