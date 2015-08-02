/*!
 * Outlet
 *
 * Copyright 2015 uLink, Inc.
 */ 
module.exports = function (data, http) {
     data.http = http;
     data.device_group = "outlets";
     data.device_id = data.outlet_id;
     data.poweron = function (callback) {
         data.
         http.
         device_group(data.device_group).
         device_id(data.device_id).
         update({
             "desired_state": {
                 "powered": true
             }
         }, callback);
     };
     data.poweroff = function (callback) {
         data.
         http.
         device_group(data.device_group).
         device_id(data.device_id).
         update({
             "desired_state": {
                 "powered": false
             }
         }, callback);
     };
     return data;
 }