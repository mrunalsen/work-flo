import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '994412319010-6ucje39u6f1mcbbfuijs2vrgotvcbaf5.apps.googleusercontent.com',
  scope: 'openid profile email'
};

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  public userProfile: Subject<any>;

  constructor(private oAuth: OAuthService, private http: HttpClient) {

    this.userProfile = new Subject();

    oAuth.configure(oAuthConfig);
    oAuth.logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:4200";
    oAuth.loadDiscoveryDocument().then(() => {
      oAuth.tryLoginImplicitFlow().then(() => {
        if (!oAuth.hasValidAccessToken()) {
          oAuth.initLoginFlow();
        } else {
          oAuth.loadUserProfile().then((user) => {
            this.userProfile.next(user);
            console.log(user);
          });
        }
      });
    });
  }

  public isLoggedIn(): boolean {
    return this.oAuth.hasValidAccessToken();
  }

  public signOut() {
    this.oAuth.logOut();
  }

  private authHeader(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.oAuth.getAccessToken()}`
    });
  }
}


