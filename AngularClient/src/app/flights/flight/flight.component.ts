import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/shared/flight.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(public service : FlightService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm) {
    if(form!=null )
    form.resetForm();
    this.service.formData = {
      FlightID : null,
      Departure : '',
      Arrival : '',
      DepTime : '',
      ArrTime : '',
      Delay : ''
    }
  }

  onSubmit(form : NgForm) {
    if(form.value.FlightID == null)
    this.insertRecord(form); 
    else
    this.updateRecord(form);

  }
  insertRecord(form : NgForm) {
    this.service.postFlight(form.value).subscribe(res => {
      this.resetForm(form)
      this.service.refreshList(); 
    });

  }
  updateRecord(form: NgForm){
    this.service.putFlight(form.value).subscribe(res => {
      this.resetForm(form)
      this.service.refreshList(); 
    });
  }

}
