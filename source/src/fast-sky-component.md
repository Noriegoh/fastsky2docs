# Fast Sky Component

The Fast Sky component is the main component of the Fast Sky system. It holds the core settings for the sky rendering.

The [FastSkySceneConfig](setup#fast-sky-component) component is optional, but recommended. It holds extra info such as moon transform, cloud shadow area, and it allows you to use **astronomical positioning** for the sun and moon.

The Fast Sky component works with the the SRP VolumeComponentSystem / PostProcessStack, thus allowing you to blend between different sky states depending on the camera's position or manually. See the [State Blending](state-blending) section for more info.

The position of the sun should be set in the __Lighting Window__. This can help prevent some issues that might occur when using multiple __Directional Lights__.
