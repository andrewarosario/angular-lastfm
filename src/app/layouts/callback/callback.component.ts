import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/lastfm/auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => this.authenticate(params['token']));
  }

  private async authenticate(token: string) {
    try {
      const data = await this.authService.authenticate(token);

      this.authService.key = data.session.key;
      this.authService.userName = data.session.name;
      this.authService.onAuth.next();

      this.router.navigate(['/dashboard']);

    } catch (error) {
      alert('Ops! Não foi possível conectar com a sua conta do Last.fm. Por favor, tente novemente!');
      this.router.navigate(['/login']);
    }

  }

}
