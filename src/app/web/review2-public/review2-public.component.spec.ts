import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review2PublicComponent } from './review2-public.component';

describe('Review2PublicComponent', () => {
  let component: Review2PublicComponent;
  let fixture: ComponentFixture<Review2PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review2PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review2PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
