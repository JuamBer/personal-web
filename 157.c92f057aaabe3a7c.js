"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[157],{4446:(x,v,e)=>{e.d(v,{D:()=>w});var c=e(5255),l=e(4650),z=e(6895),i=e(7489),n=e(3416);function t(m,d){if(1&m&&(l.TgZ(0,"span",7),l._uU(1),l.ALo(2,"date"),l.qZA()),2&m){const C=l.oxw(4);l.xp6(1),l.Oqu(l.xi3(2,1,C.entity.updatedAt,"long"))}}function H(m,d){1&m&&(l.TgZ(0,"span",7),l._uU(1,"N/A"),l.qZA())}function V(m,d){if(1&m&&(l.ynx(0),l.TgZ(1,"span",4)(2,"div",5)(3,"b",6),l._uU(4),l.ALo(5,"translate"),l.qZA(),l.TgZ(6,"span",7),l._uU(7),l.ALo(8,"date"),l.qZA()(),l.TgZ(9,"div",5)(10,"b",6),l._uU(11),l.ALo(12,"translate"),l.qZA(),l.YNc(13,t,3,4,"span",8),l.YNc(14,H,2,0,"span",8),l.qZA()(),l.BQk()),2&m){const C=l.oxw(3);l.xp6(4),l.Oqu(l.lcZ(5,5,"columns.createdAt")+": "),l.xp6(3),l.Oqu(l.xi3(8,7,C.entity.createdAt,"long")),l.xp6(4),l.Oqu(l.lcZ(12,10,"columns.updatedAt")+": "),l.xp6(2),l.Q6J("ngIf",C.entity.updatedAt),l.xp6(1),l.Q6J("ngIf",!C.entity.updatedAt)}}function h(m,d){if(1&m&&(l.TgZ(0,"section",3),l.YNc(1,V,15,12,"ng-container",0),l.qZA()),2&m){const C=l.oxw(2);l.xp6(1),l.Q6J("ngIf",C.entity)}}function N(m,d){1&m&&(l.TgZ(0,"div",9)(1,"div",10),l._UZ(2,"p-skeleton",11)(3,"p-skeleton",11),l.qZA()())}function L(m,d){if(1&m&&(l.ynx(0),l.YNc(1,h,2,1,"section",1),l.YNc(2,N,4,0,"ng-template",null,2,l.W1O),l.BQk()),2&m){const C=l.MAs(3),b=l.oxw();l.xp6(1),l.Q6J("ngIf",!b.loading)("ngIfElse",C)}}let w=(()=>{class m{constructor(){this.loading=!1}get ModalMode(){return c.g}}return m.\u0275fac=function(C){return new(C||m)},m.\u0275cmp=l.Xpm({type:m,selectors:[["app-entity-modal-audit"]],inputs:{loading:"loading",modalMode:"modalMode",entity:"entity"},decls:1,vars:1,consts:[[4,"ngIf"],["class","audit-fields flex justify-content-end mt-3",4,"ngIf","ngIfElse"],["loadingTemplate",""],[1,"audit-fields","flex","justify-content-end","mt-3"],[1,"info-container"],[1,"info"],[1,"title"],[1,"data"],["class","data",4,"ngIf"],[1,"w-full","mt-3","flex","justify-content-end"],[1,"flex","flex-column","gap-2"],["width","20em","height","1em"]],template:function(C,b){1&C&&l.YNc(0,L,4,2,"ng-container",0),2&C&&l.Q6J("ngIf",b.modalMode!==b.ModalMode.CREATE)},dependencies:[z.O5,i.O,z.uU,n.X$],styles:[".info[_ngcontent-%COMP%]{font-size:.9em;text-align:end}.info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5em}.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}.info[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{font-weight:lighter}"],changeDetection:0}),m})()},2437:(x,v,e)=>{e.d(v,{D:()=>N});var c=e(6895),l=e(4006),z=e(3416),i=e(5593),n=e(7489),t=e(4585),H=e(9605),V=e(6333),h=e(4650);let N=(()=>{class L{}return L.\u0275fac=function(m){return new(m||L)},L.\u0275mod=h.oAB({type:L}),L.\u0275inj=h.cJS({imports:[c.ez,H.y,i.hJ,l.UX,n.m,z.aw,V.D,t.o]}),L})()},7525:(x,v,e)=>{e.d(v,{Z:()=>k});var c=e(4650),l=e(7579),z=e(1135),i=e(5684),n=e(5698),t=e(2722),H=e(4004),V=e(5255),h=e(6895),N=e(5593),L=e(4006),w=e(3416);function m(p,A){if(1&p){const o=c.EpF();c.TgZ(0,"button",9),c.NdJ("click",function(){c.CHM(o);const S=c.oxw(2);return c.KtG(S.cancel.emit(!0))}),c.ALo(1,"translate"),c.qZA()}if(2&p){const o=c.oxw(2);c.Q6J("disabled",o.loading)("label",c.lcZ(1,2,"buttons.cancel"))}}function d(p,A){if(1&p&&(c._UZ(0,"button",10),c.ALo(1,"translate")),2&p){const o=c.oxw(2);c.Q6J("disabled",o.loading)("label",c.lcZ(1,2,"buttons.reset"))}}const C=function(p){return{name:p}};function b(p,A){if(1&p){const o=c.EpF();c.TgZ(0,"form",1)(1,"div",2)(2,"div",3),c.YNc(3,m,2,4,"button",4),c.qZA(),c.TgZ(4,"div",5),c.YNc(5,d,2,4,"button",6),c.qZA(),c.TgZ(6,"div",7)(7,"button",8),c.NdJ("click",function(){c.CHM(o);const S=c.oxw();return c.KtG(S.submit.emit(!0))}),c.ALo(8,"async"),c.ALo(9,"translate"),c.ALo(10,"lowercase"),c.ALo(11,"translate"),c.qZA()()()()}if(2&p){const o=c.oxw();c.Q6J("formGroup",o.form),c.xp6(3),c.Q6J("ngIf",o.modalMode===o.ModalMode.CREATE||o.modalMode===o.ModalMode.UPDATE),c.xp6(2),c.Q6J("ngIf",o.modalMode===o.ModalMode.CREATE||o.modalMode===o.ModalMode.UPDATE),c.xp6(2),c.Q6J("disabled",o.loading||"PENDING"===o.form.status||!1===c.lcZ(8,5,o.pendingChanges$))("label",c.xi3(9,7,c.lcZ(10,10,"buttons."+o.modalMode),c.VKq(14,C,c.lcZ(11,12,"tables."+o.name+".singular"))))}}let k=(()=>{class p{constructor(){this.loading=!1,this.cancel=new c.vpe,this.submit=new c.vpe,this.unsubscribe$=new l.x,this.pendingChanges$=new z.X(!1)}ngOnInit(){this.form.valueChanges.pipe((0,i.T)(1),(0,n.q)(1),(0,t.R)(this.unsubscribe$)).subscribe(o=>{this.firstFormValue=o}),this.form.valueChanges.pipe((0,i.T)(2),(0,t.R)(this.unsubscribe$),(0,H.U)(o=>JSON.stringify(o)!==JSON.stringify(this.firstFormValue))).subscribe(o=>{this.pendingChanges$.next(o)})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}get ModalMode(){return V.g}}return p.\u0275fac=function(o){return new(o||p)},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-entity-modal-buttons"]],inputs:{loading:"loading",name:"name",modalMode:"modalMode",form:"form"},outputs:{cancel:"cancel",submit:"submit"},decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"grid","p-fluid","p-0","m-0","mt-2","w-full"],[1,"lg:col-6","md:col-6","sm:col-12","xs:col-12","pl-0","ml-0","pr-1"],["pButton","","type","button","class","p-button-secondary p-button-sm","icon","fa-solid fa-xmark",3,"disabled","label","click",4,"ngIf"],[1,"lg:col-6","md:col-6","sm:col-12","xs:col-12","pr-0","mr-0","pl-1"],["pButton","","type","reset","class","p-button-secondary p-button-sm","icon","fa-solid fa-broom",3,"disabled","label",4,"ngIf"],[1,"col-12","p-0","m-0"],["pButton","","type","submit","icon","fa-solid fa-floppy-disk",1,"p-button-sm",3,"disabled","label","click"],["pButton","","type","button","icon","fa-solid fa-xmark",1,"p-button-secondary","p-button-sm",3,"disabled","label","click"],["pButton","","type","reset","icon","fa-solid fa-broom",1,"p-button-secondary","p-button-sm",3,"disabled","label"]],template:function(o,g){1&o&&c.YNc(0,b,12,16,"form",0),2&o&&c.Q6J("ngIf",g.modalMode!==g.ModalMode.VIEW)},dependencies:[h.O5,N.Hq,L._Y,L.JL,L.sg,h.Ov,h.i8,w.X$],changeDetection:0}),p})()},8122:(x,v,e)=>{e.d(v,{K:()=>t});var c=e(6895),l=e(4006),z=e(5593),i=e(9605),n=e(4650);let t=(()=>{class H{}return H.\u0275fac=function(h){return new(h||H)},H.\u0275mod=n.oAB({type:H}),H.\u0275inj=n.cJS({imports:[c.ez,i.y,z.hJ,l.UX]}),H})()},3926:(x,v,e)=>{e.d(v,{p:()=>_2});var c=e(4650);class l{static areObjectEquals(f,a){return null!==f&&null===a&&JSON.stringify(f)===JSON.stringify(a)}static removeNullAndUndefinedAttributes(f){"object"==typeof f&&Object.entries(f).forEach(([a,r])=>{null==r?delete f[a]:"object"==typeof r&&l.removeNullAndUndefinedAttributes(r)})}}var z=e(1392),i=e(6895),n=e(1765),t=e(805),H=e(4006),V=e(2687),h=e(2997),N=e(2435),L=e(4121),w=e(6977),m=e(8426),d=e(1740),C=e(2210),b=e(5593),k=e(3608),p=e(2216),A=e(3416);function o(s,f){if(1&s&&(c.TgZ(0,"span",18),c._UZ(1,"fa-icon",19),c.qZA()),2&s){const a=c.oxw();c.xp6(1),c.Q6J("icon",a.faLanguage)}}function g(s,f){if(1&s&&(c.TgZ(0,"div",20)(1,"span"),c._uU(2),c.ALo(3,"uppercase"),c.ALo(4,"translate"),c.qZA()()),2&s){const a=f.$implicit;c.xp6(2),c.Oqu(c.lcZ(3,1,c.lcZ(4,3,"genericTable.filters."+a.key+".name")))}}function S(s,f){if(1&s&&(c.TgZ(0,"div",20)(1,"p",21),c.ALo(2,"translate"),c._uU(3),c.ALo(4,"uppercase"),c.ALo(5,"translate"),c.TgZ(6,"span"),c._UZ(7,"fa-icon",19),c.qZA()()()),2&s){const a=f.$implicit,r=c.oxw();c.xp6(1),c.Q6J("pTooltip",c.lcZ(2,3,"genericTable.filters."+a.key+".description")),c.xp6(2),c.hij(" ",c.lcZ(4,5,c.lcZ(5,7,"genericTable.filters."+a.key+".name"))," "),c.xp6(4),c.Q6J("icon",r.faQuestion)}}function T(s,f){1&s&&(c.ynx(0),c.TgZ(1,"span",9)(2,"input",22),c.NdJ("click",function(r){return r.stopPropagation()}),c.qZA(),c.TgZ(3,"label"),c._uU(4),c.ALo(5,"translate"),c.qZA()(),c.BQk()),2&s&&(c.xp6(4),c.hij("",c.lcZ(5,1,"columns.value")," *"))}const t2=function(s){return{"p-highlight":s}},H2=function(){return{maxWidth:"250px"}};let E=(()=>{class s{constructor(){this.fb=(0,c.f3M)(H.qu),this.store=(0,c.f3M)(h.yh),this.faQuestion=V.FDd,this.faLanguage=V.BCn,this.filterFormGroup=this.fb.group({value:[void 0,[H.kI.required]],filterType:[void 0,[H.kI.required]]}),this.sorting="initial",this.language$=this.store.select(L.$.getOne),this.filter=new c.vpe,this.sort=new c.vpe,this.isHighlight=!1}set lazyLoadEvent(a){let r=!1;a?.sortField!==this.field.field?this.sorting="initial":r=!0,Object.entries(a?.filters)?.forEach(([M,u])=>{M===this.field.field&&u.value&&(r=!0)}),this.isHighlight=r}get GenericFieldType(){return m.E7}get FilterType(){return m.vA}get filterIcon(){return this.filterFormGroup.controls.value.value?V.nxn:V.G_j}get sortIcon(){switch(this.sorting){case"initial":return V.CmM;case"ascending":return V.foy;case"descending":return V.u9C}}onSort(){let a=0;switch(this.sorting){case"initial":case"ascending":this.sorting="descending",a=1;break;case"descending":this.sorting="ascending",a=-1}this.sort.emit({field:this.field,sortOrder:a})}reset(){this.filterFormGroup.reset(),this.filterFormGroup.updateValueAndValidity(),this.filter.emit({field:this.field,filter:this.filterFormGroup.value}),this.filterTypes.toggle(!1)}onSubmit(){this.filterFormGroup.valid?(this.filter.emit({field:this.field,filter:this.filterFormGroup.value}),this.filterTypes.toggle(!1)):w.h.markAllAsDirtyAndTouched(this.filterFormGroup)}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-generic-table-header-column"]],viewQuery:function(a,r){if(1&a&&c.Gf(N.T,5),2&a){let M;c.iGM(M=c.CRH())&&(r.filterTypes=M.first)}},inputs:{field:"field",lazyLoadEvent:"lazyLoadEvent"},outputs:{filter:"filter",sort:"sort"},decls:28,vars:28,consts:[[1,"app-generic-table-header-column","m-0","p-0",3,"ngClass"],[1,"flex","justify-content-between","align-items-center","m-0","p-0"],[1,"w-full"],["class","translation",4,"ngIf"],[1,"flex","align-items-center","justify-content-end","gap-2","w-full"],[1,"cursor-pointer",3,"icon","click"],["filterTypes",""],[1,"grid","p-fluid",3,"formGroup","ngSubmit"],[1,"filter-type","col-12","mt-3"],[1,"p-float-label"],["formControlName","filterType",3,"options","autoDisplayFirst"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"filter","col-12","mt-3",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"col-12","flex","justify-content-between","gap-2","flex-column","mt-2"],["pButton","","type","reset","icon","fa-solid fa-trash",1,"p-button-secondary","p-button-sm",3,"label","click"],["pButton","","type","submit","icon","fa-solid fa-filter",1,"p-button-primary","p-button-sm",3,"label"],[1,"translation"],[3,"icon"],[1,"filter-type-item"],["tooltipPosition","left",3,"pTooltip"],["type","text","pInputText","","formControlName","value",1,"p-inputtext-sm",3,"click"]],template:function(a,r){if(1&a){const M=c.EpF();c.TgZ(0,"div",0)(1,"div",1)(2,"span",2),c._uU(3),c.ALo(4,"titlecase"),c.YNc(5,o,2,1,"span",3),c.qZA(),c.TgZ(6,"div",4)(7,"fa-icon",5),c.NdJ("click",function(Q){c.CHM(M);const B2=c.MAs(10);return c.KtG(B2.toggle(Q))}),c.qZA(),c.TgZ(8,"fa-icon",5),c.NdJ("click",function(){return r.onSort()}),c.qZA()(),c.TgZ(9,"p-overlayPanel",null,6)(11,"form",7),c.NdJ("ngSubmit",function(){return r.onSubmit()}),c.TgZ(12,"div",8)(13,"span",9)(14,"p-dropdown",10),c.ALo(15,"keyvalue"),c.YNc(16,g,5,5,"ng-template",11),c.YNc(17,S,8,9,"ng-template",12),c.qZA(),c.TgZ(18,"label"),c._uU(19),c.ALo(20,"translate"),c.qZA()()(),c.TgZ(21,"div",13),c.YNc(22,T,6,3,"ng-container",14),c.qZA(),c.TgZ(23,"div",15)(24,"button",16),c.NdJ("click",function(){return r.reset()}),c.ALo(25,"translate"),c.qZA(),c._UZ(26,"button",17),c.ALo(27,"translate"),c.qZA()()()()()}2&a&&(c.Q6J("ngClass",c.VKq(25,t2,r.isHighlight)),c.xp6(3),c.hij(" ",c.lcZ(4,15,r.field.label)," "),c.xp6(2),c.Q6J("ngIf",r.field.type===r.GenericFieldType.TRANSLATIONS),c.xp6(2),c.Q6J("icon",r.filterIcon),c.xp6(1),c.Q6J("icon",r.sortIcon),c.xp6(1),c.Akn(c.DdM(27,H2)),c.xp6(2),c.Q6J("formGroup",r.filterFormGroup),c.xp6(3),c.Q6J("options",c.lcZ(15,17,r.FilterType))("autoDisplayFirst",!1),c.xp6(5),c.hij("",c.lcZ(20,19,"columns.filterType")," *"),c.xp6(2),c.Q6J("ngSwitch",r.field.type),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.TEXT),c.xp6(2),c.Q6J("label",c.lcZ(25,21,"buttons.deleteFilters")),c.xp6(2),c.Q6J("label",c.lcZ(27,23,"buttons.filter")))},dependencies:[i.mk,i.O5,i.RF,i.n9,t.jx,d.o,C.Lt,b.Hq,k.u,N.T,H._Y,H.Fj,H.JJ,H.JL,H.sg,H.u,p.BN,i.gd,i.rS,i.Nd,A.X$]}),s})();var z2=e(1135),m2=e(9841),y=e(4004);function V2(s,f){if(1&s&&(c.ynx(0),c._uU(1),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.hij(" ",a.data," ")}}function v2(s,f){if(1&s&&(c.ynx(0),c._uU(1),c.ALo(2,"date"),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.hij(" ",c.xi3(2,1,a.data,"dd/MM/yyyy")," ")}}function M2(s,f){if(1&s&&(c.ynx(0),c._uU(1),c.ALo(2,"date"),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.hij(" ",c.xi3(2,1,a.data,"dd/MM/yyyy HH:mm")," ")}}function h2(s,f){if(1&s&&(c.ynx(0),c._UZ(1,"img",2),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.Q6J("src",a.data,c.LSH)("alt",a.field.label)}}const p2=function(s,f){return{"pi-check":s,"pi-times":f}};function C2(s,f){if(1&s&&(c.ynx(0),c._UZ(1,"i",3),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.Q6J("ngClass",c.WLB(1,p2,a.data,!a.data))}}function U(s,f){if(1&s&&(c.ynx(0),c._uU(1),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.hij(" ",a.data+"%"," ")}}function L2(s,f){if(1&s&&(c.ynx(0),c._uU(1),c.ALo(2,"async"),c.BQk()),2&s){const a=c.oxw(2);c.xp6(1),c.hij(" ",c.lcZ(2,1,a.translation$)," ")}}function u2(s,f){if(1&s&&(c.ynx(0),c.YNc(1,L2,3,3,"ng-container",4),c.ALo(2,"async"),c.BQk()),2&s){const a=c.oxw();c.xp6(1),c.Q6J("ngIf",c.lcZ(2,1,a.language$))}}let d2=(()=>{class s{constructor(){this.store=(0,c.f3M)(h.yh),this.faLanguage=V.BCn,this.value$=new z2.X(void 0),this.language$=this.store.select(L.$.getOne),this.translation$=(0,m2.a)([this.language$,this.value$]).pipe((0,y.U)(([a])=>this.data?.find(M=>M.language===a.acronym)?.value||""))}set value(a){this.value$.next(a)}get data(){let a=this.value$.getValue();const r=this.field.field.split(".");for(const M of r)a=a[M];return a}get GenericFieldType(){return m.E7}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-generic-table-column"]],inputs:{field:"field",value:"value"},decls:8,vars:8,consts:[[1,"app-generic-table-column",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"src","alt"],[1,"pi",3,"ngClass"],[4,"ngIf"]],template:function(a,r){1&a&&(c.TgZ(0,"div",0),c.YNc(1,V2,2,1,"ng-container",1),c.YNc(2,v2,3,4,"ng-container",1),c.YNc(3,M2,3,4,"ng-container",1),c.YNc(4,h2,2,2,"ng-container",1),c.YNc(5,C2,2,4,"ng-container",1),c.YNc(6,U,2,1,"ng-container",1),c.YNc(7,u2,3,3,"ng-container",1),c.qZA()),2&a&&(c.Q6J("ngSwitch",r.field.type),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.TEXT),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.DATE),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.DATETIME),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.IMAGE),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.BOOLEAN),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.PERCENTAGE),c.xp6(1),c.Q6J("ngSwitchCase",r.GenericFieldType.TRANSLATIONS))},dependencies:[i.mk,i.O5,i.RF,i.n9,i.Ov,i.uU],styles:[".app-generic-table-column[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:2.5em;text-align:center;object-fit:cover;object-position:center}"]}),s})(),G=(()=>{class s{constructor(){this.entity=null,this.tableEvent=new c.vpe}onTableEvent(a){this.tableEvent.emit(a)}get buttonClasses(){let a="p-button-sm";switch(this.tableConfig?.size){case"small":a="p-button-sm";break;case"normal":a="p-button";break;case"large":a="p-button-lg"}return`${a} p-button-${this.button.type}`}get tooltipPosition(){let a="bottom";switch(this.position){case"start":a="right";break;case"end":a="left";break;case"top":a="bottom"}return a}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-generic-table-button"]],inputs:{position:"position",tableConfig:"tableConfig",button:"button",entity:"entity"},outputs:{tableEvent:"tableEvent"},decls:1,vars:6,consts:[["pButton","",3,"label","icon","pTooltip","tooltipPosition","click"]],template:function(a,r){1&a&&(c.TgZ(0,"button",0),c.NdJ("click",function(){return r.onTableEvent({value:r.entity,type:r.button.event})}),c.qZA()),2&a&&(c.Tol(r.buttonClasses),c.Q6J("label",r.button.label)("icon","pi "+r.button.icon)("pTooltip",r.button.tooltip)("tooltipPosition",r.tooltipPosition))},dependencies:[b.Hq,k.u]}),s})();function g2(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"app-generic-table-button",9),c.NdJ("tableEvent",function(M){c.CHM(a);const u=c.oxw(3);return c.KtG(u.onTableEvent(M))}),c.qZA()}if(2&s){const a=f.$implicit;c.Q6J("position","top")("button",a)("entity",null)}}function x2(s,f){if(1&s&&(c.TgZ(0,"div",7),c.YNc(1,g2,1,3,"app-generic-table-button",8),c.qZA()),2&s){const a=c.oxw(2);c.xp6(1),c.Q6J("ngForOf",a.config.buttons.top)}}function _(s,f){1&s&&c._UZ(0,"th")}function N2(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"th")(1,"app-generic-table-header-column",12),c.NdJ("filter",function(M){c.CHM(a);const u=c.oxw(3);return c.KtG(u.onFilter(M))})("sort",function(M){c.CHM(a);const u=c.oxw(3);return c.KtG(u.onSort(M))}),c.qZA()()}if(2&s){const a=f.$implicit,r=c.oxw(3);c.xp6(1),c.Q6J("field",a)("lazyLoadEvent",r.lazyLoadEventValue)}}function W(s,f){1&s&&c._UZ(0,"th")}function S2(s,f){if(1&s&&(c.TgZ(0,"tr"),c.YNc(1,_,1,0,"th",10),c.YNc(2,N2,2,2,"th",11),c.YNc(3,W,1,0,"th",10),c.qZA()),2&s){const a=c.oxw(2);c.xp6(1),c.Q6J("ngIf",a.config.buttons.start.length>0),c.xp6(1),c.Q6J("ngForOf",a.config.fields),c.xp6(1),c.Q6J("ngIf",a.config.buttons.end.length>0)}}function b2(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"app-generic-table-button",9),c.NdJ("tableEvent",function(M){c.CHM(a);const u=c.oxw(4);return c.KtG(u.onTableEvent(M))}),c.qZA()}if(2&s){const a=f.$implicit,r=c.oxw(2).$implicit;c.Q6J("position","start")("button",a)("entity",r)}}function q(s,f){if(1&s&&(c.TgZ(0,"th",15)(1,"div",16),c.YNc(2,b2,1,3,"app-generic-table-button",8),c.qZA()()),2&s){const a=c.oxw(3);c.xp6(2),c.Q6J("ngForOf",a.config.buttons.start)}}function A2(s,f){if(1&s&&(c.TgZ(0,"td"),c._UZ(1,"app-generic-table-column",17),c.qZA()),2&s){const a=f.$implicit,r=c.oxw().$implicit;c.xp6(1),c.Q6J("field",a)("value",r)}}function w2(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"app-generic-table-button",9),c.NdJ("tableEvent",function(M){c.CHM(a);const u=c.oxw(4);return c.KtG(u.onTableEvent(M))}),c.qZA()}if(2&s){const a=f.$implicit,r=c.oxw(2).$implicit;c.Q6J("position","end")("button",a)("entity",r)}}function k2(s,f){if(1&s&&(c.TgZ(0,"th",15)(1,"div",16),c.YNc(2,w2,1,3,"app-generic-table-button",8),c.qZA()()),2&s){const a=c.oxw(3);c.xp6(2),c.Q6J("ngForOf",a.config.buttons.end)}}function O(s,f){if(1&s&&(c.TgZ(0,"tr",13),c.YNc(1,q,3,1,"th",14),c.YNc(2,A2,2,2,"td",11),c.YNc(3,k2,3,1,"th",14),c.qZA()),2&s){const a=c.oxw(2);c.xp6(1),c.Q6J("ngIf",a.config.buttons.start.length>0),c.xp6(1),c.Q6J("ngForOf",a.config.fields),c.xp6(1),c.Q6J("ngIf",a.config.buttons.end.length>0)}}function T2(s,f){if(1&s&&(c.TgZ(0,"tr")(1,"td"),c._uU(2),c.ALo(3,"translate"),c.qZA()()),2&s){const a=c.oxw(3);c.xp6(1),c.uIk("colspan",a.config.buttons.start.length+a.config.fields.length+a.config.buttons.end.length),c.xp6(1),c.hij(" ",c.lcZ(3,2,"genericTable.emptyMessage")," ")}}function I(s,f){1&s&&c.YNc(0,T2,4,4,"tr",10),2&s&&c.Q6J("ngIf",f.frozen)}const Z=function(){return[]};function y2(s,f){if(1&s){const a=c.EpF();c.TgZ(0,"p-table",1,2),c.NdJ("onLazyLoad",function(M){c.CHM(a);const u=c.oxw();return c.KtG(u.onLazyLoad(M))}),c.ALo(2,"translate"),c.YNc(3,x2,2,1,"ng-template",3),c.YNc(4,S2,4,3,"ng-template",4),c.YNc(5,O,4,3,"ng-template",5),c.YNc(6,I,1,1,"ng-template",6),c.qZA()}if(2&s){const a=c.oxw();c.Q6J("value",a.entities)("loading",a.loading)("totalRecords",a.count)("styleClass",a.styleClass)("rows",a.lazyLoadEventValue.rows)("rowHover",!0)("frozenValue",c.DdM(21,Z))("frozenColumns",c.DdM(22,Z))("resizableColumns",!0)("showCurrentPageReport",a.config.showCurrentPageReport)("rowsPerPageOptions",a.config.rowsPerPageOptions)("dataKey",a.config.dataKey)("paginator",a.config.paginator)("filterDelay",0)("showFirstLastIcon",!0)("lazy",!0)("lazyLoadOnInit",!0)("rowTrackBy",a.rowTrackBy)("currentPageReportTemplate",c.lcZ(2,19,"genericTable.currentPageReport"))}}let _2=(()=>{class s{constructor(){this.config=z.$,this.loading=!0,this.count=0,this.entities=[],this.lazyLoadEvent=new c.vpe,this.lazyLoadEventValue={first:0,rows:10,multiSortMeta:[]},this.tableEvent=new c.vpe,this.filters=[]}ngOnInit(){this.onLazyLoad(this.lazyLoadEventValue)}onLazyLoad(a){l.areObjectEquals(this.lazyLoadEventValue,a)||(this.lazyLoadEvent.emit(a),this.lazyLoadEventValue=a)}onTableEvent(a){l.areObjectEquals(this.previousTableEvent,a)||(this.tableEvent.emit(a),this.previousTableEvent=a)}onFilter(a){const r={...this.lazyLoadEventValue,filters:{...this.lazyLoadEventValue.filters,[a.field.field]:{value:a.filter}}};l.areObjectEquals(this.lazyLoadEventValue,r)||(this.lazyLoadEvent.emit(r),this.lazyLoadEventValue=r)}onSort(a){const r={...this.lazyLoadEventValue,sortOrder:a.sortOrder,sortField:a.field.field};l.areObjectEquals(this.lazyLoadEventValue,r)||(this.lazyLoadEvent.emit(r),this.lazyLoadEventValue=r)}rowTrackBy(a,r){return this.config?r[this.config.dataKey]:a}get styleClass(){let a="";switch(this.config?.size){case"small":a="p-datatable-sm";break;case"normal":a="";break;case"large":a="p-datatable-lg"}return a}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-generic-table"]],inputs:{config:"config",loading:"loading",count:"count",entities:"entities"},outputs:{lazyLoadEvent:"lazyLoadEvent",tableEvent:"tableEvent"},decls:1,vars:1,consts:[["responsiveLayout","scroll","selectionMode","single","paginatorPosition","bottom","sortMode","single",3,"value","loading","totalRecords","styleClass","rows","rowHover","frozenValue","frozenColumns","resizableColumns","showCurrentPageReport","rowsPerPageOptions","dataKey","paginator","filterDelay","showFirstLastIcon","lazy","lazyLoadOnInit","rowTrackBy","currentPageReportTemplate","onLazyLoad",4,"ngIf"],["responsiveLayout","scroll","selectionMode","single","paginatorPosition","bottom","sortMode","single",3,"value","loading","totalRecords","styleClass","rows","rowHover","frozenValue","frozenColumns","resizableColumns","showCurrentPageReport","rowsPerPageOptions","dataKey","paginator","filterDelay","showFirstLastIcon","lazy","lazyLoadOnInit","rowTrackBy","currentPageReportTemplate","onLazyLoad"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex","justify-content-end","align-items-center","gap-3"],[3,"position","button","entity","tableEvent",4,"ngFor","ngForOf"],[3,"position","button","entity","tableEvent"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"field","lazyLoadEvent","filter","sort"],[1,"p-selectable-row"],["class","button-column",4,"ngIf"],[1,"button-column"],[1,"button-container"],[3,"field","value"]],template:function(a,r){1&a&&c.YNc(0,y2,7,23,"p-table",0),2&a&&c.Q6J("ngIf",r.config)},dependencies:[i.sg,i.O5,n.iA,t.jx,E,d2,G,A.X$],styles:["th.button-column[_ngcontent-%COMP%]{vertical-align:middle;padding:0;border-bottom:1px solid #dee2e6}th.button-column[_ngcontent-%COMP%]   div.button-container[_ngcontent-%COMP%]{padding:.25em;display:flex;align-items:center;justify-content:flex-end;gap:.5em}"],changeDetection:0}),s})()},3067:(x,v,e)=>{e.d(v,{G:()=>A});var c=e(6895),l=e(4006),z=e(2216),i=e(3416),n=e(5593),t=e(2210),H=e(1740),V=e(5722),h=e(2435),N=e(8235),L=e(613),w=e(1765),m=e(4650);let k=(()=>{class o{}return o.\u0275fac=function(S){return new(S||o)},o.\u0275mod=m.oAB({type:o}),o.\u0275inj=m.cJS({imports:[c.ez]}),o})();var p=e(3608);let A=(()=>{class o{}return o.\u0275fac=function(S){return new(S||o)},o.\u0275mod=m.oAB({type:o}),o.\u0275inj=m.cJS({imports:[c.ez,w.U$,H.j,t.kW,V.q4,k,N.q,n.hJ,p.z,h.y,l.UX,L.cc,i.aw,z.uH]}),o})()},1392:(x,v,e)=>{e.d(v,{$:()=>c});const c={dataKey:"id",rowsPerPageOptions:[5,10,25,50,100],showCurrentPageReport:!0,paginator:!0,size:"normal",fields:[],buttons:{top:[],start:[],end:[]}}},4024:(x,v,e)=>{e.d(v,{e:()=>l});var c=e(4650);let l=(()=>{class z{constructor(n,t){this._context={appLet:null},n.createEmbeddedView(t,this._context)}set appLet(n){this._context.appLet=n}}return z.\u0275fac=function(n){return new(n||z)(c.Y36(c.s_b),c.Y36(c.Rgc))},z.\u0275dir=c.lG2({type:z,selectors:[["","appLet",""]],inputs:{appLet:"appLet"}}),z})()},3570:(x,v,e)=>{e.d(v,{T:()=>i});var c=e(4650),l=e(7489),z=e(1135);let i=(()=>{class n{constructor(H,V,h){this.elementRef=H,this.injector=V,this.changeDectector=h,this.isLoading$=new z.X(!1),this.fontSizeValue=12,this.viewContainerRef=this.injector.get(c.s_b)}set appIsLoading(H){this.isLoading$.next(H)}ngAfterViewInit(){this.changeDectector.detectChanges(),this.fontSizeValue=parseFloat(window.getComputedStyle(this.elementRef.nativeElement).fontSize)/2,this.isLoading$.subscribe(H=>{this.handleLoading(H)})}handleLoading(H){H?(this.skeletonComponentRef=this.viewContainerRef.createComponent(l.O),this.skeletonComponentRef.instance.height=this.elementRef.nativeElement.offsetHeight-2*this.fontSizeValue+"px",this.skeletonComponentRef.instance.width=this.elementRef.nativeElement.offsetWidth-2*this.fontSizeValue+"px",this.skeletonComponentRef.instance.style={margin:`${this.fontSizeValue}px`},this.elementRef.nativeElement.style.display="none"):(this.elementRef.nativeElement.style.display="inline",this.skeletonComponentRef&&this.skeletonComponentRef.destroy())}}return n.\u0275fac=function(H){return new(H||n)(c.Y36(c.SBq),c.Y36(c.zs3),c.Y36(c.sBO))},n.\u0275dir=c.lG2({type:n,selectors:[["","appLoading",""]],inputs:{appIsLoading:"appIsLoading"}}),n})()},5255:(x,v,e)=>{e.d(v,{g:()=>c});var c=(()=>{return(l=c||(c={})).CREATE="CREATE",l.UPDATE="UPDATE",l.VIEW="VIEW",c;var l})()},6333:(x,v,e)=>{e.d(v,{D:()=>l});var c=e(4650);let l=(()=>{class z{}return z.\u0275fac=function(n){return new(n||z)},z.\u0275mod=c.oAB({type:z}),z.\u0275inj=c.cJS({}),z})()},6222:(x,v,e)=>{e.d(v,{F:()=>n});var c=e(8675),l=e(4004),z=e(4650),i=e(3416);let n=(()=>{class t{constructor(V){this.translateService=V,this.errorsIds=["required"]}transform(V){return V.valueChanges.pipe((0,c.O)(V.value),(0,l.U)(()=>{let h="";return this.errorsIds.forEach(N=>{V.errors&&N in V.errors&&V.dirty&&(h=this.translateService.instant(`form.errors.${N}`))}),null===V.errors&&(h=""),h}))}}return t.\u0275fac=function(V){return new(V||t)(z.Y36(i.sK,16))},t.\u0275pipe=z.Yjl({name:"errors",type:t,pure:!0}),t})()},8452:(x,v,e)=>{e.d(v,{J:()=>z});var c=e(4006),l=e(4650);let z=(()=>{class i{transform(t){return!t.hasValidator(c.kI.required)||t.hasError("required")&&t.dirty?"":"*"}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=l.Yjl({name:"isRequired",type:i,pure:!0}),i})()},6977:(x,v,e)=>{e.d(v,{h:()=>l});var c=e(4006);class l{static markAllAsDirtyAndTouched(i){i instanceof c.NI&&(i.markAsTouched(),i.markAsDirty(),i.updateValueAndValidity()),i instanceof c.cw&&Object.entries(i.controls).forEach(([n,t])=>{l.markAllAsDirtyAndTouched(t)}),i instanceof c.Oe&&i.controls.forEach(n=>{l.markAllAsDirtyAndTouched(n)})}static disableAllControls(i){i.disable(),i.updateValueAndValidity(),i instanceof c.NI&&i.disable(),i instanceof c.cw&&(i.disable(),Object.entries(i.controls).forEach(([n,t])=>{l.markAllAsDirtyAndTouched(t)})),i instanceof c.Oe&&(i.disable(),i.controls.forEach(n=>{l.markAllAsDirtyAndTouched(n)}))}}},611:(x,v,e)=>{e.d(v,{A:()=>c});class c{static getParentRoute(z,i){const n=z.split("/");for(let t=0;t<i;t++)n.pop();return n.join("/")}}},2687:(x,v,e)=>{e.d(v,{$aW:()=>S0,BCn:()=>N6,CmM:()=>K2,FDd:()=>$2,G_j:()=>b6,NBC:()=>p5,foy:()=>a1,nxn:()=>W2,u9C:()=>_});var _={prefix:"fas",iconName:"sort-down",icon:[320,512,["sort-desc"],"f0dd","M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]},W2={prefix:"fas",iconName:"filter-circle-dollar",icon:[576,512,["funnel-dollar"],"f662","M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm120.8-32.6c.6-.9 1.8-2.1 4.2-3.4c5.1-2.7 12.5-4.1 18.7-4c8.2 .1 17.1 1.8 26.4 4.1c8.6 2.1 17.3-3.1 19.4-11.7s-3.1-17.3-11.7-19.4c-5.6-1.4-11.6-2.7-17.9-3.7V288c0-8.8-7.2-16-16-16s-16 7.2-16 16v9.5c-6.1 1.2-12.3 3.2-18 6.3c-11.8 6.3-23 18.4-21.8 37.2c1 16 11.7 25.3 21.6 30.7c8.8 4.7 19.7 7.8 28.6 10.3l1.8 .5c10.3 2.9 17.9 5.2 23.2 8.3c4.5 2.7 4.7 4.2 4.7 5.6c.1 2.4-.5 3.7-1 4.5c-.6 1-1.8 2.2-4 3.3c-4.7 2.5-11.8 3.8-18.5 3.6c-9.5-.3-18.5-3.1-29.9-6.8c-1.9-.6-3.8-1.2-5.8-1.8c-8.4-2.6-17.4 2.1-20 10.5s2.1 17.4 10.5 20c1.6 .5 3.3 1 5 1.6l0 0 0 0c7 2.3 15.1 4.8 23.7 6.6v11.4c0 8.8 7.2 16 16 16s16-7.2 16-16V438.7c6.2-1.1 12.5-3.1 18.3-6.2c12.1-6.5 22.3-18.7 21.7-36.9c-.5-16.2-10.3-26.3-20.5-32.3c-9.4-5.6-21.2-8.9-30.5-11.5l-.2 0c-10.4-2.9-18.3-5.2-23.9-8.2c-4.8-2.6-4.8-4-4.8-4.5l0-.1c-.1-1.9 .3-2.9 .8-3.6z"]},K2={prefix:"fas",iconName:"sort",icon:[320,512,["unsorted"],"f0dc","M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"]},N6={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"]},b6={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},$2={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},a1={prefix:"fas",iconName:"sort-up",icon:[320,512,["sort-asc"],"f0de","M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},S0={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},p5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]}}}]);