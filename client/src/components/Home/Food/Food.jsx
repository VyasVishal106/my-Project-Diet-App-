import React, { useState } from 'react';

let foodItems = [
  { id: 1, name: 'Oatmeal', category: 'Breakfast', calories: 150, protein: 5, carbs: 27, fats: 3 },
  { id: 2, name: 'Chicken Salad', category: 'Lunch', calories: 350, protein: 30, carbs: 10, fats: 20 },
  { id: 3, name: 'Grilled Salmon', category: 'Dinner', calories: 500, protein: 45, carbs: 0, fats: 30 },
  { id: 4, name: 'Greek Yogurt', category: 'Snack', calories: 100, protein: 10, carbs: 6, fats: 0 },
  { id: 5, name: 'Quinoa', category: 'Lunch', calories: 220, protein: 8, carbs: 39, fats: 4 },
  { id: 6, name: 'Avocado Toast', category: 'Breakfast', calories: 200, protein: 5, carbs: 22, fats: 12 },
  { id: 7, name: 'Blueberries', category: 'Snack', calories: 85, protein: 1, carbs: 21, fats: 0 },
  { id: 8, name: 'Kale Salad', category: 'Lunch', calories: 150, protein: 4, carbs: 8, fats: 10 },
  { id: 9, name: 'Almonds', category: 'Snack', calories: 160, protein: 6, carbs: 6, fats: 14 },
  { id: 10, name: 'Sweet Potato', category: 'Dinner', calories: 180, protein: 4, carbs: 41, fats: 0 },
  { id: 11, name: 'Hummus', category: 'Snack', calories: 150, protein: 5, carbs: 12, fats: 8 },
  { id: 12, name: 'Brown Rice', category: 'Lunch', calories: 215, protein: 5, carbs: 45, fats: 2 },
  { id: 13, name: 'Spinach Smoothie', category: 'Breakfast', calories: 130, protein: 3, carbs: 25, fats: 1 },
  { id: 14, name: 'Baked Cod', category: 'Dinner', calories: 150, protein: 30, carbs: 0, fats: 3 },
  { id: 15, name: 'Edamame', category: 'Snack', calories: 120, protein: 12, carbs: 10, fats: 4 },
  { id: 16, name: 'Turkey Sandwich', category: 'Lunch', calories: 300, protein: 25, carbs: 35, fats: 8 },
  { id: 17, name: 'Carrot Sticks', category: 'Snack', calories: 50, protein: 1, carbs: 12, fats: 0 },
  { id: 18, name: 'Lentil Soup', category: 'Dinner', calories: 250, protein: 18, carbs: 40, fats: 5 },
  { id: 19, name: 'Mixed Nuts', category: 'Snack', calories: 200, protein: 6, carbs: 15, fats: 16 },
  { id: 20, name: 'Egg Omelette', category: 'Breakfast', calories: 180, protein: 12, carbs: 2, fats: 14 },
  { id: 21, name: 'Tofu Stir Fry', category: 'Dinner', calories: 350, protein: 20, carbs: 40, fats: 10 },
  { id: 22, name: 'Green Tea', category: 'Drink', calories: 0, protein: 0, carbs: 0, fats: 0 },
  { id: 23, name: 'Chia Pudding', category: 'Breakfast', calories: 200, protein: 6, carbs: 25, fats: 8 },
  { id: 24, name: 'Apple Slices', category: 'Snack', calories: 60, protein: 0, carbs: 15, fats: 0 },
  { id: 25, name: 'Beet Salad', category: 'Lunch', calories: 170, protein: 4, carbs: 20, fats: 8 },
  { id: 26, name: 'Shrimp Skewers', category: 'Dinner', calories: 220, protein: 25, carbs: 5, fats: 10 },
  { id: 27, name: 'Bell Pepper Strips', category: 'Snack', calories: 30, protein: 1, carbs: 7, fats: 0 },
  { id: 28, name: 'Wild Rice', category: 'Lunch', calories: 165, protein: 7, carbs: 35, fats: 1 },
  { id: 29, name: 'Strawberries', category: 'Snack', calories: 50, protein: 1, carbs: 12, fats: 0 },
  { id: 30, name: 'Cottage Cheese', category: 'Breakfast', calories: 90, protein: 11, carbs: 3, fats: 4 },
  { id: 31, name: 'Baked Chicken Breast', category: 'Dinner', calories: 250, protein: 40, carbs: 0, fats: 6 },
  { id: 32, name: 'Peanut Butter', category: 'Snack', calories: 190, protein: 8, carbs: 6, fats: 16 },
  { id: 33, name: 'Broccoli', category: 'Lunch', calories: 55, protein: 4, carbs: 10, fats: 1 },
  { id: 34, name: 'Banana', category: 'Snack', calories: 100, protein: 1, carbs: 27, fats: 0 },
  { id: 35, name: 'Black Beans', category: 'Lunch', calories: 215, protein: 14, carbs: 40, fats: 1 },
  { id: 36, name: 'Mango Slices', category: 'Snack', calories: 60, protein: 1, carbs: 15, fats: 0 },
  { id: 37, name: 'Roasted Vegetables', category: 'Dinner', calories: 200, protein: 5, carbs: 35, fats: 8 },
  { id: 38, name: 'Pumpkin Seeds', category: 'Snack', calories: 170, protein: 7, carbs: 15, fats: 10 },
  { id: 39, name: 'Eggplant Parmesan', category: 'Dinner', calories: 350, protein: 15, carbs: 30, fats: 20 },
  { id: 40, name: 'Whole Wheat Toast', category: 'Breakfast', calories: 70, protein: 3, carbs: 13, fats: 1 },
  { id: 41, name: 'Veggie Burger', category: 'Lunch', calories: 250, protein: 15, carbs: 30, fats: 10 },
  { id: 42, name: 'Oranges', category: 'Snack', calories: 60, protein: 1, carbs: 15, fats: 0 },
  { id: 43, name: 'Brussels Sprouts', category: 'Dinner', calories: 80, protein: 4, carbs: 15, fats: 2 },
  { id: 44, name: 'Cashews', category: 'Snack', calories: 160, protein: 5, carbs: 9, fats: 14 },
  { id: 45, name: 'Grapefruit', category: 'Breakfast', calories: 50, protein: 1, carbs: 13, fats: 0 },
  { id: 46, name: 'Baked Tilapia', category: 'Dinner', calories: 180, protein: 30, carbs: 0, fats: 6 },
  { id: 47, name: 'Pineapple Chunks', category: 'Snack', calories: 50, protein: 1, carbs: 13, fats: 0 },
  { id: 48, name: 'Cauliflower Rice', category: 'Lunch', calories: 50, protein: 4, carbs: 10, fats: 1 },
  { id: 49, name: 'Grapes', category: 'Snack', calories: 70, protein: 1, carbs: 18, fats: 0 },
  { id: 50, name: 'Pistachios', category: 'Snack', calories: 160, protein: 6, carbs: 8, fats: 14 }
];

