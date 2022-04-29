import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpieDetailComponent } from './recpie-detail.component';

describe('RecpieDetailComponent', () => {
  let component: RecpieDetailComponent;
  let fixture: ComponentFixture<RecpieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
