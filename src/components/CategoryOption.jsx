import React from 'react';

const CategoryOption = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
  ];

  const handleCheckboxChange = (categoryValue) => {
    if (selectedCategory === categoryValue) {
      onCategoryChange(null); 
    } else {
      onCategoryChange(categoryValue); // Select new category
    }
  };

  return (
    <div>
      <button 
        className="unselect-button" 
        onClick={() => onCategoryChange(null)}
      >
        Unselect All
      </button>
      <div className="category-options">
        {categories.map((category) => (
          <label key={category.value} className="category-label">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(category.value)}
              checked={selectedCategory === category.value}
            />
            {category.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryOption;
