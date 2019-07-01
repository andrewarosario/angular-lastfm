import { Injectable } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends LastfmService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  async getUserInfo(userName: string): Promise<User> {
    const userResponse = await this.getUserResponse(userName);
    userResponse.user = { ...userResponse.user, type: 'user' };
    return userResponse.user;
  }

  getUserRecentTracks(userName: string, page = '1'): Promise<any> {
    return this.httpClient
      .get<any>(this.buildURL('user.getRecentTracks', {
        user: userName,
        page
      })).toPromise();
  }


  private getUserResponse(userName: string): Promise<UserResponse> {
    return this.httpClient
      .get<UserResponse>(this.buildURL('user.getInfo', {
        user: userName
      })).toPromise();
  }

}
