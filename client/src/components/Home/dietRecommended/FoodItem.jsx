import React, { useState } from 'react';

const dietData = [
  {
    goal: 'Weight Loss',
    foodItems: [
      { id: 1, name: 'Oatmeal', category: 'Breakfast', calories: 150, proteins: 5, carbs: 27, fats: 3 },
      { id: 2, name: 'Greek Yogurt with Berries', category: 'Breakfast', calories: 120, proteins: 10, carbs: 15, fats: 2 },
      { id: 3, name: 'Scrambled Egg Whites', category: 'Breakfast', calories: 90, proteins: 20, carbs: 2, fats: 0 },
      { id: 4, name: 'Grilled Chicken Salad', category: 'Lunch', calories: 350, proteins: 30, carbs: 10, fats: 15 },
      { id: 5, name: 'Tuna Salad', category: 'Lunch', calories: 250, proteins: 30, carbs: 5, fats: 10 },
      { id: 6, name: 'Lentil Soup', category: 'Lunch', calories: 180, proteins: 12, carbs: 30, fats: 3 },
      { id: 7, name: 'Steamed Vegetables', category: 'Dinner', calories: 200, proteins: 5, carbs: 30, fats: 2 },
      { id: 8, name: 'Grilled Fish with Asparagus', category: 'Dinner', calories: 300, proteins: 35, carbs: 5, fats: 10 },
      { id: 9, name: 'Quinoa and Black Beans', category: 'Dinner', calories: 250, proteins: 15, carbs: 40, fats: 5 },
      { id: 10, name: 'Cottage Cheese with Pineapple', category: 'Snack', calories: 150, proteins: 15, carbs: 10, fats: 5 },
      { id: 11, name: 'Almonds', category: 'Snack', calories: 200, proteins: 8, carbs: 7, fats: 18 }
    ]
  },
  {
    goal: 'Muscle Gain',
    foodItems: [
      { id: 12, name: 'Egg and Spinach Breakfast Sandwich', category: 'Breakfast', calories: 400, proteins: 30, carbs: 30, fats: 15 },
      { id: 13, name: 'Chicken and Rice Bowl', category: 'Lunch', calories: 500, proteins: 40, carbs: 50, fats: 10 },
      { id: 14, name: 'Beef Stir Fry', category: 'Dinner', calories: 600, proteins: 45, carbs: 55, fats: 20 },
      { id: 15, name: 'Protein Shake', category: 'Snack', calories: 250, proteins: 30, carbs: 20, fats: 5 },
      { id: 16, name: 'Sweet Potato', category: 'Snack', calories: 150, proteins: 3, carbs: 30, fats: 0 },
      { id: 17, name: 'Salmon Fillet', category: 'Dinner', calories: 450, proteins: 40, carbs: 0, fats: 30 },
      { id: 18, name: 'Avocado Toast', category: 'Breakfast', calories: 300, proteins: 10, carbs: 25, fats: 20 }
    ]
  }
];

const DietComponent = () => {
  const [selectedFoodId, setSelectedFoodId] = useState(null);

  const handleFoodItemClick = (id) => {
    setSelectedFoodId(selectedFoodId === id ? null : id);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-left gap-6 lg:grid-cols-2">
          {dietData.map((diet, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <h2 className="text-center text-xl font-semibold py-4 bg-blue-500 text-white">{`Diet Plan for ${diet.goal}`}</h2>
              <div className="px-6 py-4">
                {diet.foodItems.map((food) => (
                  <div key={food.id} className="mb-4">
                    <h3 className=" text-left font-semibold cursor-pointer hover:text-blue-500" onClick={() => handleFoodItemClick(food.id)}>{food.name}</h3>
                    {selectedFoodId === food.id && (
                      <div className="mt-2">
                        <p><span className="font-semibold">Category:</span> {food.category}</p>
                        <p><span className="font-semibold">Calories:</span> {food.calories}</p>
                        <p><span className="font-semibold">Proteins:</span> {food.proteins}g</p>
                        <p><span className="font-semibold">Carbs:</span> {food.carbs}g</p>
                        <p><span className="font-semibold">Fats:</span> {food.fats}g</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietComponent;
