import{_ as s,o as a,c as n,V as l}from"./chunks/framework.fcd1db8a.js";const o="/assets/hello.3b081946.png",p="/assets/hello2.56460902.png",h=JSON.parse('{"title":"开始使用","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/index.md","filePath":"develop/basic/index.md","lastUpdated":1705484369000}'),t={name:"develop/basic/index.md"},e=l(`<h1 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h1><p>在开始之前，我们希望你知道 AmiyaBot 是一款针对 QQ 频道机器人的框架。如果你想使用第三方机器人服务（如 mirai-api-http 或 go-cqhttp），可通过更改实例的适配器使用。<br> 接下来的文档将围绕 QQ 频道机器人展开。<strong>如果需要 <a href="/develop/adapters/">更改适配器</a> 请在安装依赖后阅读适配器文档</strong>。</p><p>我们建议你先在 <a href="https://bot.q.qq.com/wiki" target="_blank" rel="noreferrer">QQ开放平台</a> 了解 QQ 频道机器人的运营规则，这非常重要，因为在本文档里，关于这部分的内容将会非常少。如果你并不了解 QQ 频道机器人，后续的文档可能会对你造成疑惑。</p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><p><img src="https://img.shields.io/pypi/v/amiyabot" alt="amiyabot"></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">amiyabot</span></span></code></pre></div><h2 id="创建你的第一个-bot" tabindex="-1">创建你的第一个 Bot <a class="header-anchor" href="#创建你的第一个-bot" aria-label="Permalink to &quot;创建你的第一个 Bot&quot;">​</a></h2><ol><li>在 <a href="https://q.qq.com/" target="_blank" rel="noreferrer">QQ开放平台</a> 申请并创建你的 QQ 机器人。创建沙箱频道，并把你的机器人添加进频道里。（此处不作详细说明）</li><li>使用机器人的 <code>appid</code> 和 <code>token</code> 创建一个 AmiyaBot 实例</li></ol><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> asyncio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> AmiyaBot</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Chain</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">appid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">token</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">keywords</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Chain</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;hello, </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">nickname</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">asyncio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">())</span></span></code></pre></div><ol start="3"><li>运行代码，在频道里输入 <code>@机器人 hello</code>，你预期会看到如下输出。</li></ol><img style="width:220px;" src="`+o+`" alt="image"><p>那么恭喜你，你的 QQ 机器人已经可以正常运作了。</p><blockquote><p><em>「这是个人迈出的一小步，但却是人类迈出的一大步。」—— 阿姆斯特朗</em></p></blockquote><h2 id="创建私域机器人" tabindex="-1">创建私域机器人 <a class="header-anchor" href="#创建私域机器人" aria-label="Permalink to &quot;创建私域机器人&quot;">​</a></h2><p>如果你在平台创建的是<strong>私域机器人</strong>，在 <code>AmiyaBot</code> 的参数里设置 <code>private=True</code> 来开启私域模式，私域机器人支持接收非 <code>@机器人</code> 的消息，你可以使机器人以更灵活的方式触发功能。<br> 但我们不希望机器人的唤起出现非预期的效果，所以建议在私域模式下，<strong>添加前缀触发词</strong>来唤起机器人。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 配置 private=True 让实例改为私域</span></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">appid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">token</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">private</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加前缀触发词（非必须）</span></span>
<span class="line"><span style="color:#BABED8;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_prefix_keywords</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">amiya</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">amy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span></code></pre></div><p>使用前缀触发词唤醒机器人</p><img style="width:220px;" src="`+p+`" alt="image"><h2 id="沙箱环境" tabindex="-1">沙箱环境 <a class="header-anchor" href="#沙箱环境" aria-label="Permalink to &quot;沙箱环境&quot;">​</a></h2><p>使用 <code>QQGuildSandboxBotInstance</code> 适配器将 API 调用更改为沙箱环境。沙箱环境只会收到测试频道的事件，且调用 openapi 仅能操作测试频道。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">adapters</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">tencent</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">qqGuild </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> QQGuildSandboxBotInstance</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">...</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#BABED8;font-style:italic;">adapter</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">QQGuildSandboxBotInstance</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,21),c=[e];function r(y,i,F,D,d,A){return a(),n("div",null,c)}const m=s(t,[["render",r]]);export{h as __pageData,m as default};
