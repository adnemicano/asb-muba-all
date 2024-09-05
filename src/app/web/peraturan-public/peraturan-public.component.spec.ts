import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanPublicComponent } from './peraturan-public.component';

describe('PeraturanPublicComponent', () => {
  let component: PeraturanPublicComponent;
  let fixture: ComponentFixture<PeraturanPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeraturanPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeraturanPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
