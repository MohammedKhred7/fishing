import{H as P,R as y,aJ as C,r as m,B as V,w as j,K as u,L as l,f as a,N as i,S as v,T as _,P as r,U as x,F as B,O as q,W as $,Q as b,X as D,Y as E,_ as I,G as L}from"./index-8c8de8dd.js";import{_ as R}from"./ShowImg.vue_vue_type_style_index_0_lang-878b7c9b.js";import{_ as U}from"./Title.vue_vue_type_style_index_0_lang-2fee35ad.js";const F={class:"h-100"},N={class:"sub-title"},S={class:"space-word-break"},z=P({__name:"Products",setup(w){const{t:s}=y(),g=C(),o=m([{img:["/img/products/cuttleffish/1.jpg","/img/products/cuttleffish/2.jpg","/img/products/cuttleffish/3.jpg","/img/products/cuttleffish/4.jpg"],name:s("navProducts.fish1.name"),desc:s("navProducts.fish1.desc")},{img:["/img/products/cat-fish/1.jpg","/img/products/cat-fish/2.jpg","/img/products/cat-fish/3.jpg","/img/products/cat-fish/4.jpg"],name:s("navProducts.fish2.name"),desc:s("navProducts.fish2.desc")},{img:["/img/products/grey-cracker/1.jpg","/img/products/grey-cracker/2.jpg","/img/products/grey-cracker/3.jpg","/img/products/grey-cracker/4.jpg"],name:s("navProducts.fish3.name"),desc:s("navProducts.fish3.desc")},{img:["/img/products/squid/1.jpg","/img/products/squid/2.jpg","/img/products/squid/3.jpg","/img/products/squid/4.jpg"],name:s("navProducts.fish4.name"),desc:s("navProducts.fish4.desc")},{img:["/img/products/yellow-tail-scad/1.jpg","/img/products/yellow-tail-scad/2.jpg","/img/products/yellow-tail-scad/3.jpg","/img/products/yellow-tail-scad/4.jpg"],name:s("navProducts.fish5.name"),desc:s("navProducts.fish5.desc")},{img:["/img/products/bonito/1.jpg","/img/products/bonito/2.jpg","/img/products/bonito/3.jpg","/img/products/bonito/4.jpg"],name:s("navProducts.fish6.name"),desc:s("navProducts.fish6.desc")},{img:["/img/products/sardine/1.jpg","/img/products/sardine/2.jpg","/img/products/sardine/3.jpg","/img/products/sardine/4.jpg"],name:s("navProducts.fish7.name"),desc:s("navProducts.fish7.desc")},{img:["/img/products/bream/1.jpg","/img/products/bream/2.jpg","/img/products/bream/3.jpg","/img/products/bream/4.jpg"],name:s("navProducts.fish8.name"),desc:s("navProducts.fish8.desc")},{img:["/img/products/chub/1.jpg","/img/products/chub/2.jpg","/img/products/chub/3.jpg","/img/products/chub/4.jpg"],name:s("navProducts.fish9.name"),desc:s("navProducts.fish9.desc")},{img:["/img/products/barracuda/1.jpg","/img/products/barracuda/2.jpg","/img/products/barracuda/3.jpg","/img/products/barracuda/4.jpg"],name:s("navProducts.fish10.name"),desc:s("navProducts.fish10.desc")},{img:["/img/products/ribbonfish/1.jpg","/img/products/ribbonfish/2.jpg","/img/products/ribbonfish/3.jpg","/img/products/ribbonfish/4.jpg"],name:s("navProducts.fish11.name"),desc:s("navProducts.fish11.desc")},{img:["/img/products/lobster/1.jpg","/img/products/lobster/2.jpg","/img/products/lobster/3.jpg","/img/products/lobster/4.jpg"],name:s("navProducts.fish12.name"),desc:s("navProducts.fish12.desc")},{img:["/img/products/shrimp/1.jpg","/img/products/shrimp/2.jpg","/img/products/shrimp/3.jpg","/img/products/shrimp/4.jpg"],name:s("navProducts.fish13.name"),desc:s("navProducts.fish13.desc")},{img:["/img/products/octopus/1.jpg","/img/products/octopus/5.jpg","/img/products/octopus/6.jpg","/img/products/octopus/7.jpg"],name:s("navProducts.fish14.name"),desc:s("navProducts.fish14.desc")}]);let c,t=m({name:"",decs:"",img:[]});V(()=>{c=g.params.id,t.value=o.value[c-1]}),j(()=>g.params.id,e=>{c=parseInt(e),console.log(e),t.value=o.value[c-1],console.log(t)}),j(()=>t,e=>{t=e});const d=m(!1),p=m(""),k=e=>{d.value=!0,p.value=e};return(e,f)=>(u(),l("div",F,[a(r($),null,{default:i(()=>[a(R,{dialog:d.value,imgUrl:p.value,onCloseDialog:f[0]||(f[0]=n=>d.value=!1)},null,8,["dialog","imgUrl"]),v("div",N,_(r(t).name),1),v("p",S,_(r(t).desc),1),a(r(x),{class:"mt-10"},{default:i(()=>[(u(!0),l(B,null,q(r(t).img,(n,h)=>(u(),b(r(D),{key:h,md:"3",sm:"6",cols:"12",class:"products"},{default:i(()=>[a(r(E),{color:"#E1EDFD",rounded:"lg",elevation:"4",class:"border-solid-product",onClick:H=>k(n)},{default:i(()=>[a(r(I),{class:"pa-2"},{default:i(()=>[(u(),b(r(L),{key:h,"lazy-src":n,src:n,cover:"","min-height":"250","max-height":"250",class:"bg-white rounded-lg"},null,8,["lazy-src","src"]))]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]))}}),J=P({__name:"products",setup(w){const{t:s}=y();function g(){for(var o=document.querySelectorAll(".products"),c=0;c<o.length;c++){var t=window.innerHeight,d=o[c].getBoundingClientRect().top,p=0;d<t-p&&o[c].classList.add("active")}}return window.addEventListener("scroll",g),(o,c)=>(u(),l("div",null,[a(U,{title:r(s)("main.products")},null,8,["title"]),a(z,{id:"products"})]))}});export{J as default};
