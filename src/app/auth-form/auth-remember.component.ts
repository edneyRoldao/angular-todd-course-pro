import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'auth-remember',
    template: `
        <label>
            <input type="checkbox" (change)="onChecked($event.target.checked)">
            keep me logged in
        </label>
    `
})
export class AuthRememberComponent {

    @Output()
    checked: EventEmitter<boolean> = new EventEmitter();

    onChecked(event: boolean) {
        this.checked.emit(event);
    }

}