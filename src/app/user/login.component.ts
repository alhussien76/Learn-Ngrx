import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { AuthService } from './auth.service';
import * as fromUser from './state/'
import * as fromUserActoins from './state/user.actions'
import * as fromroot from '../state/app.state'
import { Observable } from 'rxjs';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';


  maskUserName$: Observable<boolean>;

  constructor(private authService: AuthService,
    private router: Router,
    private store: Store<fromroot.AppState>) { }

  ngOnInit(): void {
    this.maskUserName$ = this.store.pipe(select(fromUser.getMaskUserName))
  }
  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(new fromUserActoins.toggleMaskUserName())
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}
