/*!
 * Lock
 *
 * Copyright 2015 uLink, Inc.
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
                 "locked" : true
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
                 "locked" : false
             }
         }, callback);
     };
     return data;
 }