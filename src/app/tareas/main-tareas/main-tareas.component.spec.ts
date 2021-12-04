import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTareasComponent } from './main-tareas.component';

describe('MainTareasComponent', () => {
  let component: MainTareasComponent;
  let fixture: ComponentFixture<MainTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
