import { Injectable } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends LastfmService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getArtist(name: string): Promise<ArtistInfoResponse> {
    return this.httpClient
      .get<ArtistInfoResponse>(this.buildURL('artist.getInfo',
          { artist: name },
          ['artist'])
        )
        .toPromise();
  }

  async search(artistSearch: string, limit: number, page: number): Promise<SearchResult<ArtistMatch>> {
    const urlParams = {
      artist: artistSearch,
      limit: limit.toString(),
      page: page.toString()
    };

    const artistMatches =
      await this.httpClient
            .get<ArtistSearchResponse>(
              this.buildURL('artist.search', urlParams, ['artist']))
              .toPromise();

    return {
      count: +artistMatches.results['opensearch:totalResults'],
      results: artistMatches
                .results
                .artistmatches
                .artist
                .map<ArtistMatch>(artistMatch => ({...artistMatch, type: 'artist'}))
    };
  }
}
