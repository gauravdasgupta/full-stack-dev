import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogReaderComponent } from './blog-reader.component';

describe('BlogReaderComponent', () => {
  let component: BlogReaderComponent;
  let fixture: ComponentFixture<BlogReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
