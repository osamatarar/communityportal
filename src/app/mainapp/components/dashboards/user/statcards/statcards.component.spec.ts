/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatcardsComponent } from './statcards.component';

describe('StatcardsComponent', () => {
  let component: StatcardsComponent;
  let fixture: ComponentFixture<StatcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
