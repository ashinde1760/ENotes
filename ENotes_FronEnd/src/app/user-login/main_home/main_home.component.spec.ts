/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_homeComponent } from './main_home.component';

describe('Main_homeComponent', () => {
  let component: Main_homeComponent;
  let fixture: ComponentFixture<Main_homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
