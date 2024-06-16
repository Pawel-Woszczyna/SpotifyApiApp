import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsGridComponent } from './artists-grid.component';

describe('ArtistsGridComponent', () => {
  let component: ArtistsGridComponent;
  let fixture: ComponentFixture<ArtistsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsGridComponent]
    });
    fixture = TestBed.createComponent(ArtistsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
