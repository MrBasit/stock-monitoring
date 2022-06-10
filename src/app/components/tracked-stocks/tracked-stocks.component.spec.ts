import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedStocksComponent } from './tracked-stocks.component';

describe('TrackedStocksComponent', () => {
  let component: TrackedStocksComponent;
  let fixture: ComponentFixture<TrackedStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackedStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
