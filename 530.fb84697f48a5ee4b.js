"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[530],{4024:(w,f,i)=>{i.d(f,{e:()=>C});var r=i(4650);let C=(()=>{class a{constructor(g,h){this._context={appLet:null},g.createEmbeddedView(h,this._context)}set appLet(g){this._context.appLet=g}}return a.\u0275fac=function(g){return new(g||a)(r.Y36(r.s_b),r.Y36(r.Rgc))},a.\u0275dir=r.lG2({type:a,selectors:[["","appLet",""]],inputs:{appLet:"appLet"}}),a})()},9530:(w,f,i)=>{i.r(f),i.d(f,{HomeModule:()=>hn});var r=i(6895),C=i(529),a=i(7489),x=i(7611),g=i(9997),h=i(6068),k=i(31),$=i(4585),P=i(9605),n=i(4650);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,P.y]}),t})();var y=i(5213),p=i(2997),Z=i(9300),O=i(4004),F=i(8898),T=i(5776),U=i(5862),b=i(1674),u=i(4121),M=i(5924),_=i(3416);function J(t,o){if(1&t&&(n.TgZ(0,"li")(1,"a",2)(2,"div"),n._UZ(3,"i"),n.qZA()()()),2&t){const e=o.$implicit;n.xp6(1),n.Q6J("href",e.url,n.LSH),n.xp6(2),n.Tol(e.icon+" fa-2x")}}let Q=(()=>{class t{constructor(){this.rrss=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-rrss"]],inputs:{rrss:"rrss"},decls:6,vars:4,consts:[[1,"rrss"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"p"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ul"),n.YNc(5,J,4,3,"li",1),n.qZA()()),2&e&&(n.xp6(2),n.hij(" ",n.lcZ(3,2,"home.rrss")," "),n.xp6(3),n.Q6J("ngForOf",s.rrss))},dependencies:[r.sg,_.X$],styles:[".rrss[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter;margin-bottom:30px}.rrss[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:start;gap:2em;list-style:none}.rrss[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.rrss[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}}"]}),t})();var v=i(4024);function z(t,o){if(1&t&&(n.TgZ(0,"li",4)(1,"span",5),n._uU(2),n.qZA(),n.TgZ(3,"span",6)(4,"div",7),n._UZ(5,"div",8),n.qZA()()()),2&t){const e=o.$implicit;n.xp6(2),n.hij(" ",e.name," "),n.xp6(3),n.Udp("width",e.percentage+"%")}}function I(t,o){if(1&t&&(n.TgZ(0,"ul"),n.YNc(1,z,6,3,"li",3),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",e.entities)}}function N(t,o){1&t&&(n.TgZ(0,"li",4)(1,"span",9),n._UZ(2,"p-skeleton",10),n.qZA()())}const R=function(){return[0,0,0,0,0,0]};function H(t,o){1&t&&(n.TgZ(0,"ul"),n.YNc(1,N,3,0,"li",3),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,R)))}function E(t,o){if(1&t&&(n.TgZ(0,"div",1),n.YNc(1,I,2,1,"ul",2),n.YNc(2,H,2,2,"ul",2),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",!e.loading),n.xp6(1),n.Q6J("ngIf",e.loading)}}let q=(()=>{class t{constructor(){this.store=(0,n.f3M)(p.yh),this.entities=[],this.loading=!1,this.language$=this.store.select(u.$.getOne)}ngOnInit(){}get getTranslation(){return M.V.getTranslation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-tools"]],inputs:{entities:"entities",loading:"loading"},decls:2,vars:3,consts:[["class","tools",4,"appLet"],[1,"tools"],[4,"ngIf"],["class","tool",4,"ngFor","ngForOf"],[1,"tool"],[1,"name"],[1,"ability"],[1,"progress-border"],[1,"progress-filled"],[1,"name","pb-1","pt-1"],["width","100%","height","1.5em"]],template:function(e,s){1&e&&(n.YNc(0,E,3,2,"div",0),n.ALo(1,"async")),2&e&&n.Q6J("appLet",n.lcZ(1,1,s.language$))},dependencies:[r.sg,r.O5,a.O,v.e,r.Ov],styles:[".tools[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]{display:grid;grid-column-gap:10px;grid-template-columns:repeat(1,100%)}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;padding-bottom:2.5px;color:#000}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]{width:90%}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-border[_ngcontent-%COMP%]{height:15px;border:0;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   .progress-filled[_ngcontent-%COMP%]{height:15px;border:0;border-radius:5px;background-color:#4a9e98}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{width:100%;height:15px;border:0;border-radius:5px}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-bar{width:100%;height:15px;border:1px solid none;border-radius:5px;background-color:#cecfd3}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-webkit-progress-value{width:100%;height:15px;border-radius:5px;background-color:#4a9e98}.tools[_ngcontent-%COMP%]   .tool[_ngcontent-%COMP%]   .ability[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]::-moz-progress-bar{width:100%;height:15px;border:0;border-radius:5px;background-color:#cecfd3}@media screen and (max-width: 800px){ul[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)!important}}"]}),t})();var D=i(3369),A=i(2161);function V(t,o){1&t&&n._UZ(0,"i",11)}function B(t,o){1&t&&n._UZ(0,"i",12)}function j(t,o){if(1&t&&(n.TgZ(0,"li",13)(1,"div",14)(2,"span"),n._uU(3),n.qZA()(),n.TgZ(4,"div",15)(5,"span"),n._uU(6),n.ALo(7,"date"),n.ALo(8,"date"),n.qZA()()()),2&t){const e=o.$implicit,s=n.oxw(3).appLet,c=n.oxw();n.xp6(3),n.Oqu(c.getTranslation(s.acronym,e.nameTranslations)),n.xp6(3),n.Oqu(n.xi3(7,2,e.dateFrom,"MM-yyyy")+" - "+(e.dateTo?n.xi3(8,5,e.dateTo,"MM-yyyy"):"Actualidad"))}}function X(t,o){if(1&t&&(n.TgZ(0,"li")(1,"div",4)(2,"div",5),n.YNc(3,V,1,0,"i",6),n.YNc(4,B,1,0,"i",7),n.qZA(),n.TgZ(5,"div",8)(6,"h3"),n._uU(7),n.qZA()()(),n.TgZ(8,"div",9)(9,"ul"),n.YNc(10,j,9,8,"li",10),n.qZA()()()),2&t){const e=o.$implicit;n.xp6(3),n.Q6J("ngIf","Odec"!==e.company.name),n.xp6(1),n.Q6J("ngIf","Odec"===e.company.name),n.xp6(3),n.Oqu(e.company.name),n.xp6(3),n.Q6J("ngForOf",e.positions)}}function G(t,o){if(1&t&&(n.TgZ(0,"ul"),n.YNc(1,X,11,4,"li",3),n.ALo(2,"async"),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,e.positionsGrouped$))}}function K(t,o){1&t&&(n.TgZ(0,"li",13)(1,"div",17),n._UZ(2,"p-skeleton",18),n.qZA(),n.TgZ(3,"div",15),n._UZ(4,"p-skeleton",19),n.qZA()())}const W=function(){return[0,0]};function nn(t,o){1&t&&(n.TgZ(0,"li")(1,"div",4),n._UZ(2,"p-skeleton",16),n.qZA(),n.TgZ(3,"div",9)(4,"ul"),n.YNc(5,K,5,0,"li",10),n.qZA()()()),2&t&&(n.xp6(5),n.Q6J("ngForOf",n.DdM(1,W)))}const tn=function(){return[0,0,0,0]};function en(t,o){1&t&&(n.TgZ(0,"ul"),n.YNc(1,nn,6,2,"li",3),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,tn)))}function on(t,o){if(1&t&&(n.TgZ(0,"div",1),n.YNc(1,G,3,3,"ul",2),n.ALo(2,"async"),n.YNc(3,en,2,2,"ul",2),n.ALo(4,"async"),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",!n.lcZ(2,2,e.loadingPositions$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,4,e.loadingPositions$))}}let sn=(()=>{class t{constructor(e){this.store=e,this.language$=this.store.select(u.$.getOne),this.loadingPositions$=this.store.select(A.Y.getLoading),this.positionsGrouped$=this.store.select(A.Y.getAll).pipe((0,O.U)(s=>s.filter(c=>c.importance>1)),(0,O.U)(s=>{let c=[];return[...s].sort((l,L)=>new Date(L.dateFrom).getTime()-new Date(l.dateFrom).getTime()).forEach(l=>{c.find(m=>m.company.id===l.company.id)?c=c.map(m=>m.company.id===l.company.id?{...m,positions:[...m.positions,l]}:m):c.push({company:l.company,positions:[l]})}),c}))}ngOnInit(){this.positionsGrouped$.subscribe(e=>{e.length||this.store.dispatch(D.y.loadAll({payload:null}))})}get getTranslation(){return M.V.getTranslation}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.yh))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-experience"]],decls:2,vars:3,consts:[["class","experience",4,"appLet"],[1,"experience"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"header"],[1,"icon"],["class","fa-solid fa-graduation-cap",4,"ngIf"],["class","fa-solid fa-briefcase",4,"ngIf"],[1,"organization"],[1,"items"],["class","item",4,"ngFor","ngForOf"],[1,"fa-solid","fa-graduation-cap"],[1,"fa-solid","fa-briefcase"],[1,"item"],[1,"position"],[1,"date"],["width","100%","height","10px"],[1,"position","pb-1"],["width","80%"],["width","60%"]],template:function(e,s){1&e&&(n.YNc(0,on,5,6,"div",0),n.ALo(1,"async")),2&e&&n.Q6J("appLet",n.lcZ(1,1,s.language$))},dependencies:[r.sg,r.O5,a.O,v.e,r.Ov,r.uU],styles:[".experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:flex-start}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding:3.5px}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;margin-left:7.5px;font-size:20px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{list-style:disc;font-size:25px;margin-left:50px;margin-bottom:5px}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:lighter;font-style:italic}@media screen and (max-width: 800px){h3[_ngcontent-%COMP%]{font-size:16px!important}.experience[_ngcontent-%COMP%]{margin-bottom:25px!important}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px!important}}"]}),t})();var S=i(5861),cn=i(629),rn=i(5016);let an=(()=>{class t{constructor(){this.supabase=cn._}getCV(e){var s=this;return(0,S.Z)(function*(){let{data:c,error:d}=yield s.supabase.from("curriculums").select('*, "language": languages ( * )').eq("language_id",e.id).order("date",{ascending:!1}).limit(1).single();return d||(0,rn.iP)(c)})()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ln=(()=>{class t{constructor(e,s,c){this.cvService=e,this.translateSrv=s,this.publicLanguageStore=c}ngOnInit(){}ngAfterViewInit(){this.publicLanguageStore.select(u.$.getOne).pipe((0,Z.h)(e=>!!e)).subscribe(e=>{e&&(this.language=e),e&&this.translateSrv.use(e.acronym)})}downloadCV(e){var s=this;return(0,S.Z)(function*(){const c=yield s.cvService.getCV(e);window.open(c.pdf,"_blank")})()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(an),n.Y36(_.sK),n.Y36(p.yh))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-cv"]],decls:8,vars:6,consts:[[1,"cv"],[1,"button",3,"click"],[1,"ml-2","fa-solid","fa-download"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"p"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"button",1),n.NdJ("click",function(){return s.downloadCV(s.language)}),n._uU(5),n.ALo(6,"translate"),n._UZ(7,"i",2),n.qZA()()),2&e&&(n.xp6(2),n.Oqu(n.lcZ(3,2,"cv.info")),n.xp6(3),n.hij(" ",n.lcZ(6,4,"cv.button")," "))},dependencies:[_.X$],styles:[".cv[_ngcontent-%COMP%]{padding-right:5%}.cv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:lighter}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:#4a9e98;border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:black}"]}),t})();function pn(t,o){if(1&t&&(n.TgZ(0,"div",11)(1,"div",12)(2,"div",6)(3,"h3"),n._uU(4),n.qZA()(),n._UZ(5,"app-tools",13),n.ALo(6,"async"),n.qZA()()),2&t){const e=o.$implicit,s=n.oxw(2).appLet,c=n.oxw();n.xp6(4),n.Oqu(c.getTranslation(s.acronym,e.nameTranslations)),n.xp6(1),n.Q6J("entities",n.lcZ(6,2,c.getSkills(e)))}}function gn(t,o){if(1&t&&(n.ynx(0),n.YNc(1,pn,7,4,"div",10),n.ALo(2,"async"),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,e.skillTypes$))}}const dn=function(){return[]};function mn(t,o){1&t&&(n.TgZ(0,"div",11)(1,"div",12)(2,"div",14),n._UZ(3,"p-skeleton",15),n.qZA(),n._UZ(4,"app-tools",16),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("entities",n.DdM(2,dn))("loading",!0))}const un=function(){return[0,0,0]};function _n(t,o){1&t&&(n.ynx(0),n.YNc(1,mn,5,3,"div",10),n.BQk()),2&t&&(n.xp6(1),n.Q6J("ngForOf",n.DdM(1,un)))}function fn(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),n._uU(8),n.ALo(9,"translate"),n.qZA()(),n._UZ(10,"app-cv"),n.qZA(),n.TgZ(11,"div",5)(12,"div",6)(13,"h3"),n._uU(14),n.ALo(15,"translate"),n.qZA()(),n._UZ(16,"app-rrss",7),n.qZA()(),n.TgZ(17,"div",8)(18,"div",6)(19,"h3"),n._uU(20),n.ALo(21,"translate"),n.qZA()(),n._UZ(22,"app-experience"),n.qZA()()()(),n.YNc(23,gn,3,3,"ng-container",9),n.ALo(24,"async"),n.YNc(25,_n,2,2,"ng-container",9),n.ALo(26,"async"),n.BQk()),2&t){const e=n.oxw();n.xp6(8),n.Oqu(n.lcZ(9,6,"home.cv")),n.xp6(6),n.Oqu(n.lcZ(15,8,"home.contacto")),n.xp6(2),n.Q6J("rrss",e.rrss),n.xp6(4),n.Oqu(n.lcZ(21,10,"home.trayectoria")),n.xp6(3),n.Q6J("ngIf",!1===n.lcZ(24,12,e.loadingSkillTypes$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(26,14,e.loadingSkillTypes$))}}const Cn=[{path:"",component:(()=>{class t{constructor(e,s,c,d,l){this.positionStore=e,this.skillStore=s,this.skillTypeStore=c,this.publicLanguageStore=d,this.translateSrv=l,this.store=(0,n.f3M)(p.yh),this.language$=this.store.select(u.$.getOne),this.skills$=this.skillStore.select(b.x.getAll),this.loadingSkills$=this.skillStore.select(b.x.getLoading),this.skillTypes$=this.skillTypeStore.select(T.b.getAll),this.loadingSkillTypes$=this.skillTypeStore.select(T.b.getLoading),this.rrss=[{name:"GitHub",url:"https://github.com/JuamBer",icon:"fa-brands fa-github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/juamber/",icon:"fa-brands fa-linkedin"},{name:"StackOverflow",url:"https://stackoverflow.com/users/8794462/juamber?tab=profile",icon:"fa-brands fa-stack-overflow"}]}ngAfterViewInit(){this.publicLanguageStore.select(u.$.getOne).pipe((0,Z.h)(e=>!!e)).subscribe(e=>{this.translateSrv.use(e.acronym)})}ngOnInit(){this.skills$.subscribe(e=>{e.length||this.skillStore.dispatch(U.D.loadAll({payload:null}))}),this.skillTypes$.subscribe(e=>{e.length||this.skillTypeStore.dispatch(F.J.loadAll({payload:null}))})}getSkills(e){return this.skills$.pipe((0,O.U)(s=>s.filter(c=>c.skillType.id===e.id).sort((c,d)=>d.percentage-c.percentage)))}get getTranslation(){return M.V.getTranslation}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.yh),n.Y36(p.yh),n.Y36(p.yh),n.Y36(p.yh),n.Y36(_.sK))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:8,vars:3,consts:[[4,"appLet"],[1,"home"],[1,"container-info",2,"margin-bottom","60px"],[1,"test"],[1,"item","vertical"],[1,"vertical-item"],[1,"title"],[3,"rrss"],[1,"item"],[4,"ngIf"],["class","my-container","style","margin-bottom: 60px",4,"ngFor","ngForOf"],[1,"my-container",2,"margin-bottom","60px"],[1,"container-info"],[3,"entities"],[1,"title","pb-5"],["width","50%","height","1.25em"],[3,"entities","loading"]],template:function(e,s){1&e&&(n.YNc(0,fn,27,16,"ng-container",0),n.ALo(1,"async"),n._UZ(2,"br")(3,"br")(4,"br")(5,"br")(6,"br")(7,"br")),2&e&&n.Q6J("appLet",n.lcZ(1,1,s.language$))},dependencies:[r.sg,r.O5,Q,a.O,v.e,q,sn,ln,r.Ov,_.X$],styles:[".container-info[_ngcontent-%COMP%]{width:100%}.container-info[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]{display:flex;justify-content:center}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-right:5%;width:45%}.container-info[_ngcontent-%COMP%]   .item.last[_ngcontent-%COMP%]{float:none}.container-info[_ngcontent-%COMP%]   .vertical-item[_ngcontent-%COMP%]{margin-bottom:15%}.container-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%}.home[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;padding-bottom:15px}.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-size:30px;font-weight:700}@media screen and (max-width: 800px){.container-info[_ngcontent-%COMP%]{width:100%!important}.container-info[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]{display:inline}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100%!important}.title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}.container-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-right:0!important}}.button[_ngcontent-%COMP%]{border:none;font-size:16px;color:#fff;padding:8px 16px;background-color:#4a9e98;border-radius:6px;cursor:pointer;transition:all .3s ease}.button[_ngcontent-%COMP%]:hover{background:black}"]}),t})()}];let xn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[y.Bz.forChild(Cn),y.Bz]}),t})(),hn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,xn,Y,C.JF,h.H,k.l,g.K,P.y,x.h,a.m,$.o]}),t})()}}]);