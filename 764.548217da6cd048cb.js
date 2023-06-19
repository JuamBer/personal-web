"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[764],{4764:(ft,E,n)=>{n.r(E),n.d(E,{CertificateTypesModule:()=>dt});var x=n(529),l=n(4006),$=n(5180),B=n(2694),Q=n(2983),V=n(9605),D=n(6333),N=n(8553),O=n(3631),T=n(5593),j=n(585),z=n(4247),H=n(2137),b=n(1493),P=n(2210),W=n(7913),I=n(1740),F=n(3054),G=n(2665),X=n(5722),K=n(1765),y=n(8783),k=n(2453),h=n(550),w=n(4121),q=n(4450),L=n(9300),_=n(5861),c=n(4188),J=n(2651),p=n(5699),A=n(1545),d=n(2680),t=n(4650),M=n(2997),g=n(805),v=n(3416),C=n(6895);const tt=["createImagenesForm"],et=["updateImagenesForm"];function it(i,o){1&i&&(t.TgZ(0,"div",13),t._UZ(1,"i",14),t.qZA())}function at(i,o){if(1&i&&(t.TgZ(0,"small",15),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.name," ")}}function nt(i,o){if(1&i&&(t.TgZ(0,"small",15),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.description," ")}}const R=function(i){return{name:i}};function st(i,o){if(1&i&&(t._UZ(0,"button",16),t.ALo(1,"translate"),t.ALo(2,"translate")),2&i){const e=t.oxw();t.Q6J("label",t.xi3(1,1,"buttons.create",t.VKq(6,R,t.lcZ(2,4,"tables."+e.names.camelCase.singular+".singular"))))}}function ot(i,o){if(1&i&&(t._UZ(0,"button",16),t.ALo(1,"translate"),t.ALo(2,"translate")),2&i){const e=t.oxw();t.Q6J("label",t.xi3(1,1,"buttons.update",t.VKq(6,R,t.lcZ(2,4,"tables."+e.names.camelCase.singular+".singular"))))}}const rt=function(){return{width:"100%",maxWidth:"40rem"}},U=function(i,o){return{"ng-invalid":i,"ng-dirty":o}};let Y=(()=>{class i{constructor(e,a,s,r,u,f,Z,ut){this.formBuilder=e,this.certificateTypeStore=a,this.messageSrv=s,this.translateSrv=r,this.config=u,this.route=f,this.router=Z,this.toastUtils=ut,this.visible=!1,this.certificateType$=this.certificateTypeStore.select(d.R.getOne),this.loading$=this.certificateTypeStore.select(d.R.getLoading),this.message$=this.certificateTypeStore.select(d.R.getMessage).pipe((0,L.h)(m=>!!m)),this.names=A.u,this.errores=[],this.subscriptions=[],this.route.params.subscribe(m=>{if(this.id=Number(m.id),m.modalMode){switch(m.modalMode){case"VIEW":default:this.show(c.g.VIEW);break;case"UPDATE":this.show(c.g.UPDATE);break;case"CREATE":this.show(c.g.CREATE)}"CREATE"!==m.modalMode&&this.certificateTypeStore.dispatch(p.A.loadOne({id:Number(m.id)}))}})}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}ngOnInit(){var e=this;this.form=this.formBuilder.group({id:[Date.now(),[l.kI.required]],name:[void 0,[l.kI.required]],description:[void 0,[l.kI.required]]});const a=this.certificateType$.subscribe(r=>{this.patchValue(r)});this.subscriptions.push(a);const s=this.message$.subscribe(function(){var r=(0,_.Z)(function*(u){const f=yield e.toastUtils.messageHandler(e.names.camelCase.singular,J.C.HIDE_MODAL,u);null!==f&&(e.visible=f)});return function(u){return r.apply(this,arguments)}}());this.subscriptions.push(s)}translate(e){this.translateSrv.use(e),this.translateSrv.get("calendar").subscribe(a=>this.config.setTranslation(a))}send(){if(Object.values(this.form.controls).forEach(e=>{e.markAsDirty()}),!this.form.invalid)switch(this.modalMode){case c.g.CREATE:this.certificateTypeStore.dispatch(p.A.create({payload:this.form.value}));break;case c.g.UPDATE:this.certificateTypeStore.dispatch(p.A.update({payload:this.form.value}))}}show(e){this.patchValue(null),this.modalMode=e,this.form.enable(),e==c.g.CREATE&&this.certificateTypeStore.dispatch(p.A.unload()),e==c.g.VIEW&&this.form.disable(),this.visible=!0}onHide(){this.visible=!1,this.errores=[],this.certificateTypeStore.dispatch(p.A.unload()),this.form.reset(),this.createImagenesForm?.reset(),this.updateImagenesForm?.reset(),this.router.navigate(["backoffice",A.u.kebabCase.plural.normal])}patchValue(e){this.form&&this.form.patchValue(e?{id:e.id,name:e.name,description:e.description}:{id:Date.now(),name:void 0,description:void 0})}get ModalMode(){return c.g}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.qu),t.Y36(M.yh),t.Y36(g.ez),t.Y36(v.sK),t.Y36(g.b4),t.Y36(h.gz),t.Y36(h.F0),t.Y36(J.z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-certificate-type-modal"]],viewQuery:function(e,a){if(1&e&&(t.Gf(tt,5),t.Gf(et,5)),2&e){let s;t.iGM(s=t.CRH())&&(a.createImagenesForm=s.first),t.iGM(s=t.CRH())&&(a.updateImagenesForm=s.first)}},decls:26,vars:33,consts:[[3,"draggable","resizable","modal","maximizable","visible","visibleChange","onHide"],["class","loading-modal p-component-overlay",4,"ngIf"],[3,"header"],[1,"grid","p-fluid"],[1,"col-12","p-3",3,"formGroup","ngSubmit"],[1,"grid"],[1,"xs:col-12","lg:col-12"],[1,"p-float-label"],["type","text","formControlName","name","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["class","p-error",4,"ngIf"],["formControlName","description","pInputTextarea","",1,"p-inputtext-sm",3,"ngClass"],[1,"button-container","my-3"],["pButton","","type","submit",3,"label",4,"ngIf"],[1,"loading-modal","p-component-overlay"],[1,"pi","pi-spin","pi-spinner"],[1,"p-error"],["pButton","","type","submit",3,"label"]],template:function(e,a){1&e&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(r){return a.visible=r})("onHide",function(){return a.onHide()}),t.YNc(1,it,2,0,"div",1),t.ALo(2,"async"),t.TgZ(3,"p-tabView")(4,"p-tabPanel",2),t.ALo(5,"translate"),t.TgZ(6,"div",3)(7,"form",4),t.NdJ("ngSubmit",function(){return a.send()}),t.TgZ(8,"div",5)(9,"div",6)(10,"span",7),t._UZ(11,"input",8),t.TgZ(12,"label"),t._uU(13),t.ALo(14,"translate"),t.qZA()(),t.YNc(15,at,2,1,"small",9),t.qZA(),t.TgZ(16,"div",6)(17,"span",7),t._UZ(18,"textarea",10),t.TgZ(19,"label"),t._uU(20),t.ALo(21,"translate"),t.qZA()(),t.YNc(22,nt,2,1,"small",9),t.qZA()(),t.TgZ(23,"div",11),t.YNc(24,st,3,8,"button",12),t.YNc(25,ot,3,8,"button",12),t.qZA()()()()()()),2&e&&(t.Akn(t.DdM(26,rt)),t.Q6J("draggable",!1)("resizable",!1)("modal",!0)("maximizable",!0)("visible",a.visible),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,18,a.loading$)),t.xp6(3),t.s9C("header",t.lcZ(5,20,"tabs.info")),t.xp6(3),t.Q6J("formGroup",a.form),t.xp6(4),t.Q6J("ngClass",t.WLB(27,U,a.form.controls.name.invalid,a.form.controls.name.dirty)),t.xp6(2),t.hij("",t.lcZ(14,22,"columns.name")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.name.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(30,U,a.form.controls.description.invalid,a.form.controls.description.dirty)),t.xp6(2),t.hij("",t.lcZ(21,24,"columns.description")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.description.valid),t.xp6(2),t.Q6J("ngIf",a.modalMode===a.ModalMode.CREATE),t.xp6(1),t.Q6J("ngIf",a.modalMode===a.ModalMode.UPDATE))},dependencies:[C.mk,C.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,T.Hq,b.V,I.o,F.g,y.xf,y.x4,C.Ov,v.X$]}),i})();var lt=n(5482);let S=(()=>{class i{constructor(e,a,s,r,u,f,Z){this.store=e,this.confirmationSrv=a,this.messageSrv=s,this.toastSrv=r,this.router=u,this.translateSrv=f,this.publicLanguageStore=Z,this.entities$=this.store.select(d.R.getAll),this.loading$=this.store.select(d.R.getLoading),this.count$=this.store.select(d.R.getCount),this.names=A.u,this.requestFilter=q.N.defaultRequestFilter,this.loadTable=!1,this.permisos=[]}ngOnInit(){this.publicLanguageStore.select(w.$.getOne).pipe((0,L.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.subscribe(e=>{this.cargarPagina()}),this.cargarPagina(),this.getAll()}getAll(){this.cargarPagina(),this.store.dispatch(p.A.loadAll({payload:this.requestFilter}))}onClick(e){switch(e.type){case"add":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"CREATE"}]);break;case"view":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"VIEW",id:e.data.id}]);break;case"edit":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"UPDATE",id:e.data.id}]);break;case"delete":this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.camelCase.singular}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(p.A.delete({id:e.data.id}))}})}}cargarPagina(){let e=[],a=[];a.push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant(`tables.${this.names.camelCase.singular}.singular`)})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig={fieldConfig:[{field:"name",nombre:this.translateSrv.instant("columns.name"),sort:!1,filter:!1,tipo:"TEXTO"},{field:"description",nombre:this.translateSrv.instant("columns.description"),sort:!1,filter:!1,tipo:"TEXTO"}],optionButtons:e,topButtons:a}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(M.yh),t.Y36(g.YP),t.Y36(g.ez),t.Y36(g.ez),t.Y36(h.F0),t.Y36(v.sK),t.Y36(M.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-certificate-type"]],viewQuery:function(e,a){if(1&e&&t.Gf(Y,5),2&e){let s;t.iGM(s=t.CRH())&&(a.modal=s.first)}},decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[1,"card","card-w-title"],[3,"entities","loading","totalRecords","permisos","tableConfig","requestFilter","requestFilterChange","loadAll","onButtonClick"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-tabla-generica",3),t.NdJ("requestFilterChange",function(r){return a.requestFilter=r})("loadAll",function(){return a.getAll()})("onButtonClick",function(r){return a.onClick(r)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()()(),t._UZ(10,"app-certificate-type-modal")),2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,7,"tables."+a.names.camelCase.singular+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(7,9,a.entities$))("loading",t.lcZ(8,11,a.loading$))("totalRecords",t.lcZ(9,13,a.count$))("permisos",a.permisos)("tableConfig",a.tableConfig)("requestFilter",a.requestFilter))},dependencies:[lt.w,Y,C.Ov,v.X$]}),i})();const ct=[{path:"",component:S,canActivate:[],pathMatch:"full"},{path:"modal/:modalMode",component:S,canActivate:[]},{path:"modal/:modalMode/:id",component:S,canActivate:[]}];let pt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(ct),h.Bz]}),i})();var mt=n(1171);let dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[Q.S,pt,x.JF,l.u5,l.UX,$.$,k.EV,T.hJ,G.O,b.S,K.U$,z.d,H.D,O.WN,T.hJ,j._8,b.S,P.kW,I.j,W.Iu,F.A,y.LU,X.q4,V.y,N.I,mt.d,B.t,D.D]}),i})()}}]);