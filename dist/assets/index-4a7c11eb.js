import{d as U,a as D,u as B,r as g,o as C,c as Q,b as e,n as r,e as s,f as t,p as A,g as I,_ as T,h as y,w as b,v as $,i as M,T as S,j as N,s as Z,k as V,l as j,m as z,q as E,t as x,x as q,y as P,z as R,A as F,L as H}from"./index-dd1234ee.js";const J=()=>({pageChance:0,isDrawerState:!1}),G=U("AppGlobal",{state:J,actions:{updatePageChance(a){this.pageChance=a},updateDrawerState(a){this.isDrawerState=a}}}),m=a=>(A("data-v-7f3e5579"),a=a(),I(),a),K={class:"reds-modal login-modal",role:"presentation"},O={class:"login-container h-62 w-48"},W=m(()=>e("svg",{"aria-hidden":"true",class:"w-2.5 h-2.5 overflow-visible",viewBox:"0 0 10 10"},[e("path",{d:"M0 0L10 10M10 0L0 10",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-width":"2"})],-1)),X=[W],Y={class:"w-full"},ee={class:""},se={class:"channel-list mt-3"},te=m(()=>e("span",{class:"channel"},"发现",-1)),ne=m(()=>e("span",{class:"channel"},"动态",-1)),oe=m(()=>e("span",{class:"channel"}," 消息",-1)),ae=m(()=>e("span",{class:"channel"}," 用户",-1)),ie=D({__name:"menu",setup(a){const h=B(),i=G(),d=()=>{i.isDrawerState=!1},l=()=>{i.pageChance=0,h.push({path:"/"}),d()},w=()=>{i.pageChance=1,h.push({path:"/followTrend"}),d()},L=()=>{i.pageChance=2,h.push({path:"/message"}),d()},f=()=>{i.pageChance=4,h.push({path:"/user"}),d()};return(k,c)=>{const _=g("Star"),v=g("Bell"),o=g("User");return C(),Q("div",K,[e("i",{"aria-label":"弹窗遮罩",class:"reds-mask backdrop-blur",tabindex:"-1",onClick:d}),e("div",O,[e("div",{class:"icon-btn-wrapper close-button",onClick:d},X),e("div",Y,[e("div",ee,[e("ul",se,[e("li",{onClick:c[0]||(c[0]=p=>l()),class:r([s(i).pageChance==0?"active-channel text-blue-500":"","text-xl m-4 "])},[t(_,{style:{width:"1em",height:"1em","margin-right":"8px"}}),te],2),e("li",{onClick:c[1]||(c[1]=p=>w()),class:r([s(i).pageChance==1?"active-channel text-blue-500":"","text-xl m-4"])},[t(_,{style:{width:"1em",height:"1em","margin-right":"8px"}}),ne],2),e("li",{onClick:c[2]||(c[2]=p=>L()),class:r([s(i).pageChance==2?"active-channel text-blue-500":"","text-xl m-4"])},[t(v,{style:{width:"1em",height:"1em","margin-right":"8px"}}),oe],2),e("li",{onClick:c[3]||(c[3]=p=>f()),class:r([s(i).pageChance==4?"active-channel text-blue-500":"","text-xl m-4"])},[t(o,{style:{width:"1em",height:"1em","margin-right":"8px"}}),ae],2)])])])])])}}});const le=T(ie,[["__scopeId","data-v-7f3e5579"]]),n=a=>(A("data-v-6e4a9e09"),a=a(),I(),a),ce={class:"container"},he={class:"top"},de={class:"mask-paper"},re=n(()=>e("a",{class:"w-[10rem]",style:{display:"flex"}},[e("svg",{fill:"none",height:"46",viewBox:"0 0 117.103515625 46.56005859375",width:"80",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[e("g",null,[e("path",{d:"M8.30377 8.54396L4.84777 41.136L12.2878 41.136L16.6078 -3.43323e-05L21.0238 -3.43323e-05L16.7038 41.136L23.4718 41.136L27.0718 8.54396L31.4398 8.54396L27.4558 45.408L-0.000226498 45.408L3.88777 8.54396L8.30377 8.54396ZM50.0798 38.112Q50.9918 42.096 52.8638 42.096Q54.0158 42.096 54.6398 41.112Q55.2638 40.128 55.4558 37.728L58.8638 -3.43323e-05L63.4238 -3.43323e-05L60.0158 38.208Q59.6798 42 58.0238 44.256Q56.3678 46.512 53.1518 46.512Q50.1278 46.512 48.3998 44.544Q46.6718 42.576 45.9518 39.072L50.0798 38.112ZM52.9598 9.35997Q51.6158 15.792 49.6238 21.864Q47.6318 27.936 44.6078 33.984L40.5278 31.92Q43.3598 26.448 45.3278 20.52Q47.2958 14.592 48.6398 8.35197L52.9598 9.35997ZM69.2798 34.944Q68.1278 28.704 67.5518 22.224Q66.9758 15.744 66.6878 9.64796L70.9598 9.07197Q71.1998 15.264 71.8718 21.648Q72.5438 28.032 73.6478 34.176L69.2798 34.944ZM106.88 46.56L108.224 33.84L97.1358 35.472L96.9918 31.344L108.656 29.616L111.776 0.0959663L116 0.0959663L112.976 28.944L116.96 28.368L117.104 32.496L112.496 33.168L111.104 46.56L106.88 46.56ZM82.6398 36.336Q84.9918 32.112 86.7918 27.288Q88.5918 22.464 89.7438 16.512L86.4318 16.512L86.8638 12.48L91.6638 12.48L92.3358 6.33597Q90.3198 6.81597 88.3518 7.19997L87.2478 3.31197Q90.1758 2.78397 93.1998 1.99197Q96.2238 1.19997 98.7198 0.287968L100.112 3.93597Q98.3838 4.55997 96.4638 5.18397L95.6478 12.48L99.8718 12.48L99.4398 16.512L95.2158 16.512L94.8798 19.776Q96.0318 20.976 97.1358 22.2Q98.2398 23.424 99.4398 24.912L96.9438 27.696Q95.5998 25.824 94.3998 24.336L92.0478 46.464L87.9198 46.464L91.0398 20.64Q90.0318 25.632 88.7118 30Q87.3918 34.368 85.5678 38.4L82.6398 36.336ZM105.392 2.63997Q107.744 6.38396 109.52 10.368L106.16 12.336Q105.296 10.512 104.24 8.37597Q103.184 6.23997 102.08 4.60797L105.392 2.63997ZM104.192 26.208Q103.472 24.096 102.488 21.912Q101.504 19.728 100.448 17.952L103.952 16.08Q105.056 18 106.04 20.184Q107.024 22.368 107.744 24.432L104.192 26.208Z",fill:"#2A82E4"})])])],-1)),_e=n(()=>e("div",{class:"tool-box"},null,-1)),pe={class:"input-box"},ue=n(()=>e("input",{class:"search-input",placeholder:"搜索山小科",type:"text"},null,-1)),me={class:"input-button"},ve={class:"close-icon"},ge={class:"search-icon"},we=n(()=>e("svg",{"aria-hidden":"true",fill:"none",height:"24",width:"24"},[e("path",{d:"M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"})],-1)),Le=[we],fe={class:"main"},xe={class:"side-bar"},Ce={class:"channel-list"},Qe={class:"link-wrapper"},ke=n(()=>e("span",{class:"channel"},"发现",-1)),ye=n(()=>e("span",{class:"channel"}," 动态",-1)),be=n(()=>e("span",{class:"channel"}," 消息",-1)),$e=n(()=>e("span",{class:"channel"}," 用户",-1)),Me={class:"information-container ml-2"},Se={key:0,class:"information-pad"},Ze={class:"container"},De={class:"group-wrapper"},Be={class:"menu-item hover-effect"},Ae=n(()=>e("span",null,"关于山小科",-1)),Ie={class:"icon"},Te={class:"menu-item hover-effect"},Ge=n(()=>e("span",null,"隐私，协议",-1)),Ue={class:"icon"},Ne=n(()=>e("div",{class:"menu-item hover-effect"},[e("span",null,"帮助与客服")],-1)),Ve=n(()=>e("div",{class:"divider"},null,-1)),je={class:"group-wrapper"},ze=n(()=>e("div",{class:"group-header"},"访问方式",-1)),Ee={class:"menu-item hover-effect"},qe=n(()=>e("span",null,"键盘快捷键",-1)),Pe={class:"icon"},Re={class:"menu-item hover-effect"},Fe=n(()=>e("span",null,"添加山小科到桌面",-1)),He={class:"icon"},Je=n(()=>e("div",{class:"menu-item hover-effect"},[e("span",null,"小窗模式")],-1)),Ke=n(()=>e("div",{class:"divider"},null,-1)),Oe={class:"group-wrapper"},We=n(()=>e("div",{class:"group-header"},"设置",-1)),Xe={class:"menu-item hover-effect"},Ye=n(()=>e("span",null,"深色模式",-1)),es={class:"multistage-toggle component"},ss={class:"toggle-item active"},ts={class:"icon-wrapper"},ns={class:"toggle-item"},os={class:"icon-wrapper"},as=n(()=>e("div",{class:"menu-item hover-effect"},[e("span",null,"退出登录")],-1)),is=n(()=>e("span",{class:"channel ml-1"}," 更多",-1)),ls={class:"main-content with-side-bar"},cs={class:"max-[1024px]:hidden"},hs=D({__name:"index",setup(a){const h=B(),i=y(!1),d=y(!0),l=G(),w=()=>{l.pageChance=0,h.push({path:"/"})},L=()=>{l.pageChance=1,h.push({path:"/followTrend"})},f=()=>{l.pageChance=2,h.push({path:"/message"})},k=()=>{console.log("updataMenu"),l.isDrawerState=!l.isDrawerState},c=()=>{l.pageChance=4,h.push({path:"/user"})},_=v=>{d.value=v};return(v,o)=>{const p=g("router-view");return C(),Q("div",ce,[e("div",he,[e("header",de,[re,_e,e("div",pe,[ue,e("div",me,[e("div",ve,[t(s(N),{style:{width:"1em",height:"1em","margin-right":"8px"}})]),e("div",ge,[t(s(Z),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])]),e("div",{class:"right max-[960px]:cursor-pointer min-[960px]:hidden",onClick:o[0]||(o[0]=u=>k())},Le),b(t(le,{onClickChild:_},null,512),[[$,s(l).isDrawerState]])])]),e("div",fe,[t(S,null,{default:M(()=>[e("div",xe,[e("ul",Ce,[e("li",{class:r(s(l).pageChance==0?"active-channel":""),onClick:o[1]||(o[1]=u=>w())},[e("a",Qe,[t(s(V),{style:{width:"1em",height:"1em","margin-right":"8px"}}),ke])],2),e("li",{class:r(s(l).pageChance==1?"active-channel":""),onClick:o[2]||(o[2]=u=>L())},[t(s(j),{style:{width:"1em",height:"1em","margin-right":"8px"}}),ye],2),e("li",{class:r(s(l).pageChance==2?"active-channel":""),onClick:o[3]||(o[3]=u=>f())},[t(s(z),{style:{width:"1em",height:"1em","margin-right":"8px"}}),be],2),e("li",{class:r(s(l).pageChance==4?"active-channel ":""),onClick:o[4]||(o[4]=u=>c())},[t(s(E),{style:{width:"1em",height:"1em","margin-right":"8px"}}),$e],2)]),e("div",Me,[t(S,null,{default:M(()=>[i.value?(C(),Q("div",Se,[e("div",Ze,[e("div",null,[e("div",null,[e("div",De,[e("div",Be,[Ae,e("div",Ie,[t(s(x),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),e("div",Te,[Ge,e("div",Ue,[t(s(x),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),Ne]),Ve]),e("div",null,[e("div",je,[ze,e("div",Ee,[qe,e("div",Pe,[t(s(Z),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),e("div",Re,[Fe,e("div",He,[t(s(x),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),Je]),Ke]),e("div",null,[e("div",Oe,[We,e("div",Xe,[Ye,e("div",es,[e("button",ss,[e("div",ts,[t(s(q),{style:{width:"1em",height:"1em"}})])]),e("button",ns,[e("div",os,[t(s(P),{style:{width:"1em",height:"1em"}})])])])]),as])])])])])):R("",!0)]),_:1}),e("div",{class:"information-wrapper",onClick:o[5]||(o[5]=u=>{i.value=!i.value})},[t(s(F),{style:{width:"1em",height:"1em","margin-right":"8px"}}),is])])])]),_:1}),e("div",ls,[t(p)])]),e("div",cs,[b(t(H,{onClickChild:_},null,512),[[$,d.value]])])])}}});const rs=T(hs,[["__scopeId","data-v-6e4a9e09"]]);export{rs as default};