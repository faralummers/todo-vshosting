import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export const featureSelector = createFeatureSelector<TodoState>('todo');
export const todoListSelector = createSelector(featureSelector, state => state?.todoList);
