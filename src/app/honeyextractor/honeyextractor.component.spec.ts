import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyextractorComponent } from './honeyextractor.component';

describe('HoneyextractorComponent', () => {
  let component: HoneyextractorComponent;
  let fixture: ComponentFixture<HoneyextractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyextractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyextractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
