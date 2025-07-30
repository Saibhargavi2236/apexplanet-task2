document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("addIngredientBtn");
    if (addBtn) {
        addBtn.addEventListener("click", addIngredient);
    }
    

    // Optional: load greeting from localStorage if needed
    const username = localStorage.getItem("username");
    if (username && document.getElementById("greeting")) {
        document.getElementById("greeting").textContent = `Welcome, ${username}!`;
    }
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
             const usernameInput = document.getElementById("username").value.trim();
        const emailInput = document.getElementById("mail").value.trim();
            const passwordInput = document.getElementById("password").value.trim();

        const validUsername = "admin"; // 👈 change this to your preferred name
        const validEmail = "admin@gmail.com"; // 👈 change this to your preferred email
        const validPassword = "password123"; // 👈 change this to your preferred password

        if (form.checkValidity()) {
            if (usernameInput === validUsername && emailInput === validEmail && passwordInput === validPassword) {
                localStorage.setItem("username", usernameInput);
                window.location.href = "recepie.html";
            } else {
                alert("Invalid username, email, or password.");
            }
        } else {
            form.reportValidity();
        }
        });
    }
    const setIngredientsBtn = document.getElementById("setIngredientsBtn");
        const ingredientSection = document.getElementById("ingredientSection");

        if (setIngredientsBtn && ingredientSection) {
        setIngredientsBtn.addEventListener("click", function () {
        ingredientSection.style.display = "none";
        });
    }
    const saveRecipeNameBtn = document.getElementById("setRecipeNameBtn");
const recipeNameInput = document.getElementById("recipeNameInput");
const recipeNameDisplay = document.getElementById("recipeNameDisplay");
const recipeNameSection = document.getElementById("recipeNameSection");

if (saveRecipeNameBtn) {
    saveRecipeNameBtn.addEventListener("click", function () {
        const name = recipeNameInput.value.trim();
        if (name !== "") {
            recipeNameDisplay.textContent = name;
            recipeNameDisplay.style.display = "block";
            recipeNameSection.style.display = "none";
            localStorage.setItem("recipeName", name); // optional for persistence
        }
    });
}
    const saveProcessBtn = document.getElementById("saveProcessBtn");
const recipeProcessTextarea = document.getElementById("recipeProcess");
const savedProcessDisplay = document.getElementById("savedProcess");

if (saveProcessBtn) {
    saveProcessBtn.addEventListener("click", function () {
        const instructions = recipeProcessTextarea.value.trim();
        if (instructions !== "") {
            savedProcessDisplay.textContent = instructions;
            savedProcessDisplay.style.display = "block";
            recipeProcessTextarea.style.display = "none";
            saveProcessBtn.style.display = "none";
            localStorage.setItem("recipeProcess", instructions); // optional
            recipeProcessTextarea.value = "";
        }
        else {
            alert("Please enter the recipe process.");
        }
    });
}
    
});
function addIngredient() {
    const nameInput = document.getElementById("ingredientName");
    const amountInput = document.getElementById("ingredientAmount");
    const list = document.getElementById("ingredientList");

    const name = nameInput.value.trim();
    const amount = amountInput.value.trim();

    if (name !== "" && amount !== "") {
        const li = document.createElement("li");
        li.textContent = `${name} - ${amount}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list.removeChild(li);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);

        // Clear inputs
        nameInput.value = "";
        amountInput.value = "";
    }
}


