import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { LastfmService } from '../lastfm.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScrobbleService extends LastfmService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    super();
  }

  scrobble(input: SimpleTrack, timestamp: number = moment().unix()): Promise<ScrobbleResponse> {
    return this.httpClient.post<ScrobbleResponse>(this.buildURL('track.scrobble', {
      album: input.album,
      artist: input.artist,
      sk: this.authService.key,
      timestamp: timestamp.toString(),
      track: input.song
    }, ['album', 'artist', 'track']), null).toPromise();
  }

}
