(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{390:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/cache-loader"><img src="https://img.shields.io/npm/v/cache-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/cache-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/cache-loader"><img src="https://david-dm.org/webpack-contrib/cache-loader.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/cache-loader/_build/latest?definitionId=4&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/cache-loader/_apis/build/status/webpack-contrib.cache-loader?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/cache-loader"><img src="https://codecov.io/gh/webpack-contrib/cache-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=cache-loader"><img src="https://packagephobia.now.sh/badge?p=cache-loader" alt="size"></a></p>\n<p><code>cache-loader</code> 允许缓存以下 loaders 到（默认）磁盘或数据库。</p>\n<h2 id="getting-started">起步 <a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在开始前，需要安装 <code>cache-loader</code>:</p>\n<pre><code class="hljs language-console">npm install --save-dev cache-loader\n</code></pre>\n<p>在一些性能开销较大的 loader 之前添加 cache-loader，以便将结果缓存到磁盘里。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.ext$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span> <span class="token operator">...</span>loaders<span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote>\n<p>⚠️  请注意，保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader。</p>\n</blockquote>\n<h2 id="options">选项 <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th align="center">名称</th>\n<th align="center">类型</th>\n<th align="center">默认值</th>\n<th align="left">描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>cacheContext</code></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">允许覆写默认的缓存上下文以便生成相对缓存路径。默认情况下生成的是绝对路径</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>cacheKey</code></strong><p class="description mobile"><code>{Function(options, request) -> {String}}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function(options, request) -> {String}}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">允许覆写默认的缓缓存键生成器</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>cacheDirectory</code></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>findCacheDir({ name: \'cache-loader\' }) or os.tmpdir()</code></td>\n<td align="left">提供一个可存储缓存项（供默认读/写执行使用）的缓存目录</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>cacheIdentifier</code></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>cache-loader:{version} {process.env.NODE_ENV}</code></td>\n<td align="left">提供一个用于生成哈希值的无效标识符。可以用于 loaders 的额外依赖（供默认读/写执行使用）</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>compare</code></strong><p class="description mobile"><code>{Function(stats, dep) -> {Boolean}}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function(stats, dep) -> {Boolean}}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">允许覆写用于比较缓存依赖和当前读取依赖的默认函数，返回值为 \n<code>true</code>\n 时使用缓存资源</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>precision</code></strong><p class="description mobile"><code>{Number}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Number}</code></td>\n<td align="center"><code>0</code></td>\n<td align="left">在将 \n<code>stats</code>\n 和 \n<code>dep</code>\n 参数传入比较函数之前，浮动于 \n<code>mtime</code>\n 的毫秒数</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>read</code></strong><p class="description mobile"><code>{Function(cacheKey, callback) -> {void}}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function(cacheKey, callback) -> {void}}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">允许覆写默认从文件中读取的缓存数据</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>readOnly</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">允许覆写默认值并将缓存设置为只读（比如某些环境中不需要缓存更新，只需要读取）</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>名称</p><p>类型</p><p>默认值</p><p>描述</p></div>\n<div class="content"><p><strong><code>write</code></strong><p class="description mobile"><code>{Function(cacheKey, data, callback) -> {void}}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function(cacheKey, data, callback) -> {void}}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">允许覆写默认向文件写入缓存数据（比如 Redis, memcached）</td>\n</tr>\n</tbody>\n</table>\n<h2 id="examples">示例 <a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="basic">基本用法 <a href="#basic" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="database-integration">数据库集成 <a href="#database-integration" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token comment">// 或其他数据库终端 - memcached，mongodb...</span>\n<span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'redis\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'crypto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n<span class="token comment">// 连接终端</span>\n<span class="token comment">// ...</span>\n\n<span class="token keyword">const</span> <span class="token constant">BUILD_CACHE_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span><span class="token punctuation">;</span> <span class="token comment">// 1 天</span>\n\n<span class="token keyword">function</span> <span class="token function">digest</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> crypto\n    <span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">\'md5\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">\'hex\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 生成自己的缓存键</span>\n<span class="token keyword">function</span> <span class="token function">cacheKey</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`build:cache:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">digest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 从数据库读取数据并进行转换</span>\n<span class="token keyword">function</span> <span class="token function">read</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  client<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Key </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not found`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 根据缓存键向数据库写入数据</span>\n<span class="token keyword">function</span> <span class="token function">write</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  client<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'EX\'</span><span class="token punctuation">,</span> <span class="token constant">BUILD_CACHE_TIMEOUT</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              cacheKey<span class="token punctuation">,</span>\n              read<span class="token punctuation">,</span>\n              write<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">贡献 <a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>如果您尚未了解，建议您阅读以下贡献指引。</p>\n<p><a href="https://github.com/webpack-contrib/cache-loader/blob/master/.github/CONTRIBUTING.md">贡献</a></p>\n<h2 id="license">许可 <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/cache-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);