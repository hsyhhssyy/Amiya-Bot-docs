import{d as a}from"./chunks/download.45651aad.js";import{o,c as e,C as s,J as n,V as l}from"./chunks/framework.fcd1db8a.js";import"./chunks/index.c89df954.js";const p="/assets/running.f2502c35.png",t=l('<h1 id="开始部署" tabindex="-1">开始部署 <a class="header-anchor" href="#开始部署" aria-label="Permalink to &quot;开始部署&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">操作系统支持<br></p><ul><li>Windows 10、Windows Subsystem for Linux (WSL) 或 Windows Server 2012 及以上系统</li><li>MacOS 11 (Big Sur) 及以上系统</li><li>Linux 系统官方支持 Debian 11、Ubuntu 18.04 以及 Ubuntu 20.04</li></ul></div><h2 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 Git&quot;">​</a></h2><p>部分插件依赖本地的 Git 服务，必须安装 Git 以确保正常使用。<a href="https://objects.githubusercontent.com/github-production-release-asset-2e65be/23216272/2c9b0433-013d-483f-8c1c-256e88ec86f3?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220922%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220922T110228Z&amp;X-Amz-Expires=300&amp;X-Amz-Signature=366b23a99d9d870adc84fcfa3b7bbbebdff6484446b49a76922930f32a603102&amp;X-Amz-SignedHeaders=host&amp;actor_id=34387011&amp;key_id=0&amp;repo_id=23216272&amp;response-content-disposition=attachment%3B%20filename%3DGit-2.37.3-64-bit.exe&amp;response-content-type=application%2Foctet-stream" target="_blank" rel="noreferrer">点击下载</a> 并安装。或自行到<a href="http://gitforwindows.org/" target="_blank" rel="noreferrer">官网</a>下载合适自己系统的版本。</p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>根据你的设备系统或习惯，你可以选择 <span style="color:red;">可执行文件部署</span> 或 <span style="color:red;"> 代码部署</span> 两种方式<span style="color:red;">其一</span>。</p><p>Windows 系统推荐使用<strong>可执行文件部署</strong>，可执行文件部署是一键部署的模式，部署难度低。</p><h2 id="通过可执行文件部署" tabindex="-1">通过可执行文件部署 <a class="header-anchor" href="#通过可执行文件部署" aria-label="Permalink to &quot;通过可执行文件部署&quot;">​</a></h2>',8),c=s("thead",null,[s("tr",null,[s("th",null,"操作系统"),s("th",null,"下载"),s("th",null,"备注")])],-1),i=s("td",null,"Windows",-1),r=s("td",null,"仅支持 Windows 10、Windows Server 2016 及以上系统",-1),y=s("td",null,"Linux",-1),d=s("td",null,"不支持 Centos，目前在 Ubuntu 20.04 测试可用",-1),h=l('<h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>下载并解压，运行 <code>AmiyaBot-v6.x.x-win32.exe</code>，如下图成功运行后可以进入<a href="/guide/deploy/console/">下一节</a>。</p><p><img src="'+p+`" alt="img.png"></p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>下载并解压，进入 <code>package/dist</code> 目录，运行 <code>AmiyaBot-v6.x.x-linux</code>。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">package/dist/</span></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">777</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./AmiyaBot-v6.x.x-linux</span></span>
<span class="line"><span style="color:#FFCB6B;">./AmiyaBot-v6.x.x-linux</span></span></code></pre></div><h2 id="通过代码部署" tabindex="-1">通过代码部署 <a class="header-anchor" href="#通过代码部署" aria-label="Permalink to &quot;通过代码部署&quot;">​</a></h2><p>请根据操作系统按顺序执行以下命令。</p><div class="warning custom-block"><p class="custom-block-title">注意<br></p><p>推荐使用 Python 3.8 ~ 3.9 运行本项目代码，并参照可执行文件的系统支持选择部署的操作系统。</p></div><ol><li><a href="https://github.com/AmiyaBot/Amiya-Bot" target="_blank" rel="noreferrer">克隆仓库</a></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/AmiyaBot/Amiya-Bot.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Amiya-Bot</span></span></code></pre></div><ol start="2"><li>使用 <a href="https://virtualenv.pypa.io/en/latest/" target="_blank" rel="noreferrer">virtualenv</a> 创建虚拟环境（非必须，或根据个人习惯选择虚拟环境）</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Windows</span></span>
<span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv</span></span>
<span class="line"><span style="color:#FFCB6B;">call</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv/Scripts/activate.bat</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Linux or MacOS</span></span>
<span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">venv/bin/activate</span></span></code></pre></div><ol start="3"><li>安装依赖</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">requirements.txt</span></span></code></pre></div><ol start="4"><li>安装浏览器内核</li></ol><p>默认为 Chromium</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Windows or MacOS</span></span>
<span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">chromium</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Linux</span></span>
<span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--with-deps</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">chromium</span></span></code></pre></div><p>部分系统由于版本过低（如 Windows Server 2012），可能不支持 chromium 内核。推荐修改为火狐（firefox）内核启动。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Windows or MacOS</span></span>
<span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">firefox</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Linux</span></span>
<span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--with-deps</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">firefox</span></span></code></pre></div><details class="details custom-block"><summary>使用火狐内核需要修改入口程序 <code>amiya.py</code>，点击查看代码</summary><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> ...</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> BrowserLaunchConfig  </span><span style="color:#676E95;font-style:italic;"># 导入浏览器启动配置类</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;"># 创建新启动类</span></span>
<span class="line highlighted"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Launcher</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">BrowserLaunchConfig</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line highlighted"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">()</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#BABED8;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">browser_type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 设定浏览器属性</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">run_amiya</span><span style="color:#89DDFF;">(*</span><span style="color:#BABED8;font-style:italic;">tasks</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Coroutine</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">run_amiya</span><span style="color:#89DDFF;">(</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">        bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">launch_browser</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">Launcher</span><span style="color:#89DDFF;">()),</span><span style="color:#82AAFF;">  </span><span style="color:#676E95;font-style:italic;"># 更改为使用新启动类启动浏览器</span></span>
<span class="line"><span style="color:#82AAFF;">        app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">serve</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#82AAFF;">        load_plugins</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#89DDFF;">)</span></span></code></pre></div></details><ol start="5"><li>运行代码</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">amiya.py</span></span></code></pre></div><p>日志显示同可执行文件部署，成功后可以进入下一节。</p>`,25),E=JSON.parse('{"title":"开始部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy/getStarted.md","filePath":"guide/deploy/getStarted.md","lastUpdated":1705484369000}'),D={name:"guide/deploy/getStarted.md"},b=Object.assign(D,{setup(B){return(F,u)=>(o(),e("div",null,[t,s("table",null,[c,s("tbody",null,[s("tr",null,[i,s("td",null,[n(a,{version:"win32"})]),r]),s("tr",null,[y,s("td",null,[n(a,{version:"linux"})]),d])])]),h]))}});export{E as __pageData,b as default};
