(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("c511")},"07ea":function(t,e,a){},"0f25":function(t,e,a){"use strict";a("a07d")},1195:function(t,e,a){t.exports=a.p+"img/avatar.f055d120.png"},3445:function(t,e,a){},5538:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("Navbar")],1),a("div",{attrs:{role:"main",id:"componentView"}},[a("keep-alive",[a("router-view")],1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"app"}},[a("b-navbar",{staticClass:"navbar navbar-expand-lg",attrs:{toggleable:"lg"}},[a("a",{staticClass:"nav-item",attrs:{id:"logoname"}},[a("router-link",{attrs:{id:"toHome",tag:"nav-item","aria-labelledby":"homeLabel",to:"/home"}},[t._v("\n          NOLONOLOPLUS\n        ")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{title:"Site by"}},[a("router-link",{attrs:{id:"toAboutUs",tag:"nav-item","aria-labelledby":"AboutUsLabel",to:"/about"}},[t._v("\n                ABOUT US\n              ")])],1),this.$store.state.username?[a("b-nav-item",{attrs:{title:"Profile"}},[a("router-link",{attrs:{id:"toProfile",tag:"nav-item","aria-labelledby":"profileLabel",to:"/profile"}},[t._v("\n                  PROFILE\n                ")])],1),a("b-nav-item",{attrs:{title:"Logout"},on:{click:function(e){return t.logout()}}},[a("router-link",{attrs:{id:"toLogout",tag:"nav-item","aria-labelledby":"loginLabel",to:"/home"}},[a("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),t._v(" LOGOUT\n                ")],1)],1)]:[a("b-nav-item",{attrs:{title:"Login"}},[a("router-link",{attrs:{id:"toLogin",tag:"nav-item","aria-labelledby":"loginLabel",to:"/login"}},[t._v("\n                  LOGIN\n                ")])],1)]],2)],1)],1)],1)])},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"login"}},[a("div",{staticClass:"flex-container",attrs:{id:"logContent"}},[t._m(0),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"username"}},[t._v("Username")]),a("b-form-input",{attrs:{placeholder:"Enter Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"pass"}},[t._v("Password")]),a("b-form-input",{attrs:{type:"password",placeholder:"Enter Password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),a("div",{attrs:{id:"loginfo"}},[t._v(" "+t._s(this.errorMsg)+" ")]),a("div",{attrs:{id:"newReg"}},[a("router-link",{attrs:{id:"toHome","aria-labelledby":"newRegLabel",to:"/new-client"}},[t._v("\n          Clicca qui per registrarti\n          ")])],1),a("div",[a("b-button",{attrs:{id:"EnterlogBtn"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1),a("p",{attrs:{id:"infoFoot"}},[t._v(" per qualsiasi problema: nolonoloplus.yacht@gmail.com ")])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container",attrs:{id:"header"}},[n("img",{staticClass:"avatar",attrs:{src:a("1195")}}),n("p",{attrs:{id:"logTitle"}},[t._v("Login")])])}],d=(a("e9c4"),a("bc3a")),u=a.n(d),f=u.a.create({baseURL:"https://site202133.tw.cs.unibo.it/",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*",dataType:"jsonp"}}),p={name:"LoginModal",data:function(){return{username:"",pass:"",clientInfo:[],loggedIN:!1,errorMsg:""}},methods:{prova:function(){},login:function(){var t=this;f.get("/allClients/"+this.username).then((function(e){t.clientInfo=e.data,t.controlInfo(t.clientInfo,t.pass)})).catch((function(t){console.log(t)}))},controlInfo:function(t,e){for(var a in t)if(t[a].password==e){this.loggedIN=!0}this.loggedIN?(this.$store.commit("setUsername",this.username),localStorage.setItem("CurrentUser",JSON.stringify(this.username)),this.$router.push({path:"/home"})):this.errorMsg="non è stato trovato un utente con questi username/password, controllare e riprovare."}}},h=p,m=(a("81b2"),a("2877")),v=Object(m["a"])(h,l,c,!1,null,"439b8339",null),b=v.exports,g=a("2f62");n["default"].use(g["a"]);var _=new g["a"].Store({state:{username:null},mutations:{setUsername:function(t,e){t.username=e}}}),C={name:"Navbar",components:{LoginModal:b},data:function(){return{loggedIN:!1}},mounted:function(){localStorage.getItem("CurrentUser")&&(this.$store.state.username=JSON.parse(localStorage.getItem("CurrentUser")))},methods:{logout:function(){this.$store.commit("setUsername",!1),localStorage.removeItem("CurrentUser")}}},w=C,I=(a("da64"),Object(m["a"])(w,o,r,!1,null,"84df2152",null)),x=I.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.normal?[t._m(0),a("div",[a("SearchBar",{on:{childToParent:t.filter}})],1),a("div",{staticClass:"flex-container",attrs:{id:"main_page"}},t._l(t.showInfo,(function(e,n){return a("b-card",{key:e.prod_id,staticClass:"boat-images"},[a("img",{staticClass:"post_image",attrs:{src:e.image,alt:"Card image cap"}}),a("b-card-body",[a("h3",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),a("h4",{staticClass:"title"},[t._v(" "+t._s(e.brand)+" ")]),a("div",{staticClass:"details"},[a("ul",{staticClass:"d-flex flex-wrap pl-0"},[a("li",{staticClass:"title"},[t._v("Velocità:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(e.speed)+" ")])]),a("li",{staticClass:"title"},[t._v("Lunghezza:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(e.length)+" ")])]),a("li",{staticClass:"title"},[t._v("Ospiti:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(e.guests)+" ")])]),a("li",{staticClass:"title"},[t._v("Anno:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(e.year)+" ")])])])])]),a("b-card-footer",[a("b-button",{staticClass:"noleggioBtn",attrs:{type:"button",id:n},on:{click:function(e){return t.change(n)}}},[t._v("\n                NOLEGGIA\n              ")])],1)],1)})),1)]:t.normal?t._e():[a("RentPage",{attrs:{parentData:t.mydata},on:{childToParent:t.onChildBack}})],t._m(1)],2)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"introduzione"}},[a("br"),t._v("\n        NoloNoloPlus, fondata nel 2021 a Bologna, è specializzata nel noleggio di imbarcazioni nel Mediterraneo. Sfogliate la nostra ampia selezione di barche a noleggio per \n        tutti i portafogli. Contattateci per qualsiasi richiesta - vi garantiamo la risposta più veloce del settore.\n      ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"flex-container",attrs:{id:"footer"}},[a("div",{staticClass:"element"},[a("h3",{staticClass:"title"},[t._v("CONTATTACI ")]),t._v(" \n            nolonoloplus.yacht@gmail.com\n        ")])])])}],D=(a("d3b7"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex-container",attrs:{id:"cont1"}},[a("div",{staticClass:"flex-container",attrs:{id:"searchBar"}},[a("b-dropdown",{attrs:{"toggle-class":"customDropdown",text:"applica un filtro ",variant:"none"}},[a("h6",[t._v(" Tipologie ")]),a("b-form-checkbox-group",{attrs:{options:t.type,multiple:""},model:{value:t.boat,callback:function(e){t.boat=e},expression:"boat"}}),a("h6",[t._v(" Lunghezze ")]),a("b-form-checkbox-group",{attrs:{options:t.boatL,multiple:""},model:{value:t.lenght,callback:function(e){t.lenght=e},expression:"lenght"}}),a("h6",[t._v(" Anno ")]),a("b-form-checkbox-group",{attrs:{options:t.boatY,multiple:""},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),a("b-button",{attrs:{id:"subButtom"},on:{click:t.emitToParent}},[t._v(" SUBMIT ")]),a("b-button",{attrs:{id:"resetButtom"},on:{click:t.resetFilter}},[t._v(" RESET ")])],1)])])}),O=[],R={name:"SearchBar",data:function(){return{boat:[],lenght:[],year:[],type:[{value:"yacht",text:"Yacht"},{value:"barca",text:"Barca a remi"},{value:"gommoni",text:"Gommone"}],boatL:[{value:"20",text:"20-30 metri"},{value:"30",text:"30-40 metri"},{value:"40",text:"40-50 metri"},{value:"50",text:"50-60 metri"},{value:"60",text:">60 metri"}],boatY:[{value:"00",text:"2000-2005"},{value:"05",text:"2005-2010"},{value:"10",text:"2010-2015"},{value:"15",text:">2015"}]}},methods:{emitToParent:function(t){var e=[this.boat,this.lenght,this.year];this.$emit("childToParent",e)},resetFilter:function(t){console.log("ciao");var e="reset";this.boat=[],this.lenght=[],this.year=[],this.$emit("childToParent",e)},search:function(){console.log(this.selected)}}},P=R,E=(a("93c2"),Object(m["a"])(P,D,O,!1,null,"6cacb607",null)),S=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"rent_page"}},[a("b-button",{on:{click:t.emitToParent}},[a("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" PRODOTTI\n  ")],1),a("b-card",{staticClass:"boat-images"},[a("img",{staticClass:"post_image",attrs:{src:this.parentData.image,alt:"Card image cap"}}),a("b-card-body",[a("h3",{staticClass:"title"},[t._v(" "+t._s(this.parentData.name)+" ")]),a("h4",{staticClass:"title"},[t._v(" "+t._s(this.parentData.brand)+" ")]),a("div",{staticClass:"details"},[a("ul",{staticClass:"d-flex flex-wrap pl-0"},[a("li",{staticClass:"title"},[t._v("Velocità:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.speed)+" ")])]),a("li",{staticClass:"title"},[t._v("Lunghezza:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.length)+" ")])]),a("li",{staticClass:"title"},[t._v("Ospiti:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.guests)+" ")])]),a("li",{staticClass:"title"},[t._v("Anno:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.year)+" ")])]),a("li",{staticClass:"title"},[t._v("Due parole:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.summary)+" ")])])])])]),a("div",{staticClass:"flex-container",attrs:{id:"calculate"}},[a("label",{attrs:{for:"start-datepicker"}},[t._v("Inizio noleggio")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{min:new Date,id:"start-datepicker"},model:{value:t.startD,callback:function(e){t.startD=e},expression:"startD"}}),a("label",{attrs:{for:"end-datepicker"}},[t._v("Fine noleggio")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{min:t.startD,id:"end-datepicker"},model:{value:t.endD,callback:function(e){t.endD=e},expression:"endD"}}),a("div",{staticClass:"flex-container",attrs:{id:"priceTab"}},[a("b-button",{on:{click:function(e){return t.calc()}}},[t._v("TOTALE: ")]),a("div",{attrs:{id:"total-price"}},[a("h5",[t._v(" "+t._s(t.total)+" € ")])])],1),this.payment?[a("div",{attrs:{id:"payTab"}},[a("b-form-group",{attrs:{label:"METODO DI PAGAMENTO"}},[a("b-form-checkbox-group",{attrs:{options:t.type},on:{change:function(e){return t.pay(t.checked)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(" "+t._s(t.type.text)+" ")])],1)],1)]:t._e()],2)],1),this.$store.state.username?t._e():[a("div",{staticClass:"flex-container",attrs:{id:"disclaimer"}},[a("font-awesome-icon",{attrs:{icon:"exclamation-circle"}}),a("h6",[t._v(" Avvisiamo che il prezzo calcolato è indicativo e non tiene conto delle\n            disponibilià del prodotto. \n            Necessario fare login per controllare.")])],1)],a("div",{staticClass:"flex-container",attrs:{id:"modal-container"}},[a("b-modal",{attrs:{"ok-title":"Conferma",id:"recapModal"},on:{ok:function(e){return t.createRent()}}},[a("h2",[t._v(" Il tuo noleggio ")]),a("div",{staticClass:"details"},[a("ul",{staticClass:"d-flex flex-wrap pl-0"},[a("li",{staticClass:"title"},[t._v("Imbarcazione:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.parentData.name)+" ")])]),a("li",{staticClass:"title"},[t._v("Data di inizio:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.startD)+" ")])]),a("li",{staticClass:"title"},[t._v("Data di fine:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.endD)+" ")])]),a("li",{staticClass:"title"},[t._v("Prezzo:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.total)+" ")])]),a("li",{staticClass:"title"},[t._v("Metodo di pagamento:"),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.paymethod)+" ")])])])])])],1)],2)},L=[],N={name:"RentPage",props:{parentData:""},data:function(){return{loading:!0,startD:"",endD:"",home:!0,total:"//",payment:!1,noleggi:[],newRent:{},paymethod:null,checked:"",type:[{value:"paypal",text:"PayPal"},{value:"carta",text:"Carta di credito"},{value:"satispay",text:"Satispay"},{value:"bonifico",text:"Bonifico"}]}},mounted:function(){var t=this;scroll(0,0),f.get("/rentByProd/"+this.parentData.prod_id).then((function(e){t.noleggi=e.data}))},methods:{controlDate:function(){console.log("sono dentro controldate");var t=this.noleggi,e=new Date(this.startD),a=new Date(this.endD),n=!0;return t.forEach((function(t){var s=new Date(t.start_date),i=new Date(t.end_date);(e>=s&&e<=i||a>=s&&a<=i||e<=s&&a>=s)&&(n=!1)})),console.log("dentro è:"+n),n},calc:function(){var t=new Date(this.endD)-new Date(this.startD),e=t/864e5+1,a=this.defineSeason(e),n=this.parentData.high_season*a+this.parentData.low_season*(e-a);this.$store.state.username?(this.parentData.discount&&(n-=n*this.parentData.discount/100),this.controlDate()?(this.total=n,this.payment=!0):this.total="non disponibile"):this.total=n},defineSeason:function(t){var e=0,a=new Date(this.startD);while(t>0)a.getMonth()>=5&&a.getMonth()<=9&&(e+=1),a.setDate(a.getDate()+1),t--;return e},emitToParent:function(t){this.$emit("childToParent")},pay:function(t){console.log("inside pay: "+t),this.paymethod=t,this.$bvModal.show("recapModal")},createRent:function(){console.log("ciao"),this.newRent={product:this.parentData.prod_id,client:this.$store.state.username,start:this.startD,end:this.endD,price:this.total,pay:this.paymethod},console.log(this.newRent),f.post("/new-rent",this.newRent).then((function(){})).catch((function(t){console.log(t)})),this.$router.push({path:"/profile"})}}},M=N,j=(a("d710"),Object(m["a"])(M,T,L,!1,null,"0730797e",null)),z=j.exports,$={name:"IntroPage",components:{SearchBar:S,RentPage:z},data:function(){return{url:"https://site202133.tw.cs.unibo.it/img/",ex:".jpg",prodInfo:[],showInfo:[],normal:!0,mydata:"",filtered:!1,filterProd:[]}},mounted:function(){var t=this;localStorage.getItem("CurrentUser")&&(this.$store.state.username=JSON.parse(localStorage.getItem("CurrentUser"))),console.log(JSON.parse(localStorage.getItem("CurrentUser"))),console.log("sono dentro mounted"),f.get("/prods").then((function(e){t.prodInfo=e.data,t.prodInfo.forEach((function(e){e.image=t.url+e.category+"/"+e.prod_id+t.ex})),t.showInfo=e.data})).catch((function(t){console.log(t)}))},methods:{onChildBack:function(){this.normal=!this.normal},change:function(t){this.mydata=this.prodInfo[t],this.normal=!this.normal},filter:function(t){if("reset"==t)this.showInfo=this.prodInfo;else{var e=[],a=0;this.showInfo.forEach((function(n){console.log(n.category),n.category!=t[0][0]&&n.category!=t[0][1]&&n.category!=t[0][2]||(e[a]=n,a++)})),this.showInfo=e}}}},A=$,U=(a("6497"),Object(m["a"])(A,y,k,!1,null,"79c2878e",null)),B=U.exports,G={name:"App",components:{Navbar:x,IntroPage:B},computed:{},methods:{}},F=G,J=(a("034f"),Object(m["a"])(F,s,i,!1,null,null,null)),K=J.exports,H=a("8c4f"),V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container",attrs:{id:"about-us"}},[n("h3",[t._v(" NoloNoloPlus ")]),n("div",{staticClass:"flex-container",attrs:{id:"aboutdata"}},[n("div",{staticClass:"flex-container"},[n("img",{staticClass:"shot",attrs:{src:a("1195")}}),n("div",{staticClass:"persInfo"},[n("h5",{staticClass:"title"},[t._v(" Sofia Gavanelli ")]),n("h6",{staticClass:"data"},[t._v(" bla bla bla bla bla ")])])]),n("div",{staticClass:"flex-container"},[n("img",{staticClass:"shot",attrs:{src:a("1195")}}),n("div",{staticClass:"persInfo"},[n("h5",{staticClass:"title"},[t._v(" Francesca Chiriacò ")]),n("h6",{staticClass:"data"},[t._v(" bla bla bla bla bla ")])])]),n("div",{staticClass:"flex-container"},[n("img",{staticClass:"shot",attrs:{src:a("1195")}}),n("div",{staticClass:"persInfo"},[n("h5",{staticClass:"title"},[t._v(" Federica Palestini ")]),n("h6",{staticClass:"data"},[t._v(" bla bla bla bla bla ")])])])]),n("div")])}],Z={name:"AboutUs",methods:{}},W=Z,X=(a("b30a"),Object(m["a"])(W,V,Y,!1,null,"21b9e836",null)),q=X.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"profile_page"}},[t._m(0),a("b-card",{staticClass:"profile"},[a("b-card-body",[this.edit?t._e():[a("h3",{staticClass:"title"},[t._v(" "+t._s(this.profileInfo[0].name)+" "+t._s(this.profileInfo[0].surname)+" \n                    "),a("font-awesome-icon",{attrs:{icon:"user-edit","aria-label":"edit button"},on:{click:function(e){return t.editProfile()}}})],1),a("div",{staticClass:"details"},[a("ul",{staticClass:"d-flex flex-wrap pl-0"},[a("li",{staticClass:"title"},[t._v(" USERNAME: "),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.profileInfo[0].client_id)+" ")])]),a("li",{staticClass:"title"},[t._v(" CITTÀ: "),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.profileInfo[0].place)+" ")])]),a("li",{staticClass:"title"},[t._v(" INDIRIZZO: "),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.profileInfo[0].address)+" ")])]),a("li",{staticClass:"title"},[t._v(" TELEFONO: "),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.profileInfo[0].phone)+" ")])]),a("li",{staticClass:"title"},[t._v(" EMAIL: "),a("h5",{staticClass:"data"},[t._v(" "+t._s(this.profileInfo[0].email)+" ")])])])])],this.edit?[a("h3",{staticClass:"title"},[a("b-form-input",{attrs:{placeholder:"Modifica Nome"},model:{value:t.newInfo[0],callback:function(e){t.$set(t.newInfo,0,e)},expression:"newInfo[0]"}}),a("b-form-input",{attrs:{placeholder:"Modifica Cognome"},model:{value:t.newInfo[1],callback:function(e){t.$set(t.newInfo,1,e)},expression:"newInfo[1]"}})],1),a("div",{staticClass:"details"},[a("ul",{staticClass:"d-flex flex-wrap pl-0"},[a("li",{staticClass:"title"},[t._v(" CITTÀ: \n                        "),a("b-form-input",{attrs:{placeholder:"Modifica Città"},model:{value:t.newInfo[2],callback:function(e){t.$set(t.newInfo,2,e)},expression:"newInfo[2]"}})],1),a("li",{staticClass:"title"},[t._v(" INDIRIZZO:\n                        "),a("b-form-input",{attrs:{placeholder:"Modifica Indirizzo"},model:{value:t.newInfo[3],callback:function(e){t.$set(t.newInfo,3,e)},expression:"newInfo[3]"}})],1),a("li",{staticClass:"title"},[t._v(" PASSWORD:\n                        "),a("b-form-input",{attrs:{type:"password",placeholder:"Modifica Password"},model:{value:t.newInfo[4],callback:function(e){t.$set(t.newInfo,4,e)},expression:"newInfo[4]"}})],1),a("li",{staticClass:"title"},[t._v(" TELEFONO:\n                        "),a("b-form-input",{attrs:{placeholder:"Modifica Telefono"},model:{value:t.newInfo[5],callback:function(e){t.$set(t.newInfo,5,e)},expression:"newInfo[5]"}})],1),a("li",{staticClass:"title"},[t._v(" EMAIL:\n                        "),a("b-form-input",{attrs:{placeholder:"Modifica Email"},model:{value:t.newInfo[6],callback:function(e){t.$set(t.newInfo,6,e)},expression:"newInfo[6]"}})],1)])]),a("b-button",{attrs:{id:"saveBtn"},on:{click:function(e){return t.save()}}},[t._v("save")])]:t._e(),a("div",{attrs:{id:"noleggiTab"}},[a("h5",{staticClass:"title"},[t._v(" NOLEGGI: ")]),a("div",{staticClass:"flex-container",attrs:{id:"btnTab"}},[a("b-button",{staticClass:"viewBtn",attrs:{"aria-label":"button noleggi attivi"},on:{click:function(e){return t.changeView("a")}}},[t._v("attivi")]),a("b-button",{staticClass:"viewBtn",attrs:{"aria-label":"button noleggi passati"},on:{click:function(e){return t.changeView("f")}}},[t._v("futuri")])],1),t._l(t.showRents,(function(e,n){return a("div",{key:e._id,staticClass:"rents"},[e.approved?[a("font-awesome-icon",{staticStyle:{color:"green"},attrs:{icon:"circle"}}),t._v(" approvato\n                        "),a("font-awesome-icon",{attrs:{icon:"edit","aria-label":"button modifica noleggio"},on:{click:function(a){return t.editRent(n,e._id)}}})]:[a("font-awesome-icon",{staticStyle:{color:"red"},attrs:{icon:"circle"}}),t._v(" non approvato\n                        "),a("font-awesome-icon",{attrs:{icon:"edit","aria-label":"button stampa fattura"},on:{click:function(a){return t.editRent(n,e._id)}}})],a("br"),a("div",{staticClass:"rentInfo"},[t._v("\n                        "+t._s(e.prod_id)+" "),a("br"),t._v("\n                        "+t._s(e.start_date.slice(0,10))+" "),a("br"),t._v("\n                        "+t._s(e.end_date.slice(0,10))+"\n                    ")])],2)}))],2),a("div",{attrs:{id:"pastRents"}},[a("h5",{staticClass:"title"},[t._v(" FATTURE PER NOLEGGI PASSATI: ")]),t._l(t.pastRent,(function(e,n){return a("div",{key:e._id,staticClass:"rents"},[a("div",{staticClass:"rentInfo"},[t._v("\n                        "+t._s(e.prod_id)+" "),a("font-awesome-icon",{attrs:{icon:"print"},on:{click:function(e){return t.print(n,t.item._id)}}}),a("br"),t._v("\n                        "+t._s(e.start_date.slice(0,10))+" "),a("br"),t._v(" \n                        "+t._s(e.end_date.slice(0,10))+"\n                    ")],1)])}))],2)],2)],1)],1)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pic_container"}},[n("img",{staticClass:"profile_pic",attrs:{src:a("1195"),alt:"Card image cap"}})])}],et=a("ade3"),at=(a("b0c0"),{name:"ProfilePage",data:function(){var t;return t={edit:!1,username:null,profileInfo:[],rentInfo:[],futureRent:[],pastRent:[],activeRent:[],newInfo:[null],name:null,surname:null},Object(et["a"])(t,"username",null),Object(et["a"])(t,"city",null),Object(et["a"])(t,"address",null),Object(et["a"])(t,"pass",null),Object(et["a"])(t,"tel",null),Object(et["a"])(t,"email",null),Object(et["a"])(t,"showRents",[]),Object(et["a"])(t,"rentToEdit",[]),Object(et["a"])(t,"id",""),Object(et["a"])(t,"newRent",[]),t},created:function(){var t=this;localStorage.getItem("CurrentUser")?(this.$store.state.username=JSON.parse(localStorage.getItem("CurrentUser")),this.username=this.$store.state.username):this.username=this.$store.state.username,f.get("/allClients/"+this.username).then((function(e){t.profileInfo=e.data})).catch((function(t){console.log(t)})),f.get("/user-rentals/"+this.username).then((function(e){t.rentInfo=e.data,t.sortRents(t.rentInfo)})).catch((function(t){console.log(t)}))},methods:{changeView:function(t){"a"==t?this.showRents=this.activeRent:"f"==t?this.showRents=this.futureRent:console.log("error")},sortRents:function(t){var e=this,a=0,n=0,s=0;t.forEach((function(t){var i=new Date,o=new Date(t.start_date),r=new Date(t.end_date);r<i?(e.pastRent[a]=t,a++):o>i?(e.futureRent[n]=t,n++):(e.activeRent[s]=t,s++)}))},editProfile:function(){this.edit=!this.edit},save:function(){for(var t={clientID:this.profileInfo[0].client_id,name:this.profileInfo[0].name,surname:this.profileInfo[0].surname,place:this.profileInfo[0].place,address:this.profileInfo[0].address,telefono:this.profileInfo[0].phone,email:this.profileInfo[0].email},e=[],a=0;a<6;a++)this.newInfo[a]&&this.newInfo[a].length>3&&(e[a]=!0);e[0]&&(t.name=this.newInfo[0]),e[1]&&(t.surname=this.newInfo[1]),e[2]&&(t.place=this.newInfo[2]),e[3]&&(t.address=this.newInfo[3]),e[5]&&(t.phone=this.newInfo[5]),e[6]&&(t.email=this.newInfo[6]),f.post("/update-client/",t).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.edit=!this.edit},editRent:function(t,e){this.id=t,console.log(this.rentToEdit),this.$bvModal.show("recapRentModal")},updateRent:function(){console.log("dovrei fare la post")},print:function(t){}}}),nt=at,st=(a("faee"),Object(m["a"])(nt,Q,tt,!1,null,"5f8a2580",null)),it=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"newReg"}},[a("div",{staticClass:"flex-container",attrs:{id:"regContent"}},[t._m(0),a("div",{staticClass:"flex-container",attrs:{id:"firstRow"}},[a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"name"}},[t._v("Nome")]),a("b-form-input",{attrs:{"aria-label":"inserire nome"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"surname"}},[t._v("Cognome")]),a("b-form-input",{attrs:{"aria-label":"inserire cognome"},model:{value:t.surname,callback:function(e){t.surname=e},expression:"surname"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"username"}},[t._v("Username")]),a("b-form-input",{attrs:{"aria-label":"inserire username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)]),a("div",{staticClass:"flex-container",attrs:{id:"secondRow"}},[a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"city"}},[t._v("Città di provenienza")]),a("b-form-input",{attrs:{"aria-label":"inserire città"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"address"}},[t._v("Indirizzo")]),a("b-form-input",{attrs:{"aria-label":"inserire indirizzo"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"phone"}},[t._v("Numero di telefono")]),a("b-form-input",{attrs:{"aria-label":"inserire telefono"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),a("div",{staticClass:"flex-container",attrs:{id:"thirdRow"}},[a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"email"}},[t._v("Email")]),a("b-form-input",{attrs:{"aria-label":"inserire indirizzo email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("div",{staticClass:"form-input"},[a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"pass"}},[t._v("Password")]),a("b-form-input",{attrs:{type:"password","aria-label":"inserire password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)]),a("div",{staticClass:"flex-container",attrs:{id:"btncont"}},[a("b-button",{attrs:{id:"EnterRegBtn"},on:{click:function(e){return t.registration()}}},[t._v("Registrati")]),a("h5",{attrs:{id:"disclaimer"}},[t._v(" "+t._s(this.msg)+" ")])],1)])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container",attrs:{id:"header"}},[a("p",{attrs:{id:"regTitle"}},[t._v("Registrazione")])])}],lt={name:"NewRegistration",data:function(){return{name:null,surname:null,username:null,city:null,address:null,pass:null,image:null,phone:null,email:null,msg:"",newClient:{}}},methods:{registration:function(){var t=this;this.name&&this.surname&&this.username&&this.city&&this.address&&this.pass&&this.phone&&this.email?(this.image="https://lh3.googleusercontent.com/AmrQe6e0h6ugF6FtfN1y9BDVpKKiaGHu9xskKJtRMA4lUFDsAwj2Ffy_w2gMIHpD2mKvEw_vLPwiAID09i13OFRsP-33JNaSsjzqGnoPzKxXGQrOSy28k9w4ZSX1C1FDkpbjRkrsSpxW74q7hl2Ghn_1FwV04wVHcCWHqPIOqCxmLLAvc-ycKKA1DNdZh38gsB065Ix44eR5BkQD-1mR04agbID37cHdDWGNkfRBsj9gbJwyARq2-pOk7RD7Fr3XLEl_gO7dhpMnU0rcUpvMSVhm3iyopydacUUmXPOuFfMdvFeTjMx5hh1SD9ptfoGeZ-l8SFU3fBWf9tuT7P2g_sKCONWIKGntWdu7vOmJkRmuaR8mngx8rkJ5Jztp1Gfi47qyrD0upUHlDOzEXskX45HV6lOX7nKFHatwsL5Za1-sjYp-zViXLIj0ADYLzRKheJIdWUXfT5PjHQ92R6zjdBAOaNkQvXGbwzY2DpjHz0iQ4B4u9x_IwpJVoMb6UA8KKZiYgPNB7xalyCD07VCS6D68-drUvWP30o6LYKOIpjcmipJWxEKpfn7KKxzxp-rGOYM5f-ZvgGEhmxJO87tDRw0f6CDes-vzlrCWpSUB4WknzU9_nBKH9aVI_yp5J7eAYMAQ0Emngwn5PcQwe7kYYFAXMn4Ieze8763rptNCG8AXZnLaqnobLmtM8HRBLQavu8mencgGGZZHryY416enILM4=s1000-no?authuser=9",this.newClient={a:this.image,b:this.name,c:this.surname,d:this.username,e:this.city,f:this.address,g:this.pass,h:this.phone,i:this.email},f.post("/new-client",this.newClient).then((function(e){t.msg=null,console.log(e.data),0==e.data?(t.msg="USERNAME NON DISPONIBILE - MODIFICARE",t.newClient=null):t.$router.push({path:"/login"})})).catch((function(t){console.log(t)}))):this.msg="è necessario inserire dati in tutti i campi per poter effettuare la registrazione"}}},ct=lt,dt=(a("0f25"),Object(m["a"])(ct,ot,rt,!1,null,"1332b247",null)),ut=dt.exports;n["default"].use(H["a"]);var ft=new H["a"]({routes:[{path:"/home",alias:"/",component:B},{path:"/about",component:q},{path:"/login",component:b},{path:"/profile",component:it},{path:"/new-client",component:ut},,]}),pt=a("5f5b"),ht=a("b1e0"),mt=(a("f9e3"),a("2dd8"),a("ecee")),vt=a("c074"),bt=a("ad3d");n["default"].use(pt["a"]),n["default"].use(ht["a"]),mt["c"].add(vt["b"]),mt["c"].add(vt["a"]),mt["c"].add(vt["e"]),mt["c"].add(vt["c"]),mt["c"].add(vt["g"]),mt["c"].add(vt["h"]),mt["c"].add(vt["d"]),mt["c"].add(vt["f"]),n["default"].component("font-awesome-icon",bt["a"]),n["default"].config.productionTip=!1,new n["default"]({router:ft,store:_,render:function(t){return t(K)}}).$mount("#app")},"5b37":function(t,e,a){},6497:function(t,e,a){"use strict";a("5b37")},"7ed3":function(t,e,a){},"81b2":function(t,e,a){"use strict";a("e513")},"864b":function(t,e,a){},"93c2":function(t,e,a){"use strict";a("7ed3")},a07d:function(t,e,a){},b30a:function(t,e,a){"use strict";a("3445")},c511:function(t,e,a){},d710:function(t,e,a){"use strict";a("07ea")},da64:function(t,e,a){"use strict";a("864b")},e513:function(t,e,a){},faee:function(t,e,a){"use strict";a("5538")}});
//# sourceMappingURL=app.943eedf7.js.map