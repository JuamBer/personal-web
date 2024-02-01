"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[135],{2135:(Vt,I,a)=>{a.r(I),a.d(I,{SkillTypeModule:()=>Dt});var f=a(6814),z=a(9862),p=a(6223),F=a(7327),R=a(707),P=a(5117),Q=a(4532),W=a(3904),C=a(7213),j=a(3965),B=a(5609),H=a(3714),K=a(6218),X=a(7161),Y=a(4055),Z=a(1319),k=a(4844),x=a(4104),w=a(3516),q=a(3774),_=a(4016),tt=a(7879),et=a(5),at=a(1532),nt=a(6297),v=a(4961),t=a(9212),m=a(1993),E=a(4221),A=a(4119),L=a(5219),y=a(2181),b=a(4664),S=a(7398),J=a(8645),T=a(9773),st=a(7921),$=a(6401),r=a(5027),it=a(8114),d=a(8906),ot=a(7417),o=a(478),N=a(6647),h=a(5684),M=a(4904),g=a(6703),lt=a(8131);let dt=(()=>{class n{constructor(){this.store=(0,t.f3M)(E.yh),this.confirmationSrv=(0,t.f3M)(L.YP),this.router=(0,t.f3M)(v.F0),this.translateSrv=(0,t.f3M)(A.sK),this.titleCasePipe=(0,t.f3M)(f.rS),this.toastSrv=(0,t.f3M)(ot.k),this.messageSrv=(0,t.f3M)(L.ez),this.destroy$=new J.x,this.entities$=this.store.select(g.b.getAll),this.entities=(0,m.O4)(this.entities$,{initialValue:[]}),this.loading$=this.store.select(g.b.getLoading),this.loading=(0,m.O4)(this.loading$,{initialValue:!1}),this.count$=this.store.select(g.b.getCount),this.count=(0,m.O4)(this.count$,{initialValue:0}),this.tableConfig=(0,t.tdS)(void 0),this.action$=this.store.select(g.b.getAction)}ngOnInit(){this.handleLoadCount(),this.handleLoadTableConfig(),this.handleMessages()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}handleLoadCount(){this.store.dispatch(h.J.count())}handleLoadTableConfig(){this.translateSrv.onLangChange.pipe((0,T.R)(this.destroy$),(0,st.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}handleMessages(){this.action$.pipe((0,T.R)(this.destroy$)).subscribe(e=>{const s=this.toastSrv.getMessage(e,this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR));s&&this.messageSrv.add(s)})}onLazyLoadEvent(e){this.store.dispatch(h.J.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case r.rE.CREATE:this.router.navigate([this.router.url,d.g.CREATE]);break;case r.rE.VIEW:this.router.navigate([this.router.url,d.g.VIEW,e.value.id]);break;case r.rE.UPDATE:this.router.navigate([this.router.url,d.g.UPDATE,e.value.id]);break;case r.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(h.J.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig.set({...it.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.DELETE}]}})}get NumberMode(){return o.rm}get Naming(){return o.Si}get names(){return M.p}static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-skill-type-list"]],decls:3,vars:5,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(s,i){1&s&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(u){return i.onLazyLoadEvent(u)})("tableEvent",function(u){return i.onTableEvent(u)}),t.qZA(),t._UZ(1,"router-outlet")(2,"p-toast",1)),2&s&&(t.Q6J("entities",i.entities())("loading",i.loading())("count",i.count())("config",i.tableConfig()),t.xp6(2),t.Q6J("preventDuplicates",!0))},dependencies:[v.lC,x.FN,lt.p],changeDetection:0})}return n})();var pt=a(9666),mt=a(5619),ht=a(2572),gt=a(836),O=a(8180),ct=a(4082),ut=a(4497),U=a(7824),vt=a(7210),D=a(3226),ft=a(6847),yt=a(8808),St=a(9185),Tt=a(7861),Et=a(8398),At=a(1224);function Mt(n,l){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&n){const e=l.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.INPUT)("translations",null==(i=s.entity())?null:i.nameTranslations)("disabled",s.modalMode()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.name"))}}function Ct(n,l){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&n){const e=l.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.TEXTAREA)("translations",null==(i=s.entity())?null:i.descriptionTranslations)("disabled",s.modalMode()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.description"))}}function Lt(n,l){1&n&&(t.TgZ(0,"h5",13),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.skill.plural"))))}function bt(n,l){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function $t(n,l){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&n){const e=l.$implicit;t.xp6(2),t.Oqu(e.name)}}const Nt=()=>({width:"100%"});function Ut(n,l){if(1&n&&(t.TgZ(0,"div",8)(1,"p-table",9),t.YNc(2,Lt,4,5,"ng-template",10)(3,bt,5,5,"ng-template",11)(4,$t,3,1,"ng-template",12),t.qZA()()),2&n){const e=t.oxw();let s;t.xp6(1),t.Q6J("value",null==(s=e.entity())?null:s.skills)("tableStyle",t.DdM(3,Nt))("loading",e.loading())}}function It(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",14),t.NdJ("cancel",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide())})("submitForm",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",15)}if(2&n){const e=t.oxw();t.Q6J("loading",e.loading())("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",e.modalMode()),t.xp6(1),t.Q6J("loading",e.loading())("entity",e.entity())("modalMode",e.modalMode())}}const Rt=()=>({width:"100%",maxWidth:"40rem"}),Zt=n=>({name:n}),G=n=>{const l=(0,t.f3M)(E.yh),e=(0,t.f3M)(ft.N),s=(0,t.f3M)(A.sK);return l.select(N.$.getOne).pipe((0,y.h)(i=>!!i),(0,b.w)(i=>s.get(`tables.${M.p.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`).pipe(n.paramMap.get("id")?(0,b.w)(c=>(0,pt.D)(e.getTitle(n.paramMap.get("id"))).pipe((0,S.U)(u=>`${$.R} | ${c} | ${u?.nameTranslations?.find(Gt=>Gt.language===i?.acronym)?.value}`))):(0,S.U)(c=>`${$.R} | ${c} | ${s.instant("buttons.new",{name:""})}`))))};let V=(()=>{class n extends ut.${constructor(){super(...arguments),this.router=(0,t.f3M)(v.F0),this.route=(0,t.f3M)(v.gz),this.store=(0,t.f3M)(E.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.nonNullable.group({nameTranslations:this.fb.nonNullable.array([]),descriptionTranslations:this.fb.nonNullable.array([])}),this.destroy$=new J.x,this.params$=this.route.params.pipe((0,S.U)(e=>e)),this.loading$=this.store.select(g.b.getLoading),this.loading=(0,m.O4)(this.loading$,{initialValue:!1}),this.modalMode$=this.params$.pipe((0,S.U)(e=>d.g[e.modalMode])),this.modalMode=(0,m.O4)(this.modalMode$,{initialValue:d.g.VIEW}),this.entity$=this.store.select(g.b.getOne).pipe((0,y.h)(e=>!!e)),this.entity=(0,m.O4)(this.entity$),this.action$=this.store.select(g.b.getAction).pipe((0,gt.T)(1),(0,y.h)(e=>!!e&&(e.type===U.Us.CREATE_ONE||e.type===U.Us.UPDATE_ONE)&&e.status===U.M4.SUCCESS)),this.showErrors$=new mt.X(!1),this.language$=this.store.select(N.$.getOne),this.language=(0,m.O4)(this.language$)}ngOnInit(){this.handleLoadData(),this.handleParams(),this.handleEntity(),this.handleAction()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.store.dispatch(h.J.unload())}handleLoadData(){}handleParams(){this.params$.pipe((0,T.R)(this.destroy$),(0,y.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(h.J.loadOne({id:e.id}))})}handleEntity(){(0,ht.a)([this.entity$,this.modalMode$]).pipe((0,T.R)(this.destroy$)).subscribe(([e,s])=>{!e||!s||(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[p.kI.required])),this.form.patchValue(e),s===d.g.VIEW&&this.form.disable())})}handleAction(){this.action$.pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.hide()})}hide(){this.visible=!1,this.modalMode$.pipe((0,O.q)(1)).subscribe(e=>{this.router.navigate(e===d.g.CREATE?[D.A.getParentRoute(this.router.url,1)]:[D.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?(vt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,O.q)(1)).subscribe(e=>{switch(e){case d.g.CREATE:this.store.dispatch(h.J.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(h.J.update({payload:this.form.value}))}})}get NumberMode(){return o.rm}get Naming(){return o.Si}get names(){return M.p}get InputTranslationsType(){return ct.A}get ModalMode(){return d.g}static#t=this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.n5z(n)))(i||n)}})();static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-skill-type-modal"]],features:[t.qOj],decls:10,vars:21,consts:[[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","font-bold"],[3,"loading","form","name","modalMode","cancel","submitForm"],[3,"loading","entity","modalMode"]],template:function(s,i){1&s&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(u){return i.visible=u})("onHide",function(){return i.hide()}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",1)(5,"div",2),t.YNc(6,Mt,3,9,"div",3)(7,Ct,3,9,"div",3),t.qZA()(),t.YNc(8,Ut,5,4,"div",4)(9,It,2,7,"ng-template",5),t.qZA()),2&s&&(t.Akn(t.DdM(18,Rt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,11,t.lcZ(2,14,"buttons."+i.modalMode()),t.VKq(19,Zt,t.lcZ(3,16,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.um2(8,i.modalMode()===i.ModalMode.VIEW?8:-1))},dependencies:[p._Y,p.JL,p.sg,yt.T,St.e,L.jx,C.V,Z.iA,Tt.s,Et.D,At.Z,f.i8,f.rS,A.X$],changeDetection:0})}return n})();const xt=[{path:"",title:()=>{const n=(0,t.f3M)(E.yh),l=(0,t.f3M)(A.sK);return n.select(N.$.getOne).pipe((0,y.h)(e=>!!e),(0,b.w)(()=>l.get(`tables.${M.p.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.plural`).pipe((0,S.U)(e=>`${$.R} | ${e}`))))},component:dt,children:[{path:":modalMode",title:G,component:V},{path:":modalMode/:id",title:G,component:V}]}];let Jt=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(xt),v.Bz]})}return n})();var Ot=a(4830);let Dt=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({providers:[f.rS],imports:[f.ez,Jt,z.JF,p.u5,p.UX,et.o,x.EV,R.hJ,X.O,C.S,Z.U$,Q.d,W.D,F.WN,R.hJ,P._8,C.S,j.kW,H.j,B.Iu,K.A,k.LU,Y.q4,at.y,tt.H,Ot.H,nt.D,_.G,w.D,q.K]})}return n})()}}]);