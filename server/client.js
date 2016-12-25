'use strict';

module.exports = Client;

/**
 * @construtor
 * @public
 * @param {WebSocket} socket
 * @param {string} uid
 * @return {Client}
 */
function Client(socket, uid) {
    this.socket = socket;
    this.uid = uid;

    this._store = [];
}

/**
 * @public
 * @param {object} message
 */
Client.prototype.send = function(message){
    const uid = this.uid;
    this.socket.send(JSON.stringify(Object.assign(message, {uid})));
};

/**
 * @public
 * @param {object} data
 * @return {object}
 */
Client.prototype.store = function(data) {
    return this._store.push(data);
};