import { Injectable } from '@angular/core';
import { UserSettings } from 'src/app/data/user-settings';
import { Observable, of, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<UserSettings> {
    return of(userSettings);
  }
}
