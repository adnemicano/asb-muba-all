import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbComponent } from './asb.component';

describe('AsbComponent', () => {
  let component: AsbComponent;
  let fixture: ComponentFixture<AsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
