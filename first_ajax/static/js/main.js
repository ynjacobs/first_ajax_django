document.addEventListener("DOMContentLoaded", function() {
  
const myMain = document.querySelector('#intro_ajax');
const myBtn = document.querySelector('#ajax_button');
const pingBtn = document.querySelector('#ping_button');
const countBtn = document.querySelector('#count_button');
const timeBtn = document.querySelector('#time_button');
const carBtn = document.querySelector('#car_button');
const liCars = document.querySelector('#cars');



myBtn.addEventListener('click', event => {
    // console.log('I am clicked');

    const request = axios.get('http://intro-ajax-api.herokuapp.com').then(response => {
        myMain.innerHTML = response.data;
        console.log('Inside the then() callback');
        // console.log('RESPONSE', response);
    });

});

pingBtn.addEventListener('click', event => {
    // console.log('I am clicked');

    const request = axios.get('http://intro-ajax-api.herokuapp.com/ping').then(response => {
        
        myMain.innerHTML = response.data;
        console.log('Inside the then() callback');
        // console.log('RESPONSE', response);
    }).catch(error => {
        const errorSection = document.createElement('section');
        errorSection.innerText = 'We\'ll try harder next time';
        errorSection.classList.add('error');
        myMain.appendChild(errorSection);
        console.log('Gonna try harder');
        

    }).then(function (response) {
        console.log('I will keep running regardless of any problems');
        
      });
});

countBtn.addEventListener('click', event => {
    // console.log('I am clicked');

    const request = axios.get('http://intro-ajax-api.herokuapp.com/count').then(response => {
        myMain.innerHTML = response.data;
        console.log('Inside the then() callback');
        
    });

});

timeBtn.addEventListener('click', event => {
    // console.log('I am clicked');

    const request = axios.get('http://intro-ajax-api.herokuapp.com/time?timezone=Egypt').then(response => {
        myMain.innerHTML = response.data;
        console.log('Inside the then() callback');
        
    });

});

carBtn.addEventListener('click', event => {
    // console.log('I am clicked');

    const request = axios.get('http://intro-ajax-api.herokuapp.com/a_car').then(response => {
        // const carItem = document.createElement('li');
        // const carItem = document.createElement('section');
        // myMain.innerText = liCars.innerText + response.data;
        // carItem.classList.add('car');

        liCars.innerHTML += response.data;


    // myMain.innerHTML += response.data;
        console.log('data:::', response.data);
        
    });

});


// setInterval(() => {
//     const request = axios.get('http://intro-ajax-api.herokuapp.com/count').then(response => {
//         myMain.innerHTML = response.data;
//         console.log('Inside the then() callback');
        
//     });
// }, 500);



});