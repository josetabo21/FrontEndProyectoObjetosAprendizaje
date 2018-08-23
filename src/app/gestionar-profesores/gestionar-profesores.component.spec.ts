import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarProfesoresComponent } from './gestionar-profesores.component';

describe('GestionarProfesoresComponent', () => {
  let component: GestionarProfesoresComponent;
  let fixture: ComponentFixture<GestionarProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarProfesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
