import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionComponent } from './postion.component';

describe('PostionComponent', () => {
  let component: PostionComponent;
  let fixture: ComponentFixture<PostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
