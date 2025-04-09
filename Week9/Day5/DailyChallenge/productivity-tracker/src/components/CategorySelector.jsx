// CategorySelector.js
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories } from '../features/selectors';
import { addCategory, deleteCategory } from '../features/categorySlice';

const CategorySelector = ({ selectedCategoryId, onSelectCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#000000');

  const handleAddCategory = useCallback(() => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Date.now(), // Simple ID generation
        name: newCategoryName,
        color: newCategoryColor
      };
      dispatch(addCategory(newCategory));
      setNewCategoryName('');
    }
  }, [dispatch, newCategoryName, newCategoryColor]);

  const handleDeleteCategory = useCallback((categoryId) => {
    dispatch(deleteCategory(categoryId));
    if (selectedCategoryId === categoryId) {
      onSelectCategory(null);
    }
  }, [dispatch, selectedCategoryId, onSelectCategory]);

  return (
    <div className="category-selector">
      <div className="category-list">
        <button 
          onClick={() => onSelectCategory(null)}
          className={!selectedCategoryId ? 'active' : ''}
        >
          All Tasks
        </button>
        {categories.length === 0 ? (
          <p>No categories yet. Add your first category below!</p>
        ) : (categories.map(category => (
          <div key={category.id} className="category-item">
            <button
              onClick={() => onSelectCategory(category.id)}
              style={{ backgroundColor: category.color }}
              className={selectedCategoryId === category.id ? 'active' : ''}
            >
              {category.name}
            </button>
            <button 
              onClick={() => handleDeleteCategory(category.id)}
              className="delete-category"
            >
              ×
            </button>
          </div>
        )))}
      </div>
      <div className="add-category">
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New category name"
        />
        <input
          type="color"
          value={newCategoryColor}
          onChange={(e) => setNewCategoryColor(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
};

export default CategorySelector;