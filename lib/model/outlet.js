/*!
 * Outlet
 *
 * Copyright 2015 uLink, Inc.
 */
module.exports = function (data, http) {
    data.http = http;
    data.device_group = "binary_switches";
    data.device_id = data.binary_switch_id;
    data.power = {
        on: function (callback) {
            data.
                http.
                device_group(data.device_group).
                device_id(data.device_id).
                update({
                    "desired_state": {
                        "powered": true
                    }
                }, callback);
        },
        off: function (callback) {
            data.
                http.
                device_group(data.device_group).
                device_id(data.device_id).
                update({
                    "desired_state": {
                        "powered": false
                    }
                }, callback);
        },
        toggle: function (callback) {
            if (data.desired_state.powered === true) {
                this.off(callback);
            } else {
                this.on(callback);
            }
        }
    };
    return data;
}