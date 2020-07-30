import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassewordrecoveryComponent } from './passewordrecovery.component';

describe('PassewordrecoveryComponent', () => {
  let component: PassewordrecoveryComponent;
  let fixture: ComponentFixture<PassewordrecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassewordrecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassewordrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
