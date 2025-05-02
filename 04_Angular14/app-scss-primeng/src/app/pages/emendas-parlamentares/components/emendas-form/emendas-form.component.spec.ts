import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmendasFormComponent } from './emendas-form.component';

describe('EmendasFormComponent', () => {
  let component: EmendasFormComponent;
  let fixture: ComponentFixture<EmendasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmendasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmendasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
