/*!
 * Lock
 *
 * Copyright 2015 uLink, Inc.
 * TODO: get response for lock from API so that we know what attributes to set
 */ 
module.exports = function (data, http) {
     data.http = http;
     data.device_group = "locks";
     data.device_id = data.lock_id;
     data.lock = function (callback) {
         data.
         http.
         device_group(data.device_group).
         device_id(data.device_id).
         update({
             "desired_state": {
                 "powered": true
                 // TODO: how do we lock??!??
             }
         }, callback);
     };
     data.unlock = function (callback) {
         data.
         http.
         device_group(data.device_group).
         device_id(data.device_id).
         update({
             "desired_state": {
                 "powered": true
                  // TODO: how do we unlock??!??
             }
         }, callback);
     };
     return data;
 }