import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCityFormComponent } from './edit-city-form.component';

describe('EditCityFormComponent', () => {
  let component: EditCityFormComponent;
  let fixture: ComponentFixture<EditCityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
