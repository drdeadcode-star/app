nexbit.nexbit_init()
wondercam.wondercam_init(wondercam.DEV_ADDR.X32)
wondercam.change_func(wondercam.Functions.COLOR_DETECT)
wondercam.turn_on_or_off_led(wondercam.LED_STATE.ON)
nexbit.set_brightness(Math.PI)
nexbit.set_pixel_rgb(nexbit.Lights.LIGHT1, RGBColors.WHITE)
nexbit.set_pixel_rgb(nexbit.Lights.LIGHT2, RGBColors.WHITE)
targety = 150
targetx = 160

def on_forever():
    wondercam.update_result()
    if wondercam.is_detected_color_id(1):
        pass
    else:
        pass
basic.forever(on_forever)
