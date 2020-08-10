import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCorouselComponent } from './blog-corousel.component';

describe('BlogCorouselComponent', () => {
  let component: BlogCorouselComponent;
  let fixture: ComponentFixture<BlogCorouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCorouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
