import{_ as s,c as n,o as a,d as l}from"./app.6e7d5abf.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"project/lingsi/elk/blob.md"}'),p={name:"project/lingsi/elk/blob.md"},o=l(`<p>\u540E\u7AEF\u8FD4\u56DE\u4E8C\u8FDB\u5236\u6D41\u6587\u4EF6\uFF0C\u524D\u7AEF\u9700\u8981\u901A\u8FC7\u7279\u6B8A\u65B9\u6CD5\u628A\u4E8C\u8FDB\u5236\u6D41\u6587\u4EF6\u8F6C\u4E3A json \u683C\u5F0F\u3002\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><ol><li>\u901A\u8FC7 axios \u53D1\u9001\u8BF7\u6C42\uFF0C\u8BBE\u7F6E\u57FA\u51C6\u8DEF\u5F84\u3001\u8BF7\u6C42\u53C2\u6570\u3001\u54CD\u5E94\u6570\u636E\u7C7B\u578B\u4E3A blob \uFF0C\u8BF7\u6C42\u5934\u643A\u5E26 token \u7B49\u3002</li><li>\u8BF7\u6C42\u6210\u529F\u540E\u56DE\u8C03\u51FD\u6570\u4E2D\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A <ul><li>\u8C03\u7528 new Blob() \u65B9\u6CD5\uFF0C\u628A\u53C2\u6570\u4F20\u9012\u7ED9\u8BE5\u65B9\u6CD5\uFF0C\u8BBE\u7F6E type \u7C7B\u578B\u4E3A {type: &#39;application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8&#39;} \u3002</li><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61 URL \uFF0C\u8BE5\u5BF9\u8C61 URL \u53EF\u4EE5\u4EE3\u8868\u67D0\u4E00\u4E2A\u6307\u5B9A\u7684 file \u5BF9\u8C61\u6216\u8005 bolb \u5BF9\u8C61\u3002\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u4E0A\u9884\u89C8\u672C\u5730\u7684\u56FE\u7247\u6216\u8005\u89C6\u9891\u3002</li><li>\u521B\u5EFA a \u6807\u7B7E\uFF0C\u4F7F\u7528\u5176 download \u65B9\u6CD5\uFF0C\u8FD9\u6837\u5C31\u80FD\u4E0B\u8F7D\u6587\u4EF6\u800C\u4E0D\u662F\u9884\u89C8\uFF0C\u518D\u8BBE\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u540D\u3002</li><li>\u4E0B\u8F7D\u5B8C\u6BD5\u540E\u79FB\u51FA\u5143\u7D20\u548C\u65B9\u6CD5\u3002</li></ul></li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">( baseUrl </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u540E\u7AEF\u63A5\u53E3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#676E95;">//\u8FD9\u91CC\u662F\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">authentication</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">responseType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">//\u54CD\u5E94\u7C7B\u578B\u4E3A\u6D41</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u603B\u4F53\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">downLoad</span><span style="color:#A6ACCD;">(row) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">baseUrl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/license/down/auth/code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#676E95;">//\u8FD9\u91CC\u662F\u53C2\u6570</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      authentication</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2913d3e9-e732-4a1e-a9cc-68cf007dae72</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    responseType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">//\u54CD\u5E94\u7C7B\u578B\u4E3A\u6D41</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">resp</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">blob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">Blob</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">resp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">blob</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">download</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a.txt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">||</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0B\u8F7D\u6587\u4EF6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u4E0B\u8F7D\u540E\u6587\u4EF6\u540D</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u70B9\u51FB\u4E0B\u8F7D</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u4E0B\u8F7D\u5B8C\u6210\u79FB\u9664\u5143\u7D20</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">revokeObjectURL</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">\xA0</span><span style="color:#676E95;">//\u7528\u5B8C\u4E4B\u540E\u4F7F\u7528URL.revokeObjectURL()\u91CA\u653E\uFF1B</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">else</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">\xA0</span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6682\u65E0\u4E0B\u8F7D\u8BE5\u6587\u4EF6\u7684\u6743\u9650\uFF01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">finally</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u8BF7\u6C42\u7ED3\u675F\u56DE\u8C03</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,F,y,D,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
