import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesfullComponent } from './servicesfull.component';

describe('ServicesfullComponent', () => {
  let component: ServicesfullComponent;
  let fixture: ComponentFixture<ServicesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
