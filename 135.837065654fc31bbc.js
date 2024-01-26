"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[135],{2135:(Gt,U,n)=>{n.r(U),n.d(U,{SkillTypeModule:()=>Ot});var $=n(6814),F=n(9862),m=n(6223),Q=n(7327),I=n(707),W=n(5117),P=n(4532),j=n(3904),b=n(7213),B=n(3965),H=n(5609),K=n(3714),X=n(6218),Y=n(7161),k=n(4055),Z=n(1319),w=n(4844),R=n(4104),q=n(3516),_=n(3774),tt=n(4016),et=n(7879),nt=n(5),at=n(1532),st=n(6297),v=n(1041),t=n(9212),p=n(1993),T=n(4221),y=n(4119),A=n(5219),f=n(2181),M=n(4664),S=n(7398),x=n(8645),J=n(5619),O=n(9773),it=n(7921),C=n(6401),r=n(5027),ot=n(8114),d=n(8906),lt=n(7417),o=n(478),L=n(4575),h=n(5684),E=n(4904),c=n(6703),rt=n(8131);let pt=(()=>{class a{constructor(){this.store=(0,t.f3M)(T.yh),this.confirmationSrv=(0,t.f3M)(A.YP),this.router=(0,t.f3M)(v.F0),this.translateSrv=(0,t.f3M)(y.sK),this.titleCasePipe=(0,t.f3M)($.rS),this.toastSrv=(0,t.f3M)(lt.k),this.messageSrv=(0,t.f3M)(A.ez),this.unsubscribe$=new x.x,this.entities$=this.store.select(c.b.getAll),this.entities$$=(0,p.O4)(this.entities$,{initialValue:[]}),this.loading$=this.store.select(c.b.getLoading),this.loading$$=(0,p.O4)(this.loading$,{initialValue:!1}),this.count$=this.store.select(c.b.getCount),this.count$$=(0,p.O4)(this.count$,{initialValue:0}),this.tableConfig$=new J.X(void 0),this.tableConfig$$=(0,p.O4)(this.tableConfig$),this.action$=this.store.select(c.b.getAction)}ngOnInit(){this.handleLoadCount(),this.handleLoadTableConfig(),this.handleMessages()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}handleLoadCount(){this.store.dispatch(h.J.count())}handleLoadTableConfig(){this.translateSrv.onLangChange.pipe((0,O.R)(this.unsubscribe$),(0,it.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}handleMessages(){this.action$.pipe((0,O.R)(this.unsubscribe$)).subscribe(e=>{const s=this.toastSrv.getMessage(e,this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR));s&&this.messageSrv.add(s)})}onLazyLoadEvent(e){this.store.dispatch(h.J.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case r.rE.CREATE:this.router.navigate([this.router.url,d.g.CREATE]);break;case r.rE.VIEW:this.router.navigate([this.router.url,d.g.VIEW,e.value.id]);break;case r.rE.UPDATE:this.router.navigate([this.router.url,d.g.UPDATE,e.value.id]);break;case r.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(h.J.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...ot.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`)}),event:r.rE.DELETE}]}})}get NumberMode(){return o.rm}get Naming(){return o.Si}get names(){return E.p}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-list"]],decls:3,vars:5,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(s,i){1&s&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(g){return i.onLazyLoadEvent(g)})("tableEvent",function(g){return i.onTableEvent(g)}),t.qZA(),t._UZ(1,"router-outlet")(2,"p-toast",1)),2&s&&(t.Q6J("entities",i.entities$$())("loading",i.loading$$())("count",i.count$$())("config",i.tableConfig$$()),t.xp6(2),t.Q6J("preventDuplicates",!0))},dependencies:[v.lC,R.FN,rt.p],changeDetection:0})}return a})();var mt=n(9666),ht=n(836),D=n(8180),ct=n(4082),ut=n(4497),N=n(7824),gt=n(7210),G=n(3226),vt=n(6847),ft=n(8808),$t=n(9185),St=n(7861),Tt=n(8398),yt=n(1224);function Et(a,l){if(1&a&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&a){const e=l.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading$$()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.INPUT)("translations",null==(i=s.entity$$())?null:i.nameTranslations)("disabled",s.modalMode$$()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.name"))}}function bt(a,l){if(1&a&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&a){const e=l.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading$$()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.TEXTAREA)("translations",null==(i=s.entity$$())?null:i.descriptionTranslations)("disabled",s.modalMode$$()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.description"))}}function At(a,l){1&a&&(t.TgZ(0,"h5",13),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.skill.plural"))))}function Mt(a,l){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Ct(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&a){const e=l.$implicit;t.xp6(2),t.Oqu(e.name)}}const Lt=()=>({width:"100%"});function Nt(a,l){if(1&a&&(t.TgZ(0,"div",8)(1,"p-table",9),t.YNc(2,At,4,5,"ng-template",10)(3,Mt,5,5,"ng-template",11)(4,Ct,3,1,"ng-template",12),t.qZA()()),2&a){const e=t.oxw();let s;t.xp6(1),t.Q6J("value",null==(s=e.entity$$())?null:s.skills)("tableStyle",t.DdM(3,Lt))("loading",e.loading$$())}}function Ut(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",14),t.NdJ("cancel",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide())})("submitForm",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",15)}if(2&a){const e=t.oxw();t.Q6J("loading",e.loading$$())("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",e.modalMode$$()),t.xp6(1),t.Q6J("loading",e.loading$$())("entity",e.entity$$())("modalMode",e.modalMode$$())}}const It=()=>({width:"100%",maxWidth:"40rem"}),Zt=a=>({name:a}),V=a=>{const l=(0,t.f3M)(T.yh),e=(0,t.f3M)(vt.N),s=(0,t.f3M)(y.sK);return l.select(L.$.getOne).pipe((0,f.h)(i=>!!i),(0,M.w)(i=>s.get(`tables.${E.p.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,M.w)(u=>(0,mt.D)(e.getTitle(a.paramMap.get("id"))).pipe((0,S.U)(g=>`${C.R} | ${u} | ${g?.nameTranslations?.find(Dt=>Dt.language===i?.acronym)?.value}`))):(0,S.U)(u=>`${C.R} | ${u} | ${s.instant("buttons.new",{name:""})}`))))};let z=(()=>{class a extends ut.${constructor(){super(...arguments),this.router=(0,t.f3M)(v.F0),this.route=(0,t.f3M)(v.gz),this.store=(0,t.f3M)(T.yh),this.fb=(0,t.f3M)(m.qu),this.visible=!0,this.form=this.fb.nonNullable.group({nameTranslations:this.fb.nonNullable.array([]),descriptionTranslations:this.fb.nonNullable.array([])}),this.unsubscribe$=new x.x,this.params$=this.route.params.pipe((0,S.U)(e=>e)),this.loading$=this.store.select(c.b.getLoading),this.loading$$=(0,p.O4)(this.loading$,{initialValue:!1}),this.modalMode$=this.params$.pipe((0,S.U)(e=>d.g[e.modalMode])),this.modalMode$$=(0,p.O4)(this.modalMode$,{initialValue:d.g.VIEW}),this.entity$=this.store.select(c.b.getOne).pipe((0,f.h)(e=>!!e)),this.entity$$=(0,p.O4)(this.entity$),this.action$=this.store.select(c.b.getAction).pipe((0,ht.T)(1),(0,f.h)(e=>!!e&&(e.type===N.Us.CREATE_ONE||e.type===N.Us.UPDATE_ONE)&&e.status===N.M4.SUCCESS)),this.showErrors$=new J.X(!1),this.language$=this.store.select(L.$.getOne),this.language$$=(0,p.O4)(this.language$)}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,f.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(h.J.loadOne({id:e.id}))}),this.modalMode$.pipe((0,f.h)(e=>e===d.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{e&&(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[m.kI.required])),this.form.patchValue({id:e.id,nameTranslations:e.nameTranslations,descriptionTranslations:e.descriptionTranslations}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.store.dispatch(h.J.unload())}hide(){this.visible=!1,this.modalMode$.pipe((0,D.q)(1)).subscribe(e=>{this.router.navigate(e===d.g.CREATE?[G.A.getParentRoute(this.router.url,1)]:[G.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?(gt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,D.q)(1)).subscribe(e=>{switch(e){case d.g.CREATE:this.store.dispatch(h.J.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(h.J.update({payload:this.form.value}))}})}get NumberMode(){return o.rm}get Naming(){return o.Si}get names(){return E.p}get InputTranslationsType(){return ct.A}get ModalMode(){return d.g}static#t=this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.n5z(a)))(i||a)}})();static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-modal"]],features:[t.qOj],decls:10,vars:21,consts:[[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"],[3,"loading","form","name","modalMode","cancel","submitForm"],[3,"loading","entity","modalMode"]],template:function(s,i){1&s&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(g){return i.visible=g})("onHide",function(){return i.hide()}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",1)(5,"div",2),t.YNc(6,Et,3,9,"div",3)(7,bt,3,9,"div",3),t.qZA()(),t.YNc(8,Nt,5,4,"div",4)(9,Ut,2,7,"ng-template",5),t.qZA()),2&s&&(t.Akn(t.DdM(18,It)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,11,t.lcZ(2,14,"buttons."+i.modalMode$$()),t.VKq(19,Zt,t.lcZ(3,16,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.um2(8,i.modalMode$$()===i.ModalMode.VIEW?8:-1))},dependencies:[m._Y,m.JL,m.sg,ft.T,$t.e,A.jx,b.V,Z.iA,St.s,Tt.D,yt.Z,$.i8,$.rS,y.X$],changeDetection:0})}return a})();const Rt=[{path:"",title:()=>{const a=(0,t.f3M)(T.yh),l=(0,t.f3M)(y.sK);return a.select(L.$.getOne).pipe((0,f.h)(e=>!!e),(0,M.w)(()=>l.get(`tables.${E.p.name(o.Si.CAMEL_CASE,o.rm.SINGULAR)}.plural`).pipe((0,S.U)(e=>`${C.R} | ${e}`))))},component:pt,children:[{path:":modalMode",title:V,component:z},{path:":modalMode/:id",title:V,component:z}]}];let xt=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(Rt),v.Bz]})}return a})();var Jt=n(4830);let Ot=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({providers:[$.rS],imports:[$.ez,xt,F.JF,m.u5,m.UX,nt.o,R.EV,I.hJ,Y.O,b.S,Z.U$,P.d,j.D,Q.WN,I.hJ,W._8,b.S,B.kW,K.j,H.Iu,X.A,w.LU,k.q4,at.y,et.H,Jt.H,st.D,tt.G,q.D,_.K]})}return a})()}}]);