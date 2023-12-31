import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbsComponent } from './ubs.component';

describe('UbsComponent', () => {
  let component: UbsComponent;
  let fixture: ComponentFixture<UbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
