import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.html',
  styleUrls: ['./list-schedule.css'],
  imports: [CommonModule, RouterLink, RouterModule] // Importing necessary modules,
})
export class ListSchedule implements OnInit {
  getallSchedulesList: any[] = [];
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit() {
    this.getallSchedules();
  }

  getallSchedules() {
    this.http.get('https://localhost:7294/api/Flight').subscribe((res: any) => {
      this.getallSchedulesList = res;
    });
  }

  goToDelete(id: number) {
    this.router.navigate(['/dashboard/scheduleadmin/delete-schedule', id]);
  }
  goToEdit(id: number) {
    this.router.navigate(['/dashboard/scheduleadmin/edit-schedule', id]);
  }
}