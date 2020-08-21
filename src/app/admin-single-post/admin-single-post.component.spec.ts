import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSinglePostComponent } from './admin-single-post.component';

describe('AdminSinglePostComponent', () => {
  let component: AdminSinglePostComponent;
  let fixture: ComponentFixture<AdminSinglePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSinglePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
