import{_ as a,o as s,c as n,V as l}from"./chunks/framework.fcd1db8a.js";const t="/assets/hello3.bbe26c93.png",A=JSON.parse('{"title":"发送消息","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/sendMessage.md","filePath":"develop/basic/sendMessage.md","lastUpdated":1705484369000}'),e={name:"develop/basic/sendMessage.md"},o=l(`<h1 id="发送消息" tabindex="-1">发送消息 <a class="header-anchor" href="#发送消息" aria-label="Permalink to &quot;发送消息&quot;">​</a></h1><p>在消息响应器内返回 Chain 对象，或使用 Message 对象的 send 方法，均可发送消息。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#89DDFF;">)</span></span></code></pre></div><img style="width:220px;" src="`+t+'" alt="image"><h2 id="chain-对象" tabindex="-1">Chain 对象 <a class="header-anchor" href="#chain-对象" aria-label="Permalink to &quot;Chain 对象&quot;">​</a></h2><table><thead><tr><th>参数名</th><th>类型</th><th>释义</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>Message</td><td>Message 对象</td><td>None</td></tr><tr><td>at</td><td>bool</td><td>是否 @ 用户</td><td>True</td></tr><tr><td>reference</td><td>bool</td><td>是否回复用户（引用消息）</td><td>False</td></tr><tr><td>chain_builder</td><td>ChainBuilder</td><td>Chain 辅助构建实例</td><td>ChainBuilder()</td></tr></tbody></table><p><code>Chain</code> 对象是构建你的消息体的工具类。任何需要发送消息的时候，消息都必须由 Chain 类创建。<br> Chain 对象提供丰富的消息构建方式，可以让你发送多彩的文字图片，甚至是html模板。<br></p><p>这是最简单的一条文本消息：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>更多类型请查看左侧导航<strong>消息构建元素</strong>。</p><h2 id="构建消息的方法" tabindex="-1">构建消息的方法 <a class="header-anchor" href="#构建消息的方法" aria-label="Permalink to &quot;构建消息的方法&quot;">​</a></h2><h3 id="普通消息" tabindex="-1">普通消息 <a class="header-anchor" href="#普通消息" aria-label="Permalink to &quot;普通消息&quot;">​</a></h3><p>Chain 对象支持链式语法，用于构建复杂的消息结构。<br> 只需要按顺序以链式使用上述方法，即可拼接出内容丰富的消息。Chain 在最终构建消息的时候，会优化图片与文字的组成，减少消息的请求数量。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">image</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">html</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="合并转发消息" tabindex="-1">合并转发消息 <a class="header-anchor" href="#合并转发消息" aria-label="Permalink to &quot;合并转发消息&quot;">​</a></h3><p>合并转发消息需要使用独立的工具类创建</p><ul><li><a href="/develop/basic/chainBuild/forward.html">发送合并转发消息</a></li></ul><h2 id="空-chain" tabindex="-1">空 Chain <a class="header-anchor" href="#空-chain" aria-label="Permalink to &quot;空 Chain&quot;">​</a></h2><p>实例化 Chain 对象时，不传入 Message 对象构建的。本文称之为 <strong>“空 Chain”</strong>。空 Chain 一般用于预构建消息。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">image</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="使用辅助类扩展构建" tabindex="-1">使用辅助类扩展构建 <a class="header-anchor" href="#使用辅助类扩展构建" aria-label="Permalink to &quot;使用辅助类扩展构建&quot;">​</a></h2><p>Chain 对象在构建消息时，可使用辅助类介入媒体消息或浏览器的构建过程。请移步 <a href="/develop/advanced/chainBuilder.html">进阶指南 - 介入媒体消息的构建过程</a></p>',22),p=[o];function r(c,F,i,d,h,y){return s(),n("div",null,p)}const g=a(e,[["render",r]]);export{A as __pageData,g as default};
