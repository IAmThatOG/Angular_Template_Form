import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../services/data-service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMsg = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.dataService
      .postUserSettingsForm(this.userSettings)
      .subscribe(
        userSettings => console.log(userSettings),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMsg = 'Please fix the errors below';
    }
  }

  onHttpError(errorResponse: any) {
    console.log(errorResponse);
    console.log(this.postError);
    this.postError = true;
    this.postErrorMsg = errorResponse.error.errorMsg;
  }

  onBlur(nameField: NgModel) {
    // console.log('in onBlur: ', nameField);
  }
}
