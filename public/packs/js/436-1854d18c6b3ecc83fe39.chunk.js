(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{890:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var a=s(0),i=s(2),r=s(20),n=s(9),o=s.n(n),d=s(6),c=s(151);class u extends i.PureComponent{constructor(){super(...arguments),this.state={loading:!0,data:null}}componentDidMount(){const{limit:e}=this.props;Object(d.a)().get("/api/v1/admin/trends/tags",{params:{limit:e}}).then((e=>{this.setState({loading:!1,data:e.data})})).catch((e=>{console.error(e)}))}render(){const{limit:e}=this.props,{loading:t,data:s}=this.state;let i;return i=t?Object(a.a)("div",{},void 0,Array.from(Array(e)).map(((e,t)=>Object(a.a)(c.c,{},t)))):Object(a.a)("div",{},void 0,s.map((e=>Object(a.a)(c.c,{name:e.name,to:void 0===e.id?void 0:`/admin/tags/${e.id}`,people:1*e.history[0].accounts+1*e.history[1].accounts,uses:1*e.history[0].uses+1*e.history[1].uses,history:e.history.reverse().map((e=>e.uses)),className:o()(e.requires_review&&"trends__item--requires-review",!e.trendable&&!e.requires_review&&"trends__item--disabled")},e.name)))),Object(a.a)("div",{className:"trends trends--compact"},void 0,Object(a.a)("h4",{},void 0,Object(a.a)(r.a,{id:"trends.trending_now",defaultMessage:"Trending now"})),i)}}}}]);
//# sourceMappingURL=436-1854d18c6b3ecc83fe39.chunk.js.map