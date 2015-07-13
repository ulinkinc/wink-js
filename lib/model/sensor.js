/*!
 * Sensor
 *
 * Copyright 2015 uLink, Inc.
 * TODO: get response for sensor from API so that we know what attributes to set
 */ 
module.exports = function (data, http) {
     data.http = http;
     data.device_group = "sensors";
     data.device_id = data.sensor_id;
     data.detection = function (callback) {
         data.
         http.
         device_group(data.device_group).
         device_id(data.device_id).
         update({
             "desired_state": {
                 "powered": true
                 // TODO: how do we handle sensor notifications??!??
             }
         }, callback);
     };
     return data;
 }