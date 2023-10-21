import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2ee92742.js";const u=JSON.parse('{"title":"Vue图片动态引入使用require","description":"","frontmatter":{},"headers":[],"relativePath":"learn/杂技拾谈/Vue/vue图片动态引入使用require.md","filePath":"learn/杂技拾谈/Vue/vue图片动态引入使用require.md","lastUpdated":null}'),o={name:"learn/杂技拾谈/Vue/vue图片动态引入使用require.md"},l=p(`<h1 id="vue图片动态引入使用require" tabindex="-1">Vue图片动态引入使用require <a class="header-anchor" href="#vue图片动态引入使用require" aria-label="Permalink to &quot;Vue图片动态引入使用require&quot;">​</a></h1><p>在 <code>vue</code> 项目中有一个场景：后端返回了一个数组对象，对象中有一个 <code>cover</code> 字段作为图片显示。当该字段为空时则显示默认图片。咋一看很简单，使用一个三元表达式或者或运算的短路想法，例如：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">cover </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> cover </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../../assets/img/logo.png&#39;&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">cover </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> cover </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../../assets/img/logo.png&#39;&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>运行项目时发现动态获取的静态图片无效果显示。</p><p>网上对此的解答也很多，千篇一律都是说在vue中动态的引入图片需要使用 <code>require</code> 来编译静态资源路径获取资源进行渲染，如果不加上的话则被当做静态资源处理。</p><p>只是，又产生了几个疑问：</p><ul><li>什么是静态资源什么是动态资源</li><li>为什么没有动态获取的静态资源图片能够渲染，而动态获取的不成功</li><li>require编译做了什么操作</li></ul><p>现在回过头来看刚刚找到的解释，感觉好像说了什么，但是又一头雾水。</p><h2 id="静态资源与动态资源" tabindex="-1">静态资源与动态资源 <a class="header-anchor" href="#静态资源与动态资源" aria-label="Permalink to &quot;静态资源与动态资源&quot;">​</a></h2><p>何谓静态资源？一般客户端发送请求到 <code>web</code> 服务器，<code>web</code> 服务器从内存在取到相应的文件，返回给客户端，客户端解析并渲染显示出来。</p><p>何谓动态资源？一般客户端请求的动态资源，先将请求交于 <code>web</code> 容器，<code>web</code> 容器连接数据库，数据库处理数据之后，将内容交给 <code>web</code> 服务器，<code>web</code> 服务器返回给客户端解析渲染处理。</p><p>在 <code>vue</code> 项目中，静态资源即放在 <code>assets</code> 等文件夹内的图片、视频、<code>iconfont</code> 字体文件等；动态资源则是通过接口请求获取到的数据。</p><h2 id="资源渲染" tabindex="-1">资源渲染 <a class="header-anchor" href="#资源渲染" aria-label="Permalink to &quot;资源渲染&quot;">​</a></h2><p>关于第二个问题，首先需要先搞清楚浏览器是怎么运行一个 <code>vue</code> 项目的。</p><p>众所周知，浏览器只认识 <code>htnl</code> 、 <code>css</code> 、 <code>js</code> 文件，并不认识 <code>.vue</code> 文件，而浏览器运行vue项目实际上是先将vue项目进行打包，把每个vue文件打包成一个个css、html与js文件，最后再到浏览器中运行。</p><p>因此，如果是动态获取的静态资源不加 <code>require</code> ，最终打包的效果如下所示：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;../../assets/img/logo.png&#39;&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-----------------------------------------&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../assets/logo.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logo&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;../../assets/img/logo.png&#39;&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-----------------------------------------&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../assets/logo.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logo&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>可以看出，动态添加的src最终会编译成一个静态的字符串地址。程序运行的时候，会按照这个地址去项目目录中引入资源。而去项目目录中引入资源的这种方式，就是将该资源当成了静态资源。</p><p>那为什么不通过动态获取的静态图片能够编译成功呢？重复静态获取一张图片再试一次，打包后效果如下：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../../assets/img/logo.png&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-----------------------------------------&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/img/logo.6c137b82.png&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--或者--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/.....&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../../assets/img/logo.png&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-----------------------------------------&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/img/logo.6c137b82.png&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--或者--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/.....&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>可以发现，使用静态的地址去引入一张图片，图片的路径和图片的名称已经发生了改变，并且编译后过后的静态地址是可以成功的引入资源的。这是因为，在默认情况下，src目录下面的所有文件都会被打包，src下面的图片也会被打包在新的文件夹下并生成新的文件名。编译过后的静态地址引入的是打包过后的图片地址，从而可以正确的引用资源。</p><p>因此第二个问题也有了解答：因为动态的添加的src编译过后的地址，与图片资源编译过后的资源地址不一致， 导致无法正确的引入资源。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">编译过后的src地址：../../assets/logo.png</span></span>
<span class="line"><span style="color:#e1e4e8;">编译过后的图片资源地址：/img/logo.6c137b82.png</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">编译过后的src地址：../../assets/logo.png</span></span>
<span class="line"><span style="color:#24292e;">编译过后的图片资源地址：/img/logo.6c137b82.png</span></span></code></pre></div><h2 id="require执行" tabindex="-1">require执行 <a class="header-anchor" href="#require执行" aria-label="Permalink to &quot;require执行&quot;">​</a></h2><p>什么是 <code>require</code> ？是一个 <code>node</code> 方法，用于引入模块，<code>JSON</code> 或本地文件。</p><p>《资源渲染》最后的示例代码中编译后的场景分为两种，一种是 <code>img</code> 文件夹下的图片路径，一种是 <code>base64</code> ，为什么会产生这种差异？</p><p>vue最终是通过webpack打包，并且会在 <code>webpack</code> 配置文件中编写一系列打包规则。而 <code>webpack</code> 中的打包规则，针对的其实是一个一个模块，换而言之 <code>webpack</code> 只会对模块进行打包。</p><p>当我们使用 <code>require</code> 方法引入一张图片的时候，<code>webpack</code> 会将这张图片当成一个模块，并根据配置文件中的规则进行打包。我们可以将 <code>require</code> 当成一个桥梁，使用了 <code>require</code> 方法引入的资源，该资源就会当成模块并根据配置文件进行打包，并返回最终的打包结果。</p><p>因此 <code>require</code> 打包执行了什么操作？</p><ol><li>如果这张图片小于项目中设置的资源限制大小，则会返回图片的<code>base64</code> 插入到 <code>require</code> 方法的调用处</li><li>如果这张图片大于项目中设置的资源限制大小，则会将这个图片编译成一个新的图片资源。<code>require</code> 方法返回新的图片资源路径及文件名</li></ol><p>因此编译过后的文件地址和被编译过后的资源文件地址不一致，从而无法正确引入资源。而使用 <code>require</code>，返回的就是资源文件被编译后的文件地址，从而可以正确的引入资源。</p><h2 id="题外话" tabindex="-1">题外话 <a class="header-anchor" href="#题外话" aria-label="Permalink to &quot;题外话&quot;">​</a></h2><ol><li><p>静态的引入一张图片，没有使用 <code>require</code> ，为什么返回的依然是编译过后的文件地址？</p><p>在 <code>webpack</code> 编译的 <code>vue</code> 文件的时候，遇见src等属性会默认的使用 <code>require</code> 引入资源路径。引用 <code>vue-cli</code> 官方的一段原话</p><blockquote><p>当你在 <code>JavaScript</code>、<code>CSS</code> 或 <code>*.vue</code> 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 <code>webpack</code> 的依赖图中。在其编译过程中，所有诸如 <code>&lt;img src=&quot;...&quot;&gt;</code>、<code>background: url(...)</code> 和 <code>CSS @import</code> 的资源 <code>URL</code> 都会被解析为一个模块依赖。</p><p>例如，<code>url(./image.png)</code> 会被翻译为 <code>require(&#39;./image.png&#39;)</code>，而：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./image.png&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;./image.png&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>将会被编译到：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">, { attrs: { src: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./image.png&#39;</span><span style="color:#E1E4E8;">) }})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;img&#39;</span><span style="color:#24292E;">, { attrs: { src: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./image.png&#39;</span><span style="color:#24292E;">) }})</span></span></code></pre></div><p>态引入一张图片的时候，src后面的属性值，实际上是一个变量。<code>webpack</code> 会根据 <code>v-bind</code> 指令去解析src后面的属性值。并不会通过 <code>reuqire</code> 引入资源路径。因此需要手动的添加 <code>require</code> 。</p></blockquote></li><li><p>如果是 <code>vite</code> 创建的项目，以下几种情况可满足自动转换路径：</p><ol><li><code>css</code> 的静态路径</li><li><code>img</code> 的 <code>src</code></li><li><code>import()</code> 语句</li><li><code>URL</code></li></ol></li></ol><h2 id="业务复现" tabindex="-1">业务复现 <a class="header-anchor" href="#业务复现" aria-label="Permalink to &quot;业务复现&quot;">​</a></h2><p>如何实现鼠标切换图片的显示（图片放在 <code>src/assets</code> 文件夹下）？</p><p>根据前面的知识积累，可以很快得出直接修改路径是没有效果的，如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeImgFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`./assets/\${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">}.jpg\`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeImgFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    path.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`./assets/\${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">}.jpg\`</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>由于打包后的图片路径与其不相符，最终图片无法渲染。</p><p>方法一：可以采用 <code>import()</code> 方法，代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeImgFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`./assets/\${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">}.jpg\`</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">    	path.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.default</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeImgFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`./assets/\${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">}.jpg\`</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">    	path.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.default</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>该方法回调参数拿到的数据如下图所示：</p><p><img src="https://pic.imgdb.cn/item/652e9cfbc458853aef0d1417.jpg" alt="打印结果"></p><p>但是这个方法有一个缺点，它会生成一些 <code>js</code> 文件，如果不希望这些文件生成，这个方法不可用。</p><p><img src="https://pic.imgdb.cn/item/652e9c60c458853aef0bb8b8.jpg" alt="生成的js文件"></p><p>方法二：通过 JavaScript 内置对象 URL 生成地址，需要传入两个参数，参数一为图片相等路径，参数二是相对的对象。代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeImgFn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`./assets/\${</span><span style="color:#E1E4E8;">e</span><span style="color:#9ECBFF;">}.jpg\`</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url)</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(url)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeImgFn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`./assets/\${</span><span style="color:#24292E;">e</span><span style="color:#032F62;">}.jpg\`</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.url)</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(url)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>打印结果如下所示：</p><p><img src="https://pic.imgdb.cn/item/652e9eb2c458853aef10f254.jpg" alt="打印结果"></p>`,48),e=[l];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const F=s(o,[["render",c]]);export{u as __pageData,F as default};
