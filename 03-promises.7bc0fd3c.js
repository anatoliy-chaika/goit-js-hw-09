const e=document.querySelector(".form"),t=document.querySelector(".js-start");function o(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:l,amount:s}=e.currentTarget.elements,i=n.value,r=l.value,a=s.value;t.disabled=!0,setTimeout((()=>{for(let e=0;e<a;e+=1)o(e,r*e).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e+1} in ${t+Number(i)}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e+1} in ${t+Number(i)}ms`)})).finally((()=>{e===a-1&&(t.disabled=!1)}))}),i)}));
//# sourceMappingURL=03-promises.7bc0fd3c.js.map
