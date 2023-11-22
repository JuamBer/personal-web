"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[754],{8754:(io,b,n)=>{n.r(b),n.d(b,{CertificateModule:()=>ao});var O=n(529),c=n(4006),D=n(2437),G=n(8122),Y=n(3067),u=n(6895),w=n(3631),S=n(5593),$=n(585),F=n(4247),j=n(2137),T=n(1493),J=n(2210),K=n(7913),U=n(1740),z=n(3054),V=n(2665),B=n(5722),H=n(1765),P=n(8783),W=n(2453),X=n(5918),q=n(2983),k=n(9605),N=n(6333),tt=n(7921),ot=n(355),at=n(7746),nt=n(7871),h=n(3151),t=n(4650),x=n(2997),_=n(3416),Q=n(805),v=n(9300),Z=n(3900),L=n(4004),I=n(1135),et=n(8675),y=n(5041),p=n(8426),it=n(1392),m=n(5255),r=n(4363),M=n(4121),f=n(3025),C=n(7681),g=n(4352),st=n(3926);let lt=(()=>{class a{constructor(){this.store=(0,t.f3M)(x.yh),this.confirmationSrv=(0,t.f3M)(Q.YP),this.router=(0,t.f3M)(h.F0),this.translateSrv=(0,t.f3M)(_.sK),this.titleCasePipe=(0,t.f3M)(u.rS),this.entities$=this.store.select(g.y.getAll),this.loading$=this.store.select(g.y.getLoading),this.count$=this.store.select(g.y.getCount),this.action$=this.store.select(g.y.getAction),this.tableConfig$=new I.X(void 0)}ngOnInit(){this.store.dispatch(f.S.count()),this.translateSrv.onLangChange.pipe((0,et.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(o){this.store.dispatch(f.S.loadAll({payload:o}))}onTableEvent(o){switch(o.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:m.g.VIEW,id:o.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.UPDATE,id:o.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(f.S.delete({id:o.value.id}))}})}}loadTableConfig(){const o=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificate.singular")})}),o.push({action:"view",icon:"pi pi-search-plus"}),o.push({action:"edit",icon:"pi pi-pencil"}),o.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...it.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`)),fields:[{field:"image",label:this.translateSrv.instant("columns.image"),sort:!0,filter:!0,type:p.E7.IMAGE},{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"date",label:this.translateSrv.instant("columns.date"),sort:!0,filter:!0,type:p.E7.DATE}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return C.Q}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-list"]],decls:8,vars:12,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(l){return i.onLazyLoadEvent(l)})("tableEvent",function(l){return i.onTableEvent(l)}),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.ALo(6,"async"),t.qZA()()(),t._UZ(7,"router-outlet")),2&o&&(t.xp6(2),t.Q6J("entities",t.lcZ(3,4,i.entities$))("loading",t.lcZ(4,6,i.loading$))("count",t.lcZ(5,8,i.count$))("config",t.lcZ(6,10,i.tableConfig$)))},dependencies:[h.lC,st.p,u.Ov],changeDetection:0}),a})();var ct=n(457),pt=n(7579),A=n(2722),dt=n(5684),mt=n(5698),ft=n(7395),E=n(7379),gt=n(6977),ut=n(611),ht=n(5924),vt=n(1843),Lt=n(4044),At=n(4308),xt=n(6528),_t=n(2868),Ct=n(9366),Tt=n(4021),Zt=n(3570),yt=n(4024),Mt=n(4844),Et=n(7525),bt=n(4446),St=n(8452),$t=n(6222);function Jt(a,s){if(1&a&&(t.TgZ(0,"div",12),t._UZ(1,"app-input-translations",13),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw().appLet,l=t.oxw(2);let d;t.Q6J("appIsLoading",i),t.xp6(1),t.Q6J("showErrors",l.showErrors$)("type",l.InputTranslationsType.INPUT)("translations",null==(d=t.lcZ(2,7,l.entity$))?null:d.nameTranslations)("disabled",e===l.ModalMode.VIEW)("form",l.form.controls[o])("label",t.lcZ(3,9,"columns.name"))}}function Ut(a,s){if(1&a&&(t.TgZ(0,"div",14)(1,"span",15),t._UZ(2,"p-calendar",16),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function Nt(a,s){if(1&a&&(t.TgZ(0,"div",19),t._UZ(1,"app-input-translations",13),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw().appLet,l=t.oxw(2);let d;t.Q6J("appIsLoading",i),t.xp6(1),t.Q6J("showErrors",l.showErrors$)("type",l.InputTranslationsType.TEXTAREA)("translations",null==(d=t.lcZ(2,7,l.entity$))?null:d.descriptionTranslations)("disabled",e===l.ModalMode.VIEW)("form",l.form.controls[o])("label",t.lcZ(3,9,"columns.description"))}}function Qt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"p-dropdown",21),t.ALo(3,"async"),t.TgZ(4,"label",17),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",18),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,e.companies$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,e.form.controls[o])))}}function It(a,s){if(1&a&&t._uU(0),2&a){const o=s.$implicit,i=t.oxw(4).appLet,e=t.oxw();t.hij(" ",e.getTranslation(i.acronym,o.nameTranslations)," ")}}function Rt(a,s){if(1&a&&t._uU(0),2&a){const o=s.$implicit,i=t.oxw(4).appLet,e=t.oxw();t.hij(" ",e.getTranslation(i.acronym,o.nameTranslations)," ")}}function Ot(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15)(2,"p-dropdown",22),t.ALo(3,"async"),t.YNc(4,It,1,1,"ng-template",23),t.YNc(5,Rt,1,1,"ng-template",24),t.qZA(),t.TgZ(6,"label",17),t._uU(7),t.ALo(8,"translate"),t.ALo(9,"isRequired"),t.TgZ(10,"span",18),t._uU(11),t.ALo(12,"async"),t.ALo(13,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,8,e.certificateTypes$))("formControlName",o),t.xp6(4),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(8,10,"tables."+o+".singular")," ",t.lcZ(9,12,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(12,14,t.lcZ(13,16,e.form.controls[o])))}}function Dt(a,s){if(1&a&&t._uU(0),2&a){const o=s.$implicit,i=t.oxw(4).appLet,e=t.oxw();t.hij(" ",e.getTranslation(i.acronym,o.nameTranslations)," ")}}function Gt(a,s){if(1&a&&t._uU(0),2&a){const o=s.$implicit,i=t.oxw(4).appLet,e=t.oxw();t.hij(" ",e.getTranslation(i.acronym,o.nameTranslations)," ")}}function Yt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15)(2,"p-dropdown",22),t.ALo(3,"async"),t.YNc(4,Dt,1,1,"ng-template",23),t.YNc(5,Gt,1,1,"ng-template",24),t.qZA(),t.TgZ(6,"label",17),t._uU(7),t.ALo(8,"translate"),t.ALo(9,"isRequired"),t.TgZ(10,"span",18),t._uU(11),t.ALo(12,"async"),t.ALo(13,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,8,e.certificateGroups$))("formControlName",o),t.xp6(4),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(8,10,"tables."+o+".singular")," ",t.lcZ(9,12,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(12,14,t.lcZ(13,16,e.form.controls[o])))}}function wt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function Ft(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function jt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function Kt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function zt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function Vt(a,s){if(1&a&&(t.TgZ(0,"div",20)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function Bt(a,s){if(1&a&&t._UZ(0,"img",28),2&a){const o=t.oxw(5);t.Q6J("src",o.form.controls.image.value,t.LSH)}}function Ht(a,s){if(1&a&&(t.TgZ(0,"div",19)(1,"span",15),t._UZ(2,"input",25),t.TgZ(3,"label",17),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",18),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()(),t.TgZ(11,"div",26),t.YNc(12,Bt,1,1,"img",27),t.qZA()()()),2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(3);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,8,"columns."+o)," ",t.lcZ(6,10,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,12,t.lcZ(10,14,e.form.controls[o]))),t.xp6(4),t.Q6J("ngIf",e.form.controls.image.value)}}function Pt(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"form",4)(1,"div",5),t.YNc(2,Jt,4,11,"div",6),t.YNc(3,Ut,11,15,"div",7),t.YNc(4,Nt,4,11,"div",8),t.YNc(5,Qt,12,19,"div",9),t.YNc(6,Ot,14,18,"div",9),t.YNc(7,Yt,14,18,"div",9),t.YNc(8,wt,11,15,"div",9),t.YNc(9,Ft,11,15,"div",9),t.YNc(10,jt,11,15,"div",9),t.YNc(11,Kt,11,15,"div",9),t.YNc(12,zt,11,15,"div",9),t.YNc(13,Vt,11,15,"div",9),t.YNc(14,Ht,13,16,"div",8),t.qZA(),t.TgZ(15,"app-entity-modal-buttons",10),t.NdJ("cancel",function(){t.CHM(o);const e=t.oxw(3);return t.KtG(e.hide())})("submit",function(){t.CHM(o);const e=t.oxw(3);return t.KtG(e.send())}),t.qZA(),t._UZ(16,"app-entity-modal-audit",11),t.ALo(17,"async"),t.qZA()}if(2&a){const o=s.appLet,i=t.oxw().appLet,e=t.oxw(2);t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","date"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("appLet","company"),t.xp6(1),t.Q6J("appLet","certificateType"),t.xp6(1),t.Q6J("appLet","certificateGroup"),t.xp6(1),t.Q6J("appLet","url"),t.xp6(1),t.Q6J("appLet","pdf"),t.xp6(1),t.Q6J("appLet","github"),t.xp6(1),t.Q6J("appLet","web"),t.xp6(1),t.Q6J("appLet","microsoftStore"),t.xp6(1),t.Q6J("appLet","playStore"),t.xp6(1),t.Q6J("appLet","image"),t.xp6(1),t.Q6J("loading",o)("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",i),t.xp6(1),t.Q6J("loading",o)("entity",t.lcZ(17,21,e.entity$))("modalMode",i)}}const Wt=function(){return{width:"100%",maxWidth:"40rem"}},Xt=function(a){return{name:a}};function qt(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"p-dialog",2),t.NdJ("visibleChange",function(e){t.CHM(o);const l=t.oxw(2);return t.KtG(l.visible=e)})("onHide",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Pt,18,23,"form",3),t.ALo(5,"async"),t.qZA()}if(2&a){const o=s.appLet,i=t.oxw(2);t.Akn(t.DdM(17,Wt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+o),t.VKq(18,Xt,t.lcZ(3,13,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,i.loading$))}}function kt(a,s){if(1&a&&(t.ynx(0),t.YNc(1,qt,6,20,"p-dialog",1),t.ALo(2,"async"),t.BQk()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,o.modalMode$))}}const to=[{path:"",title:(a,s)=>{const o=(0,t.f3M)(x.yh),i=(0,t.f3M)(_.sK);return o.select(M.$.getOne).pipe((0,v.h)(e=>!!e),(0,Z.w)(()=>i.get(`tables.${C.Q.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`).pipe((0,L.U)(e=>`${y.R} | ${e}`))))},component:lt,children:[{path:"modal",title:(a,s)=>{const o=(0,t.f3M)(x.yh),i=(0,t.f3M)(Tt.S),e=(0,t.f3M)(_.sK);return o.select(M.$.getOne).pipe((0,v.h)(l=>!!l),(0,Z.w)(l=>e.get(`tables.${C.Q.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,Z.w)(d=>(0,ct.D)(i.getTitle(a.paramMap.get("id"))).pipe((0,L.U)(no=>`${y.R} | ${d} | ${no.nameTranslations.find(eo=>eo.language===l.acronym).value}`))):(0,L.U)(d=>`${y.R} | ${d} | ${e.instant("buttons.new",{name:""})}`))))},component:(()=>{class a{constructor(){this.router=(0,t.f3M)(h.F0),this.route=(0,t.f3M)(h.gz),this.store=(0,t.f3M)(x.yh),this.fb=(0,t.f3M)(c.qu),this.visible=!0,this.form=this.fb.group({nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([]),url:this.fb.control(void 0),image:this.fb.control(void 0),pdf:this.fb.control(void 0),date:this.fb.control(new Date,[c.kI.required]),github:this.fb.control(void 0),web:this.fb.control(void 0),microsoftStore:this.fb.control(void 0),playStore:this.fb.control(void 0),company:this.fb.control(void 0,[c.kI.required]),certificateType:this.fb.control(void 0,[c.kI.required]),certificateGroup:this.fb.control(void 0,[c.kI.required])}),this.unsubscribe$=new pt.x,this.params$=this.route.params.pipe((0,A.R)(this.unsubscribe$),(0,L.U)(o=>o)),this.loading$=this.store.select(g.y.getLoading).pipe((0,A.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,A.R)(this.unsubscribe$),(0,L.U)(o=>m.g[o.modalMode])),this.entity$=this.store.select(g.y.getOne).pipe((0,A.R)(this.unsubscribe$),(0,v.h)(o=>!!o)),this.action$=this.store.select(g.y.getAction).pipe((0,A.R)(this.unsubscribe$),(0,dt.T)(1),(0,v.h)(o=>(o.type===E.Us.CREATE_ONE||o.type===E.Us.UPDATE_ONE)&&o.status===E.M4.SUCCESS)),this.showErrors$=new I.X(!1),this.language$=this.store.select(M.$.getOne),this.certificateTypes$=this.store.select(xt.R.getAll),this.certificateGroups$=this.store.select(Lt.$.getAll),this.companies$=this.store.select(Ct.K.getAll)}ngOnInit(){this.store.dispatch(vt.t.loadAll({})),this.store.dispatch(At.A.loadAll({})),this.store.dispatch(_t._.loadAll({})),this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,v.h)(o=>!!o.id)).subscribe(o=>this.store.dispatch(f.S.loadOne({id:o.id}))),this.modalMode$.pipe((0,v.h)(o=>o===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(o=>{this.form.controls.id||this.form.addControl("id",this.fb.control(o.id,[c.kI.required])),this.form.patchValue({id:o.id,nameTranslations:o.nameTranslations,descriptionTranslations:o.descriptionTranslations,url:o.url,image:o.image,pdf:o.pdf,date:new Date(o.date),github:o.github,web:o.web,microsoftStore:o.microsoftStore,playStore:o.playStore,company:o.company,certificateType:o.certificateType,certificateGroup:o.certificateGroup})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(f.S.unload()),this.router.navigate([ut.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(gt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,mt.q)(1)).subscribe(o=>{switch(o){case m.g.CREATE:this.store.dispatch(f.S.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(f.S.update({payload:this.form.value}))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return C.Q}get InputTranslationsType(){return ft.A}get ModalMode(){return m.g}get getTranslation(){return ht.V.getTranslation}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-modal"]],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup",4,"appLet"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-4 lg:col-4 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col6","lg:col-6","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],["appLoading","",1,"xs:col-12","md:col-4","lg:col-4","mt-3",3,"appIsLoading"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",3,"autoDisplayFirst","options","formControlName","filter"],["dataKey","id","appendTo","body",3,"autoDisplayFirst","options","formControlName"],["pTemplate","selectedItem"],["pTemplate","item"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[1,"w-full","mt-3"],["class","w-full","alt","image",3,"src",4,"ngIf"],["alt","image",1,"w-full",3,"src"]],template:function(o,i){1&o&&(t.YNc(0,kt,3,3,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("appLet",t.lcZ(1,1,i.language$))},dependencies:[u.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,Zt.T,yt.e,Mt.s,Q.jx,T.V,$.f,J.Lt,U.o,Et.Z,bt.D,u.Ov,u.i8,_.X$,St.J,$t.F],changeDetection:0}),a})()}]}];let R=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(to),h.Bz]}),a})();var oo=n(5906);let ao=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[u.rS],imports:[q.S,R,O.JF,c.u5,c.UX,X.H,W.EV,S.hJ,V.O,T.S,H.U$,F.d,j.D,w.WN,S.hJ,$._8,T.S,J.kW,U.j,K.Iu,z.A,P.LU,B.q4,k.y,tt.I,at.y,ot.o,nt.n,N.D,N.D,Y.G,G.K,D.D,oo.w,R]}),a})()}}]);