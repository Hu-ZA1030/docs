import{_ as a,c as i,o as e,al as n}from"./chunks/framework.C10EcB-T.js";const k=JSON.parse('{"title":"MySQL 基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"server/mysql/operation.md","filePath":"server/mysql/operation.md","lastUpdated":1729520793000}'),l={name:"server/mysql/operation.md"};function p(t,s,d,h,r,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="mysql-基本使用" tabindex="-1">MySQL 基本使用 <a class="header-anchor" href="#mysql-基本使用" aria-label="Permalink to &quot;MySQL 基本使用&quot;">​</a></h1><p>MySQL 的基本使用包括连接到 MySQL 服务器、创建数据库、创建表、插入数据、查询数据、更新数据和删除数据等操作。下面是 MySQL 的基本使用步骤：</p><h2 id="_1-连接到-mysql-服务器" tabindex="-1">1. 连接到 MySQL 服务器 <a class="header-anchor" href="#_1-连接到-mysql-服务器" aria-label="Permalink to &quot;1. 连接到 MySQL 服务器&quot;">​</a></h2><p>使用 MySQL 客户端工具（如命令行客户端或图形化客户端工具）连接到 MySQL 服务器。</p><ul><li>命令行客户端：打开命令行终端，运行命令<code>mysql -u username -p</code>，其中<code>username</code>是您的 MySQL 用户名。然后输入密码进行连接。</li><li>图形化客户端工具：打开图形化客户端工具（如 MySQL Workbench），输入服务器名称、用户名和密码进行连接。</li></ul><h2 id="_2-创建数据库" tabindex="-1">2. 创建数据库 <a class="header-anchor" href="#_2-创建数据库" aria-label="Permalink to &quot;2. 创建数据库&quot;">​</a></h2><p>在 MySQL 中创建一个新的数据库，用于存储数据。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> database_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将<code>database_name</code>替换为您希望创建的数据库的名称。</p><h2 id="_3-选择数据库" tabindex="-1">3. 选择数据库 <a class="header-anchor" href="#_3-选择数据库" aria-label="Permalink to &quot;3. 选择数据库&quot;">​</a></h2><p>使用以下命令选择要在其中执行操作的数据库。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">USE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> database_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将<code>database_name</code>替换为您要使用的数据库的名称。</p><h2 id="_4-创建表" tabindex="-1">4. 创建表 <a class="header-anchor" href="#_4-创建表" aria-label="Permalink to &quot;4. 创建表&quot;">​</a></h2><p>在所选的数据库中创建一个新的表，定义表的列和数据类型。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  column1 datatype,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  column2 datatype,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>将<code>table_name</code>替换为您希望创建的表的名称，<code>column1</code>、<code>column2</code>等替换为表的列名和相应的数据类型。</p><h2 id="_5-插入数据" tabindex="-1">5. 插入数据 <a class="header-anchor" href="#_5-插入数据" aria-label="Permalink to &quot;5. 插入数据&quot;">​</a></h2><p>使用以下命令向表中插入数据。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table_name (column1, column2, ...)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (value1, value2, ...);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>将<code>table_name</code>替换为要插入数据的表的名称，<code>column1</code>、<code>column2</code>等替换为表的列名，<code>value1</code>、<code>value2</code>等替换为要插入的值。</p><h2 id="_6-查询数据" tabindex="-1">6. 查询数据 <a class="header-anchor" href="#_6-查询数据" aria-label="Permalink to &quot;6. 查询数据&quot;">​</a></h2><p>使用 SELECT 语句从表中检索数据。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> column1, column2, ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将<code>column1</code>、<code>column2</code>等替换为要检索的列名，<code>table_name</code>替换为要检索数据的表的名称，<code>condition</code>替换为检索条件。</p><h2 id="_7-更新数据" tabindex="-1">7. 更新数据 <a class="header-anchor" href="#_7-更新数据" aria-label="Permalink to &quot;7. 更新数据&quot;">​</a></h2><p>使用 UPDATE 语句更新表中的数据。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">UPDATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> column1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value1, column2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value2, ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将<code>table_name</code>替换为要更新数据的表的名称，<code>column1</code>、<code>column2</code>等替换为要更新的列名和相应的值，<code>condition</code>替换为更新条件。</p><h2 id="_8-删除数据" tabindex="-1">8. 删除数据 <a class="header-anchor" href="#_8-删除数据" aria-label="Permalink to &quot;8. 删除数据&quot;">​</a></h2><p>使用 DELETE 语句从表中删除数据。</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> table_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>将<code>table_name</code>替换为要删除数据的表的名称，<code>condition</code>替换为删除条件。</p>`,33)]))}const u=a(l,[["render",p]]);export{k as __pageData,u as default};
