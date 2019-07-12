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

  async getRecenTracks() {
    const recentTracks = await this.userService.getUserRecentTracks(this.user.name);

    this.recentTracks = recentTracks.recenttracks.track;
    console.log(this.recentTracks);
    console.log(this.recentTracks[0].artist['#text'] + this.recentTracks[0].name);

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
