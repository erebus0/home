import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  constructor(private webRequestService: WebRequestService) { }

  getTotalBalance(cToken:string, address:string ) {
    return this.webRequestService.get(`tokenBalance/${cToken}/${address}`);
  }
}
