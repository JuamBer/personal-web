"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[808],{5808:(Vt,M,o)=>{o.r(M),o.d(M,{CertificatesModule:()=>Dt});var D=o(529),l=o(4006),O=o(5180),R=o(2694),W=o(5106),z=o(9605),V=o(6333),H=o(8553),P=o(3631),A=o(5593),J=o(585),w=o(4247),K=o(2137),x=o(1493),N=o(2210),X=o(7913),Q=o(1740),F=o(3054),q=o(2665),k=o(5722),_=o(1765),S=o(8783),tt=o(2453),et=o(8259),it=o(1171),at=o(5636),v=o(3626),ot=o(4121),I=o(4450),Y=o(9300),L=o(5861),m=o(4188),E=o(2651),nt=o(9197),st=o(7316),rt=o(4269),lt=o(5699),ct=o(1545),pt=o(2680),mt=o(2616),dt=o(8217),ut=o(609),p=o(6893),C=o(3890),d=o(7714),t=o(4650),u=o(2997),y=o(805),b=o(3416),Z=o(6895);const ft=["createImagenesForm"],gt=["updateImagenesForm"];function ht(i,n){1&i&&(t.TgZ(0,"div",27),t._UZ(1,"i",28),t.qZA())}function vt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.name," ")}}function Ct(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.date," ")}}function yt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.description," ")}}function Zt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.url," ")}}function bt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.pdf," ")}}function Tt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.github," ")}}function At(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.image," ")}}function xt(i,n){if(1&i&&t._UZ(0,"img",30),2&i){const e=t.oxw();t.Q6J("src",e.form.controls.image.value,t.LSH)}}function St(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.web," ")}}function It(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.playStore," ")}}function Lt(i,n){if(1&i&&(t.TgZ(0,"small",29),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",e.errores.microsoftStore," ")}}const j=function(i){return{name:i}};function Ut(i,n){if(1&i&&(t._UZ(0,"button",31),t.ALo(1,"translate"),t.ALo(2,"translate")),2&i){const e=t.oxw();t.Q6J("label",t.xi3(1,1,"buttons.create",t.VKq(6,j,t.lcZ(2,4,"tables."+e.names.camelCase.singular+".singular"))))}}function Mt(i,n){if(1&i&&(t._UZ(0,"button",31),t.ALo(1,"translate"),t.ALo(2,"translate")),2&i){const e=t.oxw();t.Q6J("label",t.xi3(1,1,"buttons.update",t.VKq(6,j,t.lcZ(2,4,"tables."+e.names.camelCase.singular+".singular"))))}}const Jt=function(){return{width:"100%",maxWidth:"60rem"}},c=function(i,n){return{"ng-invalid":i,"ng-dirty":n}};let B=(()=>{class i{constructor(e,a,s,r,g,h,T,Ot,Rt,Wt,zt){this.formBuilder=e,this.certificateStore=a,this.certificateTypeStore=s,this.certificateGroupStore=r,this.companyStore=g,this.toastSrv=h,this.translateSrv=T,this.config=Ot,this.route=Rt,this.router=Wt,this.toastUtils=zt,this.visible=!1,this.certificate$=this.certificateStore.select(d.y.getOne),this.loading$=this.certificateStore.select(d.y.getLoading),this.message$=this.certificateStore.select(d.y.getMessage).pipe((0,Y.h)(f=>!!f)),this.names=C.Q,this.certificateTypes$=this.certificateTypeStore.select(pt.R.getAll),this.certificateTypeNames=ct.u,this.certificateGroups$=this.certificateGroupStore.select(rt.$.getAll),this.certificateGroupNames=st.z,this.companies$=this.companyStore.select(ut.K.getAll),this.companyNames=dt.t,this.errores=[],this.subscriptions=[],T.setDefaultLang("es"),this.route.params.subscribe(f=>{if(this.id=Number(f.id),f.modalMode){switch(f.modalMode){case"VIEW":default:this.show(m.g.VIEW);break;case"UPDATE":this.show(m.g.UPDATE);break;case"CREATE":this.show(m.g.CREATE)}"CREATE"!==f.modalMode&&this.certificateStore.dispatch(p.S.loadOne({id:Number(f.id)}))}})}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}ngOnInit(){var e=this;this.certificateGroupStore.dispatch(nt.t.loadAll({payload:null})),this.certificateTypeStore.dispatch(lt.A.loadAll({payload:null})),this.companyStore.dispatch(mt._.loadAll({payload:null})),this.form=this.formBuilder.group({id:[Date.now()],name:[void 0,[l.kI.required]],description:[void 0,[l.kI.required]],company:[void 0,[l.kI.required]],certificateGroup:[void 0,[l.kI.required]],certificateType:[void 0,[l.kI.required]],image:[void 0,[l.kI.required]],pdf:[void 0,[l.kI.required]],url:[void 0,[l.kI.required]],date:[new Date,[l.kI.required]],github:[void 0],web:[void 0],microsoftStore:[void 0],playStore:[void 0]});const a=this.certificate$.subscribe(r=>{this.patchValue(r)});this.subscriptions.push(a);const s=this.message$.subscribe(function(){var r=(0,L.Z)(function*(g){const h=yield e.toastUtils.messageHandler(e.names.camelCase.singular,E.C.HIDE_MODAL,g);null!==h&&(e.visible=h)});return function(g){return r.apply(this,arguments)}}());this.subscriptions.push(s)}translate(e){this.translateSrv.use(e),this.translateSrv.get("calendar").subscribe(a=>this.config.setTranslation(a))}send(){if(Object.values(this.form.controls).forEach(e=>{e.markAsDirty()}),!this.form.invalid)switch(this.modalMode){case m.g.CREATE:this.certificateStore.dispatch(p.S.create({payload:this.form.value}));break;case m.g.UPDATE:this.certificateStore.dispatch(p.S.update({payload:this.form.value}))}}show(e){this.patchValue(null),this.modalMode=e,e==m.g.CREATE&&this.certificateStore.dispatch(p.S.unload()),this.visible=!0}onHide(){this.visible=!1,this.errores=[],this.certificateStore.dispatch(p.S.unload()),this.form.reset(),this.createImagenesForm?.reset(),this.updateImagenesForm?.reset(),this.router.navigate(["backoffice",C.Q.kebabCase.plural.normal])}patchValue(e){this.form&&this.form.patchValue(e?{id:e.id,name:e.name,description:e.description,company:e.company,certificateGroup:e.certificateGroup,certificateType:e.certificateType,image:e.image,url:e.url,pdf:e.pdf,date:new Date(e.date),github:e.github,web:e.web,playStore:e.playStore,microsoftStore:e.microsoftStore}:{id:Date.now(),name:void 0,description:void 0,company:void 0,certificateGroup:void 0,certificateType:void 0,image:void 0,url:void 0,pdf:void 0,date:new Date,github:void 0,web:void 0,playStore:void 0,microsoftStore:void 0})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.qu),t.Y36(u.yh),t.Y36(u.yh),t.Y36(u.yh),t.Y36(u.yh),t.Y36(y.ez),t.Y36(b.sK),t.Y36(y.b4),t.Y36(v.gz),t.Y36(v.F0),t.Y36(E.z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-certificate-modal"]],viewQuery:function(e,a){if(1&e&&(t.Gf(ft,5),t.Gf(gt,5)),2&e){let s;t.iGM(s=t.CRH())&&(a.createImagenesForm=s.first),t.iGM(s=t.CRH())&&(a.updateImagenesForm=s.first)}},decls:105,vars:119,consts:[[3,"draggable","resizable","modal","maximizable","visible","visibleChange","onHide"],["class","loading-modal p-component-overlay",4,"ngIf"],[3,"header"],[1,"grid","p-fluid"],[1,"col-12","p-3",3,"formGroup","ngSubmit"],[1,"grid"],[1,"xs:col-12","lg:col-6"],[1,"p-float-label"],["type","text","formControlName","name","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["class","p-error",4,"ngIf"],["formControlName","date","dateFormat","dd/mm/yy","appendTo","body",1,"p-inputtext-sm",3,"showIcon"],[1,"xs:col-12","lg:col-12"],["formControlName","description","pInputTextarea","",1,"p-inputtext-sm",3,"ngClass"],[1,"xs:col-12","lg:col-4"],["dataKey","id","formControlName","company","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","filter"],["dataKey","id","formControlName","certificateType","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","filter"],["dataKey","id","formControlName","certificateGroup","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","filter"],["type","text","formControlName","url","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["type","text","formControlName","pdf","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["type","text","formControlName","github","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["type","text","formControlName","image","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["class","w-full","alt","image",3,"src",4,"ngIf"],["type","text","formControlName","web","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["type","text","formControlName","playStore","pInputText","",1,"p-inputtext-sm",3,"ngClass"],["type","text","formControlName","microsoftStore","pInputText","",1,"p-inputtext-sm",3,"ngClass"],[1,"button-container","my-3"],["pButton","","type","submit",3,"label",4,"ngIf"],[1,"loading-modal","p-component-overlay"],[1,"pi","pi-spin","pi-spinner"],[1,"p-error"],["alt","image",1,"w-full",3,"src"],["pButton","","type","submit",3,"label"]],template:function(e,a){1&e&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(r){return a.visible=r})("onHide",function(){return a.onHide()}),t.YNc(1,ht,2,0,"div",1),t.ALo(2,"async"),t.TgZ(3,"p-tabView")(4,"p-tabPanel",2),t.ALo(5,"translate"),t.TgZ(6,"div",3)(7,"form",4),t.NdJ("ngSubmit",function(){return a.send()}),t.TgZ(8,"div",5)(9,"div",6)(10,"span",7),t._UZ(11,"input",8),t.TgZ(12,"label"),t._uU(13),t.ALo(14,"translate"),t.qZA()(),t.YNc(15,vt,2,1,"small",9),t.qZA(),t.TgZ(16,"div",6)(17,"span",7),t._UZ(18,"p-calendar",10),t.TgZ(19,"label"),t._uU(20),t.ALo(21,"translate"),t.qZA()(),t.YNc(22,Ct,2,1,"small",9),t.qZA(),t.TgZ(23,"div",11)(24,"span",7),t._UZ(25,"textarea",12),t.TgZ(26,"label"),t._uU(27),t.ALo(28,"translate"),t.qZA()(),t.YNc(29,yt,2,1,"small",9),t.qZA(),t.TgZ(30,"div",13)(31,"span",7),t._UZ(32,"p-dropdown",14),t.ALo(33,"async"),t.TgZ(34,"label"),t._uU(35),t.ALo(36,"translate"),t.qZA()()(),t.TgZ(37,"div",13)(38,"span",7),t._UZ(39,"p-dropdown",15),t.ALo(40,"async"),t.TgZ(41,"label"),t._uU(42),t.ALo(43,"translate"),t.qZA()()(),t.TgZ(44,"div",13)(45,"span",7),t._UZ(46,"p-dropdown",16),t.ALo(47,"async"),t.TgZ(48,"label"),t._uU(49),t.ALo(50,"translate"),t.qZA()()(),t.TgZ(51,"div",13)(52,"span",7),t._UZ(53,"input",17),t.TgZ(54,"label"),t._uU(55),t.ALo(56,"translate"),t.qZA()(),t.YNc(57,Zt,2,1,"small",9),t.qZA(),t.TgZ(58,"div",13)(59,"span",7),t._UZ(60,"input",18),t.TgZ(61,"label"),t._uU(62),t.ALo(63,"translate"),t.qZA()(),t.YNc(64,bt,2,1,"small",9),t.qZA(),t.TgZ(65,"div",13)(66,"span",7),t._UZ(67,"input",19),t.TgZ(68,"label"),t._uU(69),t.ALo(70,"translate"),t.qZA()(),t.YNc(71,Tt,2,1,"small",9),t.qZA(),t.TgZ(72,"div",11)(73,"span",7),t._UZ(74,"input",20),t.TgZ(75,"label"),t._uU(76),t.ALo(77,"translate"),t.qZA()(),t.YNc(78,At,2,1,"small",9),t.qZA(),t.TgZ(79,"div",11),t.YNc(80,xt,1,1,"img",21),t.qZA(),t.TgZ(81,"div",13)(82,"span",7),t._UZ(83,"input",22),t.TgZ(84,"label"),t._uU(85),t.ALo(86,"translate"),t.qZA()(),t.YNc(87,St,2,1,"small",9),t.qZA(),t.TgZ(88,"div",13)(89,"span",7),t._UZ(90,"input",23),t.TgZ(91,"label"),t._uU(92),t.ALo(93,"translate"),t.qZA()(),t.YNc(94,It,2,1,"small",9),t.qZA(),t.TgZ(95,"div",13)(96,"span",7),t._UZ(97,"input",24),t.TgZ(98,"label"),t._uU(99),t.ALo(100,"translate"),t.qZA()(),t.YNc(101,Lt,2,1,"small",9),t.qZA()(),t.TgZ(102,"div",25),t.YNc(103,Ut,3,8,"button",26),t.YNc(104,Mt,3,8,"button",26),t.qZA()()()()()()),2&e&&(t.Akn(t.DdM(91,Jt)),t.Q6J("draggable",!1)("resizable",!1)("modal",!0)("maximizable",!0)("visible",a.visible),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,55,a.loading$)),t.xp6(3),t.s9C("header",t.lcZ(5,57,"tabs.info")),t.xp6(3),t.Q6J("formGroup",a.form),t.xp6(4),t.Q6J("ngClass",t.WLB(92,c,a.form.controls.name.invalid,a.form.controls.name.dirty)),t.xp6(2),t.hij("",t.lcZ(14,59,"columns.name")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.name.valid),t.xp6(3),t.Q6J("showIcon",!0),t.xp6(2),t.hij("",t.lcZ(21,61,"columns.date")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.date.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(95,c,a.form.controls.description.invalid,a.form.controls.description.dirty)),t.xp6(2),t.hij("",t.lcZ(28,63,"columns.description")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.description.valid),t.xp6(3),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(33,65,a.companies$))("filter",!0),t.xp6(3),t.hij("",t.lcZ(36,67,"tables."+a.companyNames.camelCase.singular+".singular")," *"),t.xp6(4),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(40,69,a.certificateTypes$))("filter",!0),t.xp6(3),t.hij("",t.lcZ(43,71,"tables."+a.certificateTypeNames.camelCase.singular+".singular")," *"),t.xp6(4),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(47,73,a.certificateGroups$))("filter",!0),t.xp6(3),t.hij("",t.lcZ(50,75,"tables."+a.certificateGroupNames.camelCase.singular+".singular")," *"),t.xp6(4),t.Q6J("ngClass",t.WLB(98,c,a.form.controls.url.invalid,a.form.controls.url.dirty)),t.xp6(2),t.hij("",t.lcZ(56,77,"columns.url")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.url.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(101,c,a.form.controls.pdf.invalid,a.form.controls.pdf.dirty)),t.xp6(2),t.hij("",t.lcZ(63,79,"columns.pdf")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.pdf.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(104,c,a.form.controls.github.invalid,a.form.controls.github.dirty)),t.xp6(2),t.Oqu(t.lcZ(70,81,"columns.github")),t.xp6(2),t.Q6J("ngIf",!a.form.controls.github.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(107,c,a.form.controls.image.invalid,a.form.controls.image.dirty)),t.xp6(2),t.hij("",t.lcZ(77,83,"columns.image")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.image.valid),t.xp6(2),t.Q6J("ngIf",a.form.controls.image.value),t.xp6(3),t.Q6J("ngClass",t.WLB(110,c,a.form.controls.web.invalid,a.form.controls.web.dirty)),t.xp6(2),t.hij("",t.lcZ(86,85,"columns.web")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.web.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(113,c,a.form.controls.playStore.invalid,a.form.controls.playStore.dirty)),t.xp6(2),t.hij("",t.lcZ(93,87,"columns.playStore")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.playStore.valid),t.xp6(3),t.Q6J("ngClass",t.WLB(116,c,a.form.controls.microsoftStore.invalid,a.form.controls.microsoftStore.dirty)),t.xp6(2),t.hij("",t.lcZ(100,89,"columns.microsoftStore")," *"),t.xp6(2),t.Q6J("ngIf",!a.form.controls.microsoftStore.valid),t.xp6(2),t.Q6J("ngIf","create"===a.modalMode),t.xp6(1),t.Q6J("ngIf","update"===a.modalMode))},dependencies:[Z.mk,Z.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,A.Hq,x.V,J.f,N.Lt,Q.o,F.g,S.xf,S.x4,Z.Ov,b.X$]}),i})();var Nt=o(5482);let U=(()=>{class i{constructor(e,a,s,r,g,h,T){this.store=e,this.confirmationSrv=a,this.messageSrv=s,this.toastSrv=r,this.router=g,this.translateSrv=h,this.publicLanguageStore=T,this.entities$=this.store.select(d.y.getAll),this.loading$=this.store.select(d.y.getLoading),this.count$=this.store.select(d.y.getCount),this.names=C.Q,this.requestFilter=I.N.defaultRequestFilter,this.loadTable=!1,this.permisos=[]}ngOnInit(){this.publicLanguageStore.select(ot.$.getOne).pipe((0,Y.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.subscribe(e=>{this.cargarPagina()}),this.cargarPagina(),this.getAll()}getAll(){this.cargarPagina(),this.store.dispatch(p.S.loadAll({payload:this.requestFilter}))}onClick(e){switch(e.type){case"add":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"CREATE"}]);break;case"view":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"VIEW",id:e.data.id}]);break;case"edit":this.router.navigate(["backoffice",this.names.kebabCase.plural.normal,{modalMode:"UPDATE",id:e.data.id}]);break;case"delete":this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.camelCase.singular}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(p.S.delete({id:e.data.id}))}})}}cargarPagina(){let e=[],a=[];a.push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificate.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig={fieldConfig:[{field:"image",nombre:this.translateSrv.instant("columns.image"),sort:!0,filter:!0,tipo:"IMAGENES"},{field:"name",nombre:this.translateSrv.instant("columns.name"),sort:!0,filter:!0,tipo:"TEXTO"},{field:"date",nombre:this.translateSrv.instant("columns.date"),sort:!0,filter:!0,tipo:"FECHA"},{field:"description",nombre:this.translateSrv.instant("columns.description"),sort:!0,filter:!0,tipo:"TEXTO"}],optionButtons:e,topButtons:a}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.yh),t.Y36(y.YP),t.Y36(y.ez),t.Y36(y.ez),t.Y36(v.F0),t.Y36(b.sK),t.Y36(u.yh))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-certificate"]],viewQuery:function(e,a){if(1&e&&t.Gf(B,5),2&e){let s;t.iGM(s=t.CRH())&&(a.modal=s.first)}},decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[1,"card","card-w-title"],[3,"entities","loading","totalRecords","permisos","tableConfig","requestFilter","requestFilterChange","loadAll","onButtonClick"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-tabla-generica",3),t.NdJ("requestFilterChange",function(r){return a.requestFilter=r})("loadAll",function(){return a.getAll()})("onButtonClick",function(r){return a.onClick(r)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()()(),t._UZ(10,"app-certificate-modal")),2&e&&(t.xp6(4),t.hij(" ",t.lcZ(5,7,"tables."+a.names.camelCase.singular+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(7,9,a.entities$))("loading",t.lcZ(8,11,a.loading$))("totalRecords",t.lcZ(9,13,a.count$))("permisos",a.permisos)("tableConfig",a.tableConfig)("requestFilter",a.requestFilter))},dependencies:[Nt.w,B,Z.Ov,b.X$]}),i})();const Qt=[{path:"",component:U,canActivate:[],pathMatch:"full"},{path:"modal/:modalMode",component:U,canActivate:[]},{path:"modal/:modalMode/:id",component:U,canActivate:[]}];let Ft=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.Bz.forChild(Qt),v.Bz]}),i})();var G=o(2260),Yt=o(8534),Et=o(62),$=o(4642),jt=o(3187);let Bt=(()=>{class i extends Et.v{constructor(){super((0,jt.eI)(I.N.apiUrl,I.N.apiKey),C.Q.snakeCase.plural.normal)}getAll(e){var a=this;return(0,L.Z)(function*(){let{data:s,error:r}=yield a.supabase.from(a.table).select('*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )');return r||(0,$.iP)(s)})()}getOne(e){var a=this;return(0,L.Z)(function*(){let{data:s,error:r}=yield a.supabase.from(a.table).select('*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )').match({id:e}).single();return r||(0,$.iP)(s)})()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Gt=(()=>{class i extends Yt.P{constructor(e,a){super(e,p.S,a),this.actions$=e,this.certificateSrv=a}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(G.eX),t.LFG(Bt))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})(),$t=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[Z.ez,G.sQ.forFeature([Gt]),u.Aw.forFeature(C.Q.kebabCase.plural.normal,d.y.reducer)]}),i})(),Dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[W.S,Ft,D.JF,l.u5,l.UX,O.$,tt.EV,A.hJ,q.O,x.S,_.U$,w.d,K.D,P.WN,A.hJ,J._8,x.S,N.kW,Q.j,X.Iu,F.A,S.LU,k.q4,z.y,H.I,$t,it.d,et.L,at.h,R.t,V.D]}),i})()}}]);