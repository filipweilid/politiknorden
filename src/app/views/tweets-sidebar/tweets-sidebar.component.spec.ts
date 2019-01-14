import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsSidebarComponent } from './tweets-sidebar.component';

describe('TweetsSidebarComponent', () => {
  let component: TweetsSidebarComponent;
  let fixture: ComponentFixture<TweetsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
