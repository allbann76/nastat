'use strict';

/**
 * @constructor
 * @public
 * @param {string} url
 * @param {string|number} port
 * @return {Socket}
 */
function Socket(url, port) {
    var self = this;
    port =  port ? (':' + String(port)) : '';

    this.socket = new WebSocket(url + port);
    this.callbacks = {
    };
    
    this.socket.onopen = function (event) {
        self.trigger('connected', Object.assign(event, {$type: 'connected'}));
    };

    this.socket.onmessage = function (event) {
        var message = JSON.parse(event.data);
        
        self.trigger(message.$type, message);
    }
}

/*
 * @public
 * @param {string} type
 * @param {function} message
 * @returns {Socket}
 */
Socket.prototype.trigger = function(type, message) {
    var self = this;
    var callbacks = Object.keys(self.callbacks);

    if (!callbacks.length) {
        return;
    }

    callbacks.forEach(function (callbackType) {
        if (message.$type === callbackType) {
            self.callbacks[callbackType].forEach(function (callback) {
                callback.call(null, Object.assign({$type: message.$type}, message));
            });
        }
    });

    return this;
}

/**
 * @public
 * @param {string} type
 * @param {function} callback
 * @returns {Socket}
 */
Socket.prototype.on = function(type, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback should be a function');
    }

    this.callbacks[type] = this.callbacks[type] || [];
    this.callbacks[type].push(callback)

    return this;
};

/**
 * @public
 * @param {string} type
 * @param {function} callbacks
 * @returns {Socket}
 */
Socket.prototype.off = function(type, callback) {
    if (!this.callbacks[type]) {
        return void 0;
    }

    this.callbacks[type] = this.callbacks[type].filter(function (callback2) {
        if (
            (callback.name && callback.name == callback2.name) ||
            (callback == callback2) ||
            (callback2.toString() == callback.toString())
        ) {
            return false;
        }

        return true;
    });

    return this;
};

/**
 * @public
 * @param {string} message
 */
Socket.prototype.sendMessage = function(message) {
    this.send('message', message);
};

/**
 * @public
 * @param {object} data
 */
Socket.prototype.sendRaw = function(data) {
    this.socket.send(JSON.stringify(data));
};

/**
 * @public
 * @param {string} $type
 * @param {object} data
 */
Socket.prototype.send = function($type, data) {
    this.socket.send(JSON.stringify(Object.assign({$type}, data)));
};

const URL = 'wss://js-assignment.evolutiongaming.com/ws_api'

module.exports = new Socket(URL);

