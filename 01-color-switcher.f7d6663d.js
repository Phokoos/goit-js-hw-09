const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),l=document.querySelectorAll("[type=button]"),r=document.querySelector(".btn-list"),o=document.querySelector("body");o.style.height="100vh",r.style.height="100%",r.style.display="flex",r.style.justifyContent="center",r.style.alignItems="center",r.style.gap="10px",l.forEach((t=>{t.style.width="100px",t.style.height="50px",t.style.fontSize="30px"})),e.setAttribute("disabled",""),t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),changeColorInterval=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(changeColorInterval)}));
//# sourceMappingURL=01-color-switcher.f7d6663d.js.map
