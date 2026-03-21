# State Blending

State blending in fast sky is the process of interpolating between two distinct sky states. This can be particularly useful for creating dynamic and immersive sky experiences in games or simulations, where the sky can change based on the time of day, weather conditions, or player interactions.

## Implementation

Since Fast Sky 2 works with the volume component system, you can easily perform this blending by leveraging the volume component built-in functions.

To do this, you're going to need three volume profiles

The first profile holds constant parameters that are constant during blending such as [`Render Resolution`](atmosphere-settings), `enable states`. [static parameters](glossary#static-parameters) should always be constants.

The second profile holds the sky state you're blending from. We'll refer to this as `Background`

The third profile holds the sky state you're blending to. We'll refer to this as `Foreground`

The code for the blend is quite simple. We just need to set the `priority` of the foreground volume higher than that of the background, then the `weight` would be the blend time.

The result is a new sky state that smoothly transitions between the original states. 

Here is a code snippet for this:

```csharp
using UnityEngine;
using UnityEngine.Rendering;

[ExecuteAlways]
public class SkyBlendingTest : MonoBehaviour
{
	public VolumeProfile backgroundSky, foregroundSky;
	
	
	[SerializeField] Volume backgroundVol, foregroundVol;
	
	protected void Update()
	{
		ChangeState(Mathf.PingPong(Time.time, 1f));
	}
	
	public void ChangeState(float state)
	{
		if(backgroundVol == null)
		{
			backgroundVol = gameObject.AddComponent<Volume>();
		}
		if(foregroundVol == null)
		{
			foregroundVol = gameObject.AddComponent<Volume>();
		}
        // use sharedProfile to prevent duplication of the currents volume profile (if there ever is), since we're not modifying it.
		backgroundVol.sharedProfile ??= backgroundSky;
		foregroundVol.sharedProfile ??= foregroundSky;
		
		// background is the sky we're fading from, therefore it always has a weight of 1 and a priority lower than the foreground
		// foreground is the sky we're fading to, therefore it has a higher priority and its weight is the current fade time.
		backgroundVol.priority = 0;
		foregroundVol.priority = 1;
		backgroundVol.weight = 1f;
		foregroundVol.weight = state;
	}
}

```
