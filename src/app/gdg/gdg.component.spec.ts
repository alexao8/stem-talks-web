import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgComponent } from './gdg.component';

describe('GdgComponent', () => {
  let component: GdgComponent;
  let fixture: ComponentFixture<GdgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GdgComponent]
    });
    fixture = TestBed.createComponent(GdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
