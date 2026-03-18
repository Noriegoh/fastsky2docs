# Best Practices

Fast Sky 2 is designed to be a high-performance sky rendering solution, but there are some best practices you can follow to ensure you get the best performance out of it.
These tips are especially important if you are targeting low-end devices or want to achieve the best possible performance.

## Minimize Your Lightmarch Steps

Try to use as few lightmarch steps as possible.
The performance impact of lightmarch steps is significant especially when using 3D sampling on low-end devices.
If you're unsatisfied with the banding artifacts or visual quality, try to use [dithering](cloud-settings#main-settings) instead of increasing the lightmarch steps.

## Don't Use 3D Clouds If You Don't Need To

For flat clouds with [curvatures](cloud-settings#cloud-layer) (< 0.5), enabling 3D sampling is unnecessary and could impact performance on low-end devices.

## Disable Unused Features

If you don't intend to use Godrays, Skymaps or the Moon, make sure to disable them in the Fast Sky component. This can help save some performance by avoiding unnecessary calculations and rendering.

## Use Fast Mode

The quality loss of using [Fast Mode](cloud-settings#main-settings) is very minimal in most cases, but the performance gain can be significant especially on low-end devices.
So if you are targeting a wide range of devices, it's recommended to use [Fast Mode](cloud-settings#main-settings).

## Use Fewer Cloud Layers

More [cloud layers](cloud-settings#cloud-layer) means more computation. Try to use fewer when possible.

## Debugging Tips

1. **Isolate Variables**: Disable/adjust features one at a time to see their impact on performance. You can better observe performance changes by rendering your game in high-resolution and comparing the FPS changes.
2. **Test on Target Hardware**: Always test on the lowest-end device you plan to support.
