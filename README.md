# esp8266-johnny-five-blink

Simple appliaction to test communication with NodeMCU V3 board.
After start you can control board with arrows keys (up/down) to enable or disable blinking a blue diode.

Project supports Typescript.

## Requirements:

- NodeMCU V3 board with firmware StandardFirmataWifi
- Be connected to the same Wi-Fi network

## Tested dependencies versions:

- etherport-client: 0.1.4
- johnny-five: 2.1.0
- node-global-key-listener: 0.0.14
- serialport: 9.2.8

## ESP8266 configuration:

Board manager: esp8266 v2.7.4
Board: NodeMCU 1.0 (ESP-12E Module)
Firmware: Firmata v2.5.8

### Met issues:

1. Board manager v3.0.2 could not be flashed - no idea why
2. Used Johnny-Five v2.1.0 generates warning at each a new library - gyp info, [readmore](https://github.com/rwaldron/johnny-five/issues/1786)

## Start

Use command `yarn start` or `ts-node index.ts` to start the application.
