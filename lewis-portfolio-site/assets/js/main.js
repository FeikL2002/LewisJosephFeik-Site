(function(){
  const yearTargets = document.querySelectorAll('[data-year]');
  const y = String(new Date().getFullYear());
  yearTargets.forEach(el => el.textContent = y);

  const here = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('a[data-nav]');
  links.forEach(a => {
    const target = a.getAttribute('href');
    if (!target) return;
    if (target === here) a.classList.add('active');
  });

  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => btn.textContent = old, 1200);
      } catch(e) {
        window.prompt("Copy this", text);
      }
    });
  });

})();
