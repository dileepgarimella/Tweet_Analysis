(this.webpackJsonptweets_search=this.webpackJsonptweets_search||[]).push([[0],{111:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(28),l=a.n(n),c=(a(89),a(67)),o=a.n(c),b=a(78),i=a(5),d=(a.p,a(91),a(92),a(126)),j=a(122),u=a(83),O=a(57),h=a(128),g=a(81),_=a(123),v=a(127),x=a(124),f=a(82),p=a(125),m=a(129),y=a(24),C=(a(68),a(35)),w=a.n(C),S=(a(111),a(1));var k=function(e){var t=Object(r.useState)(1),a=Object(i.a)(t,2),n=a[0],l=a[1],c=Object(r.useState)(5),o=Object(i.a)(c,2),b=o[0],d=(o[1],Object(r.useState)(5)),j=Object(i.a)(d,2),u=j[0],O=j[1],h=Object(r.useState)(0),g=Object(i.a)(h,2),_=g[0],v=g[1];console.log(e),s.a.useEffect((function(){console.log("hiii"),e.pagination&&(l(1),e.handlePagination())}),[]);var x=function(t){window.scrollTo(0,0),t.preventDefault(),n<e.pages&&(l(n+1),e.handlePageChange(n,1)),n+1>u&&(O(u+b),v(_+b))},f=function(t){window.scrollTo(0,0),t.preventDefault(),n>1&&(l(n-1),e.handlePageChange(n,2)),n>1&&(n-1)%b==0&&(O(u-b),v(_-b))},p=Array.from(Array(e.pages),(function(t,a){return a+1<u+1&&a+1>_?Object(S.jsx)("li",{value:a+1,id:a+1,onClick:function(t){t.preventDefault(),l(Number(t.target.id)),e.handlePageChange(Number(t.target.id),0)},className:n==a+1?"active":null,children:a+1},a):null})),m=null;e.pages>u&&(m=Object(S.jsx)("li",{onClick:x,children:"\u2026"}));var y=null;return _>1&&(y=Object(S.jsx)("li",{onClick:f,children:"\u2026"})),Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{className:"pageNumbers",children:[Object(S.jsx)("li",{children:Object(S.jsx)("button",{children:Object(S.jsx)("p",{style:{fontSize:"0.7em"},onClick:f,children:"Prev"})})}),y,p,m,Object(S.jsx)("li",{children:Object(S.jsx)("button",{children:Object(S.jsx)("p",{style:{fontSize:"0.7em"},onClick:x,children:"Next"})})})]})})};var F=function(e){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{style:{marginLeft:"20%",width:"50%",height:"70%"},children:e.Overall_POI_vs_tweet_count&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"12em"},children:"Plot for Overall POI tweets Count"}),Object(S.jsx)(y.a,{data:e.Overall_POI_vs_tweet_count})]})}),Object(S.jsx)("div",{style:{marginLeft:"30%",width:"30%"},children:e.Overall_country_vs_tweet_count&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"4em"},children:"Plot for Overall tweets per country"}),Object(S.jsx)(y.b,{data:e.Overall_country_vs_tweet_count})]})}),Object(S.jsx)("div",{style:{marginLeft:"30%",width:"30%"},children:e.Overall_language_vs_tweet_count&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"4em"},children:"Plot for Overall tweets per lanuage"}),Object(S.jsx)(y.c,{data:e.Overall_language_vs_tweet_count})]})}),Object(S.jsx)("div",{style:{marginLeft:"20%",width:"50%",height:"70%"},children:e.p_n_sentiment&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"12em"},children:"Plot for sentiment on general population tweets "}),Object(S.jsx)(y.a,{data:e.p_n_sentiment})]})}),Object(S.jsx)("div",{style:{marginLeft:"20%",width:"50%",height:"70%"},children:e.p_n_political&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"12em"},children:"Plot for sentiment on overall political rhetoric analysis "}),Object(S.jsx)(y.a,{data:e.p_n_political})]})}),Object(S.jsx)("div",{style:{marginLeft:"20%",width:"50%",height:"70%"},children:e.p_n_v_info&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"12em"},children:"Plot for sentiment on Vaccine Hesistancy "}),Object(S.jsx)(y.a,{data:e.p_n_v_info})]})}),Object(S.jsx)("div",{style:{marginLeft:"20%",width:"50%",height:"70%"},children:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"8em"},children:"Plot for sentiment on persuasion against Vaccine Hesistancy "}),e.v_hecitancy&&Object(S.jsx)(y.a,{data:e.v_hecitancy})]})})]})},P=a(79);a(113);var L=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=Object(i.a)(t,2),s=a[0],n=a[1],l=Object(r.useState)(""),c=Object(i.a)(l,2),C=c[0],L=c[1],I=Object(r.useState)(!1),W=Object(i.a)(I,2),N=W[0],A=W[1],B=Object(r.useState)(!0),R=Object(i.a)(B,2),z=R[0],D=R[1],G=Object(r.useState)(""),H=Object(i.a)(G,2),J=H[0],M=H[1],T=Object(r.useState)(""),q=Object(i.a)(T,2),K=q[0],Q=q[1],E=Object(r.useState)([]),V=Object(i.a)(E,2),X=V[0],U=V[1],Y=Object(r.useState)(1),Z=Object(i.a)(Y,2),$=(Z[0],Z[1],Object(r.useState)()),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],re=Object(r.useState)(!1),se=Object(i.a)(re,2),ne=se[0],le=se[1],ce=Object(r.useState)("POI"),oe=Object(i.a)(ce,2),be=oe[0],ie=oe[1],de=Object(r.useState)(!0),je=Object(i.a)(de,2),ue=je[0],Oe=je[1],he=Object(r.useState)([]),ge=Object(i.a)(he,2),_e=ge[0],ve=ge[1],xe=Object(r.useState)([]),fe=Object(i.a)(xe,2),pe=fe[0],me=fe[1],ye=Object(r.useState)(["#99ff99","#ff9999","#66a3ff","#800080","#FFFF00","#00FF00","#FF00FF","#FFC0CB","#FFA500","#800000","#008000","#7FFD4","#808000","#808080","#FFFFFF","#A52A2A"]),Ce=Object(i.a)(ye,2),we=Ce[0],Se=(Ce[1],Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]})),ke=Object(i.a)(Se,2),Fe=ke[0],Pe=ke[1],Le=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Ie=Object(i.a)(Le,2),We=Ie[0],Ne=Ie[1],Ae=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Be=Object(i.a)(Ae,2),Re=Be[0],ze=Be[1],De=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Ge=Object(i.a)(De,2),He=Ge[0],Je=Ge[1],Me=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Te=Object(i.a)(Me,2),qe=Te[0],Ke=Te[1],Qe=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Ee=Object(i.a)(Qe,2),Ve=Ee[0],Xe=Ee[1],Ue=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),Ye=Object(i.a)(Ue,2),Ze=Ye[0],$e=Ye[1],et=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),tt=Object(i.a)(et,2),at=tt[0],rt=tt[1],st=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),nt=Object(i.a)(st,2),lt=nt[0],ct=nt[1],ot=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),bt=Object(i.a)(ot,2),it=bt[0],dt=bt[1],jt=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),ut=Object(i.a)(jt,2),Ot=ut[0],ht=ut[1],gt=Object(r.useState)({labels:[],datasets:[{label:"",backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[]}]}),_t=Object(i.a)(gt,2),vt=(_t[0],_t[1],function(e,t){for(var a=Object.keys(e),r=Object.values(e),s=[],n=[],l=[],c=0;c<a.length;c++)r[c]>0&&(s.push(a[c]),n.push(r[c])),l.push(we[c]);if(1==t)Ke({labels:s,datasets:[{label:"Query_POI_vs_tweet_count",backgroundColor:l,borderColor:"rgba(0,0,0,1)",borderWidth:1,data:n}]});else if(2==t)$e({labels:s,datasets:[{label:"Query_country_vs_tweet_count",backgroundColor:l,borderColor:"rgba(0,0,0,1)",borderWidth:1,data:n}]});else if(4==t){var o=[];o.push(r[0]),o.push(r[2]),o.push(r[3]),console.log("dileep"),ht({labels:["postive_tweet_percentage","neutral_tweet_percentage","negative_tweet_percentage"],datasets:[{label:"Query_country_vs_tweet_count",backgroundColor:l,borderColor:"rgba(0,0,0,1)",borderWidth:1,data:o}]});var b=[];b.push(r[1]),b.push(-1*r[4]),console.log(r),Xe({labels:["sum_of_positive_sentiment","sum_of_negative_sentiment"],datasets:[{label:"Query_country_vs_tweet_count",backgroundColor:l,borderColor:"rgba(0,0,0,1)",borderWidth:1,data:b}]})}Ct()}),xt=Object(r.useState)("http://18.217.156.180:8000/search/"),ft=Object(i.a)(xt,2),pt=ft[0],mt=(ft[1],function(){var e=Object(b.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(K),e.prev=1,e.next=4,w.a.post(pt,JSON.stringify({poi_name:J,country:K,search_query:C,start:0,poi_flag:!0})).then((function(e){console.log(e);var t=e.data.response.numFound,a=Math.floor(t/10);ae(t%10==0?a:a+1),U(e.data.response.docs);for(var r=Object.keys(e.data),s=0;s<r.length;s++)"response"!=r[s]&&vt(e.data[r[s]],s)}));case 4:w.a.get("https://newsapi.org/v2/everything?q=".concat(C,"&sortBy=publishedAt&apiKey=9276436daf8a4d478fb840016f3e6d26")).then((function(e){console.log(e);var t=e.data.articles;ve(t);for(var a=[],r=0;r<10;r++)a.push(t[r]);me(a)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),Ct();case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}()),yt=function(){n(!0)},Ct=function(){n(!1)};return Object(S.jsx)("div",{children:Object(S.jsxs)(P.a,{tag:"div",blocking:s,children:[Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(S.jsxs)(j.a,{children:[Object(S.jsx)(d.a.Brand,{children:"Twitter"}),Object(S.jsxs)(u.a,{className:"me-auto",children:[Object(S.jsx)(u.a.Link,{onClick:function(){return D(!0)},children:"Home"}),Object(S.jsx)(u.a.Link,{onClick:function(){yt(),D(!1),w.a.post("http://18.217.156.180:8000/overview/",JSON.stringify({poi_name:"*",country:"",search_query:"",start:0})).then((function(e){if(console.log(e),e.data.Overall_POI_vs_tweet_count){for(var t=[],a=0;a<Object.keys(e.data.Overall_POI_vs_tweet_count).length;a++)t.push(we[a]);console.log(t),rt({labels:Object.keys(e.data.Overall_POI_vs_tweet_count),datasets:[{label:"Overall_POI_vs_tweet_count",backgroundColor:t,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:Object.values(e.data.Overall_POI_vs_tweet_count)}]})}if(e.data.Overall_country_vs_tweet_count){for(var r=[],s=0;s<Object.keys(e.data.Overall_country_vs_tweet_count).length;s++)r.push(we[s]);console.log(r),ct({labels:Object.keys(e.data.Overall_country_vs_tweet_count),datasets:[{label:"Overall_POI_vs_tweet_count",backgroundColor:r,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:Object.values(e.data.Overall_country_vs_tweet_count)}]})}if(e.data.Overall_language_vs_tweet_count){for(var n=[],l=0;l<Object.keys(e.data.Overall_language_vs_tweet_count).length;l++)n.push(we[l]);console.log(n),dt({labels:Object.keys(e.data.Overall_language_vs_tweet_count),datasets:[{label:"Overall_country_vs_tweet_count",backgroundColor:n,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:Object.values(e.data.Overall_language_vs_tweet_count)}]})}if(e.data.Overall_insights){for(var c=Object.keys(e.data.Overall_insights),o=Object.values(e.data.Overall_insights),b=[],i=0;i<2;i++)b.push(we[i]);var d=[];d.push(c[0]),d.push(c[1]);var j=[];j.push(o[0]),j.push(o[1]);var u=[];u.push(c[2]),u.push(c[3]);var O=[];O.push(o[2]),O.push(o[3]);var h=[];h.push(c[4]),h.push(c[5]);var g=[];g.push(o[4]),g.push(o[5]);var _=[];_.push(c[5]),_.push(c[6]);var v=[];v.push(o[5]),v.push(o[6]),Pe({labels:d,datasets:[{label:"overall sentiment analysis",backgroundColor:b,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:j}]}),Ne({labels:u,datasets:[{label:"overall policatal rhetoric analysis",backgroundColor:b,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:O}]}),ze({labels:h,datasets:[{label:"overall vaccine disinfo analysis",backgroundColor:b,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:g}]}),Je({labels:_,datasets:[{label:"overall Persuation against vaccine disinfo analysis",backgroundColor:b,borderColor:"rgba(0,0,0,1)",borderWidth:2,data:v}]})}Ct()}))},children:"Overview Analytics"})]})]})})}),z&&Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:N?"top-screen":"center-screen",children:Object(S.jsxs)(O.a,{style:{width:"90%",display:"flex",marginLeft:"5em",marginTop:"1em"},children:[Object(S.jsx)(h.a,{style:{width:N?"30%":"80%",height:"70%"},children:Object(S.jsx)(g.a,{value:C,placeholder:"Search","aria-label":"keyword","aria-describedby":"basic-addon1",onChange:function(e){L(e.target.value)}})}),Object(S.jsx)(_.a,{style:{marginLeft:"10px",width:"6em",height:"2.4em"},disabled:""==C,onClick:function(){console.log(e.current),N&&le(!0),yt(),A(!0),mt()},children:"Search"}),N&&Object(S.jsxs)("div",{style:{display:"flex",marginLeft:"6%"},children:[Object(S.jsxs)(v.a.Group,{style:{display:"flex"},children:[Object(S.jsx)(v.a.Label,{children:"POI"}),Object(S.jsxs)(v.a.Select,{value:J,onChange:function(e){return M(e.target.value)},style:{marginLeft:"0.5em",width:"11em",marginRight:"0.5em"},children:[Object(S.jsx)("option",{value:"",children:"Choose..."}),["narendramodi","drharshvardhan","MoHFW_INDIA","ysjagan","smritiirani","HHSGov","JoeBiden","KamalaHarris","XavierBecerra","GavinNewsom","lopezobrador_","SSaludCdMx","SSalud_mx","SecSaludBAQ","MartinOrozcoAgs"].map((function(e,t){return Object(S.jsx)("option",{value:e,children:e},t)}))]})]}),Object(S.jsxs)(v.a.Group,{style:{display:"flex"},children:[Object(S.jsx)(v.a.Label,{children:"Country"}),Object(S.jsxs)(v.a.Select,{value:K,onChange:function(e){return Q(e.target.value)},style:{marginLeft:"0.5em",width:"11em",marginRight:"0.5em"},children:[Object(S.jsx)("option",{value:"",children:"Choose..."}),["USA","INDIA","MEXICO"].map((function(e,t){return Object(S.jsx)("option",{value:e,children:e},t)}))]})]})]})]})}),N&&Object(S.jsx)(j.a,{children:Object(S.jsxs)(x.a,{children:[Object(S.jsxs)(f.a,{xs:4,sm:4,children:[Object(S.jsx)("b",{children:"Tweets Search Results"}),Object(S.jsx)("hr",{}),Object(S.jsxs)(p.a,{id:"controlled-tab-example",activeKey:be,onSelect:function(e){ie(e),console.log(e),"POI"==e?(yt(),Oe(!0),mt()):"General"==e&&(yt(),Oe(!1),console.log(ue),w.a.post(pt,JSON.stringify({poi_name:J,country:K,search_query:C,start:0,poi_flag:!1})).then((function(e){console.log(e);var t=e.data.response.numFound,a=Math.floor(t/10);ae(t%10==0?a:a+1),U(e.data.response.docs);for(var r=Object.keys(e.data),s=0;s<r.length;s++)"response"!=r[s]&&vt(e.data[r[s]],s)})))},className:"mb-3",children:[Object(S.jsx)(m.a,{eventKey:"POI",title:"POI Results"}),Object(S.jsx)(m.a,{eventKey:"General",title:"General Results"})]}),X.length>0&&X.map((function(e,t){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:e.poi_name},t)," ",Object(S.jsx)("br",{}),Object(S.jsx)("p",{style:{fontSize:"0.8em"},children:e.tweet_text}),Object(S.jsxs)("p",{style:{fontSize:"0.8em"},children:["Sentiment: ",e.sentiment]})]},t)})})),X.length>0&&Object(S.jsx)(k,{pages:te,handlePageChange:function(e,t){yt();var a=0;0==t?a=e-1:1==t?a=e:2==t&&(a=e-2),w.a.post(pt,JSON.stringify({poi_name:J,country:K,search_query:C,start:10*a,poi_flag:ue})).then((function(e){U(e.data.response.docs),Ct(),vt(e.data.query_sentiment_analysis,4)}))},pagination:ne,handlePagination:function(){le(!1)},ref:e})]}),Object(S.jsxs)(f.a,{xs:4,sm:4,children:[Object(S.jsx)("b",{children:"News Search Results"}),Object(S.jsx)("hr",{}),_e&&pe.map((function(e,t){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("p",{children:[Object(S.jsx)("b",{children:"@"+e.source.name},t)," ",Object(S.jsx)("br",{}),Object(S.jsx)("p",{style:{fontSize:"0.8em"},children:e.content})]},t)})}))]}),Object(S.jsxs)(f.a,{xs:4,sm:4,children:[Object(S.jsx)("b",{children:" Search Results Analysis"}),Object(S.jsx)("hr",{}),X.length>0&&ue&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"5em"},children:"Plot for POI tweets Count"}),Object(S.jsx)(y.a,{data:qe})]}),X.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"5em"},children:"Plot for Country wise tweet Count"}),Object(S.jsx)(y.a,{data:Ze})]}),X.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"5em"},children:"Plot for tweet sentiment "}),Object(S.jsx)(y.c,{data:Ot})]}),X.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("b",{style:{marginLeft:"1em"},children:"Plot for sum of overall tweet sentiment"}),Object(S.jsx)(y.a,{data:Ve})]})]})]})})]}),!z&&Object(S.jsx)("div",{children:Object(S.jsx)(F,{Overall_POI_vs_tweet_count:at,Overall_country_vs_tweet_count:lt,Overall_language_vs_tweet_count:it,v_hecitancy:He,p_n_v_info:Re,p_n_political:We,p_n_sentiment:Fe})})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),r(e),s(e),n(e),l(e)}))};l.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),I()},89:function(e,t,a){},91:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.3e057923.chunk.js.map