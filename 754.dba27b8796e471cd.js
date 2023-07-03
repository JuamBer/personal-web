"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[754],{8754:(Ht,C,a)=>{a.r(C),a.d(C,{CertificateModule:()=>zt});var N=a(529),r=a(4006),$=a(2437),I=a(8122),R=a(3067),_=a(3631),x=a(5593),T=a(585),G=a(4247),D=a(2137),L=a(1493),y=a(2210),O=a(7913),b=a(1740),Y=a(3054),F=a(2665),z=a(5722),H=a(1765),K=a(8783),j=a(2453),B=a(2983),V=a(9605),S=a(6333),W=a(7921),X=a(355),P=a(7746),w=a(7871),f=a(3151),t=a(4650),E=a(2997),A=a(3416),q=a(805),M=a(7579),u=a(9300),k=a(8675),c=a(8426),tt=a(1392),p=a(5255),l=a(4363),ot=a(4121),d=a(3025),J=a(7681),m=a(4352),et=a(3926),v=a(6895);let it=(()=>{class e{constructor(){this.store=(0,t.f3M)(E.yh),this.confirmationSrv=(0,t.f3M)(q.YP),this.router=(0,t.f3M)(f.F0),this.translateSrv=(0,t.f3M)(A.sK),this.entities$=this.store.select(m.y.getAll),this.loading$=this.store.select(m.y.getLoading),this.count$=this.store.select(m.y.getCount),this.action$=this.store.select(m.y.getAction),this.tableConfig$=new M.x}ngOnInit(){this.store.dispatch(d.S.count()),this.store.select(ot.$.getOne).pipe((0,u.h)(o=>null!=o)).subscribe(o=>{this.translateSrv.use(o.acronym)}),this.translateSrv.onLangChange.pipe((0,k.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(o){this.store.dispatch(d.S.loadAll({payload:o}))}onTableEvent(o){switch(o.type){case c.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.CREATE}]);break;case c.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:p.g.VIEW,id:o.value.id}]);break;case c.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.UPDATE,id:o.value.id}]);break;case c.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(d.S.delete({id:o.value.id}))}})}}loadTableConfig(){const o=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificate.singular")})}),o.push({action:"view",icon:"pi pi-search-plus"}),o.push({action:"edit",icon:"pi pi-pencil"}),o.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...tt.$,fields:[{field:"image",label:this.translateSrv.instant("columns.image"),sort:!0,filter:!0,type:c.E7.IMAGE},{field:"name",label:this.translateSrv.instant("columns.name"),sort:!0,filter:!0,type:c.E7.TEXT},{field:"date",label:this.translateSrv.instant("columns.date"),sort:!0,filter:!0,type:c.E7.DATE},{field:"description",label:this.translateSrv.instant("columns.description"),sort:!0,filter:!0,type:c.E7.TEXT}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return J.Q}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-certificate-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(h){return n.onLazyLoadEvent(h)})("tableEvent",function(h){return n.onTableEvent(h)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&o&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+n.names.name(n.Naming.CAMEL_CASE,n.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,n.entities$))("loading",t.lcZ(7,9,n.loading$))("count",t.lcZ(8,11,n.count$))("config",t.lcZ(9,13,n.tableConfig$)))},dependencies:[f.lC,et.p,v.Ov,A.X$],changeDetection:0}),e})();var nt=a(457),Z=a(4004),g=a(2722),st=a(5684),rt=a(5698),U=a(7379),lt=a(6977),ct=a(611),pt=a(1843),dt=a(4044),mt=a(4308),ft=a(6528),ut=a(2868),gt=a(9366),ht=a(4021),vt=a(3570),Lt=a(4024),At=a(7525),Zt=a(4446),Ct=a(8452),xt=a(6222);function Tt(e,s){if(1&e&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function yt(e,s){if(1&e&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"p-calendar",15),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function bt(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"p-dropdown",17),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,i.companies$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,i.form.controls[o])))}}function St(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"p-dropdown",17),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,i.certificateTypes$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,i.form.controls[o])))}}function Et(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"p-dropdown",17),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,i.certificateGroups$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,i.form.controls[o])))}}function Mt(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function Jt(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function Ut(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function Qt(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function Nt(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function $t(e,s){if(1&e&&(t.TgZ(0,"div",16)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[o])))}}function It(e,s){if(1&e&&t._UZ(0,"img",21),2&e){const o=t.oxw(4);t.Q6J("src",o.form.controls.image.value,t.LSH)}}function Rt(e,s){if(1&e&&(t.TgZ(0,"div",18)(1,"span",11),t._UZ(2,"input",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()(),t.TgZ(11,"div",19),t.YNc(12,It,1,1,"img",20),t.qZA()()),2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,8,"columns."+o)," ",t.lcZ(6,10,i.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,12,t.lcZ(10,14,i.form.controls[o]))),t.xp6(4),t.Q6J("ngIf",i.form.controls.image.value)}}function _t(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.send())}),t.TgZ(1,"div",4),t.YNc(2,Tt,11,15,"div",5),t.YNc(3,yt,11,15,"div",5),t.YNc(4,bt,12,19,"div",6),t.YNc(5,St,12,19,"div",6),t.YNc(6,Et,12,19,"div",6),t.YNc(7,Mt,11,15,"div",6),t.YNc(8,Jt,11,15,"div",6),t.YNc(9,Ut,11,15,"div",6),t.YNc(10,Qt,11,15,"div",6),t.YNc(11,Nt,11,15,"div",6),t.YNc(12,$t,11,15,"div",6),t.YNc(13,Rt,13,16,"div",7),t.qZA(),t.TgZ(14,"app-entity-modal-buttons",8),t.NdJ("cancel",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.hide())})("submit",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.send())}),t.qZA(),t._UZ(15,"app-entity-modal-audit",9),t.ALo(16,"async"),t.qZA()}if(2&e){const o=s.appLet,n=t.oxw().appLet,i=t.oxw();t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","date"),t.xp6(1),t.Q6J("appLet","company"),t.xp6(1),t.Q6J("appLet","certificateType"),t.xp6(1),t.Q6J("appLet","certificateGroup"),t.xp6(1),t.Q6J("appLet","url"),t.xp6(1),t.Q6J("appLet","pdf"),t.xp6(1),t.Q6J("appLet","github"),t.xp6(1),t.Q6J("appLet","web"),t.xp6(1),t.Q6J("appLet","microsoftStore"),t.xp6(1),t.Q6J("appLet","playStore"),t.xp6(1),t.Q6J("appLet","image"),t.xp6(1),t.Q6J("loading",o)("form",i.form)("name",i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",o)("entity",t.lcZ(16,20,i.entity$))("modalMode",n)}}const Gt=function(){return{width:"100%",maxWidth:"40rem"}},Dt=function(e){return{name:e}};function Ot(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(i){t.CHM(o);const h=t.oxw();return t.KtG(h.visible=i)})("onHide",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,_t,17,22,"form",2),t.ALo(5,"async"),t.qZA()}if(2&e){const o=s.appLet,n=t.oxw();t.Akn(t.DdM(17,Gt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+o),t.VKq(18,Dt,t.lcZ(3,13,"tables."+n.names.name(n.Naming.CAMEL_CASE,n.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",n.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,n.loading$))}}const Yt=[{path:"",title:(e,s)=>"Juan S\xe1ez Garc\xeda | Certificate Types",component:it,children:[{path:"modal",title:(e,s)=>e.paramMap.get("id")?(0,nt.D)((0,t.f3M)(ht.S).getTitle(e.paramMap.get("id"))).pipe((0,Z.U)(o=>"Juan S\xe1ez Garc\xeda | Certificate | "+o.name)):"Juan S\xe1ez Garc\xeda | Certificate | New",component:(()=>{class e{constructor(){this.router=(0,t.f3M)(f.F0),this.route=(0,t.f3M)(f.gz),this.store=(0,t.f3M)(E.yh),this.fb=(0,t.f3M)(r.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[r.kI.required]),description:this.fb.control(void 0,[r.kI.required]),url:this.fb.control(void 0),image:this.fb.control(void 0),pdf:this.fb.control(void 0),date:this.fb.control(new Date,[r.kI.required]),github:this.fb.control(void 0),web:this.fb.control(void 0),microsoftStore:this.fb.control(void 0),playStore:this.fb.control(void 0),company:this.fb.control(void 0,[r.kI.required]),certificateType:this.fb.control(void 0,[r.kI.required]),certificateGroup:this.fb.control(void 0,[r.kI.required])}),this.unsubscribe$=new M.x,this.params$=this.route.params.pipe((0,g.R)(this.unsubscribe$),(0,Z.U)(o=>o)),this.loading$=this.store.select(m.y.getLoading).pipe((0,g.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,g.R)(this.unsubscribe$),(0,Z.U)(o=>p.g[o.modalMode])),this.entity$=this.store.select(m.y.getOne).pipe((0,g.R)(this.unsubscribe$),(0,u.h)(o=>!!o)),this.action$=this.store.select(m.y.getAction).pipe((0,g.R)(this.unsubscribe$),(0,st.T)(1),(0,u.h)(o=>o.type===U.Us.CREATE_ONE&&o.status===U.M4.SUCCESS)),this.certificateTypes$=this.store.select(ft.R.getAll),this.certificateGroups$=this.store.select(dt.$.getAll),this.companies$=this.store.select(gt.K.getAll)}ngOnInit(){this.store.dispatch(pt.t.loadAll({})),this.store.dispatch(mt.A.loadAll({})),this.store.dispatch(ut._.loadAll({})),this.params$.pipe((0,u.h)(o=>!!o.id)).subscribe(o=>this.store.dispatch(d.S.loadOne({id:o.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,u.h)(o=>o===p.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(o=>{this.form.controls.id||this.form.addControl("id",this.fb.control(o.id,[r.kI.required])),this.form.patchValue({id:o.id,name:o.name,description:o.description,url:o.url,image:o.image,pdf:o.pdf,date:new Date(o.date),github:o.github,web:o.web,microsoftStore:o.microsoftStore,playStore:o.playStore,company:o.company,certificateType:o.certificateType,certificateGroup:o.certificateGroup})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(d.S.unload()),this.router.navigate([ct.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?lt.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,rt.q)(1)).subscribe(o=>{switch(o){case p.g.CREATE:this.store.dispatch(d.S.create({payload:this.form.value}));break;case p.g.UPDATE:this.store.dispatch(d.S.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return J.Q}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-certificate-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-4 lg:col-4 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"],["appLoading","",1,"xs:col-12","md:col-4","lg:col-4","mt-3",3,"appIsLoading"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[1,"w-full","mt-3"],["class","w-full","alt","image",3,"src",4,"ngIf"],["alt","image",1,"w-full",3,"src"]],template:function(o,n){1&o&&(t.YNc(0,Ot,6,20,"p-dialog",0),t.ALo(1,"async")),2&o&&t.Q6J("appLet",t.lcZ(1,1,n.modalMode$))},dependencies:[v.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,vt.T,Lt.e,L.V,T.f,y.Lt,b.o,At.Z,Zt.D,v.Ov,v.i8,A.X$,Ct.J,xt.F],changeDetection:0}),e})()}]}];let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(Yt),f.Bz]}),e})();var Ft=a(5906);let zt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[B.S,Q,N.JF,r.u5,r.UX,j.EV,x.hJ,F.O,L.S,H.U$,G.d,D.D,_.WN,x.hJ,T._8,L.S,y.kW,b.j,O.Iu,Y.A,K.LU,z.q4,V.y,W.I,P.y,X.o,w.n,S.D,S.D,R.G,I.K,$.D,Ft.w,Q]}),e})()}}]);