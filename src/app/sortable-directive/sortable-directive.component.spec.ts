import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableDirectiveComponent } from './sortable-directive.component';

describe('SortableDirectiveComponent', () => {
  let component: SortableDirectiveComponent;
  let fixture: ComponentFixture<SortableDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
