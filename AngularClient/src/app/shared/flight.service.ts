import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  formData : Flight
  list : Flight[];
  readonly rootURL = "https://localhost:44392/api"

  constructor(public http : HttpClient) { }

  postFlight(formData : Flight) {
    return this.http.post(this.rootURL+'/Flight',formData); 

  }

  refreshList(){
    this.http.get(this.rootURL+'/Flight')
    .toPromise().then(res=> this.list = res as Flight[]);
  }

  putFlight(formData : Flight) {
    return this.http.put(this.rootURL+'/Flight/'+formData.FlightID,formData); 

  }

  deleteFlight(id : number){
    return this.http.delete(this.rootURL+'/Flight/'+id);
  }
}
