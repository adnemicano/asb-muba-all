import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkComponent } from './hspk.component';

describe('HspkComponent', () => {
  let component: HspkComponent;
  let fixture: ComponentFixture<HspkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HspkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HspkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
