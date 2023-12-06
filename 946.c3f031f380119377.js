"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[946],{8946:(Qt,Z,e)=>{e.r(Z),e.d(Z,{CertificateTypeModule:()=>Dt});var G=e(9862),m=e(6223),z=e(3516),B=e(3774),V=e(4016),g=e(6814),W=e(7327),j=e(707),F=e(5117),P=e(4532),H=e(3904),M=e(7213),K=e(3965),Y=e(5609),R=e(3714),X=e(6218),w=e(7161),k=e(4055),N=e(1319),q=e(4844),U=e(4104),tt=e(7879),nt=e(5),et=e(1532),_=e(6297),f=e(1041),t=e(9212),A=e(4221),C=e(4119),E=e(5219),v=e(2181),S=e(4664),T=e(7398),I=e(8645),y=e(9773),J=e(5619),D=e(7921),b=e(6401),p=e(5027),at=e(8114),d=e(8906),it=e(7417),r=e(478),$=e(3564),h=e(6782),L=e(4484),u=e(4582),st=e(8131);let rt=(()=>{class a{constructor(){this.store=(0,t.f3M)(A.yh),this.confirmationSrv=(0,t.f3M)(E.YP),this.router=(0,t.f3M)(f.F0),this.translateSrv=(0,t.f3M)(C.sK),this.messageSrv=(0,t.f3M)(E.ez),this.toastSrv=(0,t.f3M)(it.k),this.titleCasePipe=(0,t.f3M)(g.rS),this.unsubscribe$=new I.x,this.action$=this.store.select(u.R.getAction).pipe((0,y.R)(this.unsubscribe$)),this.entities$=this.store.select(u.R.getAll),this.loading$=this.store.select(u.R.getLoading),this.count$=this.store.select(u.R.getCount),this.tableConfig$=new J.X(void 0)}ngOnInit(){this.store.dispatch(h.A.count()),this.translateSrv.onLangChange.pipe((0,D.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()}),this.action$.subscribe(n=>{const i=this.toastSrv.getMessage(n,this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR));i&&this.messageSrv.add(i)})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onLazyLoadEvent(n){this.store.dispatch(h.A.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:d.g.VIEW,id:n.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:d.g.UPDATE,id:n.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(h.A.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...at.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return L.u}static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-type-list"]],decls:9,vars:13,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(c){return s.onLazyLoadEvent(c)})("tableEvent",function(c){return s.onTableEvent(c)}),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.ALo(6,"async"),t.qZA()()(),t._UZ(7,"router-outlet")(8,"p-toast",3)),2&i&&(t.xp6(2),t.Q6J("entities",t.lcZ(3,5,s.entities$))("loading",t.lcZ(4,7,s.loading$))("count",t.lcZ(5,9,s.count$))("config",t.lcZ(6,11,s.tableConfig$)),t.xp6(6),t.Q6J("preventDuplicates",!0))},dependencies:[U.FN,st.p,f.lC,g.Ov],changeDetection:0})}return a})();var lt=e(9666),ct=e(2572),pt=e(836),O=e(8180),dt=e(4082),mt=e(4497),x=e(7824),Q=e(7210),gt=e(3226),ht=e(2189),ut=e(8808),ft=e(9185),vt=e(1224),yt=e(8398),Tt=e(7861);function At(a,l){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=l.appLet,i=t.oxw().appLet,s=t.oxw().appLet,o=t.oxw(3);let c;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",o.showErrors$)("type",o.InputTranslationsType.INPUT)("translations",null==(c=t.lcZ(2,7,o.entity$))?null:c.nameTranslations)("disabled",i===o.ModalMode.VIEW)("form",o.form.get(n))("label",t.lcZ(3,9,"columns.name"))}}function Ct(a,l){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=l.appLet,i=t.oxw().appLet,s=t.oxw().appLet,o=t.oxw(3);let c;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",o.showErrors$)("type",o.InputTranslationsType.TEXTAREA)("translations",null==(c=t.lcZ(2,7,o.entity$))?null:c.descriptionTranslations)("disabled",i===o.ModalMode.VIEW)("form",o.form.get(n))("label",t.lcZ(3,9,"columns.description"))}}function Lt(a,l){1&a&&(t.TgZ(0,"h5",16),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.certificate.plural"))))}function Mt(a,l){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Et(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&a){const n=l.$implicit,i=t.oxw(4).appLet,s=t.oxw(2);t.xp6(2),t.Oqu(s.getTranslation(i.acronym,n.nameTranslations))}}const St=()=>({width:"100%"});function bt(a,l){if(1&a&&(t.TgZ(0,"div",11)(1,"p-table",12),t.YNc(2,Lt,4,5,"ng-template",13)(3,Mt,5,5,"ng-template",14)(4,Et,3,1,"ng-template",15),t.qZA()()),2&a){const n=t.oxw(2).appLet,i=t.oxw(2).appLet;t.xp6(1),t.Q6J("value",null==i?null:i.certificates)("tableStyle",t.DdM(3,St))("loading",n)}}const $t=()=>({width:"100%",maxWidth:"40rem"}),xt=a=>({name:a});function Zt(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"p-dialog",2),t.NdJ("visibleChange",function(s){t.CHM(n);const o=t.oxw(4);return t.KtG(o.visible=s)})("onHide",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",3)(5,"div",4),t.YNc(6,At,4,11,"div",5)(7,Ct,4,11,"div",5),t.qZA(),t.TgZ(8,"app-entity-modal-buttons",6),t.NdJ("cancel",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.hide())})("submit",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.send())}),t.qZA(),t._UZ(9,"app-entity-modal-audit",7),t.qZA(),t.YNc(10,bt,5,4,"div",8),t.qZA()}if(2&a){const n=l.appLet,i=t.oxw().appLet,s=t.oxw(2).appLet,o=t.oxw();t.Akn(t.DdM(25,$t)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,18,t.lcZ(2,21,"buttons."+n),t.VKq(26,xt,t.lcZ(3,23,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",o.visible),t.xp6(4),t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("loading",i)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",i)("entity",s)("modalMode",n),t.xp6(1),t.um2(10,n===o.ModalMode.VIEW?10:-1)}}function Rt(a,l){if(1&a&&(t.ynx(0),t.YNc(1,Zt,11,28,"p-dialog",1),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(3);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.modalMode$))}}function Nt(a,l){if(1&a&&(t.ynx(0),t.YNc(1,Rt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(2);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.loading$))}}function Ut(a,l){if(1&a&&(t.ynx(0),t.YNc(1,Nt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.language$))}}const _t=[{path:"",title:()=>{const a=(0,t.f3M)(A.yh),l=(0,t.f3M)(C.sK);return a.select($.$.getOne).pipe((0,v.h)(n=>!!n),(0,S.w)(()=>l.get(`tables.${L.u.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`).pipe((0,T.U)(n=>`${b.R} | ${n}`))))},component:rt,children:[{path:"modal",title:a=>{const l=(0,t.f3M)(A.yh),n=(0,t.f3M)(ht.J),i=(0,t.f3M)(C.sK);return l.select($.$.getOne).pipe((0,v.h)(s=>!!s),(0,S.w)(s=>i.get(`tables.${L.u.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,S.w)(o=>(0,lt.D)(n.getTitle(a.paramMap.get("id"))).pipe((0,T.U)(c=>`${b.R} | ${o} | ${c?.nameTranslations?.find(Ot=>Ot.language===s?.acronym)?.value}`))):(0,T.U)(o=>`${b.R} | ${o} | ${i.instant("buttons.new",{name:""})}`))))},component:(()=>{class a extends mt.${constructor(){super(...arguments),this.router=(0,t.f3M)(f.F0),this.route=(0,t.f3M)(f.gz),this.store=(0,t.f3M)(A.yh),this.fb=(0,t.f3M)(m.qu),this.visible=!0,this.form=this.fb.group({nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([])}),this.unsubscribe$=new I.x,this.params$=this.route.params.pipe((0,y.R)(this.unsubscribe$),(0,T.U)(n=>n)),this.loading$=this.store.select(u.R.getLoading).pipe((0,y.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,y.R)(this.unsubscribe$),(0,T.U)(n=>d.g[n.modalMode])),this.entity$=this.store.select(u.R.getOne).pipe((0,y.R)(this.unsubscribe$),(0,v.h)(n=>!!n)),this.action$=this.store.select(u.R.getAction).pipe((0,y.R)(this.unsubscribe$),(0,pt.T)(1),(0,v.h)(n=>!!n&&(n.type===x.Us.CREATE_ONE||n.type===x.Us.UPDATE_ONE)&&n.status===x.M4.SUCCESS)),this.showErrors$=new J.X(!1),this.language$=this.store.select($.$.getOne)}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,v.h)(n=>!!n.id)).subscribe(n=>{n.id&&this.store.dispatch(h.A.loadOne({id:n.id}))}),(0,ct.a)([this.modalMode$,this.form.valueChanges.pipe((0,D.O)(this.form.value))]).pipe((0,v.h)(([n])=>n===d.g.VIEW),(0,O.q)(1)).subscribe(()=>{this.form.disable(),Q.h.disableAllControls(this.form)}),this.entity$.subscribe(n=>{n&&(this.form.controls.id||this.form.addControl("id",this.fb.control(n.id,[m.kI.required])),this.form.patchValue({id:n.id,nameTranslations:n.nameTranslations,descriptionTranslations:n.descriptionTranslations}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(h.A.unload()),this.router.navigate([gt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(Q.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,O.q)(1)).subscribe(n=>{switch(n){case d.g.CREATE:this.store.dispatch(h.A.create({payload:this.form.value}));break;case d.g.UPDATE:this.store.dispatch(h.A.update({payload:this.form.value}))}})}get ModalMode(){return d.g}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return L.u}get InputTranslationsType(){return dt.A}static#t=this.\u0275fac=(()=>{let n;return function(s){return(n||(n=t.n5z(a)))(s||a)}})();static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-certificate-type-modal"]],features:[t.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["class","mt-5"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"]],template:function(i,s){1&i&&(t.YNc(0,Ut,3,3,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("appLet",t.lcZ(1,1,s.entity$))},dependencies:[ut.T,ft.e,m._Y,m.JL,m.sg,E.jx,M.V,vt.Z,yt.D,Tt.s,N.iA,g.Ov,g.i8,g.rS,C.X$],changeDetection:0})}return a})()}]}];let It=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(_t),f.Bz]})}return a})();var Jt=e(6838);let Dt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({providers:[g.rS],imports:[g.ez,nt.o,G.JF,m.u5,m.UX,U.EV,j.hJ,w.O,M.S,P.d,H.D,W.WN,F._8,M.S,K.kW,R.j,Y.Iu,X.A,q.LU,k.q4,et.y,_.D,_.D,V.G,B.K,z.D,Jt.y,It,tt.H,N.U$,R.j]})}return a})()}}]);