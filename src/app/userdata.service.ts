import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  getData(regFormUser: any) {
    console.log(regFormUser);
    }
}
