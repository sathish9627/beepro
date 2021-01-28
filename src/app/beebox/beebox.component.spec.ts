import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeboxComponent } from './beebox.component';

describe('BeeboxComponent', () => {
  let component: BeeboxComponent;
  let fixture: ComponentFixture<BeeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
