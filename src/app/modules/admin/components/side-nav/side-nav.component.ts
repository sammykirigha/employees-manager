import { Component } from '@angular/core';
import {
  faDashboard,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faUsers = faUsers;
  faUser = faUser;
  constructor(private auth: AuthService) {}

  onOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}
