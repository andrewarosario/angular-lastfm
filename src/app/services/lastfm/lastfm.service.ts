import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as md5 from 'md5';
import * as moment from 'moment';
import env from '../../../../env';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  private base = 'https://ws.audioscrobbler.com/2.0/';
  onAuth: Subject<void>;

  constructor(private httpClient: HttpClient) {
    this.onAuth = new Subject();
  }

  get urlJSON() {
    return this.base + '?format=json&';
  }

  private encode(str: string) {
    return encodeURIComponent(str).replace(/%20/g, '+');
  }

  private buildURL(method: string, data: {[key: string]: string} = {}, encode: string[] = []) {
    const allHashData = Object.assign({}, data, { api_key: env.apiKey, method: method });

    const hash = this.getHash(allHashData);

    const signature = md5(hash);

    const allUrlData = Object.assign({}, allHashData, { api_sig: signature });

    return this.urlJSON +
              Object
                .keys(allUrlData)
                .sort()
                .map(key => this.getKeyURL(key, allUrlData, encode))
                .join('&');
  }

  private getHash(allHashData): string {
    return Object
            .keys(allHashData)
            .sort()
            .map(key => key + allHashData[key])
            .join('') + env.apiSecret;
  }

  private getKeyURL(key: string, allUrlData, encode) {
    const returnKey =
      (encode.indexOf(key) !== -1)
        ? this.encode(allUrlData[key])
        : allUrlData[key];

    return key + '=' + returnKey;
  }

  private getUserResponse(): Promise<UserResponse> {
    return this.httpClient
            .get<UserResponse>(this.buildURL('user.getInfo', {
              user: localStorage.getItem('name')
            })).toPromise();
  }

  authenticate(token: string): Promise<AuthenticationResponse> {
    return this.httpClient
      .get<AuthenticationResponse>(
        this.buildURL('auth.getSession', { token })
      ).toPromise();
  }

  scrobble(input: SimpleTrack, timestamp: number = moment().unix()): Promise<ScrobbleResponse> {
    return this.httpClient.post<ScrobbleResponse>(this.buildURL('track.scrobble', {
      album: input.album,
      artist: input.artist,
      sk: localStorage.getItem('key'),
      timestamp: timestamp.toString(),
      track: input.song
    }, ['album', 'artist', 'track']), null).toPromise();
  }

  async getUserInfo(): Promise<UserResponse> {
    if (localStorage.getItem('name')) {
      const userResponse = await this.getUserResponse();
      userResponse.user = {...userResponse.user, type: 'user'};
      return userResponse;
    }

    throw new Error('No user data.');
  }
}
