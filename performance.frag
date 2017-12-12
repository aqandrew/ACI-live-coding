void main () {
vec2 uv = uv();
    vec3 c = black;
    float a = atan(uv.y, uv.x);
    float ab = atan(bands.y, bands.x);
    float r = length(uv);
    float s = snoise(fract(uv + ab * 2. - time));
    float t = snoise(vec3(uv, bands.y * .3 + time * 0.3));
    float s2 = snoise(vec3(uv * 0.1 + a * 0.1, ab + time * 0.9 - r));
    float n = noise(vec3(uv * r * 1., time + bands.y));
    vec3 bb = texture2D(backbuffer, uvN()).rgb;
    // c += s * blue;
    // c += step(0.5, s) * blue / (r * ab);
    c += n * purple;
    c += r * red * t;
    // c += step(0.25, s2) * purple;
    // c += step(0.4, t) * blue;
    // c += cos(uv.y * 2. + time * .0001 * bands.x + t) * purple;
    // c += cos(uv.y * 2. + time * .003 * bands.x) * yellow;
    // c += sin(uv.x * 4. + time * -5.) * orange;
    // c += tan(r * -2. + time * .01 * bands.y) * red;
    // c += sin(uv.x * 8. + time * 9.) * green;
    // c += sin(r * -10. + time * 6. + bands.z * 6. * s2) * blue;
    // c += step(0.2, t) * green;
    // c += step(0.6, s2) * green;
    // c += sin(uv.y * 12. + ab - r) * green;
    // c += mix(c, bb, sin(time) * 0.8 / t);
    c += sexy() * yellow;
    
	gl_FragColor = vec4(c, 0.1);
}