let timerConfig="undefined"!=typeof GLOBAL_CONFIG&&GLOBAL_CONFIG.footerTimer?GLOBAL_CONFIG.footerTimer:{mode:"runtime",createDate:"2022-03-11 00:00:00"},nol=t=>9<t?t:"0"+t;function getRuntimeHtml(){var t=Math.round(new Date(timerConfig.createDate).getTime()/1e3);let s=Math.round((new Date).getTime()/1e3)-t;t=[0,0,0,0,0];return 31536e3<=s&&(t[0]=parseInt(s/31536e3),s%=31536e3),86400<=s&&(t[1]=parseInt(s/86400),s%=86400),3600<=s&&(t[2]=nol(parseInt(s/3600)),s%=3600),60<=s&&(t[3]=nol(parseInt(s/60)),s%=60),0<s&&(t[4]=nol(s)),`
    <div class="runtime-card">
      <div class="runtime-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      </div>
      <div class="runtime-content">
        <div class="runtime-label">網站已運行</div>
        <div class="runtime-stats">
          <span class="stat-item"><span class="stat-num">${t[0]}</span><span class="stat-unit">年</span></span>
          <span class="stat-item"><span class="stat-num">${t[1]}</span><span class="stat-unit">天</span></span>
          <span class="stat-item"><span class="stat-num">${t[2]}</span><span class="stat-unit">時</span></span>
          <span class="stat-item"><span class="stat-num">${t[3]}</span><span class="stat-unit">分</span></span>
          <span class="stat-item"><span class="stat-num">${t[4]}</span><span class="stat-unit">秒</span></span>
        </div>
      </div>
    </div>
  `}function getClockHtml(){return`
    <div class="runtime-card clock-mode">
      <div class="runtime-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      </div>
      <div class="runtime-content">
        <div class="runtime-clock">${(new Date).toLocaleString("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}</div>
      </div>
    </div>
  `}function updateTimer(){var t=document.getElementById("workboard");t&&(t.innerHTML=("clock"===timerConfig.mode?getClockHtml:getRuntimeHtml)())}setInterval(updateTimer,1e3),updateTimer();