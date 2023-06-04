import{_ as s,c as n,o as a,d as l}from"./app.5698d6bb.js";const d=JSON.parse('{"title":"vue-core\u7684\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u63D2\u4EF6","slug":"\u4E0B\u8F7D\u63D2\u4EF6","link":"#\u4E0B\u8F7D\u63D2\u4EF6","children":[]},{"level":2,"title":"\u63D2\u4EF6\u5168\u5C40\u5F15\u7528","slug":"\u63D2\u4EF6\u5168\u5C40\u5F15\u7528","link":"#\u63D2\u4EF6\u5168\u5C40\u5F15\u7528","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[{"level":3,"title":"HTML\u90E8\u5206","slug":"html\u90E8\u5206","link":"#html\u90E8\u5206","children":[]},{"level":3,"title":"JS\u90E8\u5206","slug":"js\u90E8\u5206","link":"#js\u90E8\u5206","children":[]}]}],"relativePath":"project/lingsi/elk/vue_core.md"}'),e={name:"project/lingsi/elk/vue_core.md"},o=l(`<h1 id="vue-core\u7684\u4F7F\u7528" tabindex="-1">vue-core\u7684\u4F7F\u7528 <a class="header-anchor" href="#vue-core\u7684\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D\u63D2\u4EF6" tabindex="-1">\u4E0B\u8F7D\u63D2\u4EF6 <a class="header-anchor" href="#\u4E0B\u8F7D\u63D2\u4EF6" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i vue-cron </span></span>
<span class="line"></span></code></pre></div><h2 id="\u63D2\u4EF6\u5168\u5C40\u5F15\u7528" tabindex="-1">\u63D2\u4EF6\u5168\u5C40\u5F15\u7528 <a class="header-anchor" href="#\u63D2\u4EF6\u5168\u5C40\u5F15\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0Vue\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0ElementUI\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-ui/lib/theme-chalk/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(ElementUI)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u5168\u5C40\u5F15\u5165</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0VueCron\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-cron</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(VueCron)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u4F7F\u7528\u65B9\u5F0F\uFF1A&lt;vueCron&gt;&lt;/vueCron&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>vue-cron \u6709\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li>change \uFF1A\u5931\u7126\u540E\u4FEE\u6539\u65F6\u95F4\u65F6\u89E6\u53D1\u3002</li><li>close \uFF1A\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1\u3002</li></ul><h3 id="html\u90E8\u5206" tabindex="-1">HTML\u90E8\u5206 <a class="header-anchor" href="#html\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;el-popover\xA0v-model=&quot;cronPopover&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;vueCron\xA0@change=&quot;onChangeCron&quot;\xA0@close=&quot;cronPopover = false&quot;&gt;&lt;/vueCron&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;el-input</span></span>
<span class="line"><span style="color:#A6ACCD;">  slot=&quot;reference&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @click=&quot;cronPopover = true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  v-model=&quot;formData.triggerCron&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  placeholder=&quot;\u8BF7\u8F93\u5165\u5B9A\u65F6\u7B56\u7565&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  size=&quot;small&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/el-popover&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="js\u90E8\u5206" tabindex="-1">JS\u90E8\u5206 <a class="header-anchor" href="#js\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">onChangeCron</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">triggerCron</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,12),p=[o];function t(c,r,i,D,C,y){return a(),n("div",null,p)}const F=s(e,[["render",t]]);export{d as __pageData,F as default};
