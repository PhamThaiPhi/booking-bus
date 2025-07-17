import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-schedule',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-schedule.html',
  styleUrl: './edit-schedule.css'
})
export class EditSchedule {

  scheduleForm: FormGroup;
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  router = inject(Router); // Inject Router
  snackBar = inject(MatSnackBar); // Inject MatSnackBar
  route = inject(ActivatedRoute);
  vendors: any[] = [];

  constructor() {
    this.scheduleForm = this.fb.group({
      flightsID: ['', Validators.required],
      flightsNumber: ['', Validators.required],
      route: ['', Validators.required],
      departure: ['', Validators.required],
      pointOfLoading: ['', Validators.required],
      pointOfUnloading: ['', Validators.required],
      // documents: [[''], Validators.required],
    });
  }


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get(`https://localhost:7294/api/Flight/${id}`).subscribe({
      next: (res: any) => {
        this.scheduleForm.patchValue(res);
      },
      error: () => {
        this.snackBar.open('Không tìm thấy chuyến bay!', 'Đóng', { duration: 3000 });
      }
    });
  }
  onPointOfLoadingChange(event: any) {
    const value = event.target.value;
    this.scheduleForm.patchValue({
      departure: value
    });
  }
  editFlight(id: number) {
    if (this.scheduleForm.valid) {
      const updateData = { ...this.scheduleForm.value, documents: null }; // luôn set documents = null
      this.http.put(`https://localhost:7294/api/Flight/${id}`, updateData)
        .subscribe({
          next: () => {
            this.snackBar.open('Cập nhật chuyến bay thành công!', 'Đóng', { duration: 3000 });
            this.router.navigate(['/dashboard/scheduleadmin/list-schedule']);
          },
          error: () => {
            this.snackBar.open('Cập nhật thất bại!', 'Đóng', { duration: 3000 });
          }
        });
    }
  }
}
