(this.webpackJsonpatlasbounty=this.webpackJsonpatlasbounty||[]).push([[8],{221:function(e,t,n){e.exports=n(445)},227:function(e,t,n){var r={"./ion-action-sheet-controller_8.entry.js":[451,43],"./ion-action-sheet-ios.entry.js":[452,44],"./ion-action-sheet-md.entry.js":[453,45],"./ion-alert-ios.entry.js":[454,24],"./ion-alert-md.entry.js":[455,25],"./ion-app_8-ios.entry.js":[456,11],"./ion-app_8-md.entry.js":[457,12],"./ion-avatar_3-ios.entry.js":[458,46],"./ion-avatar_3-md.entry.js":[459,47],"./ion-back-button-ios.entry.js":[460,48],"./ion-back-button-md.entry.js":[461,49],"./ion-backdrop-ios.entry.js":[462,81],"./ion-backdrop-md.entry.js":[463,82],"./ion-button_2-ios.entry.js":[464,50],"./ion-button_2-md.entry.js":[465,51],"./ion-card_5-ios.entry.js":[466,52],"./ion-card_5-md.entry.js":[467,53],"./ion-checkbox-ios.entry.js":[468,54],"./ion-checkbox-md.entry.js":[469,55],"./ion-chip-ios.entry.js":[470,56],"./ion-chip-md.entry.js":[471,57],"./ion-col_3.entry.js":[472,83],"./ion-datetime_3-ios.entry.js":[473,20],"./ion-datetime_3-md.entry.js":[474,21],"./ion-fab_3-ios.entry.js":[475,58],"./ion-fab_3-md.entry.js":[476,59],"./ion-img.entry.js":[477,84],"./ion-infinite-scroll_2-ios.entry.js":[478,39],"./ion-infinite-scroll_2-md.entry.js":[479,40],"./ion-input-ios.entry.js":[480,60],"./ion-input-md.entry.js":[481,61],"./ion-item-option_3-ios.entry.js":[482,62],"./ion-item-option_3-md.entry.js":[483,63],"./ion-item_8-ios.entry.js":[484,64],"./ion-item_8-md.entry.js":[485,65],"./ion-loading-ios.entry.js":[486,26],"./ion-loading-md.entry.js":[487,27],"./ion-menu_4-ios.entry.js":[488,18],"./ion-menu_4-md.entry.js":[489,19],"./ion-modal-ios.entry.js":[490,14],"./ion-modal-md.entry.js":[491,15],"./ion-nav_5.entry.js":[492,13],"./ion-popover-ios.entry.js":[493,16],"./ion-popover-md.entry.js":[494,17],"./ion-progress-bar-ios.entry.js":[495,66],"./ion-progress-bar-md.entry.js":[496,67],"./ion-radio_2-ios.entry.js":[497,32],"./ion-radio_2-md.entry.js":[498,33],"./ion-range-ios.entry.js":[499,68],"./ion-range-md.entry.js":[500,69],"./ion-refresher_2-ios.entry.js":[501,41],"./ion-refresher_2-md.entry.js":[502,42],"./ion-reorder_2-ios.entry.js":[503,37],"./ion-reorder_2-md.entry.js":[504,38],"./ion-ripple-effect.entry.js":[505,85],"./ion-route_4.entry.js":[506,70],"./ion-searchbar-ios.entry.js":[507,28],"./ion-searchbar-md.entry.js":[508,29],"./ion-segment_2-ios.entry.js":[509,71],"./ion-segment_2-md.entry.js":[510,72],"./ion-select_3-ios.entry.js":[511,34],"./ion-select_3-md.entry.js":[512,35],"./ion-slide_2-ios.entry.js":[513,86],"./ion-slide_2-md.entry.js":[514,87],"./ion-spinner.entry.js":[515,73],"./ion-split-pane-ios.entry.js":[516,88],"./ion-split-pane-md.entry.js":[517,89],"./ion-tab-bar_2-ios.entry.js":[518,74],"./ion-tab-bar_2-md.entry.js":[519,75],"./ion-tab_2.entry.js":[520,36],"./ion-text.entry.js":[521,76],"./ion-textarea-ios.entry.js":[522,77],"./ion-textarea-md.entry.js":[523,78],"./ion-toast-ios.entry.js":[524,30],"./ion-toast-md.entry.js":[525,31],"./ion-toggle-ios.entry.js":[526,22],"./ion-toggle-md.entry.js":[527,23],"./ion-virtual-scroll.entry.js":[528,90]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=227,e.exports=o},228:function(e,t,n){var r={"./ion-icon.entry.js":[532,98]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=228,e.exports=o},248:function(e,t){},250:function(e,t){},280:function(e,t){},281:function(e,t){},325:function(e,t){},327:function(e,t){},350:function(e,t){},444:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(76),a=n.n(i),s=n(20),c=n(6),l=n(217),u=(n(233),n(8)),m=n(9),d=n(12),f=n(11),y=n(13),p=n(220),h=n.n(p),j=function(e,t,n,r){var o={aggregateBy:[{dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],bucketByTime:{durationMillis:864e5},startTimeMillis:t.getTime(),endTimeMillis:n.getTime()};h.a.post("https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",{json:o,headers:{Authorization:"Bearer "+e}},(function(e,t,n){if(e||n.error)console.log(n);else{var o=n.bucket.flatMap((function(e){return e.dataset.flatMap((function(e){return e.point.flatMap((function(e){return e.value.flatMap((function(e){return e.intVal}))}))}))})).reduce((function(e,t){return e+t}));r(o)}}))},g=function(e,t){var n=Math.floor(1e-4*e.steps*100)/100,r=Math.min(n,t.cost),o=0;return n>t.cost&&(o=Math.floor(100*(n-t.cost))),{amount:r,points:o}},v=n(28),b=(n(200),n(118),function(){try{v.initializeApp({apiKey:"AIzaSyBJT5z1sGK3A2NH5r1aZPM3EF_pGAQar1I",authDomain:"atlas-bounty-1574529450782.firebaseapp.com",databaseURL:"https://atlas-bounty-1574529450782.firebaseio.com",projectId:"atlas-bounty-1574529450782",storageBucket:"atlas-bounty-1574529450782.appspot.com",messagingSenderId:"496812476716",appId:"1:496812476716:web:5005c999dbc35b1ca04489"})}catch(e){}return v.app()}),E=function(e,t){var n=b().firestore();null!==e&&n.collection("users").doc(e).get().then((function(e){if(e.exists){var r=e.data().tier;n.collection("tiers").doc(r).get().then((function(e){e.exists?t(e.data()):t(null)}))}else t(null)})).catch((function(e){console.log(e),t(null)}))},O=function(e){var t=b(),n=t.firestore();if(t.auth().currentUser){var r=t.auth().currentUser;n.collection("users").doc(r.uid).set({tier:null},{merge:!0}).then((function(){e()}))}},_=function(e){var t=new Date;return"month"===e&&(t.setDate(1),t.setHours(0,0,0,0)),t},S={display:"flex",justifyContent:"center",alignItems:"center","flex-direction":"column",height:"100%"},k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={redirectToLogin:!1,redirectToSignUp:!1,profileImage:"",givenName:"",tier:null,value:0,points:0,data:{steps:0}},b(),null!=v.auth().currentUser&&n.userLoaded(v.auth().currentUser),v.auth().onAuthStateChanged((function(e){n.userLoaded(e)})),n}return Object(y.a)(t,e),Object(m.a)(t,[{key:"userLoaded",value:function(e){var t=this;if(e){var n=localStorage.getItem("access-token");E(e.uid,(function(e){if(console.log(e),null===e)t.setState((function(e){return{redirectToSignUp:!0}}));else{var r=_(e.period);j(n,r,new Date,(function(n){var r=g({steps:n},e);t.setState((function(t){return{value:r.amount,points:r.points,data:{steps:n},tier:e}}))}))}})),this.setState((function(t){return{profileImage:e.photoURL,displayName:e.displayName}}))}else this.setState((function(e){return{redirectToLogin:!0}}))}},{key:"logout",value:function(){v.auth().signOut(),localStorage.removeItem("access-token"),this.setState((function(e){return{redirectToLogin:!0}}))}},{key:"unsubscribe",value:function(){var e=this;O((function(){e.setState((function(e){return{redirectToSignUp:!0}}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement(c.l,null,o.a.createElement(c.j,null,this.state.redirectToLogin?o.a.createElement(s.a,{to:"/login"}):o.a.createElement("div",null),this.state.redirectToSignUp?o.a.createElement(s.a,{to:"/signup"}):o.a.createElement("div",null),o.a.createElement("div",{style:S},o.a.createElement("h1",null,"ATLAS BOUNTY"),o.a.createElement(c.c,null,o.a.createElement("img",{src:this.state.profileImage})),o.a.createElement("h2",null,this.state.displayName),o.a.createElement("div",{className:"font value-display"},o.a.createElement("span",{style:{fontSize:"1em"}},"$"),o.a.createElement("span",{style:{fontSize:"4em"}},this.state.value),o.a.createElement("span",{style:{fontSize:"1em"}},"/",this.state.tier?this.state.tier.cost:"")),o.a.createElement("div",{className:"value-display"},o.a.createElement("div",{className:"label",style:{fontSize:"2em"}},this.state.points),o.a.createElement("div",{style:{fontSize:"0.8em"}},"POINTS THIS ",this.state.tier?this.state.tier.period.toUpperCase():"")),o.a.createElement("div",{className:"value-display"},o.a.createElement("div",{className:"label",style:{fontSize:"2em"}},this.state.data.steps),o.a.createElement("div",{style:{fontSize:"0.8em"}},"STEPS THIS ",this.state.tier?this.state.tier.period.toUpperCase():"")),o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement(c.d,{onClick:function(){return e.logout()},fill:"clear"},"Sign Out"),o.a.createElement(c.d,{onClick:function(){return e.unsubscribe()},fill:"clear"},"Unsubscribe"))))}}]),t}(o.a.Component),T=(n(444),{display:"flex",justifyContent:"center",alignItems:"center","flex-direction":"column",height:"100%"}),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={redirectToHome:!1},b(),n}return Object(y.a)(t,e),Object(m.a)(t,[{key:"signin",value:function(){var e=this,t=new v.auth.GoogleAuthProvider;t.addScope("https://www.googleapis.com/auth/fitness.activity.read"),v.auth().signInWithPopup(t).then((function(t){t.credential.accessToken;localStorage.setItem("access-token",t.credential.accessToken),e.setState((function(e){return{redirectToHome:!0}}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement(c.l,null,o.a.createElement(c.j,null,o.a.createElement("div",{style:T},o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement("h1",null,"ATLAS BOUNTY"),o.a.createElement("h2",null,"The world is your bounty."),o.a.createElement("div",{style:{flexGrow:1}}),o.a.createElement(c.d,{onClick:function(){return e.signin()}},"Log In With Google"),this.state.redirectToHome?o.a.createElement(s.a,{to:"/home"}):o.a.createElement("div",null),o.a.createElement("div",{style:{flexGrow:1}}))))}}]),t}(o.a.Component),x=n(59);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(e){b().firestore().collection("tiers").get().then((function(t){var n=t.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data())}));e(n)}))},C=function(e,t){var n=b(),r=n.firestore();if(n.auth().currentUser){var o=n.auth().currentUser;r.collection("users").doc(o.uid).set({tier:e},{merge:!0}).then((function(){t()}))}},N={display:"flex",justifyContent:"center",alignItems:"center","flex-direction":"column",height:"100%"},L=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={redirectToHome:!1,redirectToLogin:!1,tiers:[]},I((function(e){n.setState((function(t){return{tiers:e}}))})),n}return Object(y.a)(t,e),Object(m.a)(t,[{key:"didClickTier",value:function(e){var t=this;C(e.id,(function(){t.setState((function(e){return{redirectToHome:!0}}))}))}},{key:"logout",value:function(){v.auth().signOut(),localStorage.removeItem("access-token"),this.setState((function(e){return{redirectToLogin:!0}}))}},{key:"render",value:function(){var e=this;return o.a.createElement(c.l,null,o.a.createElement(c.j,null,this.state.redirectToLogin?o.a.createElement(s.a,{to:"/login"}):o.a.createElement("div",null),o.a.createElement("div",{style:N},o.a.createElement("h1",null,"ATLAS BOUNTY"),o.a.createElement("h2",null,"Subscribe"),this.state.redirectToHome?o.a.createElement(s.a,{to:"/home"}):o.a.createElement("div",null),this.state.tiers.map((function(t){return o.a.createElement(c.e,{className:"hover-card",onClick:function(){e.didClickTier(t)}},o.a.createElement(c.g,{style:{width:350}},o.a.createElement(c.h,null,t.name.toUpperCase()),o.a.createElement(c.i,null,"$",o.a.createElement("span",{style:{fontSize:"3em"}},t.cost),"/",t.period),o.a.createElement(c.f,null,t.description)))})),o.a.createElement(c.d,{onClick:function(){return e.logout()},fill:"clear"},"Sign Out"))))}}]),t}(o.a.Component),P=function(){return o.a.createElement(c.b,null,o.a.createElement(l.a,null,o.a.createElement(c.m,null,o.a.createElement(s.b,{path:"/home",component:k,exact:!0}),o.a.createElement(s.b,{exact:!0,path:"/",render:function(){return o.a.createElement(s.a,{to:"/home"})}}),o.a.createElement(s.b,{path:"/login",component:w,exact:!0}),o.a.createElement(s.b,{path:"/signup",component:L,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[221,9,10]]]);
//# sourceMappingURL=main.55e70839.chunk.js.map