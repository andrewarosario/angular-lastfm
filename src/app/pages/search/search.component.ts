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
  results: PaginatedData<Searchable>;
  loading: boolean;

  pageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 0
  };
  previousPageSize: number;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => this.search(params.get('search')));
  }

  async search(textSearch: string) {
    const page = {...this.pageEvent};
    const searchResults = await this.artistService.search(textSearch, 50, 1);
    this.results[page.pageIndex] = searchResults.results;
  }

  get currentResults(): Searchable[] {
    return this.results[this.pageEvent.pageIndex];
  }

}
