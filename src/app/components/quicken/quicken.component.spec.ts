import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickenComponent } from './quicken.component';

describe('QuickenComponent', () => {
  let component: QuickenComponent;
  let fixture: ComponentFixture<QuickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
