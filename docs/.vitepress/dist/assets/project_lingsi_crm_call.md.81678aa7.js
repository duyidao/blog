import{_ as t,o as s,c as a,S as n}from"./chunks/framework.e036d9b7.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"project/lingsi/crm/call.md","filePath":"project/lingsi/crm/call.md","lastUpdated":null}'),e={name:"project/lingsi/crm/call.md"},l=n(`<p>用户点击电话或者拨打图标后，进入手机拨号页面。 微信小程序提供了 <code>wx.makePhoneCall</code>方法，参数如下所示：</p><table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>phoneNumber</td><td>String</td><td>是</td><td>需要拨打的电话号码</td></tr><tr><td>success</td><td>Function</td><td>否</td><td>接口调用成功的回调</td></tr><tr><td>fail</td><td>Function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>Function</td><td>否</td><td>接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p>通过给属性 <code>phoneNumber</code>赋值手机号即可。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 拨打电话</span></span>
<span class="line"><span style="color:#82AAFF;">dial</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makePhoneCall</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    phoneNumber</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phoneNumber</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4),o=[l];function p(c,r,d,i,F,_){return s(),a("div",null,o)}const D=t(e,[["render",p]]);export{h as __pageData,D as default};