'use strict';
const h = require('../helpers');

module.exports = (io, app) => {
    let allrooms = app.locals.chatrooms;

    io.of('/roomslist').on('connection', socket => {
        console.log('Socket.io connected to the client');
        socket.on('getChatrooms', () => {
            socket.emit('chatRoomsList', JSON.stringify(allrooms));
        });

        socket.on('createNewRoom', newRoomInput => {
            //check to see if a room with the same title exists
            if(!h.findRoomByName(allrooms, newRoomInput)){
                //create a new room 
                allrooms.push({
                    room: newRoomInput,
                    roomID: h.randomHex(),
                    users: []
                });

            //Emit an updated list to the creator of the chatroom
            socket.emit('chatRoomsList', JSON.stringify(allrooms));

            //Emit an updated list to everyone connected to the rooms page
            socket.broadcast.emit('chatRoomsList', JSON.stringify(allrooms));

            }
        });

    });

    io.of('/chatter').on('connection', socket => {
        //join a chatroom
        socket.on('join', data => {
            let usersList = h.addUserToRoom(allrooms, data, socket);

            //update the list of active users as shown on the chatroom page
            socket.broadcast.to(data.roomID).emit('updateUsersList', JSON.stringify(usersList.users));
            socket.emit('updateUsersList', JSON.stringify(usersList.users));

            //When a socket exits
            socket.on('disconnect', () => {
                //find the room, to wich the socket is connected to and purge the user
                let room = h.removeUserFromRoom(allrooms, socket);
                socket.broadcast.to(room.roomID).emit('updateUsersList', JSON.stringify(room.users));
            });
        });
    });
}