# Changelog

## 2.6.4
### FIXED
- Compilation errors on URP version 14.0 (Unity 6.0)
- Placed demo scripts into their dedicated render pipeline unity packages.

## 2.6.3
### FIXED
- Fixed disabled features on Linux and other platforms after building player.
- Removed FastSkySceneConfig game object auto-instancing.
- Fixed half precision issues and general bugs.
- Fixed RenderGraph error

### IMPROVEMENTS
- Performance improvements.

### IMPROVEMENT
- Added the option to disable camera background type warning.

## 2.6.2
### FIXED
- Type error when using the IL2CPP scripting backend.
- Instantaneous 180-degree flip as the moon passes through the zenith when astronomical positioning is disabled.
### NEW
- Removed moon orientation. This is now specified by the z-axis of the moon transform's rotation.

## 2.6.1
### FIXED
- Fixed skymap settings not showing up in the editor.
- Fixed moon rotation gimbal-locking on Astronomical Positioning.
- Unecessary debug log on Built-in RenderPipeline.
### IMPROVEMENTS
- Improved moon occulusion. The non-lit face of the moon now occuldes stars and skymaps, preventing them from bleeding through the moon.
- Improved URP demo scenes and settings.


## 2.6.0
> [!NOTE]
> VERSION 2.6.0 HAD A MAJOR PROJECT STRUCTURE CHANGE. ENSURE TO DELETE OLD PACKAGE FILES BEFORE IMPORTING THIS ONE.

### NEW
- Added VR Support
- Added support for Built-in Render Pipeline
- Added astronomical positioning mode for celestial bodies (moon and sun) based on a specified time of day / time of year using earth's orbital model.
- Added atmospheric height fog (aerial perspective).
- Added skymap rotation.
- Added earth curvature, simulating the look of observing from an elevated height, giving the earth a curved look.

### IMPROVEMENTS
- Cloud shadow tiling.
- Enhanced moon rendering

### FIXED
- Fixed shader compilation error on some platforms
- Fixed errors on newer versions of Unity and extended compatability support to range from Unity 2021.3 to Unity 6.5
- Fixed moon varying brightness, inconsistent rotation and shaping issues.
- Fixed errors while loading presets on Unity 2021.3 - Unity 2022.3
- Fixed other bugs

## 2.0.1
### NEW
- Added silver lining effect.
### FIXED
- Potential vunerabilities causing crashed on some platforms
### IMPROVEMENT
- Curvature property no longer causes stretching artifacts at values > 0.5 when 3DSampling is disabled, thus 3DSampling is removed. (Minor breaking change)

## 2.0.0
Initial Release
