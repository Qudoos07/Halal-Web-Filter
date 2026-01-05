const haramKeywords = [
  "casino",
  "gambling",
  "betting",
  "interest rate",
  "pork",
  "alcohol",
  "lottery",
  "riba",
  "interest-based loan"
];

function scanPage() {
  const bodyText = document.body.innerText.toLowerCase();
  let foundKeywords = [];

  haramKeywords.forEach(keyword => {
    if (bodyText.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  });

  if (foundKeywords.length > 0) {
    showWarning(foundKeywords);
  }
}

function showWarning(keywords) {
  if (document.getElementById('halal-warning-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'halal-warning-banner';
  
  // Style the red banner
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.width = '100%';
  banner.style.backgroundColor = '#d32f2f'; // Dark Red
  banner.style.color = 'white';
  banner.style.textAlign = 'center';
  banner.style.padding = '15px';
  banner.style.zIndex = '9999999'; // Ensure it's on top of everything
  banner.style.fontSize = '16px';
  banner.style.fontWeight = 'bold';
  banner.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
  banner.style.fontFamily = 'Arial, sans-serif';
  
  // Add the warning text
  banner.innerHTML = `
    ⚠️ <strong>HALAL ALERT:</strong> This page contains content related to: 
    <span style="background:white; color:#d32f2f; padding:2px 6px; border-radius:4px; margin:0 5px;">${keywords.join(', ')}</span>.
    Please proceed with caution.
    <button id="close-halal-banner" style="margin-left:20px; padding:5px 15px; cursor:pointer; border:none; background:white; color:black; border-radius:4px; font-weight:bold;">Dismiss</button>
  `;

  document.body.prepend(banner);

  document.getElementById('close-halal-banner').onclick = function() {
    banner.remove();
  };
}

// Run scan immediately
scanPage();
