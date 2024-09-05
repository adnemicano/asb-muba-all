import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review4PublicComponent } from './review4-public.component';

describe('Review4PublicComponent', () => {
  let component: Review4PublicComponent;
  let fixture: ComponentFixture<Review4PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review4PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review4PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
