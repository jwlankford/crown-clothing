(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,n,t){e.exports=t(76)},61:function(e,n,t){},63:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(31),c=t.n(i),o=t(16),l=t(6),u=t(41),s=t(12),p=t(29),m=t(42),d=t.n(m),b=t(43),f=t.n(b),h=t(8),g="SET_CURRENT_USER",v={currentUser:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g:return Object(h.a)({},e,{currentUser:n.payload});default:return e}},O={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},y=t(49),x=function(e,n){return 1===e.find(function(e){return e.id===n.id}).quantity?e.filter(function(e){return e.id!==n.id}):e.map(function(e){return e.id===n.id?Object(h.a)({},e,{quantity:e.quantity-1}):e})},j={hidden:!0,cartItems:[]},w=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case O.TOGGLE_CART_HIDDEN:return Object(h.a)({},t,{hidden:!t.hidden});case O.ADD_ITEM:return Object(h.a)({},t,{cartItems:(e=t.cartItems,n=r.payload,e.find(function(e){return e.id===n.id})?e.map(function(e){return e.id===n.id?Object(h.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(y.a)(e),[Object(h.a)({},n,{quantity:1})]))});case O.REMOVE_ITEM:return Object(h.a)({},t,{cartItems:x(t.cartItems,r.payload)});case O.CLEAR_ITEM_FROM_CART:return Object(h.a)({},t,{cartItems:t.cartItems.filter(function(e){return e.id!==r.payload.id})});default:return t}},k={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return(arguments.length>1?arguments[1]:void 0).type,e},U={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;return(arguments.length>1?arguments[1]:void 0).type,e},T={key:"root",storage:f.a,whitelist:["cart"]},S=Object(s.c)({user:E,cart:w,directory:C,shop:I}),N=Object(p.a)(T,S),R=[d.a];var A=Object(s.d)(N,s.a.apply(void 0,R)),M=Object(p.b)(A),z=(p.b,t(61),t(7)),P=t.n(z),B=t(13),D=t(17),_=t(18),G=t(20),H=t(19),L=t(21),q=t(25),W=t(4),J=(t(63),t(22)),V=Object(W.a)([function(e){return e.directory}],function(e){return e.sections}),F=t(1),Q=t(2);function K(){var e=Object(F.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]);return K=function(){return e},e}function X(){var e=Object(F.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]);return X=function(){return e},e}function Y(){var e=Object(F.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]);return Y=function(){return e},e}function Z(){var e=Object(F.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"]);return Z=function(){return e},e}function $(){var e=Object(F.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\n\t&:hover {\n\t\tcursor: pointer;\n\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n"]);return $=function(){return e},e}var ee=Q.b.div($(),function(e){return e.size?"380px":"240px"}),ne=Q.b.div(Z(),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),te=Q.b.div(Y()),re=Q.b.span(X()),ae=Q.b.span(K()),ie=Object(q.f)(function(e){var n=e.title,t=e.imageUrl,r=e.size,i=e.history,c=e.linkUrl,o=e.match;return a.a.createElement(ee,{size:r,onClick:function(){return i.push("".concat(o.url).concat(c))}},a.a.createElement(ne,{className:"background-image",imageUrl:t}),a.a.createElement(te,{className:"content"},a.a.createElement(re,null,n.toUpperCase()),a.a.createElement(ae,null,"SHOP NOW")))});function ce(){var e=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return ce=function(){return e},e}var oe=Q.b.div(ce()),le=Object(W.b)({sections:V}),ue=Object(l.b)(le)(function(e){var n=e.sections;return a.a.createElement(oe,null,n.map(function(e){var n=e.id,t=Object(J.a)(e,["id"]);return a.a.createElement(ie,Object.assign({key:n},t))}))});function se(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return se=function(){return e},e}var pe=Q.b.div(se()),me=function(){return a.a.createElement(pe,null,a.a.createElement(ue,null))},de=function(){return{type:O.TOGGLE_CART_HIDDEN}},be=function(e){return{type:O.ADD_ITEM,payload:e}};function fe(){var e=Object(F.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return fe=function(){return e},e}function he(){var e=Object(F.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return he=function(){return e},e}function ge(){var e=Object(F.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return ge=function(){return e},e}function ve(){var e=Object(F.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return ve=function(){return e},e}var Ee=Object(Q.a)(ve()),Oe=Object(Q.a)(ge()),ye=Object(Q.a)(he()),xe=Q.b.button(fe(),function(e){return e.isGoogleSignIn?ye:e.inverted?Oe:Ee}),je=function(e){var n=e.children,t=Object(J.a)(e,["children"]);return a.a.createElement(xe,t,n)};function we(){var e=Object(F.a)(["\n  width: 10%;\n  text-align: right;\n"]);return we=function(){return e},e}function ke(){var e=Object(F.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(F.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return Ce=function(){return e},e}function Ue(){var e=Object(F.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return Ue=function(){return e},e}function Ie(){var e=Object(F.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(F.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]);return Te=function(){return e},e}var Se=Q.b.div(Te()),Ne=Object(Q.b)(je)(Ie()),Re=Q.b.div(Ue(),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),Ae=Q.b.div(Ce()),Me=Q.b.span(ke()),ze=Q.b.span(we()),Pe=Object(l.b)(null,function(e){return{addItem:function(n){return e(be(n))}}})(function(e){var n=e.item,t=e.addItem,r=n.name,i=n.price,c=n.imageUrl;return a.a.createElement(Se,null,a.a.createElement(Re,{className:"image",imageUrl:c}),a.a.createElement(Ae,null,a.a.createElement(Me,null,r),a.a.createElement(ze,null,i)),a.a.createElement(Ne,{onClick:function(){return t(n)},inverted:!0},"Add to cart"))});function Be(){var e=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Be=function(){return e},e}function De(){var e=Object(F.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  &:hover {\n    color: grey;\n  }\n"]);return De=function(){return e},e}function _e(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"]);return _e=function(){return e},e}var Ge=Q.b.div(_e()),He=Q.b.h1(De()),Le=Q.b.div(Be()),qe=Object(q.f)(function(e){var n=e.title,t=e.items,r=e.history,i=e.match,c=e.routeName;return a.a.createElement(Ge,null,a.a.createElement(He,{onClick:function(){return r.push("".concat(i.path,"/").concat(c))}},n.toUpperCase()),a.a.createElement(Le,null,t.filter(function(e,n){return n<4}).map(function(e){return a.a.createElement(Pe,{key:e.id,item:e})})))}),We=Object(W.a)([function(e){return e.shop}],function(e){return e.collections}),Je=Object(W.a)([We],function(e){return Object.keys(e).map(function(n){return e[n]})});function Ve(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ve=function(){return e},e}var Fe=Q.b.div(Ve()),Qe=Object(W.b)({collections:Je}),Ke=Object(l.b)(Qe)(function(e){var n=e.collections;return a.a.createElement(Fe,null,n.map(function(e){var n=e.id,t=Object(J.a)(e,["id"]);return a.a.createElement(qe,Object.assign({key:n},t))}))});function Xe(){var e=Object(F.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n  & > div {\n    margin-bottom: 30px;\n  }\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(F.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ze=function(){return e},e}var $e=Q.b.div(Ze()),en=Q.b.h2(Ye()),nn=Q.b.div(Xe()),tn=Object(l.b)(function(e,n){return{collection:(t=n.match.params.collectionId,Object(W.a)([We],function(e){return e[t]}))(e)};var t})(function(e){var n=e.collection,t=n.title,r=n.items;return a.a.createElement($e,null,a.a.createElement(en,null,t),a.a.createElement(nn,null,r.map(function(e){return a.a.createElement(Pe,{key:e.id,item:e})})))}),rn=t(28),an=t.n(rn);t(70),t(73);an.a.initializeApp({apiKey:"AIzaSyCoxQ-d3BA0oPnXJv13Gvq3ZQIbD5LDnqE",authDomain:"crowndb-eeddd.firebaseapp.com",databaseURL:"https://crowndb-eeddd.firebaseio.com",projectId:"crowndb-eeddd",storageBucket:"crowndb-eeddd.appspot.com",messagingSenderId:"786709661310",appId:"1:786709661310:web:fa43bef53005890bc07a2f",measurementId:"G-CDKBTXREMX"});var cn=function(){var e=Object(B.a)(P.a.mark(function e(n,t){var r,a,i,c;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=ln.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=n.displayName,i=n.email,c=new Date,e.prev=9,e.next=12,r.set(Object(h.a)({displayName:a,email:i,createdAt:c},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(n,t){return e.apply(this,arguments)}}(),on=an.a.auth(),ln=an.a.firestore(),un=new an.a.auth.GoogleAuthProvider;un.setCustomParameters({prompt:"select_account"});var sn=function(){return on.signInWithPopup(un)},pn=(an.a,function(e){function n(){var e,t;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(G.a)(this,(e=Object(H.a)(n)).call.apply(e,[this].concat(a)))).unsubscribeFromSnapshot=null,t}return Object(L.a)(n,e),Object(_.a)(n,[{key:"componentDidMount",value:function(){ln.collection("collections").onSnapshot(function(){var e=Object(B.a)(P.a.mark(function e(n){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n);case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(q.b,{exact:!0,path:"".concat(e.path),component:Ke}),a.a.createElement(q.b,{path:"".concat(e.path,"/:collectionId"),component:tn}))}}]),n}(a.a.Component)),mn=t(27);function dn(){var e=Object(F.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"]);return dn=function(){return e},e}function bn(){var e=Object(F.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return bn=function(){return e},e}function fn(){var e=Object(F.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return fn=function(){return e},e}function hn(){var e=Object(F.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return hn=function(){return e},e}var gn=Object(Q.a)(hn(),"black"),vn=Q.b.div(fn()),En=Q.b.input(bn(),"grey","grey",gn),On=Q.b.label(dn(),"grey",gn),yn=function(e){var n=e.handleChange,t=e.label,r=Object(J.a)(e,["handleChange","label"]);return a.a.createElement(vn,null,a.a.createElement(En,Object.assign({onChange:n},r)),t?a.a.createElement(On,{className:r.value.length?"shrink":""},t):null)};function xn(){var e=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return xn=function(){return e},e}function jn(){var e=Object(F.a)(["\n  margin: 10px 0;\n"]);return jn=function(){return e},e}function wn(){var e=Object(F.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return wn=function(){return e},e}var kn=Q.b.div(wn()),Cn=Q.b.h2(jn()),Un=Q.b.div(xn()),In=function(e){function n(e){var t;return Object(D.a)(this,n),(t=Object(G.a)(this,Object(H.a)(n).call(this,e))).handleSubmit=function(){var e=Object(B.a)(P.a.mark(function e(n){var r,a,i;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.state,a=r.email,i=r.password,e.prev=2,e.next=5,on.signInWithEmailAndPassword(a,i);case 5:t.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(n){return e.apply(this,arguments)}}(),t.handleChange=function(e){var n=e.target,r=n.value,a=n.name;t.setState(Object(mn.a)({},a,r))},t.state={email:"",password:""},t}return Object(L.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){return a.a.createElement(kn,null,a.a.createElement(Cn,null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(yn,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),a.a.createElement(yn,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),a.a.createElement(Un,null,a.a.createElement(je,{type:"submit"}," Sign in "),a.a.createElement(je,{onClick:sn,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(a.a.Component);function Tn(){var e=Object(F.a)(["\n  margin: 10px 0;\n"]);return Tn=function(){return e},e}function Sn(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return Sn=function(){return e},e}var Nn=Q.b.div(Sn()),Rn=Q.b.h2(Tn()),An=function(e){function n(){var e;return Object(D.a)(this,n),(e=Object(G.a)(this,Object(H.a)(n).call(this))).handleSubmit=function(){var n=Object(B.a)(P.a.mark(function n(t){var r,a,i,c,o,l,u;return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),r=e.state,a=r.displayName,i=r.email,c=r.password,o=r.confirmPassword,c===o){n.next=5;break}return alert("passwords don't match"),n.abrupt("return");case 5:return n.prev=5,n.next=8,on.createUserWithEmailAndPassword(i,c);case 8:return l=n.sent,u=l.user,n.next=12,cn(u,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),console.error(n.t0);case 18:case"end":return n.stop()}},n,null,[[5,15]])}));return function(e){return n.apply(this,arguments)}}(),e.handleChange=function(n){var t=n.target,r=t.name,a=t.value;e.setState(Object(mn.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(L.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this.state,n=e.displayName,t=e.email,r=e.password,i=e.confirmPassword;return a.a.createElement(Nn,null,a.a.createElement(Rn,null,"I do not have a account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(yn,{type:"text",name:"displayName",value:n,onChange:this.handleChange,label:"Display Name",required:!0}),a.a.createElement(yn,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),a.a.createElement(yn,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),a.a.createElement(yn,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),a.a.createElement(je,{type:"submit"},"SIGN UP")))}}]),n}(a.a.Component);function Mn(){var e=Object(F.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n"]);return Mn=function(){return e},e}var zn=Q.b.div(Mn()),Pn=function(){return a.a.createElement(zn,null,a.a.createElement(In,null),a.a.createElement(An,null))},Bn=t(48),Dn=t.n(Bn),_n=function(e){var n=e.price,t=100*n;return a.a.createElement(Dn.a,{label:"Pay Now",name:"Crown Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(n),amount:t,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_live_QD7Sf3OlZHN83aIZYk1uW7e600H7dPOarU"})};function Gn(){var e=Object(F.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return Gn=function(){return e},e}function Hn(){var e=Object(F.a)(["\n  display: flex;\n\n  span {\n    margin: 0 10px;\n  }\n\n  div {\n    cursor: pointer;\n  }\n"]);return Hn=function(){return e},e}function Ln(){var e=Object(F.a)(["\n  width: 23%;\n"]);return Ln=function(){return e},e}function qn(){var e=Object(F.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return qn=function(){return e},e}function Wn(){var e=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]);return Wn=function(){return e},e}var Jn=Q.b.div(Wn()),Vn=Q.b.div(qn()),Fn=Q.b.span(Ln()),Qn=Object(Q.b)(Fn)(Hn()),Kn=Q.b.div(Gn()),Xn=Object(l.b)(null,function(e){return{clearItem:function(n){return e(function(e){return{type:O.CLEAR_ITEM_FROM_CART,payload:e}}(n))},addItem:function(n){return e(be(n))},removeItem:function(n){return e(function(e){return{type:O.REMOVE_ITEM,payload:e}}(n))}}})(function(e){var n=e.cartItem,t=e.clearItem,r=e.addItem,i=e.removeItem,c=n.name,o=n.imageUrl,l=n.price,u=n.quantity;return a.a.createElement(Jn,null,a.a.createElement(Vn,null,a.a.createElement("img",{src:o,alt:"item"})),a.a.createElement(Fn,null,c),a.a.createElement(Qn,null,a.a.createElement("div",{onClick:function(){return i(n)}},"\u276e"),a.a.createElement("span",null,u),a.a.createElement("div",{onClick:function(){return r(n)}},"\u276f")),a.a.createElement(Fn,null,l),a.a.createElement(Kn,{onClick:function(){return t(n)}},"\u2715"))}),Yn=function(e){return e.cart},Zn=Object(W.a)([Yn],function(e){return e.cartItems}),$n=Object(W.a)([Yn],function(e){return e.hidden}),et=Object(W.a)([Zn],function(e){return e.reduce(function(e,n){return e+n.quantity},0)}),nt=Object(W.a)([Zn],function(e){return e.reduce(function(e,n){return e+n.quantity*n.price},0)});function tt(){var e=Object(F.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return tt=function(){return e},e}function rt(){var e=Object(F.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return rt=function(){return e},e}function at(){var e=Object(F.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n"]);return at=function(){return e},e}function it(){var e=Object(F.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return it=function(){return e},e}function ct(){var e=Object(F.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n"]);return ct=function(){return e},e}var ot=Q.b.div(ct()),lt=Q.b.div(it()),ut=Q.b.div(at()),st=Q.b.div(rt()),pt=Q.b.div(tt()),mt=Object(W.b)({cartItems:Zn,total:nt}),dt=Object(l.b)(mt)(function(e){var n=e.cartItems,t=e.total;return a.a.createElement(ot,null,a.a.createElement(lt,null,a.a.createElement(ut,null,a.a.createElement("span",null,"Product")),a.a.createElement(ut,null,a.a.createElement("span",null,"Description")),a.a.createElement(ut,null,a.a.createElement("span",null,"Quantity")),a.a.createElement(ut,null,a.a.createElement("span",null,"Price")),a.a.createElement(ut,null,a.a.createElement("span",null,"Remove"))),n.map(function(e){return a.a.createElement(Xn,{key:e.id,cartItem:e})}),a.a.createElement(st,null,"TOTAL: $",t),a.a.createElement(pt,null,"*Please use the following test credit card for payments*",a.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),a.a.createElement(_n,{price:t}))});function bt(){return(bt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ft(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var ht=a.a.createElement("g",null),gt=a.a.createElement("g",null),vt=a.a.createElement("g",null),Et=a.a.createElement("g",null),Ot=a.a.createElement("g",null),yt=a.a.createElement("g",null),xt=a.a.createElement("g",null),jt=a.a.createElement("g",null),wt=a.a.createElement("g",null),kt=a.a.createElement("g",null),Ct=a.a.createElement("g",null),Ut=a.a.createElement("g",null),It=a.a.createElement("g",null),Tt=a.a.createElement("g",null),St=a.a.createElement("g",null),Nt=function(e){var n=e.svgRef,t=ft(e,["svgRef"]);return a.a.createElement("svg",bt({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},t),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ht,gt,vt,Et,Ot,yt,xt,jt,wt,kt,Ct,Ut,It,Tt,St)},Rt=a.a.forwardRef(function(e,n){return a.a.createElement(Nt,bt({svgRef:n},e))}),At=(t.p,t(75),Object(W.b)({itemCount:et})),Mt=Object(l.b)(At,function(e){return{toggleCartHidden:function(){return e(de())}}})(function(e){var n=e.toggleCartHidden,t=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:n},a.a.createElement(Rt,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},t))});function zt(){var e=Object(F.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return zt=function(){return e},e}function Pt(){var e=Object(F.a)(["\n  width: 30%;\n"]);return Pt=function(){return e},e}function Bt(){var e=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return Bt=function(){return e},e}var Dt=Q.b.div(Bt()),_t=Q.b.img(Pt()),Gt=Q.b.div(zt()),Ht=function(e){var n=e.item,t=n.imageUrl,r=n.price,i=n.name,c=n.quantity;return a.a.createElement(Dt,null,a.a.createElement(_t,{src:t,alt:"item"}),a.a.createElement(Gt,null,a.a.createElement("span",null,i),a.a.createElement("span",null,c," x $",r)))};function Lt(){var e=Object(F.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: overlay;\n"]);return Lt=function(){return e},e}function qt(){var e=Object(F.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return qt=function(){return e},e}function Wt(){var e=Object(F.a)(["\n    margin-top: auto;\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 24px;\n    cursor: pointer;\n    font-family: cursive;\n    font-weight: bolder;\n    color: black;\n    padding: 0;\n    min-width: 50px;\n"]);return Wt=function(){return e},e}function Jt(){var e=Object(F.a)(["\n  margin-top: auto;\n"]);return Jt=function(){return e},e}function Vt(){var e=Object(F.a)(["\n  position: absolute;\n  width: 300px;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  padding: 50px 30px 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return Vt=function(){return e},e}var Ft=Q.b.div(Vt()),Qt=Object(Q.b)(je)(Jt()),Kt=Object(Q.b)(je)(Wt()),Xt=Q.b.span(qt()),Yt=Q.b.div(Lt()),Zt=Object(W.b)({cartItems:Zn}),$t=Object(q.f)(Object(l.b)(Zt)(function(e){var n=e.cartItems,t=e.history,r=e.dispatch;return a.a.createElement(Ft,null,a.a.createElement(Kt,{onClick:function(){r(de())}},"X"),a.a.createElement(Yt,null,n.length?n.map(function(e){return a.a.createElement(Ht,{key:e.id,item:e})}):a.a.createElement(Xt,null,"Your cart is empty")),a.a.createElement(Qt,{onClick:function(){t.push("/checkout"),r(de())}},"GO TO CHECKOUT"))})),er=Object(W.a)([function(e){return e.user}],function(e){return e.currentUser});function nr(){return(nr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function tr(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var rr=a.a.createElement("title",null,"Group"),ar=a.a.createElement("desc",null,"Created with Sketch."),ir=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),cr=function(e){var n=e.svgRef,t=tr(e,["svgRef"]);return a.a.createElement("svg",nr({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:n},t),rr,ar,ir)},or=a.a.forwardRef(function(e,n){return a.a.createElement(cr,nr({svgRef:n},e))});t.p;function lr(){var e=Object(F.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return lr=function(){return e},e}function ur(){var e=Object(F.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return ur=function(){return e},e}function sr(){var e=Object(F.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return sr=function(){return e},e}function pr(){var e=Object(F.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return pr=function(){return e},e}var mr=Q.b.div(pr()),dr=Object(Q.b)(o.b)(sr()),br=Q.b.div(ur()),fr=Object(Q.b)(o.b)(lr()),hr=Object(W.b)({currentUser:er,hidden:$n}),gr=Object(l.b)(hr)(function(e){var n=e.currentUser,t=e.hidden;return a.a.createElement(mr,null,a.a.createElement(dr,{to:"/"},a.a.createElement(or,{className:"logo"})),a.a.createElement(br,null,a.a.createElement(fr,{to:"/shop"},"SHOP"),a.a.createElement(fr,{to:"/shop"},"CONTACT"),n?a.a.createElement(fr,{as:"div",onClick:function(){return on.signOut()}},"SIGN OUT"):a.a.createElement(fr,{to:"/signin"},"SIGN IN"),a.a.createElement(Mt,null)),t?null:a.a.createElement($t,null))}),vr=function(e){function n(){var e,t;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(G.a)(this,(e=Object(H.a)(n)).call.apply(e,[this].concat(a)))).unsubscribeFromAuth=null,t}return Object(L.a)(n,e),Object(_.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=on.onAuthStateChanged(function(){var n=Object(B.a)(P.a.mark(function n(t){return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,cn(t);case 3:n.sent.onSnapshot(function(n){e(Object(h.a)({id:n.id},n.data()))});case 5:e(t);case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(gr,null),a.a.createElement(q.d,null,a.a.createElement(q.b,{exact:!0,path:"/",component:me}),a.a.createElement(q.b,{path:"/shop",component:pn}),a.a.createElement(q.b,{exact:!0,path:"/checkout",component:dt}),a.a.createElement(q.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?a.a.createElement(q.a,{to:"/"}):a.a.createElement(Pn,null)}})))}}]),n}(a.a.Component),Er=Object(W.b)({currentUser:er}),Or=Object(l.b)(Er,function(e){return{setCurrentUser:function(n){return e(function(e){return{type:g,payload:e}}(n))}}})(vr);c.a.render(a.a.createElement(l.a,{store:A},a.a.createElement(o.a,{basename:"/crown-clothing/"},a.a.createElement(u.a,{persistor:M},a.a.createElement(Or,null)))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1117b7ba.chunk.js.map