(this["webpackJsonpcoin-voice"]=this["webpackJsonpcoin-voice"]||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),i=n.n(a),o=(n(40),n(10)),s=n(3),l=n.n(s),u=n(8),j=n(4),b=n(5),O=n(9),p=n.n(O),d=n(19),f=n.n(d),h=n(6),x=function(e,t){var n=r.a.useRef();r.a.useEffect((function(){n.current=e}),[e]),r.a.useEffect((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},g=(n(32),n(18)),v=n(17),C=n(20);var T,m={getRate:function(e,t){var n=parseFloat(e),c=parseFloat(t);return parseFloat(((n-c)/c*100).toFixed(2))},getRandomInt:function(e){return Math.floor(Math.random()*e)},getCookie:function(){return{coin:localStorage.getItem("coin")}},setCookie:function(e,t){localStorage.setItem(e,t)}},R={BITHUMB:"BITHUMB"},S={COIN_NAME:{BTC:"BTC \ube44\ud2b8\ucf54\uc778",ETH:"ETH \uc774\ub354\ub9ac\uc6c0",LTC:"LTC \ub77c\uc774\ud2b8\ucf54\uc778",ETC:"ETC \uc774\ub354\ub9ac\uc6c0\ud074\ub798\uc2dd",XRP:"XRP \ub9ac\ud50c",BCH:"BCH \ube44\ud2b8\ucf54\uc778\uce90\uc2dc",QTUM:"QTUM \ud000\ud140",BTG:"BTG \ube44\ud2b8\ucf54\uc778\uace8\ub4dc",EOS:"EOS \uc774\uc624\uc2a4",ICX:"ICX \uc544\uc774\ucf58",TRX:"TRX \ud2b8\ub860",ELF:"ELF \uc5d8\ud504",OMG:"OMG \uc624\ubbf8\uc138\uace0",KNC:"KNC \uce74\uc774\ubc84\ub124\ud2b8\uc6cc\ud06c",GLM:"GLM \uace8\ub818",ZIL:"ZIL \uc9c8\ub9ac\uce74",WAXP:"WAXP \uc641\uc2a4",POWR:"POWR \ud30c\uc6cc\ub81b\uc800",LRC:"LRC \ub8e8\ud504\ub9c1",STEEM:"STEEM \uc2a4\ud300",STRAX:"STRAX \uc2a4\ud2b8\ub77c\ud2f0\uc2a4",ZRX:"ZRX \uc81c\ub85c\uc5d1\uc2a4",REP:"REP \uc5b4\uac70",XEM:"XEM \ub134",SNT:"SNT \uc2a4\ud14c\uc774\ud130\uc2a4\ub124\ud2b8\uc6cc\ud06c\ud1a0\ud070",ADA:"ADA \uc5d0\uc774\ub2e4",CTXC:"CTXC \ucf54\ub974\ud14d\uc2a4",BAT:"BAT \ubca0\uc774\uc9c1\uc5b4\ud150\uc158\ud1a0\ud070",WTC:"WTC \uc6d4\ud2bc\uccb4\uc778",THETA:"THETA \uc384\ud0c0\ud1a0\ud070",LOOM:"LOOM \ub8f8\ub124\ud2b8\uc6cc\ud06c",WAVES:"WAVES \uc6e8\uc774\ube0c",TRUE:"TRUE \ud2b8\ub8e8\uccb4\uc778",LINK:"LINK \uccb4\uc778\ub9c1\ud06c",ENJ:"ENJ \uc5d4\uc9c4\ucf54\uc778",VET:"VET \ube44\uccb4\uc778",MTL:"MTL \uba54\ud0c8",IOST:"IOST \uc774\uc624\uc2a4\ud2b8",TMTG:"TMTG",QKC:"QKC",HDAC:"HDAC \ub354\ub9c8\uc774\ub2e4\uc2a4\ud130\uce58\uace8\ub4dc",AMO:"AMO \uc544\ubaa8\ucf54\uc778",BSV:"BSV \ube44\ud2b8\ucf54\uc778\uc5d0\uc2a4\ube0c\uc774",ORBS:"ORBS \uc624\ube0c\uc2a4",TFUEL:"TFUEL \uc384\ud0c0\ud4e8\uc5d8",VALOR:"VALOR \ubc38\ub7ec\ud1a0\ud070",CON:"CON \ucf54\ub10c",ANKR:"ANKR \uc575\ucee4",MIX:"MIX \ubbf9\uc2a4\ub9c8\ube14",CRO:"CRO \ud06c\ub9bd\ud1a0\ub2f7\ucef4\uccb4\uc778",FX:"FX \ud391\uc158\uc5d1\uc2a4",CHR:"CHR \ud06c\ub85c\ubbf8\uc544",MBL:"MBL \ubb34\ube44\ube14\ub85d",MXC:"MXC \uba38\uc2e0\uc775\uc2a4\uccb4\uc778\uc9c0\ucf54\uc778",FCT:"FCT \ud53c\ub974\ub9c8\uccb4\uc778",TRV:"TRV \ud504\ub7ec\uc2a4\ud2b8\ubc84\uc2a4",DAD:"DAD \ub2e4\ub4dc",WOM:"WOM \uc650\ud1a0\ud070",SOC:"SOC \uc18c\ub2e4\ucf54\uc778",RSR:"RSR \ub9ac\uc800\ube0c\ub77c\uc774\ud2b8",BLY:"BLY \ube14\ub85c\uc11c\ub9ac",MANA:"MANA \ub9c8\ub098",KLAY:"KLAY \ud074\ub808\uc774"},EXCHANGE_NAME:R,COOKIE_NAME:{COIN:"coin"},COLOR:{PLUS:"#ff698c",MINUS:"#3ba5ff",IMPORTANT:"#40d575"}},A=n(2),E=h.a.div(T||(T=Object(b.a)(["\n    transition: 0.5s;\n    color: ",";\n"])),(function(e){return e.color}));var M,L=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(j.a)(a,2);i[0],i[1],Object(c.useEffect)((function(){s()}),[]),x((function(){s()}),5e3);var s=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.bithumb.com/public/ticker/BTC_KRW_"+(new Date).getTime());case 2:t=e.sent,n=t.data.data,c=m.getRate(n.closing_price,n.opening_price),r((function(e){return Object(o.a)(Object(o.a)({},n),{},{rate:c})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(A.jsxs)(E,{color:n.rate>0?S.COLOR.PLUS:S.COLOR.MINUS,children:["BTC\xa0\xa0",parseFloat(n.closing_price).toLocaleString("ko-KR"),"\uc6d0 \xa0\xa0",Object(A.jsxs)("span",{style:{fontSize:16},children:[n.rate>0&&"+",n.rate,"%"]})]}):null},y=n(11),k=(n(63),h.a.div(M||(M=Object(b.a)(["\n    margin-top: 20px;\n    padding: 16px;\n    //border: 1px solid whitesmoke;\n    background: rgba(255, 255, 255, 0.1);\n    color: whitesmoke;\n    font-size: 15px;  \n    text-align: left;      \n"]))));var N=function(){return Object(A.jsx)(k,{children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:"\uc9c0\uc6d0 \ube0c\ub77c\uc6b0\uc800 : \uc0bc\uc131\uc778\ud130\ub137, \ud06c\ub86c \ub4f1"}),Object(A.jsx)("li",{children:"\uc2dc\uc138\uc815\ubcf4 : \ud604\uc7ac \ube57\uc378\ub9cc \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(A.jsx)("li",{children:"\uc804\uc6d0 \ubc84\ud2bc \ud074\ub9ad\uc2dc"}),Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:"\uc804\uccb4\uac00 \uac80\uc740\ud654\uba74\uc73c\ub85c \ubc14\ub01d\ub2c8\ub2e4. \uc774\ub54c \ub354\ube14\ud074\ub9ad\ud558\uba74 \uc6d0\ub798 \ud654\uba74\uc73c\ub85c \ub3cc\uc544 \uc635\ub2c8\ub2e4."}),Object(A.jsx)("li",{children:"\uc74c\uc131\uc774 \ucf1c\uc838\uc788\uc73c\uba74 \uc5ec\uc804\ud788 \uc74c\uc131\uc774 \ub098\uc635\ub2c8\ub2e4."})]}),Object(A.jsx)("li",{children:"[\uc548\ub4dc\ub85c\uc774\ub4dc] \ud55c\uad6d\uc5b4\ub85c \uc77d\ud788\uc9c0 \uc54a\uc744\ub54c"}),Object(A.jsxs)("ol",{children:[Object(A.jsx)("li",{children:"\uc124\uc815 > \uc77c\ubc18 > \uae00\uc790\uc77d\uc5b4\uc8fc\uae30"}),Object(A.jsx)("li",{children:'\uae30\ubcf8\uc5d4\uc9c4\uc744 "\uc0bc\uc131TTS \uc5d4\uc9c4"\uc73c\ub85c \uc124\uc815'}),Object(A.jsxs)("li",{children:["\uc5b8\uc5b4\ub97c \ud55c\uad6d\uc5b4(\ub300\ud55c\ubbfc\uad6d) \uc73c\ub85c \uc124\uc815",Object(A.jsx)("br",{}),"(\ub9cc\uc57d \uc5b8\uc5b4\uc5d0 \ud55c\uad6d\uc5b4\uac00 \uc5c6\ub2e4\uba74 \uae30\ubcf8\uc5d4\uc9c4 \uc624\ub978\ucabd\uc758 \uc124\uc815 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ucd5c\uc2e0 \ubc84\uc804 \ub2e4\uc6b4\ub85c\ub4dc \ud6c4 \uc0bc\uc131TTS \ud55c\uad6d\uc5b4\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.)"]})]})]})})};function I(e){return B.apply(this,arguments)}function B(){return B=Object(u.a)(l.a.mark((function e(t){var n,c,r,a,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]&&i[1],e.prev=1,e.next=4,p.a.get("https://api.bithumb.com/public/ticker/".concat(t,"_KRW")+(n?"_"+(new Date).getTime():""));case 4:if(c=e.sent,r=c.status,a=c.data,200!==r){e.next=9;break}return e.abrupt("return",a.data);case 9:return e.abrupt("return",[]);case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])}))),B.apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t!==R.BITHUMB){e.next=7;break}return e.next=4,I("ALL",!1);case 4:return c=e.sent,Object.keys(c).map((function(e){"date"!==e&&S.COIN_NAME[e]&&n.push({value:e,name:S.COIN_NAME[e]})})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F,X,w,H,K,P,D,U,W,z={getCoinList:function(e){return _.apply(this,arguments)}},G=["BTC","ETH","BLY","EOS","RSR","MANA","XRP","ADA"],V="white",Y="#505050",J=h.a.div(F||(F=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100vh;    \n    align-items: center;\n    justify-content: center;\n    position: relative;\n\n    ",";\n\n"])),(function(e){return!e.display&&"opacity: 0"})),Q=h.a.div(X||(X=Object(b.a)(["\n    // margin-top: 30px;\n    display: flex;    \n    opacity: 0.5;\n    color: white;\n"]))),Z=h.a.div(w||(w=Object(b.a)(["\n    color: ",";\n    font-size: 25px;\n    // margin-left: 20px;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.2s;\n    // border-radius: 50%;\n    opacity: 0.7;\n    &:active {\n        background-color: ",";\n    }\n"])),V,Y),q=h.a.div(H||(H=Object(b.a)(["\n    opacity: ",";\n"])),(function(e){return e.opacity})),$=h.a.div(K||(K=Object(b.a)(["      \n\n    \n    color: ",";    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    & > * {\n        margin-bottom: 10px;\n    }    \n    & > *:last-child {\n        margin: 0;\n    }\n\n    //\uac00\uaca9\n    & > *:nth-child(3){\n        font-size: 30px;\n        line-height: 40px;\n        margin-bottom: 0;        \n    }\n    //24\uc2dc\uac04 \uac70\ub798\ub7c9\n    & > *:nth-child(4){\n        font-size: 15px;\n    }\n\n    //\uc2a4\ud53c\ucee4 \ubc84\ud2bc \ucee8\ud14c\uc774\ub108\n    & > *:nth-child(5){\n        display: flex;\n        align-items: flex-end;\n    }\n"])),V),ee=h.a.select(P||(P=Object(b.a)(["\n    background-color: transparent;  \n    color: ",";  \n    font-size: 13px;\n    border: 0;//1px solid #818181;\n    margin-top: 5px;\n    // border-radius: 4px;\n    // padding: 10px;\n"])),V),te=h.a.option(D||(D=Object(b.a)(["\n    background: black;\n    ",";\n"])),(function(e){return e.important&&"color: ".concat(S.COLOR.IMPORTANT)})),ne=h.a.div(U||(U=Object(b.a)(["\n    // width: 100px;\n    // font-size: 14px;\n    // min-height: 30px;\n    // line-height: 30px;\n    // border-radius: 20px;\n    // border: 1px solid ",";    \n    cursor: pointer;        \n"])),Y),ce=h.a.div(W||(W=Object(b.a)(["\n    visibility: hidden\n"])));function re(e,t){var n=parseFloat(e),c=parseFloat(t);return parseFloat(((n-c)/c*100).toFixed(2))}var ae=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(j.a)(a,2),s=i[0],b=i[1],O=Object(c.useState)(),d=Object(j.a)(O,2),h=d[0],T=d[1],R=Object(c.useState)(""),E=Object(j.a)(R,2),M=E[0],k=E[1],I=Object(c.useState)(5e3),B=Object(j.a)(I,2),_=B[0],F=(B[1],Object(c.useRef)()),X=Object(c.useState)(!1),w=Object(j.a)(X,2),H=w[0],K=w[1],P=Object(c.useState)(!1),D=Object(j.a)(P,2),U=D[0],W=D[1],Y=Object(c.useState)(null),ae=Object(j.a)(Y,2),ie=ae[0],oe=ae[1],se=Object(c.useState)(!1),le=Object(j.a)(se,2),ue=le[0],je=le[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:t=e.sent,n=t[0].value,(c=m.getCookie()).coin&&(n=c.coin),b(n),pe(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),x((function(){pe(s)}),_),x((function(){Oe()}),ie);var be=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getCoinList(S.EXCHANGE_NAME.BITHUMB);case 2:return t=e.sent,console.log(t),r(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){if(h&&h.closing_price!=F.current&&U){F.current=h.closing_price;var e=parseFloat(h.closing_price).toLocaleString("ko-KR")+"\uc6d0 ";console.log("checked"+ue),ue&&(e+=h.rate>0?"\ud50c\ub7ec\uc2a4":"",e+=h.rate.toLocaleString()+"%"),k(e)}},pe=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.bithumb.com/public/ticker/".concat(t,"_KRW")+"_"+(new Date).getTime());case 2:n=e.sent,c=n.data.data,r=re(c.closing_price,c.opening_price),T(Object(o.a)(Object(o.a)({},c),{},{rate:r}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){M&&document.getElementsByClassName("rs-play")[0].click()}),[M]);var de=Object(c.useState)(1),fe=Object(j.a)(de,2),he=fe[0],xe=fe[1],ge=function(e){var t=he+e;t>1&&(t=1),t<0&&(t=0),xe(t)},ve=Object(c.useState)(!0),Ce=Object(j.a)(ve,2),Te=Ce[0],me=Ce[1];return n&&h?(re(),Object(A.jsxs)(A.Fragment,{children:[!Te&&Object(A.jsx)("div",{style:{position:"fixed",top:0,left:0,bottom:0,right:0,color:"red",background:"black",zIndex:99},onDoubleClick:function(e){e.stopPropagation(),Te||me(!0)}}),Object(A.jsxs)(J,{className:"css-selector",display:Te,children:[Object(A.jsx)(q,{opacity:he,children:Object(A.jsxs)($,{children:[Object(A.jsx)(L,{}),Object(A.jsx)(ee,{onChange:function(e){var t=e.target.value;b(t),pe(t),m.setCookie(S.COOKIE_NAME.COIN,t)},value:s,children:n.map((function(e){var t=G.includes(e.value);return Object(A.jsxs)(te,{value:e.value,children:[e.name,t?"\ud83e\udde1":null]})}))}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("b",{children:[parseFloat(h.closing_price).toLocaleString("ko-KR"),"\uc6d0"]}),Object(A.jsxs)("span",{style:{fontSize:16,marginLeft:10},children:[h.rate>0&&"+",h.rate,"%"]})]}),Object(A.jsx)("div",{children:parseFloat(h.acc_trade_value_24H)>1e6?"".concat(Math.round(parseFloat(h.acc_trade_value_24H)/1e6,0).toLocaleString("ko-KR"),"\ubc31\ub9cc"):Math.round(parseFloat(h.acc_trade_value_24H),0).toLocaleString("ko-KR")}),Object(A.jsxs)("div",{children:[Object(A.jsx)(ne,{onClick:function(e){e.stopPropagation();var t=!U;W(t),t?(oe(1e4),Object(y.b)("\uc74c\uc131\uc744 \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4.")):(oe(null),Object(y.b)("\uc74c\uc18c\uac70 \ucc98\ub9ac \ub418\uc5c8\uc2b5\ub2c8\ub2e4."))},children:U?Object(A.jsx)(v.a,{size:30}):Object(A.jsx)(v.b,{size:30})}),Object(A.jsxs)("label",{style:{height:30,marginLeft:10},children:[Object(A.jsx)("input",{type:"checkbox",checked:ue,onChange:function(){var e=!ue;je(e),e?Object(y.b)("\ud37c\uc13c\ud2b8\uae4c\uc9c0 \ub9d0\ud558\uae30\ub85c \uc124\uc815"):Object(y.b)("\ud37c\uc13c\ud2b8 \ub9d0\ud558\uae30 \ucde8\uc18c")},disabled:!U}),"%"]})]})]})}),Object(A.jsxs)(Q,{children:[Object(A.jsx)(Z,{onClick:ge.bind(this,-.2),children:Object(A.jsx)(g.b,{})}),Object(A.jsx)(Z,{onClick:ge.bind(this,.2),children:Object(A.jsx)(g.a,{})}),Object(A.jsx)(Z,{onClick:function(e){e.stopPropagation(),me(!1)},children:Object(A.jsx)(C.a,{})})]}),Object(A.jsxs)(q,{opacity:he,children:[Object(A.jsxs)("div",{style:{color:V},children:[Object(A.jsx)("div",{style:{marginTop:16,textAlign:"center",fontSize:12,fontWeight:"lighter"},children:"\uc874\ubc84\ub294 \uc2b9\ub9ac\ud55c\ub2e4 - made by \ud33d\ub69c\uc544\ube60"}),Object(A.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:5,textAlign:"center",fontSize:12},children:[Object(A.jsx)("div",{style:{marginRight:16},children:Object(A.jsx)("a",{style:{color:V},href:"mailto:ksmark8543@naver.com",children:"Contact me"})}),Object(A.jsx)("div",{style:{textAlign:"center",cursor:"pointer"},onClick:function(){return K(!H)},children:Object(A.jsx)("u",{children:"How to use?"})})]})]}),H&&Object(A.jsx)(N,{})]}),Object(A.jsx)(ce,{children:Object(A.jsx)(f.a,{displayText:!1,stop:!0,pause:!0,resume:!0,text:M,lang:"ko-KR"})})]}),Object(A.jsx)(y.a,{})]})):null};n(64);var ie=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)("div",{children:Object(A.jsx)(ae,{})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[65,1,2]]]);
//# sourceMappingURL=main.441b9dbb.chunk.js.map