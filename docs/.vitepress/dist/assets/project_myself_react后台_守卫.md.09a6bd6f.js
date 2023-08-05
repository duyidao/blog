import{_ as s,c as n,o as a,d as l}from"./app.41da29c2.js";const i=JSON.parse('{"title":"\u8DEF\u7531\u5B88\u536B","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"r","7":"e","8":"a","9":"c","10":"t","11":"\u540E","12":"\u53F0","13":"\u8DEF","14":"\u7531","15":"\u5B88","16":"\u536B"},"headers":[{"level":2,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":2,"title":"\u7B80\u6613\u67B6\u6784","slug":"\u7B80\u6613\u67B6\u6784","link":"#\u7B80\u6613\u67B6\u6784","children":[]},{"level":2,"title":"\u4E1A\u52A1\u5B9E\u73B0","slug":"\u4E1A\u52A1\u5B9E\u73B0","link":"#\u4E1A\u52A1\u5B9E\u73B0","children":[]}],"relativePath":"project/myself/react\u540E\u53F0/\u5B88\u536B.md"}'),p={name:"project/myself/react\u540E\u53F0/\u5B88\u536B.md"},o=l(`<h1 id="\u8DEF\u7531\u5B88\u536B" tabindex="-1">\u8DEF\u7531\u5B88\u536B <a class="header-anchor" href="#\u8DEF\u7531\u5B88\u536B" aria-hidden="true">#</a></h1><h2 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h2><p>\u4E8C\u7EA7\u8DEF\u7531\u6E32\u67D3\u662F\u901A\u8FC7 <code>outlet</code> \u5360\u4F4D\u7EC4\u4EF6\u5B9E\u73B0\u5360\u4F4D\u6E32\u67D3\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u6B65\u9AA4\u5B9E\u73B0\u8DEF\u7531\u5B88\u536B\uFF1A</p><ol><li>\u8BBE\u7F6E\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE <code>outlet</code> \u3002\u8BE5\u51FD\u6570\u4EE3\u66FF\u539F\u6765\u7684 <code>outlet</code> \u505A\u5360\u4F4D\u7EC4\u4EF6</li><li>\u5728\u51FD\u6570\u4E2D\u6DFB\u52A0\u5224\u65AD\uFF0C\u5982\u679C\u5224\u65AD\u901A\u8FC7\uFF0C\u5219\u653E\u884C\uFF1B\u5982\u679C\u5224\u65AD\u4E0D\u901A\u8FC7\uFF0C\u5219\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684 JSX \u9875\u9762</li><li>\u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 <code>useNavigate</code> \u6765\u5B9E\u73B0\u8DF3\u8F6C\uFF0C\u56E0\u4E3A\u9700\u8981\u8BE5\u51FD\u6570\u662F\u4E00\u4E2A\u6B63\u5E38\u7684 JSX \u7EC4\u4EF6</li></ol><h2 id="\u7B80\u6613\u67B6\u6784" tabindex="-1">\u7B80\u6613\u67B6\u6784 <a class="header-anchor" href="#\u7B80\u6613\u67B6\u6784" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRoutes</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLocation</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useNavigate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BeforeRouterEnter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outlet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRoutes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">router</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outlet</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BeforeRouterEnter</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E1A\u52A1\u5B9E\u73B0" tabindex="-1">\u4E1A\u52A1\u5B9E\u73B0 <a class="header-anchor" href="#\u4E1A\u52A1\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0\u81EA\u5DF1\u7684\u5224\u65AD\uFF0C\u5982\u679C\u6EE1\u8DB3\u6761\u4EF6\u9700\u8981\u8DF3\u8F6C\u8DEF\u7531\uFF0C\u5219\u901A\u8FC7 <code>useNavigate</code> \u5B9E\u73B0\u8DF3\u8F6C\u3002\u7531\u4E8E\u51FD\u6570\u9700\u8981\u7528\u4F5C\u771F\u5B9E JSX \u7EC4\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A DOM \u5143\u7D20\u3002\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRoutes</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLocation</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useNavigate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-router-dom</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">antd</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BeforeRouterEnter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outlet</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRoutes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">router</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">navigateTo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useNavigate</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5982\u679C\u6EE1\u8DB3\u67D0\u79CD\u5224\u65AD\uFF0C\u5219\u8DF3\u8F6C\u5230 vue \u9875\u9762</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">xxxx</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;">// \u5728\u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    	 </span><span style="color:#82AAFF;">navigateTo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  	 </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [])</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">warning</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u56E0\u4E3A</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">xxxx</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">\uFF0C\u4F60\u8981\u8DF3\u8F6C\u5230vue\u9875\u9762</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outlet</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">App</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BeforeRouterEnter</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,F,D,y,A){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
