/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KhumsComponent } from './khums.component';

describe('KhumsComponent', () => {
  let component: KhumsComponent;
  let fixture: ComponentFixture<KhumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
