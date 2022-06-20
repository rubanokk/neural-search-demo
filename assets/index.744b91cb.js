import{o as c,c as l,a as t,n as K,r as _,w as D,b as m,F as z,d as N,p as k,e as b,t as I,f as v,g as C,h as w,i as Q,j as p,k as L,l as x,v as V,m as j,q as g,s as W,u as X,x as J}from"./vendor.6f424842.js";const Z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};Z();var u=(e,s)=>{const o=e.__vccOpts||e;for(const[r,n]of s)o[r]=n;return o};const G={props:{icon:{default:"",type:String},size:{default:24,type:Number}}},Y=["xlink:href"];function ee(e,s,o,r,n,i){return c(),l("svg",{style:K(`width: ${o.size}px; height: ${o.size}px;`)},[t("use",{"xlink:href":`#icon-${o.icon}`,"xmlns:xlink":"http://www.w3.org/1999/xlink"},null,8,Y)],4)}var E=u(G,[["render",ee]]);const se={components:{Icon:E},props:{query:{type:String,default:""}},emits:["enter","handleInput"],data(){return{isClearVisible:!1}},computed:{isClearBtn(){return this.query.length>0}},mounted(){this.$refs.input.focus()},methods:{handleInput(e){const s=e.target.value;s.length>0?this.isClearVisible=!0:this.isClearVisible=!1,this.$emit("handleInput",s)},handleEnter(e){e.length>0&&this.$emit("enter",e)},handleClear(){this.$refs.input.value=null}}},te={class:"search-input"},ne=["value"],ie={key:1,class:"search-input__icon"};function ae(e,s,o,r,n,i){const a=_("Icon");return c(),l("div",te,[t("input",{ref:"input",class:"search-input__input",placeholder:"Wie k\xF6nnen wir Ihnen helfen?",value:o.query,onInput:s[0]||(s[0]=(...d)=>i.handleInput&&i.handleInput(...d)),onKeyup:s[1]||(s[1]=D(d=>i.handleEnter(d.target.value),["enter"]))},null,40,ne),i.isClearBtn?(c(),l("div",{key:0,class:"search-input__icon",onClick:s[2]||(s[2]=(...d)=>i.handleClear&&i.handleClear(...d))},[m(a,{icon:"close"})])):(c(),l("div",ie,[m(a,{icon:"search"})]))])}var oe=u(se,[["render",ae],["__scopeId","data-v-5ae94224"]]);const ce={props:{suggestions:{type:Array,default:()=>[]}},emits:["click"],methods:{getSuggestionText(e){return typeof e=="object"?e.s:e.title}}},le=e=>(k("data-v-6c5089fd"),e=e(),b(),e),re={class:"suggestions"},de=["innerHTML"],_e=le(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1));function ue(e,s,o,r,n,i){return c(),l("div",re,[(c(!0),l(z,null,N(o.suggestions,a=>(c(),l("div",{key:a,class:"suggestions__item"},[t("span",{innerHTML:a.title},null,8,de),_e]))),128))])}var he=u(ce,[["render",ue],["__scopeId","data-v-6c5089fd"]]),S="./check-green.svg";const ve={props:{query:{type:String,default:""}}},pe={class:"suggestions-empty"},me=v(" Leider konnten keine Suchvorschl\xE4ge gefunden werden, die mit ihrem Suchbegriff "),ge=C(' \xFCbereinstimmen. <div class="suggestions-empty__title"> Tipps f\xFCr Ihre Suche: </div><div class="suggestions-empty__item"><img src="'+S+'"> Sind alle W\xF6rter richtig geschrieben? </div><div class="suggestions-empty__item"><img src="'+S+'"> Versuchen Sie Ihren Suchbegriff gegebenenfalls zu verallgemeinern. </div><div class="suggestions-empty__item"><img src="'+S+'"> W\xE4hlen Sie Synonyme oder verwandte Begriffe. </div>',5);function fe(e,s,o,r,n,i){return c(),l("div",pe,[me,t("b",null,I(o.query),1),ge])}var ke=u(ve,[["render",fe]]);const be={props:{local:{type:Boolean,default:!1}},emits:["click"]},y=e=>(k("data-v-751222aa"),e=e(),b(),e),ye={class:"suggestions"},$e=v(" Umzug beauftragen "),Se=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ie=[$e,Se],xe=v(" Umzugstermin "),we=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ce=[xe,we],Ee=v(" Umzug stornieren "),Me=y(()=>t("span",{class:"suggestions__category"},"In FAQs",-1)),Ve=[Ee,Me],ze=v(" Installation Umzug "),He=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Fe=[ze,He],Be=v(" Umzug Sonderk\xFCndigungsrecht "),qe=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Pe=[Be,qe],Te=v(" Umzugsdauer "),Re=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ne=[Te,Re],Le=v(" Umzugsservice "),Oe=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ue=[Le,Oe],Ae=v(" K\xFCndigung Umzug "),Ke=y(()=>t("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),De=[Ae,Ke];function Qe(e,s,o,r,n,i){return c(),l("div",ye,[t("div",{class:"suggestions__item",onClick:s[0]||(s[0]=a=>e.$emit("click"))},Ie),t("div",{class:"suggestions__item",onClick:s[1]||(s[1]=a=>e.$emit("click"))},Ce),t("div",{class:"suggestions__item",onClick:s[2]||(s[2]=a=>e.$emit("click"))},Ve),t("div",{class:"suggestions__item",onClick:s[3]||(s[3]=a=>e.$emit("click"))},Fe),t("div",{class:"suggestions__item",onClick:s[4]||(s[4]=a=>e.$emit("click"))},Pe),t("div",{class:"suggestions__item",onClick:s[5]||(s[5]=a=>e.$emit("click"))},Ne),t("div",{class:"suggestions__item",onClick:s[6]||(s[6]=a=>e.$emit("click"))},Ue),t("div",{class:"suggestions__item",onClick:s[7]||(s[7]=a=>e.$emit("click"))},De)])}var je=u(be,[["render",Qe],["__scopeId","data-v-751222aa"]]);const We={},Xe={class:"divider"};function Je(e,s){return c(),l("div",Xe)}var Ze=u(We,[["render",Je],["__scopeId","data-v-37ebb584"]]);const Ge={props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["click"],methods:{handleClick(){this.disabled||this.$emit("click")}}};function Ye(e,s,o,r,n,i){return c(),l("div",{class:w(["btn",{btn_disabled:o.disabled}]),onClick:s[0]||(s[0]=(...a)=>i.handleClick&&i.handleClick(...a))},I(o.title),3)}var H=u(Ge,[["render",Ye],["__scopeId","data-v-63e3f1c5"]]);const es={components:{CommonIcon:E},emits:["close"]},ss={class:"feedback-modal"};function ts(e,s,o,r,n,i){const a=_("CommonIcon");return c(),l("div",ss,[t("div",{class:"feedback-modal__close",onClick:s[0]||(s[0]=d=>e.$emit("close"))},[m(a,{icon:"close",size:16})]),Q(e.$slots,"default",{},void 0,!0)])}var F=u(es,[["render",ts],["__scopeId","data-v-338acf7a"]]),ns="./positive-feedback.png";const is={components:{FeedbackModal:F},emits:["close"]},as=e=>(k("data-v-3ce239c3"),e=e(),b(),e),os=as(()=>t("div",{class:"feedback-positive"},[t("img",{src:ns,alt:""}),t("div",{class:"feedback-positive__title"}," Vielen Dank f\xFCr Ihr Feedback! ")],-1));function cs(e,s,o,r,n,i){const a=_("FeedbackModal");return c(),p(a,{onClose:s[0]||(s[0]=d=>e.$emit("close"))},{default:L(()=>[os]),_:1})}var ls=u(is,[["render",cs],["__scopeId","data-v-3ce239c3"]]),rs="./negative-feedback.png",ds="./magenta.png",_s="./kontactsite.png";const us={components:{FeedbackModal:F,Btn:H},emits:["close"],data(){return{isTextareaHidden:!0,text:"",checked:[],isSuccess:!1}},computed:{isNotValid(){return this.text.length===0&&this.checked.length===0}},methods:{showTextarea(){this.isTextareaHidden=!1,this.checked=[],this.text=""},submit(){this.isNotValid||(this.isSuccess=!0)}}},$=e=>(k("data-v-3cd351ee"),e=e(),b(),e),hs={class:"feedback-negative"},vs={key:0,class:"feedback-negative__body"},ps=$(()=>t("div",{class:"feedback-negative__title"}," Was h\xE4tte Ihnen geholfen? ",-1)),ms=$(()=>t("div",{class:"checkmark"},null,-1)),gs=v(" Eine leichtere Erkl\xE4rung "),fs=$(()=>t("div",{class:"checkmark"},null,-1)),ks=v(" Eine bessere grafische Darstellung "),bs=$(()=>t("div",{class:"checkmark"},null,-1)),ys=v(" Eine passendere Antwort auf meine Frage "),$s={key:1,class:"feedback-negative__result"},Ss=$(()=>t("img",{src:rs,alt:""},null,-1)),Is=$(()=>t("div",{class:"feedback-negative__result-title"}," Vielen Dank f\xFCr Ihr Feedback! ",-1)),xs=[Ss,Is],ws=$(()=>t("a",{href:"https://geschaeftskunden.telekom.de/hilfe-und-service/frag-magenta",target:"_blank",class:"feedback-negative__links-item"},[t("img",{src:ds,width:"39"}),t("span",null," Frag Magenta ")],-1)),Cs=$(()=>t("a",{href:"https://geschaeftskunden.telekom.de/hilfe-und-service/kontakt",target:"_blank",class:"feedback-negative__links-item"},[t("img",{src:_s,width:"39"}),t("span",null," Kontaktseite ")],-1)),Es=[ws,Cs];function Ms(e,s,o,r,n,i){const a=_("Btn"),d=_("FeedbackModal");return c(),p(d,{onClose:s[4]||(s[4]=h=>e.$emit("close"))},{default:L(()=>[t("div",hs,[n.isSuccess?(c(),l("div",$s,xs)):(c(),l("div",vs,[ps,t("label",null,[x(t("input",{id:"Eine leichtere Erkl\xE4rung","onUpdate:modelValue":s[0]||(s[0]=h=>n.checked=h),type:"checkbox",value:"Eine leichtere Erkl\xE4rung"},null,512),[[V,n.checked]]),ms,gs]),t("label",null,[x(t("input",{id:"Eine bessere grafische Darstellung","onUpdate:modelValue":s[1]||(s[1]=h=>n.checked=h),type:"checkbox",value:"Eine bessere grafische Darstellung"},null,512),[[V,n.checked]]),fs,ks]),t("label",null,[x(t("input",{id:"Eine passendere Antwort auf meine Frage","onUpdate:modelValue":s[2]||(s[2]=h=>n.checked=h),type:"checkbox",value:"Eine passendere Antwort auf meine Frage"},null,512),[[V,n.checked]]),bs,ys]),x(t("textarea",{"onUpdate:modelValue":s[3]||(s[3]=h=>n.text=h),placeholder:"Weiteres Feedback hier eingeben"},null,512),[[j,n.text]]),m(a,{title:"Senden",class:"feedback-negative__btn",disabled:i.isNotValid,onClick:i.submit},null,8,["disabled","onClick"])])),t("div",{class:w(["feedback-negative__links-title",{result:n.isSuccess}])}," Nehmen Sie mit uns Kontakt auf ",2),t("div",{class:w(["feedback-negative__links",{result:n.isSuccess}])},Es,2)])]),_:1})}var Vs=u(us,[["render",Ms],["__scopeId","data-v-3cd351ee"]]);const zs={components:{CommonIcon:E,FeedbackPositive:ls,FeedbackNegative:Vs},data(){return{isPositiveOpen:!1,isNegativeOpen:!1}},methods:{openPositive(){this.isPositiveOpen=!0},openNegative(){this.isNegativeOpen=!0},toggleModals(){this.isPositiveOpen=!1,this.isNegativeOpen=!1}}},B=e=>(k("data-v-3648a454"),e=e(),b(),e),Hs={class:"feedback"},Fs=B(()=>t("div",{class:"feedback__caption"}," Konnte ihr Anliegen gel\xF6st werden? ",-1)),Bs={class:"feedback__actions"},qs=B(()=>t("span",null,"Ja, es wurde gel\xF6st",-1)),Ps=B(()=>t("span",null,"Nein, ich ben\xF6tige weitere Hilfe",-1));function Ts(e,s,o,r,n,i){const a=_("CommonIcon"),d=_("FeedbackPositive"),h=_("FeedbackNegative");return c(),l("div",Hs,[Fs,t("div",Bs,[t("div",{class:"feedback__btn",onClick:s[0]||(s[0]=(...f)=>i.openPositive&&i.openPositive(...f))},[m(a,{icon:"like",size:14}),qs]),t("div",{class:"feedback__btn",onClick:s[1]||(s[1]=(...f)=>i.openNegative&&i.openNegative(...f))},[m(a,{icon:"dislike",size:14}),Ps])]),n.isPositiveOpen?(c(),p(d,{key:0,onClose:i.toggleModals},null,8,["onClose"])):g("",!0),n.isNegativeOpen?(c(),p(h,{key:1,onClose:i.toggleModals},null,8,["onClose"])):g("",!0)])}var Rs=u(zs,[["render",Ts],["__scopeId","data-v-3648a454"]]);const Ns={components:{FeedbackBlock:Rs,Btn:H},props:{data:{type:Object,default:null},isResults:{type:Boolean,default:!1}}},Ls={class:"extractions__title"},Os={class:"extractions__list-circle"},Us=["innerHTML"];function As(e,s,o,r,n,i){const a=_("FeedbackBlock");return c(),l("div",{class:w(["extractions",{extractions_results:o.isResults}])},[t("div",Ls,I(o.data.title),1),(c(!0),l(z,null,N(o.data.list,(d,h)=>(c(),l("div",{key:d,class:"extractions__list"},[t("div",Os,I(h+1),1),t("div",{class:"extractions__list-title",innerHTML:d},null,8,Us)]))),128)),m(a,{class:"extractions__feedback"})],2)}var O=u(Ns,[["render",As],["__scopeId","data-v-6ee38009"]]);W.create({baseURL:"https://andrasbalo-nir-suggester.dev.voicecast.aws.telekom.de"});const U=[{title:"Alles zum Thema X Rechnung",text:"Rechnungen ab einem Wert von 1.000 Euro im Format der XRechnung an \xF6ffentliche Institutionen senden. Klassische Beh\xF6rden des Bundes, der L\xE4nder und Kommunen erwarten elektronische Rechnungen in Form der XRechnung."},{title:"Rechnungen online einsehen",text:"Au\xDFerdem k\xF6nnen Sie die Einstellungen rund um Ihre Rechnung \xE4ndern. Beispielsweise, indem Sie eine aktuelle E-Mail-Adresse angeben, unter der wir Sie dann k\xFCnftig bei Vorliegen einer neuen Rechnung benachrichtigen werden.",btn:"Zum Kundencenter"},{title:"Was muss ich bei meinem Umzug beachten?",list:["Pr\xFCfen Sie die verf\xFCgbaren Tarife am Standort. <a class='link' href='https://geschaeftskunden.telekom.de/internet-dsl/tarife/internet-dsl-tarife#DSL-Verfuegbarkeit' target='_blank'>Verf\xFCgbarkeit pr\xFCfen.</a>","Pr\xFCfen Sie anhand der <a class='link' href='https://geschaeftskunden.telekom.de/hilfe-und-service/hilfe-themen/umzug/checkliste' target='_blank'>Checkliste</a>, welche Informationen Sie f\xFCr den Umzug ben\xF6tigen.","Pr\xFCfen Sie, ob Sie neue Kommunikationsl\xF6sungen ben\xF6tigen. <a class='link' href='https://geschaeftskunden.telekom.de/internet-dsl/geraete-zubehoer' target='_blank'>Kommunikationsl\xF6sungen pr\xFCfen.</a>"]},{title:"Kontakt",items:[{caption:"Festnetz Vertr\xE4ge",phone:"0800-330 1000"},{caption:"Mobil Vertr\xE4ge",phone:"0800 - 330 2828"}]}];const q={components:{SearchInput:oe,Suggestions:he,Extractions:O,Divider:Ze,SearchSuggestions:je,Feedback:F,SuggestionsEmpty:ke},props:{query:{type:String,default:""}},emits:["handleInput","handleEnter","handleHide","changeQuery"],data(){return{isSuggestionsVisible:!0,isExtractionsVisible:!1,extractions:U,pageSearchInput:document.getElementsByClassName("js-search-trigger")[0],modalTopPosition:"672px",suggestions:[],isSuggestionsEmpty:!1,localQuery:""}},created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.modalTopPosition=this.pageSearchInput.getBoundingClientRect().top+"px"},async handleInput(e){e=e.toLowerCase(),this.localQuery=e,this.$emit("handleInput",e),e.length===0?(this.isSuggestionsVisible=!0,this.isExtractionsVisible=!1,this.isSuggestionsEmpty=!1):e.length>0&&e.includes("umc")?(this.isSuggestionsVisible=!0,this.isExtractionsVisible=!0,this.isSuggestionsEmpty=!1):e.length>0&&(this.isSuggestionsEmpty=!0,this.isSuggestionsVisible=!1,this.isExtractionsVisible=!1)},handleClear(){this.extractions=null}}},T=()=>{X(e=>({dae04cf4:e.modalTopPosition}))},R=q.setup;q.setup=R?(e,s)=>(T(),R(e,s)):T;const Ks=q,Ds=e=>(k("data-v-3ee03346"),e=e(),b(),e),Qs={class:"search-modal"},js={class:"search-modal__body"},Ws=Ds(()=>t("div",{class:"search-modal__input-divider"},null,-1));function Xs(e,s,o,r,n,i){const a=_("SearchInput"),d=_("Extractions"),h=_("SearchSuggestions"),f=_("SuggestionsEmpty");return c(),l("div",Qs,[t("div",{class:"search-modal__overlay",onClick:s[0]||(s[0]=P=>e.$emit("handleHide"))}),t("div",js,[m(a,{query:o.query,onEnter:s[1]||(s[1]=P=>e.$emit("handleEnter")),onHandleInput:i.handleInput,onClear:i.handleClear},null,8,["query","onHandleInput","onClear"]),Ws,n.isExtractionsVisible?(c(),p(d,{key:0,data:n.extractions[2]},null,8,["data"])):g("",!0),n.isSuggestionsVisible?(c(),p(h,{key:1,onClick:s[2]||(s[2]=P=>e.$emit("handleEnter"))})):g("",!0),n.isSuggestionsEmpty?(c(),p(f,{key:2,query:n.localQuery},null,8,["query"])):g("",!0)])])}var A=u(Ks,[["render",Xs],["__scopeId","data-v-3ee03346"]]);const Js={},M=e=>(k("data-v-1dc58460"),e=e(),b(),e),Zs={class:"categories"},Gs=M(()=>t("div",{class:"categories__item categories__item_active"}," Alles (123) ",-1)),Ys=M(()=>t("div",{class:"categories__item"}," Produkte (74) ",-1)),et=M(()=>t("div",{class:"categories__item"}," Hilfe Themen (16) ",-1)),st=M(()=>t("div",{class:"categories__item"}," Community (23) ",-1)),tt=[Gs,Ys,et,st];function nt(e,s){return c(),l("div",Zs,tt)}var it=u(Js,[["render",nt],["__scopeId","data-v-1dc58460"]]);const at={components:{Btn:H},props:{query:{type:String,default:""}}},ot={class:"results-empty"},ct=v("Leider konnten keine Suchergebnisse gefunden werden, die mit ihrem Suchbegriff "),lt=v(" \xFCbereinstimmen."),rt=C('<div class="results-empty__title" data-v-310222dc> Tipps f\xFCr Ihre Suche: </div><div class="results-empty__list" data-v-310222dc><img src="'+S+'" data-v-310222dc> Sind alle W\xF6rter richtig geschrieben? </div><div class="results-empty__list" data-v-310222dc><img src="'+S+'" data-v-310222dc> Versuchen Sie Ihren Suchbegriff gegebenenfalls zu verallgemeinern. </div><div class="results-empty__list" data-v-310222dc><img src="'+S+'" data-v-310222dc> W\xE4hlen Sie Synonyme oder verwandte Begriffe. </div><div class="results-empty__desc" data-v-310222dc> Trotzdem nichts gefunden, dann stellen Sie Ihre Frage in der Community. </div>',5);function dt(e,s,o,r,n,i){const a=_("Btn");return c(),l("div",ot,[t("div",null,[ct,t("b",null,I(o.query),1),lt]),rt,m(a,{title:"Frage stellen",class:"results-empty__btn"})])}var _t=u(at,[["render",dt],["__scopeId","data-v-310222dc"]]);const ut={components:{},props:{query:{type:String,default:""}}},ht=e=>(k("data-v-5b97160e"),e=e(),b(),e),vt={class:"results-misspelled-queries"},pt={class:"results-misspelled-queries__title"},mt=v(" Ergebnisse f\xFCr: "),gt=v(" Stattdessen suchen nach: "),ft=ht(()=>t("span",{class:"results-misspelled-queries__link"}," Umzug ",-1));function kt(e,s,o,r,n,i){return c(),l("div",vt,[t("div",pt,[mt,t("b",null,I(o.query),1)]),gt,ft])}var bt=u(ut,[["render",kt],["__scopeId","data-v-5b97160e"]]);const yt={components:{CommonIcon:E,SearchCategories:it,Extractions:O,SearchModal:A,ResultsEmpty:_t,ResultsMisspelledQueries:bt},props:{query:{type:String,default:""}},emits:["clear","handleFocus"],data(){return{extractions:U,isEmpty:!1,isMisspelled:!1}},watch:{query:function(e,s){this.chackQuery()}},mounted(){this.chackQuery()},methods:{chackQuery(){this.query.includes("umc")?(this.isMisspelled=!0,this.isEmpty=!1):(this.isMisspelled=!1,this.isEmpty=!0)}}},$t={class:"results-page"},St={class:"results-page__inner"},It={class:"search"},xt=["value"],wt={key:2,class:"results-page__body"},Ct=C('<div class="row" data-v-adea5c5c><div class="row__cat" data-v-adea5c5c> Hilfe &amp; Service </div><div class="row__title" data-v-adea5c5c> Umzug Internet- und DSL-Anschluss </div><div class="row__text" data-v-adea5c5c> Sie ziehen um oder m\xF6chten eine Adress\xE4nderung veranlassen? Als Telekom Gesch\xE4ftskunde k\xF6nnen Sie Ihren Telefonanschluss bei einem <mark data-v-adea5c5c>Umzug</mark> einfach mitnehmen. </div></div><div class="row" data-v-adea5c5c><div class="row__cat" data-v-adea5c5c> Hilfe &amp; Service </div><div class="row__title" data-v-adea5c5c> Service f\xFCr Bauherren - \xDCberblick </div><div class="row__text" data-v-adea5c5c> Der Service f\xFCr Bauherren der Telekom begleitet Sie bei Ihrem Bauvorhaben: von der Planung bis zur Installation vor Ort. Informieren Sie sich jetzt! </div></div><div class="row" data-v-adea5c5c><div class="row__cat" data-v-adea5c5c> Hilfe &amp; Service </div><div class="row__title" data-v-adea5c5c> Vertrag und Kundendaten </div><div class="row__text" data-v-adea5c5c> Verwalten Sie selbst Ihre Vertragsdaten und pers\xF6nlichen Daten. Jetzt online \xE4ndern! </div></div><div class="row" data-v-adea5c5c><div class="row__cat" data-v-adea5c5c> Hilfe &amp; Service </div><div class="row__title" data-v-adea5c5c> Kontakt </div><div class="row__text" data-v-adea5c5c> \xDCber die Hotlines, den Online-Chat, per E-Mail, in der Business Community oder vor Ort im Telekom Shop - die Telekom ist f\xFCr Sie da. Kontaktieren Sie uns! </div></div><div class="row" data-v-adea5c5c><div class="row__cat" data-v-adea5c5c> Hilfe &amp; Service </div><div class="row__title" data-v-adea5c5c> Downloads </div><div class="row__text" data-v-adea5c5c> Sie suchen Brosch\xFCren, Zertifikate, Anleitungen und Softwareupdates? Mit unseren Downloads bleiben Sie immer auf dem neuesten Stand! </div></div>',5),Et=[Ct];function Mt(e,s,o,r,n,i){const a=_("CommonIcon"),d=_("ResultsEmpty"),h=_("ResultsMisspelledQueries");return c(),l("div",$t,[t("div",St,[t("div",It,[t("input",{type:"text",value:o.query,class:"search__input",onFocus:s[0]||(s[0]=f=>e.$emit("handleFocus",f.target.value))},null,40,xt),t("div",{class:"search__icon",onClick:s[1]||(s[1]=f=>e.$emit("clear"))},[m(a,{icon:"close",size:20})])]),n.isEmpty?(c(),p(d,{key:0,query:o.query},null,8,["query"])):g("",!0),n.isMisspelled?(c(),p(h,{key:1,query:o.query},null,8,["query"])):g("",!0),n.isEmpty?g("",!0):(c(),l("div",wt,Et))])])}var Vt=u(yt,[["render",Mt],["__scopeId","data-v-adea5c5c"]]);const zt={},Ht={class:"hidden"},Ft=C(`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-close" viewBox="0 0 64 64"><path fill="none" d="M0 0H64.001V64H0z"></path><path fill="#262626" d="M51.822,49.728l-17.7-17.7l17.698-17.7c0.586-0.586,0.586-1.535,0-2.121c-0.586-0.586-1.536-0.586-2.121,0 l-17.698,17.7l-17.7-17.7c-0.586-0.586-1.535-0.586-2.121,0c-0.586,0.586-0.586,1.535,0,2.121l17.7,17.7l-17.698,17.7 c-0.586,0.586-0.586,1.535,0,2.121c0.293,0.293,0.677,0.439,1.061,0.439c0.384,0,0.768-0.146,1.061-0.439l17.698-17.7l17.7,17.7 c0.293,0.293,0.677,0.439,1.06,0.439c0.384,0,0.768-0.146,1.061-0.439C52.408,51.263,52.408,50.314,51.822,49.728z"></path></symbol><symbol id="icon-time" viewBox="0 0 512 512"><path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c141.4,0,256-114.6,256-256S397.4,0,256,0z M256,469.3\r
          c-117.8,0-213.3-95.5-213.3-213.3c0-117.8,95.5-213.3,213.3-213.3c117.8,0,213.3,95.5,213.3,213.3\r
          C469.3,373.8,373.8,469.3,256,469.3z M277.3,85.3h-42.7V256l96,96l32-32l-85.3-85.3V85.3z"></path></symbol><symbol id="icon-like" viewBox="0 0 502.641 502.641"><path style="fill:#010002;" d="M494.812,235.513c-15.207-36.929-43.94-55.674-85.442-55.674c0,0-27.244,0-49.742,0\r
            c8.413-19.004,17.774-46.571,17.774-79.79c0-9.103-0.712-18.551-2.438-28.171c-6.536-38.612-32.895-59.147-70.364-55.027\r
            c-14.841,1.704-19.931,15.79-32.227,49.936c-10.203,28.301-24.181,67.064-44.457,98.233\r
            c-14.905,22.908-41.459,40.984-63.763,52.115v-2.826H0V458.21h164.197v-13.439c25.842-1.273,40.531-0.518,43.983,0.582\r
            l29.379,17.062l21.959,13.697c21.334,11.497,114.649,12.597,154.663,6.665c51.446-7.507,63.871-49.677,64.389-51.489\r
            C482.625,417.311,518.022,291.834,494.812,235.513z M447.572,422.424c-0.302,0.928-7.787,24.03-38.072,28.366\r
            c-43.055,6.407-122.91,2.524-134.753-3.128c0.086,0.065-19.478-12.209-19.478-12.209l-36.908-20.73\r
            c-8.564-2.869-27.977-3.193-54.164-2.028V252.036c26.446-10.699,67.409-33.672,90.77-69.415\r
            c22.347-34.298,37.059-75.088,47.801-104.92c0,0,9.47-23.577,11.756-29.034c16.351,0.086,25.367,9.081,28.732,28.56\r
            c1.337,7.636,1.855,15.207,1.855,22.52c0,48.34-24.828,86.822-25.195,87.297l-16.372,24.957l105.826,0.043\r
            c28.301,0,45.428,11.023,55.631,35.743C481.05,286.722,457.754,387.091,447.572,422.424z"></path></symbol><symbol id="icon-dislike" viewBox="0 0 502.698 502.698"><path style="fill:#010002;" d="M478.612,71.398c-0.496-1.812-12.942-43.961-64.346-51.533\r
          c-39.992-5.867-133.394-4.81-154.663,6.709L237.581,40.25c0,0-29.293,17.062-29.358,17.062\r
          c-3.322,1.079-18.055,1.877-43.875,0.604v-13.46H0v243.922h164.305v-2.847c22.218,11.131,48.815,29.207,63.634,52.137\r
          c20.363,31.148,34.384,69.911,44.479,98.169c12.295,34.19,17.408,48.319,32.27,49.958c37.447,4.185,63.785-16.372,70.342-55.005\r
          c1.683-9.621,2.438-19.047,2.438-28.15c0-33.241-9.383-60.786-17.796-79.79c22.52,0,49.785,0,49.785,0\r
          c41.459,0,70.213-18.788,85.377-55.739C518.087,210.853,482.776,85.376,478.612,71.398z M465.044,254.857\r
          c-10.117,24.72-27.33,35.764-55.545,35.764H303.63l16.437,24.979c0.259,0.453,25.152,38.935,25.152,87.297\r
          c0,7.291-0.582,14.841-1.855,22.541c-3.387,19.457-12.403,28.473-28.775,28.603c-2.222-5.565-11.734-29.121-11.734-29.121\r
          c-10.678-29.811-25.41-70.601-47.758-104.899c-23.318-35.721-64.389-58.716-90.748-69.436V89.927\r
          c26.187,1.23,45.471,0.82,54.078-2.028l37.015-20.73c0,0,19.522-12.274,19.392-12.209c11.842-5.673,91.697-9.491,134.817-3.149\r
          c30.178,4.4,37.77,27.503,38.051,28.452C457.883,115.639,481.093,215.965,465.044,254.857z"></path></symbol><symbol id="icon-search" viewBox="0 0 24 24"><defs><path id="43maifm2fa" d="M0 0h24v24H0z"></path><path id="eun8lbqwbb" d="M0 0h24v24H0z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="vjvzh5xj1c" fill="#fff"><use xlink:href="#eun8lbqwbb"></use></mask><path d="M3.5 10c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5S3.5 6.4 3.5 10zm17.9 9.6c.45.5.45 1.3-.05 1.75-.45.5-1.25.5-1.75 0l-4.9-4.9c-1.3 1-2.95 1.55-4.7 1.55-4.4 0-8-3.6-8-8s3.65-8 8.05-8 8 3.6 8 8a8.02 8.02 0 0 1-1.55 4.7l4.9 4.9z" fill="#000" mask="url(#vjvzh5xj1c)"></path></g></symbol></svg>`,1),Bt=[Ft];function qt(e,s){return c(),l("div",Ht,Bt)}var Pt=u(zt,[["render",qt]]);const Tt={components:{SearchModal:A,ResultsPage:Vt,Icons:Pt},data(){return{isModalSearchVisible:!0,isModalResultPageVisible:!1,query:""}},created(){const e=document.getElementById("app");var s=new MutationObserver(()=>{this.resetState()});s.observe(e,{attributes:!0,attributeFilter:["class"]})},methods:{handleEnter(){this.isModalSearchVisible=!1,this.isModalResultPageVisible=!0,document.body.classList.remove("app-active-aimation"),document.body.classList.add("app-active-results")},handleFocus(e){this.query=e,this.isModalSearchVisible=!0,this.isModalResultPageVisible=!0},handleHide(){if(this.isModalResultPageVisible){this.isModalSearchVisible=!1;return}this.isModalResultPageVisible=!1,document.getElementById("app").classList.toggle("app-visible"),document.body.classList=""},handleInput(e){this.query=e},clear(){this.query=""},resetState(){this.isModalResultPageVisible=!1,this.isModalSearchVisible=!0,this.query=""}}};function Rt(e,s,o,r,n,i){const a=_("SearchModal"),d=_("ResultsPage"),h=_("Icons");return c(),l(z,null,[n.isModalSearchVisible?(c(),p(a,{key:0,query:n.query,onHandleEnter:i.handleEnter,onHandleHide:i.handleHide,onHandleInput:i.handleInput},null,8,["query","onHandleEnter","onHandleHide","onHandleInput"])):g("",!0),n.isModalResultPageVisible?(c(),p(d,{key:1,query:n.query,onHandleFocus:i.handleFocus,onClear:i.clear},null,8,["query","onHandleFocus","onClear"])):g("",!0),m(h)],64)}var Nt=u(Tt,[["render",Rt]]);J(Nt).mount("#app");
