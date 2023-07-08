"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[98],{1098:(It,T,o)=>{o.r(T),o.d(T,{CompanyModule:()=>Nt});var I=o(529),p=o(4006),R=o(2437),J=o(8122),G=o(3067),Q=o(3631),$=o(5593),K=o(585),D=o(4247),O=o(2137),E=o(1493),z=o(2210),F=o(7913),x=o(1740),H=o(3054),X=o(2665),j=o(5722),V=o(1765),W=o(8783),B=o(2453),Y=o(5918),P=o(2983),w=o(9605),q=o(6333),k=o(7921),g=o(3151),t=o(4650),L=o(2997),f=o(3416),_=o(805),h=o(9300),M=o(3900),y=o(4004),Z=o(1135),tt=o(8675),S=o(5041),m=o(8426),nt=o(1392),d=o(5255),l=o(4363),N=o(4121),c=o(2868),A=o(1039),u=o(9366),ot=o(3926),b=o(6895);let et=(()=>{class a{constructor(){this.store=(0,t.f3M)(L.yh),this.confirmationSrv=(0,t.f3M)(_.YP),this.router=(0,t.f3M)(g.F0),this.translateSrv=(0,t.f3M)(f.sK),this.entities$=this.store.select(u.K.getAll),this.loading$=this.store.select(u.K.getLoading),this.count$=this.store.select(u.K.getCount),this.action$=this.store.select(u.K.getAction),this.tableConfig$=new Z.X(void 0)}ngOnInit(){this.store.dispatch(c._.count()),this.translateSrv.onLangChange.pipe((0,tt.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(n){this.store.dispatch(c._.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case m.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case m.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:n.value.id}]);break;case m.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:n.value.id}]);break;case m.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c._.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...nt.$,fields:[{field:"name",label:this.translateSrv.instant("columns.name"),type:m.E7.TEXT,filter:!0,sort:!0},{field:"location",label:this.translateSrv.instant("columns.location"),type:m.E7.TEXT,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:m.E7.TRANSLATIONS,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:m.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return A.t}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-company-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(r){return e.onLazyLoadEvent(r)})("tableEvent",function(r){return e.onTableEvent(r)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&n&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,e.entities$))("loading",t.lcZ(7,9,e.loading$))("count",t.lcZ(8,11,e.count$))("config",t.lcZ(9,13,e.tableConfig$)))},dependencies:[g.lC,ot.p,b.Ov,f.X$],changeDetection:0}),a})();var st=o(457),it=o(7579),C=o(2722),lt=o(5684),rt=o(5698),pt=o(7395),U=o(7379),mt=o(6977),dt=o(611),ct=o(9625),ut=o(3570),gt=o(4024),ht=o(4844),vt=o(7525),ft=o(4446),yt=o(8452),Ct=o(6222);function Lt(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const n=i.appLet,e=t.oxw().appLet,s=t.oxw(2);t.Q6J("appIsLoading",e),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,s.form.controls[n])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.controls[n])))}}function At(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const n=i.appLet,e=t.oxw().appLet,s=t.oxw(2);t.Q6J("appIsLoading",e),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,s.form.controls[n])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.controls[n])))}}function Et(a,i){if(1&a&&(t.TgZ(0,"div",14),t._UZ(1,"app-input-translations",15),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=i.appLet,e=t.oxw().appLet,s=t.oxw().appLet,r=t.oxw();let v;t.Q6J("appIsLoading",e),t.xp6(1),t.Q6J("showErrors",r.showErrors$)("type",r.InputTranslationsType.TEXTAREA)("translations",null==(v=t.lcZ(2,7,r.entity$))?null:v.descriptionTranslations)("disabled",s===r.ModalMode.VIEW)("form",r.form.controls[n])("label",t.lcZ(3,9,"columns.description"))}}function Mt(a,i){if(1&a){const n=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.send())}),t.TgZ(1,"div",4),t.YNc(2,Lt,11,15,"div",5),t.YNc(3,At,11,15,"div",5),t.YNc(4,Et,4,11,"div",6),t.qZA(),t.TgZ(5,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.hide())})("submit",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.send())}),t.qZA(),t._UZ(6,"app-entity-modal-audit",8),t.ALo(7,"async"),t.qZA()}if(2&a){const n=i.appLet,e=t.oxw().appLet,s=t.oxw();t.Q6J("formGroup",s.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","location"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("loading",n)("form",s.form)("name",s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR))("modalMode",e),t.xp6(1),t.Q6J("loading",n)("entity",t.lcZ(7,11,s.entity$))("modalMode",e)}}const St=function(){return{width:"100%",maxWidth:"40rem"}},bt=function(a){return{name:a}};function Tt(a,i){if(1&a){const n=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(s){t.CHM(n);const r=t.oxw();return t.KtG(r.visible=s)})("onHide",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Mt,8,13,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const n=i.appLet,e=t.oxw();t.Akn(t.DdM(17,St)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+n),t.VKq(18,bt,t.lcZ(3,13,"tables."+e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",e.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,e.loading$))}}const $t=[{path:"",title:(a,i)=>{const n=(0,t.f3M)(L.yh),e=(0,t.f3M)(f.sK);return n.select(N.$.getOne).pipe((0,h.h)(s=>!!s),(0,M.w)(()=>e.get(`tables.${A.t.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,y.U)(s=>`${S.R} | ${s}`))))},component:et,children:[{path:"modal",title:(a,i)=>{const n=(0,t.f3M)(L.yh),e=(0,t.f3M)(ct.J),s=(0,t.f3M)(f.sK);return n.select(N.$.getOne).pipe((0,h.h)(r=>!!r),(0,M.w)(r=>s.get(`tables.${A.t.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,M.w)(v=>(0,st.D)(e.getTitle(a.paramMap.get("id"))).pipe((0,y.U)(Ut=>`${S.R} | ${v} | ${Ut.name}`))):(0,y.U)(v=>`${S.R} | ${v} | ${s.instant("buttons.new",{name:""})}`))))},component:(()=>{class a{constructor(){this.router=(0,t.f3M)(g.F0),this.route=(0,t.f3M)(g.gz),this.store=(0,t.f3M)(L.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[p.kI.required]),descriptionTranslations:this.fb.array([]),description:this.fb.control(void 0,[p.kI.required]),location:this.fb.control(void 0,[p.kI.required])}),this.unsubscribe$=new it.x,this.params$=this.route.params.pipe((0,C.R)(this.unsubscribe$),(0,y.U)(n=>n)),this.loading$=this.store.select(u.K.getLoading).pipe((0,C.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,C.R)(this.unsubscribe$),(0,y.U)(n=>d.g[n.modalMode])),this.entity$=this.store.select(u.K.getOne).pipe((0,C.R)(this.unsubscribe$),(0,h.h)(n=>!!n)),this.action$=this.store.select(u.K.getAction).pipe((0,C.R)(this.unsubscribe$),(0,lt.T)(1),(0,h.h)(n=>n.type===U.Us.CREATE_ONE&&n.status===U.M4.SUCCESS)),this.showErrors$=new Z.X(!1)}ngOnInit(){this.params$.pipe((0,h.h)(n=>!!n.id)).subscribe(n=>this.store.dispatch(c._.loadOne({id:n.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,h.h)(n=>n===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{this.form.controls.id||this.form.addControl("id",this.fb.control(n.id,[p.kI.required])),this.form.patchValue({id:n.id,name:n.name,description:n.description,location:n.location,descriptionTranslations:n.descriptionTranslations})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(c._.unload()),this.router.navigate([dt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(mt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,rt.q)(1)).subscribe(n=>{switch(n){case d.g.CREATE:this.store.dispatch(c._.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(c._.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return A.t}get InputTranslationsType(){return pt.A}get ModalMode(){return d.g}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-company-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"]],template:function(n,e){1&n&&(t.YNc(0,Tt,6,20,"p-dialog",0),t.ALo(1,"async")),2&n&&t.Q6J("appLet",t.lcZ(1,1,e.modalMode$))},dependencies:[p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,ut.T,gt.e,ht.s,E.V,x.o,vt.Z,ft.D,b.Ov,b.i8,f.X$,yt.J,Ct.F],changeDetection:0}),a})()}]}];let xt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild($t),g.Bz]}),a})();var Zt=o(7871);let Nt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[P.S,xt,I.JF,Y.H,p.u5,p.UX,B.EV,$.hJ,X.O,E.S,V.U$,D.d,O.D,Q.WN,$.hJ,K._8,E.S,z.kW,x.j,F.Iu,H.A,W.LU,j.q4,w.y,k.I,Zt.n,J.K,R.D,q.D,G.G]}),a})()}}]);