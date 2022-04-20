import { GlobalKeyboardListener } from 'node-global-key-listener'
import { EtherPortClient } from 'etherport-client'
import { Board, Led } from 'johnny-five'

import { GlobalKeyboardListener as IGlobalKeyboardListener } from 'node-global-key-listener'
import { Board as IBoard, Led as ILed } from 'johnny-five'
import { IGlobalKeyEvent } from 'node-global-key-listener'

//ESP8266 configuration:
//Board manager: esp8266 v2.7.4
//Board: NodeMCU 1.0 (ESP-12E Module)
//Firmware: Firmata v2.5.8

//Met issues:
//1. Board manager v3.0.2 could not be flashed - no idea why
//2. Used Johnny-Five v2.1.0 generates warning at each a new library - gyp info
//Readmore: https://github.com/rwaldron/johnny-five/issues/1786

const keypress: IGlobalKeyboardListener = new GlobalKeyboardListener()
const LED_PIN: number = 2

const board: IBoard = new Board({
  port: new EtherPortClient({
    host: '192.168.8.122',
    port: 3030,
  }),
  repl: false,
})

board.on('ready', (): void => {
  const led: ILed = new Led(LED_PIN)

  console.log('>> Control shortcuts <<')
  console.log('Up Arrow - Blink')
  console.log('Down Arrow - Stop')
  console.log('q - Exit application')

  keypress.addListener((event: IGlobalKeyEvent): void => {
    if (event.state === 'DOWN') {
      return
    }

    switch (event.vKey) {
      case 38:
        console.log('Blink')
        led.blink()
        break
      case 40:
        console.log('Stop')
        led.stop(0)
        break
      case 81:
        console.log('Exit')
        process.exit()
    }
  })
})
