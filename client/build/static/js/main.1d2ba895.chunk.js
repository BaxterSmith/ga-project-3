(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(75)},46:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(46),a(9)),i=a(10),u=a(13),m=a(11),s=a(14),d=a(3),h=a(15),f=a(4),p=a(16),E=a.n(p),v=a(21),g=a(22),b=a(5),C=a(12),y=a.n(C);function w(){var e=Object(f.a)(["\n    background: #33ccff;\n    text-align: center;\n    color: #333;\n    padding: 5px;\n"]);return w=function(){return e},e}var O=b.a.div(w()),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{skillLevel:"",category:"",question:"",answer:"",name:"",age:""},redirectToHome:!1},a.handleChange=function(e){var t=Object(g.a)({},a.state.formData);t[e.target.name]=e.target.value,a.setState({formData:t})},a.handleSubmit=function(){var e=Object(v.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y.a.post("/",a.state.formData);case 3:a.setState({redirectToHome:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirectToHome?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(O,null,r.a.createElement("h1",null,"Musi-Cards!"),r.a.createElement("h2",null,"Create Flash Card"),r.a.createElement("form",{action:"/",method:"POST",onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{for:"skillLevel"},"Skill Level"),r.a.createElement("input",{type:"text",name:"skillLevel",id:"skillLevel",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",id:"category",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"question"},"Question"),r.a.createElement("textarea",{rows:"10",cols:"30",name:"question",id:"question",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"answer"},"Answer"),r.a.createElement("input",{type:"text",name:"answer",id:"answer",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"name"},"Your Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"age"},"Your Age"),r.a.createElement("input",{type:"number",name:"age",id:"age",onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Add Card"})),r.a.createElement(d.b,{to:"/"},"Back to Home"),r.a.createElement("p",null,"Copyright 2019 Baxter Smith")))}}]),t}(n.Component);function k(){var e=Object(f.a)(["\n    background-color: #ffffcc;\n    border: 1px solid #0000ff;\n    padding: 10px;\n    width: 50%;\n    margin: 0 auto;\n"]);return k=function(){return e},e}function x(){var e=Object(f.a)(["\n    list-style-type: none;\n    margin: 0 auto;\n"]);return x=function(){return e},e}function S(){var e=Object(f.a)(["\n    background: #33ccff;\n    text-align: center;\n    color: #333;\n    padding: 5px;\n"]);return S=function(){return e},e}var D=b.a.div(S()),L=b.a.ul(x()),q=b.a.li(k()),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cards:[{}]},a.componentDidMount=function(){y.a.get("/cards").then(function(e){a.setState({cards:e.data})})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null,r.a.createElement("h1",null,"Musi-Cards!"),r.a.createElement(d.b,{to:"/new"},"Create New Card"),r.a.createElement("ul",null,r.a.createElement(L,null,this.state.cards.map(function(e){return r.a.createElement("li",null,r.a.createElement(q,null,r.a.createElement(d.b,{to:"/".concat(e._id)},e.question),r.a.createElement("br",null),"Skill Level ",e.skillLevel))}))),r.a.createElement("p",null,"Copyright 2019 Baxter Smith")))}}]),t}(n.Component);function B(){var e=Object(f.a)(["\n    background-color: #ffffcc;\n    border: 1px solid #0000ff;\n    padding: 10px;\n    width: 50%;\n    margin: 0 auto;\n"]);return B=function(){return e},e}function T(){var e=Object(f.a)(["\n    background: #33ccff;\n    text-align: center;\n    color: #333;\n    padding: 5px;\n"]);return T=function(){return e},e}var M=b.a.div(T()),H=b.a.div(B()),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={card:{}},a.componentDidMount=function(){y.a.get("/".concat(a.props.match.params.cardId)).then(function(e){a.setState({card:e.data})})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement("h1",null,"Musi-Cards!"),r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("p",null,"Skill Level: ",this.state.card.skillLevel),r.a.createElement("p",null,"Category: ",this.state.card.category),r.a.createElement("p",null,"Question: ",this.state.card.question),r.a.createElement("p",null,"Answer: ",this.state.card.answer))),r.a.createElement("a",{href:"/".concat(this.state.card._id,"/edit")},"Edit Card"),r.a.createElement("form",{action:"/".concat(this.state.card._id,"?_method=DELETE"),method:"POST"},r.a.createElement("input",{type:"submit",value:"Delete Card"})),r.a.createElement(d.b,{to:"/"},"Back to Home"),r.a.createElement("p",null,"Copyright 2019 Baxter Smith")))}}]),t}(n.Component);function I(){var e=Object(f.a)(["\n    background: #33ccff;\n    text-align: center;\n    color: #333;\n    padding: 5px;\n"]);return I=function(){return e},e}var Q=b.a.div(I()),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{skillLevel:"",category:"",question:"",answer:"",name:"",age:""},card:{},redirectToCard:!1},a.componentDidMount=function(){y.a.get("/".concat(a.props.match.params.cardId)).then(function(e){a.setState({formData:e.data})})},a.handleChange=function(e){var t=Object(g.a)({},a.state.formData);t[e.target.name]=e.target.value,a.setState({formData:t})},a.handleSubmit=function(){var e=Object(v.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y.a.put("/".concat(a.state.formData._id),a.state.formData);case 3:a.setState({redirectToCard:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirectToCard?r.a.createElement(h.a,{to:"/".concat(this.state.formData._id)}):r.a.createElement("div",null,r.a.createElement(Q,null,r.a.createElement("h1",null,"Musi-Cards!"),r.a.createElement("h2",null,"Edit Flash Card"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{for:"skillLevel"},"Skill Level"),r.a.createElement("input",{type:"text",name:"skillLevel",id:"skillLevel",value:this.state.formData.skillLevel,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",id:"category",value:this.state.formData.category,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"question"},"Question"),r.a.createElement("textarea",{rows:"10",cols:"30",name:"question",id:"question",value:this.state.formData.question,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{for:"answer"},"Answer"),r.a.createElement("input",{type:"text",name:"answer",id:"answer",value:this.state.formData.answer,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Update Card"})),r.a.createElement(d.b,{to:"/"},"Back to Home"),r.a.createElement("p",null,"Copyright 2019 Baxter Smith")))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:A}),r.a.createElement(h.b,{path:"/new",component:j}),r.a.createElement(h.b,{path:"/:cardId/edit",component:F}),r.a.createElement(h.b,{path:"/:cardId",component:_})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.1d2ba895.chunk.js.map