(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1171:function(e,t,a){"use strict";a.r(t);var c=a(0),o=a(2),i=a(7),l=a(20),n=a(80),s=a(82),b=a(137),d=a(38),m=a(243),r=a(21),u=a(1154),O=a(5),j=a(52),y=a(149),M=a(240),g=a(1155),f=a(1156),h=a(4);const p=Object(i.d)({title:{id:"column.firehose",defaultMessage:"Live feeds"}}),k=()=>{const e=Object(j.b)(),t=Object(j.c)((e=>e.getIn(["settings","firehose"]))),a=Object(o.useCallback)(((t,a)=>e(Object(d.c)(["firehose",...t],a))),[e]);return Object(c.a)("div",{},void 0,Object(c.a)("div",{className:"column-settings__row"},void 0,Object(c.a)(g.a,{settings:t,settingPath:["onlyMedia"],onChange:a,label:Object(c.a)(l.a,{id:"community.column_settings.media_only",defaultMessage:"Media only"})})))};t.default=e=>{let{feedType:t,multiColumn:a}=e;const i=Object(j.b)(),d=Object(n.a)(),{signedIn:g}={signedIn:!!O.d.meta.me,accountId:O.d.meta.me,disabledAccountId:O.d.meta.disabled_account_id,accessToken:O.d.meta.access_token,permissions:O.d.role?O.d.role.permissions:0},w=Object(o.useRef)(null),v=Object(j.c)((e=>e.getIn(["settings","firehose","onlyMedia"],!1))),I=Object(j.c)((e=>e.getIn(["timelines",`${t}${v?":media":""}`,"unread"],0)>0)),C=Object(o.useCallback)((()=>{switch(t){case"community":i(Object(b.e)("COMMUNITY",{other:{onlyMedia:v}}));break;case"public":i(Object(b.e)("PUBLIC",{other:{onlyMedia:v}}));break;case"public:remote":i(Object(b.e)("REMOTE",{other:{onlyMedia:v,onlyRemote:!0}}))}}),[i,v,t]),T=Object(o.useCallback)((e=>{switch(t){case"community":i(Object(r.s)({maxId:e,onlyMedia:v}));break;case"public":i(Object(r.w)({maxId:e,onlyMedia:v}));break;case"public:remote":i(Object(r.w)({maxId:e,onlyMedia:v,onlyRemote:!0}))}}),[i,v,t]),_=Object(o.useCallback)((()=>{var e;return null==(e=w.current)?void 0:e.scrollTop()}),[]);Object(o.useEffect)((()=>{let e;switch(t){case"community":i(Object(r.s)({onlyMedia:v})),g&&(e=i(Object(m.a)({onlyMedia:v})));break;case"public":i(Object(r.w)({onlyMedia:v})),g&&(e=i(Object(m.e)({onlyMedia:v})));break;case"public:remote":i(Object(r.w)({onlyMedia:v,onlyRemote:!0})),g&&(e=i(Object(m.e)({onlyMedia:v,onlyRemote:!0})))}return()=>null==e?void 0:e()}),[i,g,t,v]);u.a,l.a,O.i;const R="community"===t?Object(c.a)(l.a,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"}):Object(c.a)(l.a,{id:"empty_column.public",defaultMessage:"There is nothing here! Write something publicly, or manually follow users from other servers to fill it up"});return Object(h.jsxs)(y.a,{bindToDocument:!a,ref:w,label:d.formatMessage(p.title),children:[Object(c.a)(M.a,{icon:"globe",active:I,title:d.formatMessage(p.title),onPin:C,onClick:_,multiColumn:a},void 0,Object(c.a)(k,{})),Object(c.a)(f.a,{timelineId:`${t}${v?":media":""}`,onLoadMore:T,trackScroll:!0,scrollKey:"firehose",emptyMessage:R,bindToDocument:!a}),Object(c.a)(s.a,{},void 0,Object(c.a)("title",{},void 0,d.formatMessage(p.title)),Object(c.a)("meta",{name:"robots",content:"noindex"}))]})}}}]);
//# sourceMappingURL=firehose-b6e2b24b2731a02f3ea6.chunk.js.map