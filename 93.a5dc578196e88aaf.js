"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[93],{93:(Tt,b,n)=>{n.r(b),n.d(b,{PositionModule:()=>bt});var S=n(2437),Z=n(8122),x=n(3067),$=n(5918),I=n(2983),N=n(9605),P=n(6333),J=n(6975),U=n(7921),R=n(7871),h=n(5213),t=n(4650),T=n(2997),L=n(3416),Q=n(805),E=n(7579),g=n(9300),D=n(8675),d=n(8426),G=n(1392),m=n(5255),l=n(4363),F=n(4121),c=n(3369),M=n(8128),u=n(2161),Y=n(3926),A=n(6895);let z=(()=>{class a{constructor(){this.store=(0,t.f3M)(T.yh),this.confirmationSrv=(0,t.f3M)(Q.YP),this.router=(0,t.f3M)(h.F0),this.translateSrv=(0,t.f3M)(L.sK),this.entities$=this.store.select(u.Y.getAll),this.loading$=this.store.select(u.Y.getLoading),this.count$=this.store.select(u.Y.getCount),this.action$=this.store.select(u.Y.getAction),this.tableConfig$=new E.x}ngOnInit(){this.store.dispatch(c.y.count()),this.store.select(F.$.getOne).pipe((0,g.h)(o=>null!=o)).subscribe(o=>{this.translateSrv.use(o.acronym)}),this.translateSrv.onLangChange.pipe((0,D.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(o){this.store.dispatch(c.y.loadAll({payload:o}))}onTableEvent(o){switch(o.type){case d.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.CREATE}]);break;case d.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:m.g.VIEW,id:o.value.id}]);break;case d.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.UPDATE,id:o.value.id}]);break;case d.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c.y.delete({id:o.value.id}))}})}}loadTableConfig(){const o=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),o.push({action:"view",icon:"pi pi-search-plus"}),o.push({action:"edit",icon:"pi pi-pencil"}),o.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...G.$,fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:d.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:d.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"dateFrom",label:"From Date",type:d.E7.DATE,filter:!0,sort:!0},{field:"dateTo",label:"To Date",type:d.E7.DATE,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return M.p}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-position-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(r){return s.onLazyLoadEvent(r)})("tableEvent",function(r){return s.onTableEvent(r)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&o&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,s.entities$))("loading",t.lcZ(7,9,s.loading$))("count",t.lcZ(8,11,s.count$))("config",t.lcZ(9,13,s.tableConfig$)))},dependencies:[h.lC,Y.p,A.Ov,L.X$],changeDetection:0}),a})();var p=n(4006),K=n(457),H=n(1135),y=n(4004),f=n(2722),B=n(5684),V=n(5698),W=n(7395),C=n(7379),j=n(6977),X=n(611),w=n(2868),_=n(9366),q=n(7121),k=n(3570),tt=n(4024),ot=n(585),nt=n(2210),at=n(1493),st=n(7525),et=n(4446),it=n(4844),rt=n(8452),lt=n(6222);function dt(a,i){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw().appLet,r=t.oxw();let v;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",r.showErrors$)("type",r.InputTranslationsType.INPUT)("translations",null==(v=t.lcZ(2,7,r.entity$))?null:v.nameTranslations)("disabled",e===r.ModalMode.VIEW)("form",r.form.controls[o])("label",t.lcZ(3,9,"columns.name"))}}function pt(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-dropdown",12),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,e.companies$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,e.form.controls[o])))}}function mt(a,i){if(1&a&&(t.TgZ(0,"div",15),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw().appLet,r=t.oxw();let v;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",r.showErrors$)("type",r.InputTranslationsType.TEXTAREA)("translations",null==(v=t.lcZ(2,7,r.entity$))?null:v.descriptionTranslations)("disabled",e===r.ModalMode.VIEW)("form",r.form.controls[o])("label",t.lcZ(3,9,"columns.description"))}}function ct(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-calendar",16),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function ut(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-calendar",16),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function ht(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.send())}),t.TgZ(1,"div",4),t.YNc(2,dt,4,11,"div",5),t.YNc(3,pt,12,19,"div",5),t.YNc(4,mt,4,11,"div",6),t.YNc(5,ct,11,15,"div",5),t.YNc(6,ut,11,15,"div",5),t.qZA(),t.TgZ(7,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.hide())})("submit",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.send())}),t.qZA(),t._UZ(8,"app-entity-modal-audit",8),t.ALo(9,"async"),t.qZA()}if(2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","company"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("appLet","dateFrom"),t.xp6(1),t.Q6J("appLet","dateTo"),t.xp6(1),t.Q6J("loading",o)("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",s),t.xp6(1),t.Q6J("loading",o)("entity",t.lcZ(9,13,e.entity$))("modalMode",s)}}const gt=function(){return{width:"100%",maxWidth:"40rem"}},ft=function(a){return{name:a}};function vt(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(e){t.CHM(o);const r=t.oxw();return t.KtG(r.visible=e)})("onHide",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,ht,10,15,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const o=i.appLet,s=t.oxw();t.Akn(t.DdM(17,gt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+o),t.VKq(18,ft,t.lcZ(3,13,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",s.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,s.loading$))}}const Lt=[{path:"",title:(a,i)=>"Juan S\xe1ez Garc\xeda | Positions",component:z,children:[{path:"modal",title:(a,i)=>a.paramMap.get("id")?(0,K.D)((0,t.f3M)(q.e).getTitle(a.paramMap.get("id"))).pipe((0,y.U)(o=>"Juan S\xe1ez Garc\xeda | Positions | ")):"Juan S\xe1ez Garc\xeda | Positions | New",component:(()=>{class a{constructor(){this.router=(0,t.f3M)(h.F0),this.route=(0,t.f3M)(h.gz),this.store=(0,t.f3M)(T.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.group({nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([]),company:this.fb.control(void 0,[p.kI.required]),importance:this.fb.control(0,[p.kI.required,p.kI.min(0),p.kI.max(5)]),dateFrom:this.fb.control(void 0,[p.kI.required]),dateTo:this.fb.control(void 0)}),this.unsubscribe$=new E.x,this.params$=this.route.params.pipe((0,f.R)(this.unsubscribe$),(0,y.U)(o=>o)),this.loading$=this.store.select(u.Y.getLoading).pipe((0,f.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,f.R)(this.unsubscribe$),(0,y.U)(o=>m.g[o.modalMode])),this.entity$=this.store.select(u.Y.getOne).pipe((0,f.R)(this.unsubscribe$),(0,g.h)(o=>!!o)),this.action$=this.store.select(u.Y.getAction).pipe((0,f.R)(this.unsubscribe$),(0,B.T)(1),(0,g.h)(o=>o.type===C.Us.CREATE_ONE&&o.status===C.M4.SUCCESS)),this.showErrors$=new H.X(!1),this.companies$=this.store.select(_.K.getAll)}ngOnInit(){this.store.dispatch(w._.loadAll({})),this.params$.pipe((0,g.h)(o=>!!o.id)).subscribe(o=>this.store.dispatch(c.y.loadOne({id:o.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,g.h)(o=>o===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(o=>{this.form.controls.id||this.form.addControl("id",this.fb.control(o.id,[p.kI.required])),this.form.patchValue({id:o.id,nameTranslations:o.nameTranslations,descriptionTranslations:o.descriptionTranslations,importance:o.importance,dateFrom:new Date(o.dateFrom),dateTo:new Date(o.dateTo),company:o.company})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(c.y.unload()),this.router.navigate([X.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(j.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,V.q)(1)).subscribe(o=>{switch(o){case m.g.CREATE:this.store.dispatch(c.y.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(c.y.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return M.p}get ModalMode(){return m.g}get InputTranslationsType(){return W.A}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-position-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"p-float-label"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"]],template:function(o,s){1&o&&(t.YNc(0,vt,6,20,"p-dialog",0),t.ALo(1,"async")),2&o&&t.Q6J("appLet",t.lcZ(1,1,s.modalMode$))},dependencies:[p._Y,p.JJ,p.JL,p.sg,p.u,k.T,tt.e,ot.f,nt.Lt,at.V,st.Z,et.D,it.s,A.Ov,A.i8,L.X$,rt.J,lt.F],changeDetection:0}),a})()}]}];let At=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(Lt),h.Bz]}),a})();var yt=n(9997);let bt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[I.S,At,J.g,N.y,yt.K,U.I,x.G,Z.K,S.D,R.n,P.D,$.H]}),a})()}}]);