import{_ as t,o as s,c as a,V as d}from"./chunks/framework.fcd1db8a.js";const F=JSON.parse('{"title":"接收消息","description":"","frontmatter":{},"headers":[],"relativePath":"develop/basic/recvMessage.md","filePath":"develop/basic/recvMessage.md","lastUpdated":1705484369000}'),e={name:"develop/basic/recvMessage.md"},n=d(`<h1 id="接收消息" tabindex="-1">接收消息 <a class="header-anchor" href="#接收消息" aria-label="Permalink to &quot;接收消息&quot;">​</a></h1><p>在上一节 <a href="/develop/basic/messageHandler.html">注册消息响应</a> 中讲述了如何注册一个接收指定消息的函数，当接收到消息时，函数被执行时，参数 <code>data: Message</code> 就是接收到的消息的内容。</p><p><code>Message</code> 对象是接收到消息之后预处理化的一个消息数据对象。内含这则消息相关的各项属性，以及针对这则消息的一些操作API。<br> 该对象主要应用在功能函数和自定义检查中。建议在开发时引入 Message 对象并注解在对应地方。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Message</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">my_verify</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on_message</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">verify</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">my_verify</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Message</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">recv:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> data</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span></code></pre></div><h2 id="message-对象" tabindex="-1">Message 对象 <a class="header-anchor" href="#message-对象" aria-label="Permalink to &quot;Message 对象&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性</th><th>类型</th><th>释义</th></tr></thead><tbody><tr><td>instance</td><td>BotAdapterProtocol</td><td>bot 实例</td></tr><tr><td>message</td><td>dict</td><td>原始消息字典</td></tr><tr><td>message_id</td><td>str</td><td>消息 ID</td></tr><tr><td>message_type</td><td>str</td><td>消息类型（适用于群聊适配器）</td></tr><tr><td>face</td><td>List[str]</td><td>消息内表情 ID 列表</td></tr><tr><td>image</td><td>List[str]</td><td>消息内图片 URL 列表</td></tr><tr><td>text</td><td>str</td><td>消息文本（中间件处理）</td></tr><tr><td>text_digits</td><td>str</td><td>消息文本（中间件处理、中文转数字处理）</td></tr><tr><td>text_unsigned</td><td>str</td><td>消息文本（去字符处理）</td></tr><tr><td>text_original</td><td>str</td><td>消息文本（原始文本）</td></tr><tr><td>text_words</td><td>List[str]</td><td>消息文本分词</td></tr><tr><td>at_target</td><td>List[str]</td><td>消息内 @ 的对象列表</td></tr><tr><td>is_at</td><td>bool</td><td>是否 @ 机器人</td></tr><tr><td>is_admin</td><td>bool</td><td>是否为子频道管理员</td></tr><tr><td>is_direct</td><td>bool</td><td>是否是私信消息</td></tr><tr><td>user_id</td><td>str</td><td>用户 ID</td></tr><tr><td>guild_id</td><td>str</td><td>频道 ID</td></tr><tr><td>src_guild_id</td><td>str</td><td>来源频道 ID，私信下有效</td></tr><tr><td>channel_id</td><td>str</td><td>子频道 ID</td></tr><tr><td>nickname</td><td>str</td><td>用户昵称</td></tr><tr><td>avatar</td><td>str</td><td>用户头像的 URL</td></tr><tr><td>joined_at</td><td>ISO8601 timestamp</td><td>用户加入频道的时间</td></tr><tr><td>verify</td><td><a href="/develop/basic/messageHandler.html#自定义检查">Verify 对象</a></td><td>自定义检查的结果</td></tr><tr><td>time</td><td>int</td><td>消息时间</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>参数</th><th>释义</th><th>异步</th></tr></thead><tbody><tr><td>send</td><td>reply</td><td>发送一条消息</td><td>是</td></tr><tr><td>wait</td><td>reply,force,max_time,data_filter</td><td>等待用户消息</td><td>是</td></tr><tr><td>wait_channel</td><td>reply,force,clean,max_time,data_filter</td><td>等待子频道消息</td><td>是</td></tr><tr><td>recall</td><td></td><td>撤回消息</td><td>是</td></tr></tbody></table><p>接下来，使用 Message 对象提供的属性完成业务逻辑，并<a href="/develop/basic/sendMessage.html">发送消息</a>。</p>`,10),r=[n];function l(o,p,c,i,y,h){return s(),a("div",null,r)}const _=t(e,[["render",l]]);export{F as __pageData,_ as default};
