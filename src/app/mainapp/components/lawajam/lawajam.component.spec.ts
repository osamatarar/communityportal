/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawajamComponent } from './lawajam.component';

describe('LawajamComponent', () => {
  let component: LawajamComponent;
  let fixture: ComponentFixture<LawajamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawajamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawajamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
