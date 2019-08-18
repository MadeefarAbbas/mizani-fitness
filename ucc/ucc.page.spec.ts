import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UccPage } from './ucc.page';

describe('UccPage', () => {
  let component: UccPage;
  let fixture: ComponentFixture<UccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UccPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
