(this["webpackJsonpmy-first-cli-proj"]=this["webpackJsonpmy-first-cli-proj"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(32),o=n.n(c),s=n(25),i=n(11),u=n(35),l=n(74),d=n(12),h=n(2),p={cars:[],cart:[],lastRemovedCar:null};var f=n(3),j=n.n(f),b=n(4),v={query:O,get:function(e,t){return O(e).then((function(e){return e.find((function(e){return e._id===t}))}))},post:function(e,t){return t._id=g(),O(e).then((function(n){return n.push(t),m(e,n),t}))},put:function(e,t){return O(e).then((function(n){var r=n.findIndex((function(e){return e._id===t._id}));return n.splice(r,1,t),m(e,n),t}))},remove:function(e,t){return O(e).then((function(n){var r=n.findIndex((function(e){return e._id===t}));n.splice(r,1),m(e,n)}))},postMany:function(e,t){return O(e).then((function(n){return t=t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{_id:g()})})),n.push.apply(n,Object(d.a)(t)),m(e,n),n}))}};function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1200,n=JSON.parse(localStorage.getItem(e))||[];return new Promise((function(e,r){setTimeout((function(){e(n)}),t)}))}function m(e,t){localStorage.setItem(e,JSON.stringify(t))}function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var x=n(75);n.n(x).a.create({withCredentials:!0});var w=n(76),y=n.n(w),C="user-updated",S="review-added",k=function(){var e=null;return{setup:function(){e=y()("")},on:function(t,n){e.on(t,n)},off:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(n?e.off(t,n):e.removeAllListeners(t))},emit:function(t,n){e.emit(t,n)},terminate:function(){e=null}}}();window.socketService=k,k.setup(),k.on("review-about-you",(function(e){console.log("Review about me!",e)}));var E="loggedinUser",R=null,_={login:function(e){return T.apply(this,arguments)},logout:function(){return L.apply(this,arguments)},signup:function(e){return I.apply(this,arguments)},getLoggedinUser:q,getUsers:function(){return v.query("user")},getById:function(e){return A.apply(this,arguments)},remove:function(e){return v.remove("user",e)},update:M,changeScore:function(e){return D.apply(this,arguments)}};function A(){return(A=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("user",t);case 2:return n=e.sent,R=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.put("user",t);case 2:return q()._id===t._id&&N(t),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.query("user");case 2:return n=e.sent,r=n.find((function(e){return e.username===t.username})),e.abrupt("return",N(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.score=1e4,e.next=3,v.post("user",t);case 3:return n=e.sent,e.abrupt("return",N(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:sessionStorage.removeItem(E);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=q()){e.next=3;break}throw new Error("Not loggedin");case 3:return n.score=n.score+t||t,e.next=6,M(n);case 6:return e.abrupt("return",n.score);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return sessionStorage.setItem(E,JSON.stringify(e)),e}function q(){return JSON.parse(sessionStorage.getItem(E)||"null")}window.userService=_,Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(),window.addEventListener("storage",Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.query("user");case 4:if(t=e.sent,n=t.find((function(e){return e._id===R._id}))){e.next=8;break}return e.abrupt("return");case 8:R.score!==n.score&&(console.log("Watched user score changed - localStorage updated from another browser"),k.emit(C,n)),R=n;case 10:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))();var P={count:10,user:_.getLoggedinUser(),users:[],watchedUser:null};var B={reviews:[]};var V={isLoading:!1};var W=Object(u.b)({carModule:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,r=arguments.length>1?arguments[1]:void 0,a=n;switch(r.type){case"SET_CARS":a=Object(h.a)(Object(h.a)({},n),{},{cars:r.cars});break;case"REMOVE_CAR":var c=n.cars.find((function(e){return e._id===r.carId}));e=n.cars.filter((function(e){return e._id!==r.carId})),a=Object(h.a)(Object(h.a)({},n),{},{cars:e,lastRemovedCar:c});break;case"ADD_CAR":a=Object(h.a)(Object(h.a)({},n),{},{cars:[].concat(Object(d.a)(n.cars),[r.car])});break;case"UPDATE_CAR":e=n.cars.map((function(e){return e._id===r.car._id?r.car:e})),a=Object(h.a)(Object(h.a)({},n),{},{cars:e});break;case"ADD_TO_CART":a=Object(h.a)(Object(h.a)({},n),{},{cart:[].concat(Object(d.a)(n.cart),[r.car])});break;case"REMOVE_FROM_CART":t=n.cart.filter((function(e){return e._id!==r.carId})),a=Object(h.a)(Object(h.a)({},n),{},{cart:t});break;case"CLEAR_CART":a=Object(h.a)(Object(h.a)({},n),{},{cart:[]});break;case"UNDO_REMOVE_CAR":n.lastRemovedCar&&(a=Object(h.a)(Object(h.a)({},n),{},{cars:[].concat(Object(d.a)(n.cars),[n.lastRemovedCar]),lastRemovedCar:null}))}return window.carState=a,console.log("Prev State:",n),console.log("Action:",r),console.log("New State:",a),a},userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case"INCREMENT":n=Object(h.a)(Object(h.a)({},e),{},{count:e.count+1});break;case"DECREMENT":n=Object(h.a)(Object(h.a)({},e),{},{count:e.count-1});break;case"CHANGE_COUNT":n=Object(h.a)(Object(h.a)({},e),{},{count:e.count+t.diff});break;case"SET_USER":n=Object(h.a)(Object(h.a)({},e),{},{user:t.user});break;case"SET_WATCHED_USER":n=Object(h.a)(Object(h.a)({},e),{},{watchedUser:t.user});break;case"REMOVE_USER":n=Object(h.a)(Object(h.a)({},e),{},{users:e.users.filter((function(e){return e._id!==t.userId}))});break;case"SET_USERS":n=Object(h.a)(Object(h.a)({},e),{},{users:t.users});break;case"SET_SCORE":n=Object(h.a)(Object(h.a)({},e),{},{user:Object(h.a)(Object(h.a)({},e.user),{},{score:t.score})})}return n},systemModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING_START":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case"LOADING_DONE":return Object(h.a)(Object(h.a)({},e),{},{isLoading:!1});default:return e}},reviewModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_REVIEWS":return Object(h.a)(Object(h.a)({},e),{},{reviews:t.reviews});case"ADD_REVIEW":return Object(h.a)(Object(h.a)({},e),{},{reviews:[].concat(Object(d.a)(e.reviews),[t.review])});case"REMOVE_REVIEW":return Object(h.a)(Object(h.a)({},e),{},{reviews:e.reviews.filter((function(e){return e._id!==t.reviewId}))});case"UPDATE_REVIEW":return Object(h.a)(Object(h.a)({},e),{},{reviews:e.reviews.map((function(e){return e._id===t.review._id?t.review:e}))});default:return e}}}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,G=Object(u.d)(W,F(Object(u.a)(l.a))),H=n(7),J=n(8),X=n(10),Y=n(9),z=n(6),K=n.p+"static/media/logo.8523ccde.png",$=n(0),Q=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e.changeCount=function(t){console.log("Changing count by:",t);var n={type:"CHANGE_COUNT",diff:t};e.props.dispatch(n)},e}return Object(J.a)(n,[{key:"render",value:function(){var e=this,t=this.props.count;return Object($.jsxs)("section",{children:[Object($.jsx)("img",{src:K,alt:"Logo",style:{maxWidth:"300px"}}),Object($.jsxs)("h2",{children:["Count ",t,Object($.jsx)("button",{onClick:function(){e.changeCount(1)},children:"+"}),Object($.jsx)("button",{onClick:function(){e.changeCount(10)},children:"+10"})]})]})}}]),n}(a.a.Component);var Z=Object(i.b)((function(e){return{count:e.userModule.count}}))(Q),ee=n(46),te=n(77);function ne(e){return Object($.jsxs)("div",{className:"fancy-box",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object($.jsx)("button",{style:{float:"right"},onClick:e.onClose,children:"x"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.children,"\xa0\xa0\xa0\xa0"]})}function re(){return Object($.jsx)("section",{style:{height:"50vh",backgroundColor:"pink"},children:Object($.jsx)("h2",{children:"Contacts"})})}function ae(){var e=Object(r.useState)(["Puki Proj","Muki Proj"]),t=Object(ee.a)(e,2),n=t[0],a=t[1],c=n.map((function(e,t){return Object($.jsx)("div",{className:"proj-preview",onClick:function(t){t.stopPropagation(),a(n.filter((function(t){return t!==e})))},children:e},e)}));return Object($.jsxs)("section",{style:{height:"50vh",backgroundColor:"lightblue"},children:[Object($.jsx)("h2",{children:"Projects"}),Object($.jsx)(te.CSSTransitionGroup,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300,children:c}),Object($.jsx)("button",{onClick:function(e){e.stopPropagation(),a([].concat(Object(d.a)(n),["Babu Proj"+Date.now()%100]))},children:"Add"})]})}function ce(e){var t=Object(r.useState)(30),n=Object(ee.a)(t,2),a=n[0],c=n[1];return Object($.jsxs)("div",{className:"split-pane",style:{display:"flex"},children:[Object($.jsx)("div",{style:{width:a+"%"},onClick:function(){a+10<=100&&c(a+10)},children:e.left}),Object($.jsx)("div",{style:{flex:1},onClick:function(){a>10&&c(a-10)},children:e.right})]})}var oe=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={count:1e3},e.onTellMeMore=function(){console.log("Telling you more")},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"shouldComponentUpdate",value:function(){return!0}},{key:"render",value:function(){var e=this.state.count;return Object($.jsxs)("section",{children:[Object($.jsx)("h2",{children:"About Us"}),Object($.jsx)(se,{children:Object($.jsx)(ce,{left:Object($.jsx)(re,{}),right:Object($.jsx)(ae,{})})}),Object($.jsxs)(ne,{onClose:function(){return console.log("ok,\xa0closing")},children:[Object($.jsxs)("h3",{children:[e.toLocaleString(),"\xa0Followers"]}),Object($.jsx)("button",{onClick:this.onTellMeMore,children:"Tell\xa0me\xa0More"})]}),Object($.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque."})]})}}]),n}(a.a.Component),se=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={error:null,errorInfo:null},e}return Object(J.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object($.jsxs)("div",{children:[Object($.jsx)("h2",{children:"Something went wrong."}),Object($.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object($.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(a.a.Component),ie={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},makeLorem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"],n="";for(;e>0;)e--,n+=t[Math.floor(Math.random()*t.length)]+" ";return n},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},delay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new Promise((function(t){setTimeout(t,e)}))}};var ue="car",le=[],de={query:he,getById:function(e){return v.get(ue,e)},save:function(e){return e._id?v.put(ue,e):(e.owner=_.getLoggedinUser(),v.post(ue,e))},remove:function(e){return v.remove(ue,e)},getEmptyCar:function(){return{vendor:"Susita-"+Date.now()%1e3,price:ie.getRandomIntInclusive(1e3,9e3)}},subscribe:function(e){le.push(e)}};function he(){return v.query(ue)}window.cs=de,window.addEventListener("storage",(function(){console.log("Storage Changed from another Browser!"),he().then((function(e){!function(e){console.log("Notifying Listeners"),le.forEach((function(t){return t(e)}))}(e)}))}));var pe={on:function(e,t){var n=function(e){var n=e.detail;t(n)};return window.addEventListener(e,n),function(){window.removeEventListener(e,n)}},emit:function(e,t){window.dispatchEvent(new CustomEvent(e,{detail:t}))}};function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";pe.emit("show-user-msg",{txt:e,type:t})}function je(e){fe(e,"success")}function be(e){fe(e,"danger")}function ve(e){return function(t){t({type:"ADD_TO_CART",car:e})}}window.myBus=pe,window.showUserMsg=fe;var Oe=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e.onRemoveCar=function(t){e.props.onRemoveCar(t)},e.onAddCar=function(){e.props.onAddCar()},e.onEditCar=function(t){var n=+prompt("New price?"),r=Object(h.a)(Object(h.a)({},t),{},{price:n});e.props.onEditCar(r)},e.addToCart=function(t){console.log("Adding ".concat(t.vendor," to Cart")),e.props.addToCart(t),je("Added to Cart")},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.loadCars()}},{key:"render",value:function(){var e=this,t=this.props.cars;return Object($.jsxs)("div",{children:[Object($.jsx)("h3",{children:"Cars App"}),Object($.jsxs)("main",{children:[Object($.jsx)("button",{onClick:this.onAddCar,children:"Add Car \u26d0"}),Object($.jsx)("ul",{className:"car-list",children:t.map((function(t){return Object($.jsxs)("li",{className:"car-preview",children:[Object($.jsx)("h4",{children:t.vendor}),Object($.jsx)("h1",{children:"\u26d0"}),Object($.jsxs)("p",{children:["Price: ",Object($.jsxs)("span",{children:["$",t.price.toLocaleString()]})]}),Object($.jsxs)("p",{children:["Owner: ",Object($.jsx)("span",{children:t.owner&&t.owner.fullname})]}),Object($.jsxs)("div",{children:[Object($.jsx)("button",{onClick:function(){e.onRemoveCar(t._id)},children:"x"}),Object($.jsx)("button",{onClick:function(){e.onEditCar(t)},children:"Edit"})]}),Object($.jsx)("button",{className:"buy",onClick:function(){e.addToCart(t)},children:"Add to Cart"})]},t._id)}))})]})]})}}]),n}(a.a.Component);var me={loadCars:function(){return function(e){de.query().then((function(t){console.log("Cars from DB:",t),e({type:"SET_CARS",cars:t})})).catch((function(e){be("Cannot load cars"),console.log("Cannot load cars",e)})),de.subscribe((function(t){console.log("Got notified"),e({type:"SET_CARS",cars:t})}))}},onRemoveCar:function(e){return function(t,n){de.remove(e).then((function(){console.log("Deleted Succesfully!"),t({type:"REMOVE_CAR",carId:e}),je("Car removed")})).catch((function(e){be("Cannot remove car"),console.log("Cannot remove car",e)}))}},onAddCar:function(){return function(e){var t=de.getEmptyCar();de.save(t).then((function(t){console.log("Added Car",t),e({type:"ADD_CAR",car:t}),je("Car added")})).catch((function(e){be("Cannot add car"),console.log("Cannot add car",e)}))}},onEditCar:function(e){return function(t){de.save(e).then((function(e){console.log("Updated Car:",e),t({type:"UPDATE_CAR",car:e}),je("Car updated")})).catch((function(e){be("Cannot update car"),console.log("Cannot save car",e)}))}},addToCart:ve},ge=Object(i.b)((function(e){return{cars:e.carModule.cars}}),me)(Oe),xe=n(24),we={add:function(e){return ye.apply(this,arguments)},query:function(e){e&&"?name=".concat(e.name,"&sort=anaAref");return v.query("review")},remove:function(e){return v.remove("review",e)}};function ye(){return(ye=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.byUser=_.getLoggedinUser(),e.next=3,_.getById(t.aboutUserId);case 3:return t.aboutUser=e.sent,n=v.post("review",t),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.query("review");case 2:t=e.sent,window.addEventListener("storage",Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Storage updated"),e.next=3,v.query("review");case 3:(n=e.sent).length===t.length+1&&(console.log("Review Added - localStorage updated from another browser"),k.emit(S,n[n.length-1])),t=n;case 6:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e)})))();function Ce(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"LOADING_START"}),e.next=4,_.getUsers();case 4:n=e.sent,t({type:"SET_USERS",users:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("UserActions: err in loadUsers",e.t0);case 11:return e.prev=11,t({type:"LOADING_DONE"}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()}function Se(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.remove(e);case 3:n({type:"REMOVE_USER",userId:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("UserActions: err in removeUser",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}var ke=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={reviewToEdit:{txt:"",aboutUserId:""}},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState((function(e){return{reviewToEdit:Object(h.a)(Object(h.a)({},e.reviewToEdit),{},Object(xe.a)({},r,a))}}))},e.addReview=function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(r=e.state.reviewToEdit).txt&&r.aboutUserId){t.next=4;break}return t.abrupt("return",alert("All fields are required"));case 4:return t.next=6,e.props.addReview(e.state.reviewToEdit);case 6:e.setState({reviewToEdit:{txt:"",aboutUserId:""}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onRemove=function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.removeReview(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.canRemove=function(t){var n,r;return t.byUser._id===(null===(n=e.props.loggedInUser)||void 0===n?void 0:n._id)||(null===(r=e.props.loggedInUser)||void 0===r?void 0:r.isAdmin)},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.loadReviews(),this.props.loadUsers()}},{key:"render",value:function(){var e=this;return Object($.jsxs)("div",{className:"home",children:[Object($.jsx)("h1",{children:"Reviews and Gossip"}),this.props.reviews&&Object($.jsx)("ul",{className:"review-list",children:this.props.reviews.map((function(t){return Object($.jsxs)("li",{children:[e.canRemove(t)&&Object($.jsx)("button",{onClick:function(){return e.onRemove(t._id)},children:"X"}),Object($.jsxs)("p",{children:["About:",Object($.jsx)(s.b,{to:"user/".concat(t.aboutUser._id),children:t.aboutUser.fullname})]}),Object($.jsx)("h3",{children:t.txt}),Object($.jsxs)("p",{children:["By:",Object($.jsx)(s.b,{to:"user/".concat(t.byUser._id),children:t.byUser.fullname})]})]},t._id)}))}),this.props.users&&this.props.loggedInUser&&Object($.jsxs)("form",{onSubmit:this.addReview,children:[Object($.jsxs)("select",{onChange:this.handleChange,value:this.state.reviewToEdit.aboutUserId,name:"aboutUserId",children:[Object($.jsx)("option",{value:"",children:"Select User"}),this.props.users.map((function(e){return Object($.jsx)("option",{value:e._id,children:e.fullname},e._id)}))]}),Object($.jsx)("textarea",{name:"txt",onChange:this.handleChange,value:this.state.reviewToEdit.txt}),Object($.jsx)("button",{children:"Submit"})]}),Object($.jsx)("hr",{})]})}}]),n}(r.Component),Ee={loadReviews:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we.query();case 3:n=e.sent,t({type:"SET_REVIEWS",reviews:n}),k.on(S,(function(e){t({type:"ADD_REVIEW",review:e})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ReviewActions: err in loadReviews",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},loadUsers:Ce,addReview:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,we.add(e);case 3:return r=t.sent,n({type:"ADD_REVIEW",review:r}),t.next=7,_.changeScore(500);case 7:a=t.sent,n({type:"SET_SCORE",score:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("ReviewActions: err in addReview",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},removeReview:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,we.remove(e);case 3:n({type:"REMOVE_REVIEW",reviewId:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("ReviewActions: err in removeReview",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}},Re=Object(i.b)((function(e){return{reviews:e.reviewModule.reviews,users:e.userModule.users,loggedInUser:e.userModule.user}}),Ee)(ke),_e=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={msg:{txt:""},msgs:[],topic:"Love",isBotMode:!0},e.addMsg=function(t){e.setState((function(e){return{msgs:[].concat(Object(d.a)(e.msgs),[t])}})),e.state.isBotMode&&e.sendBotResponse()},e.sendBotResponse=function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.setState((function(e){return{msgs:[].concat(Object(d.a)(e.msgs),[{from:"Bot",txt:"You are amazing!"}])}}))}),1500)},e.changeTopic=function(){k.emit("chat topic",e.state.topic)},e.sendMsg=function(t){var n;t.preventDefault();var r=(null===(n=e.props.loggedInUser)||void 0===n?void 0:n.fullname)||"Me";k.emit("chat newMsg",{from:r,txt:e.state.msg.txt}),e.setState({msg:{from:"Me",txt:""}})},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(xe.a)({},r,a),e.changeTopic)},e.msgHandleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState((function(e){return{msg:Object(h.a)(Object(h.a)({},e.msg),{},Object(xe.a)({},r,a))}}))},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){k.setup(),k.emit("chat topic",this.state.topic),k.on("chat addMsg",this.addMsg)}},{key:"componentWillUnmount",value:function(){k.off("chat addMsg",this.addMsg),k.terminate(),clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this;return Object($.jsxs)("div",{className:"chat",children:[Object($.jsxs)("h2",{children:["Lets Chat about ",this.state.topic]}),Object($.jsxs)("label",{children:[Object($.jsx)("input",{type:"checkbox",name:"isBotMode",checked:this.state.isBotMode,onChange:function(t){return e.setState({isBotMode:t.target.checked})}}),"Bot Mode"]}),Object($.jsxs)("div",{children:[Object($.jsxs)("label",{children:[Object($.jsx)("input",{type:"radio",name:"topic",value:"Love",checked:"Love"===this.state.topic,onChange:this.handleChange}),"Love"]}),Object($.jsxs)("label",{children:[Object($.jsx)("input",{type:"radio",name:"topic",value:"Politics",checked:"Politics"===this.state.topic,onChange:this.handleChange}),"Politics"]})]}),Object($.jsxs)("form",{onSubmit:this.sendMsg,children:[Object($.jsx)("input",{type:"text",value:this.state.msg.txt,onChange:this.msgHandleChange,name:"txt",autoComplete:"off"}),Object($.jsx)("button",{children:"Send"})]}),Object($.jsx)("ul",{children:this.state.msgs.map((function(e,t){return Object($.jsxs)("li",{children:[e.from,": ",e.txt]},t)}))})]})}}]),n}(r.Component),Ae=Object(i.b)((function(e){return{loggedInUser:e.userModule.loggedInUser}}),{})(_e),Me=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.loadUsers()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.users,r=e.removeUser,a=e.loadUsers;return Object($.jsxs)("section",{className:"admin",children:[Object($.jsx)("button",{onClick:a,children:"Refresh Users"}),t&&"Loading...",n&&Object($.jsx)("ul",{children:n.map((function(e){return Object($.jsxs)("li",{children:[Object($.jsx)("pre",{children:JSON.stringify(e,null,2)}),Object($.jsxs)("button",{onClick:function(){r(e._id)},children:["Remove ",e.username]})]},e._id)}))})]})}}]),n}(a.a.Component);var Ue={loadUsers:Ce,removeUser:Se},Te=[{path:"/",component:Z,label:"Home \ud83c\udfe0"},{path:"/car",component:ge,label:"Cars"},{path:"/review",component:Re,label:"Reviews"},{path:"/chat",component:Ae,label:"Chat"},{path:"/about",component:oe,label:"About us"},{path:"/admin",component:Object(i.b)((function(e){return{isLoading:e.systemModule.isLoading,users:e.userModule.users}}),Ue)(Me),label:"Admin Only"}],Ie=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={credentials:{username:"",password:"",fullname:""},isSignup:!1,users:[]},e.clearState=function(){e.setState({clearTemplate:{credentials:{username:"",password:"",fullname:""},isSignup:!1}})},e.handleChange=function(t){var n=t.target.name,r=t.target.value;e.setState({credentials:Object(h.a)(Object(h.a)({},e.state.credentials),{},Object(xe.a)({},n,r))})},e.onLogin=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),e.state.credentials.username&&(e.props.onLogin(e.state.credentials),e.clearState())},e.onSignup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),e.state.credentials.username&&e.state.credentials.password&&e.state.credentials.fullname&&(e.props.onSignup(e.state.credentials),e.clearState())},e.toggleSignup=function(){e.setState({isSignup:!e.state.isSignup})},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getUsers();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.credentials,t=e.username,n=e.password,r=e.fullname,a=this.state,c=a.isSignup,o=a.users;return Object($.jsxs)("div",{className:"login-page",children:[Object($.jsx)("p",{children:Object($.jsx)("button",{className:"btn-link",onClick:this.toggleSignup,children:c?"Login":"Signup"})}),!c&&Object($.jsxs)("form",{className:"login-form",onSubmit:this.onLogin,children:[Object($.jsxs)("select",{name:"username",value:t,onChange:this.handleChange,children:[Object($.jsx)("option",{value:"",children:"Select User"}),o.map((function(e){return Object($.jsx)("option",{value:e.username,children:e.fullname},e._id)}))]}),Object($.jsx)("button",{children:"Login!"})]}),Object($.jsx)("div",{className:"signup-section",children:c&&Object($.jsxs)("form",{className:"signup-form",onSubmit:this.onSignup,children:[Object($.jsx)("input",{type:"text",name:"fullname",value:r,placeholder:"Fullname",onChange:this.handleChange,required:!0}),Object($.jsx)("input",{type:"text",name:"username",value:t,placeholder:"Username",onChange:this.handleChange,required:!0}),Object($.jsx)("input",{type:"password",name:"password",value:n,placeholder:"Password",onChange:this.handleChange,required:!0}),Object($.jsx)("button",{children:"Signup!"})]})})]})}}]),n}(a.a.Component),Le=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onLogin=function(t){e.props.onLogin(t)},e.onSignup=function(t){e.props.onSignup(t)},e.onLogout=function(){e.props.onLogout()},e}return Object(J.a)(n,[{key:"render",value:function(){var e,t=this.props.user;return Object($.jsxs)("header",{className:"app-header",children:[Object($.jsxs)("nav",{children:[Te.map((function(e){return Object($.jsx)(s.c,{exact:!0,to:e.path,children:e.label},e.path)})),t&&Object($.jsxs)("span",{className:"user-info",children:[Object($.jsxs)(s.b,{to:"user/".concat(t._id),children:[t.fullname,Object($.jsx)("span",{className:"score",children:null===(e=t.score)||void 0===e?void 0:e.toLocaleString()})]}),Object($.jsx)("button",{onClick:this.onLogout,children:"Logout"})]}),!t&&Object($.jsx)("section",{className:"user-info",children:Object($.jsx)(Ie,{onLogin:this.onLogin,onSignup:this.onSignup})})]}),Object($.jsx)("h1",{children:"My App"})]})}}]),n}(a.a.Component);var De={onLogin:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.login(e);case 3:r=t.sent,n({type:"SET_USER",user:r}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),be("Cannot login"),console.log("Cannot login",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},onSignup:function(e){return function(t){_.signup(e).then((function(e){t({type:"SET_USER",user:e})})).catch((function(e){be("Cannot signup"),console.log("Cannot signup",e)}))}},onLogout:function(){return function(e){_.logout().then((function(){return e({type:"SET_USER",user:null})})).catch((function(e){be("Cannot logout"),console.log("Cannot logout",e)}))}},loadUsers:Ce,removeUser:Se},Ne=Object(i.b)((function(e){return{users:e.userModule.users,user:e.userModule.user,count:e.userModule.count,isLoading:e.systemModule.isLoading}}),De)(Le),qe=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={msg:null},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.removeEvent=pe.on("show-user-msg",(function(t){e.setState({msg:t}),setTimeout((function(){e.setState({msg:null})}),2500)}))}},{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"render",value:function(){var e=this;if(!this.state.msg)return Object($.jsx)("span",{});var t=this.state.msg.type||"";return Object($.jsxs)("section",{className:"user-msg "+t,children:[Object($.jsx)("button",{onClick:function(){e.setState({msg:null})},children:"x"}),this.state.msg.txt]})}}]),n}(a.a.Component),Pe=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isCartShown:!1},e.removeFromCart=function(t){e.props.removeFromCart(t)},e.checkout=function(){e.props.checkout()},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){}},{key:"cartTotal",get:function(){return this.props.cart.reduce((function(e,t){return e+t.price}),0)}},{key:"render",value:function(){var e=this,t=this.state.isCartShown,n=this.props,r=n.count,a=n.cart;return Object($.jsxs)("footer",{className:"app-footer",children:[Object($.jsxs)("p",{children:["coffeerights 2021 - count: ",r]}),a.length>0&&Object($.jsxs)("h5",{children:[Object($.jsx)("span",{children:a.length})," Products in your Cart",Object($.jsxs)("button",{className:"btn-link",onClick:function(t){t.preventDefault(),e.setState((function(e){return{isCartShown:!e.isCartShown}}))},children:["(",t?"hide":"show",")"]})]}),t&&a.length>0&&Object($.jsxs)("section",{className:"cart",children:[Object($.jsx)("h5",{children:"Your Cart"}),Object($.jsx)("ul",{children:a.map((function(t,n){return Object($.jsxs)("li",{children:[Object($.jsx)("button",{onClick:function(){e.removeFromCart(t._id)},children:"x"}),t.vendor]},n)}))}),Object($.jsxs)("p",{children:["Total: $",this.cartTotal.toLocaleString()," "]}),Object($.jsx)("button",{onClick:this.checkout,children:"Checkout"})]}),Object($.jsx)(qe,{})]})}}]),n}(a.a.Component);var Be={checkout:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n(),a=r.carModule.cart.reduce((function(e,t){return e+t.price}),0),e.next=5,_.changeScore(-a);case 5:c=e.sent,t({type:"SET_SCORE",score:c}),t({type:"CLEAR_CART"}),je("Charged you: $"+a.toLocaleString()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),be("Cannot checkout, login first"),console.log("CarActions: err in checkout",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},addToCart:ve,removeFromCart:function(e){return function(t){t({type:"REMOVE_FROM_CART",carId:e})}}},Ve=Object(i.b)((function(e){return{count:e.userModule.count,cart:e.carModule.cart}}),Be)(Pe),We=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.loadAndWatchUser(this.props.match.params.id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.user;return Object($.jsxs)("section",{className:"user-details",children:[Object($.jsx)("h1",{children:"User Details"}),e&&Object($.jsxs)("div",{children:[Object($.jsx)("h3",{children:e.fullname}),Object($.jsx)("pre",{children:JSON.stringify(e,null,2)})]})]})}}]),n}(r.Component),Fe={loadAndWatchUser:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getById(e);case 3:r=t.sent,n({type:"SET_WATCHED_USER",user:r}),k.emit("user-watch",e),k.off(C),k.on(C,(function(e){console.log("USER UPADTED FROM SOCKET"),n({type:"SET_WATCHED_USER",user:e})})),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),be("Cannot load user"),console.log("Cannot load user",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},Ge=Object(i.b)((function(e){return{user:e.userModule.watchedUser}}),Fe)(We),He=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object($.jsxs)("div",{children:[Object($.jsx)(Ne,{}),Object($.jsx)("main",{children:Object($.jsxs)(z.c,{children:[Te.map((function(e){return Object($.jsx)(z.a,{exact:!0,component:e.component,path:e.path},e.path)})),Object($.jsx)(z.a,{path:"/user/:id",component:Ge})]})}),Object($.jsx)(Ve,{})]})}}]),n}(a.a.Component);n(150);o.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(i.a,{store:G,children:Object($.jsx)(s.a,{children:Object($.jsx)(He,{})})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.09f38975.chunk.js.map