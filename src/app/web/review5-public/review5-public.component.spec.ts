import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review5PublicComponent } from './review5-public.component';

describe('Review5PublicComponent', () => {
  let component: Review5PublicComponent;
  let fixture: ComponentFixture<Review5PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review5PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review5PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
