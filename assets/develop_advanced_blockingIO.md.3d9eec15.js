import{_ as a,o as s,c as t,V as n}from"./chunks/framework.fcd1db8a.js";const _=JSON.parse('{"title":"处理 IO 阻塞的操作","description":"","frontmatter":{},"headers":[],"relativePath":"develop/advanced/blockingIO.md","filePath":"develop/advanced/blockingIO.md","lastUpdated":1705484369000}'),o={name:"develop/advanced/blockingIO.md"},l=n(`<h1 id="处理-io-阻塞的操作" tabindex="-1">处理 IO 阻塞的操作 <a class="header-anchor" href="#处理-io-阻塞的操作" aria-label="Permalink to &quot;处理 IO 阻塞的操作&quot;">​</a></h1><p>AmiyaBot 为异步程序，一般情况下应该遵循异步编程来进行开发。但在使用一些标准或第三方库时，不能保证其方法是异步的，使用 IO 阻塞的方法容易造成线程阻塞，影响业务逻辑。</p><h2 id="run-in-thread-pool" tabindex="-1">run_in_thread_pool <a class="header-anchor" href="#run-in-thread-pool" aria-label="Permalink to &quot;run_in_thread_pool&quot;">​</a></h2><p>AmiyaBot <code>util</code> 库里提供的利用线程池将同步方法转变为异步方法执行的函数。</p><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>block_func</td><td>Callable</td><td>IO 阻塞的方法</td><td></td></tr><tr><td>*args</td><td></td><td>原方法参数</td><td></td></tr><tr><td>**kwargs</td><td></td><td>原方法字典参数</td><td></td></tr></tbody></table><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">util </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> run_in_thread_pool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># IO 阻塞的方法</span></span>
<span class="line"><span style="color:#82AAFF;">block_io_method</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">arg1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> arg2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">arg3</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 转变为异步执行</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">run_in_thread_pool</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">block_io_method</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> arg1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> arg2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">arg3</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,6),e=[l];function p(r,c,d,i,F,y){return s(),t("div",null,e)}const h=a(o,[["render",p]]);export{_ as __pageData,h as default};
