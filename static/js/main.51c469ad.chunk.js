(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=a(7),m=a(1),i=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return c.a.createElement("h1",null,"Home page here")},s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tab is here"),i.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.id},c.a.createElement(o.b,{to:"/tabs/".concat(e.id)},e.title))})),c.a.createElement(m.c,null,i.map((function(e){return c.a.createElement(m.a,{path:"/tabs/".concat(e.id),render:function(){return c.a.createElement("p",null,e.content)},key:e.id})}))))},b=(a(26),function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Tabs with router"),c.a.createElement(o.b,{to:"/",exact:!0,activeClassName:"active"},"Home"),c.a.createElement(o.b,{to:"/tabs",exact:!0,activeClassName:"active"},"Tabs"),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:u}),c.a.createElement(m.a,{path:"/tabs",component:s}))))});l.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.51c469ad.chunk.js.map