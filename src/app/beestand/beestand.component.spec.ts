import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeestandComponent } from './beestand.component';

describe('BeestandComponent', () => {
  let component: BeestandComponent;
  let fixture: ComponentFixture<BeestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeestandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
