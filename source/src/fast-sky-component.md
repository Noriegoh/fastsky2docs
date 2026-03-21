# Fast Sky Component

The Fast Sky component is the main component of the Fast Sky system. It holds the settings for the sky rendering. You can modify the appearance of these elements using the settings provided in this component.

The Fast Sky component works with the the SRP VolumeComponentSystem, thus allowing you to blend between different sky states depending on the camera's position or manually. See the [State Blending](state-blending) section for more info.

You can also use the [FastSkySceneConfig](setup#fast-sky-component) component to specify the position of the moon, as well as other global settings.

The position of the sun should be set in the __Lighting Window__. This can help prevent some issues that might occur when using multiple __Directional Lights__.
