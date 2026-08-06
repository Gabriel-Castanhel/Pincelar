const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

// ------------------------
// Random
// ------------------------

float random(vec2 st){
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// ------------------------
// Noise
// ------------------------

float noise(vec2 st){

    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0,0.0));
    float c = random(i + vec2(0.0,1.0));
    float d = random(i + vec2(1.0,1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a,b,u.x)
         + (c-a)*u.y*(1.0-u.x)
         + (d-b)*u.x*u.y;
}

void main(){

    vec2 uv = vUv;

    uv -= 0.5;

    float t = uTime * 0.05;

    float n = noise(uv * 4.0 + t);

    vec3 color = vec3(0.02,0.03,0.08);

    color += vec3(0.25,0.10,0.55) * n;

    color += vec3(0.10,0.40,0.90) * (1.0-n) * 0.4;

    float glow = smoothstep(
        0.8,
        0.0,
        length(uv)
    );

    color += glow * 0.25;

    gl_FragColor = vec4(color,1.0);

}
`;

export default fragmentShader;