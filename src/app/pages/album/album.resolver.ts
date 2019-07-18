import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ArtistService } from 'src/app/services/lastfm/artist/artist.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album> {

  constructor(private artistService: ArtistService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Album> {
    return this.artistService.getAlbum(route.params.artist, route.params.album);
  }
}
