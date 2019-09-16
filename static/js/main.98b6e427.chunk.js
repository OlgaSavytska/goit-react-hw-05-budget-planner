(window["webpackJsonpgoit-react-hw-05-budget-planner"]=window["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{29:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12),u=t(8),c=t.n(u),i=t(1),l=t(2),s=t(9),p=t(10),d=t(13),b=t(11),m=t(14);function f(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return f=function(){return e},e}var g=l.a.form(f()),v=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,r=e.children;return a.a.createElement(g,{onSubmit:t},r)};function x(){var e=Object(i.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return x=function(){return e},e}var h=l.a.label(x(),(function(e){return e.customStyles})),E=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(h,{customStyles:t},n)};function y(){var e=Object(i.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return y=function(){return e},e}var O=l.a.input(y()),j=function(e){var n=e.type,t=void 0===n?" text":n,r=e.value,o=void 0===r?"":r,u=e.onChange,c=void 0===u?function(){return null}:u,i=e.name,l=void 0===i?"":i;return a.a.createElement(O,{type:t,value:o,onChange:c,name:l})};function S(){var e=Object(i.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return S=function(){return e},e}var w=l.a.button(S()),C=function(e){var n=e.type,t=void 0===n?"button":n,r=e.label,o=void 0===r?"":r,u=e.onClick,c=void 0===u?function(){return null}:u;return a.a.createElement(w,{type:t,onClick:c},o)},P=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(a)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(v,{onSubmit:this.handleSubmit},a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",a.a.createElement(j,{type:"number",value:this.state.budget,onChange:this.handleChange})),a.a.createElement(C,{label:"Save",type:"submit"}))}}]),n}(r.Component),k=t(19),D=t(24),B=t.n(D);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var A=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(a)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(k.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(t,!0).forEach((function(n){Object(k.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t.state,{id:B.a.generate()})),t.setState({name:"",amount:0})},t}return Object(m.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(v,{onSubmit:this.handleSubmit},a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",a.a.createElement(j,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),a.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",a.a.createElement(j,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),a.a.createElement(C,{label:"Add",type:"submit"}))}}]),n}(r.Component);function z(){var e=Object(i.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return z=function(){return e},e}var R=l.a.table(z()),_=function(e){var n=e.items,t=void 0===n?[]:n,r=e.onRemove;return a.a.createElement(R,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,t.map((function(e){var n=e.id,t=e.name,o=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t),a.a.createElement("td",null,o),a.a.createElement("td",null,a.a.createElement(C,{label:"Delete",onClick:function(){return r(n)}})))}))))};function F(){var e=Object(i.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return F=function(){return e},e}function J(){var e=Object(i.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return J=function(){return e},e}function L(){var e=Object(i.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return L=function(){return e},e}var T=l.a.div(L(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),V=l.a.p(J()),X=l.a.p(F()),G=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(T,{isPositive:r},a.a.createElement(V,null,n),a.a.createElement(X,null,t,"\xa0$"))};function I(){var e=Object(i.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return I=function(){return e},e}var M=l.a.section(I()),U=function(e){var n=e.budget,t=e.expenses,r=e.balance;return a.a.createElement(M,null,a.a.createElement(G,{label:"Budget",value:n,isPositive:!0}),a.a.createElement(G,{label:"Expenses",value:t}),a.a.createElement(G,{label:"Balance",value:r,isPositive:r>=0}))},$=function(e){return Number(e.budget)},q=function(e){return e.expenses},H=function(e){return q(e).reduce((function(e,n){return e+Number(n.amount)}),0)},K=function(e){var n=$(e),t=H(e);return Number(n)-Number(t)},Q=function(e){return q(e).length},W="SAVE_BUDGET",Y="ADD_EXPENCE",Z="REMOVE_EXPENSE";function ee(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return ee=function(){return e},e}var ne=l.a.div(ee()),te=Object(o.b)((function(e){return{budget:$(e),totalExpenses:H(e),expenses:q(e),balance:K(e),expensesLength:Q(e)}}),(function(e){return{saveBudget:function(n){return e(function(e){return{type:W,payload:{budget:e}}}(n))},addExpense:function(n){return e({type:Y,payload:{expenseObject:n}})},removeExpence:function(n){return e(function(e){return{type:Z,payload:{id:e}}}(n))}}}))((function(e){var n=e.budget,t=e.expenses,r=e.balance,o=e.expensesLength,u=e.totalExpenses,c=e.saveBudget,i=e.addExpense,l=e.removeExpence;return a.a.createElement(ne,null,a.a.createElement(P,{onSave:c}),a.a.createElement(U,{budget:n,expenses:u,balance:r}),a.a.createElement(A,{onSave:i}),o>0&&a.a.createElement(_,{items:t,onRemove:l}))})),re=(t(48),t(6)),ae=t(25),oe=t(26),ue=Object(re.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W:return n.payload.budget;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case Y:return[r.expenseObject].concat(Object(oe.a)(e));case Z:return e.filter((function(e){return e.id!==r.id}));default:return e}}}),ce=Object(re.createStore)(ue,Object(ae.devToolsEnhancer)());c.a.render(a.a.createElement(o.a,{store:ce},a.a.createElement(te,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.98b6e427.chunk.js.map