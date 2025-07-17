import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Search } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);
  locationList: any[] = [];
  searchObj: Search = new Search();
  getallSchedulesList: any[] = [];

  ngOnInit(): void {
    debugger;
    this.getAllLocations();
  }

  getAllLocations() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusLocations').subscribe((res: any) => {
      debugger;
      this.locationList = res;
    })
  }
  getallSchedules() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusSchedules').subscribe((res: any) => {
      debugger;
      this.getallSchedulesList = res;
      console.log(this.getallSchedulesList);
    })
  }
  searchBus() {

    this.router.navigate(['/search-result', this.searchObj.fromlocationId, this.searchObj.tolocationId, this.searchObj.date]);
  }
}