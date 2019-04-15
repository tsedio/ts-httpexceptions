<header class="symbol-info-header">    <h1 id="exception">Exception</h1>    <label class="symbol-info-type-label class">Class</label>      </header>
<section class="symbol-info">      <table class="is-full-width">        <tbody>        <tr>          <th>Module</th>          <td>            <div class="lang-typescript">                <span class="token keyword">import</span> { Exception }                 <span class="token keyword">from</span>                 <span class="token string">"ts-httpexceptions"</span>                            </div>          </td>        </tr>        <tr>          <th>Source</th>          <td>            <a href="https://TypedProject.github.io/ts-httpexceptions/blob/v4.1.0/src/core/Exception.ts#L0-L0">                core/Exception.ts            </a>        </td>        </tr>                </tbody>      </table>    </section>

### Overview

<pre><code class="typescript-lang"><span class="token keyword">class</span> Exception <span class="token keyword">extends</span> Error <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    message<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    stack<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    origin<span class="token punctuation">:</span> Error<span class="token punctuation">;</span>
    status<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>
    body<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>status?<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span> message?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> origin?<span class="token punctuation">:</span> Error | <span class="token keyword">string</span> | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setOrigin</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> Error | <span class="token keyword">string</span> | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>

### Members

<div class="method-overview"><pre><code class="typescript-lang">name<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre></div>
Exception base name
<hr />
<div class="method-overview"><pre><code class="typescript-lang">message<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre></div>
Message of the exception
<hr />
<div class="method-overview"><pre><code class="typescript-lang">type<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre></div>
Exception type
<hr />
<div class="method-overview"><pre><code class="typescript-lang">stack<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre></div>
Stack calling
<hr />
<div class="method-overview"><pre><code class="typescript-lang">origin<span class="token punctuation">:</span> Error</code></pre></div>
<hr />
<div class="method-overview"><pre><code class="typescript-lang">status<span class="token punctuation">:</span> <span class="token keyword">number</span></code></pre></div>
HTTP Code Status
<hr />
<div class="method-overview"><pre><code class="typescript-lang">body<span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre></div>
<hr />
<div class="method-overview"><pre><code class="typescript-lang"><span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span></code></pre></div>
<hr />
<div class="method-overview"><pre><code class="typescript-lang"><span class="token function">setOrigin</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> Error | <span class="token keyword">string</span> | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span></code></pre></div>
<hr />
<div class="method-overview"><pre><code class="typescript-lang"><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre></div>
