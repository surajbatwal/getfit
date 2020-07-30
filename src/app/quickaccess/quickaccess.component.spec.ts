import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickaccessComponent } from './quickaccess.component';

describe('QuickaccessComponent', () => {
  let component: QuickaccessComponent;
  let fixture: ComponentFixture<QuickaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
