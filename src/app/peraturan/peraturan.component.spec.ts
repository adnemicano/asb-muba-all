import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanComponent } from './peraturan.component';

describe('PeraturanComponent', () => {
  let component: PeraturanComponent;
  let fixture: ComponentFixture<PeraturanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeraturanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeraturanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
