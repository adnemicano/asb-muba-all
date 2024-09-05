import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiPublicComponent } from './informasi-public.component';

describe('InformasiPublicComponent', () => {
  let component: InformasiPublicComponent;
  let fixture: ComponentFixture<InformasiPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformasiPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
