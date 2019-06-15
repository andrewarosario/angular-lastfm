import { Component } from '@angular/core';
import env from '../../../../env';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor() {}

  login() {
      location.href = `http://www.last.fm/api/auth/?api_key=${env.apiKey}&cb=${encodeURIComponent(`${environment.baseUrl}/callback`)}`;
  }

}
