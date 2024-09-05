import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review6PublicComponent } from './review6-public.component';

describe('Review6PublicComponent', () => {
  let component: Review6PublicComponent;
  let fixture: ComponentFixture<Review6PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review6PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review6PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
