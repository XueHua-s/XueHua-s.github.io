function f(e){return e.replace(/[&<>"']/g,"")}function h(e){if(e.classList.contains("mermaid"))return"mermaid";const c=e.getAttribute("data-language");if(c)return c;const t=e.querySelector("code");if(t){const n=t.className.split(" ").find(s=>s.startsWith("language-"));if(n)return n.replace("language-","")}return"text"}function g(e){return e.querySelector("code")?.textContent||""}function p(e){return e.querySelector("code")?.innerHTML||""}function k(e){return e.className}function b(e){return e.getAttribute("style")||""}function m(e){return e.querySelector("code")?.className||""}function v(e,c={}){const{enableCopy:t=!0,enableFullscreen:a=!0}=c;return`
    <div class="code-block-toolbar">
      <div class="code-block-dots">
        <span class="code-block-dot red"></span>
        <span class="code-block-dot yellow"></span>
        <span class="code-block-dot green"></span>
        <span class="code-block-language">${f(e)}</span>
      </div>
      <div class="code-block-actions">
        ${a?`
        <button
          class="code-block-button code-block-fullscreen"
          aria-label="全屏查看"
          title="全屏查看"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>`:""}
        ${t?`
        <button
          class="code-block-button code-block-copy"
          aria-label="复制代码"
          title="复制代码"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"/>
          </svg>
        </button>`:""}
      </div>
    </div>
  `}async function y(e){try{return await navigator.clipboard.writeText(e),!0}catch(c){try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select();const a=document.execCommand("copy");return document.body.removeChild(t),a}catch{return console.error("Failed to copy:",c),!1}}}function w(e,c={}){if(e.dataset.enhanced==="true")return null;const t=h(e);if(t==="mermaid")return null;const a=g(e),n=p(e),s=k(e),r=b(e),l=m(e),o=document.createElement("div");return o.className="code-block-wrapper",e.parentNode?.insertBefore(o,e),o.appendChild(e),e.insertAdjacentHTML("beforebegin",v(t,c)),e.dataset.enhanced="true",e.dataset.language=t,{element:e,language:t,code:a,codeHTML:n,preClassName:s,preStyle:r,codeClassName:l}}function x(e,c={}){const{enableCopy:t=!0,enableFullscreen:a=!0}=c;e.querySelectorAll("pre").forEach(s=>{const r=s,l=w(r,{enableCopy:t,enableFullscreen:a});if(l){if(t){const o=r.parentElement?.querySelector(".code-block-copy");if(o){const d=o.innerHTML,i=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <mask id="checkmark-anim-${Date.now()}">
              <g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M2 13.5l4 4l10.75 -10.75">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
                </path>
                <path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
                </path>
                <path d="M7.5 13.5l4 4l10.75 -10.75">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
                </path>
              </g>
            </mask>
            <rect width="24" height="24" fill="currentColor" mask="url(#checkmark-anim-${Date.now()})"/>
          </svg>`,u=async()=>{await y(l.code)&&(o.classList.add("copied"),o.innerHTML=i,c.onCopy?.(l.code),setTimeout(()=>{o.classList.remove("copied"),o.innerHTML=d},2e3))};o.addEventListener("click",()=>{u()})}}if(a){const o=r.parentElement?.querySelector(".code-block-fullscreen");o&&o.addEventListener("click",()=>{c.onFullscreen?.(l)})}}})}export{y as c,x as e};
