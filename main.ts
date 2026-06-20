let centery = 0
let centerx = 0
let mtor2seed = 0
let motor1speed = 0
nexbit.nexbitInit()
wondercam.wondercam_init(wondercam.DEV_ADDR.x32)
wondercam.ChangeFunc(wondercam.Functions.ColorDetect)
wondercam.TurnOnOrOffLed(wondercam.LED_STATE.ON)
nexbit.setBrightness(100)
nexbit.setPixelRGB(nexbit.Lights.Light1, RGBColors.White)
nexbit.setPixelRGB(nexbit.Lights.Light2, RGBColors.White)
let targety = 150
let targetx = 160
nexbit.setMotorSpeed(motor1speed, mtor2seed)
basic.forever(function () {
    wondercam.UpdateResult()
    if (wondercam.isDetectedColorId(1)) {
        centerx = wondercam.XOfColorId(wondercam.Options.Pos_X, 1)
        centery = wondercam.XOfColorId(wondercam.Options.Pos_Y, 1) + wondercam.XOfColorId(wondercam.Options.Height, 1) / 2
    } else {
        motor1speed = 0
        mtor2seed = 0
        nexbit.setMotorSpeed(motor1speed, mtor2seed)
    }
})
