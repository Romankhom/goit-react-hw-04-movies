(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(33),r=n(34),i=n(36),c=n(35),s=n(37),u=n(0),o=n.n(u),l=n(32),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={reviews:[]},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(l.b)(t).then((function(t){return e.setState({reviews:t.results})}))}},{key:"render",value:function(){var e=this.state.reviews;return o.a.createElement("div",null,o.a.createElement("h1",null,"Reviews"),o.a.createElement("ul",null,e.map((function(e){return o.a.createElement("li",{key:e.id},e.content)}))))}}]),t}(u.Component)}}]);
//# sourceMappingURL=reviews-page.26694ae2.chunk.js.map