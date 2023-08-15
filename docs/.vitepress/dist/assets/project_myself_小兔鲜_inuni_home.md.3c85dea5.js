import{_ as s,o as n,c as a,S as o}from"./chunks/framework.e036d9b7.js";const d=JSON.parse('{"title":"首页","description":"","frontmatter":{},"headers":[],"relativePath":"project/myself/小兔鲜/inuni/home.md","filePath":"project/myself/小兔鲜/inuni/home.md","lastUpdated":null}'),l={name:"project/myself/小兔鲜/inuni/home.md"},p=o(`<h1 id="首页" tabindex="-1">首页 <a class="header-anchor" href="#首页" aria-label="Permalink to &quot;首页&quot;">​</a></h1><h2 id="头部自定义导航栏" tabindex="-1">头部自定义导航栏 <a class="header-anchor" href="#头部自定义导航栏" aria-label="Permalink to &quot;头部自定义导航栏&quot;">​</a></h2><p>首页头部想使用自定义的导航栏而非官方提供的导航栏，思路分析如下：</p><ol><li>去除官方提供的导航栏</li><li>使用自定义的头部导航栏</li><li>设置安全区域（重点）</li></ol><p>安全区域是指部分机型上下部分会有一定的区域被遮挡，这部分区域需要做处理让内容有足够的内外边距不被挡住。这就是安全区域。</p><p>在 <code>uniapp</code> 中，官方推出了一个方法 <code>uni.getSystemInfoSync()</code> ，其中有一个属性 <code>safeAreaInsets</code> ，是一个对象，分别是 <code>top</code> 、<code>left</code> 、<code>bottom</code> 、<code>right</code> 四个属性，表示各自的安全区域距离。</p><p>获取到安全区域距离后再通过 <code>style</code> 动态设置样式即可，代码如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> safeAreaInsets </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSystemInfoSync</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">navbar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ paddingTop: safeAreaInsets.top + &#39;px&#39; }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="自定义组件导入" tabindex="-1">自定义组件导入 <a class="header-anchor" href="#自定义组件导入" aria-label="Permalink to &quot;自定义组件导入&quot;">​</a></h2><p><code>uni-ui</code> 的组件在 <code>pages.json</code> 文件中通过 <code>easycom</code> 对象设置配置规则，因此使用时可直接使用而无需导入。在 <code>components</code> 中配置的自定义组件也可以设置自动导入。</p><p>首先需要规定这些自定义组件的统一开头，本项目以 <code>Xtx + 组件名</code> 的格式。在 <code>pages.json</code> 文件中配置规则，代码如下：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 组件自动引入规则</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">easycom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// 自己封装的组件规则配置，以Xtx开头，在components文件查找引入</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">^Xtx(.*)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/Xtx$1.vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>配置完需要先重启项目，然后才能生效。配置完后发现这个自定义组件 <code>ts</code> 类型为 <code>unknown</code> ，因此要做额外的配置。</p><p>在 <code>src/components</code> 文件夹下新建一个 <code>components.d.ts</code> 文件，用于配置组件类型。代码如下：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> XtxSwiper </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./XtxSwiper.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    XtxSwiper</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">XtxSwiper</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>现在组件拥有 <code>ts</code> 类型了。</p>`,16),e=[p];function t(c,r,D,y,F,i){return n(),a("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
