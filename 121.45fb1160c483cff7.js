"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[121],{121:(Tt,A,o)=>{o.r(A),o.d(A,{CompaniesModule:()=>St});var $=o(529),r=o(4006),N=o(2437),J=o(8122),U=o(3067),R=o(5180),I=o(2694),G=o(2983),Q=o(9605),D=o(6333),K=o(8553),O=o(3631),b=o(5593),z=o(585),F=o(4247),H=o(2137),f=o(1493),j=o(2210),V=o(7913),E=o(1740),M=o(3054),W=o(2665),B=o(5722),X=o(1765),Y=o(8783),P=o(2453),u=o(550),t=o(4650),m=o(8426),d=o(4188),l=o(4363),w=o(4121),q=o(4450),S=o(2997),C=o(3416),k=o(805),T=o(7579),h=o(9300),_=o(8675),c=o(2616),x=o(8217),p=o(609),tt=o(5818),L=o(6895);let ot=(()=>{class e{constructor(){this.store=(0,t.f3M)(S.yh),this.confirmationSrv=(0,t.f3M)(k.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(C.sK),this.entities$=this.store.select(p.K.getAll),this.loading$=this.store.select(p.K.getLoading),this.count$=this.store.select(p.K.getCount),this.action$=this.store.select(p.K.getAction),this.tableConfig$=new T.x}ngOnInit(){this.store.dispatch(c._.count()),this.store.select(w.$.getOne).pipe((0,h.h)(n=>null!=n)).subscribe(n=>{this.translateSrv.use(n.acronym)}),this.translateSrv.onLangChange.pipe((0,_.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(n){this.store.dispatch(c._.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case m.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case m.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:n.value.id}]);break;case m.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:n.value.id}]);break;case m.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c._.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...q.N.defaultGenericTableConfig,fields:[{field:"name",label:"Name",type:m.E7.TEXT,filter:!0,sort:!0},{field:"description",label:"description",type:m.E7.TEXT,filter:!0,sort:!0,tooltip:s=>s.description}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return x.t}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-company-list"]],decls:12,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[1,"card","card-w-title"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",3),t.NdJ("lazyLoadEvent",function(v){return a.onLazyLoadEvent(v)})("tableEvent",function(v){return a.onTableEvent(v)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()()(),t._UZ(11,"router-outlet")),2&n&&(t.xp6(4),t.hij(" ",t.lcZ(5,5,"tables."+a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(7,7,a.entities$))("loading",t.lcZ(8,9,a.loading$))("count",t.lcZ(9,11,a.count$))("config",t.lcZ(10,13,a.tableConfig$)))},dependencies:[u.lC,tt.p,L.Ov,C.X$],changeDetection:0}),e})();var Z=o(7379),et=o(605),at=o(611),st=o(457),y=o(4004),g=o(2722),it=o(5684),lt=o(5698),rt=o(1505),mt=o(3570),pt=o(4024),dt=o(7525),ct=o(4446),ut=o(8452),gt=o(6222);function ht(e,i){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const n=i.appLet,a=t.oxw().appLet,s=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,s.form.controls[n])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.controls[n])))}}function vt(e,i){if(1&e&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const n=i.appLet,a=t.oxw().appLet,s=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,s.form.controls[n])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.controls[n])))}}function ft(e,i){if(1&e&&(t.TgZ(0,"div",14)(1,"span",10),t._UZ(2,"textarea",15),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&e){const n=i.appLet,a=t.oxw().appLet,s=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,s.form.controls[n])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.controls[n])))}}function Ct(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.send())}),t.TgZ(1,"div",4),t.YNc(2,ht,11,15,"div",5),t.YNc(3,vt,11,15,"div",5),t.YNc(4,ft,11,15,"div",6),t.qZA(),t.TgZ(5,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.hide())})("submit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.send())}),t.qZA(),t._UZ(6,"app-entity-modal-audit",8),t.ALo(7,"async"),t.qZA()}if(2&e){const n=i.appLet,a=t.oxw().appLet,s=t.oxw();t.Q6J("formGroup",s.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","location"),t.xp6(1),t.Q6J("appLet","description"),t.xp6(1),t.Q6J("loading",n)("form",s.form)("name",s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR))("modalMode",a),t.xp6(1),t.Q6J("loading",n)("entity",t.lcZ(7,11,s.entity$))("modalMode",a)}}const Lt=function(){return{width:"100%",maxWidth:"40rem"}},yt=function(e){return{name:e}};function At(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(s){t.CHM(n);const v=t.oxw();return t.KtG(v.visible=s)})("onHide",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Ct,8,13,"form",2),t.ALo(5,"async"),t.qZA()}if(2&e){const n=i.appLet,a=t.oxw();t.Akn(t.DdM(17,Lt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+n),t.VKq(18,yt,t.lcZ(3,13,"tables."+a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",a.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,a.loading$))}}const bt=[{path:"",title:(e,i)=>"Juan S\xe1ez Garc\xeda | Companies",component:ot,children:[{path:"modal",title:(e,i)=>(0,st.D)((0,t.f3M)(rt.J).getTitle(Number(e.paramMap.get("id")))).pipe((0,y.U)(n=>"Juan S\xe1ez Garc\xeda | Companies | "+n.name)),component:(()=>{class e{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(S.yh),this.fb=(0,t.f3M)(r.qu),this.visible=!0,this.form=this.fb.group({id:this.fb.control((new Date).getTime()),name:this.fb.control(void 0,[r.kI.required]),description:this.fb.control(void 0,[r.kI.required]),location:this.fb.control(void 0,[r.kI.required])}),this.unsubscribe$=new T.x,this.params$=this.route.params.pipe((0,g.R)(this.unsubscribe$),(0,y.U)(n=>n)),this.loading$=this.store.select(p.K.getLoading).pipe((0,g.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,g.R)(this.unsubscribe$),(0,y.U)(n=>d.g[n.modalMode])),this.entity$=this.store.select(p.K.getOne).pipe((0,g.R)(this.unsubscribe$),(0,h.h)(n=>!!n)),this.message$=this.store.select(p.K.getMessage).pipe((0,g.R)(this.unsubscribe$),(0,h.h)(n=>!!n)),this.action$=this.store.select(p.K.getAction).pipe((0,g.R)(this.unsubscribe$),(0,it.T)(1),(0,h.h)(n=>n.type===Z.Us.CREATE_ONE&&n.status===Z.M4.SUCCESS))}ngOnInit(){this.params$.subscribe(n=>this.store.dispatch(c._.loadOne({id:Number(n.id)}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,h.h)(n=>n===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{this.form.patchValue({id:n.id,name:n.name,description:n.description})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(c._.unload()),this.router.navigate([at.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?et.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,lt.q)(1)).subscribe(n=>{switch(n){case d.g.CREATE:this.store.dispatch(c._.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(c._.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return x.t}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-company-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],["pInputTextarea","",1,"p-inputtext-sm",3,"id","formControlName"]],template:function(n,a){1&n&&(t.YNc(0,At,6,20,"p-dialog",0),t.ALo(1,"async")),2&n&&t.Q6J("appLet",t.lcZ(1,1,a.modalMode$))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,mt.T,pt.e,f.V,E.o,M.g,dt.Z,ct.D,L.Ov,L.i8,C.X$,ut.J,gt.F],changeDetection:0}),e})()}]}];let Et=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(bt),u.Bz]}),e})();var Mt=o(232);let St=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[G.S,Et,$.JF,r.u5,r.UX,R.$,P.EV,b.hJ,W.O,f.S,X.U$,F.d,H.D,O.WN,b.hJ,z._8,f.S,j.kW,E.j,V.Iu,M.A,Y.LU,B.q4,Q.y,K.I,Mt.h,J.K,N.D,I.t,D.D,U.G]}),e})()}}]);