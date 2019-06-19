import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LastfmService } from 'src/app/services/lastfm/lastfm.service';

enum StatusScrobble {
  Waiting,
  Success,
  Error
}

@Component({
  selector: 'app-bulk-scrobble',
  templateUrl: './bulk-scrobble.component.html',
  styleUrls: ['./bulk-scrobble.component.scss']
})
export class BulkScrobbleComponent implements OnInit {

  scrobbleForm: FormGroup;
  scrobbling = false;
  StatusScrobble: typeof StatusScrobble = StatusScrobble;
  status: StatusScrobble;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private lastfmService: LastfmService
  ) { }

  ngOnInit() {
    this.scrobbleForm = this.formBuilder.group({
      textScrobble: ['', Validators.required]
    });
  }

  scrobble() {
    const textScrobble = this.scrobbleForm.get('textScrobble').value;

    const tracks: SimpleTrack[] = textScrobble
      .split((/\n/))
      .map(line => this.convertLineToSimpleTrack(line));

    this.scrobbleTracks(tracks);
  }

  private convertLineToSimpleTrack(line: string): SimpleTrack {
    const dados = line.split('-');
    return {
      artist: dados[0],
      song: dados[1],
      album: dados[2] || ''
    };
  }

  private async scrobbleTracks(tracks: SimpleTrack[]) {
    this.scrobbling = true;
    this.success = false;

    for (const track of tracks) {
      await this.lastfmService.scrobble(track);
    }

    this.scrobbling = false;
    this.success = true;
  }

}
