export function renderFood(food){
    const foodDisplay = document.createElement('ul');
    foodDisplay.classList.add('food-list');

    const img = document.createElement('img');
    img.src = food.img;

    const span = document.createElement('span');
    span.textContent = food.name;

    foodDisplay.append(img, span);

    return foodDisplay;
}