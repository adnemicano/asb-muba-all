import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaPublicComponent } from './berita-public.component';

describe('BeritaPublicComponent', () => {
  let component: BeritaPublicComponent;
  let fixture: ComponentFixture<BeritaPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeritaPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeritaPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
