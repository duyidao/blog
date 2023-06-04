import{_ as s,c as n,o as a,d as p}from"./app.5698d6bb.js";const C=JSON.parse('{"title":"\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}],"relativePath":"project/lingsi/\u6C34\u6CE5/jeecg/\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00.md"}'),l={name:"project/lingsi/\u6C34\u6CE5/jeecg/\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00.md"},e=p(`<h1 id="\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00" tabindex="-1">\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00 <a class="header-anchor" href="#\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00" aria-hidden="true">#</a></h1><p>\u7528\u6237\u8981\u6C42\u6811\u7EC4\u4EF6\u9ED8\u8BA4\u5C55\u5F00\uFF0C\u4E00\u822C\u6811\u7ED3\u6784\u90FD\u4F1A\u6709\u9ED8\u8BA4\u5C55\u5F00\u3001\u6307\u5B9A\u5C55\u5F00\u7684 <code>API</code> \uFF0C\u67E5\u9605\u5B98\u65B9\u6587\u6863\uFF0C\u679C\u4E0D\u5176\u7136\u53EF\u4EE5\u4F7F\u7528 <code>defaultExpandAll</code> \u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u5373\u53EF\u3002</p><p>\u8BD5\u7528\u4E00\u4E0B\uFF1A</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;a-tree</span></span>
<span class="line"><span style="color:#A6ACCD;">  checkable // \u663E\u793A\u591A\u9009\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">  @check=&quot;onCheck&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :treeData=&quot;membersTree&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :defaultExpandAll=&#39;true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :expandedKeys=&#39;iExpandedKeys&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @expand=&quot;onExpand&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5237\u65B0\u9879\u76EE\u540E\u67E5\u770B\u6548\u679C\uFF0C\u53D1\u73B0\u5E76\u6CA1\u6709\u7528\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u7EE7\u7EED\u7FFB\u9605\u6587\u6863\uFF0C\u53D1\u73B0\u4E0B\u9762\u8FD9\u4E2A\u5C5E\u6027\uFF1A</p><p><img src="https://i.328888.xyz/2023/04/04/ibQCQk.png" alt="ibQCQk.png"></p><p>\u6362\u4E00\u79CD\u601D\u8DEF\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u5168\u90E8\u6811\u8282\u70B9 === \u5C55\u5F00\u6307\u5B9A\u6811\u8282\u70B9\u5B57\u6BB5\u4E2D\u8BBE\u7F6E\u5168\u90E8\u7684\u8282\u70B9 <code>id</code> \uFF0C\u8BE5\u601D\u8DEF\u6210\u7ACB\u3002\u628A\u4E0A\u65B9\u4EE3\u7801\u4FEE\u6539\u4E00\u4E0B\uFF1A</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;a-tree</span></span>
<span class="line"><span style="color:#A6ACCD;">  checkable // \u663E\u793A\u591A\u9009\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">  @check=&quot;onCheck&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :treeData=&quot;membersTree&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :defaultExpandAll=&#39;true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  :expandedKeys.sync=&#39;iExpandedKeys&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @expand=&quot;onExpand&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">initData</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      		</span><span style="color:#82AAFF;">getAction</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        		</span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          			</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">membersTree</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#F07178;">          			</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">iExpandedKeys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">membersTree</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u8981\u4FDD\u5B58\u8282\u70B9\u7684id</span></span>
<span class="line"><span style="color:#F07178;">        		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      		</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5237\u65B0\u9875\u9762\u67E5\u770B\u6548\u679C\uFF0C\u53D1\u73B0\u80FD\u591F\u9ED8\u8BA4\u5C55\u5F00\u5168\u90E8\u7684\u6811\u8282\u70B9\u3002</p>`,11),o=[e];function t(c,r,y,D,F,i){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
