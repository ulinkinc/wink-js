/*!
 * Sensor
 *
 * Copyright 2015 uLink, Inc.
 */
module.exports = function (data, http) {
     data.http = http;
     data.device_group = "sensors";
     data.device_id = data.sensor_pod_id;
     data.detection = function (callback) {
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
     return data;
 }

/*
 { last_event:
 { brightness_occurred_at: null,
 loudness_occurred_at: null,
 vibration_occurred_at: null },
 sensor_pod_id: '94189',
 uuid: 'c190b965-2133-4234-9cdb-1592707802a9',
 name: 'pod-door-sensor',
 locale: 'en_us',
 units: {},
 created_at: 1438895856,
 hidden_at: null,
 capabilities:
 { sensor_types: [ [Object], [Object], [Object] ],
 polling_interval: 4200,
 home_security_device: true,
 offline_notification: true },
 triggers: [],
 desired_state: {},
 manufacturer_device_model: 'quirky_ge_tripper',
 manufacturer_device_id: null,
 device_manufacturer: 'quirky_ge',
 model_name: 'Tripper',
 upc_id: '',
 gang_id: null,
 hub_id: '',
 local_id: '2',
 radio_type: 'zigbee',
 last_reading:
 { connection: true,
 connection_updated_at: 1439056554.6143098,
 agent_session_id: null,
 agent_session_id_updated_at: 1438895858.2361794,
 firmware_version: '1.8b00 / 5.1b21',
 firmware_version_updated_at: 1439056554.6143303,
 firmware_date_code: '',
 firmware_date_code_updated_at: 1439056554.6143222,
 opened: false,
 opened_updated_at: 1439056554.6143856,
 battery: 1,
 battery_updated_at: 1439056554.6143928,
 tamper_detected: false,
 tamper_detected_updated_at: 1439056554.6143997,
 tamper_detected_true: null,
 tamper_detected_true_updated_at: null,
 battery_voltage: 30,
 battery_voltage_updated_at: 1439056554.6143384,
 battery_alarm_mask: 0,
 battery_alarm_mask_updated_at: 1439056554.6143458,
 battery_voltage_min_threshold: 0,
 battery_voltage_min_threshold_updated_at: 1439056554.614354,
 battery_voltage_threshold_1: 0,
 battery_voltage_threshold_1_updated_at: 1439056554.6143615,
 battery_voltage_threshold_2: 0,
 battery_voltage_threshold_2_updated_at: 1439056554.61437,
 battery_voltage_threshold_3: 0,
 battery_voltage_threshold_3_updated_at: 1439056554.6143782,
 connection_changed_at: 1438895856.7076623,
 firmware_version_changed_at: 1438981826.2437117,
 firmware_date_code_changed_at: 1438895858.2278621,
 opened_changed_at: 1439056554.6143856,
 battery_changed_at: 1438895858.9689612,
 tamper_detected_changed_at: 1438895858.9689686,
 battery_voltage_changed_at: 1438953514.19793,
 battery_alarm_mask_changed_at: 1438895858.2278967,
 battery_voltage_min_threshold_changed_at: 1438895858.2279048,
 battery_voltage_threshold_1_changed_at: 1438895858.2279127,
 battery_voltage_threshold_2_changed_at: 1438895858.2280087,
 battery_voltage_threshold_3_changed_at: 1438895858.2280178 },
 lat_lng: [ 0, 0 ],
 location: ''
  }
 */