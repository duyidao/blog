import{_ as s,c as n,o as a,d as l}from"./app.6e7d5abf.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"\u6D77","7":"\u62A5","8":"\u9875"},"headers":[],"relativePath":"project/lingsi/music/H5/index.md"}'),o={name:"project/lingsi/music/H5/index.md"},p=l(`<p>\u6D77\u62A5\u9875\u63D0\u4F9B\u4F7F\u7528\u8005\u4E0B\u8F7D\u8F6F\u4EF6\u7684\u529F\u80FD\uFF0C\u4F46\u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668\u4F1A\u6709\u4E00\u70B9\u95EE\u9898\uFF0C\u56E0\u6B64\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u5224\u65AD\uFF0C\u5982\u679C\u5F53\u524D\u7528\u6237\u6253\u5F00\u7684\u662F\u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668\uFF0C\u5219\u663E\u793A\u4E00\u4E2A\u8499\u7248\uFF0C\u963B\u6B62\u7528\u6237\u64CD\u4F5C\u5E76\u63D0\u793A\u5176\u6253\u5F00\u5176\u4ED6\u6D4F\u89C8\u5668\u3002 <code>navigator.userAgent</code>\uFF1A\u6D4F\u89C8\u5668\u7528\u4E8E <code>HTTP</code> \u8BF7\u6C42\u7684\u7528\u6237\u4EE3\u7406\u5934\u7684\u503C\uFF0C\u901A\u8FC7 <code>UserAgent</code> \u53EF\u4EE5\u53D6\u5F97\u6D4F\u89C8\u5668\u7C7B\u522B\u3001\u7248\u672C\uFF0C\u5BA2\u6237\u7AEF\u64CD\u4F5C\u7CFB\u7EDF\u7B49\u4FE1\u606F\u3002</p><ol><li>\u5728PC\u7AEF\u6253\u5F00 \uFF0Cnavigator.userAgent \u663E\u793A\u5982\u4E0B</li></ol><p><code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36</code></p><ol start="2"><li>\u5728\u624B\u673Aweb\u7AEF\u6253\u5F00 \uFF0Cnavigator.userAgent \u663E\u793A\u5982\u4E0B</li></ol><p><code>Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1</code></p><p>\u603B\u4F53\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">load</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ua</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userAgent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">weixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.isWeixin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5224\u65AD\u662F\u5426\u662F\u5FAE\u4FE1\u5185\u7F6E\u7684\u6D4F\u89C8\u5668</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ua</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ua</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">ua</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MicroMessenger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u7528\u6237\u4F7F\u7528\u7684\u662F\u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">weixin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">block</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">weixin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
