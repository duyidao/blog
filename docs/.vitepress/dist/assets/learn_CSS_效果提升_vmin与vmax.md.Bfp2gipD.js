import{_ as s,E as i,c as e,J as t,V as n,o as l}from"./chunks/framework.C7aBxagv.js";const E=JSON.parse('{"title":"vmin与vmax","description":"","frontmatter":{},"headers":[],"relativePath":"learn/CSS/效果提升/vmin与vmax.md","filePath":"learn/CSS/效果提升/vmin与vmax.md","lastUpdated":1713075925000}'),p={name:"learn/CSS/效果提升/vmin与vmax.md"},h=n(`<h1 id="vmin与vmax" tabindex="-1">vmin与vmax <a class="header-anchor" href="#vmin与vmax" aria-label="Permalink to &quot;vmin与vmax&quot;">​</a></h1><p>在做移动端项目时，经常有一个要求是某张图片必须是全屏展示，且不能出现滚动条。这就说明这张图片必须是占满视口最短边。</p><p>CSS 新单位可以很优雅解决这一点，其中：</p><ul><li>vmin 表示该元素取视口最短那条边</li><li>vmax 表示该元素取视口最长那条边</li></ul><p>代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vmin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>此时图片取视口相对最短的边，移动端上横向比纵向短，因此取横向距离。</p><p>这样就能够实现效果了。</p><h2 id="总体效果" tabindex="-1">总体效果 <a class="header-anchor" href="#总体效果" aria-label="Permalink to &quot;总体效果&quot;">​</a></h2>`,9);function r(o,d,m,c,k,v){const a=i("Iframe");return l(),e("div",null,[h,t(a,{url:"https://duyidao.gitee.io/blogweb/detail/css/vmin"})])}const g=s(p,[["render",r]]);export{E as __pageData,g as default};
