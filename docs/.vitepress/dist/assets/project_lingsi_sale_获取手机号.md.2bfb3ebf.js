import{_ as e,c as t,o as s,d as a}from"./app.5698d6bb.js";const F=JSON.parse('{"title":"\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u4EE4\u724C","slug":"\u83B7\u53D6\u4EE4\u724C","link":"#\u83B7\u53D6\u4EE4\u724C","children":[]},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B","link":"#\u4EE3\u7801\u793A\u4F8B","children":[]},{"level":2,"title":"\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E","slug":"\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E","link":"#\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E","children":[]},{"level":2,"title":"bug","slug":"bug","link":"#bug","children":[]},{"level":2,"title":"\u62D3\u5C55\uFF1A\u83B7\u53D6\u624B\u673A\u53F7","slug":"\u62D3\u5C55-\u83B7\u53D6\u624B\u673A\u53F7","link":"#\u62D3\u5C55-\u83B7\u53D6\u624B\u673A\u53F7","children":[{"level":3,"title":"\u529F\u80FD\u63CF\u8FF0","slug":"\u529F\u80FD\u63CF\u8FF0","link":"#\u529F\u80FD\u63CF\u8FF0","children":[]},{"level":3,"title":"\u8C03\u7528\u65B9\u5F0F","slug":"\u8C03\u7528\u65B9\u5F0F","link":"#\u8C03\u7528\u65B9\u5F0F","children":[]},{"level":3,"title":"\u8BF7\u6C42\u53C2\u6570","slug":"\u8BF7\u6C42\u53C2\u6570","link":"#\u8BF7\u6C42\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u53C2\u6570","slug":"\u8FD4\u56DE\u53C2\u6570","link":"#\u8FD4\u56DE\u53C2\u6570","children":[]}]}],"relativePath":"project/lingsi/sale/\u83B7\u53D6\u624B\u673A\u53F7.md"}'),n={name:"project/lingsi/sale/\u83B7\u53D6\u624B\u673A\u53F7.md"},l=a(`<h1 id="\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55" tabindex="-1">\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55 <a class="header-anchor" href="#\u5FAE\u4FE1\u5FEB\u6377\u767B\u5F55" aria-hidden="true">#</a></h1><h2 id="\u83B7\u53D6\u4EE4\u724C" tabindex="-1">\u83B7\u53D6\u4EE4\u724C <a class="header-anchor" href="#\u83B7\u53D6\u4EE4\u724C" aria-hidden="true">#</a></h2><p>\u5C06 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/button.html" target="_blank" rel="noreferrer">button</a> \u7EC4\u4EF6 <code>open-type</code> \u7684\u503C\u8BBE\u7F6E\u4E3A <code>getPhoneNumber</code>\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u5E76\u540C\u610F\u4E4B\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E8B\u4EF6\u56DE\u8C03\u5982 <code>bindgetphonenumber</code> \u83B7\u53D6\u5230\u52A8\u6001\u4EE4\u724C<code>code</code>\uFF0C\u7136\u540E\u628A<code>code</code>\u4F20\u5230\u5F00\u53D1\u8005\u540E\u53F0\uFF0C\u5E76\u5728\u5F00\u53D1\u8005\u540E\u53F0\u8C03\u7528\u5FAE\u4FE1\u540E\u53F0\u63D0\u4F9B\u7684 <a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html" target="_blank" rel="noreferrer">phonenumber.getPhoneNumber</a> \u63A5\u53E3\uFF0C\u901A\u8FC7<code>code</code>\u6765\u6362\u53D6\u7528\u6237\u624B\u673A\u53F7\u3002\u6BCF\u4E2A<code>code</code>\u6709\u6548\u671F\u4E3A5\u5206\u949F\uFF0C\u4E14\u53EA\u80FD\u6D88\u8D39\u4E00\u6B21\u3002</p><blockquote><p>\u6CE8\uFF1A<code>getPhoneNumber</code> \u8FD4\u56DE\u7684 <code>code</code> \u4E0E <code>wx.login</code> \u8FD4\u56DE\u7684 <code>code</code> \u4F5C\u7528\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4E0D\u80FD\u6DF7\u7528\u3002</p></blockquote><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">open-type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getPhoneNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">bindgetphonenumber</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getPhoneNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Page({</span></span>
<span class="line"><span style="color:#A6ACCD;">  getPhoneNumber (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(e.detail.code)</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u8C03\u7528\u767B\u5F55\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u6700\u4F4E\u7248\u672C</th></tr></thead><tbody><tr><td style="text-align:left;">code</td><td style="text-align:left;">String</td><td style="text-align:left;">\u52A8\u6001\u4EE4\u724C\u3002\u53EF\u901A\u8FC7\u52A8\u6001\u4EE4\u724C\u6362\u53D6\u7528\u6237\u624B\u673A\u53F7\u3002\u4F7F\u7528\u65B9\u6CD5\u8BE6\u60C5 <a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html" target="_blank" rel="noreferrer">phonenumber.getPhoneNumber</a> \u63A5\u53E3</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="bug" tabindex="-1">bug <a class="header-anchor" href="#bug" aria-hidden="true">#</a></h2><p>\u51FA\u73B0 <code>getPhoneNumber:fail:access denied</code> \u3002</p><p>\u56E0\u4E3A\u8BE5\u8D26\u53F7\u672A\u8BA4\u8BC1\uFF0C\u5B98\u65B9\u6587\u6863\u660E\u786E\u8868\u660E\u5C0F\u7A0B\u5E8F\u8981\u5B8C\u6210\u8BA4\u8BC1\u624D\u53EF\u4F7F\u7528\u3002</p><h2 id="\u62D3\u5C55-\u83B7\u53D6\u624B\u673A\u53F7" tabindex="-1">\u62D3\u5C55\uFF1A\u83B7\u53D6\u624B\u673A\u53F7 <a class="header-anchor" href="#\u62D3\u5C55-\u83B7\u53D6\u624B\u673A\u53F7" aria-hidden="true">#</a></h2><h3 id="\u529F\u80FD\u63CF\u8FF0" tabindex="-1">\u529F\u80FD\u63CF\u8FF0 <a class="header-anchor" href="#\u529F\u80FD\u63CF\u8FF0" aria-hidden="true">#</a></h3><p>\u8BE5\u63A5\u53E3\u7528\u4E8E\u5C06code\u6362\u53D6\u7528\u6237\u624B\u673A\u53F7\u3002 \u8BF4\u660E\uFF0C\u6BCF\u4E2Acode\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21\uFF0Ccode\u7684\u6709\u6548\u671F\u4E3A5min\u3002</p><h3 id="\u8C03\u7528\u65B9\u5F0F" tabindex="-1">\u8C03\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u8C03\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h3><h4 id="https-\u8C03\u7528" tabindex="-1">HTTPS \u8C03\u7528 <a class="header-anchor" href="#https-\u8C03\u7528" aria-hidden="true">#</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">POST https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=ACCESS_TOKEN </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u7B2C\u4E09\u65B9\u8C03\u7528" tabindex="-1">\u7B2C\u4E09\u65B9\u8C03\u7528 <a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u8C03\u7528" aria-hidden="true">#</a></h4><ul><li>\u8C03\u7528\u65B9\u5F0F\u4EE5\u53CA\u51FA\u5165\u53C2\u548CHTTPS\u76F8\u540C\uFF0C\u4EC5\u662F\u8C03\u7528\u7684token\u4E0D\u540C</li><li>\u8BE5\u63A5\u53E3\u6240\u5C5E\u7684\u6743\u9650\u96C6id\u4E3A\uFF1A18</li><li>\u670D\u52A1\u5546\u83B7\u5F97\u5176\u4E2D\u4E4B\u4E00\u6743\u9650\u96C6\u6388\u6743\u540E\uFF0C\u53EF\u901A\u8FC7\u4F7F\u7528<a href="https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/ThirdParty/token/api_authorizer_token.html" target="_blank" rel="noreferrer">authorizer_access_token</a>\u4EE3\u5546\u5BB6\u8FDB\u884C\u8C03\u7528</li></ul><h3 id="\u8BF7\u6C42\u53C2\u6570" tabindex="-1">\u8BF7\u6C42\u53C2\u6570 <a class="header-anchor" href="#\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u5FC5\u586B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">access_token</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u63A5\u53E3\u8C03\u7528\u51ED\u8BC1\uFF0C\u8BE5\u53C2\u6570\u4E3A URL \u53C2\u6570\uFF0C\u975E Body \u53C2\u6570\u3002\u4F7F\u7528<a href="https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html" target="_blank" rel="noreferrer">access_token</a>\u6216\u8005<a href="https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/ticket-token/getAuthorizerAccessToken.html" target="_blank" rel="noreferrer">authorizer_access_token</a></td></tr><tr><td style="text-align:left;">code</td><td style="text-align:left;">string</td><td style="text-align:left;">\u662F</td><td style="text-align:left;"><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html" target="_blank" rel="noreferrer">\u624B\u673A\u53F7\u83B7\u53D6\u51ED\u8BC1</a></td></tr></tbody></table><h3 id="\u8FD4\u56DE\u53C2\u6570" tabindex="-1">\u8FD4\u56DE\u53C2\u6570 <a class="header-anchor" href="#\u8FD4\u56DE\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">errcode</td><td style="text-align:left;">number</td><td style="text-align:left;">\u9519\u8BEF\u7801</td></tr><tr><td style="text-align:left;">errmsg</td><td style="text-align:left;">string</td><td style="text-align:left;">\u9519\u8BEF\u4FE1\u606F</td></tr><tr><td style="text-align:left;">phone_info</td><td style="text-align:left;">object</td><td style="text-align:left;">\u7528\u6237\u624B\u673A\u53F7\u4FE1\u606F</td></tr><tr><td style="text-align:left;">\u5C5E\u6027\u7C7B\u578B\u8BF4\u660EphoneNumberstring\u7528\u6237\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\uFF08\u56FD\u5916\u624B\u673A\u53F7\u4F1A\u6709\u533A\u53F7\uFF09purePhoneNumberstring\u6CA1\u6709\u533A\u53F7\u7684\u624B\u673A\u53F7countryCodestring\u533A\u53F7watermarkobject\u6570\u636E\u6C34\u5370\u5C5E\u6027\u7C7B\u578B\u8BF4\u660Etimestampnumber\u7528\u6237\u83B7\u53D6\u624B\u673A\u53F7\u64CD\u4F5C\u7684\u65F6\u95F4\u6233appidstring\u5C0F\u7A0B\u5E8Fappid</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="\u8BF7\u6C42\u6570\u636E\u793A\u4F8B" tabindex="-1">\u8BF7\u6C42\u6570\u636E\u793A\u4F8B <a class="header-anchor" href="#\u8BF7\u6C42\u6570\u636E\u793A\u4F8B" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">e31968a7f94cc5ee25fafc2aef2773f0bb8c3937b22520eb8ee345274d00c144</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h4 id="\u8FD4\u56DE\u6570\u636E\u793A\u4F8B" tabindex="-1">\u8FD4\u56DE\u6570\u636E\u793A\u4F8B <a class="header-anchor" href="#\u8FD4\u56DE\u6570\u636E\u793A\u4F8B" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">errcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">errmsg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">phone_info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">phoneNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">purePhoneNumber</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxxxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">countryCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">86</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">watermark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">timestamp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1637744274</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">appid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxxx</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h4 id="\u9519\u8BEF\u7801" tabindex="-1">\u9519\u8BEF\u7801 <a class="header-anchor" href="#\u9519\u8BEF\u7801" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">\u9519\u8BEF\u7801</th><th style="text-align:left;">\u9519\u8BEF\u7801\u53D6\u503C</th><th style="text-align:left;">\u89E3\u51B3\u65B9\u6848</th></tr></thead><tbody><tr><td style="text-align:left;">-1</td><td style="text-align:left;">system error</td><td style="text-align:left;">\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u6B64\u65F6\u8BF7\u5F00\u53D1\u8005\u7A0D\u5019\u518D\u8BD5</td></tr><tr><td style="text-align:left;">40029</td><td style="text-align:left;">code \u65E0\u6548</td><td style="text-align:left;">js_code\u65E0\u6548</td></tr></tbody></table>`,29),o=[l];function p(r,c,i,d,h,y){return s(),t("div",null,o)}const u=e(n,[["render",p]]);export{F as __pageData,u as default};
