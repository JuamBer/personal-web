"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[323],{7323:(xt,C,e)=>{e.r(C),e.d(C,{SkillTypeModule:()=>$t});var I=e(529),d=e(4006),R=e(3631),$=e(5593),U=e(585),J=e(4247),G=e(2137),M=e(1493),D=e(2210),O=e(7913),Q=e(1740),z=e(3054),H=e(2665),K=e(5722),V=e(1765),W=e(8783),F=e(2453),j=e(2437),B=e(8122),X=e(3067),P=e(5918),Y=e(2983),k=e(9605),w=e(6333),q=e(7921),g=e(3151),t=e(4650),T=e(2997),f=e(3416),_=e(805),v=e(9300),b=e(3900),y=e(4004),N=e(1135),tt=e(8675),E=e(5041),p=e(8426),nt=e(1392),c=e(5255),l=e(4363),Z=e(4121),u=e(8898),L=e(2803),h=e(5776),et=e(3926),A=e(6895);let st=(()=>{class a{constructor(){this.store=(0,t.f3M)(T.yh),this.confirmationSrv=(0,t.f3M)(_.YP),this.router=(0,t.f3M)(g.F0),this.translateSrv=(0,t.f3M)(f.sK),this.entities$=this.store.select(h.b.getAll),this.loading$=this.store.select(h.b.getLoading),this.count$=this.store.select(h.b.getCount),this.action$=this.store.select(h.b.getAction),this.tableConfig$=new N.X(void 0)}ngOnInit(){this.store.dispatch(u.J.count()),this.translateSrv.onLangChange.pipe((0,tt.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(n){this.store.dispatch(u.J.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:c.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:c.g.VIEW,id:n.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:c.g.UPDATE,id:n.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(u.J.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...nt.$,fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return L.p}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-list"]],decls:12,vars:17,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(i){return s.onLazyLoadEvent(i)})("tableEvent",function(i){return s.onTableEvent(i)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()(),t._UZ(11,"router-outlet")),2&n&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,t.lcZ(5,7,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".plural"))," "),t.xp6(3),t.Q6J("entities",t.lcZ(7,9,s.entities$))("loading",t.lcZ(8,11,s.loading$))("count",t.lcZ(9,13,s.count$))("config",t.lcZ(10,15,s.tableConfig$)))},dependencies:[g.lC,et.p,A.Ov,A.rS,f.X$],changeDetection:0}),a})();var ot=e(457),it=e(7579),S=e(2722),lt=e(5684),rt=e(5698),pt=e(7395),x=e(7379),dt=e(6977),mt=e(611),ct=e(8516),ut=e(3570),ht=e(4024),gt=e(4844),vt=e(4446),ft=e(7525);function yt(a,r){if(1&a&&(t.TgZ(0,"div",8),t._UZ(1,"app-input-translations",9),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=r.appLet,s=t.oxw().appLet,o=t.oxw().appLet,i=t.oxw();let m;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",i.showErrors$)("type",i.InputTranslationsType.INPUT)("translations",null==(m=t.lcZ(2,7,i.entity$))?null:m.nameTranslations)("disabled",o===i.ModalMode.VIEW)("form",i.form.controls[n])("label",t.lcZ(3,9,"columns.name"))}}function St(a,r){if(1&a&&(t.TgZ(0,"div",8),t._UZ(1,"app-input-translations",9),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=r.appLet,s=t.oxw().appLet,o=t.oxw().appLet,i=t.oxw();let m;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",i.showErrors$)("type",i.InputTranslationsType.TEXTAREA)("translations",null==(m=t.lcZ(2,7,i.entity$))?null:m.descriptionTranslations)("disabled",o===i.ModalMode.VIEW)("form",i.form.controls[n])("label",t.lcZ(3,9,"columns.description"))}}function Tt(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.send())}),t.TgZ(1,"div",4),t.YNc(2,yt,4,11,"div",5),t.YNc(3,St,4,11,"div",5),t.qZA(),t.TgZ(4,"app-entity-modal-buttons",6),t.NdJ("cancel",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.hide())})("submit",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.send())}),t.qZA(),t._UZ(5,"app-entity-modal-audit",7),t.ALo(6,"async"),t.qZA()}if(2&a){const n=r.appLet,s=t.oxw().appLet,o=t.oxw();t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("loading",n)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",s),t.xp6(1),t.Q6J("loading",n)("entity",t.lcZ(6,10,o.entity$))("modalMode",s)}}const Lt=function(){return{width:"100%",maxWidth:"40rem"}},At=function(a){return{name:a}};function Mt(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(o){t.CHM(n);const i=t.oxw();return t.KtG(i.visible=o)})("onHide",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Tt,7,12,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const n=r.appLet,s=t.oxw();t.Akn(t.DdM(17,Lt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+n),t.VKq(18,At,t.lcZ(3,13,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",s.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,s.loading$))}}const bt=[{path:"",title:(a,r)=>{const n=(0,t.f3M)(T.yh),s=(0,t.f3M)(f.sK);return n.select(Z.$.getOne).pipe((0,v.h)(o=>!!o),(0,b.w)(()=>s.get(`tables.${L.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,y.U)(o=>`${E.R} | ${o}`))))},component:st,children:[{path:"modal",title:(a,r)=>{const n=(0,t.f3M)(T.yh),s=(0,t.f3M)(ct.N),o=(0,t.f3M)(f.sK);return n.select(Z.$.getOne).pipe((0,v.h)(i=>!!i),(0,b.w)(i=>o.get(`tables.${L.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,b.w)(m=>(0,ot.D)(s.getTitle(a.paramMap.get("id"))).pipe((0,y.U)(Nt=>`${E.R} | ${m} | ${Nt.nameTranslations.find(Zt=>Zt.language===i.acronym).value}`))):(0,y.U)(m=>`${E.R} | ${m} | ${o.instant("buttons.new",{name:""})}`))))},component:(()=>{class a{constructor(){this.router=(0,t.f3M)(g.F0),this.route=(0,t.f3M)(g.gz),this.store=(0,t.f3M)(T.yh),this.fb=(0,t.f3M)(d.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[d.kI.required]),description:this.fb.control(void 0,[d.kI.required]),nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([])}),this.unsubscribe$=new it.x,this.params$=this.route.params.pipe((0,S.R)(this.unsubscribe$),(0,y.U)(n=>n)),this.loading$=this.store.select(h.b.getLoading).pipe((0,S.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,S.R)(this.unsubscribe$),(0,y.U)(n=>c.g[n.modalMode])),this.entity$=this.store.select(h.b.getOne).pipe((0,S.R)(this.unsubscribe$),(0,v.h)(n=>!!n)),this.action$=this.store.select(h.b.getAction).pipe((0,S.R)(this.unsubscribe$),(0,lt.T)(1),(0,v.h)(n=>n.type===x.Us.CREATE_ONE&&n.status===x.M4.SUCCESS)),this.showErrors$=new N.X(!1)}ngOnInit(){this.params$.pipe((0,v.h)(n=>!!n.id)).subscribe(n=>this.store.dispatch(u.J.loadOne({id:n.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,v.h)(n=>n===c.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{this.form.controls.id||this.form.addControl("id",this.fb.control(n.id,[d.kI.required])),this.form.patchValue({id:n.id,name:n.name,description:n.description,nameTranslations:n.nameTranslations,descriptionTranslations:n.descriptionTranslations})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(u.J.unload()),this.router.navigate([mt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(dt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,rt.q)(1)).subscribe(n=>{switch(n){case c.g.CREATE:this.store.dispatch(u.J.create({payload:this.form.value}));break;case c.g.UPDATE:this.store.dispatch(u.J.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return L.p}get InputTranslationsType(){return pt.A}get ModalMode(){return c.g}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"]],template:function(n,s){1&n&&(t.YNc(0,Mt,6,20,"p-dialog",0),t.ALo(1,"async")),2&n&&t.Q6J("appLet",t.lcZ(1,1,s.modalMode$))},dependencies:[d._Y,d.JL,d.sg,ut.T,ht.e,M.V,gt.s,vt.D,ft.Z,A.Ov,A.i8,f.X$],changeDetection:0}),a})()}]}];let Et=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(bt),g.Bz]}),a})();var Ct=e(6068);let $t=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[Y.S,Et,I.JF,d.u5,d.UX,F.EV,$.hJ,H.O,M.S,V.U$,J.d,G.D,R.WN,$.hJ,U._8,M.S,D.kW,Q.j,O.Iu,z.A,W.LU,K.q4,k.y,q.I,P.H,Ct.H,w.D,X.G,j.D,B.K]}),a})()}}]);