(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1176:function(s,t,e){"use strict";e.r(t);var n=e(0),o=e(1),i=e.n(o),a=e(7),c=e(39),d=e(82),u=e(16),r=e.n(u),l=e(18),p=e(11),b=e(36),h=e(365),m=e(1157),j=e(244),O=e(1147),f=e(4);const M=Object(a.d)({heading:{id:"column.pins",defaultMessage:"Pinned post"}});class g extends l.a{constructor(){super(...arguments),this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=s=>{this.column=s}}UNSAFE_componentWillMount(){this.props.dispatch(Object(h.b)())}render(){const{intl:s,statusIds:t,hasMore:e,multiColumn:o}=this.props;return Object(f.jsxs)(O.a,{bindToDocument:!o,icon:"thumb-tack",heading:s.formatMessage(M.heading),ref:this.setRef,children:[Object(n.a)(m.a,{}),Object(n.a)(j.a,{statusIds:t,scrollKey:"pinned_statuses",hasMore:e,bindToDocument:!o}),Object(n.a)(d.a,{},void 0,Object(n.a)("meta",{name:"robots",content:"noindex"}))]})}}g.propTypes={dispatch:i.a.func.isRequired,statusIds:r.a.list.isRequired,intl:i.a.object.isRequired,hasMore:i.a.bool.isRequired,multiColumn:i.a.bool},t.default=Object(p.connect)((s=>({statusIds:Object(b.d)(s,"pins"),hasMore:!!s.getIn(["status_lists","pins","next"])})))(Object(c.c)(g))}}]);
//# sourceMappingURL=pinned_statuses-0d7f34d549b0541ef7de.chunk.js.map