import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchedule } from './edit-schedule';

describe('EditSchedule', () => {
  let component: EditSchedule;
  let fixture: ComponentFixture<EditSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
