import{_ as s,c as a,o as n,d as l}from"./app.8578c3d6.js";const h=JSON.parse('{"title":"\u6709\u7528\u7684\u5E2E\u52A9","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"\u6709","7":"\u7528","8":"\u7684","9":"\u5E2E","10":"\u52A9"},"headers":[{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":2,"title":"\u6B63\u5219","slug":"\u6B63\u5219","link":"#\u6B63\u5219","children":[]},{"level":2,"title":"\u8C03\u8BD5","slug":"\u8C03\u8BD5","link":"#\u8C03\u8BD5","children":[{"level":3,"title":"H5\u8C03\u8BD5","slug":"h5\u8C03\u8BD5","link":"#h5\u8C03\u8BD5","children":[]}]}],"relativePath":"help/index.md"}'),p={name:"help/index.md"},e=l(`<h1 id="\u6709\u7528\u7684\u5E2E\u52A9" tabindex="-1">\u6709\u7528\u7684\u5E2E\u52A9 <a class="header-anchor" href="#\u6709\u7528\u7684\u5E2E\u52A9" aria-hidden="true">#</a></h1><p>\u524D\u7AEF\u5F00\u53D1\u5229\u5668\uFF0C\u6709\u4E86\u5B83\u4EEC\u80FD\u591F\u8BA9\u6211\u4EEC\u4E8B\u534A\u529F\u500D\uFF01</p><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><ul><li>\u5728\u7EBF JSON \u8F6C TS\uFF1A<a href="https://transform.tools/json-to-typescript" target="_blank" rel="noreferrer">JSON to TypeScript (transform.tools)</a></li><li></li></ul><h2 id="\u6B63\u5219" tabindex="-1">\u6B63\u5219 <a class="header-anchor" href="#\u6B63\u5219" aria-hidden="true">#</a></h2><ul><li>\u5728\u7EBF\u6B63\u5219\u6821\u9A8C\uFF1A<a href="https://c.runoob.com/front-end/854/" target="_blank" rel="noreferrer">\u6B63\u5219\u8868\u8FBE\u5F0F\u5728\u7EBF\u6D4B\u8BD5</a></li></ul><h2 id="\u8C03\u8BD5" tabindex="-1">\u8C03\u8BD5 <a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a></h2><h3 id="h5\u8C03\u8BD5" tabindex="-1">H5\u8C03\u8BD5 <a class="header-anchor" href="#h5\u8C03\u8BD5" aria-hidden="true">#</a></h3><ul><li><p>vConsole</p><p>\u8FD9\u4E2A\u63D2\u4EF6\u6709\u70B9\u50CF\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u8C03\u8BD5\u63D2\u4EF6\uFF0C\u4E0D\u8FC7\u529F\u80FD\u66F4\u4E30\u5BCC\uFF0C\u53EF\u4EE5\u67E5\u770B\u63A7\u5236\u53F0\u6253\u5370\u3001\u7F51\u7EDC\u8BF7\u6C42\u3001\u672C\u5730\u5B58\u50A8\u7B49\u3002</p><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> consoleScript </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">consoleScript</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">consoleScript</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">VConsole</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(consoleScript)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 CDN \u5F15\u5165\u5728\u7EBF\u6A21\u5757\u5373\u53EF\u3002</p><p>\u6548\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><a href="https://imgse.com/i/pCTqQCd" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/07/19/pCTqQCd.jpg" alt="pCTqQCd.jpg"></a></p></li><li><p>eruda</p><p>\u5728\u9879\u76EE\u7684<code>index.html</code>\u6587\u4EF6\u91CC\u52A0\u5165\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://eruda.liriliri.io/eruda.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    eruda</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u9879\u76EE\u542F\u52A8\u540E\uFF0C\u5728\u624B\u673A\u53F3\u4E0B\u89D2\u5C31\u4F1A\u51FA\u73B0\u7070\u8272\u7684\u63A7\u5236\u53F0\u3002\u6548\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><a href="https://imgse.com/i/pC7kF8x" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/07/19/pC7kF8x.png" alt="pC7kF8x.png"></a></p></li></ul>`,9),o=[e];function t(r,c,i,D,F,y){return n(),a("div",null,o)}const C=s(p,[["render",t]]);export{h as __pageData,C as default};