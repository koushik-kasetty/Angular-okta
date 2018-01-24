import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({      
    baseUrl: 'https://dev-222964.oktapreview.com',
    clientId: '0oadqhb6f5apXls5t0h7',
    redirectUri: 'http://localhost:4200',
    authParams: {
      issuer: 'https://dev-222964.oktapreview.com'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}