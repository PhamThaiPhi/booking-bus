import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchedule } from './list-schedule';

describe('ListSchedule', () => {
  let component: ListSchedule;
  let fixture: ComponentFixture<ListSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
