input.buttonD0.onEvent(ButtonEvent.Click, function () {
    mouse.click(MouseButton.Left)
    pause(100)
})
forever(function () {
    console.logValue("x", pins.A3.analogRead())
    console.logValue("y", pins.A4.analogRead())
})
