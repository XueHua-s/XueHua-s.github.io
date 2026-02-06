async function o(t){try{return await navigator.clipboard.writeText(t),!0}catch(r){try{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select();const a=document.execCommand("copy");return document.body.removeChild(e),a}catch{return console.error("Failed to copy:",r),!1}}}function s(t){const r=`${t}-${Date.now()}`;return`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <mask id="${r}">
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
      <rect width="24" height="24" fill="currentColor" mask="url(#${r})"/>
    </svg>`}export{s as a,o as c};
