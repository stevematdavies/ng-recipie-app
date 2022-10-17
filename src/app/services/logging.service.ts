import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public log = {
    D(t: string){
      console.log(`${new Date().getTime()} - APPLICATION LOG > ${t}`)
    },
    E(es: string){
      console.log(`${new Date().getTime()} - APPLICATION ERROR LOG > ${es}`)
    }
  }
}
