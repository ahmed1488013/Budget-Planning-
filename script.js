let budgets = {
    'Food': 500,
    'Rent': 1200,
    'Entertainment': 300
};

let expenses = {
    'Food': 0,
    'Rent': 0,
    'Entertainment': 0
};

function showExpenseForm(category) {
    document.getElementById('expense-form').style.display = 'block';
    document.getElementById('expense-form').dataset.category = category;
}

function closeExpenseForm() {
    document.getElementById('expense-form').style.display = 'none';
}

function addExpense() {
    let category = document.getElementById('expense-form').dataset.category;
    let expenseAmount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        expenses[category] += expenseAmount;
        updateProgressBar(category);
        closeExpenseForm();
    } else {
        alert('Please enter a valid amount.');
    }
}

function updateProgressBar(category) {
    const budget = budgets[category];
    const spent = expenses[category];
    const progressBar = document.getElementById(`${category.toLowerCase()}-bar`);

    let percentage = (spent / budget) * 100;
    if (percentage > 100) percentage = 100;

    progressBar.style.width = `${percentage}%`;
    progressBar.style.backgroundColor = percentage > 80 ? '#FF4C4C' : '#1D3557';
}
