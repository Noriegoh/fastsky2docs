# Best Practices

This section reveals practices you should follow to get the best performance out of Fast Sky 2.
These tips are especially important if you are targeting low-end devices or want to achieve the best possible performance.

## Minimize Your Lightmarch Steps

Try to use as few lightmarch steps as possible.
If you're unsatisfied with the banding artifacts or visual quality, try to use [dithering](cloud-settings#main-settings) instead of increasing the lightmarch steps.

## Disable Unused Features

If you don't intend to use Godrays, Skymaps or the Moon, make sure to disable them in the Fast Sky component. This can help save some performance by avoiding unnecessary calculations and rendering.

## Use Fast Mode

The quality loss of using [Fast Mode](cloud-settings#main-settings) is quite minimal in most cases, but the performance gain can be significant especially on low-end devices.
So if you are targeting a wide range of devices, it's recommended to use [Fast Mode](cloud-settings#main-settings).

## Use Fewer Cloud Layers

More [cloud layers](cloud-settings#cloud-layer) means more computation. Try to use fewer when possible.

## Debugging Tips

1. **Isolate Variables**: Disable/adjust features one at a time to see their impact on performance. You can better observe performance changes by rendering your game in high-resolution and comparing the FPS changes.
2. **Test on Target Hardware**: Always test on the lowest-end device you plan to support.
