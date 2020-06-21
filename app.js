'use strict'


Perfume.all = [];

function Perfume(type, quantity) {
    this.type = type;
    this.quantity = quantity
    this.price = priceRand() * quantity;

    Perfume.all.push(this);
}


var form = document.getElementById('form');

form.addEventListener('submit', formData);

function formData(event) {

    event.preventDefault();

    var perfumeType = document.getElementById('type').value;
    var quantity = document.getElementById('quantity').value;

    new Perfume(perfumeType, quantity);
    setData();
    render();

}


var tblEl = document.getElementById('tbody');

function render() {

    tblEl.innerHTML = "";

    for (let i = 0; i < Perfume.all.length; i++) {


        var trEl = document.createElement('tr');
        tblEl.appendChild(trEl);

        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = Perfume.all[i].type;

        var tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = Perfume.all[i].quantity;

        var tdEl3 = document.createElement('td');
        trEl.appendChild(tdEl3);
        tdEl3.textContent = Perfume.all[i].price + "$";


    }
}







function setData() {
    localStorage.setItem('data', JSON.stringify(Perfume.all));
}

function getData() {
    var retrivedData = localStorage.getItem('data');
    if (retrivedData) {
        Perfume.all = JSON.parse(retrivedData);
        render();

    }
}

getData();


function priceRand() {
    return Math.floor(Math.random() * (270 - 120)) + 120;
}