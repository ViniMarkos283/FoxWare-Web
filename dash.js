const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels:['Jan','Feb','Mar','Abr','May','Jun', 'Jul', 'Ago', 'Set', 'Out','Nov','Dez'],

        datasets:[
            {
                label:'Card 1',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004, 98622],
                borderColor: 'orange',
                borderWidth: 2
            }, 
            {
                label:'Card 2',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 28322, 36844, 50075],
                borderColor: 'brown',
                borderWidth: 2
            }, 
            {
                label:'Card 2',
                data: [62500, 51000, 88800, 29000, 46900, 82698, 7000, 2000, 58656, 38322, 46844, 90075],
                borderColor: 'pink',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

// Show or ride hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display='block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');

    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

