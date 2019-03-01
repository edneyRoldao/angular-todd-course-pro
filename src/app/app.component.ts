import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'app-root',
    template: `
    <div>
        
      <auth-form (submitted)="createUser($event)">
          
        <!-- this line will placed inside auth-form component from the same place where ng-template is defined -->
        <h3>Create account</h3>
 
        <button type="submit" class="btn_form">
            Join US
        </button>
      </auth-form>
        
      <auth-form (submitted)="loginUser($event)">
        <h3>Login</h3>
          
        <!-- step 1 -->
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>

        <button type="submit" class="btn_form">
            Enter
        </button>
      </auth-form>
        
    </div>
  `
})
export class AppComponent {

  rememberMe = false;

  createUser(user: User) {
      console.log('Create account', user);
  }

  loginUser(user: User) {
      console.log('Login', user);
  }

  rememberUser(event: boolean) {
    this.rememberMe = event;
  }

}