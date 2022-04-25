import{o as a,c as l,a as s,n as j,r as _,w as W,b as u,F as k,p as y,d as I,e as p,t as A,f as P,g as Z,h as m,i as R,j as H,v as E,k as Y,l as g,m as B,u as Q,q as T,s as G}from"./vendor.e2bae0c1.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))h(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function c(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(i){if(i.ep)return;i.ep=!0;const n=c(i);fetch(i.href,n)}};X();var v=(t,e)=>{const c=t.__vccOpts||t;for(const[h,i]of e)c[h]=i;return c};const J={props:{icon:{default:"",type:String},size:{default:24,type:Number}}},ee=["xlink:href"];function te(t,e,c,h,i,n){return a(),l("svg",{style:j(`width: ${c.size}px; height: ${c.size}px;`)},[s("use",{"xlink:href":`#icon-${c.icon}`,"xmlns:xlink":"http://www.w3.org/1999/xlink"},null,8,ee)],4)}var $=v(J,[["render",te]]);const se={components:{Icon:$},props:["query"],data(){return{isClearVisible:!1}},computed:{isClearBtn(){return this.query.length>0}},mounted(){this.$refs.input.focus()},methods:{handleInput(t){const e=t.target.value;e.length>0?this.isClearVisible=!0:this.isClearVisible=!1,this.$emit("handleInput",e)},handleEnter(t){t.length>0&&this.$emit("enter",t)},handleClear(){this.$refs.input.value=null}}},ne={class:"search-input"},ie=["value"],oe={key:1,class:"search-input__icon"};function ae(t,e,c,h,i,n){const o=_("Icon");return a(),l("div",ne,[s("input",{class:"search-input__input",placeholder:"Wie k\xF6nnen wir Ihnen helfen?",value:c.query,onInput:e[0]||(e[0]=(...r)=>n.handleInput&&n.handleInput(...r)),onKeyup:e[1]||(e[1]=W(r=>n.handleEnter(r.target.value),["enter"])),ref:"input"},null,40,ie),n.isClearBtn?(a(),l("div",{key:0,onClick:e[2]||(e[2]=(...r)=>n.handleClear&&n.handleClear(...r)),class:"search-input__icon"},[u(o,{icon:"close"})])):(a(),l("div",oe,[u(o,{icon:"search"})]))])}var ce=v(se,[["render",ae],["__scopeId","data-v-643c8c3b"]]);const le={props:{local:{type:Boolean,default:!1}},components:{Icon:$}},f=t=>(y("data-v-18407996"),t=t(),I(),t),re={class:"suggestions"},de=f(()=>s("div",{class:"suggestions__title"},"IHRE LETZTEN SUCHEN",-1)),_e={class:"suggestions__body"},ue=f(()=>s("span",null,"Einzelverbindungsnachweis",-1)),he={class:"suggestions__icon"},ve={class:"suggestions__body"},pe=f(()=>s("span",null,"Tarifwechsel",-1)),ge={class:"suggestions__icon"},me=f(()=>s("div",{class:"suggestions__title"},"OFT GEFRAGT",-1)),fe=p(" Aktuelle Angebote "),be=f(()=>s("span",{class:"suggestions__category"},"In Produkte",-1)),ke=[fe,be],ye=p(" Online Vorteile "),Ie=f(()=>s("span",{class:"suggestions__category"},"In Produkte",-1)),$e=[ye,Ie],Se=p(" IPhone "),Ae=f(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),we=[Se,Ae],Ce=p(" Rechnungen "),xe=f(()=>s("span",{class:"suggestions__category"},"In FAQs",-1)),He=[Ce,xe];function ze(t,e,c,h,i,n){const o=_("Icon");return a(),l("div",re,[c.local?(a(),l(k,{key:0},[de,s("div",{class:"suggestions__item",onClick:e[0]||(e[0]=r=>t.$emit("click"))},[s("div",_e,[u(o,{icon:"time",size:17}),ue]),s("div",he,[u(o,{icon:"close",size:16})])]),s("div",{class:"suggestions__item",onClick:e[1]||(e[1]=r=>t.$emit("click"))},[s("div",ve,[u(o,{icon:"time",size:17}),pe]),s("div",ge,[u(o,{icon:"close",size:16})])])],64)):(a(),l(k,{key:1},[me,s("div",{class:"suggestions__item",onClick:e[2]||(e[2]=r=>t.$emit("click"))},ke),s("div",{class:"suggestions__item",onClick:e[3]||(e[3]=r=>t.$emit("click"))},$e),s("div",{class:"suggestions__item",onClick:e[4]||(e[4]=r=>t.$emit("click"))},we),s("div",{class:"suggestions__item",onClick:e[5]||(e[5]=r=>t.$emit("click"))},He)],64))])}var Me=v(le,[["render",ze],["__scopeId","data-v-18407996"]]);const Ve={props:{local:{type:Boolean,default:!1}},components:{Icon:$}},b=t=>(y("data-v-0e841879"),t=t(),I(),t),Ee={class:"suggestions"},Be=p(" Umzug beauftragen "),Fe=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ne=[Be,Fe],Pe=p(" Umzugstermin "),Re=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Te=[Pe,Re],Ue=p(" Umzug stornieren "),De=b(()=>s("span",{class:"suggestions__category"},"In FAQs",-1)),Oe=[Ue,De],Ke=p(" Installation Umzug "),qe=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Le=[Ke,qe],je=p(" Umzug Sonderk\xFCndigungsrecht "),We=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ze=[je,We],Ye=p(" Umzugsdauer "),Qe=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),Ge=[Ye,Qe],Xe=p(" Umzugsservice "),Je=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),et=[Xe,Je],tt=p(" K\xFCndigung Umzug "),st=b(()=>s("span",{class:"suggestions__category"},"In Hilfe Themen",-1)),nt=[tt,st];function it(t,e,c,h,i,n){return a(),l("div",Ee,[s("div",{class:"suggestions__item",onClick:e[0]||(e[0]=o=>t.$emit("click"))},Ne),s("div",{class:"suggestions__item",onClick:e[1]||(e[1]=o=>t.$emit("click"))},Te),s("div",{class:"suggestions__item",onClick:e[2]||(e[2]=o=>t.$emit("click"))},Oe),s("div",{class:"suggestions__item",onClick:e[3]||(e[3]=o=>t.$emit("click"))},Le),s("div",{class:"suggestions__item",onClick:e[4]||(e[4]=o=>t.$emit("click"))},Ze),s("div",{class:"suggestions__item",onClick:e[5]||(e[5]=o=>t.$emit("click"))},Ge),s("div",{class:"suggestions__item",onClick:e[6]||(e[6]=o=>t.$emit("click"))},et),s("div",{class:"suggestions__item",onClick:e[7]||(e[7]=o=>t.$emit("click"))},nt)])}var ot=v(Ve,[["render",it],["__scopeId","data-v-0e841879"]]);const at={},ct={class:"divider"};function lt(t,e){return a(),l("div",ct)}var U=v(at,[["render",lt],["__scopeId","data-v-11083cc5"]]);const rt={props:{title:{type:String},disabled:{type:Boolean,default:!1}},methods:{handleClick(){this.disabled||this.$emit("click")}}};function dt(t,e,c,h,i,n){return a(),l("div",{onClick:e[0]||(e[0]=(...o)=>n.handleClick&&n.handleClick(...o)),class:P(["btn",{btn_disabled:c.disabled}])},A(c.title),3)}var D=v(rt,[["render",dt],["__scopeId","data-v-5386f052"]]);const _t={components:{Icon:$}},ut={class:"feedback-modal"};function ht(t,e,c,h,i,n){const o=_("Icon");return a(),l("div",ut,[s("div",{onClick:e[0]||(e[0]=r=>t.$emit("close")),class:"feedback-modal__close"},[u(o,{icon:"close",size:16})]),Z(t.$slots,"default",{},void 0,!0)])}var O=v(_t,[["render",ht],["__scopeId","data-v-5bdc2622"]]),vt="./positive-feedback.png";const pt={components:{FeedbackModal:O}},gt=t=>(y("data-v-2a50f883"),t=t(),I(),t),mt=gt(()=>s("div",{class:"feedback-positive"},[s("img",{src:vt,alt:""}),s("div",{class:"feedback-positive__title"},"Vielen Dank f\xFCr Ihr Feedback!")],-1));function ft(t,e,c,h,i,n){const o=_("FeedbackModal");return a(),m(o,{onClose:e[0]||(e[0]=r=>t.$emit("close"))},{default:R(()=>[mt]),_:1})}var bt=v(pt,[["render",ft],["__scopeId","data-v-2a50f883"]]),kt="data:image/png;base64,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";const yt={components:{FeedbackModal:O,Btn:D},data(){return{isTextareaHidden:!0,text:"",checked:[],isSuccess:!1}},methods:{showTextarea(){this.isTextareaHidden=!1,this.checked=[],this.text=""},submit(){this.isNotValid||(this.isSuccess=!0)}},computed:{isNotValid(){return this.text.length===0&&this.checked.length===0}}},w=t=>(y("data-v-5d350beb"),t=t(),I(),t),It={class:"feedback-negative"},$t={key:0,class:"feedback-negative__body"},St=w(()=>s("div",{class:"feedback-negative__title"},"Was h\xE4tten Sie erwartet?",-1)),At=w(()=>s("div",{class:"checkmark"},null,-1)),wt=p(" Andere Informationen "),Ct=w(()=>s("div",{class:"checkmark"},null,-1)),xt=p(" Bessere Erkl\xE4rungen "),Ht={key:1,class:"feedback-negative__result"},zt=w(()=>s("img",{src:kt,alt:""},null,-1)),Mt=w(()=>s("div",{class:"feedback-negative__result-title"}," Vielen Dank f\xFCr Ihr Feedback! ",-1)),Vt=[zt,Mt];function Et(t,e,c,h,i,n){const o=_("Btn"),r=_("FeedbackModal");return a(),m(r,{onClose:e[4]||(e[4]=d=>t.$emit("close"))},{default:R(()=>[s("div",It,[i.isSuccess?(a(),l("div",Ht,Vt)):(a(),l("div",$t,[St,i.isTextareaHidden?(a(),l(k,{key:0},[s("label",null,[H(s("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>i.checked=d),type:"checkbox",value:"Andere Informationen",id:"Andere Informationen"},null,512),[[E,i.checked]]),At,wt]),s("label",null,[H(s("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>i.checked=d),type:"checkbox",value:"Bessere Erkl\xE4rungen",id:"Bessere Erkl\xE4rungen"},null,512),[[E,i.checked]]),Ct,xt]),s("div",{onClick:e[2]||(e[2]=(...d)=>n.showTextarea&&n.showTextarea(...d)),class:"feedback-negative__others"},"Andere Gr\xFCnde")],64)):H((a(),l("textarea",{key:1,"onUpdate:modelValue":e[3]||(e[3]=d=>i.text=d),placeholder:"Feedback hier eingeben"},null,512)),[[Y,i.text]]),u(o,{onClick:n.submit,title:"Senden",class:"feedback-negative__btn",disabled:n.isNotValid},null,8,["onClick","disabled"])]))])]),_:1})}var Bt=v(yt,[["render",Et],["__scopeId","data-v-5d350beb"]]);const Ft={components:{Icon:$,FeedbackPositive:bt,FeedbackNegative:Bt},data(){return{isPositiveOpen:!1,isNegativeOpen:!1}},methods:{openPositive(){this.isPositiveOpen=!0},openNegative(){this.isNegativeOpen=!0},toggleModals(){this.isPositiveOpen=!1,this.isNegativeOpen=!1}}},M=t=>(y("data-v-4cafbece"),t=t(),I(),t),Nt={class:"feedback"},Pt=M(()=>s("div",{class:"feedback__caption"},"Konnte ihr Anliegen gel\xF6st werden?",-1)),Rt={class:"feedback__actions"},Tt=M(()=>s("span",null,"Ja, es wurde gel\xF6st",-1)),Ut=M(()=>s("span",null,"Nein, ich ben\xF6tige weitere Hilfe",-1));function Dt(t,e,c,h,i,n){const o=_("Icon"),r=_("FeedbackPositive"),d=_("FeedbackNegative");return a(),l("div",Nt,[Pt,s("div",Rt,[s("div",{onClick:e[0]||(e[0]=(...S)=>n.openPositive&&n.openPositive(...S)),class:"feedback__btn"},[u(o,{icon:"like",size:14}),Tt]),s("div",{onClick:e[1]||(e[1]=(...S)=>n.openNegative&&n.openNegative(...S)),class:"feedback__btn"},[u(o,{icon:"dislike",size:14}),Ut])]),i.isPositiveOpen?(a(),m(r,{key:0,onClose:n.toggleModals},null,8,["onClose"])):g("",!0),i.isNegativeOpen?(a(),m(d,{key:1,onClose:n.toggleModals},null,8,["onClose"])):g("",!0)])}var K=v(Ft,[["render",Dt],["__scopeId","data-v-4cafbece"]]);const Ot={props:{data:{type:Object},isResults:{type:Boolean,default:!1}},components:{Divider:U,Feedback:K,Btn:D}},Kt={class:"extractions__title"},qt={class:"extractions__text"},Lt={key:1,href:"https://www.telekom.de/hilfe/rechnung/rechnung-erhalten/rechnungen-online-einsehen",target:"_blank"},jt={key:2,class:"extractions__phones"},Wt={class:"extractions__phone"},Zt={class:"extractions__phones-caption"},Yt={class:"extractions__phones-phone"},Qt={class:"extractions__phones-btn"},Gt=["innerHTML"];function Xt(t,e,c,h,i,n){_("Divider");const o=_("Btn"),r=_("Feedback");return a(),l("div",{class:P(["extractions",{extractions_results:c.isResults}])},[g("",!0),s("div",Kt,A(c.data.title),1),s("div",qt,A(c.data.text),1),c.data.btn?(a(),l("a",Lt,[u(o,{title:c.data.btn,class:"extractions__btn"},null,8,["title"])])):g("",!0),c.data.items?(a(),l("div",jt,[(a(!0),l(k,null,B(c.data.items,d=>(a(),l("div",Wt,[s("div",Zt,A(d.caption),1),s("div",Yt,A(d.phone),1),s("div",Qt,[u(o,{title:"Jetzt anrufen"})])]))),256))])):g("",!0),c.data.list?(a(!0),l(k,{key:3},B(c.data.list,d=>(a(),l("div",{class:"extractions__list",innerHTML:d},null,8,Gt))),256)):g("",!0),u(r,{class:"extractions__feedback"})],2)}var q=v(Ot,[["render",Xt],["__scopeId","data-v-02952ab5"]]);const z=[{title:"Alles zum Thema X Rechnung",text:"Rechnungen ab einem Wert von 1.000 Euro im Format der XRechnung an \xF6ffentliche Institutionen senden. Klassische Beh\xF6rden des Bundes, der L\xE4nder und Kommunen erwarten elektronische Rechnungen in Form der XRechnung."},{title:"Rechnungen online einsehen",text:"Au\xDFerdem k\xF6nnen Sie die Einstellungen rund um Ihre Rechnung \xE4ndern. Beispielsweise, indem Sie eine aktuelle E-Mail-Adresse angeben, unter der wir Sie dann k\xFCnftig bei Vorliegen einer neuen Rechnung benachrichtigen werden.",btn:"Zum Kundencenter"},{title:"Was muss ich bei meinem Umzug beachten?",list:["1.	Pr\xFCfen Sie die verf\xFCgbaren Tarife am Standort. <a class='link' href='https://geschaeftskunden.telekom.de/internet-dsl/tarife/internet-dsl-tarife#DSL-Verfuegbarkeit' target='_blank'>Verf\xFCgbarkeit pr\xFCfen.</a>","2.	Pr\xFCfen Sie anhand der <a class='link' href='https://geschaeftskunden.telekom.de/hilfe-und-service/hilfe-themen/umzug/checkliste' target='_blank'>Checkliste</a>, welche Informationen Sie f\xFCr den Umzug ben\xF6tigen.","3.	Sollten Sie f\xFCr Ihren neuen Firmenstandort neue bzw. andere Ger\xE4te/Zubeh\xF6r brauchen, dann schauen Sie unverbindlich auf unseren <a class='link' href='https://geschaeftskunden.telekom.de/internet-dsl/geraete-zubehoer' target='_blank'>Produktseiten</a> vorbei."]},{title:"Kontakt",items:[{caption:"Festnetz Vertr\xE4ge",phone:"0800-330 1000"},{caption:"Mobil Vertr\xE4ge",phone:"0800 - 330 2828"}]}];const V={emits:["handleEnter","handleHide","changeQuery"],props:["query"],components:{SearchInput:ce,Suggestions:Me,Extractions:q,Divider:U,SearchSuggestions:ot,Feedback:K},data(){return{isSuggestionsInitState:!0,isExtractionsVisible:!1,extractions:null,pageSearchInput:document.getElementsByClassName("js-search-trigger")[0],modalTopPosition:"672px"}},mounted(){},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(t){this.modalTopPosition=this.pageSearchInput.getBoundingClientRect().top+"px"},handleInput(t){console.log(this.isExtractionsVisible),t.length>0?this.isSuggestionsInitState=!1:this.isSuggestionsInitState=!0,t.length>3?(this.extractions=z[3],this.isExtractionsVisible=!0):t.length===3?(this.extractions=z[2],this.isExtractionsVisible=!0):this.isExtractionsVisible=!1,this.$emit("changeQuery",t)},handleClear(){this.extractions=null}}},F=()=>{Q(t=>({"595320b9":t.modalTopPosition}))},N=V.setup;V.setup=N?(t,e)=>(F(),N(t,e)):F;const Jt=V,es=t=>(y("data-v-7d8c8c4c"),t=t(),I(),t),ts={class:"search-modal"},ss={class:"search-modal__body"},ns=es(()=>s("div",{class:"search-modal__input-divider"},null,-1));function is(t,e,c,h,i,n){const o=_("SearchInput"),r=_("Suggestions"),d=_("Extractions"),S=_("SearchSuggestions");return a(),l("div",ts,[s("div",{class:"search-modal__overlay",onClick:e[0]||(e[0]=C=>t.$emit("handleHide"))}),s("div",ss,[u(o,{onEnter:e[1]||(e[1]=C=>t.$emit("handleEnter")),onHandleInput:n.handleInput,onClear:n.handleClear,query:c.query},null,8,["onHandleInput","onClear","query"]),ns,i.isSuggestionsInitState?(a(),l(k,{key:0},[u(r,{class:"search-modal__row",onClick:e[2]||(e[2]=C=>t.$emit("handleEnter"))}),u(r,{local:"",class:"search-modal__row",onClick:e[3]||(e[3]=C=>t.$emit("handleEnter"))})],64)):g("",!0),i.isExtractionsVisible?(a(),m(d,{key:1,data:i.extractions,class:"search-modal__row"},null,8,["data"])):g("",!0),i.isSuggestionsInitState?g("",!0):(a(),m(S,{key:2,onClick:e[4]||(e[4]=C=>t.$emit("handleEnter"))}))])])}var L=v(Jt,[["render",is],["__scopeId","data-v-7d8c8c4c"]]);const os={},x=t=>(y("data-v-0427ea78"),t=t(),I(),t),as={class:"categories"},cs=x(()=>s("div",{class:"categories__item categories__item_active"},"Alles (123)",-1)),ls=x(()=>s("div",{class:"categories__item"},"Produkte (74)",-1)),rs=x(()=>s("div",{class:"categories__item"},"Hilfe Themen (16)",-1)),ds=x(()=>s("div",{class:"categories__item"},"Community (23)",-1)),_s=[cs,ls,rs,ds];function us(t,e){return a(),l("div",as,_s)}var hs=v(os,[["render",us],["__scopeId","data-v-0427ea78"]]);const vs={props:["query"],components:{Icon:$,Categories:hs,Extractions:q,SearchModal:L},data(){return{extractions:z}}},ps={class:"results-page"},gs={class:"results-page__inner"},ms={class:"search"},fs=["value"],bs=T('<div class="results-page__body" data-v-06848c8b><div class="row" data-v-06848c8b><div class="row__cat" data-v-06848c8b>Hilfe &amp; Service</div><div class="row__title" data-v-06848c8b>Umzug Internet- und DSL-Anschluss</div><div class="row__text" data-v-06848c8b>Sie ziehen um oder m\xF6chten eine Adress\xE4nderung veranlassen? Als Telekom Gesch\xE4ftskunde k\xF6nnen Sie Ihren Telefonanschluss bei einem <mark data-v-06848c8b>Umzug</mark> einfach mitnehmen.</div></div><div class="row" data-v-06848c8b><div class="row__cat" data-v-06848c8b>Hilfe &amp; Service</div><div class="row__title" data-v-06848c8b>Service f\xFCr Bauherren - \xDCberblick </div><div class="row__text" data-v-06848c8b>Der Service f\xFCr Bauherren der Telekom begleitet Sie bei Ihrem Bauvorhaben: von der Planung bis zur Installation vor Ort. Informieren Sie sich jetzt!</div></div><div class="row" data-v-06848c8b><div class="row__cat" data-v-06848c8b>Hilfe &amp; Service</div><div class="row__title" data-v-06848c8b>Vertrag und Kundendaten </div><div class="row__text" data-v-06848c8b>Verwalten Sie selbst Ihre Vertragsdaten und pers\xF6nlichen Daten. Jetzt online \xE4ndern!</div></div><div class="row" data-v-06848c8b><div class="row__cat" data-v-06848c8b>Hilfe &amp; Service</div><div class="row__title" data-v-06848c8b>Kontakt</div><div class="row__text" data-v-06848c8b>\xDCber die Hotlines, den Online-Chat, per E-Mail, in der Business Community oder vor Ort im Telekom Shop - die Telekom ist f\xFCr Sie da. Kontaktieren Sie uns!</div></div><div class="row" data-v-06848c8b><div class="row__cat" data-v-06848c8b>Hilfe &amp; Service</div><div class="row__title" data-v-06848c8b>Downloads</div><div class="row__text" data-v-06848c8b>Sie suchen Brosch\xFCren, Zertifikate, Anleitungen und Softwareupdates? Mit unseren Downloads bleiben Sie immer auf dem neuesten Stand!</div></div></div>',1);function ks(t,e,c,h,i,n){const o=_("Icon"),r=_("Categories");return a(),l("div",ps,[s("div",gs,[s("div",ms,[s("input",{type:"text",value:c.query,class:"search__input",onFocus:e[0]||(e[0]=d=>t.$emit("handleFocus",d.target.value))},null,40,fs),s("div",{class:"search__icon",onClick:e[1]||(e[1]=d=>t.$emit("clear"))},[u(o,{icon:"close",size:20})])]),u(r),bs])])}var ys=v(vs,[["render",ks],["__scopeId","data-v-06848c8b"]]);const Is={},$s={class:"hidden"},Ss=T(`<svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-close" viewBox="0 0 64 64"><path fill="none" d="M0 0H64.001V64H0z"></path><path fill="#262626" d="M51.822,49.728l-17.7-17.7l17.698-17.7c0.586-0.586,0.586-1.535,0-2.121c-0.586-0.586-1.536-0.586-2.121,0 l-17.698,17.7l-17.7-17.7c-0.586-0.586-1.535-0.586-2.121,0c-0.586,0.586-0.586,1.535,0,2.121l17.7,17.7l-17.698,17.7 c-0.586,0.586-0.586,1.535,0,2.121c0.293,0.293,0.677,0.439,1.061,0.439c0.384,0,0.768-0.146,1.061-0.439l17.698-17.7l17.7,17.7 c0.293,0.293,0.677,0.439,1.06,0.439c0.384,0,0.768-0.146,1.061-0.439C52.408,51.263,52.408,50.314,51.822,49.728z"></path></symbol><symbol id="icon-time" viewBox="0 0 512 512"><path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c141.4,0,256-114.6,256-256S397.4,0,256,0z M256,469.3\r
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
          c30.178,4.4,37.77,27.503,38.051,28.452C457.883,115.639,481.093,215.965,465.044,254.857z"></path></symbol><symbol id="icon-search" viewBox="0 0 24 24"><defs><path id="43maifm2fa" d="M0 0h24v24H0z"></path><path id="eun8lbqwbb" d="M0 0h24v24H0z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="vjvzh5xj1c" fill="#fff"><use xlink:href="#eun8lbqwbb"></use></mask><path d="M3.5 10c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5S3.5 6.4 3.5 10zm17.9 9.6c.45.5.45 1.3-.05 1.75-.45.5-1.25.5-1.75 0l-4.9-4.9c-1.3 1-2.95 1.55-4.7 1.55-4.4 0-8-3.6-8-8s3.65-8 8.05-8 8 3.6 8 8a8.02 8.02 0 0 1-1.55 4.7l4.9 4.9z" fill="#000" mask="url(#vjvzh5xj1c)"></path></g></symbol></svg>`,1),As=[Ss];function ws(t,e){return a(),l("div",$s,As)}var Cs=v(Is,[["render",ws]]);const xs={components:{SearchModal:L,ResultsPage:ys,Icons:Cs},data(){return{isModalSearchVisible:!0,isModalResultPageVisible:!1,query:""}},methods:{handleEnter(){this.isModalSearchVisible=!1,this.isModalResultPageVisible=!0,document.body.classList.remove("app-active-aimation"),document.body.classList.add("app-active-results")},handleFocus(t){this.query=t,this.isModalSearchVisible=!0,this.isModalResultPageVisible=!0},handleHide(){if(this.isModalResultPageVisible){this.isModalSearchVisible=!1;return}this.isModalResultPageVisible=!1,document.getElementById("app").classList.toggle("app-visible"),document.body.classList=""},handleInput(t){this.query=t},clear(){this.query=""},resetState(){this.isModalResultPageVisible=!1,this.isModalSearchVisible=!0,this.query=""}},created(){const t=document.getElementById("app");var e=new MutationObserver(()=>{this.resetState()});e.observe(t,{attributes:!0,attributeFilter:["class"]})}};function Hs(t,e,c,h,i,n){const o=_("SearchModal"),r=_("ResultsPage"),d=_("Icons");return a(),l(k,null,[i.isModalSearchVisible?(a(),m(o,{key:0,onHandleEnter:n.handleEnter,onHandleHide:n.handleHide,onChangeQuery:n.handleInput,query:i.query},null,8,["onHandleEnter","onHandleHide","onChangeQuery","query"])):g("",!0),i.isModalResultPageVisible?(a(),m(r,{key:1,onHandleFocus:n.handleFocus,onClear:n.clear,query:i.query},null,8,["onHandleFocus","onClear","query"])):g("",!0),u(d)],64)}var zs=v(xs,[["render",Hs]]);G(zs).mount("#app");
