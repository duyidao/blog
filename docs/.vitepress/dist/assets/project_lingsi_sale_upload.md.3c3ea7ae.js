import{_ as s,c as n,o as a,d as l}from"./app.6e7d5abf.js";const i=JSON.parse('{"title":"\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u5C01\u88C5","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"\u56FE","7":"\u7247","8":"\u4E0A","9":"\u4F20","10":"\u7EC4","11":"\u4EF6","12":"\u5C01","13":"\u88C5"},"headers":[{"level":2,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790","link":"#\u601D\u8DEF\u5206\u6790","children":[]},{"level":2,"title":"\u603B\u4F53\u4EE3\u7801","slug":"\u603B\u4F53\u4EE3\u7801","link":"#\u603B\u4F53\u4EE3\u7801","children":[]},{"level":2,"title":"\u77E5\u8BC6\u62D3\u5C55","slug":"\u77E5\u8BC6\u62D3\u5C55","link":"#\u77E5\u8BC6\u62D3\u5C55","children":[]}],"relativePath":"project/lingsi/sale/upload.md"}'),p={name:"project/lingsi/sale/upload.md"},o=l(`<h1 id="\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u5C01\u88C5" tabindex="-1">\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u5C01\u88C5 <a class="header-anchor" href="#\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u5C01\u88C5" aria-hidden="true">#</a></h1><p>\u57FA\u4E8E <code>uView</code> \u7684 <code>u-upload</code> \u7EC4\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5B9E\u73B0\u53EF\u590D\u7528\u7684\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h2 id="\u601D\u8DEF\u5206\u6790" tabindex="-1">\u601D\u8DEF\u5206\u6790 <a class="header-anchor" href="#\u601D\u8DEF\u5206\u6790" aria-hidden="true">#</a></h2><ul><li>\u7528\u6237\u9009\u62E9\u56FE\u7247\u540E\u89E6\u53D1\u7EC4\u4EF6\u7684 afterRead \u4E8B\u4EF6</li><li>\u8C03\u7528 <a href="https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile" target="_blank" rel="noreferrer">uni.uploadfile</a> \u4E8B\u4EF6\u4E0A\u4F20\u56FE\u7247</li><li>\u4E0A\u4F20\u6210\u529F\u4FDD\u5B58\u5230\u6570\u7EC4\u5185\uFF0C\u4E0A\u4F20\u5931\u8D25\u5F39\u51FA\u63D0\u793A</li><li>\u901A\u8FC7\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u53C2\u6570\u5224\u65AD\u662F\u5426\u8981\u663E\u793A\u5220\u9664\u6309\u94AE\uFF08\u4E00\u822C\u7528\u4E8E\u8BE6\u60C5\u548C\u7F16\u8F91\u529F\u80FD\u590D\u7528\u7684\u573A\u666F\uFF09</li></ul><h2 id="\u603B\u4F53\u4EE3\u7801" tabindex="-1">\u603B\u4F53\u4EE3\u7801 <a class="header-anchor" href="#\u603B\u4F53\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">u-toast</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uToast</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">u-upload</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">fileList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">afterRead</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">successFn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">delete</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">removeFn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">deletable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">multiple</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">maxCount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">u-upload</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">BASE_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">IMG_URL</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				action</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BASE_URL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/public/save</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				fileList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				dataList</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				headers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">X-Access-Token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getStorageSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#676E95;">// \u6DFB\u52A0\u56FE\u7247 + \u6210\u529F\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">successFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">					status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploading</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">					message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0A\u4F20\u4E2D</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">uploadFilePromise</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">file</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$set</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IMG_URL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0A\u4F20\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$set</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dataList</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						status</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E0A\u4F20\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">				</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploadSuccessFn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dataList</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#676E95;">// \u4E0A\u4F20\u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">uploadFilePromise</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uploadFile</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">						url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">action</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						header</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">X-Access-Token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getStorageSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">								</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">								</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">							</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">						</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">			</span><span style="color:#676E95;">// \u5220\u9664\u6210\u529F\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">removeFn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dataList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uploadSuccessFn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dataList</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u77E5\u8BC6\u62D3\u5C55" tabindex="-1">\u77E5\u8BC6\u62D3\u5C55 <a class="header-anchor" href="#\u77E5\u8BC6\u62D3\u5C55" aria-hidden="true">#</a></h2><p>\u5728\u5C0F\u7A0B\u5E8F\u548Capp\u4E2D\uFF0C\u65E0\u6CD5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6536\u96C6 <code>formData </code>\u5F62\u5F0F\u7684\u6570\u636E\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;">\xA0formData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#82AAFF;">FormData</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> file</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formData</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F7F\u7528\uFF0C\u4F1A\u62A5\u9519 <code>FormData is not defined.</code> \u3002\u6B64\u65F6\u53EF\u4EE5\u901A\u8FC7 <code>uView</code> \u63D0\u4F9B\u7684 <code>upload</code> \u7EC4\u4EF6\u914D\u5408 <code>uni.uploadFile</code> \u65B9\u6CD5\u83B7\u53D6 <code>formData</code> \u5F62\u5F0F\u7684\u6570\u636E\u3002 \u53C2\u6570\u914D\u7F6E\u5982\u4E0B\uFF1A</p><ol><li><code>url</code>\uFF1A\u63A5\u53E3\u5730\u5740</li><li><code>filePath</code>\uFF1A\u83B7\u53D6\u7684\u6587\u4EF6</li><li><code>name</code>\uFF1A\u540E\u7AEF\u8981\u6C42\u7684\u53C2\u6570\u540D\u79F0</li><li><code>formData</code>\uFF1A\u540E\u7AEF\u8FD8\u8981\u5176\u4ED6\u7684\u53C2\u6570\uFF0C\u5199\u5728\u8FD9\u91CC</li><li><code>header</code>\uFF1A\u8BF7\u6C42\u5934\uFF0C\u4E00\u822C\u8BBE\u7F6E <code>token</code> \u3002</li></ol><p>\u603B\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uploadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://192.168.2.21:7001/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">// \u8FD9\u91CC\u6539\u4E3A\u81EA\u5DF1\u7684\u63A5\u53E3\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">filePath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">// \u83B7\u53D6\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">// \u540E\u7AEF\u8981\u6C42\u7684\u53C2\u6570\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">formData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#676E95;">// \u5982\u679C\u540E\u7AEF\u8FD8\u8981\u5176\u4ED6\u7684\u53C2\u6570\uFF0C\u5199\u5728\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6210\u529F\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;">\xA0</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;">\xA0</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,13),t=[o];function e(c,F,r,D,y,A){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
