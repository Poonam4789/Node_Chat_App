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

// socket.emit('CreateMessage', {
//     from: "sakshi",
//     text: "hey hello"
// }, function (data) {
//     console.log("got it!", data);
// });

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('CreateMessage', {
        from:'User',
        text:jQuery('[name=message]').val()
    },function(){

    });
});