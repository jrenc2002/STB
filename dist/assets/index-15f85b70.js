import{a as p,u,h as m,r as h,o as b,c as g,b as e,n as i,f as C,p as f,g as x,_ as k}from"./index-63fd9026.js";const o=a=>(f("data-v-34a75408"),a=a(),x(),a),w={class:"container"},y={class:"",style:{height:"72px"}},I={class:"reds-sticky"},$={class:"reds-tabs-list"},B=o(()=>e("span",null,"我的消息",-1)),S=[B],N=o(()=>e("span",null,"评论和@",-1)),V=[N],z=o(()=>e("span",null,"赞和收藏",-1)),A=[z],E=o(()=>e("span",null,"新增关注",-1)),F=[E],M=o(()=>e("div",{class:"divider"},null,-1)),R=p({__name:"index",setup(a){const n=u(),s=m(0),d=()=>{n.push({path:"/comment"}),s.value=1},l=()=>{n.push({path:"/message"}),s.value=0},_=()=>{n.push({path:"/agreeCollection"}),s.value=2},r=()=>{n.push({path:"/follower"}),s.value=3};return(j,t)=>{const v=h("router-view");return b(),g("div",w,[e("div",y,[e("div",I,[e("div",$,[e("div",{class:i([s.value==0?"active":"","reds-tab-item  tab-item"])},[e("div",{class:"badge-container",onClick:t[0]||(t[0]=c=>l())},S)],2),e("div",{class:i([s.value==1?"active":"","reds-tab-item  tab-item"])},[e("div",{class:"badge-container",onClick:t[1]||(t[1]=c=>d())},V)],2),e("div",{class:i([s.value==2?"active":"","reds-tab-item  tab-item"])},[e("div",{class:"badge-container",onClick:t[2]||(t[2]=c=>_())},A)],2),e("div",{class:i([s.value==3?"active":"","reds-tab-item  tab-item"])},[e("div",{class:"badge-container",onClick:t[3]||(t[3]=c=>r())},F)],2)]),M])]),C(v)])}}});const D=k(R,[["__scopeId","data-v-34a75408"]]);export{D as default};