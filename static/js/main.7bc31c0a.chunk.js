(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(33)},29:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(18),m=t.n(r),l=t(15),c=t(19),i=t(35),s=t(36);t(29);var p=function(){return o.a.createElement("div",{className:"app__img-wrapper"},o.a.createElement("img",{className:"app__image",src:"https://images.unsplash.com/photo-1550852355-d04aff81523b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",alt:""}))},u=t(8),_=t(9),g=t(10),h=t(12),f=t(11),b=t(13),d=t(3),E=t(6),v=t(34),N=function(e){function a(e){var t;return Object(_.a)(this,a),(t=Object(h.a)(this,Object(f.a)(a).call(this,e))).state={username:"",password:"",rememberme:!1},t.onHandleChange=t.onHandleChange.bind(Object(d.a)(Object(d.a)(t))),t.onSubmit=t.onSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"onHandleChange",value:function(e){var a=e.target,t=a.name,n=a.value;"checkbox"===e.target.type&&(n=e.target.checked,console.log(n)),this.setState(Object(u.a)({},t,n))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:"login-form",onSubmit:this.onSubmit},o.a.createElement("label",{className:"login-form__input-name",htmlFor:"login-form__username-input"},"Username or Email address"),o.a.createElement("input",{type:"text",className:"login-form__input",name:"username",id:"login-form__username-input",onChange:this.onHandleChange}),o.a.createElement("label",{className:"login-form__input-name",htmlFor:"login-form__password-input"},"Password"),o.a.createElement("input",{type:"password",className:"login-form__input",id:"login-form__password-input",name:"password",onChange:this.onHandleChange}),o.a.createElement("div",{className:"login-form__btn-group"},o.a.createElement("div",{className:"login-form__checkbox-wrapper"},o.a.createElement("input",{type:"checkbox",name:"rememberme",className:"login-form__remember-checkbox",id:"login-form__remember-checkbox",onChange:this.onHandleChange})," ",o.a.createElement("label",{className:"login-form__remember",htmlFor:"login-form__remember-checkbox"},"Remember me")),o.a.createElement("button",{className:"login-form__login-btn"},"Login"))),o.a.createElement(v.a,{className:"login-form__link login-form__lost-password",to:"/account-recovery"},"Lost your password?"),o.a.createElement(v.a,{className:"login-form__link login-form__signup-btn",to:"/signup"},"Don't have a account? Sign up"),o.a.createElement(v.a,{className:"login-form__link",to:"/"},o.a.createElement(E.a,{icon:"arrow-left"})," ","Back to uiCookies"))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(_.a)(this,a),(t=Object(h.a)(this,Object(f.a)(a).call(this,e))).state={recoveryemail:""},t.onHandleChange=t.onHandleChange.bind(Object(d.a)(Object(d.a)(t))),t.onSubmit=t.onSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"onHandleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(u.a)({},t,n))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:"account-recovery-form",onSubmit:this.onSubmit},o.a.createElement("h3",{className:"account-recovery-form__title"},"Forgot Password"),o.a.createElement("label",{className:"account-recovery-form__input-name"},"Please enter your email and we'll send you instructions on how to reset your password"),o.a.createElement("input",{type:"email",className:"account-recovery-form__input",name:"recoveryemail",onChange:this.onHandleChange,placeholder:"Email"}),o.a.createElement("div",{className:"account-recovery-form__btn-group"},o.a.createElement("button",{className:"account-recovery-form__submit-btn"},"Submit"))),o.a.createElement(v.a,{className:"account-recovery-form__link",to:"/login"},o.a.createElement(E.a,{icon:"arrow-left"})," ","Back to Login"))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(_.a)(this,a),(t=Object(h.a)(this,Object(f.a)(a).call(this,e))).state={username:"",password:"",confirmPassword:"",email:""},t.onHandleChange=t.onHandleChange.bind(Object(d.a)(Object(d.a)(t))),t.onSubmit=t.onSubmit.bind(Object(d.a)(Object(d.a)(t))),t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"onHandleChange",value:function(e){var a=e.target,t=a.name,n=a.value;"checkbox"===e.target.type&&(n=e.target.checked,console.log(n)),this.setState(Object(u.a)({},t,n))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log(this.state)}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:"signup-form",onSubmit:this.onSubmit},o.a.createElement("label",{className:"sign-form__input-name",htmlFor:"signup-form__username-input"},"Username"),o.a.createElement("input",{type:"text",className:"signup-form__input",name:"username",id:"signup-form__username-input",onChange:this.onHandleChange}),o.a.createElement("label",{className:"signup-form__input-name",htmlFor:"signup-form__password-input"},"Password"),o.a.createElement("input",{type:"password",className:"signup-form__input",id:"signup-form__password-input",name:"password",onChange:this.onHandleChange}),o.a.createElement("label",{className:"signup-form__input-name",htmlFor:"signup-form__password-confirm-input"},"Confirm Password"),o.a.createElement("input",{type:"password",className:"signup-form__input",id:"signup-form__password-confirm-input",name:"confirmPassword",onChange:this.onHandleChange}),o.a.createElement("label",{className:"signup-form__input-name",htmlFor:"signup-form__email-input"},"Email"),o.a.createElement("input",{type:"email",className:"signup-form__input",id:"signup-form__email-input",name:"email",onChange:this.onHandleChange}),o.a.createElement("div",{className:"signup-form__btn-group"},o.a.createElement("button",{className:"signup-form__login-btn"},"Sign up"))),o.a.createElement(v.a,{className:"login-form__link",to:"/login"},o.a.createElement(E.a,{icon:"arrow-left"})," ","Back to Login"),o.a.createElement(v.a,{className:"login-form__link",to:"/"},o.a.createElement(E.a,{icon:"arrow-left"})," ","Back to uiCookies"))}}]),a}(n.Component);var k=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__left-img"}),o.a.createElement("div",{className:"app__primary"},o.a.createElement("div",{className:"app__form-wrapper"},o.a.createElement(p,null),o.a.createElement(s.a,{path:"/login",exact:!0,component:N}),o.a.createElement(s.a,{path:"/signup",exact:!0,component:y}),o.a.createElement(s.a,{path:"/account-recovery",exact:!0,component:w}))))};var j=function(){return o.a.createElement("div",{className:"topnav"},o.a.createElement("div",{className:"topnav__container"},o.a.createElement("div",{className:"topnav__logo-wrapper"},o.a.createElement("img",{className:"topnav__logo",src:"https://images.unsplash.com/photo-1550852355-d04aff81523b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9"}),o.a.createElement("h1",{className:"topnav__title"},"Colorlib")),o.a.createElement("nav",{className:"topnav__item-list"},o.a.createElement(v.a,{className:"topnav__item",to:"/"},"Home"),o.a.createElement(v.a,{className:"topnav__item",to:"/"},"Blog"),o.a.createElement(v.a,{className:"topnav__item",to:"/"},"Portfolio"),o.a.createElement(v.a,{className:"topnav__item",to:"/"},"About the tests"),o.a.createElement(v.a,{className:"topnav__item",to:"/"},"Level 1"),o.a.createElement(v.a,{className:"topnav__item",to:"/"},"Shop"))))};var C=function(){return o.a.createElement("div",{className:"main"},o.a.createElement(j,null),o.a.createElement("div",{className:"main__image-holder"},o.a.createElement("img",{className:"main__img",src:"https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1443527216320-7e744084f5a7-1.jpg"}),o.a.createElement("div",{className:"main__content-wrapper"},o.a.createElement("div",{className:"main__content"},o.a.createElement("h2",{className:"main__title"},"We Change Everything Wordpress"),o.a.createElement("p",{className:"main__content-description"},"This is the only Wordpress theme you will ever want to use."),o.a.createElement(v.a,{className:"main__content-link main__login-btn",to:"/login"},"Log in"),o.a.createElement(v.a,{className:"main__content-link main__signup-btn",to:"/signup"},"Sign up")))))};var O=function(){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(s.a,{path:"/",exact:!0,component:C}),o.a.createElement(s.a,{path:"/login",exact:!0,component:k}),o.a.createElement(s.a,{path:"/account-recovery",exact:!0,component:k}),o.a.createElement(s.a,{path:"/signup",exact:!0,component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.b.add(c.a),m.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.7bc31c0a.chunk.js.map