import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiDetailComponent } from './parti-detail.component';

describe('PartiDetailComponent', () => {
  let component: PartiDetailComponent;
  let fixture: ComponentFixture<PartiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
