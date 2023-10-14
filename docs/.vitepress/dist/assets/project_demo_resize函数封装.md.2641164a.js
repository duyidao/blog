import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2ee92742.js";const h=JSON.parse('{"title":"resize函数封装","description":"","frontmatter":{},"headers":[],"relativePath":"project/demo/resize函数封装.md","filePath":"project/demo/resize函数封装.md","lastUpdated":null}'),p={name:"project/demo/resize函数封装.md"},o=l(`<h1 id="resize函数封装" tabindex="-1">resize函数封装 <a class="header-anchor" href="#resize函数封装" aria-label="Permalink to &quot;resize函数封装&quot;">​</a></h1><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p>前端有一个交互是用户拖拽父级盒子，其内容会根据盒子宽度的变化而显示不同数量的内容。如下图所示：</p><p><img src="https://pic.imgdb.cn/item/6529402ac458853aef02bd86.gif" alt="resize"></p><p>想要实现该功能，可以通过自定义函数搭配容器尺寸变化方法 <code>ResizeObserve()</code> 实现。初步代码如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-size-ob</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handleSizeChange&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chartRef&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">chartRef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleSizeChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> size.width</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-size-ob</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handleSizeChange&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chartRef&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">chartRef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">width</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">500</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleSizeChange</span><span style="color:#24292E;">(</span><span style="color:#E36209;">size</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    width.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> size.width</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>接下来配置自定义函数，主要需要做的事情只有两个：</p><ul><li>在真实 DOM 元素渲染完毕后监听其尺寸的变化</li><li>在真实 DOM 元素卸载后取消监听减少性能浪费</li></ul><h2 id="dom存在" tabindex="-1">DOM存在 <a class="header-anchor" href="#dom存在" aria-label="Permalink to &quot;DOM存在&quot;">​</a></h2><p>由于 <code>ResizeObserve()</code> 方法可以监听多个 DOM 元素，因此其形参是一个数组的形式，每一项都是一个对象，包含以下的信息：</p><ul><li>target：目标元素</li><li>borderBoxSize：盒子边框尺寸</li><li>contentBoxSize：盒子内容尺寸</li><li>contentRect：内容区域的整个矩形信息，如坐标、宽高等</li><li>devicePixelContentBoxSize：DPR信息</li></ul><p>通过 <code>for...of...</code> 循环，获取每一项数据对象的 <code>target</code> 对应的回调函数。由于方法和自定义函数不在同一个函数内，因此需要 <code>WeakMap()</code> 作为映射表，把 DOM元素与其 <code>handler</code> 方法一一对应。<code>WeakMap()</code> 与对象的区别简单区分可以理解为 <code>WeakMap()</code> 是一个可以用对象作为键的对象形式。</p><p>这里不使用 <code>Map()</code> 的原因是如果在未来真实 DOM 卸载后，它的键不会清除，因此方法还在，会有潜在的 BUG。<code>WeakMap()</code> 是一个弱映射，它的键不会被垃圾回收器所考量，只要真实 DOM不存在，对应的方法就会被删除掉。</p><p>在方法中获取到对应的处理函数并传递当前元素的宽高。如果宽高变化就会触发自定义的方法。</p><p>代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 建立映射表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WeakMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ob</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ResizeObserver</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">entry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> entries) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 运行 entry.target 对应的回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 保存映射表对应的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">handler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(entry.target)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(handler) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                width: entry.borderBoxSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].inlineSize</span></span>
<span class="line"><span style="color:#E1E4E8;">                height: entry.borderBoxSize[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].blockSize</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监听el元素尺寸变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 保存映射表对应的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        map.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(el, binding.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">        ob.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 建立映射表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WeakMap</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ob</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ResizeObserver</span><span style="color:#24292E;">((</span><span style="color:#E36209;">entries</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">entry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> entries) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 运行 entry.target 对应的回调函数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 保存映射表对应的方法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">handler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(entry.target)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(handler) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                width: entry.borderBoxSize[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].inlineSize</span></span>
<span class="line"><span style="color:#24292E;">                height: entry.borderBoxSize[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].blockSize</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监听el元素尺寸变化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">binding</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 保存映射表对应的方法</span></span>
<span class="line"><span style="color:#24292E;">        map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(el, binding.value)</span></span>
<span class="line"><span style="color:#24292E;">        ob.</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(el)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="dom卸载" tabindex="-1">DOM卸载 <a class="header-anchor" href="#dom卸载" aria-label="Permalink to &quot;DOM卸载&quot;">​</a></h2><p>在 DOM 元素卸载后取消元素的监听即可。代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 监听el元素尺寸变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">binding</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 取消监听</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">unmounted</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        ob.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(el)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 监听el元素尺寸变化</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">, </span><span style="color:#E36209;">binding</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 取消监听</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">unmounted</span><span style="color:#24292E;">(</span><span style="color:#E36209;">el</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        ob.</span><span style="color:#6F42C1;">unobserve</span><span style="color:#24292E;">(el)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,19),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
