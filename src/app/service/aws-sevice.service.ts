import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AwsSeviceService {


  constructor() {
    console.log('AWS Service Initialized');
  }

  log() {
    console.log('log');
  }
}
