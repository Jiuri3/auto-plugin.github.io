import{_ as o,c as r,ae as s,G as i,w as c,j as a,B as n,o as d}from"./chunks/framework.DEXvqjEZ.js";const l="/index/autofit.js/assets/c.lVX2fOPT.jpg",h="/index/autofit.js/assets/c1.D93tpExc.jpg",P=JSON.parse('{"title":"常见疑难解答","description":"","frontmatter":{},"headers":[],"relativePath":"question.md","filePath":"question.md"}'),p={name:"question.md"};function u(m,e,f,_,b,x){const t=n("center");return d(),r("div",null,[e[1]||(e[1]=s('<h1 id="常见疑难解答" tabindex="-1">常见疑难解答 <a class="header-anchor" href="#常见疑难解答" aria-label="Permalink to &quot;常见疑难解答&quot;">​</a></h1><h2 id="为什么我使用后有白边" tabindex="-1">为什么我使用后有白边？ <a class="header-anchor" href="#为什么我使用后有白边" aria-label="Permalink to &quot;为什么我使用后有白边？&quot;">​</a></h2><p>检查 是否使用了 <code>rem\\em\\vh\\vw</code> 等相对单位，推荐使用 <code>px</code> &amp; <code>%</code> 作为单位<br></p><h2 id="为什么我的图表、地图、背景图没有撑满" tabindex="-1">为什么我的图表、地图、背景图没有撑满？ <a class="header-anchor" href="#为什么我的图表、地图、背景图没有撑满" aria-label="Permalink to &quot;为什么我的图表、地图、背景图没有撑满？&quot;">​</a></h2><p>建议使用 <code>%</code> 使其总是充满父元素，而不是使用 <code>px</code> 固定宽高， 如果使用的第三方库有 <code>resize</code> 事件或方法，建议尝试使用 第三方库提供的 <code>resize</code><br></p><h2 id="需要和其他自适应库一起使用吗" tabindex="-1">需要和其他自适应库一起使用吗？ <a class="header-anchor" href="#需要和其他自适应库一起使用吗" aria-label="Permalink to &quot;需要和其他自适应库一起使用吗？&quot;">​</a></h2><p>不需要，也不可以，因为 autofit.js 接管的页面中，相对单位或缩放会造成冲突。<br></p><h2 id="为什么我使用后-第三方组件库的弹出层错位了" tabindex="-1">为什么我使用后，第三方组件库的弹出层错位了？ <a class="header-anchor" href="#为什么我使用后-第三方组件库的弹出层错位了" aria-label="Permalink to &quot;为什么我使用后，第三方组件库的弹出层错位了？&quot;">​</a></h2><p>各大第三方组件库依旧没有做好对 <code>transform</code> 属性的支持，因为 <code>transform</code> 不会改变元素的实际位置，当其计算弹出层位置时，不会考虑元素的视觉位置，而是考虑元素的实际位置，因此会出现错位。</p><h2 id="全屏后自适应失效了" tabindex="-1">全屏后自适应失效了？ <a class="header-anchor" href="#全屏后自适应失效了" aria-label="Permalink to &quot;全屏后自适应失效了？&quot;">​</a></h2><p>全屏的元素无法修改其宽高、缩放等样式，在使用全屏 API 时，不要选择 autofit.js 接管的元素，而是选择其上级元素。</p><h2 id="还有问题" tabindex="-1">还有问题？ <a class="header-anchor" href="#还有问题" aria-label="Permalink to &quot;还有问题？&quot;">​</a></h2><p>欢迎来到诺克萨斯（不朽堡垒已满200，请加黑色玫瑰）</p>',13)),i(t,{style:{display:"flex","justify-content":"center","align-items":"flex-start","flex-wrap":"wrap"}},{default:c(()=>e[0]||(e[0]=[a("img",{src:l,style:{width:"50%",height:"480px","object-fit":"cover"}},null,-1),a("img",{src:h,style:{width:"50%",height:"480px","object-fit":"cover"}},null,-1)])),_:1}),e[2]||(e[2]=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"🟢"),a("p",null,"群二维码过期请添加德莱厄斯")],-1))])}const k=o(p,[["render",u]]);export{P as __pageData,k as default};
