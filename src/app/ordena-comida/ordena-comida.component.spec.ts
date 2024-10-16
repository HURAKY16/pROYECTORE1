import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenaComidaComponent } from './ordena-comida.component';

describe('OrdenaComidaComponent', () => {
  let component: OrdenaComidaComponent;
  let fixture: ComponentFixture<OrdenaComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenaComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenaComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
