import{a as m}from"./chunks/index.c89df954.js";import{_ as u,o as t,c as s,F as _,R as p,n as h,C as o,t as l,G as i,J as f,V as y,a as c}from"./chunks/framework.fcd1db8a.js";const g="/assets/5a4a07cc67f556288d3df2e9029fc14.f485e307.jpg";const N={name:"specialThanks",props:{displayUserName:Boolean,min:{type:Number,default:0},max:{type:Number,default:1/0}},methods:{get_sponsors:function(){m.get("https://server.amiyabot.com:8000/get_sponsors").then(r=>{this.data=JSON.parse(r.data),this.data.sort((n,a)=>a.all_sum_amount-n.all_sum_amount)})}},data(){return{data:[]}},mounted(){this.get_sponsors()}},b={class:"user-list"},x=["src","alt"],B={key:0,class:"user-name"},k={class:"name"},v={class:"amount"};function A(r,n,a,U,d,q){return t(),s("div",b,[(t(!0),s(_,null,p(d.data,e=>(t(),s(_,null,[e.all_sum_amount>=a.min&&e.all_sum_amount<a.max?(t(),s("div",{key:0,class:h(["user",{small:!a.displayUserName}])},[o("img",{class:"avatar",src:e.user.avatar,alt:e.user.name},null,8,x),a.displayUserName?(t(),s("div",B,[o("span",k,l(e.user.name),1),o("span",v,"￥"+l(e.all_sum_amount),1)])):i("",!0)],2)):i("",!0)],64))),256))])}const T=u(N,[["render",A],["__scopeId","data-v-ed383f18"]]),V=y("",5),S=o("p",null,[c("打赏请前往"),o("a",{href:"https://afdian.net/a/amiyabot",target:"_blank",rel:"noreferrer"},"爱发电主页"),c("。")],-1),P=o("img",{style:{width:"400px"},src:g,alt:"image"},null,-1),J=JSON.parse('{"title":"赞助","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"sponsor.md","filePath":"sponsor.md","lastUpdated":1705484369000}'),C={name:"sponsor.md"},O=Object.assign(C,{setup(r){return(n,a)=>(t(),s("div",null,[V,f(T,{min:0,displayUserName:!0}),S,P]))}});export{J as __pageData,O as default};
