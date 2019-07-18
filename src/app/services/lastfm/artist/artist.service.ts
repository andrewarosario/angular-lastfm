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

  getArtist(artist: string): Promise<ArtistInfoResponse> {
    return this.httpClient
      .get<ArtistInfoResponse>(this.buildURL('artist.getInfo',
          { artist },
          ['artist'])
        )
        .toPromise();
  }

  async getAlbum(artist: string, album: string): Promise<Album> {
    const albumInfo = await this.httpClient
            .get<AlbumInfoResponse>(this.buildURL('album.getInfo',
              { artist, album })
            )
            .toPromise();
    return {...albumInfo.album, type: 'album'};
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
