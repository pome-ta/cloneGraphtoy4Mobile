# ๐ 2022/03/14

## HTMLไธใฎ`onclick` ๆๅ

js ไธใงๆธใๆใใๆนใไฝใใจ่ฏใใใใชๆใใใใ
ใใกใใใกใๆธใๆใใ้ขๅใใใใชใใใ

ใใฉใณใๅใใใ่ใใใฎใใใใ

# ๐ 2022/03/13

ใชใณใฏใงใฐใฉใๅๅพใใใใคใ`file:///` ใงๅๅฒใใใ

Pythonista ใฎใจใใฏใฉใฎใใใซๅๅฒใใใใใใใชใใใ

## `searchParams` ใง`+` ใๆถใใๅ้ก

[doxas / twigl](https://github.com/doxas/twigl) ใๅ่ใซใใใฉใกใผใฟๅฆ็ใใใใใจใใฆใใ

```
/**
 * searchParams ใๅๅพใใ
 * @return {URLSearchParams}
 */
function getParameter(){
  return (new URL(document.location)).searchParams;
}
```

ใจใชใใจใ`+` ใๆถใใฆใใ๏ผ<small>`*` ใๆถใใฆใใ๏ผ</small>

```
https://twigl.app/?ol=true&mode=0&source=precision%20highp%20float%3B%0Auniform%20vec2%20resolution%3B%0Auniform%20vec2%20mouse%3B%0Auniform%20float%20time%3B%0Auniform%20sampler2D%20backbuffer%3B%0Avoid%20main(){vec2%20r%3Dresolution,p%3D(gl_FragCoord.xy*2.-r)/min(r.x,r.y)%2Bmouse%3Bfor(int%20i%3D0%3Bi%3C8%3B%2B%2Bi){p.xy%3Dabs(p)/abs(dot(p,p))-vec2(.9%2Bcos(time*.2)*.4)%3B}gl_FragColor%3Dvec4(p.xxy,1)%3B}
```

```
precision highp float;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D backbuffer;
void main(){vec2 r=resolution,p=(gl_FragCoord.xy*2.-r)/min(r.x,r.y)+mouse;for(int i=0;i<8;++i){p.xy=abs(p)/abs(dot(p,p))-vec2(.9+cos(time*.2)*.4);}gl_FragColor=vec4(p.xxy,1);}
```

ๆฌๅฎถใงใฎๅฆ็ใ็ขบ่ช

[ASCIIๆๅญใจURLใจใณใณใผใใฎๅฏพๅฟ่กจ](https://www.seil.jp/doc/index.html#tool/url-encode.html)

ใชใใปใฉใ`%2b` ใใใงๅฆ็ใใใฆใใใฟใใใงใใ

ใใใฏใ็ด ็ดใซๆธใใใจใใไธๆฆใใผในใใใๅฟ่ฆใใใใฃใฆใใจka

# ๐ 2022/03/09

[https://pome-ta.github.io/cloneGraphtoy4Mobile/](https://pome-ta.github.io/cloneGraphtoy4Mobile/)

ๆค่จผ็จใซpagesๅ

# ๐ 2022/02/28

ๆบๅธฏใงใใใใใใใใซๅคใใฆใใ

## ใณใผใๅๅฎนๆด็

- ใใใใผๆๅ ฑใจใใดใชใดใชๆถใใฆใใใฎใใใ๏ผ
- ใคใณใใณใๆด็
- ๆง้ ็่งฃ
- ๆถใใฆใใใใค
- ใณใผใ้จๅmonospace ใซใใ
