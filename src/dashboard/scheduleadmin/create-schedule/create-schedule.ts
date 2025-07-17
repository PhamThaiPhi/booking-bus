import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.html',
  styleUrls: ['./create-schedule.css'],
  imports: [ReactiveFormsModule, CommonModule] // Importing necessary modules,
})
export class CreateScheduleComponent implements OnInit {
  scheduleForm: FormGroup;
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  router = inject(Router); // Inject Router
  snackBar = inject(MatSnackBar); // Inject MatSnackBar
  vendors: any[] = [];



  getVendors() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors')
      .subscribe((res: any) => {
        this.vendors = res;
      });
  }

  onVendorChange(event: any) {
    const selectedId = event.target.value;
    const selectedVendor = this.vendors.find(v => v.vendorId == selectedId);
    if (selectedVendor) {
      this.scheduleForm.patchValue({
        vendorName: selectedVendor.vendorName
      });
    }
  }
  constructor() {
    this.scheduleForm = this.fb.group({
      // flightsID: ['', Validators.required],
      flightsNumber: ['', Validators.required],
      route: ['', Validators.required],
      departure: ['', Validators.required],
      pointOfLoading: ['', Validators.required], 
      pointOfUnloading: ['', Validators.required],
      documents: [[''], Validators.required],
    });
  }

  ngOnInit(): void {
    this.getVendors();
  }
  onPointOfLoadingChange(event: any) {
  const value = event.target.value;
  this.scheduleForm.patchValue({
    departure: value
  });
}

  createSchedule() {
    if (this.scheduleForm.valid) {
      console.log('Form Value:', this.scheduleForm.value); // Kiểm tra giá trị form
      this.http.post('https://localhost:7294/api/Flight', this.scheduleForm.value)
        .subscribe(response => {
          console.log('Schedule created:', response);
          this.router.navigate(['/dashboard/scheduleadmin/list-schedule']);
        }, error => {
          console.error('Error creating schedule:', error);
          this.snackBar.open('Có lỗi xảy ra khi tạo lịch trình!', 'Đóng', {
            duration: 3000,
          });
        });
    }
  }
}