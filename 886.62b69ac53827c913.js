"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[886],{4024:(w,f,s)=>{s.d(f,{e:()=>u});var c=s(4650);let u=(()=>{class p{constructor(a,_){this._context={appLet:null},a.createEmbeddedView(_,this._context)}set appLet(a){this._context.appLet=a}}return p.\u0275fac=function(a){return new(a||p)(c.Y36(c.s_b),c.Y36(c.Rgc))},p.\u0275dir=c.lG2({type:p,selectors:[["","appLet",""]],inputs:{appLet:"appLet"}}),p})()},8043:(w,f,s)=>{s.d(f,{$:()=>u});class c{static getTranslation(d,a){return a.find(m=>m.language===d)?.value}}class u{get getTranslation(){return c.getTranslation}}},886:(w,f,s)=>{s.r(f),s.d(f,{HomeModule:()=>Tn});var c=s(6895),u=s(529),p=s(2216),d=s(7489),a=s(7611),_=s(9997),m=s(6068),h=s(31),U=s(4169),$=s(4585),S=s(9605),n=s(4650);let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,S.y]}),t})();var k=s(3151),r=s(7340),A=s(2997),x=s(3416),T=s(9300),O=s(4004),F=s(8898),E=s(5776),z=s(5862),N=s(1674),Z=s(8043),v=s(7379),y=s(5019);function D(t,o){if(1&t&&(n.TgZ(0,"li")(1,"a",3)(2,"div"),n._UZ(3,"i"),n.qZA()()()),2&t){const e=o.$implicit;n.xp6(1),n.Q6J("href",e.url,n.LSH),n.uIk("aria-label",e.name),n.xp6(2),n.Tol(e.icon+" fa-2x")}}let H=(()=>{class t{constructor(){this.socialNetworks=[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-social-networks"]],inputs:{socialNetworks:"socialNetworks"},decls:5,vars:4,consts:[[1,"social-networks"],[3,"innerHTML"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"p",1),n.ALo(2,"translate"),n.TgZ(3,"ul"),n.YNc(4,D,4,4,"li",2),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("innerHTML",n.lcZ(2,2,"home.socialNetworks"),n.oJD),n.xp6(3),n.Q6J("ngForOf",i.socialNetworks))},dependencies:[c.sg,x.X$],styles:[".social-networks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter;margin-bottom:30px}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:start;gap:1em;list-style:none}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-bottom:3px solid transparent;padding:.5em 1em;transition:all .3s ease}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{border-color:var(--accentColor)}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--textColor)}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}}"],changeDetection:0}),t})();var b=s(4024),Q=s(547);const Y=["tools"];function R(t,o){if(1&t&&(n.TgZ(0,"li",5)(1,"span",6),n._uU(2),n.qZA(),n.TgZ(3,"span",7)(4,"div",8)(5,"div",9),n._UZ(6,"div",10),n.qZA()()()()),2&t){const e=o.$implicit,i=n.oxw(3);n.xp6(2),n.hij(" ",e.name," "),n.xp6(3),n.Udp("width",e.percentage+"%"),n.xp6(1),n.Q6J("@toolsEnterAnimation",i.toolsElementState)}}function I(t,o){if(1&t&&(n.TgZ(0,"ul"),n.YNc(1,R,7,4,"li",4),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",e.entities)}}function V(t,o){1&t&&(n.TgZ(0,"li",5)(1,"span",11),n._UZ(2,"p-skeleton",12),n.qZA()())}const j=function(){return[0,0,0,0,0,0]};function X(t,o){1&t&&(n.TgZ(0,"ul"),n.YNc(1,V,3,0,"li",4),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,j)))}function G(t,o){if(1&t&&(n.TgZ(0,"div",1,2),n.YNc(2,I,2,1,"ul",3),n.YNc(3,X,2,2,"ul",3),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngIf",!e.loading),n.xp6(1),n.Q6J("ngIf",e.loading)}}let q=(()=>{class t extends Z.${constructor(){super(...arguments),this.store=(0,n.f3M)(A.yh),this.ref=(0,n.f3M)(n.sBO),this.toolsElementState="notInViewport",this.entities=[],this.loading=!1,this.language$=this.store.select(y.$.getOne)}ngAfterViewInit(){const e=new IntersectionObserver(i=>{i.forEach(l=>{this.toolsElementState=l.isIntersecting?"inViewport":"notInViewport","inViewport"===this.toolsElementState&&(this.ref.detectChanges(),e.disconnect())})});e.observe(this.toolsElement.nativeElement)}}return t.\u0275fac=function(){let o;return function(i){return(o||(o=n.n5z(t)))(i||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["app-tools"]],viewQuery:function(e,i){if(1&e&&n.Gf(Y,5),2&e){let l;n.iGM(l=n.CRH())&&(i.toolsElement=l.first)}},inputs:{entities:"entities",loading:"loading"},features:[n.qOj],decls:2,vars:3,consts:[["class","tools",4,"appLet"],[1,"tools"],["tools",""],[4,"ngIf"],["class","tool",4,"ngFor","ngForOf"],[1,"tool"],[1,"name"],[1,"ability"],[1,"progress-border"],[1,"progress-filled"],[1,"progress-animation"],[1,"name","pb-1","pt-1"],["width","100%","height","1.5em"]],template:function(e,i){1&e&&(n.YNc(0,G,4,2,"div",0),n.ALo(1,"async")),2&e&&n.Q6J("appLet",n.lcZ(1,1,i.language$))},dependencies:[c.sg,c.O5,d.O,b.e,c.Ov],styles:[".tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]{display:grid;grid-column-gap:10px;grid-template-columns:repeat(1,100%)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;padding-bottom:2.5px;color:var(--textColor)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]{width:90%}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-border[_ngcontent-%COMP%]{height:15px;border:0;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-filled[_ngcontent-%COMP%]{height:15px;border:0;display:flex}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-filled[_ngcontent-%COMP%]   .progress-animation[_ngcontent-%COMP%]{width:100%;border-radius:5px;background-color:var(--accentColor)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{width:100%;height:15px;border:0;border-radius:5px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{width:100%;height:15px;border:1px solid none;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{width:100%;height:15px;border-radius:5px;background-color:var(--accentColor)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{width:100%;height:15px;border:0;border-radius:5px;background-color:#cecfd3}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)!important}}@keyframes _ngcontent-%COMP%_fillProgress{0%{width:0%}to{width:100%}}"],data:{animation:[(0,r.X$)("toolsEnterAnimation",[(0,r.SB)("inViewport",(0,r.oB)({width:"100%"})),(0,r.SB)("notInViewport",(0,r.oB)({width:"0%"})),(0,r.eR)("notInViewport <=> inViewport",(0,r.jt)("750ms ease-out"))])]},changeDetection:0}),t})();var J=s(2687),K=s(7579),W=s(2722),P=(()=>{return(t=P||(P={})).COMPANY="COMPANY",t.SCHOOL="SCHOOL",P;var t})(),nn=s(3369),L=s(2161);const tn=["position"];function en(t,o){if(1&t&&n._UZ(0,"fa-icon",13),2&t){const e=n.oxw(4);n.Q6J("icon",e.faGraduationCap)}}function on(t,o){if(1&t&&n._UZ(0,"fa-icon",13),2&t){const e=n.oxw(4);n.Q6J("icon",e.faBriefcase)}}function sn(t,o){if(1&t&&(n.TgZ(0,"li",14)(1,"div",15)(2,"span"),n._uU(3),n.qZA()(),n.TgZ(4,"div",16)(5,"span"),n._uU(6),n.ALo(7,"date"),n.ALo(8,"date"),n.ALo(9,"translate"),n.qZA()()()),2&t){const e=o.$implicit,i=n.oxw(3).appLet,l=n.oxw();n.xp6(3),n.Oqu(l.getTranslation(i.acronym,e.nameTranslations)),n.xp6(3),n.Oqu(n.xi3(7,2,e.dateFrom,"MM-yyyy")+" - "+(e.dateTo?n.xi3(8,5,e.dateTo,"MM-yyyy"):n.lcZ(9,8,"general.present")))}}function cn(t,o){if(1&t&&(n.TgZ(0,"li",5,6)(2,"div",7)(3,"div",8),n.YNc(4,en,1,1,"fa-icon",9),n.YNc(5,on,1,1,"fa-icon",9),n.qZA(),n.TgZ(6,"div",10)(7,"h3"),n._uU(8),n.qZA()()(),n.TgZ(9,"div",11)(10,"ul"),n.YNc(11,sn,10,10,"li",12),n.qZA()()()),2&t){const e=o.$implicit,i=n.oxw(3);n.Q6J("id",e.company.id)("@positionEnterAnimation",i.getPositionEnterAnimationState(e.company.id)),n.xp6(3),n.Q6J("ngSwitch",e.company.type),n.xp6(1),n.Q6J("ngSwitchCase",i.CompanyType.SCHOOL),n.xp6(1),n.Q6J("ngSwitchCase",i.CompanyType.COMPANY),n.xp6(3),n.Oqu(e.company.name),n.xp6(3),n.Q6J("ngForOf",e.positions)}}function an(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",3)(2,"ul"),n.YNc(3,cn,12,7,"li",4),n.ALo(4,"async"),n.qZA()(),n.BQk()),2&t){const e=n.oxw(2);n.xp6(3),n.Q6J("ngForOf",n.lcZ(4,1,e.positionsGrouped$))}}function rn(t,o){1&t&&(n.TgZ(0,"li",14)(1,"div",19),n._UZ(2,"p-skeleton",20),n.qZA(),n.TgZ(3,"div",16),n._UZ(4,"p-skeleton",21),n.qZA()())}const ln=function(){return[0,0]};function pn(t,o){1&t&&(n.TgZ(0,"li")(1,"div",7),n._UZ(2,"p-skeleton",18),n.qZA(),n.TgZ(3,"div",11)(4,"ul"),n.YNc(5,rn,5,0,"li",12),n.qZA()()()),2&t&&(n.xp6(5),n.Q6J("ngForOf",n.DdM(1,ln)))}const gn=function(){return[0,0,0,0]};function dn(t,o){1&t&&(n.ynx(0),n.TgZ(1,"div",3)(2,"ul"),n.YNc(3,pn,6,2,"li",17),n.qZA()(),n.BQk()),2&t&&(n.xp6(3),n.Q6J("ngForOf",n.DdM(1,gn)))}function mn(t,o){1&t&&(n.ynx(0),n._UZ(1,"app-generic-error"),n.BQk())}function un(t,o){if(1&t&&(n.ynx(0)(1,1),n.ALo(2,"async"),n.YNc(3,an,5,3,"ng-container",2),n.YNc(4,dn,4,2,"ng-container",2),n.YNc(5,mn,2,0,"ng-container",2),n.BQk()()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngSwitch",n.lcZ(2,4,e.positionsActionStatus$)),n.xp6(2),n.Q6J("ngSwitchCase",e.ActionStatus.SUCCESS),n.xp6(1),n.Q6J("ngSwitchCase",e.ActionStatus.PENDING),n.xp6(1),n.Q6J("ngSwitchCase",e.ActionStatus.ERROR)}}let _n=(()=>{class t extends Z.${constructor(){super(...arguments),this.store=(0,n.f3M)(A.yh),this.ref=(0,n.f3M)(n.sBO),this.positionElementStates=new Map,this.unsubscribe$=new K.x,this.language$=this.store.select(y.$.getOne),this.positionsActionStatus$=this.store.select(L.Y.getAction).pipe((0,T.h)(e=>!!e&&e.type===v.Us.LOAD_MANY),(0,O.U)(e=>e.status)),this.positionsGrouped$=this.store.select(L.Y.getAll).pipe((0,O.U)(e=>e.filter(i=>i.importance>1)),(0,O.U)(e=>{let i=[];return[...e].sort((g,M)=>new Date(M.dateFrom).getTime()-new Date(g.dateFrom).getTime()).forEach(g=>{i.find(C=>C.company.id===g.company.id)?i=i.map(C=>C.company.id===g.company.id?{...C,positions:[...C.positions,g]}:C):i.push({company:g.company,positions:[g]})}),i}))}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}ngAfterViewChecked(){this.positionElements.forEach(e=>{const i=new IntersectionObserver(l=>{l.forEach(g=>{const M=g.isIntersecting?"inViewport":"notInViewport";this.positionElementStates.set(e.nativeElement.id,M),"inViewport"===M&&(this.ref.detectChanges(),i.disconnect())})});i.observe(e.nativeElement)})}ngOnInit(){this.positionsGrouped$.pipe((0,W.R)(this.unsubscribe$)).subscribe(e=>{e.length||this.store.dispatch(nn.y.loadAll({payload:null}))})}getPositionEnterAnimationState(e){return this.positionElementStates.get(e)||"notInViewport"}get CompanyType(){return P}get ActionStatus(){return v.M4}get faGraduationCap(){return J.Xf_}get faBriefcase(){return J.HXv}}return t.\u0275fac=function(){let o;return function(i){return(o||(o=n.n5z(t)))(i||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["app-experience"]],viewQuery:function(e,i){if(1&e&&n.Gf(tn,5),2&e){let l;n.iGM(l=n.CRH())&&(i.positionElements=l)}},features:[n.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"experience"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["position",""],[1,"header"],[1,"icon",3,"ngSwitch"],[3,"icon",4,"ngSwitchCase"],[1,"organization"],[1,"items"],["class","item",4,"ngFor","ngForOf"],[3,"icon"],[1,"item"],[1,"position"],[1,"date"],[4,"ngFor","ngForOf"],["width","100%","height","10px"],[1,"position","pb-1"],["width","80%"],["width","60%"]],template:function(e,i){1&e&&(n.YNc(0,un,6,6,"ng-container",0),n.ALo(1,"async")),2&e&&n.Q6J("appLet",n.lcZ(1,1,i.language$))},dependencies:[c.sg,c.RF,c.n9,d.O,b.e,Q.l,p.BN,c.Ov,c.uU,x.X$],styles:[".experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:flex-start}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding:3.5px}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-left:7.5px;font-size:20px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{list-style:disc;font-size:25px;margin-left:50px;margin-bottom:5px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:lighter;font-style:italic}@media screen and (max-width: 800px){h3[_ngcontent-%COMP%]{font-size:16px!important}.experience[_ngcontent-%COMP%]{margin-bottom:25px!important}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px!important}}"],data:{animation:[(0,r.X$)("positionEnterAnimation",[(0,r.SB)("inViewport",(0,r.oB)({transform:"translateX(0)"})),(0,r.SB)("notInViewport",(0,r.oB)({transform:"translateX(+20%)"})),(0,r.eR)("notInViewport => inViewport",(0,r.jt)("0.15s"))])]},changeDetection:0}),t})(),fn=(()=>{class t{downloadCV(){const e=document.createElement("a");e.setAttribute("type","hidden"),e.href="assets/files/cv.pdf",e.download="CV - JUAN S\xc1EZ GARC\xcdA",document.body.appendChild(e),e.click(),e.remove()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-cv"]],decls:8,vars:6,consts:[[1,"cv"],[1,"button",3,"click"],[1,"ml-2","fa-solid","fa-download"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"p"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"button",1),n.NdJ("click",function(){return i.downloadCV()}),n._uU(5),n.ALo(6,"translate"),n._UZ(7,"i",2),n.qZA()()),2&e&&(n.xp6(2),n.Oqu(n.lcZ(3,2,"cv.info")),n.xp6(3),n.hij(" ",n.lcZ(6,4,"cv.button")," "))},dependencies:[x.X$],styles:[".cv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:var(--accentColor);border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:var(--hoverBgColor);color:var(--hoverTextColor)}"],changeDetection:0}),t})();function Cn(t,o){if(1&t&&(n.TgZ(0,"div",12)(1,"div",13)(2,"div",6)(3,"h3"),n._uU(4),n.qZA()(),n._UZ(5,"app-tools",14),n.ALo(6,"async"),n.qZA()()),2&t){const e=o.$implicit,i=n.oxw(2).appLet,l=n.oxw();n.xp6(1),n.Q6J("@enterAnimation",void 0),n.xp6(3),n.Oqu(l.getTranslation(i.acronym,e.nameTranslations)),n.xp6(1),n.Q6J("entities",n.lcZ(6,3,l.getSkills(e)))}}function hn(t,o){if(1&t&&(n.ynx(0),n.YNc(1,Cn,7,5,"div",11),n.ALo(2,"async"),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,e.skillTypes$))}}const xn=function(){return[]};function On(t,o){1&t&&(n.TgZ(0,"div",12)(1,"div",13)(2,"div",15),n._UZ(3,"p-skeleton",16),n.qZA(),n._UZ(4,"app-tools",17),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("entities",n.DdM(2,xn))("loading",!0))}const Mn=function(){return[0,0,0]};function vn(t,o){1&t&&(n.ynx(0),n.YNc(1,On,5,3,"div",11),n.BQk()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,Mn)))}function yn(t,o){1&t&&(n.ynx(0),n._UZ(1,"app-generic-error"),n.BQk())}function Pn(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),n._uU(8),n.ALo(9,"translate"),n.qZA()(),n._UZ(10,"app-cv"),n.qZA(),n.TgZ(11,"div",5)(12,"div",6)(13,"h3"),n._uU(14),n.ALo(15,"translate"),n.qZA()(),n._UZ(16,"app-social-networks",7),n.qZA()(),n.TgZ(17,"div",8)(18,"div",6)(19,"h3"),n._uU(20),n.ALo(21,"translate"),n.qZA()(),n._UZ(22,"app-experience"),n.qZA()()()(),n.ynx(23,9),n.ALo(24,"async"),n.YNc(25,hn,3,3,"ng-container",10),n.YNc(26,vn,2,2,"ng-container",10),n.YNc(27,yn,2,0,"ng-container",10),n.BQk()()),2&t){const e=n.oxw();n.xp6(5),n.Q6J("@enterAnimation",void 0),n.xp6(3),n.Oqu(n.lcZ(9,11,"home.cv")),n.xp6(3),n.Q6J("@enterAnimation",void 0),n.xp6(3),n.Oqu(n.lcZ(15,13,"home.contact")),n.xp6(2),n.Q6J("socialNetworks",e.socialNetworks),n.xp6(2),n.Q6J("@enterAnimation",void 0),n.xp6(2),n.Oqu(n.lcZ(21,15,"home.trajectory")),n.xp6(3),n.Q6J("ngSwitch",n.lcZ(24,17,e.skillTypesActionStatus$)),n.xp6(2),n.Q6J("ngSwitchCase",e.ActionStatus.SUCCESS),n.xp6(1),n.Q6J("ngSwitchCase",e.ActionStatus.PENDING),n.xp6(1),n.Q6J("ngSwitchCase",e.ActionStatus.ERROR)}}const wn=[{path:"",component:(()=>{class t extends Z.${constructor(){super(...arguments),this.store=(0,n.f3M)(A.yh),this.translateSrv=(0,n.f3M)(x.sK),this.language$=this.store.select(y.$.getOne),this.skills$=this.store.select(N.x.getAll),this.loadingSkills$=this.store.select(N.x.getLoading),this.skillTypes$=this.store.select(E.b.getAll),this.skillTypesActionStatus$=this.store.select(E.b.getAction).pipe((0,T.h)(e=>!!e&&e.type===v.Us.LOAD_MANY),(0,O.U)(e=>e.status)),this.socialNetworks=[{name:"GitHub",url:"https://github.com/JuamBer",icon:"fa-brands fa-github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/juamber/",icon:"fa-brands fa-linkedin"},{name:"StackOverflow",url:"https://stackoverflow.com/users/8794462/juamber?tab=profile",icon:"fa-brands fa-stack-overflow"}]}ngAfterViewInit(){this.store.select(y.$.getOne).pipe((0,T.h)(e=>!!e)).subscribe(e=>{this.translateSrv.use(e.acronym)})}ngOnInit(){this.skills$.subscribe(e=>{e.length||this.store.dispatch(z.D.loadAll({payload:null}))}),this.skillTypes$.subscribe(e=>{e.length||this.store.dispatch(F.J.loadAll({payload:null}))})}getSkills(e){return this.skills$.pipe((0,O.U)(i=>i.filter(l=>l.skillType.id===e.id).sort((l,g)=>g.percentage-l.percentage)))}get ActionStatus(){return v.M4}}return t.\u0275fac=function(){let o;return function(i){return(o||(o=n.n5z(t)))(i||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],features:[n.qOj],decls:8,vars:3,consts:[[4,"appLet"],[1,"home"],[1,"container-info",2,"margin-bottom","60px"],[1,"container-child"],[1,"item","vertical"],[1,"vertical-item"],[1,"title"],[3,"socialNetworks"],[1,"item"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","my-container","style","margin-bottom: 60px",4,"ngFor","ngForOf"],[1,"my-container",2,"margin-bottom","60px"],[1,"container-info"],[3,"entities"],[1,"title","pb-5"],["width","50%","height","1.25em"],[3,"entities","loading"]],template:function(e,i){1&e&&(n.YNc(0,Pn,28,19,"ng-container",0),n.ALo(1,"async"),n._UZ(2,"br")(3,"br")(4,"br")(5,"br")(6,"br")(7,"br")),2&e&&n.Q6J("appLet",n.lcZ(1,1,i.language$))},dependencies:[c.sg,c.RF,c.n9,H,d.O,b.e,Q.l,q,_n,fn,c.Ov,x.X$],styles:[".container-info[_ngcontent-%COMP%]{width:100%}.container-info[_ngcontent-%COMP%]   .container-child[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10em}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:50%}.container-info[_ngcontent-%COMP%]   .item.last[_ngcontent-%COMP%]{float:none}.container-info[_ngcontent-%COMP%]   .vertical-item[_ngcontent-%COMP%]{margin-bottom:15%}.container-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%}.home[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;padding-bottom:15px}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--textColor);font-size:30px;font-weight:700}@media screen and (max-width: 800px){.container-info[_ngcontent-%COMP%]{width:100%!important}.container-info[_ngcontent-%COMP%]   .container-child[_ngcontent-%COMP%]{display:inline}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100%!important}.title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-right:0!important}}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:var(--accentColor);border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:black}"],data:{animation:[(0,r.X$)("enterAnimation",[(0,r.SB)("void",(0,r.oB)({transform:"scale(0.5)",opacity:0})),(0,r.SB)("*",(0,r.oB)({transform:"scale(1)",opacity:1})),(0,r.eR)(":enter",(0,r.jt)("500ms ease-out"))])]},changeDetection:0}),t})()}];let An=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[k.Bz.forChild(wn),k.Bz]}),t})(),Tn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.ez,An,B,u.JF,m.H,h.l,_.K,S.y,a.h,d.m,$.o,U.J,p.uH]}),t})()},7489:(w,f,s)=>{s.d(f,{O:()=>p,m:()=>d});var c=s(4650),u=s(6895);let p=(()=>{class a{constructor(){this.shape="rectangle",this.animation="wave",this.borderRadius=null,this.size=null,this.width="100%",this.height="1rem"}containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}containerStyle(){return this.size?{...this.style,width:this.size,height:this.size,borderRadius:this.borderRadius}:{...this.style,width:this.width,height:this.height,borderRadius:this.borderRadius}}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(m,h){1&m&&c._UZ(0,"div",0),2&m&&(c.Tol(h.styleClass),c.Q6J("ngClass",h.containerClass())("ngStyle",h.containerStyle()))},dependencies:[u.mk,u.PC],styles:['.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],encapsulation:2,changeDetection:0}),a})(),d=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[u.ez]}),a})()}}]);