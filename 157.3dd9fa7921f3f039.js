"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[157],{4446:(C,g,o)=>{o.d(g,{D:()=>P});var t=o(5255),i=o(4650),m=o(6895),l=o(7489),c=o(3416);function p(_,M){if(1&_&&(i.TgZ(0,"span",7),i._uU(1),i.ALo(2,"date"),i.qZA()),2&_){const y=i.oxw(4);i.xp6(1),i.Oqu(i.xi3(2,1,y.entity.updatedAt,"long"))}}function u(_,M){1&_&&(i.TgZ(0,"span",7),i._uU(1,"N/A"),i.qZA())}function d(_,M){if(1&_&&(i.ynx(0),i.TgZ(1,"span",4)(2,"div",5)(3,"b",6),i._uU(4),i.ALo(5,"translate"),i.qZA(),i.TgZ(6,"span",7),i._uU(7),i.ALo(8,"date"),i.qZA()(),i.TgZ(9,"div",5)(10,"b",6),i._uU(11),i.ALo(12,"translate"),i.qZA(),i.YNc(13,p,3,4,"span",8),i.YNc(14,u,2,0,"span",8),i.qZA()(),i.BQk()),2&_){const y=i.oxw(3);i.xp6(4),i.Oqu(i.lcZ(5,5,"columns.createdAt")+": "),i.xp6(3),i.Oqu(i.xi3(8,7,y.entity.createdAt,"long")),i.xp6(4),i.Oqu(i.lcZ(12,10,"columns.updatedAt")+": "),i.xp6(2),i.Q6J("ngIf",y.entity.updatedAt),i.xp6(1),i.Q6J("ngIf",!y.entity.updatedAt)}}function T(_,M){if(1&_&&(i.TgZ(0,"section",3),i.YNc(1,d,15,12,"ng-container",0),i.qZA()),2&_){const y=i.oxw(2);i.xp6(1),i.Q6J("ngIf",y.entity)}}function x(_,M){1&_&&(i.TgZ(0,"div",9)(1,"div",10),i._UZ(2,"p-skeleton",11)(3,"p-skeleton",11),i.qZA()())}function b(_,M){if(1&_&&(i.ynx(0),i.YNc(1,T,2,1,"section",1),i.YNc(2,x,4,0,"ng-template",null,2,i.W1O),i.BQk()),2&_){const y=i.MAs(3),O=i.oxw();i.xp6(1),i.Q6J("ngIf",!O.loading)("ngIfElse",y)}}let P=(()=>{class _{constructor(){this.loading=!1}get ModalMode(){return t.g}}return _.\u0275fac=function(y){return new(y||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["app-entity-modal-audit"]],inputs:{loading:"loading",modalMode:"modalMode",entity:"entity"},decls:1,vars:1,consts:[[4,"ngIf"],["class","audit-fields flex justify-content-end mt-3",4,"ngIf","ngIfElse"],["loadingTemplate",""],[1,"audit-fields","flex","justify-content-end","mt-3"],[1,"info-container"],[1,"info"],[1,"title"],[1,"data"],["class","data",4,"ngIf"],[1,"w-full","mt-3","flex","justify-content-end"],[1,"flex","flex-column","gap-2"],["width","20em","height","1em"]],template:function(y,O){1&y&&i.YNc(0,b,4,2,"ng-container",0),2&y&&i.Q6J("ngIf",O.modalMode!==O.ModalMode.CREATE)},dependencies:[m.O5,l.O,m.uU,c.X$],styles:[".info[_ngcontent-%COMP%]{font-size:.9em;text-align:end}.info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5em}.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}.info[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{font-weight:lighter}"],changeDetection:0}),_})()},2437:(C,g,o)=>{o.d(g,{D:()=>x});var t=o(6895),i=o(4006),m=o(3416),l=o(5593),c=o(7489),p=o(4585),u=o(9605),d=o(6333),T=o(4650);let x=(()=>{class b{}return b.\u0275fac=function(_){return new(_||b)},b.\u0275mod=T.oAB({type:b}),b.\u0275inj=T.cJS({imports:[t.ez,u.y,l.hJ,i.UX,c.m,m.aw,d.D,p.o]}),b})()},7525:(C,g,o)=>{o.d(g,{Z:()=>D});var t=o(4650),i=o(7579),m=o(1135),l=o(5684),c=o(5698),p=o(2722),u=o(4004),d=o(5255),T=o(6895),x=o(5593),b=o(4006),P=o(3416);function _(h,L){if(1&h){const r=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(r);const A=t.oxw(2);return t.KtG(A.cancel.emit(!0))}),t.ALo(1,"translate"),t.qZA()}if(2&h){const r=t.oxw(2);t.Q6J("disabled",r.loading)("label",t.lcZ(1,2,"buttons.cancel"))}}function M(h,L){if(1&h&&(t._UZ(0,"button",10),t.ALo(1,"translate")),2&h){const r=t.oxw(2);t.Q6J("disabled",r.loading)("label",t.lcZ(1,2,"buttons.reset"))}}const y=function(h){return{name:h}};function O(h,L){if(1&h){const r=t.EpF();t.TgZ(0,"form",1)(1,"div",2)(2,"div",3),t.YNc(3,_,2,4,"button",4),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,M,2,4,"button",6),t.qZA(),t.TgZ(6,"div",7)(7,"button",8),t.NdJ("click",function(){t.CHM(r);const A=t.oxw();return t.KtG(A.submit.emit(!0))}),t.ALo(8,"async"),t.ALo(9,"translate"),t.ALo(10,"lowercase"),t.ALo(11,"translate"),t.qZA()()()()}if(2&h){const r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(3),t.Q6J("ngIf",r.modalMode===r.ModalMode.CREATE||r.modalMode===r.ModalMode.UPDATE),t.xp6(2),t.Q6J("ngIf",r.modalMode===r.ModalMode.CREATE||r.modalMode===r.ModalMode.UPDATE),t.xp6(2),t.Q6J("disabled",r.loading||"PENDING"===r.form.status||!1===t.lcZ(8,5,r.pendingChanges$))("label",t.xi3(9,7,t.lcZ(10,10,"buttons."+r.modalMode),t.VKq(14,y,t.lcZ(11,12,"tables."+r.name+".singular"))))}}let D=(()=>{class h{constructor(){this.loading=!1,this.cancel=new t.vpe,this.submit=new t.vpe,this.unsubscribe$=new i.x,this.pendingChanges$=new m.X(!1)}ngOnInit(){this.form.valueChanges.pipe((0,l.T)(1),(0,c.q)(1),(0,p.R)(this.unsubscribe$)).subscribe(r=>{this.firstFormValue=r}),this.form.valueChanges.pipe((0,l.T)(2),(0,p.R)(this.unsubscribe$),(0,u.U)(r=>JSON.stringify(r)!==JSON.stringify(this.firstFormValue))).subscribe(r=>{this.pendingChanges$.next(r)})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}get ModalMode(){return d.g}}return h.\u0275fac=function(r){return new(r||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-entity-modal-buttons"]],inputs:{loading:"loading",name:"name",modalMode:"modalMode",form:"form"},outputs:{cancel:"cancel",submit:"submit"},decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"grid","p-fluid","p-0","m-0","mt-2","w-full"],[1,"lg:col-6","md:col-6","sm:col-12","xs:col-12","pl-0","ml-0","pr-1"],["pButton","","type","button","class","p-button-secondary p-button-sm","icon","fa-solid fa-xmark",3,"disabled","label","click",4,"ngIf"],[1,"lg:col-6","md:col-6","sm:col-12","xs:col-12","pr-0","mr-0","pl-1"],["pButton","","type","reset","class","p-button-secondary p-button-sm","icon","fa-solid fa-broom",3,"disabled","label",4,"ngIf"],[1,"col-12","p-0","m-0"],["pButton","","type","submit","icon","fa-solid fa-floppy-disk",1,"p-button-sm",3,"disabled","label","click"],["pButton","","type","button","icon","fa-solid fa-xmark",1,"p-button-secondary","p-button-sm",3,"disabled","label","click"],["pButton","","type","reset","icon","fa-solid fa-broom",1,"p-button-secondary","p-button-sm",3,"disabled","label"]],template:function(r,v){1&r&&t.YNc(0,O,12,16,"form",0),2&r&&t.Q6J("ngIf",v.modalMode!==v.ModalMode.VIEW)},dependencies:[T.O5,x.Hq,b._Y,b.JL,b.sg,T.Ov,T.i8,P.X$],changeDetection:0}),h})()},8122:(C,g,o)=>{o.d(g,{K:()=>p});var t=o(6895),i=o(4006),m=o(5593),l=o(9605),c=o(4650);let p=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=c.oAB({type:u}),u.\u0275inj=c.cJS({imports:[t.ez,l.y,m.hJ,i.UX]}),u})()},3926:(C,g,o)=>{o.d(g,{p:()=>_t});var t=o(4650);class i{static areObjectEquals(s,e){return null!==s&&null===e&&JSON.stringify(s)===JSON.stringify(e)}static removeNullAndUndefinedAttributes(s){"object"==typeof s&&Object.entries(s).forEach(([e,a])=>{null==a?delete s[e]:"object"==typeof a&&i.removeNullAndUndefinedAttributes(a)})}}var m=o(1392),l=o(6895),c=o(1765),p=o(805),u=o(4006),d=o(2687),T=o(2997),x=o(2435),b=o(4121),P=o(6977),_=o(8426),M=o(1740),y=o(2210),O=o(5593),D=o(3608),h=o(2216),L=o(3416);function r(n,s){if(1&n&&(t.TgZ(0,"span",18),t._UZ(1,"fa-icon",19),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("icon",e.faLanguage)}}function v(n,s){if(1&n&&(t.TgZ(0,"div",20)(1,"span"),t._uU(2),t.ALo(3,"uppercase"),t.ALo(4,"translate"),t.qZA()()),2&n){const e=s.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"genericTable.filters."+e.key+".name")))}}function A(n,s){if(1&n&&(t.TgZ(0,"div",20)(1,"p",21),t.ALo(2,"translate"),t._uU(3),t.ALo(4,"uppercase"),t.ALo(5,"translate"),t.TgZ(6,"span"),t._UZ(7,"fa-icon",19),t.qZA()()()),2&n){const e=s.$implicit,a=t.oxw();t.xp6(1),t.Q6J("pTooltip",t.lcZ(2,3,"genericTable.filters."+e.key+".description")),t.xp6(2),t.hij(" ",t.lcZ(4,5,t.lcZ(5,7,"genericTable.filters."+e.key+".name"))," "),t.xp6(4),t.Q6J("icon",a.faQuestion)}}function Z(n,s){1&n&&(t.ynx(0),t.TgZ(1,"span",9)(2,"input",22),t.NdJ("click",function(a){return a.stopPropagation()}),t.qZA(),t.TgZ(3,"label"),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.BQk()),2&n&&(t.xp6(4),t.hij("",t.lcZ(5,1,"columns.value")," *"))}const B=function(n){return{"p-highlight":n}},R=function(){return{maxWidth:"250px"}};let J=(()=>{class n{constructor(){this.fb=(0,t.f3M)(u.qu),this.store=(0,t.f3M)(T.yh),this.filterFormGroup=this.fb.group({value:[void 0,[u.kI.required]],filterType:[void 0,[u.kI.required]]}),this.sorting="initial",this.language$=this.store.select(b.$.getOne),this.filter=new t.vpe,this.sort=new t.vpe,this.isHighlight=!1}set lazyLoadEvent(e){let a=!1;e?.sortField!==this.field.field?this.sorting="initial":a=!0,Object.entries(e?.filters)?.forEach(([f,E])=>{f===this.field.field&&E.value&&(a=!0)}),this.isHighlight=a}get GenericFieldType(){return _.E7}get FilterType(){return _.vA}get filterIcon(){return this.filterFormGroup.controls.value.value?d.nxn:d.G_j}get sortIcon(){switch(this.sorting){case"initial":return d.CmM;case"ascending":return d.foy;case"descending":return d.u9C}}onSort(){let e=0;switch(this.sorting){case"initial":case"ascending":this.sorting="descending",e=1;break;case"descending":this.sorting="ascending",e=-1}this.sort.emit({field:this.field,sortOrder:e})}reset(){this.filterFormGroup.reset(),this.filterFormGroup.updateValueAndValidity(),this.filter.emit({field:this.field,filter:this.filterFormGroup.value}),this.filterTypes.toggle(!1)}onSubmit(){this.filterFormGroup.valid?(this.filter.emit({field:this.field,filter:this.filterFormGroup.value}),this.filterTypes.toggle(!1)):P.h.markAllAsDirtyAndTouched(this.filterFormGroup)}get faQuestion(){return d.FDd}get faLanguage(){return d.BCn}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-generic-table-header-column"]],viewQuery:function(e,a){if(1&e&&t.Gf(x.T,5),2&e){let f;t.iGM(f=t.CRH())&&(a.filterTypes=f.first)}},inputs:{field:"field",lazyLoadEvent:"lazyLoadEvent"},outputs:{filter:"filter",sort:"sort"},decls:28,vars:28,consts:[[1,"app-generic-table-header-column","m-0","p-0",3,"ngClass"],[1,"flex","justify-content-between","align-items-center","m-0","p-0"],[1,"w-full"],["class","translation",4,"ngIf"],[1,"flex","align-items-center","justify-content-end","gap-2","w-full"],[1,"cursor-pointer",3,"icon","click"],["filterTypes",""],[1,"grid","p-fluid",3,"formGroup","ngSubmit"],[1,"filter-type","col-12","mt-3"],[1,"p-float-label"],["formControlName","filterType",3,"options","autoDisplayFirst"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"filter","col-12","mt-3",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"col-12","flex","justify-content-between","gap-2","flex-column","mt-2"],["pButton","","type","reset","icon","fa-solid fa-trash",1,"p-button-secondary","p-button-sm",3,"label","click"],["pButton","","type","submit","icon","fa-solid fa-filter",1,"p-button-primary","p-button-sm",3,"label"],[1,"translation"],[3,"icon"],[1,"filter-type-item"],["tooltipPosition","left",3,"pTooltip"],["type","text","pInputText","","formControlName","value",1,"p-inputtext-sm",3,"click"]],template:function(e,a){if(1&e){const f=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3),t.ALo(4,"titlecase"),t.YNc(5,r,2,1,"span",3),t.qZA(),t.TgZ(6,"div",4)(7,"fa-icon",5),t.NdJ("click",function(dt){t.CHM(f);const gt=t.MAs(10);return t.KtG(gt.toggle(dt))}),t.qZA(),t.TgZ(8,"fa-icon",5),t.NdJ("click",function(){return a.onSort()}),t.qZA()(),t.TgZ(9,"p-overlayPanel",null,6)(11,"form",7),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(12,"div",8)(13,"span",9)(14,"p-dropdown",10),t.ALo(15,"keyvalue"),t.YNc(16,v,5,5,"ng-template",11),t.YNc(17,A,8,9,"ng-template",12),t.qZA(),t.TgZ(18,"label"),t._uU(19),t.ALo(20,"translate"),t.qZA()()(),t.TgZ(21,"div",13),t.YNc(22,Z,6,3,"ng-container",14),t.qZA(),t.TgZ(23,"div",15)(24,"button",16),t.NdJ("click",function(){return a.reset()}),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"button",17),t.ALo(27,"translate"),t.qZA()()()()()}2&e&&(t.Q6J("ngClass",t.VKq(25,B,a.isHighlight)),t.xp6(3),t.hij(" ",t.lcZ(4,15,a.field.label)," "),t.xp6(2),t.Q6J("ngIf",a.field.type===a.GenericFieldType.TRANSLATIONS),t.xp6(2),t.Q6J("icon",a.filterIcon),t.xp6(1),t.Q6J("icon",a.sortIcon),t.xp6(1),t.Akn(t.DdM(27,R)),t.xp6(2),t.Q6J("formGroup",a.filterFormGroup),t.xp6(3),t.Q6J("options",t.lcZ(15,17,a.FilterType))("autoDisplayFirst",!1),t.xp6(5),t.hij("",t.lcZ(20,19,"columns.filterType")," *"),t.xp6(2),t.Q6J("ngSwitch",a.field.type),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.TEXT),t.xp6(2),t.Q6J("label",t.lcZ(25,21,"buttons.deleteFilters")),t.xp6(2),t.Q6J("label",t.lcZ(27,23,"buttons.filter")))},dependencies:[l.mk,l.O5,l.RF,l.n9,p.jx,M.o,y.Lt,O.Hq,D.u,x.T,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,h.BN,l.gd,l.rS,l.Nd,L.X$],changeDetection:0}),n})();var U=o(1135),w=o(9841),N=o(4004);function F(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.data," ")}}function Q(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.data,"dd/MM/yyyy")," ")}}function z(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.data,"dd/MM/yyyy HH:mm")," ")}}function K(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"img",2),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("src",e.data,t.LSH)("alt",e.field.label)}}const I=function(n,s){return{"pi-check":n,"pi-times":s}},S=function(n){return{color:n}};function j(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"i",3),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(3,I,e.data,!e.data))("ngClass",t.WLB(6,I,e.data,!e.data))("ngStyle",t.VKq(9,S,e.data?"#22C55E":"#DC2626"))}}function W(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.data+"%"," ")}}function Y(n,s){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.lcZ(2,1,e.translation$)," ")}}function $(n,s){if(1&n&&(t.ynx(0),t.YNc(1,Y,3,3,"ng-container",4),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.language$))}}let H=(()=>{class n{constructor(){this.store=(0,t.f3M)(T.yh),this.value$=new U.X(void 0),this.language$=this.store.select(b.$.getOne),this.translation$=(0,w.a)([this.language$,this.value$]).pipe((0,N.U)(([e])=>this.data?.find(f=>f.language===e.acronym)?.value||""))}set value(e){this.value$.next(e)}get data(){let e=this.value$.getValue();const a=this.field.field.split(".");for(const f of a)e=e[f];return this.field.format&&(e=this.field.format(e)),e}get GenericFieldType(){return _.E7}get faLanguage(){return d.BCn}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-generic-table-column"]],inputs:{field:"field",value:"value"},decls:8,vars:8,consts:[[1,"app-generic-table-column",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"src","alt"],[1,"pi",3,"ngClass","ngStyle"],[4,"ngIf"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,F,2,1,"ng-container",1),t.YNc(2,Q,3,4,"ng-container",1),t.YNc(3,z,3,4,"ng-container",1),t.YNc(4,K,2,2,"ng-container",1),t.YNc(5,j,2,11,"ng-container",1),t.YNc(6,W,2,1,"ng-container",1),t.YNc(7,$,3,3,"ng-container",1),t.qZA()),2&e&&(t.Q6J("ngSwitch",a.field.type),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.TEXT),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.DATE),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.DATETIME),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.IMAGE),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.BOOLEAN),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.PERCENTAGE),t.xp6(1),t.Q6J("ngSwitchCase",a.GenericFieldType.TRANSLATIONS))},dependencies:[l.mk,l.O5,l.PC,l.RF,l.n9,l.Ov,l.uU],styles:[".app-generic-table-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:2.5em;text-align:center;object-fit:cover;object-position:center}"],changeDetection:0}),n})(),V=(()=>{class n{constructor(){this.entity=null,this.tableEvent=new t.vpe}onTableEvent(e){this.tableEvent.emit(e)}get buttonClasses(){let e="p-button-sm";switch(this.tableConfig?.size){case"small":e="p-button-sm";break;case"normal":e="p-button";break;case"large":e="p-button-lg"}return`${e} p-button-${this.button.type}`}get tooltipPosition(){let e="bottom";switch(this.position){case"start":e="right";break;case"end":e="left";break;case"top":e="bottom"}return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-generic-table-button"]],inputs:{position:"position",tableConfig:"tableConfig",button:"button",entity:"entity"},outputs:{tableEvent:"tableEvent"},decls:1,vars:6,consts:[["pButton","",3,"label","icon","pTooltip","tooltipPosition","click"]],template:function(e,a){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return a.onTableEvent({value:a.entity,type:a.button.event})}),t.qZA()),2&e&&(t.Tol(a.buttonClasses),t.Q6J("label",a.button.label)("icon","pi "+a.button.icon)("pTooltip",a.button.tooltip)("tooltipPosition",a.tooltipPosition))},dependencies:[O.Hq,D.u],changeDetection:0}),n})();function k(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-generic-table-button",11),t.NdJ("tableEvent",function(f){t.CHM(e);const E=t.oxw(3);return t.KtG(E.onTableEvent(f))}),t.qZA()}if(2&n){const e=s.$implicit;t.Q6J("position","top")("button",e)("entity",null)}}function X(n,s){if(1&n&&(t.TgZ(0,"div",7)(1,"h1",8),t._uU(2),t.qZA(),t.TgZ(3,"div",9),t.YNc(4,k,1,3,"app-generic-table-button",10),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.config.title),t.xp6(2),t.Q6J("ngForOf",e.config.buttons.top)}}function q(n,s){1&n&&t._UZ(0,"th")}function tt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"th")(1,"app-generic-table-header-column",14),t.NdJ("filter",function(f){t.CHM(e);const E=t.oxw(3);return t.KtG(E.onFilter(f))})("sort",function(f){t.CHM(e);const E=t.oxw(3);return t.KtG(E.onSort(f))}),t.qZA()()}if(2&n){const e=s.$implicit,a=t.oxw(3);t.xp6(1),t.Q6J("field",e)("lazyLoadEvent",a.lazyLoadEventValue)}}function et(n,s){1&n&&t._UZ(0,"th")}function nt(n,s){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,q,1,0,"th",12),t.YNc(2,tt,2,2,"th",13),t.YNc(3,et,1,0,"th",12),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.config.buttons.start.length>0),t.xp6(1),t.Q6J("ngForOf",e.config.fields),t.xp6(1),t.Q6J("ngIf",e.config.buttons.end.length>0)}}function ot(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-generic-table-button",11),t.NdJ("tableEvent",function(f){t.CHM(e);const E=t.oxw(4);return t.KtG(E.onTableEvent(f))}),t.qZA()}if(2&n){const e=s.$implicit,a=t.oxw(2).$implicit;t.Q6J("position","start")("button",e)("entity",a)}}function it(n,s){if(1&n&&(t.TgZ(0,"th",17)(1,"div",18),t.YNc(2,ot,1,3,"app-generic-table-button",10),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(2),t.Q6J("ngForOf",e.config.buttons.start)}}function at(n,s){if(1&n&&(t.TgZ(0,"td"),t._UZ(1,"app-generic-table-column",19),t.qZA()),2&n){const e=s.$implicit,a=t.oxw().$implicit;t.xp6(1),t.Q6J("field",e)("value",a)}}function lt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-generic-table-button",11),t.NdJ("tableEvent",function(f){t.CHM(e);const E=t.oxw(4);return t.KtG(E.onTableEvent(f))}),t.qZA()}if(2&n){const e=s.$implicit,a=t.oxw(2).$implicit;t.Q6J("position","end")("button",e)("entity",a)}}function st(n,s){if(1&n&&(t.TgZ(0,"th",17)(1,"div",18),t.YNc(2,lt,1,3,"app-generic-table-button",10),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(2),t.Q6J("ngForOf",e.config.buttons.end)}}function rt(n,s){if(1&n&&(t.TgZ(0,"tr",15),t.YNc(1,it,3,1,"th",16),t.YNc(2,at,2,2,"td",13),t.YNc(3,st,3,1,"th",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.config.buttons.start.length>0),t.xp6(1),t.Q6J("ngForOf",e.config.fields),t.xp6(1),t.Q6J("ngIf",e.config.buttons.end.length>0)}}function ct(n,s){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(1),t.uIk("colspan",e.config.buttons.start.length+e.config.fields.length+e.config.buttons.end.length),t.xp6(1),t.hij(" ",t.lcZ(3,2,"genericTable.emptyMessage")," ")}}function pt(n,s){1&n&&t.YNc(0,ct,4,4,"tr",12),2&n&&t.Q6J("ngIf",s.frozen)}const G=function(){return[]};function ut(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"p-table",1,2),t.NdJ("onLazyLoad",function(f){t.CHM(e);const E=t.oxw();return t.KtG(E.onLazyLoad(f))}),t.ALo(2,"translate"),t.YNc(3,X,5,2,"ng-template",3),t.YNc(4,nt,4,3,"ng-template",4),t.YNc(5,rt,4,3,"ng-template",5),t.YNc(6,pt,1,1,"ng-template",6),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("value",e.entities)("loading",e.loading)("totalRecords",e.count)("styleClass",e.styleClass)("rows",e.lazyLoadEventValue.rows)("rowHover",!0)("frozenValue",t.DdM(21,G))("frozenColumns",t.DdM(22,G))("resizableColumns",!0)("showCurrentPageReport",e.config.showCurrentPageReport)("rowsPerPageOptions",e.config.rowsPerPageOptions)("dataKey",e.config.dataKey)("paginator",e.config.paginator)("filterDelay",0)("showFirstLastIcon",!0)("lazy",!0)("lazyLoadOnInit",!0)("rowTrackBy",e.rowTrackBy)("currentPageReportTemplate",t.lcZ(2,19,"genericTable.currentPageReport"))}}let _t=(()=>{class n{constructor(){this.config=m.$,this.loading=!0,this.count=0,this.entities=[],this.lazyLoadEvent=new t.vpe,this.lazyLoadEventValue={first:0,rows:10,multiSortMeta:[]},this.tableEvent=new t.vpe,this.filters=[]}ngOnInit(){this.onLazyLoad(this.lazyLoadEventValue)}onLazyLoad(e){i.areObjectEquals(this.lazyLoadEventValue,e)||(this.lazyLoadEvent.emit(e),this.lazyLoadEventValue=e)}onTableEvent(e){i.areObjectEquals(this.previousTableEvent,e)||(this.tableEvent.emit(e),this.previousTableEvent=e)}onFilter(e){const a={...this.lazyLoadEventValue,filters:{...this.lazyLoadEventValue.filters,[e.field.field]:{value:e.filter}}};i.areObjectEquals(this.lazyLoadEventValue,a)||(this.lazyLoadEvent.emit(a),this.lazyLoadEventValue=a)}onSort(e){const a={...this.lazyLoadEventValue,sortOrder:e.sortOrder,sortField:e.field.field};i.areObjectEquals(this.lazyLoadEventValue,a)||(this.lazyLoadEvent.emit(a),this.lazyLoadEventValue=a)}rowTrackBy(e,a){return this.config?a[this.config.dataKey]:e}get styleClass(){let e="";switch(this.config?.size){case"small":e="p-datatable-sm";break;case"normal":e="";break;case"large":e="p-datatable-lg"}return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-generic-table"]],inputs:{config:"config",loading:"loading",count:"count",entities:"entities"},outputs:{lazyLoadEvent:"lazyLoadEvent",tableEvent:"tableEvent"},decls:1,vars:1,consts:[["responsiveLayout","scroll","selectionMode","single","paginatorPosition","bottom","sortMode","single",3,"value","loading","totalRecords","styleClass","rows","rowHover","frozenValue","frozenColumns","resizableColumns","showCurrentPageReport","rowsPerPageOptions","dataKey","paginator","filterDelay","showFirstLastIcon","lazy","lazyLoadOnInit","rowTrackBy","currentPageReportTemplate","onLazyLoad",4,"ngIf"],["responsiveLayout","scroll","selectionMode","single","paginatorPosition","bottom","sortMode","single",3,"value","loading","totalRecords","styleClass","rows","rowHover","frozenValue","frozenColumns","resizableColumns","showCurrentPageReport","rowsPerPageOptions","dataKey","paginator","filterDelay","showFirstLastIcon","lazy","lazyLoadOnInit","rowTrackBy","currentPageReportTemplate","onLazyLoad"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0","p-0"],[1,"flex","justify-content-end","align-items-center","gap-3"],[3,"position","button","entity","tableEvent",4,"ngFor","ngForOf"],[3,"position","button","entity","tableEvent"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"field","lazyLoadEvent","filter","sort"],[1,"p-selectable-row"],["class","button-column",4,"ngIf"],[1,"button-column"],[1,"button-container"],[3,"field","value"]],template:function(e,a){1&e&&t.YNc(0,ut,7,23,"p-table",0),2&e&&t.Q6J("ngIf",a.config)},dependencies:[l.sg,l.O5,c.iA,p.jx,J,H,V,L.X$],styles:["th.button-column[_ngcontent-%COMP%]{vertical-align:middle;padding:0;border-bottom:1px solid #dee2e6}th.button-column[_ngcontent-%COMP%]   div.button-container[_ngcontent-%COMP%]{padding:.25em;display:flex;align-items:center;justify-content:flex-end;gap:.5em}"],changeDetection:0}),n})()},3067:(C,g,o)=>{o.d(g,{G:()=>L});var t=o(6895),i=o(4006),m=o(2216),l=o(3416),c=o(5593),p=o(2210),u=o(1740),d=o(5722),T=o(2435),x=o(8235),b=o(613),P=o(1765),_=o(4650);let D=(()=>{class r{}return r.\u0275fac=function(A){return new(A||r)},r.\u0275mod=_.oAB({type:r}),r.\u0275inj=_.cJS({imports:[t.ez]}),r})();var h=o(3608);let L=(()=>{class r{}return r.\u0275fac=function(A){return new(A||r)},r.\u0275mod=_.oAB({type:r}),r.\u0275inj=_.cJS({imports:[t.ez,P.U$,u.j,p.kW,d.q4,D,x.q,c.hJ,h.z,T.y,i.UX,b.cc,l.aw,m.uH]}),r})()},1392:(C,g,o)=>{o.d(g,{$:()=>t});const t={dataKey:"id",rowsPerPageOptions:[5,10,25,50,100],showCurrentPageReport:!0,paginator:!0,size:"normal",fields:[],buttons:{top:[],start:[],end:[]},title:""}},4024:(C,g,o)=>{o.d(g,{e:()=>i});var t=o(4650);let i=(()=>{class m{constructor(c,p){this._context={appLet:null},c.createEmbeddedView(p,this._context)}set appLet(c){this._context.appLet=c}}return m.\u0275fac=function(c){return new(c||m)(t.Y36(t.s_b),t.Y36(t.Rgc))},m.\u0275dir=t.lG2({type:m,selectors:[["","appLet",""]],inputs:{appLet:"appLet"}}),m})()},3570:(C,g,o)=>{o.d(g,{T:()=>l});var t=o(4650),i=o(7489),m=o(1135);let l=(()=>{class c{constructor(u,d,T){this.elementRef=u,this.injector=d,this.changeDectector=T,this.isLoading$=new m.X(!1),this.fontSizeValue=12,this.viewContainerRef=this.injector.get(t.s_b)}set appIsLoading(u){this.isLoading$.next(u)}ngAfterViewInit(){this.changeDectector.detectChanges(),this.fontSizeValue=parseFloat(window.getComputedStyle(this.elementRef.nativeElement).fontSize)/2,this.isLoading$.subscribe(u=>{this.handleLoading(u)})}handleLoading(u){u?(this.skeletonComponentRef=this.viewContainerRef.createComponent(i.O),this.skeletonComponentRef.instance.height=this.elementRef.nativeElement.offsetHeight-2*this.fontSizeValue+"px",this.skeletonComponentRef.instance.width=this.elementRef.nativeElement.offsetWidth-2*this.fontSizeValue+"px",this.skeletonComponentRef.instance.style={margin:`${this.fontSizeValue}px`},this.elementRef.nativeElement.style.display="none"):(this.elementRef.nativeElement.style.display="inline",this.skeletonComponentRef&&this.skeletonComponentRef.destroy())}}return c.\u0275fac=function(u){return new(u||c)(t.Y36(t.SBq),t.Y36(t.zs3),t.Y36(t.sBO))},c.\u0275dir=t.lG2({type:c,selectors:[["","appLoading",""]],inputs:{appIsLoading:"appIsLoading"}}),c})()},5255:(C,g,o)=>{o.d(g,{g:()=>t});var t=(()=>{return(i=t||(t={})).CREATE="CREATE",i.UPDATE="UPDATE",i.VIEW="VIEW",t;var i})()},6222:(C,g,o)=>{o.d(g,{F:()=>c});var t=o(8675),i=o(4004),m=o(4650),l=o(3416);let c=(()=>{class p{constructor(d){this.translateService=d,this.errorsIds=["required"]}transform(d){return d.valueChanges.pipe((0,t.O)(d.value),(0,i.U)(()=>{let T="";return this.errorsIds.forEach(x=>{d.errors&&x in d.errors&&d.dirty&&(T=this.translateService.instant(`form.errors.${x}`))}),null===d.errors&&(T=""),T}))}}return p.\u0275fac=function(d){return new(d||p)(m.Y36(l.sK,16))},p.\u0275pipe=m.Yjl({name:"errors",type:p,pure:!0}),p})()},8452:(C,g,o)=>{o.d(g,{J:()=>m});var t=o(4006),i=o(4650);let m=(()=>{class l{transform(p){return!p.hasValidator(t.kI.required)||p.hasError("required")&&p.dirty?"":"*"}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275pipe=i.Yjl({name:"isRequired",type:l,pure:!0}),l})()},6977:(C,g,o)=>{o.d(g,{h:()=>i});var t=o(4006);class i{static markAllAsDirtyAndTouched(l){l instanceof t.NI&&(l.markAsTouched(),l.markAsDirty(),l.updateValueAndValidity()),l instanceof t.cw&&Object.entries(l.controls).forEach(([c,p])=>{i.markAllAsDirtyAndTouched(p)}),l instanceof t.Oe&&l.controls.forEach(c=>{i.markAllAsDirtyAndTouched(c)})}static disableAllControls(l){l.disable(),l.updateValueAndValidity(),l instanceof t.NI&&l.disable(),l instanceof t.cw&&(l.disable(),Object.entries(l.controls).forEach(([c,p])=>{i.markAllAsDirtyAndTouched(p)})),l instanceof t.Oe&&(l.disable(),l.controls.forEach(c=>{i.markAllAsDirtyAndTouched(c)}))}}},611:(C,g,o)=>{o.d(g,{A:()=>t});class t{static getParentRoute(m,l){const c=m.split("/");for(let p=0;p<l;p++)c.pop();return c.join("/")}}}}]);