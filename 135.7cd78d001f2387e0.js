"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[135],{2135:(Vt,I,a)=>{a.r(I),a.d(I,{SkillTypeModule:()=>Gt});var y=a(6814),V=a(9862),p=a(6223),z=a(7327),O=a(707),F=a(5117),Q=a(4532),W=a(3904),b=a(7213),j=a(3965),H=a(5609),K=a(3714),B=a(6218),X=a(7161),Y=a(4055),Z=a(1319),k=a(4844),w=a(4104),q=a(3516),_=a(3774),tt=a(4016),et=a(7879),at=a(5),nt=a(1532),st=a(6297),f=a(4961),t=a(9212),h=a(1993),A=a(4221),C=a(4119),$=a(5219),E=a(2181),N=a(4664),T=a(7398),D=a(8645),M=a(9773),it=a(7921),R=a(6401),d=a(5027),lt=a(8114),m=a(8906),ot=a(7417),o=a(7824),S=a(2697),l=a(478),U=a(6647),c=a(5684),L=a(4904),g=a(6703),rt=a(8131);let mt=(()=>{class n{constructor(){this.store=(0,t.f3M)(A.yh),this.confirmationSrv=(0,t.f3M)($.YP),this.router=(0,t.f3M)(f.F0),this.translateSrv=(0,t.f3M)(C.sK),this.titleCasePipe=(0,t.f3M)(y.rS),this.toastSrv=(0,t.f3M)(ot.k),this.messageSrv=(0,t.f3M)($.ez),this.destroy$=new D.x,this.entities$=this.store.select(g.b.getAll),this.entities=(0,h.O4)(this.entities$,{initialValue:[]}),this.loading$=(0,o.c$)(this.store.select(g.b.getAction),[o.Us.COUNT,o.Us.LOAD_MANY,o.Us.DELETE_ONE]),this.loading=(0,h.O4)(this.loading$,{initialValue:!1}),this.count$=this.store.select(g.b.getCount),this.count=(0,h.O4)(this.count$,{initialValue:0}),this.tableConfig=(0,t.tdS)(void 0),this.action$=this.store.select(g.b.getAction)}ngOnInit(){this.handleLoadCount(),this.handleLoadTableConfig(),this.handleMessages()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}handleLoadCount(){this.store.dispatch(c.J.count((0,S.I)({feedback:new Set([o.M4.ERROR])})))}handleLoadTableConfig(){this.translateSrv.onLangChange.pipe((0,M.R)(this.destroy$),(0,it.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}handleMessages(){this.action$.pipe((0,M.R)(this.destroy$)).subscribe(e=>{const s=this.toastSrv.getMessage(this.translateSrv,e,this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR));s&&this.messageSrv.add(s)})}onLazyLoadEvent(e){this.store.dispatch(c.J.loadAll((0,S.I)({feedback:new Set([o.M4.ERROR]),payload:e})))}onTableEvent(e){switch(e.type){case d.rE.CREATE:this.router.navigate([this.router.url,m.g.CREATE]);break;case d.rE.VIEW:this.router.navigate([this.router.url,m.g.VIEW,e.value.id]);break;case d.rE.UPDATE:this.router.navigate([this.router.url,m.g.UPDATE,e.value.id]);break;case d.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{collectionName:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`),entityName:e.value.getDisplayName(this.translateSrv.currentLang)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c.J.delete((0,S.I)({feedback:new Set([o.M4.PENDING,o.M4.SUCCESS,o.M4.ERROR]),id:e.value.id})))}})}}loadTableConfig(){this.tableConfig.set({...lt.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:d.E7.TRANSLATIONS,filter:!1,sort:!1},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:d.E7.TRANSLATIONS,filter:!1,sort:!1}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return L.p}static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-skill-type-list"]],decls:2,vars:4,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(s,i){1&s&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(v){return i.onLazyLoadEvent(v)})("tableEvent",function(v){return i.onTableEvent(v)}),t.qZA(),t._UZ(1,"router-outlet")),2&s&&t.Q6J("entities",i.entities())("loading",i.loading())("count",i.count())("config",i.tableConfig())},dependencies:[f.lC,rt.p],changeDetection:0})}return n})();var pt=a(9666),ht=a(5619),ct=a(2572),gt=a(836),x=a(8180),ut=a(4082),vt=a(4497),ft=a(7210),J=a(3226),St=a(6847),yt=a(8808),Et=a(9185),Tt=a(7861),Mt=a(8398),At=a(1224);function Ct(n,r){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&n){const e=r.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.INPUT)("translations",null==(i=s.entity())?null:i.nameTranslations)("disabled",s.modalMode()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.name"))}}function Lt(n,r){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&n){const e=r.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.TEXTAREA)("translations",null==(i=s.entity())?null:i.descriptionTranslations)("disabled",s.modalMode()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.description"))}}function bt(n,r){1&n&&(t.TgZ(0,"h5",13),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.skill.plural"))))}function $t(n,r){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Nt(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.name)}}const Rt=()=>({width:"100%"});function Ut(n,r){if(1&n&&(t.TgZ(0,"div",8)(1,"p-table",9),t.YNc(2,bt,4,5,"ng-template",10)(3,$t,5,5,"ng-template",11)(4,Nt,3,1,"ng-template",12),t.qZA()()),2&n){const e=t.oxw();let s;t.xp6(1),t.Q6J("value",null==(s=e.entity())?null:s.skills)("tableStyle",t.DdM(3,Rt))("loading",e.loading())}}function It(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",14),t.NdJ("cancel",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide())})("submitForm",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",15)}if(2&n){const e=t.oxw();t.Q6J("loading",e.loading())("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",e.modalMode()),t.xp6(1),t.Q6J("loading",e.loading())("entity",e.entity())("modalMode",e.modalMode())}}const Ot=()=>({width:"100%",maxWidth:"40rem"}),Zt=n=>({name:n}),G=n=>{const r=(0,t.f3M)(A.yh),e=(0,t.f3M)(St.N),s=(0,t.f3M)(C.sK);return r.select(U.$.getOne).pipe((0,E.h)(i=>!!i),(0,N.w)(i=>s.get(`tables.${L.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(n.paramMap.get("id")?(0,N.w)(u=>(0,pt.D)(e.getTitle(n.paramMap.get("id"))).pipe((0,T.U)(v=>`${R.R} | ${u} | ${v?.nameTranslations?.find(Pt=>Pt.language===i?.acronym)?.value}`))):(0,T.U)(u=>`${R.R} | ${u} | ${s.instant("buttons.new",{name:""})}`))))};let P=(()=>{class n extends vt.${constructor(){super(...arguments),this.router=(0,t.f3M)(f.F0),this.route=(0,t.f3M)(f.gz),this.store=(0,t.f3M)(A.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.nonNullable.group({nameTranslations:this.fb.nonNullable.array([]),descriptionTranslations:this.fb.nonNullable.array([])}),this.destroy$=new D.x,this.params$=this.route.params.pipe((0,T.U)(e=>e)),this.loading$=(0,o.c$)(this.store.select(g.b.getAction),[o.Us.LOAD_ONE,o.Us.CREATE_ONE,o.Us.UPDATE_ONE]),this.loading=(0,h.O4)(this.loading$,{initialValue:!1}),this.modalMode$=this.params$.pipe((0,T.U)(e=>m.g[e.modalMode])),this.modalMode=(0,h.O4)(this.modalMode$,{initialValue:m.g.VIEW}),this.entity$=this.store.select(g.b.getOne).pipe((0,E.h)(e=>!!e)),this.entity=(0,h.O4)(this.entity$),this.action$=this.store.select(g.b.getAction).pipe((0,gt.T)(1),(0,E.h)(e=>!!e&&(e.type===o.Us.CREATE_ONE||e.type===o.Us.UPDATE_ONE)&&e.status===o.M4.SUCCESS)),this.showErrors$=new ht.X(!1),this.language$=this.store.select(U.$.getOne),this.language=(0,h.O4)(this.language$)}ngOnInit(){this.handleLoadData(),this.handleParams(),this.handleEntity(),this.handleAction()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.store.dispatch(c.J.unload())}handleLoadData(){}handleParams(){this.params$.pipe((0,M.R)(this.destroy$),(0,E.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(c.J.loadOne((0,S.I)({feedback:new Set([o.M4.ERROR]),id:e.id})))})}handleEntity(){(0,ct.a)([this.entity$,this.modalMode$]).pipe((0,M.R)(this.destroy$)).subscribe(([e,s])=>{!e||!s||(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[p.kI.required])),this.form.patchValue(e),s===m.g.VIEW&&this.form.disable())})}handleAction(){this.action$.pipe((0,M.R)(this.destroy$)).subscribe(()=>{this.hide()})}hide(){this.visible=!1,this.modalMode$.pipe((0,x.q)(1)).subscribe(e=>{this.router.navigate(e===m.g.CREATE?[J.A.getParentRoute(this.router.url,1)]:[J.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?(ft.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,x.q)(1)).subscribe(e=>{switch(e){case m.g.CREATE:this.store.dispatch(c.J.create((0,S.I)({feedback:new Set([o.M4.PENDING,o.M4.SUCCESS,o.M4.ERROR]),payload:this.form.value})));break;case m.g.UPDATE:this.store.dispatch(c.J.update((0,S.I)({feedback:new Set([o.M4.PENDING,o.M4.SUCCESS,o.M4.ERROR]),payload:this.form.value})))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return L.p}get InputTranslationsType(){return ut.A}get ModalMode(){return m.g}static#t=this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.n5z(n)))(i||n)}})();static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-skill-type-modal"]],features:[t.qOj],decls:10,vars:21,consts:[[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","font-bold"],[3,"loading","form","name","modalMode","cancel","submitForm"],[3,"loading","entity","modalMode"]],template:function(s,i){1&s&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(v){return i.visible=v})("onHide",function(){return i.hide()}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",1)(5,"div",2),t.YNc(6,Ct,3,9,"div",3)(7,Lt,3,9,"div",3),t.qZA()(),t.YNc(8,Ut,5,4,"div",4)(9,It,2,7,"ng-template",5),t.qZA()),2&s&&(t.Akn(t.DdM(18,Ot)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,11,t.lcZ(2,14,"buttons."+i.modalMode()),t.VKq(19,Zt,t.lcZ(3,16,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.um2(8,i.modalMode()===i.ModalMode.VIEW?8:-1))},dependencies:[p._Y,p.JL,p.sg,yt.T,Et.e,$.jx,b.V,Z.iA,Tt.s,Mt.D,At.Z,y.i8,y.rS,C.X$],changeDetection:0})}return n})();const Dt=[{path:"",title:()=>{const n=(0,t.f3M)(A.yh),r=(0,t.f3M)(C.sK);return n.select(U.$.getOne).pipe((0,E.h)(e=>!!e),(0,N.w)(()=>r.get(`tables.${L.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,T.U)(e=>`${R.R} | ${e}`))))},component:mt,children:[{path:":modalMode",title:G,component:P},{path:":modalMode/:id",title:G,component:P}]}];let xt=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(Dt),f.Bz]})}return n})();var Jt=a(4830);let Gt=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({providers:[y.rS],imports:[y.ez,xt,V.JF,p.u5,p.UX,at.o,w.EV,O.hJ,X.O,b.S,Z.U$,Q.d,W.D,z.WN,O.hJ,F._8,b.S,j.kW,K.j,H.Iu,B.A,k.LU,Y.q4,nt.y,et.H,Jt.H,st.D,tt.G,q.D,_.K]})}return n})()}}]);