import React, { useState } from 'react';
import './Diet.css'; // Import the CSS file
import FoodItem from './FoodItem';

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    activities: '',
    classPlan: '',
    mealsPerDay: 3,
  });

  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [calories, setCalories] = useState({
    maintain: null,
    mildLoss: null,
    weightLoss: null,
    extremeLoss: null,
  });

  const [error, setError] = useState('');

  const activityFactors = {
    sedentary: 1.2,
    'lightly active': 1.375,
    'moderately active': 1.55,
    'very active': 1.725,
    'super active': 1.9,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      calculateBMI();
      calculateCalories();
      setError('');
    } else {
      setError('Please ensure all fields are filled out correctly.');
    }
  };

  const validateForm = () => {
    const { age, height, weight, gender, activities, classPlan, mealsPerDay } = formData;
    return (
      age > 0 &&
      height > 0 &&
      weight > 0 &&
      gender &&
      activities &&
      classPlan &&
      mealsPerDay >= 1 &&
      mealsPerDay <= 9
    );
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100;
    const bmiValue = formData.weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    setBmiCategory(getBmiCategory(bmiValue));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  const calculateCalories = () => {
    const bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + (formData.gender === 'male' ? 5 : -161);
    const activityFactor = activityFactors[formData.activities];
    const maintenanceCalories = bmr * activityFactor;
    setCalories({
      maintain: maintenanceCalories.toFixed(0),
      mildLoss: (maintenanceCalories - 250).toFixed(0),
      weightLoss: (maintenanceCalories - 500).toFixed(0),
      extremeLoss: (maintenanceCalories - 1000).toFixed(0),
    });
  };

  const handleReset = () => {
    setFormData({
      age: '',
      height: '',
      weight: '',
      gender: '',
      activities: '',
      classPlan: '',
      mealsPerDay: 3,
    });
    setBmi(null);
    setBmiCategory('');
    setCalories({
      maintain: null,
      mildLoss: null,
      weightLoss: null,
      extremeLoss: null,
    });
    setError('');
  };

  return (
    <>
      <form className="user-info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Daily Activities:</label>
          <select name="activities" value={formData.activities} onChange={handleChange} required>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightly active">Lightly Active (light exercise/sports 1-3 days/week)</option>
            <option value="moderately active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
            <option value="very active">Very Active (hard exercise/sports 6-7 days a week)</option>
            <option value="super active">Super Active (very hard exercise/sports & physical job)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Class Plan:</label>
          <select name="classPlan" value={formData.classPlan} onChange={handleChange} required>
            <option value="">Select Class Plan</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label>Meals Per Day:</label>
          <input
            type="range"
            name="mealsPerDay"
            min="1"
            max="9"
            value={formData.mealsPerDay}
            onChange={handleChange}
            required
          />
          <span>{formData.mealsPerDay}</span>
        </div>
        <div className="form-group button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        {error && <p className="error">{error}</p>}
        {bmi && (
          <div className="bmi-calculator">
            <h3>BMI Calculator</h3>
            <p>BMI: {bmi} kg/m²</p>
            <p className="bmi-category">{bmiCategory}</p>
          </div>
        )}
        {calories.maintain && (
          <div className="calories-calculator">
            <h3>Calories Calculator</h3>
            <div className="MainDietBoxs">
              <div className="DietBox">
                <p>Maintain weight:</p>
                <p>{calories.maintain} Calories/day</p>
              </div>
              <div className="DietBox">
                <p>Mild weight loss:</p>
                <p>{calories.mildLoss} Calories/day</p>
                <span>0.25 kg/week</span>
              </div>
              <div className="DietBox">
                <p>Weight loss:</p>
                <p>{calories.weightLoss} Calories/day</p>
                <span>0.5 kg/week</span>
              </div>
              <div className="DietBox">
                <p>Extreme weight loss:</p>
                <p>{calories.extremeLoss} Calories/day</p>
                <span>1 kg/week</span>
              </div>
            </div>
            <FoodItem />
          </div>
        )}

        {/* {food && <FoodItem />} */}
      </form>
    </>
  );
};

export default UserInfoForm;
