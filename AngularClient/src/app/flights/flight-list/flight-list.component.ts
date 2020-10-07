import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/shared/flight.model';
import { FlightService } from 'src/app/shared/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(public service : FlightService) { }

  ngOnInit(): void { 
    this.service.refreshList();

  }
  populateForm(emp : Flight){
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id :number){
    this.service.deleteFlight(id).subscribe(res=>{
      this.service.refreshList();
    });
  }

}
