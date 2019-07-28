import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/lastfm/user/user.service';
import { ScrobbleService } from 'src/app/services/lastfm/scrobble/scrobble.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private scrobbleService: ScrobbleService
  ) { }

  user: User;
  recentTracks = [];

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.getRecenTracks();
    });
  }

  follow() {

  }

  async getRecenTracks(page = 1) {
    const recentTracks = await this.userService.getUserRecentTracks(this.user.name, page.toString());

    this.recentTracks = recentTracks.recenttracks.track;
    console.log(this.recentTracks);

  }

  getDate(track) {
    return track['@attr'] ? 'Ouvindo agora...' : track.date['#text'];
  }

  scrobbleTrack(track) {
    const simpleTrack: SimpleTrack = {
      artist: track.artist['#text'],
      song: track.name,
      album: track.album['#text'],
    };

    this.scrobbleService
      .scrobble(simpleTrack)
      .then(() => console.log('Success'))
      .catch(() => console.log('Error'));
  }

}
