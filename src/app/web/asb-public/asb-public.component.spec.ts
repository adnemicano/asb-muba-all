import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbPublicComponent } from './asb-public.component';

describe('AsbPublicComponent', () => {
  let component: AsbPublicComponent;
  let fixture: ComponentFixture<AsbPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsbPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsbPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