const FoodList = () => {
  const [filterBy, setFilterBy] = useState('none');

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const filteredItems = () => {
    switch (filterBy) {
      case 'id':
        return foodItems.sort((a, b) => a.id - b.id);
      case 'name':
        return foodItems.sort((a, b) => a.name.localeCompare(b.name));
      case 'category':
        return foodItems.sort((a, b) => a.category.localeCompare(b.category));
      case 'calories':
        return foodItems.sort((a, b) => a.calories - b.calories);
      case 'protein':
        return foodItems.sort((a, b) => a.protein - b.protein);
      case 'carbs':
        return foodItems.sort((a, b) => a.carbs - b.carbs);
      case 'fats':
        return foodItems.sort((a, b) => a.fats - b.fats);
      default:
        return foodItems;
    }
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <div className="flex items-center mb-4">
        <span className="mr-2">Filter by:</span>
        <select
          className="p-2 border rounded"
          value={filterBy}
          onChange={handleFilterChange}
        >
          <option value="none">None</option>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="calories">Calories</option>
          <option value="protein">Protein</option>
          <option value="carbs">Carbs</option>
          <option value="fats">Fats</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems().map(food => (
          <div key={food.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{food.name}</h2>
              <p className="text-gray-700">
                <strong>Category:</strong> {food.category}
              </p>
              <p className="text-gray-700">
                <strong>Calories:</strong> {food.calories}
              </p>
              <p className="text-gray-700">
                <strong>Protein:</strong> {food.protein}g
              </p>
              <p className="text-gray-700">
                <strong>Carbs:</strong> {food.carbs}g
              </p>
              <p className="text-gray-700">
                <strong>Fats:</strong> {food.fats}g
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
