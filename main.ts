input.onButtonPressed(Button.A, function () {
    go = -1
})
input.onButtonPressed(Button.AB, function () {
    direction = 0
    go = 0
})
input.onButtonPressed(Button.B, function () {
    go = 1
})
let go = 0
let direction = 0
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
direction = 0
go = 0
basic.forever(function () {
    direction += go
    if (direction < 0) {
        direction = 7
    }
    if (direction > 7) {
        direction = 0
    }
    if (direction == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (direction == 1) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (direction == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (direction == 3) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (direction == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (direction == 5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (direction == 6) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (go == 0) {
        RingbitCar.brake()
    } else {
        RingbitCar.forward()
        basic.pause(500)
        if (go == -1) {
            RingbitCar.turnleft()
        } else {
            RingbitCar.turnright()
        }
    }
})
