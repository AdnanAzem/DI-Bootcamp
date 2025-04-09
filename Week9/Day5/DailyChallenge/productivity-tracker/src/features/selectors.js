// selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Select all tasks
export const selectAllTasks = state => state.tasks.tasks;

// Select all categories
export const selectAllCategories = state => state.categories.categories;


// Select tasks by category (handle null categoryId)
export const selectTasksByCategory = createSelector(
    [selectAllTasks, (state, categoryId) => categoryId],
    (tasks, categoryId) => {
      if (categoryId === null || categoryId === undefined) {
        return tasks.filter(task => task.categoryId === null);
      }
      return tasks.filter(task => task.categoryId === categoryId);
    }
  );

// Select completed tasks count
export const selectCompletedTasks = createSelector(
  [selectAllTasks],
  tasks => tasks.filter(task => task.completed).length
);

// Select category by ID
export const selectCategoryById = createSelector(
  [selectAllCategories, (state, categoryId) => categoryId],
  (categories, categoryId) => categories.find(cat => cat.id === categoryId)
);