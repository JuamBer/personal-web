"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[886],{4024:(N,C,c)=>{c.d(C,{e:()=>P});var s=c(4650);let P=(()=>{class p{constructor(g,v){this._context={appLet:null},g.createEmbeddedView(v,this._context)}set appLet(g){this._context.appLet=g}}return p.\u0275fac=function(g){return new(g||p)(s.Y36(s.s_b),s.Y36(s.Rgc))},p.\u0275dir=s.lG2({type:p,selectors:[["","appLet",""]],inputs:{appLet:"appLet"}}),p})()},886:(N,C,c)=>{c.r(C),c.d(C,{HomeModule:()=>vt});var s=c(6895),P=c(529),p=c(7489),y=c(7611),g=c(9997),v=c(6068),Q=c(31),L=c(4169),$=c(4585),Z=c(9605),t=c(4650);let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,Z.y]}),n})();var T=c(3151),a=c(7340),h=c(2997),m=c(3416),x=c(9300),_=c(4004),U=c(8898),b=c(5776),F=c(5862),S=c(1674),w=c(8043),O=c(7379),u=c(5019);function B(n,o){if(1&n&&(t.TgZ(0,"li")(1,"a",2)(2,"div"),t._UZ(3,"i"),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("href",e.url,t.LSH),t.xp6(2),t.Tol(e.icon+" fa-2x")}}let Y=(()=>{class n{constructor(){this.socialNetworks=[]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-social-networks"]],inputs:{socialNetworks:"socialNetworks"},decls:6,vars:4,consts:[[1,"social-networks"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul"),t.YNc(5,B,4,3,"li",1),t.qZA()()),2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"home.socialNetworks")," "),t.xp6(3),t.Q6J("ngForOf",i.socialNetworks))},dependencies:[s.sg,m.X$],styles:[".social-networks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter;margin-bottom:30px}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:start;gap:2em;list-style:none}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.social-networks[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}}"],changeDetection:0}),n})();var A=c(4024),k=c(547);const H=["tools"];function z(n,o){if(1&n&&(t.TgZ(0,"li",5)(1,"span",6),t._uU(2),t.qZA(),t.TgZ(3,"span",7)(4,"div",8)(5,"div",9),t._UZ(6,"div",10),t.qZA()()()()),2&n){const e=o.$implicit,i=t.oxw(3);t.xp6(2),t.hij(" ",e.name," "),t.xp6(3),t.Udp("width",e.percentage+"%"),t.xp6(1),t.Q6J("@toolsEnterAnimation",i.toolsElementState)}}function I(n,o){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,z,7,4,"li",4),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.entities)}}function D(n,o){1&n&&(t.TgZ(0,"li",5)(1,"span",11),t._UZ(2,"p-skeleton",12),t.qZA()())}const V=function(){return[0,0,0,0,0,0]};function j(n,o){1&n&&(t.TgZ(0,"ul"),t.YNc(1,D,3,0,"li",4),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,V)))}function R(n,o){if(1&n&&(t.TgZ(0,"div",1,2),t.YNc(2,I,2,1,"ul",3),t.YNc(3,j,2,2,"ul",3),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",!e.loading),t.xp6(1),t.Q6J("ngIf",e.loading)}}let X=(()=>{class n extends w.${constructor(){super(...arguments),this.store=(0,t.f3M)(h.yh),this.ref=(0,t.f3M)(t.sBO),this.toolsElementState="notInViewport",this.entities=[],this.loading=!1,this.language$=this.store.select(u.$.getOne)}ngAfterViewInit(){const e=new IntersectionObserver(i=>{i.forEach(r=>{this.toolsElementState=r.isIntersecting?"inViewport":"notInViewport","inViewport"===this.toolsElementState&&(this.ref.detectChanges(),e.disconnect())})});e.observe(this.toolsElement.nativeElement)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tools"]],viewQuery:function(e,i){if(1&e&&t.Gf(H,5),2&e){let r;t.iGM(r=t.CRH())&&(i.toolsElement=r.first)}},inputs:{entities:"entities",loading:"loading"},features:[t.qOj],decls:2,vars:3,consts:[["class","tools",4,"appLet"],[1,"tools"],["tools",""],[4,"ngIf"],["class","tool",4,"ngFor","ngForOf"],[1,"tool"],[1,"name"],[1,"ability"],[1,"progress-border"],[1,"progress-filled"],[1,"progress-animation"],[1,"name","pb-1","pt-1"],["width","100%","height","1.5em"]],template:function(e,i){1&e&&(t.YNc(0,R,4,2,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.language$))},dependencies:[s.sg,s.O5,p.O,A.e,s.Ov],styles:[".tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]{display:grid;grid-column-gap:10px;grid-template-columns:repeat(1,100%)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;padding-bottom:2.5px;color:#000}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]{width:90%}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-border[_ngcontent-%COMP%]{height:15px;border:0;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-filled[_ngcontent-%COMP%]{height:15px;border:0;display:flex}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-filled[_ngcontent-%COMP%]   .progress-animation[_ngcontent-%COMP%]{width:100%;border-radius:5px;background-color:#4a9e98}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{width:100%;height:15px;border:0;border-radius:5px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{width:100%;height:15px;border:1px solid none;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{width:100%;height:15px;border-radius:5px;background-color:#4a9e98}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{width:100%;height:15px;border:0;border-radius:5px;background-color:#cecfd3}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)!important}}@keyframes _ngcontent-%COMP%_fillProgress{0%{width:0%}to{width:100%}}"],data:{animation:[(0,a.X$)("toolsEnterAnimation",[(0,a.SB)("inViewport",(0,a.oB)({width:"100%"})),(0,a.SB)("notInViewport",(0,a.oB)({width:"0%"})),(0,a.eR)("notInViewport <=> inViewport",(0,a.jt)("750ms ease-out"))])]},changeDetection:0}),n})();var G=c(7579),q=c(2722),M=(()=>{return(n=M||(M={})).COMPANY="COMPANY",n.SCHOOL="SCHOOL",M;var n})(),K=c(3369),E=c(2161);const W=["position"];function tt(n,o){1&n&&t._UZ(0,"i",14)}function nt(n,o){1&n&&t._UZ(0,"i",15)}function et(n,o){if(1&n&&(t.TgZ(0,"li",16)(1,"div",17)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"div",18)(5,"span"),t._uU(6),t.ALo(7,"date"),t.ALo(8,"date"),t.ALo(9,"translate"),t.qZA()()()),2&n){const e=o.$implicit,i=t.oxw(3).appLet,r=t.oxw();t.xp6(3),t.Oqu(r.getTranslation(i.acronym,e.nameTranslations)),t.xp6(3),t.Oqu(t.xi3(7,2,e.dateFrom,"MM-yyyy")+" - "+(e.dateTo?t.xi3(8,5,e.dateTo,"MM-yyyy"):t.lcZ(9,8,"general.present")))}}function ot(n,o){if(1&n&&(t.TgZ(0,"li",5,6)(2,"div",7)(3,"div",8),t.YNc(4,tt,1,0,"i",9),t.YNc(5,nt,1,0,"i",10),t.qZA(),t.TgZ(6,"div",11)(7,"h3"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",12)(10,"ul"),t.YNc(11,et,10,10,"li",13),t.qZA()()()),2&n){const e=o.$implicit,i=t.oxw(3);t.Q6J("id",e.company.id)("@positionEnterAnimation",i.getPositionEnterAnimationState(e.company.id)),t.xp6(3),t.Q6J("ngSwitch",e.company.type),t.xp6(1),t.Q6J("ngSwitchCase",i.CompanyType.SCHOOL),t.xp6(1),t.Q6J("ngSwitchCase",i.CompanyType.COMPANY),t.xp6(3),t.Oqu(e.company.name),t.xp6(3),t.Q6J("ngForOf",e.positions)}}function it(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",3)(2,"ul"),t.YNc(3,ot,12,7,"li",4),t.ALo(4,"async"),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,1,e.positionsGrouped$))}}function ct(n,o){1&n&&(t.TgZ(0,"li",16)(1,"div",21),t._UZ(2,"p-skeleton",22),t.qZA(),t.TgZ(3,"div",18),t._UZ(4,"p-skeleton",23),t.qZA()())}const st=function(){return[0,0]};function at(n,o){1&n&&(t.TgZ(0,"li")(1,"div",7),t._UZ(2,"p-skeleton",20),t.qZA(),t.TgZ(3,"div",12)(4,"ul"),t.YNc(5,ct,5,0,"li",13),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",t.DdM(1,st)))}const rt=function(){return[0,0,0,0]};function lt(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",3)(2,"ul"),t.YNc(3,at,6,2,"li",19),t.qZA()(),t.BQk()),2&n&&(t.xp6(3),t.Q6J("ngForOf",t.DdM(1,rt)))}function pt(n,o){1&n&&(t.ynx(0),t._UZ(1,"app-generic-error"),t.BQk())}function gt(n,o){if(1&n&&(t.ynx(0)(1,1),t.ALo(2,"async"),t.YNc(3,it,5,3,"ng-container",2),t.YNc(4,lt,4,2,"ng-container",2),t.YNc(5,pt,2,0,"ng-container",2),t.BQk()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",t.lcZ(2,4,e.positionsActionStatus$)),t.xp6(2),t.Q6J("ngSwitchCase",e.ActionStatus.SUCCESS),t.xp6(1),t.Q6J("ngSwitchCase",e.ActionStatus.PENDING),t.xp6(1),t.Q6J("ngSwitchCase",e.ActionStatus.ERROR)}}let mt=(()=>{class n extends w.${constructor(){super(...arguments),this.store=(0,t.f3M)(h.yh),this.ref=(0,t.f3M)(t.sBO),this.positionElementStates=new Map,this.unsubscribe$=new G.x,this.language$=this.store.select(u.$.getOne),this.positionsActionStatus$=this.store.select(E.Y.getAction).pipe((0,x.h)(e=>!!e&&e.type===O.Us.LOAD_MANY),(0,_.U)(e=>e.status)),this.positionsGrouped$=this.store.select(E.Y.getAll).pipe((0,_.U)(e=>e.filter(i=>i.importance>1)),(0,_.U)(e=>{let i=[];return[...e].sort((l,f)=>new Date(f.dateFrom).getTime()-new Date(l.dateFrom).getTime()).forEach(l=>{i.find(d=>d.company.id===l.company.id)?i=i.map(d=>d.company.id===l.company.id?{...d,positions:[...d.positions,l]}:d):i.push({company:l.company,positions:[l]})}),i}))}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}ngAfterViewChecked(){this.positionElements.forEach(e=>{const i=new IntersectionObserver(r=>{r.forEach(l=>{const f=l.isIntersecting?"inViewport":"notInViewport";this.positionElementStates.set(e.nativeElement.id,f),"inViewport"===f&&(this.ref.detectChanges(),i.disconnect())})});i.observe(e.nativeElement)})}ngOnInit(){this.positionsGrouped$.pipe((0,q.R)(this.unsubscribe$)).subscribe(e=>{e.length||this.store.dispatch(K.y.loadAll({payload:null}))})}getPositionEnterAnimationState(e){return this.positionElementStates.get(e)||"notInViewport"}get CompanyType(){return M}get ActionStatus(){return O.M4}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-experience"]],viewQuery:function(e,i){if(1&e&&t.Gf(W,5),2&e){let r;t.iGM(r=t.CRH())&&(i.positionElements=r)}},features:[t.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"experience"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["position",""],[1,"header"],[1,"icon",3,"ngSwitch"],["class","fa-solid fa-graduation-cap",4,"ngSwitchCase"],["class","fa-solid fa-briefcase",4,"ngSwitchCase"],[1,"organization"],[1,"items"],["class","item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-graduation-cap"],[1,"fa-solid","fa-briefcase"],[1,"item"],[1,"position"],[1,"date"],[4,"ngFor","ngForOf"],["width","100%","height","10px"],[1,"position","pb-1"],["width","80%"],["width","60%"]],template:function(e,i){1&e&&(t.YNc(0,gt,6,6,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.language$))},dependencies:[s.sg,s.RF,s.n9,p.O,A.e,k.l,s.Ov,s.uU,m.X$],styles:[".experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:flex-start}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding:3.5px}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-left:7.5px;font-size:20px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{list-style:disc;font-size:25px;margin-left:50px;margin-bottom:5px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:lighter;font-style:italic}@media screen and (max-width: 800px){h3[_ngcontent-%COMP%]{font-size:16px!important}.experience[_ngcontent-%COMP%]{margin-bottom:25px!important}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px!important}}"],data:{animation:[(0,a.X$)("positionEnterAnimation",[(0,a.SB)("inViewport",(0,a.oB)({transform:"translateX(0)"})),(0,a.SB)("notInViewport",(0,a.oB)({transform:"translateX(+20%)"})),(0,a.eR)("notInViewport => inViewport",(0,a.jt)("0.15s"))])]},changeDetection:0}),n})(),dt=(()=>{class n{constructor(){this.translateSrv=(0,t.f3M)(m.sK),this.store=(0,t.f3M)(h.yh)}ngAfterViewInit(){this.store.select(u.$.getOne).pipe((0,x.h)(e=>!!e)).subscribe(e=>{e&&(this.language=e),e&&this.translateSrv.use(e.acronym)})}downloadCV(e){window.open("https://drive.google.com/file/d/186ddhrvy_7H9-XsZIl7ZCFes8mkXLSQO/view?usp=drive_link","_blank")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cv"]],decls:8,vars:6,consts:[[1,"cv"],[1,"button",3,"click"],[1,"ml-2","fa-solid","fa-download"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"button",1),t.NdJ("click",function(){return i.downloadCV(i.language)}),t._uU(5),t.ALo(6,"translate"),t._UZ(7,"i",2),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"cv.info")),t.xp6(3),t.hij(" ",t.lcZ(6,4,"cv.button")," "))},dependencies:[m.X$],styles:[".cv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:#4a9e98;border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:black}"],changeDetection:0}),n})();function _t(n,o){if(1&n&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",6)(3,"h3"),t._uU(4),t.qZA()(),t._UZ(5,"app-tools",14),t.ALo(6,"async"),t.qZA()()),2&n){const e=o.$implicit,i=t.oxw(2).appLet,r=t.oxw();t.xp6(1),t.Q6J("@enterAnimation",void 0),t.xp6(3),t.Oqu(r.getTranslation(i.acronym,e.nameTranslations)),t.xp6(1),t.Q6J("entities",t.lcZ(6,3,r.getSkills(e)))}}function ut(n,o){if(1&n&&(t.ynx(0),t.YNc(1,_t,7,5,"div",11),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.skillTypes$))}}const ft=function(){return[]};function Ct(n,o){1&n&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",15),t._UZ(3,"p-skeleton",16),t.qZA(),t._UZ(4,"app-tools",17),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("entities",t.DdM(2,ft))("loading",!0))}const ht=function(){return[0,0,0]};function xt(n,o){1&n&&(t.ynx(0),t.YNc(1,Ct,5,3,"div",11),t.BQk()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,ht)))}function Ot(n,o){1&n&&(t.ynx(0),t._UZ(1,"app-generic-error"),t.BQk())}function Mt(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t._UZ(10,"app-cv"),t.qZA(),t.TgZ(11,"div",5)(12,"div",6)(13,"h3"),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t._UZ(16,"app-social-networks",7),t.qZA()(),t.TgZ(17,"div",8)(18,"div",6)(19,"h3"),t._uU(20),t.ALo(21,"translate"),t.qZA()(),t._UZ(22,"app-experience"),t.qZA()()()(),t.ynx(23,9),t.ALo(24,"async"),t.YNc(25,ut,3,3,"ng-container",10),t.YNc(26,xt,2,2,"ng-container",10),t.YNc(27,Ot,2,0,"ng-container",10),t.BQk()()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("@enterAnimation",void 0),t.xp6(3),t.Oqu(t.lcZ(9,11,"home.cv")),t.xp6(3),t.Q6J("@enterAnimation",void 0),t.xp6(3),t.Oqu(t.lcZ(15,13,"home.contact")),t.xp6(2),t.Q6J("socialNetworks",e.socialNetworks),t.xp6(2),t.Q6J("@enterAnimation",void 0),t.xp6(2),t.Oqu(t.lcZ(21,15,"home.trajectory")),t.xp6(3),t.Q6J("ngSwitch",t.lcZ(24,17,e.skillTypesActionStatus$)),t.xp6(2),t.Q6J("ngSwitchCase",e.ActionStatus.SUCCESS),t.xp6(1),t.Q6J("ngSwitchCase",e.ActionStatus.PENDING),t.xp6(1),t.Q6J("ngSwitchCase",e.ActionStatus.ERROR)}}const Pt=[{path:"",component:(()=>{class n extends w.${constructor(){super(...arguments),this.store=(0,t.f3M)(h.yh),this.translateSrv=(0,t.f3M)(m.sK),this.language$=this.store.select(u.$.getOne),this.skills$=this.store.select(S.x.getAll),this.loadingSkills$=this.store.select(S.x.getLoading),this.skillTypes$=this.store.select(b.b.getAll),this.skillTypesActionStatus$=this.store.select(b.b.getAction).pipe((0,x.h)(e=>!!e&&e.type===O.Us.LOAD_MANY),(0,_.U)(e=>e.status)),this.socialNetworks=[{name:"GitHub",url:"https://github.com/JuamBer",icon:"fa-brands fa-github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/juamber/",icon:"fa-brands fa-linkedin"},{name:"StackOverflow",url:"https://stackoverflow.com/users/8794462/juamber?tab=profile",icon:"fa-brands fa-stack-overflow"}]}ngAfterViewInit(){this.store.select(u.$.getOne).pipe((0,x.h)(e=>!!e)).subscribe(e=>{this.translateSrv.use(e.acronym)})}ngOnInit(){this.skills$.subscribe(e=>{e.length||this.store.dispatch(F.D.loadAll({payload:null}))}),this.skillTypes$.subscribe(e=>{e.length||this.store.dispatch(U.J.loadAll({payload:null}))})}getSkills(e){return this.skills$.pipe((0,_.U)(i=>i.filter(r=>r.skillType.id===e.id).sort((r,l)=>l.percentage-r.percentage)))}get ActionStatus(){return O.M4}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],features:[t.qOj],decls:8,vars:3,consts:[[4,"appLet"],[1,"home"],[1,"container-info",2,"margin-bottom","60px"],[1,"container-child"],[1,"item","vertical"],[1,"vertical-item"],[1,"title"],[3,"socialNetworks"],[1,"item"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","my-container","style","margin-bottom: 60px",4,"ngFor","ngForOf"],[1,"my-container",2,"margin-bottom","60px"],[1,"container-info"],[3,"entities"],[1,"title","pb-5"],["width","50%","height","1.25em"],[3,"entities","loading"]],template:function(e,i){1&e&&(t.YNc(0,Mt,28,19,"ng-container",0),t.ALo(1,"async"),t._UZ(2,"br")(3,"br")(4,"br")(5,"br")(6,"br")(7,"br")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.language$))},dependencies:[s.sg,s.RF,s.n9,Y,p.O,A.e,k.l,X,mt,dt,s.Ov,m.X$],styles:[".container-info[_ngcontent-%COMP%]{width:100%}.container-info[_ngcontent-%COMP%]   .container-child[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10em}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:50%}.container-info[_ngcontent-%COMP%]   .item.last[_ngcontent-%COMP%]{float:none}.container-info[_ngcontent-%COMP%]   .vertical-item[_ngcontent-%COMP%]{margin-bottom:15%}.container-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%}.home[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;padding-bottom:15px}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-size:30px;font-weight:700}@media screen and (max-width: 800px){.container-info[_ngcontent-%COMP%]{width:100%!important}.container-info[_ngcontent-%COMP%]   .container-child[_ngcontent-%COMP%]{display:inline}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100%!important}.title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-right:0!important}}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:#4a9e98;border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:black}"],data:{animation:[(0,a.X$)("enterAnimation",[(0,a.SB)("void",(0,a.oB)({transform:"scale(0.5)",opacity:0})),(0,a.SB)("*",(0,a.oB)({transform:"scale(1)",opacity:1})),(0,a.eR)(":enter",(0,a.jt)("500ms ease-out"))])]},changeDetection:0}),n})()}];let yt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[T.Bz.forChild(Pt),T.Bz]}),n})(),vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,yt,J,P.JF,v.H,Q.l,g.K,Z.y,y.h,p.m,$.o,L.J]}),n})()}}]);