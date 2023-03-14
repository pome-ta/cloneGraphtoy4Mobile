# 📝 2022/10/01

## ちょっと整理

sound shader をやるにあたり、確認ついてに手直し

`html` や`css` に色々かくと、行ったり来たりで面倒やね
まぁ、一人でやっているから`js` でまとめたりして管理するのが楽しいけど

本来は、`js` のみでまとめるとかあまりよろしくないのだろうな。。。

# 📝 2022/03/14

## HTML 上の`onclick` 挙動

js 上で書き換えた方が何かと良さそうな感じがあり
めちゃくちゃ書き換えが面倒そうやな、、、

ブランチ切るかを考えるのか、、、

# 📝 2022/03/13

リンクでグラフ取得するやつ、`file:///` で分岐させる

Pythonista のときはどのように分岐をさせようかな。。。

## `searchParams` で`+` が消える問題

[doxas / twigl](https://github.com/doxas/twigl) を参考に、パラメータ処理をしようとしている

```.js
/**
 * searchParams を取得する
 * @return {URLSearchParams}
 */
function getParameter(){
  return (new URL(document.location)).searchParams;
}
```

となると、`+` が消えている？ <small>`*` も消えている？ </small>

```
https://twigl.app/?ol=true&mode=0&source=precision%20highp%20float%3B%0Auniform%20vec2%20resolution%3B%0Auniform%20vec2%20mouse%3B%0Auniform%20float%20time%3B%0Auniform%20sampler2D%20backbuffer%3B%0Avoid%20main(){vec2%20r%3Dresolution,p%3D(gl_FragCoord.xy*2.-r)/min(r.x,r.y)%2Bmouse%3Bfor(int%20i%3D0%3Bi%3C8%3B%2B%2Bi){p.xy%3Dabs(p)/abs(dot(p,p))-vec2(.9%2Bcos(time*.2)*.4)%3B}gl_FragColor%3Dvec4(p.xxy,1)%3B}
```

```.glsl
precision highp float;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D backbuffer;
void main(){vec2 r=resolution,p=(gl_FragCoord.xy*2.-r)/min(r.x,r.y)+mouse;for(int i=0;i<8;++i){p.xy=abs(p)/abs(dot(p,p))-vec2(.9+cos(time*.2)*.4);}gl_FragColor=vec4(p.xxy,1);}
```

本家での処理を確認

[ASCII 文字と URL エンコードの対応表](https://www.seil.jp/doc/index.html#tool/url-encode.html)

なるほど、`%2b` やらで処理をしているみたいですわ

これは、素直に書いたとき、一旦パースさせる必要があるってこと ka

# 📝 2022/03/09

[https://pome-ta.github.io/cloneGraphtoy4Mobile/](https://pome-ta.github.io/cloneGraphtoy4Mobile/)

検証用に pages 化

# 📝 2022/02/28

携帯でやりやすいように変えていく

## コード内容整理

- ヘッダー情報とかゴリゴリ消していいのかしら？
- インデント整理
- 構造理解
- 消していいやつ
- コード部分 monospace にする
