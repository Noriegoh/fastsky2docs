# Setup

This section assumes you've sucessfully downloaded and imported the FastSky2 package and you are working with the __Universal Render Pipeline__ or __Built-in Render Pipeline__.


## Setting up the FastSkyRendererFeature

> **URP**
> Navigate to your active Renderer, scroll down to the 'Renderer Features' section and add the `FastSkyRendererFeature`.

> **Built-in Render Pipeline**
> Navigate to your active Camera, and add the `FastSkyRendererFeature` component.

> [!CAUTION]
> Performing this set overrides your current skybox material.
> Undoing this action won't undo the change.


## Setting up your environment

Open up the lighting window and set the sun source (optional but recommended).

## Setting up your camera

Open up the properties of your main camera and set the;

> **URP**
>
> __Background Type__ to __Uninitialized__. This prevents an unnecessary rendering pass.


> **Built-in Render Pipeline**
>
> __Background Type__ to __Nothing__. This prevents an unnecessary rendering pass.

> [!INFO]
> Skipping this step is not illegal, but would incure an extra render pass that would get overriden by sky rendering process anyways.

## Setting up the Fast Sky component

Create a new volume profile and add the fast sky component.
You can choose to add it to an existing volume profile in your scene, or create different volume profiles with the fast sky component for different states. See [state blending](state-blending) for more info.

Optional, but recommended, add the __FastSkySceneConfig__ component to any game object in your scene. This component holds extra info such as moon transform and cloud shadow area. It also allows you to use **astronomical positioning**.
