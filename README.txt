Color Mixer is simply a function that takes two arguments: colors, an array of colors in rgb format, and an optional transp, which sets the color mixer to use transparency (i.e, rgba instead of rgb)
Note that the colors passed in must be passed in rgb format: "rgb(r,g,b)" or "rgba(r,g,b,a)" if transparency is on.  If you feel like stripping off the "rgb(" and ")" before hand that's fine.

For example:
mixColors(["rgb(255,0,0)","rgb(0,0,255)"]);
returns purple. 