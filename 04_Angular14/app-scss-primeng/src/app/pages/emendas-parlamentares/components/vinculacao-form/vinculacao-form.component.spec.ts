import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacaoFormComponent } from './vinculacao-form.component';

describe('VinculacaoFormComponent', () => {
  let component: VinculacaoFormComponent;
  let fixture: ComponentFixture<VinculacaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinculacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
