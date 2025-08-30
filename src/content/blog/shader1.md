---
title: "Custom Star Shader (GLSL)!"
description: ''
pubDate: 'May 20, 2025'
heroImage: '/project-images/project-covers/shader1.gif'
---

I've lately gotten into programming shaders as an art form with the help of Shadertoy.com!

Here's the code for my latest piece:

<code>
    
    vec3 palette(float t){
    
        vec3 a = vec3(0.5, 0.1, 0.5);
        vec3 b = vec3(0.5, 0.9, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.33, 0.67);
        
        return a + b * cos(6.28318*(c*t+d));
    }

    float sdPentagram(in vec2 p, in float r )
    {

        const float k1x = 0.809016994; // cos(π/ 5) = ¼(√5+1)
        const float k2x = 0.309016994; // sin(π/10) = ¼(√5-1)
        const float k1y = 0.587785252; // sin(π/ 5) = ¼√(10-2√5)
        const float k2y = 0.951056516; // cos(π/10) = ¼√(10+2√5)
        const float k1z = 0.726542528; // tan(π/ 5) = √(5-2√5)
        const vec2  v1  = vec2( k1x,-k1y);
        const vec2  v2  = vec2(-k1x,-k1y);
        const vec2  v3  = vec2( k2x,-k2y);
        
        p.x = abs(p.x);
        p -= 2.0*max(dot(v1,p),0.0)*v1;
        p -= 2.0*max(dot(v2,p),0.0)*v2;
        p.x = abs(p.x);
        p.y -= r;
        return length(p-v3*clamp(dot(p,v3),0.0,k1z*r))
               * sign(p.y*v3.x-p.x*v3.y);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        vec2 uv = (fragCoord * 2.0 - iResolution.xy)/iResolution.y;
        vec2 uv0 = uv;
        vec3 finalColor = vec3(0.0);

        for (float i = 0.0; i < 4.0; i++){
            uv = fract(uv*(sin(iTime)+0.8 * 1.4)) - 0.5;
            
            float d = length(uv);
            
            vec3 col = palette(length(uv) + iTime * 0.4);
            
            d = sin(d*8. + iTime)/8.;
            d = abs(d);
            
            d = 0.01/d;
            
            finalColor += col / sdPentagram(uv0, d);
        }

        fragColor = vec4(finalColor,1.0);
    }
</code>
