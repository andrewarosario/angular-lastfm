import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkScrobbleComponent } from './bulk-scrobble.component';

describe('BulkScrobbleComponent', () => {
  let component: BulkScrobbleComponent;
  let fixture: ComponentFixture<BulkScrobbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkScrobbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkScrobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
