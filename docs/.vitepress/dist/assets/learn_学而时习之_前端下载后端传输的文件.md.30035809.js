import{_ as s,c as a,o as l,d as n}from"./app.b84cf53a.js";const A=JSON.parse('{"title":"\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u76F4\u63A5\u6253\u5F00","slug":"\u76F4\u63A5\u6253\u5F00","link":"#\u76F4\u63A5\u6253\u5F00","children":[]},{"level":2,"title":"a\u6807\u7B7E\u4E0B\u8F7D","slug":"a\u6807\u7B7E\u4E0B\u8F7D","link":"#a\u6807\u7B7E\u4E0B\u8F7D","children":[{"level":3,"title":"\u91CD\u8981\u6982\u5FF5","slug":"\u91CD\u8981\u6982\u5FF5","link":"#\u91CD\u8981\u6982\u5FF5","children":[]},{"level":3,"title":"\u6D41\u7A0B\u68B3\u7406","slug":"\u6D41\u7A0B\u68B3\u7406","link":"#\u6D41\u7A0B\u68B3\u7406","children":[]},{"level":3,"title":"\u4EE3\u7801\u5B9E\u64CD","slug":"\u4EE3\u7801\u5B9E\u64CD","link":"#\u4EE3\u7801\u5B9E\u64CD","children":[]}]},{"level":2,"title":"\u7B2C\u4E09\u65B9\u5E93","slug":"\u7B2C\u4E09\u65B9\u5E93","link":"#\u7B2C\u4E09\u65B9\u5E93","children":[]},{"level":2,"title":"\u62D3\u5C55","slug":"\u62D3\u5C55","link":"#\u62D3\u5C55","children":[{"level":3,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]}]}],"relativePath":"learn/\u5B66\u800C\u65F6\u4E60\u4E4B/\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6.md"}'),o={name:"learn/\u5B66\u800C\u65F6\u4E60\u4E4B/\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6.md"},p=n(`<h1 id="\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6" tabindex="-1">\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6 <a class="header-anchor" href="#\u524D\u7AEF\u4E0B\u8F7D\u540E\u7AEF\u4F20\u8F93\u7684\u6587\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><ol><li><p>\u76F4\u63A5\u6253\u5F00\u4E0B\u8F7D\u5730\u5740</p><p>\u65E0\u6CD5\u547D\u540D\uFF0C\u53EA\u9002\u7528\u4E8E <code>get</code> \u76F4\u63A5\u8FD4\u56DE <code>blob</code> \u7684\u63A5\u53E3</p></li><li><p>\u5229\u7528 <code>a</code> \u6807\u7B7E\u7684 \`\`download\` \u5C5E\u6027</p><p>\u6BD4\u8F83\u5408\u9002\u7684\u65B9\u6848</p></li><li><p>\u7B2C\u4E09\u65B9\u5E93 <code>file-saver</code></p></li></ol><h2 id="\u76F4\u63A5\u6253\u5F00" tabindex="-1">\u76F4\u63A5\u6253\u5F00 <a class="header-anchor" href="#\u76F4\u63A5\u6253\u5F00" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>window.open()</code> \u76F4\u63A5\u6253\u5F00\u4E0B\u8F7D\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">downloadFn</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7F3A\u70B9\uFF1A</p><ol><li>\u65E0\u6CD5\u66F4\u6539\u540D\u79F0</li><li>\u65E0\u6CD5\u505A <code>token</code> \u6821\u9A8C</li></ol><h2 id="a\u6807\u7B7E\u4E0B\u8F7D" tabindex="-1">a\u6807\u7B7E\u4E0B\u8F7D <a class="header-anchor" href="#a\u6807\u7B7E\u4E0B\u8F7D" aria-hidden="true">#</a></h2><h3 id="\u91CD\u8981\u6982\u5FF5" tabindex="-1">\u91CD\u8981\u6982\u5FF5 <a class="header-anchor" href="#\u91CD\u8981\u6982\u5FF5" aria-hidden="true">#</a></h3><p>\u5148\u634B\u6E05\u695A\u51E0\u4E2A\u91CD\u8981\u6982\u5FF5\uFF1A</p><ul><li><code>createObjectURL</code> \uFF1A\u628A <code>blob</code> \u5BF9\u8C61\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4EE5 <code>url</code> \u5F62\u5F0F\u7ED9\u51FA</li><li><code>msSaveBlob</code> \uFF1AIE\u4E0D\u652F\u6301 <code>a</code> \u6807\u7B7E\u4E0B\u8F7D\uFF0C\u7528\u8BE5\u65B9\u6CD5\u4EE3\u66FF</li><li><code>download</code> \uFF1A<code>a</code> \u6807\u7B7E\u8BE5\u5C5E\u6027\u662F\u4E0B\u8F7D\uFF0C\u53EF\u8BF4\u660E\u6587\u4EF6\u540D</li></ul><h3 id="\u6D41\u7A0B\u68B3\u7406" tabindex="-1">\u6D41\u7A0B\u68B3\u7406 <a class="header-anchor" href="#\u6D41\u7A0B\u68B3\u7406" aria-hidden="true">#</a></h3><p>\u9996\u5148\u6309 <code>blob</code> \u683C\u5F0F\u8BF7\u6C42\u63A5\u53E3\u63A5\u6536\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u7136\u540E\u5224\u65AD\u662F\u5426\u6709 <code>msSaveBlob</code> \u3002</p><h4 id="\u6709mssaveblob" tabindex="-1">\u6709msSaveBlob <a class="header-anchor" href="#\u6709mssaveblob" aria-hidden="true">#</a></h4><p>\u7528 <code>msSaveBlob</code> \u4E0B\u8F7D\u3002</p><h4 id="\u65E0mssaveblob" tabindex="-1">\u65E0msSaveBlob <a class="header-anchor" href="#\u65E0mssaveblob" aria-hidden="true">#</a></h4><ul><li><code>createObjectURL</code> \u521B\u5EFA\u6587\u4EF6\u672C\u5730 <code>url</code></li><li>\u521B\u5EFA <code>a</code> \u6807\u7B7E</li><li>\u521B\u5EFA\u7684 <code>url</code> \u7ED9\u5230 <code>a</code> \u6807\u7B7E\u7684 <code>href</code></li><li>\u8BBE\u7F6E <code>download</code> \uFF08\u5373\u6587\u4EF6\u540D\uFF09</li><li>\u6A21\u62DF\u70B9\u51FB\u4E0B\u8F7D</li><li>\u4E0B\u8F7D\u5B8C\u6BD5\uFF0C\u9500\u6BC1 <code>a</code> \u6807\u7B7E</li></ul><h3 id="\u4EE3\u7801\u5B9E\u64CD" tabindex="-1">\u4EE3\u7801\u5B9E\u64CD <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u64CD" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u6309blob\u8BF7\u6C42\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">responseType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msSaveBlob</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// IE\u6D4F\u89C8\u5668</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">msSaveBlob</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/vnd.openxmlformats-officedocument.presentationml.presentation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">download.ppt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u975EIE</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">blobURL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u521B\u5EFAblob\u672C\u5730url</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u521B\u5EFA\u6807\u7B7E</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">blobURL</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8BBE\u7F6Ehref</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">download</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">download.ppt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8BBE\u7F6E\u4E0B\u8F7D\u7684\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u628A\u4ED6\u9690\u85CF</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">revokeObjectURL</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">blobURL</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u9500\u6BC1\u4E34\u65F6\u5730\u5740</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B2C\u4E09\u65B9\u5E93" tabindex="-1">\u7B2C\u4E09\u65B9\u5E93 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a></h2><ul><li><p>\u4E0B\u8F7D</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add file-saver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u5F15\u5165 <code>saver</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">saveAs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file-saver</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u4F7F\u7528</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">responseType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">saveAs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">download.ppt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u8DEF\u5F84\uFF0C\u540D\u79F0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="\u62D3\u5C55" tabindex="-1">\u62D3\u5C55 <a class="header-anchor" href="#\u62D3\u5C55" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D\u5B8C\u6587\u4EF6\u540E\u60F3\u8981\u5C55\u793A\u9884\u89C8\u8BE5\u5982\u4F55\u5B9E\u73B0\uFF1F</p><h3 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h3><p>\u9884\u89C8\u65E0\u8BBA\u662F\u56FE\u7247\uFF0C\u8FD8\u662F <code>excel</code>\u3001<code>word</code> \uFF0C\u90FD\u9700\u8981\u4E00\u4E2A\u5730\u5740 <code>url</code> \u3002</p><p><code>url</code> \u9664\u4E86\u7EBF\u4E0A\u5730\u5740\uFF0C\u8FD8\u80FD\u4F7F\u7528 <code>base64</code> \u5730\u5740\u3002\u56E0\u6B64\u63A5\u6536\u5230 <code>blob</code> \u5730\u5740\u540E\u628A\u5B83\u8F6C\u4E3A <code>base64</code> \u5373\u53EF\u3002</p><p>\u8F6C\u6362\u65B9\u6CD5\u53EF\u4EE5\u7528\u5230 <code>fileReader</code> \u65B9\u6CD5\u8F6C\u6362\u6210\u4EFB\u610F\u6211\u4EEC\u60F3\u8981\u7684\u683C\u5F0F\u3002</p>`,28),e=[p];function c(t,r,y,F,D,d){return l(),a("div",null,e)}const C=s(o,[["render",c]]);export{A as __pageData,C as default};
