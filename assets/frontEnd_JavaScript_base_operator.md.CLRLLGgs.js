import{_ as a,c as i,a8 as t,o as n}from"./chunks/framework.Bvf0s3xm.js";const c=JSON.parse('{"title":"JavaScript 运算符","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/base/operator.md","filePath":"frontEnd/JavaScript/base/operator.md","lastUpdated":1729520793000}'),l={name:"frontEnd/JavaScript/base/operator.md"};function e(p,s,h,r,d,k){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="javascript-运算符" tabindex="-1">JavaScript 运算符 <a class="header-anchor" href="#javascript-运算符" aria-label="Permalink to &quot;JavaScript 运算符&quot;">​</a></h1><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><p><code>运算符</code>也被称为<code>操作符</code>，是用于实现赋值、比较和执行算数运算等动能的符号。</p><p>JavaScript 中常用的运算符有：</p><ul><li>算数运算符</li><li>递增和递减运算符</li><li>比较运算符</li><li>逻辑运算符</li><li>赋值运算符</li></ul><h2 id="算数运算符" tabindex="-1">算数运算符 <a class="header-anchor" href="#算数运算符" aria-label="Permalink to &quot;算数运算符&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>运算符</strong></th><th><strong>描述</strong></th><th><strong>实例</strong></th></tr></thead><tbody><tr><td>+</td><td>加</td><td>1 + 2 = 3</td></tr><tr><td>-</td><td>减</td><td>3 - 2 = 1</td></tr><tr><td>*</td><td>乘</td><td>2 * 4 = 8</td></tr><tr><td>/</td><td>除</td><td>10 / 2 = 5</td></tr><tr><td>**</td><td>幂运算</td><td>2 ** 4 = 16</td></tr><tr><td>%</td><td>模运算(取余数)</td><td>10 % 3 = 1</td></tr></tbody></table><p><strong>浮点数的进度问题</strong> 浮点数值的最高精度是 17 位小数，但在进行计算时其精确度远远不如整数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0.30000000000000004</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.07</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 7.000000000000001</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>运算符名称</strong></th><th><strong>描述</strong></th><th><strong>实例</strong></th></tr></thead><tbody><tr><td>=</td><td>赋值</td><td>let a = 10</td></tr><tr><td>??=</td><td>空赋值<br>只有当变量的值为 null 或 undefined 时才会对变量进行赋值</td><td>3 - 2 = 1</td></tr><tr><td>+=</td><td>加等于</td><td>a += n 等价于 a = a + n</td></tr><tr><td>-=</td><td>减等于</td><td>a -= n 等价于 a = a - n</td></tr><tr><td>*=</td><td>乘等于</td><td>a *= n 等价于 a = a * n</td></tr><tr><td>/=</td><td>除等于</td><td>a /= n 等价于 a = a / n</td></tr><tr><td>%=</td><td>模等于</td><td>a %= n 等价于 a = a % n</td></tr></tbody></table><h2 id="自增和自减" tabindex="-1">自增和自减 <a class="header-anchor" href="#自增和自减" aria-label="Permalink to &quot;自增和自减&quot;">​</a></h2><h3 id="自增运算符" tabindex="-1">++ 自增运算符 <a class="header-anchor" href="#自增运算符" aria-label="Permalink to &quot;++ 自增运算符&quot;">​</a></h3><ul><li>++ 使用后会使得原来的变量立刻增加 1</li><li>自增分为前自增(++a)和后自增(a++)</li><li>无论是++a 还是 a++都会使原变量立刻增加 1</li><li>不同的是++a 和 a++所返回的值不同 a++ 是自增前的值 旧值 ++a 是自增后的值 新值</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// let b = a++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(&quot;a++ =&quot;, b)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(&quot;++a =&quot;, b)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(a)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//           5 + 7 + 7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// console.log(result)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="自减运算符" tabindex="-1">-- 自减运算符 <a class="header-anchor" href="#自减运算符" aria-label="Permalink to &quot;-- 自减运算符&quot;">​</a></h3><ul><li>使用后会使得原来的变量立刻减小 1</li><li>自减分为前自减(--a)和后自减(a--)</li><li>无论是--a 还是 a--都会使原变量立刻减少 1</li><li>不同的是--a 和 a--的值不同 --a 是新值 a-- 是旧值</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--a1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a2--&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1, a2)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="比较运行符" tabindex="-1">比较运行符 <a class="header-anchor" href="#比较运行符" aria-label="Permalink to &quot;比较运行符&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>运算符名称</strong></th><th><strong>描述</strong></th><th><strong>案列</strong></th><th><strong>结果</strong></th></tr></thead><tbody><tr><td>&lt;</td><td>小于号</td><td>1 &lt; 2</td><td>true</td></tr><tr><td>&gt;</td><td>大于号</td><td>1 &gt; 2</td><td>false</td></tr><tr><td>&lt;=</td><td>小于等于号</td><td>2 &lt;= 2</td><td>true</td></tr><tr><td>&gt;=</td><td>大于等于号</td><td>3 &gt;= 4</td><td>false</td></tr><tr><td>==</td><td>判等号（判断两边值是否相等）</td><td>18 == &#39;18&#39;</td><td>true</td></tr><tr><td>!=</td><td>不等号</td><td>&#39;aaa&#39; != &#39;abc&#39;</td><td>true</td></tr><tr><td>=== !==</td><td>全等（要求值和数据类型都一致）</td><td>18 === &#39;18&#39;</td><td>false</td></tr></tbody></table><h2 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h2><h3 id="逻辑与" tabindex="-1">逻辑与 <code>&amp;&amp;</code> <a class="header-anchor" href="#逻辑与" aria-label="Permalink to &quot;逻辑与 \`&amp;&amp;\`&quot;">​</a></h3><p><strong>一假即假</strong></p><ul><li><p>可以对两个值进行与运算</p></li><li><p>当&amp;&amp;左右都为 true 时，则返回 true，否则返回 false</p></li><li><p>与运算是短路的与，如果第一个值为 false，则不看第二个值</p></li><li><p>与运算是找 false 的，如果找到 false 则直接返回，没有 false 才会返回 true</p></li><li><p>对于非布尔值进行与运算，它会转换为布尔值然后运算</p><p>但是最终会返回原值</p><ul><li>如果第一个值为 false，则直接返回第一个值</li><li>如果第一个值为 true，则返回第二个值</li></ul></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="逻辑或" tabindex="-1">逻辑或 <code>||</code> <a class="header-anchor" href="#逻辑或" aria-label="Permalink to &quot;逻辑或 \`||\`&quot;">​</a></h3><p><strong>一真即真</strong></p><ul><li><p>可以对两个值进行或运算</p></li><li><p>当||左右有 true 时，则返回 true，否则返回 false</p></li><li><p>或运算也是短路的或，如果第一个值为 true，则不看第二个值</p></li><li><p>或运算是找 true，如果找到 true 则直接返回，没有 true 才会返回 false</p></li><li><p>对于非布尔值或运算，它会转换为布尔值然后运算</p><p>但是最终会返回原值</p><ul><li>如果第一个值为 true，则返回第一个</li><li>如果第一个值为 false，则返回第二个</li></ul></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="逻辑非" tabindex="-1">逻辑非 <code>!</code> <a class="header-anchor" href="#逻辑非" aria-label="Permalink to &quot;逻辑非 \`!\`&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="条件运算符" tabindex="-1">条件运算符 <a class="header-anchor" href="#条件运算符" aria-label="Permalink to &quot;条件运算符&quot;">​</a></h2><blockquote><p>条件表达式 ? 表达式 1 : 表达式 2</p></blockquote><div class="tip custom-block"><p class="custom-block-title">执行顺序：</p><p>条件运算符在执行时，会先对条件表达式进行求值判断</p><ul><li>如果结果为 true，则执行表达式 1</li><li>如果结果为 false，则执行表达式 2</li></ul></div><h3 id="运算符的优先级" tabindex="-1">运算符的优先级 <a class="header-anchor" href="#运算符的优先级" aria-label="Permalink to &quot;运算符的优先级&quot;">​</a></h3><p>JavaScript 各种运算符的优先级别（Operator Precedence）是不一样的。优先级高的运算符先执行，优先级低的运算符后执行。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 34</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>圆括号（<code>()</code>）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。使用运算符时，如果遇到拿不准的，可以直接通过()来改变优先级即可。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 54</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,39)]))}const g=a(l,[["render",e]]);export{c as __pageData,g as default};