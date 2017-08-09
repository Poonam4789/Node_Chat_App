var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit("CreateEmail",{
    //     to:"poonam.patel@ril.com",
    //     text:"Hi from client."
    // });

    //   socket.emit("CreateMessage",{
    //     to:"poonam.patel@ril.com",
    //     text:"Hi from client."
    // });
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New Email',email);
// });
socket.on('NewMessage', function (message) {
    console.log('New Email', message);
    var li = jQuery("<li></li>");
    li.text(`${message.from}  ${message.text}`);
    jQuery("#messages").append(li);
});

socket.on('NewLocationMessage', function (message) {
    console.log('location', message);
    var li = jQuery("<li></li>");
    var a = jQuery('<a target="_blank">My Current Location</a>');
    li.text(`${message.from}: `);
    a.attr('href',message.url);
    li.append(a);
    jQuery("#messages").append(li);
});
// socket.emit('CreateMessage', {
//     from: "sakshi",
//     text: "hey hello"
// }, function (data) {
//     console.log("got it!", data);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('CreateMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});

var getGeoLocation = jQuery('#send_location');
getGeoLocation.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Location is not supported by your browser.');
    }
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        socket.emit("CreateLocationMessage", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        alert('Unable to fetch location.')
    });

});