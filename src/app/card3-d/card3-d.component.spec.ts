/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Card3DComponent } from './card3-d.component';

describe('Card3DComponent', () => {
  let component: Card3DComponent;
  let fixture: ComponentFixture<Card3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
