import{_ as s,c as a,o as n,d as l}from"./app.b84cf53a.js";const A=JSON.parse('{"title":"\u5BFC\u51FAPDF","description":"","frontmatter":{},"headers":[{"level":2,"title":"html2Canvas","slug":"html2canvas","link":"#html2canvas","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":3,"title":"\u5F15\u7528","slug":"\u5F15\u7528","link":"#\u5F15\u7528","children":[]},{"level":3,"title":"\u662F\u4EC0\u4E48","slug":"\u662F\u4EC0\u4E48","link":"#\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"\u600E\u4E48\u7528","slug":"\u600E\u4E48\u7528","link":"#\u600E\u4E48\u7528","children":[]},{"level":3,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898","link":"#\u5E38\u89C1\u95EE\u9898","children":[]}]},{"level":2,"title":"jsPdf","slug":"jspdf","link":"#jspdf","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-1","link":"#\u5B89\u88C5-1","children":[]},{"level":3,"title":"\u5F15\u7528","slug":"\u5F15\u7528-1","link":"#\u5F15\u7528-1","children":[]},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]},{"level":3,"title":"\u6DFB\u52A0\u56FE\u7247","slug":"\u6DFB\u52A0\u56FE\u7247","link":"#\u6DFB\u52A0\u56FE\u7247","children":[]},{"level":3,"title":"\u4FDD\u5B58\u6587\u6863","slug":"\u4FDD\u5B58\u6587\u6863","link":"#\u4FDD\u5B58\u6587\u6863","children":[]},{"level":3,"title":"\u6574\u4F53\u4EE3\u7801","slug":"\u6574\u4F53\u4EE3\u7801","link":"#\u6574\u4F53\u4EE3\u7801","children":[]}]},{"level":2,"title":"\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5","slug":"\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5","link":"#\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5","children":[]}],"relativePath":"project/lingsi/elk/pdf.md"}'),p={name:"project/lingsi/elk/pdf.md"},o=l(`<h1 id="\u5BFC\u51FApdf" tabindex="-1">\u5BFC\u51FAPDF <a class="header-anchor" href="#\u5BFC\u51FApdf" aria-hidden="true">#</a></h1><p>\u5BFC\u51FA\u9875\u9762\u4E3A\u4E00\u4E2A pdf \u6587\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230\u4E24\u4E2A\u7B2C\u4E09\u65B9\u5305\uFF1A html2Canvas \u548C jsPdf \u3002</p><h2 id="html2canvas" tabindex="-1">html2Canvas <a class="header-anchor" href="#html2canvas" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p>yarn add html2canvas</p><h3 id="\u5F15\u7528" tabindex="-1">\u5F15\u7528 <a class="header-anchor" href="#\u5F15\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0html2Canvas\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html2canvas</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u662F\u4EC0\u4E48" tabindex="-1">\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u5141\u8BB8\u8BA9\u6211\u4EEC\u76F4\u63A5\u5728\u7528\u6237\u6D4F\u89C8\u5668\u4E0A\u62CD\u6444\u7F51\u9875\u6216\u5176\u90E8\u5206\u7684\u201C\u622A\u56FE\u201D\u3002 \u5B83\u7684\u5C4F\u5E55\u622A\u56FE\u662F\u57FA\u4E8E DOM \u7684\uFF0C\u56E0\u6B64\u53EF\u80FD\u4E0D\u4F1A 100% \u7CBE\u786E\u5230\u771F\u5B9E\u7684\u8868\u793A\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u4F1A\u751F\u6210\u5B9E\u9645\u7684\u5C4F\u5E55\u622A\u56FE\uFF0C\u800C\u662F\u57FA\u4E8E\u9875\u9762\u4E0A\u53EF\u7528\u7684\u4FE1\u606F\u6784\u5EFA\u5C4F\u5E55\u622A\u56FE\u3002</p><h3 id="\u600E\u4E48\u7528" tabindex="-1">\u600E\u4E48\u7528 <a class="header-anchor" href="#\u600E\u4E48\u7528" aria-hidden="true">#</a></h3><ol><li>\u83B7\u53D6\u5230\u9700\u8981\u201C\u622A\u56FE\u201D\u7684 DOM \u8282\u70B9</li><li>\u4F20\u9012\u201C\u622A\u56FE\u201D\u7684\u53C2\u6570\uFF1A <ul><li>allowTaint\uFF1A\u5141\u8BB8\u8DE8\u57DF\u56FE\u7247</li><li>useCORS\uFF1A\u5F00\u542F\u8DE8\u57DF\u914D\u7F6E</li><li>scale\uFF1A\u6BD4\u4F8B\u7F29\u653E\u6574\u4F53\u56FE\u7247</li></ul></li><li>\u5728\u56DE\u8C03\u4E2D\u901A\u8FC7 toDataURL \u65B9\u6CD5\u628A\u83B7\u53D6\u5230\u7684\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u5F62\u5F0F</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">html2Canvas</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">allowTaint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">useCORS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;">/* \u5BFC\u51FA\u4E0D\u5206\u9875\u5904\u7406 */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">pageData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDataURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">img</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">Image</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pageData</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h3><ol><li>Error loading img \u56FE\u7247\u8DE8\u57DF\u65F6\u4F1A\u9020\u6210\u6C61\u67D3\uFF0C\u5BFC\u81F4\u7ED8\u5236\u5931\u8D25\u3002\u770B\u540E\u53F0\u662F\u5426\u5F00\u542F\u8DE8\u57DF\uFF0C\u5F00\u542F\u540E\u8BBE\u7F6E useCORS \u548C allowTaint \u3002</li><li>\u4E0D\u652F\u6301 css3 \u63D2\u4EF6\u4E0D\u652F\u6301 css3 \u65B0\u7279\u6027\uFF0C\u56E0\u6B64\u4F7F\u7528 background \u7B49\u80CC\u666F\u56FE\u4F1A\u6709\u4E00\u4E9B\u6F5C\u5728\u7684 bug \uFF0C\u5982\u679C\u786E\u5B9A\u8BE5\u9875\u9762\u9700\u8981\u5BFC\u51FA\uFF0C\u5C31\u4F7F\u7528 img \u914D\u5408\u5B9A\u4F4D\u7684\u5F62\u5F0F\u5B9E\u73B0\u6548\u679C\u3002</li></ol><h2 id="jspdf" tabindex="-1">jsPdf <a class="header-anchor" href="#jspdf" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a></h3><p>yarn add jspdf</p><h3 id="\u5F15\u7528-1" tabindex="-1">\u5F15\u7528 <a class="header-anchor" href="#\u5F15\u7528-1" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0jsPDF\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jspdf</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;">\xA0pdf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#82AAFF;">jsPDF</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [pdfX</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pdfY])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u53C2\u6570\u4E00\uFF1A\u65B9\u5411\uFF08l\uFF1A\u6A2A\u5411 p\uFF1A\u7EB5\u5411\uFF09</li><li>\u53C2\u6570\u4E8C\uFF1A\u6D4B\u91CF\u5355\u4F4D\uFF08&quot;pt&quot;\uFF0C&quot;mm&quot;, &quot;cm&quot;, &quot;m&quot;, &quot;in&quot; or &quot;px&quot;\uFF09</li><li>\u53C2\u6570\u4E09\uFF1A\u53EF\u4EE5\u662F\u4E0B\u9762\u683C\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u201Ca4\u201D\u3002\u5982\u679C\u60F3\u4F7F\u7528\u81EA\u5DF1\u7684\u683C\u5F0F\uFF0C\u53EA\u9700\u5C06\u5927\u5C0F\u4F5C\u4E3A\u6570\u5B57\u6570\u7EC4\u4F20\u9012\uFF0C\u4F8B\u5982[595.28, 841.89];</li></ul><h3 id="\u6DFB\u52A0\u56FE\u7247" tabindex="-1">\u6DFB\u52A0\u56FE\u7247 <a class="header-anchor" href="#\u6DFB\u52A0\u56FE\u7247" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 pdf.addImage() \u5C06\u56FE\u50CF\u6DFB\u52A0\u5230 PDF \uFF0CaddImage \u53C2\u6570\u8BBE\u7F6E\u5982\u4E0B\uFF1A <img src="https://cdn.nlark.com/yuque/0/2023/png/29781801/1675736751934-4ea419c8-ccbb-4a7b-8c44-0cef59c52cfa.png#averageHue=%23fefefe&amp;clientId=ua586776f-4dd9-4&amp;from=paste&amp;id=u7cb72feb&amp;name=image.png&amp;originHeight=1334&amp;originWidth=2262&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=314753&amp;status=done&amp;style=none&amp;taskId=u1871541a-1796-4e07-9a05-9c92a370708&amp;title=" alt="image.png"></p><h3 id="\u4FDD\u5B58\u6587\u6863" tabindex="-1">\u4FDD\u5B58\u6587\u6863 <a class="header-anchor" href="#\u4FDD\u5B58\u6587\u6863" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 pdf.save(name + &#39;.pdf&#39;); \u7684\u65B9\u6CD5\u5BFC\u51FA\u6587\u6863\u5E76\u547D\u540D\u3002</p><h3 id="\u6574\u4F53\u4EE3\u7801" tabindex="-1">\u6574\u4F53\u4EE3\u7801 <a class="header-anchor" href="#\u6574\u4F53\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">\xA0pageData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDataURL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#F78C6C;">1.0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">\xA0img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#82AAFF;">Image</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> pageData</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">\xA0imgWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width) </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#F78C6C;">0.195</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;">\xA0imgHeight </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height) </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#F78C6C;">0.195</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">// \u5185\u5BB9\u56FE\u7247\u8FD9\u91CC\u4E0D\u9700\u8981\u7559\u767D\u7684\u8DDD\u79BB</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;">\xA0PDF</span></span>
<span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">\xA0(</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">PDF</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">JsPDF</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">l</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">else</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">PDF</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">JsPDF</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PDF</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addImage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pageData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">imgWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">imgHeight</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PDF</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.pdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5" tabindex="-1">\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5 <a class="header-anchor" href="#\u5BFC\u51FA\u51FD\u6570\u5C01\u88C5" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0html2Canvas\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html2canvas</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">\xA0JsPDF\xA0</span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jspdf</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">install</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPdf</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">html2Canvas</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">\xA0</span><span style="color:#676E95;">// \u4F7F\u7528\u9875\u9762\u7684\u603BDIV \u7684ID\uFF0C\u6BD4\u5982 el-col</span></span>
<span class="line"><span style="color:#F07178;">        allowTaint</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">\xA0</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        useCORS</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">\xA0</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// scale: 2 // \u63D0\u5347\u753B\u9762\u8D28\u91CF\uFF0C\u4F46\u662F\u4F1A\u589E\u52A0\u6587\u4EF6\u5927\u5C0F</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4EE5\u4E0B\u5927\u5C0F\u7ECF\u8FC7\u6D4B\u8BD5\u6BD4\u8F83\u5408\u9002\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\uFF0C\u4E00\u70B9\u70B9\u8C03\u6574</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">0.2</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">0.2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;">/* \u5BFC\u51FA\u4E0D\u5206\u9875\u5904\u7406 */</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">pageData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDataURL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">image/jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">1.0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">img</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">Image</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pageData</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">imgWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">0.195</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">imgHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">0.195</span><span style="color:#F07178;">\xA0</span><span style="color:#676E95;">// \u5185\u5BB9\u56FE\u7247\u8FD9\u91CC\u4E0D\u9700\u8981\u7559\u767D\u7684\u8DDD\u79BB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5BFC\u51FApdf</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">\xA0</span><span style="color:#A6ACCD;">PDF</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">\xA0(</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">PDF</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">JsPDF</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">l</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">else</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">PDF</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">=</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;">\xA0</span><span style="color:#82AAFF;">JsPDF</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">contentWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">contentHeight</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">PDF</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addImage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pageData</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jpeg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">imgWidth</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">imgHeight</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">PDF</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">title</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.pdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;">\xA0</span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,30),e=[o];function t(c,r,F,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};