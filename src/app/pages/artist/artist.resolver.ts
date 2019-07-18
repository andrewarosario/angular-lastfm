import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ArtistService } from 'src/app/services/lastfm/artist/artist.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistResolver implements Resolve<ArtistInfoResponse> {

  constructor(private artistService: ArtistService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ArtistInfoResponse> {
    return this.artistService.getArtist(route.params.artist);
  }
}
