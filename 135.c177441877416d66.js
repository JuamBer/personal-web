"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[135],{2135:(Vt,I,n)=>{n.r(I),n.d(I,{SkillTypeModule:()=>Dt});var f=n(6814),F=n(9862),m=n(6223),P=n(7327),R=n(707),Q=n(5117),W=n(4532),j=n(3904),A=n(7213),B=n(3965),H=n(5609),K=n(3714),X=n(6218),Y=n(7161),k=n(4055),Z=n(1319),w=n(4844),x=n(4104),q=n(3516),_=n(3774),tt=n(4016),et=n(7879),nt=n(5),at=n(1532),st=n(6297),v=n(1041),t=n(9212),p=n(1993),y=n(4221),b=n(4119),M=n(5219),$=n(2181),C=n(4664),S=n(7398),J=n(8645),O=n(5619),T=n(9773),it=n(7921),L=n(6401),r=n(5027),lt=n(8114),d=n(8906),ot=n(7417),l=n(478),N=n(4575),h=n(5684),E=n(4904),c=n(6703),rt=n(8131);let pt=(()=>{class a{constructor(){this.store=(0,t.f3M)(y.yh),this.confirmationSrv=(0,t.f3M)(M.YP),this.router=(0,t.f3M)(v.F0),this.translateSrv=(0,t.f3M)(b.sK),this.titleCasePipe=(0,t.f3M)(f.rS),this.toastSrv=(0,t.f3M)(ot.k),this.messageSrv=(0,t.f3M)(M.ez),this.unsubscribe$=new J.x,this.entities$=this.store.select(c.b.getAll),this.entities$$=(0,p.O4)(this.entities$,{initialValue:[]}),this.loading$=this.store.select(c.b.getLoading),this.loading$$=(0,p.O4)(this.loading$,{initialValue:!1}),this.count$=this.store.select(c.b.getCount),this.count$$=(0,p.O4)(this.count$,{initialValue:0}),this.tableConfig$=new O.X(void 0),this.tableConfig$$=(0,p.O4)(this.tableConfig$),this.action$=this.store.select(c.b.getAction)}ngOnInit(){this.handleLoadCount(),this.handleLoadTableConfig(),this.handleMessages()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}handleLoadCount(){this.store.dispatch(h.J.count())}handleLoadTableConfig(){this.translateSrv.onLangChange.pipe((0,T.R)(this.unsubscribe$),(0,it.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}handleMessages(){this.action$.pipe((0,T.R)(this.unsubscribe$)).subscribe(e=>{const s=this.toastSrv.getMessage(e,this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR));s&&this.messageSrv.add(s)})}onLazyLoadEvent(e){this.store.dispatch(h.J.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case r.rE.CREATE:this.router.navigate([this.router.url,d.g.CREATE]);break;case r.rE.VIEW:this.router.navigate([this.router.url,d.g.VIEW,e.value.id]);break;case r.rE.UPDATE:this.router.navigate([this.router.url,d.g.UPDATE,e.value.id]);break;case r.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(h.J.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...lt.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:r.E7.TRANSLATIONS,filter:!1,sort:!1}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return E.p}static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-list"]],decls:3,vars:5,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(s,i){1&s&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(g){return i.onLazyLoadEvent(g)})("tableEvent",function(g){return i.onTableEvent(g)}),t.qZA(),t._UZ(1,"router-outlet")(2,"p-toast",1)),2&s&&(t.Q6J("entities",i.entities$$())("loading",i.loading$$())("count",i.count$$())("config",i.tableConfig$$()),t.xp6(2),t.Q6J("preventDuplicates",!0))},dependencies:[v.lC,x.FN,rt.p],changeDetection:0})}return a})();var mt=n(9666),ht=n(2572),ct=n(836),D=n(8180),ut=n(4082),gt=n(4497),U=n(7824),vt=n(7210),G=n(3226),ft=n(6847),$t=n(8808),St=n(9185),Tt=n(7861),yt=n(8398),bt=n(1224);function Et(a,o){if(1&a&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&a){const e=o.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading$$()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.INPUT)("translations",null==(i=s.entity$$())?null:i.nameTranslations)("disabled",s.modalMode$$()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.name"))}}function At(a,o){if(1&a&&(t.TgZ(0,"div",6),t._UZ(1,"app-input-translations",7),t.ALo(2,"translate"),t.qZA()),2&a){const e=o.appLet,s=t.oxw();let i;t.Q6J("appIsLoading",s.loading$$()),t.xp6(1),t.Q6J("showErrors",s.showErrors$)("type",s.InputTranslationsType.TEXTAREA)("translations",null==(i=s.entity$$())?null:i.descriptionTranslations)("disabled",s.modalMode$$()===s.ModalMode.VIEW)("form",s.form.get(e))("label",t.lcZ(2,7,"columns.description"))}}function Mt(a,o){1&a&&(t.TgZ(0,"h5",13),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.skill.plural"))))}function Ct(a,o){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Lt(a,o){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&a){const e=o.$implicit;t.xp6(2),t.Oqu(e.name)}}const Nt=()=>({width:"100%"});function Ut(a,o){if(1&a&&(t.TgZ(0,"div",8)(1,"p-table",9),t.YNc(2,Mt,4,5,"ng-template",10)(3,Ct,5,5,"ng-template",11)(4,Lt,3,1,"ng-template",12),t.qZA()()),2&a){const e=t.oxw();let s;t.xp6(1),t.Q6J("value",null==(s=e.entity$$())?null:s.skills)("tableStyle",t.DdM(3,Nt))("loading",e.loading$$())}}function It(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",14),t.NdJ("cancel",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide())})("submitForm",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",15)}if(2&a){const e=t.oxw();t.Q6J("loading",e.loading$$())("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",e.modalMode$$()),t.xp6(1),t.Q6J("loading",e.loading$$())("entity",e.entity$$())("modalMode",e.modalMode$$())}}const Rt=()=>({width:"100%",maxWidth:"40rem"}),Zt=a=>({name:a}),V=a=>{const o=(0,t.f3M)(y.yh),e=(0,t.f3M)(ft.N),s=(0,t.f3M)(b.sK);return o.select(N.$.getOne).pipe((0,$.h)(i=>!!i),(0,C.w)(i=>s.get(`tables.${E.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,C.w)(u=>(0,mt.D)(e.getTitle(a.paramMap.get("id"))).pipe((0,S.U)(g=>`${L.R} | ${u} | ${g?.nameTranslations?.find(Gt=>Gt.language===i?.acronym)?.value}`))):(0,S.U)(u=>`${L.R} | ${u} | ${s.instant("buttons.new",{name:""})}`))))};let z=(()=>{class a extends gt.${constructor(){super(...arguments),this.router=(0,t.f3M)(v.F0),this.route=(0,t.f3M)(v.gz),this.store=(0,t.f3M)(y.yh),this.fb=(0,t.f3M)(m.qu),this.visible=!0,this.form=this.fb.nonNullable.group({nameTranslations:this.fb.nonNullable.array([]),descriptionTranslations:this.fb.nonNullable.array([])}),this.unsubscribe$=new J.x,this.params$=this.route.params.pipe((0,S.U)(e=>e)),this.loading$=this.store.select(c.b.getLoading),this.loading$$=(0,p.O4)(this.loading$,{initialValue:!1}),this.modalMode$=this.params$.pipe((0,S.U)(e=>d.g[e.modalMode])),this.modalMode$$=(0,p.O4)(this.modalMode$,{initialValue:d.g.VIEW}),this.entity$=this.store.select(c.b.getOne).pipe((0,$.h)(e=>!!e)),this.entity$$=(0,p.O4)(this.entity$),this.action$=this.store.select(c.b.getAction).pipe((0,ct.T)(1),(0,$.h)(e=>!!e&&(e.type===U.Us.CREATE_ONE||e.type===U.Us.UPDATE_ONE)&&e.status===U.M4.SUCCESS)),this.showErrors$=new O.X(!1),this.language$=this.store.select(N.$.getOne),this.language$$=(0,p.O4)(this.language$)}ngOnInit(){this.handleLoadData(),this.handleParams(),this.handleEntity(),this.handleAction()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.store.dispatch(h.J.unload())}handleLoadData(){}handleParams(){this.params$.pipe((0,T.R)(this.unsubscribe$),(0,$.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(h.J.loadOne({id:e.id}))})}handleEntity(){(0,ht.a)([this.entity$,this.modalMode$]).pipe((0,T.R)(this.unsubscribe$)).subscribe(([e,s])=>{!e||!s||(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[m.kI.required])),this.form.patchValue({id:e.id,nameTranslations:e.nameTranslations,descriptionTranslations:e.descriptionTranslations}),s===d.g.VIEW&&this.form.disable())})}handleAction(){this.action$.pipe((0,T.R)(this.unsubscribe$)).subscribe(()=>{this.hide()})}hide(){this.visible=!1,this.modalMode$.pipe((0,D.q)(1)).subscribe(e=>{this.router.navigate(e===d.g.CREATE?[G.A.getParentRoute(this.router.url,1)]:[G.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?(vt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,D.q)(1)).subscribe(e=>{switch(e){case d.g.CREATE:this.store.dispatch(h.J.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(h.J.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return E.p}get InputTranslationsType(){return ut.A}get ModalMode(){return d.g}static#t=this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.n5z(a)))(i||a)}})();static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-modal"]],features:[t.qOj],decls:10,vars:21,consts:[[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"],[3,"loading","form","name","modalMode","cancel","submitForm"],[3,"loading","entity","modalMode"]],template:function(s,i){1&s&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(g){return i.visible=g})("onHide",function(){return i.hide()}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",1)(5,"div",2),t.YNc(6,Et,3,9,"div",3)(7,At,3,9,"div",3),t.qZA()(),t.YNc(8,Ut,5,4,"div",4)(9,It,2,7,"ng-template",5),t.qZA()),2&s&&(t.Akn(t.DdM(18,Rt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,11,t.lcZ(2,14,"buttons."+i.modalMode$$()),t.VKq(19,Zt,t.lcZ(3,16,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.um2(8,i.modalMode$$()===i.ModalMode.VIEW?8:-1))},dependencies:[m._Y,m.JL,m.sg,$t.T,St.e,M.jx,A.V,Z.iA,Tt.s,yt.D,bt.Z,f.i8,f.rS,b.X$],changeDetection:0})}return a})();const xt=[{path:"",title:()=>{const a=(0,t.f3M)(y.yh),o=(0,t.f3M)(b.sK);return a.select(N.$.getOne).pipe((0,$.h)(e=>!!e),(0,C.w)(()=>o.get(`tables.${E.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,S.U)(e=>`${L.R} | ${e}`))))},component:pt,children:[{path:":modalMode",title:V,component:z},{path:":modalMode/:id",title:V,component:z}]}];let Jt=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(xt),v.Bz]})}return a})();var Ot=n(4830);let Dt=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({providers:[f.rS],imports:[f.ez,Jt,F.JF,m.u5,m.UX,nt.o,x.EV,R.hJ,Y.O,A.S,Z.U$,W.d,j.D,P.WN,R.hJ,Q._8,A.S,B.kW,K.j,H.Iu,X.A,w.LU,k.q4,at.y,et.H,Ot.H,st.D,tt.G,q.D,_.K]})}return a})()}}]);