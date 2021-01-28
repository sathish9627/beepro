import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokerComponent } from './smoker.component';

describe('SmokerComponent', () => {
  let component: SmokerComponent;
  let fixture: ComponentFixture<SmokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
