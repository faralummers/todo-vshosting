import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export const featureSelector = createFeatureSelector<TodoState>('todo');
export const todoListSelector = createSelector(featureSelector, state => state?.todoList);
export const todoCompletedTaskSelector = createSelector(todoListSelector, todoList => {
  return todoList?.filter(task => task.completed).length;
});

export const todoNewTaskSelector = createSelector(todoListSelector, todoList => {
    return todoList?.filter(task => !task.completed).length;
});

export const filteredCompletedTaskSelector = createSelector(featureSelector, state => state.completedTasks);
export const filteredNewTaskSelector = createSelector(featureSelector, state => state.newTasks);

export const todoListWithFiltersSelector =
  createSelector(todoListSelector, filteredNewTaskSelector, filteredCompletedTaskSelector, (todoList, filteredNewTaskSelector, filteredCompletedTaskSelector) => {
    if(filteredNewTaskSelector && !filteredCompletedTaskSelector) {
      return todoList?.filter(todoList => !todoList.completed);
    } else if(filteredCompletedTaskSelector && !filteredNewTaskSelector) {
      return todoList?.filter(todoList => todoList.completed);
    } else if(filteredCompletedTaskSelector && filteredNewTaskSelector) {
      return todoList;
    }
    return todoList;
});
