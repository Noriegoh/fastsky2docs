# Changelog

## Version 2.0.0

Initial Release

## Version 2.0.1

### NEW

- Added silver lining effect.

### FIXED

- Potential vunerabilities causing crashed on some platforms

### IMPROVEMENT

- Curvature property no longer causes stretching artifacts at values > 0.5 when 3DSampling is disabled, thus 3DSampling is removed. (Minor breaking change)

## Version 2.1.0

### NEW

- Compatability support for Unity 2022.3+.
- Added stratocumulus cloud type.
- Added perlin detail type.
- Removed `AbsorptionSpread` property.
- Added [`AbsorptionLimit`](cloud-settings) property.

### IMPROVEMENT

- Added the option to disable camera background type warning.

## Version 2.6.0

> [!NOTE]
> VERSION 2.6.0 HAD A MAJOR PROJECT STRUCTURE CHANGE. ENSURE TO DELETE OLD PACKAGE FILES BEFORE IMPORTING THIS ONE.

### NEW
- Added VR Support
- Added support for Built-in Render Pipeline
- Added astronomical positioning mode for celestial bodies (moon and sun) based on a specified time of day / time of year using earth's orbital model.
- Added skymap rotation.
- Added earth curvature, simulating the look of observing from an elevated height, giving the earth a curved look.
- Added atmospheric height fog (aerial perspective).

### IMPROVEMENTS
- Cloud shadow tiling.
- Enhanced moon rendering

### FIXED
- Fixed shader compilation error on some platforms
- Fixed errors on newer versions of Unity and extended compatability support to range from Unity 2021.3 to Unity 6.5
- Fixed moon varying brightness, inconsistent rotation and shaping issues.
- Fixed errors while loading presets on Unity 2021.3 - Unity 2022.3
- Fixed other bugs
