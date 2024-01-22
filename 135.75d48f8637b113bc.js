"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[135],{2135:(Dt,$,e)=>{e.r($),e.d($,{SkillTypeModule:()=>Qt});var d=e(6814),I=e(9862),g=e(6223),Q=e(7327),Z=e(707),G=e(5117),D=e(4532),O=e(3904),M=e(7213),z=e(3965),B=e(5609),F=e(3714),H=e(6218),K=e(7161),V=e(4055),N=e(1319),W=e(4844),U=e(4104),P=e(3516),j=e(3774),Y=e(4016),X=e(7879),k=e(5),w=e(1532),q=e(6297),v=e(1041),t=e(9212),S=e(4221),_=e(4119),L=e(5219),f=e(2181),b=e(4664),T=e(7398),J=e(8645),y=e(9773),R=e(5619),tt=e(7921),E=e(6401),c=e(5027),nt=e(8114),m=e(8906),et=e(7417),l=e(478),C=e(4575),u=e(5684),A=e(4904),h=e(6703),at=e(8131);let ot=(()=>{class a{constructor(){this.store=(0,t.f3M)(S.yh),this.confirmationSrv=(0,t.f3M)(L.YP),this.router=(0,t.f3M)(v.F0),this.translateSrv=(0,t.f3M)(_.sK),this.titleCasePipe=(0,t.f3M)(d.rS),this.toastSrv=(0,t.f3M)(et.k),this.messageSrv=(0,t.f3M)(L.ez),this.unsubscribe$=new J.x,this.action$=this.store.select(h.b.getAction).pipe((0,y.R)(this.unsubscribe$)),this.entities$=this.store.select(h.b.getAll),this.loading$=this.store.select(h.b.getLoading),this.count$=this.store.select(h.b.getCount),this.tableConfig$=new R.X(void 0)}ngOnInit(){this.store.dispatch(u.J.count()),this.translateSrv.onLangChange.pipe((0,tt.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()}),this.action$.subscribe(n=>{const i=this.toastSrv.getMessage(n,this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR));i&&this.messageSrv.add(i)})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onLazyLoadEvent(n){this.store.dispatch(u.J.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case c.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.CREATE}]);break;case c.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:m.g.VIEW,id:n.value.id}]);break;case c.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.UPDATE,id:n.value.id}]);break;case c.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(u.J.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.skillType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...nt.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`)),fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:c.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:c.E7.TRANSLATIONS,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:c.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return A.p}static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-list"]],decls:7,vars:13,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(i,s){1&i&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(p){return s.onLazyLoadEvent(p)})("tableEvent",function(p){return s.onTableEvent(p)}),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async"),t.qZA(),t._UZ(5,"router-outlet")(6,"p-toast",1)),2&i&&(t.Q6J("entities",t.lcZ(1,5,s.entities$))("loading",t.lcZ(2,7,s.loading$))("count",t.lcZ(3,9,s.count$))("config",t.lcZ(4,11,s.tableConfig$)),t.xp6(6),t.Q6J("preventDuplicates",!0))},dependencies:[v.lC,U.FN,at.p,d.Ov],changeDetection:0})}return a})();var st=e(9666),lt=e(836),rt=e(8180),pt=e(4082),ct=e(4497),x=e(7824),mt=e(7210),dt=e(3226),gt=e(6847),ut=e(8808),ht=e(9185),vt=e(7861),ft=e(8398),yt=e(1224);function Tt(a,r){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=r.appLet,i=t.oxw().appLet,s=t.oxw().appLet,o=t.oxw(3);let p;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",o.showErrors$)("type",o.InputTranslationsType.INPUT)("translations",null==(p=t.lcZ(2,7,o.entity$))?null:p.nameTranslations)("disabled",i===o.ModalMode.VIEW)("form",o.form.get(n))("label",t.lcZ(3,9,"columns.name"))}}function St(a,r){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const n=r.appLet,i=t.oxw().appLet,s=t.oxw().appLet,o=t.oxw(3);let p;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",o.showErrors$)("type",o.InputTranslationsType.TEXTAREA)("translations",null==(p=t.lcZ(2,7,o.entity$))?null:p.descriptionTranslations)("disabled",i===o.ModalMode.VIEW)("form",o.form.get(n))("label",t.lcZ(3,9,"columns.description"))}}function _t(a,r){1&a&&(t.TgZ(0,"h5",16),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&a&&(t.xp6(1),t.Oqu(t.lcZ(2,1,t.lcZ(3,3,"tables.skill.plural"))))}function At(a,r){1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Mt(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&a){const n=r.$implicit;t.xp6(2),t.Oqu(n.name)}}const Lt=()=>({width:"100%"});function bt(a,r){if(1&a&&(t.TgZ(0,"div",11)(1,"p-table",12),t.YNc(2,_t,4,5,"ng-template",13)(3,At,5,5,"ng-template",14)(4,Mt,3,1,"ng-template",15),t.qZA()()),2&a){const n=t.oxw(2).appLet,i=t.oxw(2).appLet;t.xp6(1),t.Q6J("value",null==i?null:i.skills)("tableStyle",t.DdM(3,Lt))("loading",n)}}function Et(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"app-entity-modal-buttons",5),t.NdJ("cancel",function(){t.CHM(n);const s=t.oxw(5);return t.KtG(s.hide())})("submit",function(){t.CHM(n);const s=t.oxw(5);return t.KtG(s.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",6)}if(2&a){const n=t.oxw().appLet,i=t.oxw().appLet,s=t.oxw(2).appLet,o=t.oxw();t.Q6J("loading",i)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",i)("entity",s)("modalMode",n)}}const Ct=()=>({width:"100%",maxWidth:"40rem"}),xt=a=>({name:a});function $t(a,r){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"p-dialog",1),t.NdJ("visibleChange",function(s){t.CHM(n);const o=t.oxw(4);return t.KtG(o.visible=s)})("onHide",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.hide())}),t.ALo(2,"translate"),t.ALo(3,"lowercase"),t.ALo(4,"translate"),t.TgZ(5,"form",2)(6,"div",3),t.YNc(7,Tt,4,11,"div",4)(8,St,4,11,"div",4),t.qZA(),t.TgZ(9,"app-entity-modal-buttons",5),t.NdJ("cancel",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.hide())})("submit",function(){t.CHM(n);const s=t.oxw(4);return t.KtG(s.send())}),t.qZA(),t._UZ(10,"app-entity-modal-audit",6),t.qZA(),t.YNc(11,bt,5,4,"div",7)(12,Et,2,7,"ng-template",8),t.qZA(),t.BQk()}if(2&a){const n=r.appLet,i=t.oxw().appLet,s=t.oxw(2).appLet,o=t.oxw();t.xp6(1),t.Akn(t.DdM(25,Ct)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(2,18,t.lcZ(3,21,"buttons."+n),t.VKq(26,xt,t.lcZ(4,23,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",o.visible),t.xp6(4),t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("loading",i)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",n),t.xp6(1),t.Q6J("loading",i)("entity",s)("modalMode",n),t.xp6(1),t.um2(11,n===o.ModalMode.VIEW?11:-1)}}function Zt(a,r){if(1&a&&(t.ynx(0),t.YNc(1,$t,13,28,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(3);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.modalMode$))}}function Nt(a,r){if(1&a&&(t.ynx(0),t.YNc(1,Zt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw(2);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.loading$))}}function Ut(a,r){if(1&a&&(t.ynx(0),t.YNc(1,Nt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.language$))}}const Jt=[{path:"",title:()=>{const a=(0,t.f3M)(S.yh),r=(0,t.f3M)(_.sK);return a.select(C.$.getOne).pipe((0,f.h)(n=>!!n),(0,b.w)(()=>r.get(`tables.${A.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,T.U)(n=>`${E.R} | ${n}`))))},component:ot,children:[{path:"modal",title:a=>{const r=(0,t.f3M)(S.yh),n=(0,t.f3M)(gt.N),i=(0,t.f3M)(_.sK);return r.select(C.$.getOne).pipe((0,f.h)(s=>!!s),(0,b.w)(s=>i.get(`tables.${A.p.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,b.w)(o=>(0,st.D)(n.getTitle(a.paramMap.get("id"))).pipe((0,T.U)(p=>`${E.R} | ${o} | ${p?.nameTranslations?.find(Gt=>Gt.language===s?.acronym)?.value}`))):(0,T.U)(o=>`${E.R} | ${o} | ${i.instant("buttons.new",{name:""})}`))))},component:(()=>{class a extends ct.${constructor(){super(...arguments),this.router=(0,t.f3M)(v.F0),this.route=(0,t.f3M)(v.gz),this.store=(0,t.f3M)(S.yh),this.fb=(0,t.f3M)(g.qu),this.visible=!0,this.form=this.fb.group({nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([])}),this.unsubscribe$=new J.x,this.params$=this.route.params.pipe((0,y.R)(this.unsubscribe$),(0,T.U)(n=>n)),this.loading$=this.store.select(h.b.getLoading).pipe((0,y.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,y.R)(this.unsubscribe$),(0,T.U)(n=>m.g[n.modalMode])),this.entity$=this.store.select(h.b.getOne).pipe((0,y.R)(this.unsubscribe$),(0,f.h)(n=>!!n)),this.action$=this.store.select(h.b.getAction).pipe((0,y.R)(this.unsubscribe$),(0,lt.T)(1),(0,f.h)(n=>!!n&&(n.type===x.Us.CREATE_ONE||n.type===x.Us.UPDATE_ONE)&&n.status===x.M4.SUCCESS)),this.showErrors$=new R.X(!1),this.language$=this.store.select(C.$.getOne)}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,f.h)(n=>!!n.id)).subscribe(n=>{n.id&&this.store.dispatch(u.J.loadOne({id:n.id}))}),this.modalMode$.pipe((0,f.h)(n=>n===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{n&&(this.form.controls.id||this.form.addControl("id",this.fb.control(n.id,[g.kI.required])),this.form.patchValue({id:n.id,nameTranslations:n.nameTranslations,descriptionTranslations:n.descriptionTranslations}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(u.J.unload()),this.router.navigate([dt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(mt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,rt.q)(1)).subscribe(n=>{switch(n){case m.g.CREATE:this.store.dispatch(u.J.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(u.J.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return A.p}get InputTranslationsType(){return pt.A}get ModalMode(){return m.g}static#t=this.\u0275fac=(()=>{let n;return function(s){return(n||(n=t.n5z(a)))(s||a)}})();static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-skill-type-modal"]],features:[t.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["class","mt-5"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"]],template:function(i,s){1&i&&(t.YNc(0,Ut,3,3,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("appLet",t.lcZ(1,1,s.entity$))},dependencies:[g._Y,g.JL,g.sg,ut.T,ht.e,L.jx,M.V,N.iA,vt.s,ft.D,yt.Z,d.Ov,d.i8,d.rS,_.X$],changeDetection:0})}return a})()}]}];let Rt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(Jt),v.Bz]})}return a})();var It=e(4830);let Qt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({providers:[d.rS],imports:[d.ez,Rt,I.JF,g.u5,g.UX,k.o,U.EV,Z.hJ,K.O,M.S,N.U$,D.d,O.D,Q.WN,Z.hJ,G._8,M.S,z.kW,F.j,B.Iu,H.A,W.LU,V.q4,w.y,X.H,It.H,q.D,Y.G,P.D,j.K]})}return a})()}}]);