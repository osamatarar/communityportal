/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserforumsComponent } from './userforums.component';

describe('UserforumsComponent', () => {
  let component: UserforumsComponent;
  let fixture: ComponentFixture<UserforumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserforumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserforumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
