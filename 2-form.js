import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.elements.email,n=a.elements.message,o="feedback-form-state";function s(){localStorage.setItem(o,JSON.stringify(e))}function m(){const t=localStorage.getItem(o);t&&(e=JSON.parse(t),l.value=e.email||"",n.value=e.message||"")}function r(t){e[t.target.name]=t.target.value.trim(),s()}function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form Data:",e),a.reset(),e={email:"",message:""},localStorage.removeItem(o)}a.addEventListener("input",r);window.addEventListener("load",m);a.addEventListener("submit",i);
//# sourceMappingURL=2-form.js.map