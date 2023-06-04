import{_ as a,c as s,o as e,d as n}from"./app.5698d6bb.js";const D=JSON.parse('{"title":"navigateBack \u4F20\u53C2","description":"","frontmatter":{},"headers":[{"level":2,"title":"getCurrentPages","slug":"getcurrentpages","link":"#getcurrentpages","children":[]}],"relativePath":"project/lingsi/crm/navigateBack.md"}'),p={name:"project/lingsi/crm/navigateBack.md"},l=n(`<h1 id="navigateback-\u4F20\u53C2" tabindex="-1">navigateBack \u4F20\u53C2 <a class="header-anchor" href="#navigateback-\u4F20\u53C2" aria-hidden="true">#</a></h1><p>\u6839\u636E\u5B98\u65B9\u6587\u6863\u663E\u793A\uFF0Cwx.navigateBack() \u65B9\u6CD5\u662F\u4E0D\u652F\u6301\u4F20\u53C2\u7684\uFF0C\u56E0\u6B64\u5982\u679C\u9700\u8981\u8FD4\u56DE\u4E0A\u4E00\u9875\u5BF9\u6570\u636E\u505A\u67D0\u79CD\u5904\u7406\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 getCurrentPages() \u65B9\u6CD5\u3002</p><h2 id="getcurrentpages" tabindex="-1">getCurrentPages <a class="header-anchor" href="#getcurrentpages" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5F53\u524D\u9875\u9762\u6808\u3002\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u9996\u9875\uFF0C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E3A\u5F53\u524D\u9875\u9762\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A \u4E0D\u8981\u5C1D\u8BD5\u4FEE\u6539\u9875\u9762\u6808\uFF0C\u4F1A\u5BFC\u81F4\u8DEF\u7531\u4EE5\u53CA\u9875\u9762\u72B6\u6001\u9519\u8BEF\u3002</p></blockquote><p>\u4E0D\u8981\u5728 <code>App.onLaunch</code> \u7684\u65F6\u5019\u8C03\u7528 <code>etCurrentPages</code>\uFF0C\u6B64\u65F6 <code>page</code> \u8FD8\u6CA1\u6709\u751F\u6210\u3002 \u83B7\u53D6\u5230\u9700\u8981\u7684\u9875\u9762\uFF08\u5373\u4E0A\u4E00\u9875\uFF09\uFF1A <code>let prevPage = page[page.length - 2]</code> \u6B64\u65F6 <code>prevPage</code> \u4EE3\u8868\u7684\u5C31\u662F\u4E0A\u4E00\u9875\u7684\u5B9E\u4F8B\uFF0C\u76F8\u5F53\u4E8E <code>this</code> \u3002</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;">\xA0page </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#82AAFF;">getCurrentPages</span><span style="color:#A6ACCD;">()\xA0</span><span style="color:#676E95;">//\u83B7\u53D6\u5F53\u524D\u9875\u9762\u6808</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;">\xA0prevPage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> page[page</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length\xA0</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]\xA0</span><span style="color:#676E95;">//\u4EE3\u8868\u7684\u5C31\u662F\u4E0A\u4E00\u9875\u7684\u5B9E\u4F8B\uFF0C\u76F8\u5F53\u4E8Ethis</span></span>
<span class="line"><span style="color:#A6ACCD;">prevPage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setData</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateBack</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">delta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\u5C31\u53EF\u4EE5\u5BF9\u8BE5\u9875\u9762\u7684\u6570\u636E\u505A\u64CD\u4F5C\u518D\u8FD4\u56DE\u4E0A\u4E00\u9875\u4E86\u3002</p><blockquote><p>\u62D3\u5C55 <a href="https://blog.csdn.net/shadow_zed/article/details/104387841/" target="_blank" rel="noreferrer">getCurrentPages\u7684\u4E00\u4E9B\u5751\u70B9</a></p></blockquote>`,9),o=[l];function t(c,r,i,C,g,A){return e(),s("div",null,o)}const y=a(p,[["render",t]]);export{D as __pageData,y as default};
