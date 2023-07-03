"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[93],{93:(At,b,n)=>{n.r(b),n.d(b,{PositionModule:()=>Lt});var x=n(2437),M=n(8122),Z=n(3067),S=n(2983),$=n(9605),N=n(6333),J=n(6975),P=n(7921),U=n(7871),u=n(3151),t=n(4650),I=n(4450),y=n(2997),v=n(3416),R=n(805),C=n(7579),g=n(9300),Q=n(8675),l=n(8426),d=n(5255),r=n(4363),D=n(4121),m=n(3369),E=n(8128),c=n(2161),G=n(3926),L=n(6895);let Y=(()=>{class e{constructor(){this.store=(0,t.f3M)(y.yh),this.confirmationSrv=(0,t.f3M)(R.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(v.sK),this.entities$=this.store.select(c.Y.getAll),this.loading$=this.store.select(c.Y.getLoading),this.count$=this.store.select(c.Y.getCount),this.action$=this.store.select(c.Y.getAction),this.tableConfig$=new C.x}ngOnInit(){this.store.dispatch(m.y.count()),this.store.select(D.$.getOne).pipe((0,g.h)(o=>null!=o)).subscribe(o=>{this.translateSrv.use(o.acronym)}),this.translateSrv.onLangChange.pipe((0,Q.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(o){this.store.dispatch(m.y.loadAll({payload:o}))}onTableEvent(o){switch(o.type){case l.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case l.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:o.value.id}]);break;case l.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:o.value.id}]);break;case l.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(m.y.delete({id:o.value.id}))}})}}loadTableConfig(){const o=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),o.push({action:"view",icon:"pi pi-search-plus"}),o.push({action:"edit",icon:"pi pi-pencil"}),o.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...I.N.defaultGenericTableConfig,fields:[{field:"name",label:"Name",type:l.E7.TEXT,filter:!0,sort:!0},{field:"description",label:"description",type:l.E7.TEXT,filter:!0,sort:!0,tooltip:a=>a.description},{field:"dateFrom",label:"From Date",type:l.E7.DATE,filter:!0,sort:!0},{field:"dateTo",label:"To Date",type:l.E7.DATE,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:l.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:l.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:l.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:l.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return E.p}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-position-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(f){return i.onLazyLoadEvent(f)})("tableEvent",function(f){return i.onTableEvent(f)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&o&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,i.entities$))("loading",t.lcZ(7,9,i.loading$))("count",t.lcZ(8,11,i.count$))("config",t.lcZ(9,13,i.tableConfig$)))},dependencies:[u.lC,G.p,L.Ov,v.X$],changeDetection:0}),e})();var p=n(4006),O=n(457),A=n(4004),h=n(2722),z=n(5684),K=n(5698),T=n(7379),H=n(6977),B=n(611),j=n(2868),V=n(9366),W=n(7121),X=n(3570),w=n(4024),_=n(585),q=n(1740),k=n(2210),tt=n(3054),ot=n(1493),nt=n(7525),et=n(4446),it=n(8452),at=n(6222);function st(e,s){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,a.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[o])))}}function rt(e,s){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"p-dropdown",14),t.ALo(3,"async"),t.TgZ(4,"label",12),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",13),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,a.companies$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,a.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,a.form.controls[o])))}}function lt(e,s){if(1&e&&(t.TgZ(0,"div",15)(1,"span",10),t._UZ(2,"textarea",16),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",o)("formControlName",o),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,a.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[o])))}}function pt(e,s){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"p-calendar",17),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,a.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[o])))}}function dt(e,s){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"p-calendar",17),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,a.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[o])))}}function mt(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(o);const a=t.oxw(2);return t.KtG(a.send())}),t.TgZ(1,"div",4),t.YNc(2,st,11,15,"div",5),t.YNc(3,rt,12,19,"div",5),t.YNc(4,lt,11,15,"div",6),t.YNc(5,pt,11,15,"div",5),t.YNc(6,dt,11,15,"div",5),t.qZA(),t.TgZ(7,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(o);const a=t.oxw(2);return t.KtG(a.hide())})("submit",function(){t.CHM(o);const a=t.oxw(2);return t.KtG(a.send())}),t.qZA(),t._UZ(8,"app-entity-modal-audit",8),t.ALo(9,"async"),t.qZA()}if(2&e){const o=s.appLet,i=t.oxw().appLet,a=t.oxw();t.Q6J("formGroup",a.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","company"),t.xp6(1),t.Q6J("appLet","description"),t.xp6(1),t.Q6J("appLet","dateFrom"),t.xp6(1),t.Q6J("appLet","dateTo"),t.xp6(1),t.Q6J("loading",o)("form",a.form)("name",a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR))("modalMode",i),t.xp6(1),t.Q6J("loading",o)("entity",t.lcZ(9,13,a.entity$))("modalMode",i)}}const ct=function(){return{width:"100%",maxWidth:"40rem"}},ut=function(e){return{name:e}};function gt(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(a){t.CHM(o);const f=t.oxw();return t.KtG(f.visible=a)})("onHide",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,mt,10,15,"form",2),t.ALo(5,"async"),t.qZA()}if(2&e){const o=s.appLet,i=t.oxw();t.Akn(t.DdM(17,ct)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+o),t.VKq(18,ut,t.lcZ(3,13,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,i.loading$))}}const ht=[{path:"",title:(e,s)=>"Juan S\xe1ez Garc\xeda | Positions",component:Y,children:[{path:"modal",title:(e,s)=>e.paramMap.get("id")?(0,O.D)((0,t.f3M)(W.e).getTitle(e.paramMap.get("id"))).pipe((0,A.U)(o=>"Juan S\xe1ez Garc\xeda | Positions | "+o.name)):"Juan S\xe1ez Garc\xeda | Positions | New",component:(()=>{class e{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(y.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[p.kI.required]),company:this.fb.control(void 0,[p.kI.required]),description:this.fb.control(void 0,[p.kI.required]),dateFrom:this.fb.control(void 0,[p.kI.required]),dateTo:this.fb.control(void 0)}),this.unsubscribe$=new C.x,this.params$=this.route.params.pipe((0,h.R)(this.unsubscribe$),(0,A.U)(o=>o)),this.loading$=this.store.select(c.Y.getLoading).pipe((0,h.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,h.R)(this.unsubscribe$),(0,A.U)(o=>d.g[o.modalMode])),this.entity$=this.store.select(c.Y.getOne).pipe((0,h.R)(this.unsubscribe$),(0,g.h)(o=>!!o)),this.action$=this.store.select(c.Y.getAction).pipe((0,h.R)(this.unsubscribe$),(0,z.T)(1),(0,g.h)(o=>o.type===T.Us.CREATE_ONE&&o.status===T.M4.SUCCESS)),this.companies$=this.store.select(V.K.getAll)}ngOnInit(){this.store.dispatch(j._.loadAll({})),this.params$.pipe((0,g.h)(o=>!!o.id)).subscribe(o=>this.store.dispatch(m.y.loadOne({id:o.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,g.h)(o=>o===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(o=>{this.form.controls.id||this.form.addControl("id",this.fb.control(o.id,[p.kI.required])),this.form.patchValue({id:o.id,name:o.name,description:o.description,dateFrom:new Date(o.dateFrom),dateTo:new Date(o.dateTo),company:o.company})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(m.y.unload()),this.router.navigate([B.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?H.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,K.q)(1)).subscribe(o=>{switch(o){case d.g.CREATE:this.store.dispatch(m.y.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(m.y.update({payload:this.form.value}))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return E.p}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-position-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],["pInputTextarea","",1,"p-inputtext-sm",3,"id","formControlName"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"]],template:function(o,i){1&o&&(t.YNc(0,gt,6,20,"p-dialog",0),t.ALo(1,"async")),2&o&&t.Q6J("appLet",t.lcZ(1,1,i.modalMode$))},dependencies:[p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,X.T,w.e,_.f,q.o,k.Lt,tt.g,ot.V,nt.Z,et.D,L.Ov,L.i8,v.X$,it.J,at.F],changeDetection:0}),e})()}]}];let ft=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(ht),u.Bz]}),e})();var vt=n(9997);let Lt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[S.S,ft,J.g,$.y,vt.K,P.I,Z.G,M.K,x.D,U.n,N.D]}),e})()}}]);