import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkPublicComponent } from './hspk-public.component';

describe('HspkPublicComponent', () => {
  let component: HspkPublicComponent;
  let fixture: ComponentFixture<HspkPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HspkPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HspkPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
