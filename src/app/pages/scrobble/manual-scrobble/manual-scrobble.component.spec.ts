import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualScrobbleComponent } from './manual-scrobble.component';

describe('ManualScrobbleComponent', () => {
  let component: ManualScrobbleComponent;
  let fixture: ComponentFixture<ManualScrobbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualScrobbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualScrobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
