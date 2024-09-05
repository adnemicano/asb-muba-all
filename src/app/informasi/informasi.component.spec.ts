import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiComponent } from './informasi.component';

describe('InformasiComponent', () => {
  let component: InformasiComponent;
  let fixture: ComponentFixture<InformasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
