!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}));var d=null;t.addEventListener("click",(function(){clearInterval(d),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.fcc15da6.js.map
