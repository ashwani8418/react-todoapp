(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),a=n(8),r=n.n(a),s=(n(17),n(5)),d=n(3);var u=function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),i=n[0],a=n[1],r=Object(c.useRef)(null);Object(c.useEffect)((function(){r.current.focus()}));var s=function(t){a(t.target.value)},u=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")};return Object(o.jsx)("form",{onSubmit:u,className:"todo-form",children:t.edit?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Update your item",value:i,onChange:s,name:"text",ref:r,className:"todo-input edit"}),Object(o.jsx)("button",{onClick:u,className:"todo-button edit",children:"Update"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Add an item",value:i,onChange:s,name:"text",className:"todo-input",ref:r}),Object(o.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},l=n(10),j=n(9),b=n(11),m=function(t){var e=t.todos,n=t.completeTodo,i=t.removeTodo,a=t.updateTodo,r=t.markAsDone,s=Object(c.useState)({id:null,value:""}),m=Object(d.a)(s,2),f=m[0],p=m[1];return f.id?Object(o.jsx)(u,{edit:f,onSubmit:function(t){a(f.id,t),p({id:null,value:""})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[t.isEditable?Object(o.jsx)(j.a,{onClick:function(){return p({id:t.id,value:t.text})},className:"edit-icon"}):void 0,Object(o.jsx)(l.a,{onClick:function(){return i(t.id)},className:"delete-icon"}),Object(o.jsx)(b.a,{onClick:function(){return r(e)},className:"mark-done"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Todo App"}),Object(o.jsx)(u,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){t.isEditable=!0,t.isDone=!1;var o=[t].concat(Object(s.a)(n));i(o),(e=console).log.apply(e,Object(s.a)(n))}}}),Object(o.jsx)(m,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(s.a)(n).filter((function(e){return e.id!==t}));i(e)},markAsDone:function(t){var e=Object(s.a)(n);e[t].isDone=!0,e[t].isEditable=!1,i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t&&(n.text=e.text),n}))}))}})]})};var p=function(){return Object(o.jsx)("div",{className:"todo-app",children:Object(o.jsx)(f,{})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a7e593f0.chunk.js.map