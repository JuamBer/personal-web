"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[760],{3760:(bt,A,i)=>{i.r(A),i.d(A,{CertificateTypesModule:()=>Lt});var $=i(529),l=i(4006),N=i(2437),R=i(8122),U=i(3067),J=i(5180),I=i(2694),G=i(2983),D=i(9605),L=i(6333),Q=i(3631),z=i(5593),O=i(585),F=i(4247),H=i(2137),v=i(1493),j=i(2210),K=i(7913),b=i(1740),E=i(3054),V=i(2665),W=i(5722),B=i(8783),X=i(2453),u=i(550),t=i(4650),p=i(8426),d=i(4188),r=i(4363),P=i(4121),Y=i(4450),M=i(2997),y=i(3416),w=i(805),S=i(7579),h=i(9300),q=i(8675),c=i(5699),x=i(1545),m=i(2680),k=i(5818),C=i(6895);let tt=(()=>{class a{constructor(){this.store=(0,t.f3M)(M.yh),this.confirmationSrv=(0,t.f3M)(w.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(y.sK),this.entities$=this.store.select(m.R.getAll),this.loading$=this.store.select(m.R.getLoading),this.count$=this.store.select(m.R.getCount),this.action$=this.store.select(m.R.getAction),this.tableConfig$=new S.x}ngOnInit(){this.store.dispatch(c.A.count()),this.store.select(P.$.getOne).pipe((0,h.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.pipe((0,q.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(c.A.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:e.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:e.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c.A.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...Y.N.defaultGenericTableConfig,fields:[{field:"name",label:"Name",type:p.E7.TEXT,filter:!0,sort:!0},{field:"description",label:"description",type:p.E7.TEXT,filter:!0,sort:!0,tooltip:o=>o.description}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return x.u}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-type-list"]],decls:12,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[1,"card","card-w-title"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",3),t.NdJ("lazyLoadEvent",function(f){return n.onLazyLoadEvent(f)})("tableEvent",function(f){return n.onTableEvent(f)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()()(),t._UZ(11,"router-outlet")),2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,5,"tables."+n.names.name(n.Naming.CAMEL_CASE,n.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(7,7,n.entities$))("loading",t.lcZ(8,9,n.loading$))("count",t.lcZ(9,11,n.count$))("config",t.lcZ(10,13,n.tableConfig$)))},dependencies:[k.p,u.lC,C.Ov,y.X$],changeDetection:0}),a})();var Z=i(7379),et=i(605),it=i(611),at=i(457),T=i(4004),g=i(2722),nt=i(5684),ot=i(5698),st=i(8201),rt=i(3570),lt=i(4024),pt=i(7525),dt=i(4446),ct=i(8452),mt=i(6222);function ut(a,s){if(1&a&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"input",10),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=s.appLet,n=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,o.form.controls[e])))}}function gt(a,s){if(1&a&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"textarea",13),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=s.appLet,n=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",n),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,o.form.controls[e])))}}function ft(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.send())}),t.TgZ(1,"div",4),t.YNc(2,ut,11,15,"div",5),t.YNc(3,gt,11,15,"div",5),t.qZA(),t.TgZ(4,"app-entity-modal-buttons",6),t.NdJ("cancel",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.hide())})("submit",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.send())}),t.qZA(),t._UZ(5,"app-entity-modal-audit",7),t.ALo(6,"async"),t.qZA()}if(2&a){const e=s.appLet,n=t.oxw().appLet,o=t.oxw();t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","description"),t.xp6(1),t.Q6J("loading",e)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(6,10,o.entity$))("modalMode",n)}}const ht=function(){return{width:"100%",maxWidth:"40rem"}},vt=function(a){return{name:a}};function yt(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(o){t.CHM(e);const f=t.oxw();return t.KtG(f.visible=o)})("onHide",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,ft,7,12,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const e=s.appLet,n=t.oxw();t.Akn(t.DdM(17,ht)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,vt,t.lcZ(3,13,"tables."+n.names.name(n.Naming.CAMEL_CASE,n.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",n.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,n.loading$))}}const Ct=[{path:"",title:(a,s)=>"Juan S\xe1ez Garc\xeda | Certificate Types",component:tt,children:[{path:"modal",title:(a,s)=>(0,at.D)((0,t.f3M)(st.J).getTitle(Number(a.paramMap.get("id")))).pipe((0,T.U)(e=>"Juan S\xe1ez Garc\xeda | Certificate Types | "+e.name)),component:(()=>{class a{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(M.yh),this.fb=(0,t.f3M)(l.qu),this.visible=!0,this.form=this.fb.group({id:this.fb.control((new Date).getTime()),name:this.fb.control(void 0,[l.kI.required]),description:this.fb.control(void 0,[l.kI.required])}),this.unsubscribe$=new S.x,this.params$=this.route.params.pipe((0,g.R)(this.unsubscribe$),(0,T.U)(e=>e)),this.loading$=this.store.select(m.R.getLoading).pipe((0,g.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,g.R)(this.unsubscribe$),(0,T.U)(e=>d.g[e.modalMode])),this.entity$=this.store.select(m.R.getOne).pipe((0,g.R)(this.unsubscribe$),(0,h.h)(e=>!!e)),this.action$=this.store.select(m.R.getAction).pipe((0,g.R)(this.unsubscribe$),(0,nt.T)(1),(0,h.h)(e=>e.type===Z.Us.CREATE_ONE&&e.status===Z.M4.SUCCESS))}ngOnInit(){this.params$.subscribe(e=>this.store.dispatch(c.A.loadOne({id:Number(e.id)}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,h.h)(e=>e===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.patchValue({id:e.id,name:e.name,description:e.description})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(c.A.unload()),this.router.navigate([it.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?et.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,ot.q)(1)).subscribe(e=>{switch(e){case d.g.CREATE:this.store.dispatch(c.A.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(c.A.update({payload:this.form.value}))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return x.u}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-type-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["pInputTextarea","",1,"p-inputtext-sm",3,"id","formControlName"]],template:function(e,n){1&e&&(t.YNc(0,yt,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,n.modalMode$))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,rt.T,lt.e,v.V,b.o,E.g,pt.Z,dt.D,C.Ov,C.i8,y.X$,ct.J,mt.F],changeDetection:0}),a})()}]}];let Tt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.Bz.forChild(Ct),u.Bz]}),a})();var At=i(8370);let Lt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[G.S,$.JF,l.u5,l.UX,J.$,X.EV,z.hJ,V.O,v.S,F.d,H.D,Q.WN,O._8,v.S,j.kW,b.j,K.Iu,E.A,B.LU,W.q4,D.y,L.D,I.t,L.D,U.G,R.K,N.D,At.d,Tt]}),a})()}}]);