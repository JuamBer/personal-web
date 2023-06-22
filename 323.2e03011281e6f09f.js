"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[323],{7323:(Et,L,n)=>{n.r(L),n.d(L,{SkillTypeModule:()=>Ct});var Z=n(529),r=n(4006),J=n(2437),N=n(8122),U=n(3067),R=n(5180),I=n(2694),G=n(2983),D=n(9605),Q=n(6333),z=n(8553),O=n(3631),b=n(5593),F=n(585),H=n(4247),j=n(2137),f=n(1493),K=n(2210),V=n(7913),A=n(1740),C=n(3054),W=n(2665),B=n(5722),X=n(1765),P=n(8783),Y=n(2453),u=n(550),t=n(4650),p=n(8426),d=n(4188),l=n(4363),k=n(4121),w=n(4450),E=n(2997),y=n(3416),q=n(805),M=n(7579),g=n(9300),_=n(8675),m=n(8898),x=n(2803),c=n(5776),tt=n(5818),S=n(6895);let nt=(()=>{class o{constructor(){this.store=(0,t.f3M)(E.yh),this.confirmationSrv=(0,t.f3M)(q.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(y.sK),this.entities$=this.store.select(c.b.getAll),this.loading$=this.store.select(c.b.getLoading),this.count$=this.store.select(c.b.getCount),this.action$=this.store.select(c.b.getAction),this.tableConfig$=new M.x}ngOnInit(){this.store.dispatch(m.J.count()),this.store.select(k.$.getOne).pipe((0,g.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.pipe((0,_.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(m.J.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:e.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:e.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(m.J.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...w.N.defaultGenericTableConfig,fields:[{field:"name",label:"Name",type:p.E7.TEXT,filter:!0,sort:!0},{field:"description",label:"description",type:p.E7.TEXT,filter:!0,sort:!0,tooltip:a=>a.description}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return x.p}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-skill-type-list"]],decls:12,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[1,"card","card-w-title"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",3),t.NdJ("lazyLoadEvent",function(v){return i.onLazyLoadEvent(v)})("tableEvent",function(v){return i.onTableEvent(v)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()()(),t._UZ(11,"router-outlet")),2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,5,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(7,7,i.entities$))("loading",t.lcZ(8,9,i.loading$))("count",t.lcZ(9,11,i.count$))("config",t.lcZ(10,13,i.tableConfig$)))},dependencies:[u.lC,tt.p,S.Ov,y.X$],changeDetection:0}),o})();var $=n(7379),ot=n(605),it=n(611),at=n(457),T=n(4004),h=n(2722),st=n(5684),lt=n(5698),rt=n(8516),pt=n(3570),dt=n(4024),mt=n(4446),ct=n(7525),ut=n(8452),gt=n(6222);function ht(o,s){if(1&o&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"input",10),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&o){const e=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,a.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[e])))}}function vt(o,s){if(1&o&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"textarea",13),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&o){const e=s.appLet,i=t.oxw().appLet,a=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,a.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,a.form.controls[e])))}}function ft(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.send())}),t.TgZ(1,"div",4),t.YNc(2,ht,11,15,"div",5),t.YNc(3,vt,11,15,"div",5),t.qZA(),t.TgZ(4,"app-entity-modal-buttons",6),t.NdJ("cancel",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.hide())})("submit",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.send())}),t.qZA(),t._UZ(5,"app-entity-modal-audit",7),t.ALo(6,"async"),t.qZA()}if(2&o){const e=s.appLet,i=t.oxw().appLet,a=t.oxw();t.Q6J("formGroup",a.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","description"),t.xp6(1),t.Q6J("loading",e)("form",a.form)("name",a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR))("modalMode",i),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(6,10,a.entity$))("modalMode",i)}}const yt=function(){return{width:"100%",maxWidth:"40rem"}},St=function(o){return{name:o}};function Tt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(a){t.CHM(e);const v=t.oxw();return t.KtG(v.visible=a)})("onHide",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,ft,7,12,"form",2),t.ALo(5,"async"),t.qZA()}if(2&o){const e=s.appLet,i=t.oxw();t.Akn(t.DdM(17,yt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,St,t.lcZ(3,13,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,i.loading$))}}const Lt=[{path:"",title:(o,s)=>"Juan S\xe1ez Garc\xeda | Skill Types",component:nt,children:[{path:"modal",title:(o,s)=>(0,at.D)((0,t.f3M)(rt.N).getTitle(o.paramMap.get("id"))).pipe((0,T.U)(e=>"Juan S\xe1ez Garc\xeda | Skill Types | "+e.name)),component:(()=>{class o{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(E.yh),this.fb=(0,t.f3M)(r.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[r.kI.required]),description:this.fb.control(void 0,[r.kI.required])}),this.unsubscribe$=new M.x,this.params$=this.route.params.pipe((0,h.R)(this.unsubscribe$),(0,T.U)(e=>e)),this.loading$=this.store.select(c.b.getLoading).pipe((0,h.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,h.R)(this.unsubscribe$),(0,T.U)(e=>d.g[e.modalMode])),this.entity$=this.store.select(c.b.getOne).pipe((0,h.R)(this.unsubscribe$),(0,g.h)(e=>!!e)),this.action$=this.store.select(c.b.getAction).pipe((0,h.R)(this.unsubscribe$),(0,st.T)(1),(0,g.h)(e=>e.type===$.Us.CREATE_ONE&&e.status===$.M4.SUCCESS))}ngOnInit(){this.params$.pipe((0,g.h)(e=>!!e.id)).subscribe(e=>this.store.dispatch(m.J.loadOne({id:e.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,g.h)(e=>e===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.controls.id||this.form.addControl("id",this.fb.control(e.id,[r.kI.required])),this.form.patchValue({id:e.id,name:e.name,description:e.description})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(m.J.unload()),this.router.navigate([it.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?ot.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,lt.q)(1)).subscribe(e=>{switch(e){case d.g.CREATE:this.store.dispatch(m.J.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(m.J.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return x.p}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-skill-type-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["pInputTextarea","",1,"p-inputtext-sm",3,"id","formControlName"]],template:function(e,i){1&e&&(t.YNc(0,Tt,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.modalMode$))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,pt.T,dt.e,f.V,A.o,C.g,mt.D,ct.Z,S.Ov,S.i8,y.X$,ut.J,gt.F],changeDetection:0}),o})()}]}];let bt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(Lt),u.Bz]}),o})();var At=n(6068);let Ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[G.S,bt,Z.JF,r.u5,r.UX,R.$,Y.EV,b.hJ,W.O,f.S,X.U$,H.d,j.D,O.WN,b.hJ,F._8,f.S,K.kW,A.j,V.Iu,C.A,P.LU,B.q4,D.y,z.I,At.H,I.t,Q.D,U.G,J.D,N.K]}),o})()}}]);