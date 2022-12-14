import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputErrorsComponent } from './form-input-errors.component';

describe('FormInputErrorsComponent', () => {
  let component: FormInputErrorsComponent;
  let fixture: ComponentFixture<FormInputErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
