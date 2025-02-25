import{_ as a,c as i,o as n,al as e}from"./chunks/framework.C10EcB-T.js";const u=JSON.parse('{"title":"JavaScript 严格模式","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/面向对象/strict.md","filePath":"frontEnd/JavaScript/面向对象/strict.md","lastUpdated":1729520793000}'),t={name:"frontEnd/JavaScript/面向对象/strict.md"};function p(l,s,r,c,d,o){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="javascript-严格模式" tabindex="-1">JavaScript 严格模式 <a class="header-anchor" href="#javascript-严格模式" aria-label="Permalink to &quot;JavaScript 严格模式&quot;">​</a></h1><p>JavaScript 严格模式（Strict Mode）是一种在 JavaScript 中启用更严格解析和错误处理的模式。它旨在帮助开发者编写更安全、规范、优化和可靠的代码，并避免一些常见的错误。严格模式对于旧版 JavaScript 代码的兼容性考虑较少，因此需要显式地启用它。严格模式可以应用到整个脚本文件或单个函数中。</p><p>启用整个脚本文件的严格模式： 要在整个脚本文件中启用严格模式，只需在脚本的顶部添加一行<code>&quot;use strict&quot;;</code> 即可。例如：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 现在这里的代码会在严格模式下运行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>启用单个函数的严格模式： 如果你只想在特定函数内启用严格模式，可以在函数体的开头添加<code>&quot;use strict&quot;;</code>。例如：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;use strict&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在这个函数内的代码会在严格模式下运行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>严格模式的一些特性和限制包括：</p><ol><li>变量必须先声明后使用，避免意外创建全局变量。</li><li>禁止删除变量（<code>delete</code>）和函数（<code>delete function</code>）。</li><li>禁止使用八进制字面量（例如：<code>012</code>，在严格模式下被视为无效的）。</li><li>禁止对只读属性赋值。</li><li>禁止使用<code>with</code>语句。</li><li><code>this</code>在全局上下文中为<code>undefined</code>，而不是默认指向全局对象。</li></ol><p>启用严格模式的代码在遵循更严格的语法规则后，更容易发现潜在的错误，并且在某些情况下可能会有更好的性能。建议在新的项目中使用严格模式，并逐步更新现有的代码以适应严格模式。</p>`,9)]))}const k=a(t,[["render",p]]);export{u as __pageData,k as default};
