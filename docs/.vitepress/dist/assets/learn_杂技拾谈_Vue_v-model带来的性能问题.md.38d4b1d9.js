import{_ as e,o,c as s,Q as a}from"./chunks/framework.2ee92742.js";const y=JSON.parse('{"title":"v-model带来的性能问题","description":"","frontmatter":{},"headers":[],"relativePath":"learn/杂技拾谈/Vue/v-model带来的性能问题.md","filePath":"learn/杂技拾谈/Vue/v-model带来的性能问题.md","lastUpdated":null}'),l={name:"learn/杂技拾谈/Vue/v-model带来的性能问题.md"},n=a('<h1 id="v-model带来的性能问题" tabindex="-1">v-model带来的性能问题 <a class="header-anchor" href="#v-model带来的性能问题" aria-label="Permalink to &quot;v-model带来的性能问题&quot;">​</a></h1><p>在 Vue 中，<code>v-model</code> 会带来一点潜在的问题。先看效果图，如下所示：</p><p><img src="https://pic.imgdb.cn/item/653ca2d8c458853aeff58f58.gif" alt="效果"></p><p>可以看到，一开始动画速度是正常的，但是在输入框内输入值时动画速度开始减缓。</p><p>会造成这一切的原因是输入框通过 <code>v-model</code> 动态绑定数据。而这底层逻辑是 <code>v-model</code> 实际上是一个语法糖，它实际上是通过 <code>v-bind</code> 动态绑定数据，<code>v-on:input</code> 调用 <code>input</code> 事件更改变量的值。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">input</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $event.target.value</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">value</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> @</span><span style="color:#6F42C1;">input</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $event.target.value</span><span style="color:#032F62;">&quot;</span></span></code></pre></div><p>而 JS 是一个单线程的语言，在输入的时候它会一直调用 <code>input</code> 方法，阻塞浏览器的其他动作，有可能导致动画缓慢。</p><p>解决方法为在 <code>v-model</code> 方法后面添加一个标识符 <code>.lazy</code> ，添加该标识符后它不再以 <code>input</code> 方法执行，而是修改为 <code>change</code> 方法。</p><p>不过该方法有利有弊，弊端是 <code>change</code> 方法是等待用户输入完失焦后才触发，因此需要考虑实际业务场景再考虑优化。</p>',9),p=[n];function t(c,d,r,i,u,E){return o(),s("div",null,p)}const _=e(l,[["render",t]]);export{y as __pageData,_ as default};
