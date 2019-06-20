import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LastfmService } from 'src/app/services/lastfm/lastfm.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lastfmService: LastfmService
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
    const recentTracks = await this.lastfmService.getUserRecentTracks(this.user.name);

    this.recentTracks = recentTracks.recenttracks.track;
    console.log(this.recentTracks);
    console.log(this.recentTracks[0].artist['#text'] + this.recentTracks[0].name);

  }

}
