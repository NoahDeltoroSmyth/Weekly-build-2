import { renderFood } from './render-food.js';
import { food } from './food.js';

const foodList = document.getElementById('food-list');

for (let foodElement of food) {
    const foodDisplay = renderFood(foodElement);
    foodList.append(foodDisplay);
}