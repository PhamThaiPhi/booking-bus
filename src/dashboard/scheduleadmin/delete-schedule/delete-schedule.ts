import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-schedule',
  imports: [CommonModule],
  templateUrl: './delete-schedule.html',
  styleUrl: './delete-schedule.css'
})
export class DeleteSchedule {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  flight: any;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`https://localhost:7294/api/Flight/${id}`).subscribe({
      next: (res) => this.flight = res,
      error: () => this.flight = null
    });
  }

  deleteFlight(id: number) {
    this.http.delete(`https://localhost:7294/api/Flight/${id}`)
      .subscribe({
        next: () => {alert('Xóa chuyến bay thành công!'), this.router.navigate(['/dashboard/scheduleadmin/list-schedule'])},
        error: () => alert('Xóa chuyến bay thất bại!'),
      });
  }
}
