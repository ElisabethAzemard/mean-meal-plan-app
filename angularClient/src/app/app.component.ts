/* Import */
import { Component , OnInit, APP_ID} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "./services/auth/auth.service";

/* DEFINITION */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


/* EXPORT */
export class AppComponent implements OnInit {
  title = 'Bon app\'';

  constructor(private AuthService: AuthService, private Router: Router) {

  }

  async ngOnInit() {
    // redirect to 'connected' page if user is logged
    return new Promise((resolve) => {
      this.AuthService.getUserInfo()
        .then((apiResponse) => {
          if (apiResponse.message === 'Identity found') {
            return resolve(this.Router.navigateByUrl('/shopping-list'));
          }
        })
        // don't reject with apiError to avoid console error on home page at first loading
        .catch(() => {
          this.Router.navigateByUrl('/');
        });
    });

  }
}
