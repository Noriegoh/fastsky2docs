# Skymap Settings

Skymaps are cubemap textured rendered behind the sun and moon. You can specify the visibility time of these maps.

Skymaps for example, could be used for rendering a secondary star field.

Fast Sky supports the rendering of two skymaps.

The appearance of the skymaps can be customized using the following properties:

| Property       | Function                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled        | Enable state of this skymap. <br><br> This is a [static](glossary#static-parameters) and [performance sensitive](glossary#performance-sensitive-parameters) parameter. |
| Cubemap        | The cubemap used for this skymap.                                                                                                                                      |
| Night          | Wheather this skymap is visible at night time.                                                                                                                         |
| Start Time     | The time of day when this skymap starts to fade in. This value is symetrical i.e 0-> sun-down(east or west), 1.0 -> mid-day                                            |
| Blend Distance | The time it takes for this skymap to be fully opaque.                                                                                                                  |
| Intensity      | Intensity of this skymap.                                                                                                                                              |
| Rotation       | Rotation of this skymap in degrees.                                                                                                                                    |