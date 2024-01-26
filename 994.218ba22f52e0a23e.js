"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[994],{2994:(Qt,x,e)=>{e.r(x),e.d(x,{CertificateGroupModule:()=>Dt});var B=e(9862),d=e(6223),F=e(3516),P=e(3774),V=e(4016),g=e(6814),j=e(707),K=e(5117),W=e(4532),Y=e(3904),_=e(7213),H=e(5609),X=e(3714),w=e(6218),k=e(7161),q=e(4055),G=e(4227),N=e(1319),tt=e(4844),Z=e(4104),nt=e(7879),et=e(5),at=e(1532),U=e(6297),f=e(1041),t=e(9212),L=e(4221),E=e(4119),b=e(5219),v=e(2181),S=e(4664),A=e(7398),R=e(8645),C=e(9773),I=e(5619),it=e(7921),T=e(6401),p=e(5027),ot=e(8114),m=e(8906),st=e(7417),s=e(478),y=e(4575),u=e(464),M=e(4756),h=e(6971),rt=e(8131);let ct=(()=>{class a{constructor(){this.store=(0,t.f3M)(L.yh),this.confirmationSrv=(0,t.f3M)(b.YP),this.router=(0,t.f3M)(f.F0),this.translateSrv=(0,t.f3M)(E.sK),this.titleCasePipe=(0,t.f3M)(g.rS),this.toastSrv=(0,t.f3M)(st.k),this.messageSrv=(0,t.f3M)(b.ez),this.unsubscribe$=new R.x,this.action$=this.store.select(h.$.getAction).pipe((0,C.R)(this.unsubscribe$)),this.entities$=this.store.select(h.$.getAll),this.loading$=this.store.select(h.$.getLoading),this.count$=this.store.select(h.$.getCount),this.tableConfig$=new I.X(void 0)}ngOnInit(){this.store.dispatch(u.t.count()),this.translateSrv.onLangChange.pipe((0,it.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()}),this.action$.subscribe(n=>{const i=this.toastSrv.getMessage(n,this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR));i&&this.messageSrv.add(i)})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onLazyLoadEvent(n){this.store.dispatch(u.t.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case p.rE.CREATE:this.router.navigate([this.router.url,m.g.CREATE]);break;case p.rE.VIEW:this.router.navigate([this.router.url,m.g.VIEW,n.value.id]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,m.g.UPDATE,n.value.id]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant("tables.certificateGroup.singular")}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(u.t.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...ot.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:p.E7.TRANSLATIONS,filter:!1,sort:!1},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:p.E7.TRANSLATIONS,filter:!1,sort:!1}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return M.z}static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-group-list"]],decls:7,vars:13,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(i,o){1&i&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(c){return o.onLazyLoadEvent(c)})("tableEvent",function(c){return o.onTableEvent(c)}),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async"),t.qZA(),t._UZ(5,"router-outlet")(6,"p-toast",1)),2&i&&(t.Q6J("entities",t.lcZ(1,5,o.entities$))("loading",t.lcZ(2,7,o.loading$))("count",t.lcZ(3,9,o.count$))("config",t.lcZ(4,11,o.tableConfig$)),t.xp6(6),t.Q6J("preventDuplicates",!0))},dependencies:[rt.p,f.lC,Z.FN,g.Ov],changeDetection:0})}return a})();var pt=e(9666),mt=e(836),J=e(8180),dt=e(4082),gt=e(4497),$=e(7824),ut=e(7210),D=e(3226),ht=e(4384),ft=e(7861),vt=e(8808),Ct=e(9185),At=e(1224),Lt=e(8398);function Et(a,r){if(1&a&&(t.TgZ(0,"div",7),t._UZ(1,"app-input-translations",8),t.ALo(2,"translate"),t.qZA()),2&a){const n=r.appLet,i=t.oxw().appLet,o=t.oxw().appLet,l=t.oxw(2).appLet,c=t.oxw();t.Q6J("appIsLoading",o),t.xp6(1),t.Q6J("showErrors",c.showErrors$)("type",c.InputTranslationsType.INPUT)("translations",null==l?null:l.nameTranslations)("disabled",i===c.ModalMode.VIEW)("form",c.form.get(n))("label",t.lcZ(2,7,"columns.name"))}}function Mt(a,r){if(1&a&&(t.TgZ(0,"div",7),t._UZ(1,"app-input-translations",8),t.ALo(2,"translate"),t.qZA()),2&a){const n=r.appLet,i=t.oxw().appLet,o=t.oxw().appLet,l=t.oxw(2).appLet,c=t.oxw();t.Q6J("appIsLoading",o),t.xp6(1),t.Q6J("showErrors",c.showErrors$)("type",c.InputTranslationsType.TEXTAREA)("translations",null==l?null:l.descriptionTranslations)("disabled",i===c.ModalMode.VIEW)("form",c.form.get(n))("label",t.lcZ(2,7,"columns.description"))}}function bt(a,r){1&a&&(t.TgZ(0,"h5",14),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.certificate.plural"))))}function St(a,r){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Tt(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&a){const n=r.$implicit,i=t.oxw(4).appLet,o=t.oxw(2);t.xp6(2),t.Oqu(o.getTranslation(null==i?null:i.acronym,null==n?null:n.nameTranslations))}}const yt=()=>({width:"100%"});function $t(a,r){if(1&a&&(t.TgZ(0,"div",9)(1,"p-table",10),t.YNc(2,bt,4,5,"ng-template",11)(3,St,5,5,"ng-template",12)(4,Tt,3,1,"ng-template",13),t.qZA()()),2&a){const n=t.oxw(2).appLet,i=t.oxw(2).appLet;t.xp6(1),t.Q6J("value",null==i?null:i.certificates)("tableStyle",t.DdM(3,yt))("loading",n)}}function xt(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"app-entity-modal-buttons",15),t.NdJ("cancel",function(){t.CHM(n);const o=t.oxw(5);return t.KtG(o.hide())})("submit",function(){t.CHM(n);const o=t.oxw(5);return t.KtG(o.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",16)}if(2&a){const n=t.oxw().appLet,i=t.oxw().appLet,o=t.oxw(2).appLet,l=t.oxw();t.Q6J("loading",i)("form",l.form)("name",l.names.name(l.Naming.CAMEL_CASE,l.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",i)("entity",o)("modalMode",n)}}const _t=()=>({width:"100%",maxWidth:"40rem"}),Gt=a=>({name:a});function Nt(a,r){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"p-dialog",1),t.NdJ("visibleChange",function(o){t.CHM(n);const l=t.oxw(4);return t.KtG(l.visible=o)})("onHide",function(){t.CHM(n);const o=t.oxw(4);return t.KtG(o.hide())}),t.ALo(2,"translate"),t.ALo(3,"lowercase"),t.ALo(4,"translate"),t.TgZ(5,"form",2)(6,"div",3),t.YNc(7,Et,3,9,"div",4)(8,Mt,3,9,"div",4),t.qZA()(),t.YNc(9,$t,5,4,"div",5)(10,xt,2,7,"ng-template",6),t.qZA(),t.BQk()}if(2&a){const n=r.appLet,i=t.oxw(4);t.xp6(1),t.Akn(t.DdM(18,_t)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(2,11,t.lcZ(3,14,"buttons."+n),t.VKq(19,Gt,t.lcZ(4,16,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.um2(9,n===i.ModalMode.VIEW?9:-1)}}function Zt(a,r){if(1&a&&(t.ynx(0),t.YNc(1,Nt,11,21,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(3);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.modalMode$))}}function Ut(a,r){if(1&a&&(t.ynx(0),t.YNc(1,Zt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(2);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.loading$))}}function Rt(a,r){if(1&a&&(t.ynx(0),t.YNc(1,Ut,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.language$))}}const O=a=>{const r=(0,t.f3M)(L.yh),n=(0,t.f3M)(ht.R),i=(0,t.f3M)(E.sK);return r.select(y.$.getOne).pipe((0,v.h)(o=>!!o),(0,S.w)(o=>i.get(`tables.${M.z.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,S.w)(l=>(0,pt.D)(n.getTitle(a.paramMap.get("id"))).pipe((0,A.U)(c=>`${T.R} | ${l} | ${c?.nameTranslations?.find(Ot=>Ot.language===o?.acronym)?.value}`))):(0,A.U)(l=>`${T.R} | ${l} | ${i.instant("buttons.new",{name:""})}`))))};let Q=(()=>{class a extends gt.${constructor(){super(...arguments),this.router=(0,t.f3M)(f.F0),this.route=(0,t.f3M)(f.gz),this.store=(0,t.f3M)(L.yh),this.fb=(0,t.f3M)(d.qu),this.visible=!0,this.form=this.fb.nonNullable.group({nameTranslations:this.fb.nonNullable.array([]),descriptionTranslations:this.fb.nonNullable.array([])}),this.unsubscribe$=new R.x,this.params$=this.route.params.pipe((0,C.R)(this.unsubscribe$),(0,A.U)(n=>n)),this.loading$=this.store.select(h.$.getLoading).pipe((0,C.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,C.R)(this.unsubscribe$),(0,A.U)(n=>m.g[n.modalMode])),this.entity$=this.store.select(h.$.getOne).pipe((0,C.R)(this.unsubscribe$),(0,v.h)(n=>!!n)),this.action$=this.store.select(h.$.getAction).pipe((0,C.R)(this.unsubscribe$),(0,mt.T)(1),(0,v.h)(n=>!!n&&(n.type===$.Us.CREATE_ONE||n.type===$.Us.UPDATE_ONE)&&n.status===$.M4.SUCCESS)),this.showErrors$=new I.X(!1),this.language$=this.store.select(y.$.getOne)}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,v.h)(n=>!!n.id)).subscribe(n=>{n.id&&this.store.dispatch(u.t.loadOne({id:n.id}))}),this.modalMode$.pipe((0,v.h)(n=>n===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{n&&(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(n.id,[d.kI.required])),this.form.patchValue({id:n.id,nameTranslations:n.nameTranslations,descriptionTranslations:n.descriptionTranslations}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.store.dispatch(u.t.unload())}hide(){this.visible=!1,this.modalMode$.pipe((0,J.q)(1)).subscribe(n=>{this.router.navigate(n===m.g.CREATE?[D.A.getParentRoute(this.router.url,1)]:[D.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?(ut.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,J.q)(1)).subscribe(n=>{switch(n){case m.g.CREATE:this.store.dispatch(u.t.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(u.t.update({payload:this.form.value}))}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return M.z}get InputTranslationsType(){return dt.A}get ModalMode(){return m.g}static#t=this.\u0275fac=(()=>{let n;return function(o){return(n||(n=t.n5z(a)))(o||a)}})();static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-group-modal"]],features:[t.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"]],template:function(i,o){1&i&&(t.YNc(0,Rt,3,3,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("appLet",t.lcZ(1,1,o.entity$))},dependencies:[d._Y,d.JL,d.sg,ft.s,_.V,b.jx,vt.T,Ct.e,At.Z,Lt.D,N.iA,g.Ov,g.i8,g.rS,E.X$],changeDetection:0})}return a})();const It=[{path:"",title:()=>{const a=(0,t.f3M)(L.yh),r=(0,t.f3M)(E.sK);return a.select(y.$.getOne).pipe((0,v.h)(n=>!!n),(0,S.w)(()=>r.get(`tables.${M.z.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.plural`).pipe((0,A.U)(n=>`${T.R} | ${n}`))))},component:ct,children:[{path:":modalMode",title:O,component:Q},{path:":modalMode/:id",title:O,component:Q}]}];let Jt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(It),f.Bz]})}return a})();var z=e(7171);let Dt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({providers:[g.rS],imports:[g.ez,B.JF,d.u5,d.UX,nt.H,k.O,_.S,W.d,Y.D,j.hJ,K._8,X.j,H.Iu,w.A,tt.LU,q.q4,at.y,G.m,et.o,U.D,G.m,V.G,U.D,P.K,F.D,z.o,z.o,Jt,N.U$,Z.EV]})}return a})()}}]);