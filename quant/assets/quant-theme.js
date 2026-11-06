/* QUANT light/dark switch, shared by all ecosystem units. */
(function(){
'use strict';
var key='quant-theme';
function getStored(){try{return localStorage.getItem(key)}catch(e){return null}}
function store(v){try{localStorage.setItem(key,v)}catch(e){}}
var current=getStored()==='dark'?'dark':'light';
function apply(mode){
 current=mode==='dark'?'dark':'light';
 document.documentElement.setAttribute('data-theme',current);
 var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',current==='dark'?'#101c2a':'#ffffff');
 var b=document.getElementById('quant-theme-toggle');
 if(b){
 b.setAttribute('aria-pressed',String(current==='dark'));
 b.setAttribute('aria-label',current==='dark'?'Cambiar a tema claro':'Cambiar a tema oscuro');
 b.setAttribute('title',current==='dark'?'Activar modo claro':'Activar modo oscuro');
 b.innerHTML=current==='dark'
 ?'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><span class="theme-label">Claro</span>'
 :'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.7 8.7 0 0 1 8.5 3.5 8.7 8.7 0 1 0 20.5 15.5Z"/></svg><span class="theme-label">Oscuro</span>';
 }
 document.querySelectorAll('img[data-quant-logo]').forEach(function(img){
 var light=img.getAttribute('data-logo-light'),dark=img.getAttribute('data-logo-dark');
 if(light&&dark)img.setAttribute('src',current==='dark'?dark:light);
 });
}
apply(current);
function ready(){apply(current);var btn=document.getElementById('quant-theme-toggle');if(btn)btn.addEventListener('click',function(){var m=current==='dark'?'light':'dark';store(m);apply(m)})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();
