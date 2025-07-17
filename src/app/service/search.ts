import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private htpp: HttpClient) {
  }
  searchBus(fromId: string, toId: string, date: string) {
    return this.htpp.get("https://api.freeprojectapi.com/api/BusBooking/searchBus2?fromLocation=" + fromId + "&toLocation=" + toId + "&travelDate=" + date + "");
  }
  getBusSchedulesbyId(scheduleId: number) {
    return this.htpp.get("https://api.freeprojectapi.com/api/BusBooking/GetBusSchedulesById?id= ${scheduleId}");
  }
}
