var foot = document.getElementById('footer');


// var msg = 'page title: ' + document.title + '<br>';
// msg += 'page url ; ' + document.location +'<br>'
// msg += 'modified : '+document.lastModified;
// console.log(foot);


var data = new Date();
var dzien = data.getDate();
var rok =data.toDateString();
var godzina= data.toTimeString();

function data1(){

document.write('today is '+ dzien + ' simplier displayed as ' + rok + '..and the time is '+ godzina )




}
foot.innerHTML = data1();

function Hotel(name, rooms, booked, avail){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.avail = rooms - booked;
}
var Park = new Hotel('Park', 50,43);


var hotelName = document.getElementById('name');
var hotelRooms = document.getElementById('rooms');
var hotelBooked = document.getElementById('booked');
var hotelAvail = document.getElementById('avail');




hotelName.textContent = Hotel.name;
hotelRooms.textContent = Hotel.rooms;
hotelBooked.textContent = Hotel.booked;
hotelAvail.textContent = Hotel.avail;
