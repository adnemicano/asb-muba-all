import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review3PublicComponent } from './review3-public.component';

describe('Review3PublicComponent', () => {
  let component: Review3PublicComponent;
  let fixture: ComponentFixture<Review3PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Review3PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review3PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
