import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/services/lastfm/artist/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // textSearch: string;
  results;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(params => this.search(params.get('search')));

  }

  async search(textSearch: string) {
    const results = await this.artistService.search(textSearch, 50, 1);
    console.log(results);
  }

}
