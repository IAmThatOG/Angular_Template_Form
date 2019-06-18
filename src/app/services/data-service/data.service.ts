import { Injectable } from '@angular/core';
import { UserSettings } from 'src/app/data/user-settings';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpCLient: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings);
    return this.httpCLient.post('https://putsreq.com/O4zc1bFs7s0iM2wBlwPO', userSettings);
  }

  getSubscriptionTypes() {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
