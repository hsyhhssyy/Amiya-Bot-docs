import{_ as s,o as a,c as n,V as l}from"./chunks/framework.fcd1db8a.js";const _=JSON.parse('{"title":"使用 Mysql","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy/advanced/mysql.md","filePath":"guide/deploy/advanced/mysql.md","lastUpdated":1705484369000}'),o={name:"guide/deploy/advanced/mysql.md"},p=l(`<h1 id="使用-mysql" tabindex="-1">使用 Mysql <a class="header-anchor" href="#使用-mysql" aria-label="Permalink to &quot;使用 Mysql&quot;">​</a></h1><p>在 <code>config\\database.yaml</code> 中可以配置使用的数据库，如需更改数据库类型为 <code>Mysql</code>，请按下面的配置说明进行配置：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">数据库地址</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">数据库端口</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">user</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">登录用户名</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">数据库密码</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div>`,3),e=[p];function t(c,r,y,D,d,i){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{_ as __pageData,m as default};
