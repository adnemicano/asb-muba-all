import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SshPublicComponent } from './ssh-public.component';

describe('SshPublicComponent', () => {
  let component: SshPublicComponent;
  let fixture: ComponentFixture<SshPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SshPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SshPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
