import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LastfmService } from 'src/app/services/lastfm/lastfm.service';

enum StatusScrobble {
  Waiting,
  Success,
  Error
}

@Component({
  selector: 'app-manual-scrobble',
  templateUrl: './manual-scrobble.component.html',
  styleUrls: ['./manual-scrobble.component.scss']
})
export class ManualScrobbleComponent implements OnInit {

  scrobbleForm: FormGroup;
  scrobbling = false;
  StatusScrobble: typeof StatusScrobble = StatusScrobble;
  status: StatusScrobble;

  constructor(
    private formBuilder: FormBuilder,
    private lastfmService: LastfmService
  ) { }

  ngOnInit() {
    this.scrobbleForm = this.formBuilder.group({
      artist: ['', Validators.required],
      song: ['', Validators.required],
      album: ['']
    });
  }

  scrobble() {
    const simpleTrack = this.scrobbleForm.getRawValue() as SimpleTrack;

    this.scrobbling = true;

    this.lastfmService
      .scrobble(simpleTrack)
      .then(() => this.status = StatusScrobble.Success)
      .catch(() => this.status = StatusScrobble.Error)
      .then(() => this.scrobbling = false);
  }

}
