import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsGridComponent } from './playlists-grid.component';

describe('PlaylistsGridComponent', () => {
  let component: PlaylistsGridComponent;
  let fixture: ComponentFixture<PlaylistsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistsGridComponent]
    });
    fixture = TestBed.createComponent(PlaylistsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
