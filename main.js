/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var g=(t,n)=>{for(var o in n)a(t,o,{get:n[o],enumerable:!0})},h=(t,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of c(n))!p.call(t,e)&&e!==o&&a(t,e,{get:()=>n[e],enumerable:!(s=d(n,e))||s.enumerable});return t};var v=t=>h(a({},"__esModule",{value:!0}),t);var M={};g(M,{default:()=>l});module.exports=v(M);var i=require("obsidian"),l=class extends i.Plugin{async onload(){console.log("BookNav plugin loaded"),this.registerMarkdownCodeBlockProcessor("booknav",async(n,o,s)=>{let e=o.createDiv("booknav"),r=new i.MarkdownRenderChild(e);await i.MarkdownRenderer.render(this.app,n,e,s.sourcePath,r)}),this.registerMarkdownPostProcessor((n,o)=>{let s=n.findAll(".booknav a");for(let e of s)if(e.innerHTML.endsWith("prev")){let r="";e.innerHTML==="prev"?r=e.getAttribute("data-href")||"Previous":r=e.innerHTML.replace(/\|\s*prev/g,""),e.addClass("prev"),e.innerHTML=`<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left"><path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/></svg></span><span>${r}</span>`}else if(e.innerHTML.endsWith("next")){let r="";e.innerHTML==="next"?r=e.getAttribute("data-href")||"Next":r=e.innerHTML.replace(/\|\s*next/g,""),e.innerHTML=r,e.addClass("next")}else if(e.innerHTML.endsWith("center")){let r="";e.innerHTML==="center"?r=e.getAttribute("data-href")||"":r=e.innerHTML.replace(/\|\s*center/g,""),e.innerHTML=r,e.addClass("center")}})}onunload(){console.log("BookNav plugin unloaded")}};
