import { Injectable } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends LastfmService {

  onAuth: Subject<void> = new Subject();

  constructor(private httpClient: HttpClient) {
    super();
    // this.onAuth = new Subject();
  }

  get userName() {
    return localStorage.getItem('name');
  }

  set userName(userName) {
    localStorage.setItem('name', userName);
  }

  get key() {
    return localStorage.getItem('key');
  }

  set key(key) {
    localStorage.setItem('key', key);
  }

  authenticate(token: string): Promise<AuthenticationResponse> {
    return this.httpClient
      .get<AuthenticationResponse>(
        this.buildURL('auth.getSession', { token })
      ).toPromise();
  }

}
