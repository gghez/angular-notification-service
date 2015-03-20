(function(){
    angular.module('angularNotification', ['ng']);
    
    angular.module('angularNotification').service('Notification', [function () {
    
        var callbacks = {};
    
        function addCallback(channel, cb) {
            if (!callbacks[channel]) {
                callbacks[channel] = [];
            }
            if (callbacks[channel].indexOf(cb) == -1) {
                callbacks[channel].push(cb);
            }
        }
    
        function removeCallback(channel, cb) {
            if (callbacks[channel]) {
                var cbidx = callbacks[channel].indexOf(cb);
                if (cbidx != -1) {
                    callbacks[channel].splice(cbidx, 1);
                }
            }
        }
    
        function notify(channel) {
            var notifyArgs = Array.prototype.slice.call(arguments, 1);
    
            if (callbacks[channel]) {
                callbacks[channel].forEach(function (cb) {
                    cb.apply(undefined, notifyArgs);
                });
            }
        }
    
        return {
            register: addCallback,
            unregister: removeCallback,
            notify: notify
        };
    
    }]);
})();
