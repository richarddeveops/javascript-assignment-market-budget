let showBudget = document.getElementById('showBudget');
let remainingBudget = 0;

function setBudget() {
    let inputBudget = document.getElementById('budgetInput').value.trim();
    if (inputBudget === '' || Number(inputBudget) <= 0) {
        alert('Enter a valid budget amount!');
    } else {
        showBudget.innerHTML = `<span class="budget-value">${inputBudget}</span>`;
        remainingBudget = Number(inputBudget);
    }
    document.getElementById('budgetInput').value = '';
}

function addItem() {
    let itemNameInput = document.getElementById('itemNameInput').value.trim();
    let itemPriceInput = document.getElementById('itemPriceInput').value.trim();
    let displayArea = document.getElementById('cartItems');

    if (itemNameInput === '' || itemPriceInput === '') {
        alert('Please enter both item name and price!');
    } else if (isNaN(itemPriceInput) || Number(itemPriceInput) <= 0 || !isNaN(itemNameInput)) {
        alert('Please enter a valid item price and name!');
    } else if(remainingBudget - Number(itemPriceInput) < 0){
        alert('Insufficient budget to add this item!');
    }else{
        remainingBudget -= Number(itemPriceInput);
        showBudget.innerHTML = `<span class="budget-value">${remainingBudget}</span>`;
        displayArea.innerHTML += `<p class="cart-item"><span>${itemNameInput}</span><strong>$${itemPriceInput}</strong></p>`;

        document.getElementById('itemNameInput').value = '';
        document.getElementById('itemPriceInput').value = '';
    }
}




// let showBudget = document.getElementById('showBudget');
// let remainingBudget = 0;

// function setBudget() {
//     let inputBudget = document.getElementById('budgetInput').value.trim();
//     if (inputBudget === '' || Number(inputBudget) <= 0) {
//         alert('Enter a valid budget amount!');
//     } else {
//         showBudget.innerHTML = `<span style="display: inline-block; background: linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15)); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 10px; padding: 4px 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.7); font-weight: bold; color: #000; letter-spacing: 0.5px;">${inputBudget}</span>`;
//         remainingBudget = Number(inputBudget);
//     }
//     document.getElementById('budgetInput').value = '';
// }

// function addItem() {
//     let itemNameInput = document.getElementById('itemNameInput').value.trim();
//     let itemPriceInput = document.getElementById('itemPriceInput').value.trim();
//     let displayArea = document.getElementById('cartItems');

//     if (itemNameInput === '' || itemPriceInput === '') {
//         alert('Please enter both item name and price!');
//     } else if (isNaN(itemPriceInput) || Number(itemPriceInput) <= 0 || !isNaN(itemNameInput)) {
//         alert('Please enter a valid item price and name!');
//     } else if(remainingBudget - Number(itemPriceInput) < 0){
//         alert('Insufficient budget to add this item!');
//     }else{
//         remainingBudget -= Number(itemPriceInput);
//         showBudget.innerHTML = `<span>${remainingBudget}</span>`;
//         displayArea.innerHTML += `<p style="display: flex; justify-content: space-between; align-items: center; background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.12)); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 12px; padding: 12px 16px; margin: 10px 0; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6); color: #111; font-size: 15px; font-weight: 500;"><span>${itemNameInput}</span><strong style="color: #000;">$${itemPriceInput}</strong></p>`;

//         document.getElementById('itemNameInput').value = '';
//         document.getElementById('itemPriceInput').value = '';
//     }
// }


// /* let showBudget = document.getElementById('showBudget');let inputBudget = document.getElementById('budgetInput').value.trim();function setBudget(){    let inputBudget = document.getElementById('budgetInput').value;    if(inputBudget === ''){        alert('Enter your budget amount!');    }else{        showBudget.innerHTML = `<span>${inputBudget}</span>`    }}function addItem(){    let itemNameInput = document.getElementById('itemNameInput').value.trim();    let itemPriceInput = document.getElementById('itemPriceInput').value;    let displayArea = document.getElementById('cartItems');    if(itemNameInput === '' && itemPriceInput === ''){        alert('Please enter both item name and price!');    }else if(itemPriceInput != Number && itemNameInput != String){        alert('Please enter both item name and price correctly!');    }else{        displayArea.innerHTML += `<p>${itemNameInput}: $${parseFloat(itemPriceInput).toFixed(2)}</p>`;    }} */