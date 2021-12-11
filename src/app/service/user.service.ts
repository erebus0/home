import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequestService: WebRequestService) { }

  getTotalBalance(cToken:string, address:string ) {
    return this.webRequestService.get(`tokenBalance/${cToken}/${address}`);
  }

  signUp(payload) {
    return this.webRequestService.createUser(`auth/signup`, payload);
  }
}
