
// Document Selectors
let profit = document.querySelector('#profit');
let revenue = parseFloat(document.querySelector('#revenue').textContent);
let expenses = parseFloat(document.querySelector('#expenses').textContent);
let profitCard = document.querySelector('#profitCard')

// Profit Math
let profitTotal = revenue - expenses;

profit.textContent = profitTotal

if(profitTotal < 0){
    profitCard.classList.add('negative');
}
// Expense breakdown variables
var wages = expenses * 0.30;
var inventory = expenses * 0.25;
var operatingCosts = expenses * 0.45;

console.log(wages, inventory, operatingCosts);

// Popper JS Enabler
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// CHART.JS

// SELECTORS
let ct1 = document.querySelector('#salesChart').getContext('2d');
let ct2 = document.querySelector('#trafficChart').getContext('2d');
let ct3 = document.querySelector('#expenseChart').getContext('2d');

let options = {
    aspectRatio: 1.4,
    legend: {
        position: "bottom",
        labels: {
            fontSize: 10,
            usePointStyle: true,
        }
    }
}



// SALES CHART
let salesChart = new Chart(ct1, {
    type: 'polarArea',
    data: {
        labels: ['Coffee', 'Lattes', 'Teas', 'Baked Goods', 'Other'],
        datasets: [{
            label: 'Orders',
            backgroundColor: [
                "#414345",
                "#f5d340",
                "#fd746c",
                "#48b1bf",
                "#bfbfbf"
                ],
            data: [112, 150, 65, 93, 80]
        }]
    },
    options: options
});

// TRAFFIC CHART
let trafficChart = new Chart(ct2, {
    type: 'line',
    data: {
        labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        datasets: [{
            backgroundColor: '#fd746c',
            label: 'customers',
            data: [6, 12, 22, 34, 26, 11, 6, 14, 26, 28, 19, 13, 4]
        }]
    },
    options: {
        legend: false,
        elements: {
            line: {
                fill: false,
                borderColor: '#48b1bf'
            },
        }
    }
})

// EXPENSE CHART
let expenseChart = new Chart(ct3, {
    type: 'pie',
    data: {
        labels: ['Wages', 'Inventory', 'Operating Costs'],
        datasets: [{
            data: [wages, inventory, operatingCosts],
            backgroundColor: [
                '#f5d340',
                '#fd746c',
                '#48b1bf'
            ]
        }]
    },
    options: options
})


