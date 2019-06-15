import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/services/lastfm/lastfm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private lastfmService: LastfmService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => this.authenticate(params['token']));
  }

  private async authenticate(token: string) {
    try {
      const data = await this.lastfmService.authenticate(token);

      localStorage.setItem('key', data.session.key);
      localStorage.setItem('name', data.session.name);
      this.lastfmService.onAuth.next();

      this.router.navigate(['/dashboard']);

    } catch (error) {
      alert('Ops! Não foi possível conectar com a sua conta do Last.fm. Por favor, tente novemente!');
      this.router.navigate(['/login']);
    }

  }

}
