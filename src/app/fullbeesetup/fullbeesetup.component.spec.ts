import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbeesetupComponent } from './fullbeesetup.component';

describe('FullbeesetupComponent', () => {
  let component: FullbeesetupComponent;
  let fixture: ComponentFixture<FullbeesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullbeesetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbeesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
