/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightimgsideComponent } from './rightimgside.component';

describe('RightimgsideComponent', () => {
  let component: RightimgsideComponent;
  let fixture: ComponentFixture<RightimgsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightimgsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightimgsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
