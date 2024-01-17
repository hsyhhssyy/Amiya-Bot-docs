import{_ as a,o as s,c as t,V as p}from"./chunks/framework.fcd1db8a.js";const h=JSON.parse('{"title":"mirai-api-http","description":"","frontmatter":{},"headers":[],"relativePath":"develop/adapters/mah.md","filePath":"develop/adapters/mah.md","lastUpdated":1705484369000}'),n={name:"develop/adapters/mah.md"},o=p(`<h1 id="mirai-api-http" tabindex="-1">mirai-api-http <a class="header-anchor" href="#mirai-api-http" aria-label="Permalink to &quot;mirai-api-http&quot;">​</a></h1><p><a href="https://docs.mirai.mamoe.net/mirai-api-http/" target="_blank" rel="noreferrer">mirai-api-http</a> 以下简称 <strong>mah</strong>。是一个在全平台下运行，提供 QQ Android 协议支持的高效率机器人库。</p><p>如要使用此适配器，需要 mah 同时开启了 websocket 和 http 服务。AmiyaBot 将通过 mirai_api_http 方法实例化它的适配器。</p><h2 id="连接-mah" tabindex="-1">连接 mah <a class="header-anchor" href="#连接-mah" aria-label="Permalink to &quot;连接 mah&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>host</td><td>str</td><td>mah 服务的 ip 地址</td><td></td></tr><tr><td>ws_port</td><td>int</td><td>mah 服务的 websocket 端口</td><td></td></tr><tr><td>http_port</td><td>int</td><td>mah 服务的 http 端口</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">adapters</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">mirai </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> mirai_api_http</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">qq </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">       </span><span style="color:#676E95;font-style:italic;"># 机器人的 QQ 号</span></span>
<span class="line"><span style="color:#BABED8;">auth_key </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># mah 的 verifyKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">adapter_service </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">mirai_api_http</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8060</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">appid</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">qq</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">token</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">auth_key</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">adapter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">adapter_service</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,6),l=[o];function e(r,c,i,y,D,F){return s(),t("div",null,l)}const m=a(n,[["render",e]]);export{h as __pageData,m as default};
