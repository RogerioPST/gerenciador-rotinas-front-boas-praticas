import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinadiaComponent } from './rotinadia.component';

describe('RotinadiaComponent', () => {
  let component: RotinadiaComponent;
  let fixture: ComponentFixture<RotinadiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotinadiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotinadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
