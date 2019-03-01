import {Component, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList} from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
    selector: 'auth-form',
    template: `
        <div>
            <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
            
            <!-- we cam add html here externally -->
            <ng-content select="h3"></ng-content>
            
            <label>
                Email address
                <input type="email" name="email" ngModel>
            </label>
            <label>
                Password
                <input type="password" name="password" ngModel>
            </label>
            
            <ng-content select="auth-remember"></ng-content>
            
            <!-- step 1 -->
            <div *ngIf="showMessage"> You will be logged in for 30 days </div>            
            
            <ng-content select=".btn_form"></ng-content>
            
            </form>
        </div>
  `
})
export class AuthFormComponent implements AfterContentInit { // step 3

    showMessage: boolean;

    // step 2
    @ContentChildren(AuthRememberComponent)
    rememberComp: QueryList<AuthRememberComponent>;

    @Output()
    submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(value: User) {
        this.submitted.emit(value);
    }

    // step 4
    ngAfterContentInit() {
        if (this.rememberComp) {

            this.rememberComp.forEach((item) => {
                item.checked.subscribe((data: boolean) => this.showMessage = data);
            });

        }
    }

}
