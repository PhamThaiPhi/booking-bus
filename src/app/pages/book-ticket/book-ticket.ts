import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ISearchResult, Search } from '../../model/model'; // Importing ISearchResult model
import { SearchService } from '../../service/search'; // Importing SearchService
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.html',
  styleUrl: './book-ticket.css',
  imports: [CommonModule],
  standalone: true // Marking the component as standalone
})
export class BookTicket {
  setdata: any;
  searchObj: Search = new Search();
  getdata: ISearchResult []=[]
  seats = Array.from({ length: 30 }, (_, i) => ({
    number: i + 1,
    booked: false,
    selected: i + 1 === 9, // ghế 9 được chọn sẵn
  }));
  // constructor() {
  //     this.busName
  //   }
  get selectedSeats() {
    return this.seats.filter(s => s.selected).map(s => s.number);
  }

    // constructor(){
    //   this.getdata.busname = nav.busName; // Thay thế bằng tên xe buýt thực tế
    // }
  selectSeat(seat: any) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
    }
  }
  
  bookTicket() {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat to book.');
      return;
    }
    // Đánh dấu các ghế đã đặt
    this.seats.forEach(seat => {
      if (seat.selected) {
        seat.booked = true;
        seat.selected = false;
      }
    });
    alert(`Booking ticket(s) for seat(s): ${this.selectedSeats.join(', ')}`);
  }
}