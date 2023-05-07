import{_ as s,c as n,o as a,d as e}from"./app.a9fa4358.js";const y=JSON.parse('{"title":"BEM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"learn/CSS/\u54A8\u8BE2\u62D3\u5C55/BEM.md"}'),o={name:"learn/CSS/\u54A8\u8BE2\u62D3\u5C55/BEM.md"},t=e(`<h1 id="bem" tabindex="-1">BEM <a class="header-anchor" href="#bem" aria-hidden="true">#</a></h1><p>\u5B98\u7F51\u6307\u8DEF\uFF1A<a href="https://getbem.com/introduction/" target="_blank" rel="noreferrer">BEM</a> \u3002</p><p>CSS \u547D\u540D\u5341\u5206\u91CD\u8981\uFF0C\u53E6\u5916\u5982\u6709\u91CD\u540D\u7684\u60C5\u51B5\uFF0C\u5C31\u4F1A\u53D1\u751F\u6837\u5F0F\u8986\u76D6\uFF0C\u5BFC\u81F4\u6700\u7EC8\u6548\u679C\u663E\u793A\u9519\u4E71\u3002</p><p>\u5BF9\u4E8E\u547D\u540D\uFF0C\u5E02\u9762\u4E0A\u6709\u4E00\u4E9B\u6C11\u95F4\u7EC4\u7EC7\u6307\u5B9A\u7684\u547D\u540D\u89C4\u5219\uFF0C\u4F8B\u5982 BEM\uFF0CSMACSS \u548C OOCSS\u3002</p><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>BEM \u547D\u540D\u89C4\u5219\u6BD4\u8F83\u5E38\u89C1\uFF0C\u5176\u4E2D\uFF1A</p><ul><li>B \u4EE3\u8868 <code>Block</code> \u5757\uFF0C\u5982 <code>header</code>, <code>container</code>, <code>menu</code>, <code>checkbox</code>, <code>input</code>, <code>nav</code> \u7B49 \u3002</li><li>E \u4EE3\u8868 <code>Element</code> \u5143\u7D20\uFF0C\u662F\u5757\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u6CA1\u6709\u72EC\u7ACB\u7684\u610F\u4E49\uFF0C\u5728\u8BED\u4E49\u4E0A\u4E0E\u5176\u5757\u7ED1\u5B9A\u5728\u4E00\u8D77\u3002\u5982 <code>header title</code> , <code>menu content</code> , <code>nav item</code> \u7B49\u3002</li><li>M \u4EE3\u8868 <code>Modifer</code> \u9650\u5B9A\uFF0C\u662F\u5757\u6216\u5143\u7D20\u4E0A\u7684\u6807\u5FD7\u3002\u7528\u5B83\u4EEC\u6765\u6539\u53D8\u5916\u8868\u6216\u884C\u4E3A\u3002\u5982 <code>nav item active</code> , <code>input focus</code> \u7B49\u3002</li></ul><p>\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\u6709\u4E00\u4E2A\u6B63\u5E38\u7684\u6309\u94AE\uFF0C\u5728\u4E0D\u540C\u7684\u60C5\u51B5\u4E0B\u6709\u4E24\u4E2A\u72B6\u6001\u3002\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528 <code>BEM</code> \u901A\u8FC7\u7C7B\u9009\u62E9\u5668\u5BF9\u5757\u8FDB\u884C\u6837\u5F0F\u5316\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u6211\u4EEC\u60F3\u8981\u7684\u6807\u7B7E( <code>button</code> \u3001<code>a</code> \u751A\u81F3 <code>div</code> )\u6765\u5B9E\u73B0\u5B83\u4EEC\u3002\u547D\u540D\u89C4\u5219\u544A\u8BC9\u6211\u4EEC\u4F7F\u7528 <strong>\u5757-\u5143\u7D20-\u6807\u5FD7</strong> \u7684\u8BED\u6CD5\u3002</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	Normal button</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button button-state_success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	Success button</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button button-state_danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	Danger button</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u6837\u5F0F\u8BBE\u7F6E\u65B9\u9762\u53EF\u4EE5\u4F7F\u7528 <code>BEM</code> \u65B9\u6CD5\uFF0C\u5176\u4E2D\uFF0CE \u548C M \u53EF\u4EE5\u7701\u7565\u3002\u901A\u8FC7\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u9AD8\u6548\u8BBE\u7F6E\u7C7B\u540D\u4E0E\u65B9\u4FBF\u540E\u7EED\u7684\u7EF4\u62A4\u3002</p>`,11),l=[t];function c(p,r,d,i,D,F){return a(),n("div",null,l)}const h=s(o,[["render",c]]);export{y as __pageData,h as default};
