import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSchedule } from './delete-schedule';

describe('DeleteSchedule', () => {
  let component: DeleteSchedule;
  let fixture: ComponentFixture<DeleteSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
