(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),o=n.n(r),s=(n(71),n(72),n(73),n(74),n(75),n(28)),i=n.n(s),l=n(35),j=n(16),u=n(17),h=n(20),d=n(19),b=n(36),O=n(60),x=n(46),p=n(18),g=n.n(p),m=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:8000/rest-auth/google/",{access_token:t});case 2:return n=e.sent,console.log(n),e.next=6,n.status;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(1),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t.accessToken);case 2:n=e.sent,console.log(n),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"login-container",children:Object(f.jsx)(O.a,{className:"justify-content-md-center",children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)("h1",{className:"",style:{textAlign:"center",color:"white"},children:"Mini Unsplash Clone"}),Object(f.jsx)("p",{style:{textAlign:"center",color:"white"},children:"Its time to put your best pictures online."}),Object(f.jsx)(x.a,{style:{marginLeft:"6px"},children:Object(f.jsx)(b.GoogleLogin,{clientId:"203425879861-duk66q8klnol7iojm19ppqks85v3hud5.apps.googleusercontent.com",buttonText:"LOGIN WITH GOOGLE",onSuccess:e,onFailure:e,uxMode:"redirectUri",redirec:"http://localhost:3000/home/"})})]})})})}}]),n}(a.Component),y=n(26),C=n(63),k=n(30),S=n(40),T=n(108),w=n(105),L=n(106),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={file:null},a.onChange=a.onChange.bind(Object(y.a)(a)),a}return Object(u.a)(n,[{key:"onChange",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0])})}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L.a.Group,{children:Object(f.jsx)(L.a.File,{name:"image",id:"exampleFormControlFile1",label:"Upload a new photo",onChange:this.onChange})}),Object(f.jsx)("img",{style:{width:"50%"},src:this.state.file})]})}}]),n}(c.a.Component),N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleSubmitForm=function(e,t){e.preventDefault();var n=e.target.elements.image.value,a=e.target.elements.caption.value,c=e.target.elements.category.value;g.a.post("http://127.0.0.1:8000/api/create/",{image:n,caption:a,category:c}).then((function(e){return console.log(e)})),console.log(n,a,c)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(L.a,{onSubmit:this.handleSubmitForm,children:[Object(f.jsx)(F,{}),Object(f.jsxs)(L.a.Group,{controlId:"exampleForm.ControlTextarea1",style:{marginTop:"15px"},children:[Object(f.jsx)(L.a.Label,{style:{fontWeight:"Bold"},children:"Add a Caption"}),Object(f.jsx)(L.a.Control,{name:"caption",as:"textarea",rows:3,placeholder:"Add a befitting caption to your photo"})]}),Object(f.jsxs)(L.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(f.jsx)(L.a.Label,{style:{fontWeight:"Bold"},children:"Category"}),Object(f.jsx)(L.a.Control,{name:"category",type:"text",placeholder:"i.e Nature, Lifstyle, City, Sports, Adventure e.t.c"})]}),Object(f.jsx)(T.a,{variant:"primary",type:"submit",children:"Upload"})]})})}}]),n}(c.a.Component),I=function(e){var t=Object(a.useState)(!1),n=Object(S.a)(t,2),c=n[0],r=n[1],o=function(){return r(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T.a,{style:{marginRight:"10px"},variant:"primary",onClick:function(){return r(!0)},children:"Submit a new photo"}),Object(f.jsxs)(w.a,{show:c,onHide:o,children:[Object(f.jsx)(w.a.Header,{closeButton:!0,children:Object(f.jsx)(w.a.Title,{children:"Upload a new Photo"})}),Object(f.jsx)(w.a.Body,{children:Object(f.jsx)(N,{})}),Object(f.jsx)(T.a,{variant:"danger",type:"submit",onClick:o,children:"Cancel"})]})]})},R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(b.GoogleLogout,{clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_CLIENT_ID,buttonText:"Logout",redirectUri:"http://localhost:300/"})}}]),n}(a.Component),_=function(e){return Object(f.jsxs)(k.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",style:{borderBottomWidth:"thin",borderBottomColor:"white",borderBottomStyle:"solid"},children:[Object(f.jsx)(k.a.Brand,{href:"#home",children:e.title}),Object(f.jsx)(k.a.Toggle,{}),Object(f.jsxs)(k.a.Collapse,{className:"justify-content-end",children:[Object(f.jsx)(I,{}),Object(f.jsx)(k.a.Text,{children:Object(f.jsx)(R,{})})]})]})},B=n(62),D=(n(65),n(107)),E=function(e){var t=Object(a.useState)(!1),n=Object(S.a)(t,2),c=n[0],r=n[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{className:"post-container",children:Object(f.jsx)(O.a,{children:Object(f.jsx)(x.a,{onClick:function(){return r(!0)},children:Object(f.jsx)(D.a.Img,{src:"http://res.cloudinary.com/dhchzkdbz/".concat(e.articleData.image),alt:"Card image"})})})}),Object(f.jsx)(w.a,{show:c,onHide:function(){return r(!1)},centered:!0,children:Object(f.jsxs)(D.a,{className:"bg-dark text-white",children:[Object(f.jsx)(D.a.Img,{src:"http://res.cloudinary.com/dhchzkdbz/".concat(e.articleData.image),alt:"Card image"}),Object(f.jsx)(D.a.Body,{style:{backgroundColor:"white"},children:Object(f.jsxs)(D.a.Text,{style:{color:"black"},children:[e.articleData.caption," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{})," ",Object(f.jsx)("p",{style:{fontWeight:"Bold"},children:"Category:"})," ",e.articleData.category]})})]})})]})},A=function(e){var t=Object(B.chunk)(e.articles,3).map((function(e,t){var n=e.map((function(e,t){return Object(f.jsx)(x.a,{xs:12,md:4,lg:4,style:{marginTop:"10px"},children:Object(f.jsx)(E,{articleData:e},t)},e.id)}));return Object(f.jsx)(O.a,{children:n},t)}));return Object(f.jsx)(C.a,{children:t})},G=function(e){return Object(f.jsx)("div",{style:{backgroundColor:"whitesmoke",height:"200px"},children:Object(f.jsx)(O.a,{className:"justify-content-center",children:Object(f.jsx)(x.a,{xs:10,lg:6,children:Object(f.jsx)(L.a,{inline:!0,className:"align-items-center",style:{marginTop:"100px"},children:Object(f.jsx)(L.a.Control,{onChange:e.handleChange,size:"lg",type:"text",placeholder:"Search for photos by username or category ",style:{width:"600px"}})})})})})},U=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(y.a)(a)),a.state={articles:[],searchResult:[]},a}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=[];t=""!==e.target.value?this.state.searchResult.filter((function(t){var n=t.category.toLowerCase(),a=e.target.value.toLowerCase();return n.includes(a)})):this.state.articles,this.setState({searchResult:t})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("http://127.0.0.1:8000/api/").then((function(t){e.setState({searchResult:t.data,articles:t.data}),console.log(t.data)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(_,{title:"Mini Unsplash Clone"}),Object(f.jsx)(G,{handleChange:this.handleChange}),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)(C.a,{children:Object(f.jsx)(O.a,{className:"justify-content-md-center",children:Object(f.jsx)(A,{articles:this.state.searchResult})})})})]})}}]),n}(c.a.Component),H=n(31),P=function(){return Object(f.jsxs)("div",{children:["404 - ",Object(f.jsx)(H.b,{to:"/home",children:"Go Home"})]})},W=n(7),z=function(){return Object(f.jsx)(H.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(W.c,{children:[Object(f.jsx)(W.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(W.a,{exact:!0,path:"/home",component:U}),Object(f.jsx)(W.a,{component:P})]})})})};g.a.defaults.xsrfCookieName="csrftoken",g.a.defaults.xsrfHeaderName="X-CSRFToken";var M=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(z,{})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root")),K()},71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.1a7e9bed.chunk.js.map