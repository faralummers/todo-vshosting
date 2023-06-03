import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCounterComponent } from './todo-counter.component';

describe('TodoCounterComponent', () => {
  let component: TodoCounterComponent;
  let fixture: ComponentFixture<TodoCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCounterComponent]
    });
    fixture = TestBed.createComponent(TodoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
