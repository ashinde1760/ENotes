/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Home_navComponent } from './home_nav.component';

describe('Home_navComponent', () => {
  let component: Home_navComponent;
  let fixture: ComponentFixture<Home_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
