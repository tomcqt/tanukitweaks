(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1304:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t(2),o=t(7),c=t(39),r=t(82),n=t(117),d=t(11),l=t(65),g=t.n(l),u=t(19),h=t(149),b=t(15),m=t(126),f=t(246),p=t(12),O=t(5),j=t(57),_=t(84),M=t(175),v=t(259),x=t(260),w=t(35),C=t(146),N=t(1),S=t.n(N),W=t(20),L=t(16),y=t.n(L),F=t(18),I=t(248),z=t(1163),k=t(151),T=t(448),P=t(206),H=t(4);const A=10,B=e=>e.size>A&&e.size%A==1?e.skipLast(1):e;class q extends F.a{constructor(){super(...arguments),this.handleLoadMoreAccounts=()=>this.props.expandSearch("accounts"),this.handleLoadMoreStatuses=()=>this.props.expandSearch("statuses"),this.handleLoadMoreHashtags=()=>this.props.expandSearch("hashtags")}render(){const{results:e}=this.props;let a,t,i;return e.get("accounts")&&e.get("accounts").size>0&&(a=Object(s.a)(z.a,{title:Object(H.jsxs)(H.Fragment,{children:[Object(s.a)(b.a,{id:"users",fixedWidth:!0}),Object(s.a)(W.a,{id:"search_results.accounts",defaultMessage:"Profiles"})]})},void 0,B(e.get("accounts")).map((e=>Object(s.a)(T.a,{id:e},e))),e.get("accounts").size>A&&e.get("accounts").size%A==1&&Object(s.a)(I.a,{visible:!0,onClick:this.handleLoadMoreAccounts}))),e.get("hashtags")&&e.get("hashtags").size>0&&(i=Object(s.a)(z.a,{title:Object(H.jsxs)(H.Fragment,{children:[Object(s.a)(b.a,{id:"hashtag",fixedWidth:!0}),Object(s.a)(W.a,{id:"search_results.hashtags",defaultMessage:"Hashtags"})]})},void 0,B(e.get("hashtags")).map((e=>Object(s.a)(k.a,{hashtag:e},e.get("name")))),e.get("hashtags").size>A&&e.get("hashtags").size%A==1&&Object(s.a)(I.a,{visible:!0,onClick:this.handleLoadMoreHashtags}))),e.get("statuses")&&e.get("statuses").size>0&&(t=Object(s.a)(z.a,{title:Object(H.jsxs)(H.Fragment,{children:[Object(s.a)(b.a,{id:"quote-right",fixedWidth:!0}),Object(s.a)(W.a,{id:"search_results.statuses",defaultMessage:"Posts"})]})},void 0,B(e.get("statuses")).map((e=>Object(s.a)(P.a,{id:e},e))),e.get("statuses").size>A&&e.get("statuses").size%A==1&&Object(s.a)(I.a,{visible:!0,onClick:this.handleLoadMoreStatuses}))),Object(s.a)("div",{className:"search-results"},void 0,Object(s.a)("div",{className:"search-results__header"},void 0,Object(s.a)(b.a,{id:"search",fixedWidth:!0}),Object(s.a)(W.a,{id:"explore.search_results",defaultMessage:"Search results"})),a,i,t)}}q.propTypes={results:y.a.map.isRequired,expandSearch:S.a.func.isRequired,searchTerm:S.a.string};var D=q;var R=Object(d.connect)((e=>({results:e.getIn(["search","results"]),suggestions:e.getIn(["suggestions","items"]),searchTerm:e.getIn(["search","searchTerm"])})),(e=>({fetchSuggestions:()=>e(Object(C.f)()),expandSearch:a=>e(Object(w.n)(a)),dismissSuggestion:a=>e(Object(C.e)(a.get("id")))})))(D);const U=Object(o.d)({start:{id:"getting_started.heading",defaultMessage:"Getting started"},home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},community:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},logout:{id:"navigation_bar.logout",defaultMessage:"Logout"},compose:{id:"navigation_bar.compose",defaultMessage:"Compose new post"},logoutMessage:{id:"confirmations.logout.message",defaultMessage:"Are you sure you want to log out?"},logoutConfirm:{id:"confirmations.logout.confirm",defaultMessage:"Log out"}});class J extends i.PureComponent{constructor(){super(...arguments),this.handleLogoutClick=e=>{const{dispatch:a,intl:t}=this.props;return e.preventDefault(),e.stopPropagation(),a(Object(u.b)({modalType:"CONFIRM",modalProps:{message:t.formatMessage(U.logoutMessage),confirm:t.formatMessage(U.logoutConfirm),closeWhenConfirm:!1,onConfirm:()=>Object(m.a)()}})),!1},this.onFocus=()=>{this.props.dispatch(Object(p.fb)(!0))},this.onBlur=()=>{this.props.dispatch(Object(p.fb)(!1))}}componentDidMount(){const{dispatch:e}=this.props;e(Object(p.sb)())}componentWillUnmount(){const{dispatch:e}=this.props;e(Object(p.Db)())}render(){const{multiColumn:e,showSearch:a,intl:t}=this.props;if(e){const{columns:i}=this.props;return Object(s.a)("div",{className:"drawer",role:"region","aria-label":t.formatMessage(U.compose)},void 0,Object(s.a)("nav",{className:"drawer__header"},void 0,Object(s.a)(n.a,{to:"/getting-started",className:"drawer__tab",title:t.formatMessage(U.start),"aria-label":t.formatMessage(U.start)},void 0,Object(s.a)(b.a,{id:"bars",fixedWidth:!0})),!i.some((e=>"HOME"===e.get("id")))&&Object(s.a)(n.a,{to:"/home",className:"drawer__tab",title:t.formatMessage(U.home_timeline),"aria-label":t.formatMessage(U.home_timeline)},void 0,Object(s.a)(b.a,{id:"home",fixedWidth:!0})),!i.some((e=>"NOTIFICATIONS"===e.get("id")))&&Object(s.a)(n.a,{to:"/notifications",className:"drawer__tab",title:t.formatMessage(U.notifications),"aria-label":t.formatMessage(U.notifications)},void 0,Object(s.a)(b.a,{id:"bell",fixedWidth:!0})),!i.some((e=>"COMMUNITY"===e.get("id")))&&Object(s.a)(n.a,{to:"/public/local",className:"drawer__tab",title:t.formatMessage(U.community),"aria-label":t.formatMessage(U.community)},void 0,Object(s.a)(b.a,{id:"users",fixedWidth:!0})),!i.some((e=>"PUBLIC"===e.get("id")))&&Object(s.a)(n.a,{to:"/public",className:"drawer__tab",title:t.formatMessage(U.public),"aria-label":t.formatMessage(U.public)},void 0,Object(s.a)(b.a,{id:"globe",fixedWidth:!0})),Object(s.a)("a",{href:"/settings/preferences",className:"drawer__tab",title:t.formatMessage(U.preferences),"aria-label":t.formatMessage(U.preferences)},void 0,Object(s.a)(b.a,{id:"cog",fixedWidth:!0})),Object(s.a)("a",{href:"/auth/sign_out",className:"drawer__tab",title:t.formatMessage(U.logout),"aria-label":t.formatMessage(U.logout),onClick:this.handleLogoutClick},void 0,Object(s.a)(b.a,{id:"sign-out",fixedWidth:!0}))),e&&Object(s.a)(x.a,{}),Object(s.a)("div",{className:"drawer__pager"},void 0,Object(s.a)("div",{className:"drawer__inner",onFocus:this.onFocus},void 0,Object(s.a)(v.a,{onClose:this.onBlur}),Object(s.a)(M.a,{autoFocus:!Object(j.a)(window.innerWidth)}),Object(s.a)("div",{className:"drawer__inner__mastodon"},void 0,Object(s.a)("img",{alt:"",draggable:"false",src:O.n||f.default}))),Object(s.a)(_.a,{defaultStyle:{x:-100},style:{x:g()(a?0:-100,{stiffness:210,damping:20})}},void 0,(e=>{let{x:a}=e;return Object(s.a)("div",{className:"drawer__inner darker",style:{transform:`translateX(${a}%)`,visibility:-100===a?"hidden":"visible"}},void 0,Object(s.a)(R,{}))}))))}return Object(s.a)(h.a,{onFocus:this.onFocus},void 0,Object(s.a)(v.a,{onClose:this.onBlur}),Object(s.a)(M.a,{}),Object(s.a)(r.a,{},void 0,Object(s.a)("meta",{name:"robots",content:"noindex"})))}}a.default=Object(d.connect)(((e,a)=>({columns:e.getIn(["settings","columns"]),showSearch:!!a.multiColumn&&(e.getIn(["search","submitted"])&&!e.getIn(["search","hidden"]))})))(Object(c.c)(J))}}]);
//# sourceMappingURL=compose-2b869c7a07a4327050c2.chunk.js.map