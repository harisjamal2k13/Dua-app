function view() {

    var getDua = localStorage.getItem('Dua');
    var dua = document.getElementById('duaa').innerHTML = "Wellcome" + " " + getDua;

    console.log(getDua)

}
var getDua = localStorage.getItem('Dua');
var dua = document.getElementById('duaa').innerHTML = "Dua:" + " " + getDua;
var gotname = localStorage.getItem('userName');
var name = document.getElementById('name').innerHTML = 'User:' + " " + gotname;
var i = 0;
function count() {
    i = 1
    var countt = document.getElementById('countt').innerHTML = i;

}
console.log(dua)