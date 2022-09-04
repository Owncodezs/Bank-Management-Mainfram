import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicktransferComponent } from './quicktransfer.component';

describe('QuicktransferComponent', () => {
  let component: QuicktransferComponent;
  let fixture: ComponentFixture<QuicktransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicktransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
