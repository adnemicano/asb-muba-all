import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review1PublicComponent } from './review1-public.component';

describe('Review1PublicComponent', () => {
  let component: Review1PublicComponent;
  let fixture: ComponentFixture<Review1PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review1PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review1PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
