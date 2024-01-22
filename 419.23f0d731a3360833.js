"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[419],{419:(Kt,$,a)=>{a.r($),a.d($,{CompanyModule:()=>Gt});var Q=a(9862),p=a(6223),D=a(3516),O=a(3774),G=a(4016),d=a(6814),K=a(7327),Z=a(707),z=a(5117),F=a(4532),B=a(3904),M=a(7213),j=a(3965),V=a(5609),U=a(3714),W=a(6218),Y=a(7161),H=a(4055),N=a(1319),P=a(4844),J=a(4104),X=a(7879),w=a(5),q=a(1532),k=a(6297),h=a(1041),t=a(9212),C=a(4221),A=a(4119),S=a(5219),v=a(2181),b=a(4664),L=a(7398),I=a(8645),f=a(9773),R=a(5619),tt=a(7921),x=a(6401),c=a(5027),nt=a(8114),m=a(8906),at=a(7417),s=a(478),T=a(4575),g=a(5170),E=a(5991),u=a(451),ot=a(8131);let it=(()=>{class o{constructor(){this.store=(0,t.f3M)(C.yh),this.confirmationSrv=(0,t.f3M)(S.YP),this.router=(0,t.f3M)(h.F0),this.translateSrv=(0,t.f3M)(A.sK),this.titleCasePipe=(0,t.f3M)(d.rS),this.toastSrv=(0,t.f3M)(at.k),this.messageSrv=(0,t.f3M)(S.ez),this.unsubscribe$=new I.x,this.action$=this.store.select(u.K.getAction).pipe((0,f.R)(this.unsubscribe$)),this.entities$=this.store.select(u.K.getAll),this.loading$=this.store.select(u.K.getLoading),this.count$=this.store.select(u.K.getCount),this.tableConfig$=new R.X(void 0)}ngOnInit(){this.store.dispatch(g._.count()),this.translateSrv.onLangChange.pipe((0,tt.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()}),this.action$.subscribe(n=>{const e=this.toastSrv.getMessage(n,this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR));e&&this.messageSrv.add(e)})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onLazyLoadEvent(n){this.store.dispatch(g._.loadAll({payload:n}))}onTableEvent(n){switch(n.type){case c.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.CREATE}]);break;case c.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:m.g.VIEW,id:n.value.id}]);break;case c.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.UPDATE,id:n.value.id}]);break;case c.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(g._.delete({id:n.value.id}))}})}}loadTableConfig(){const n=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),n.push({action:"view",icon:"pi pi-search-plus"}),n.push({action:"edit",icon:"pi pi-pencil"}),n.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...nt.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.plural`)),fields:[{field:"name",label:this.translateSrv.instant("columns.name"),type:c.E7.TEXT,filter:!0,sort:!0},{field:"location",label:this.translateSrv.instant("columns.location"),type:c.E7.TEXT,filter:!0,sort:!0},{field:"descriptionTranslations",label:this.translateSrv.instant("columns.description"),type:c.E7.TRANSLATIONS,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.DELETE}]}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return E.t}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-company-list"]],decls:9,vars:13,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(y){return i.onLazyLoadEvent(y)})("tableEvent",function(y){return i.onTableEvent(y)}),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.ALo(6,"async"),t.qZA()()(),t._UZ(7,"router-outlet")(8,"p-toast",3)),2&e&&(t.xp6(2),t.Q6J("entities",t.lcZ(3,5,i.entities$))("loading",t.lcZ(4,7,i.loading$))("count",t.lcZ(5,9,i.count$))("config",t.lcZ(6,11,i.tableConfig$)),t.xp6(6),t.Q6J("preventDuplicates",!0))},dependencies:[h.lC,J.FN,ot.p,d.Ov],changeDetection:0})}return o})();var st=a(9666),lt=a(836),rt=a(8180),pt=a(4082),ct=a(4497),_=a(7824),mt=a(7210),dt=a(3226),gt=a(237),ut=a(8808),ht=a(9185),vt=a(7861),ft=a(1224),yt=a(8398),Lt=a(6946),Ct=a(7371);function At(o,l){if(1&o&&(t.TgZ(0,"div",11)(1,"span",12),t._UZ(2,"input",13),t.TgZ(3,"label",14),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",15),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&o){const n=l.appLet,e=t.oxw().appLet,i=t.oxw(5);t.Q6J("appIsLoading",e),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,i.form.get(n))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.get(n))))}}function Et(o,l){if(1&o&&(t.TgZ(0,"div",11)(1,"span",12),t._UZ(2,"input",13),t.TgZ(3,"label",14),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",15),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&o){const n=l.appLet,e=t.oxw().appLet,i=t.oxw(5);t.Q6J("appIsLoading",e),t.xp6(2),t.Q6J("id",n)("formControlName",n),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+n)," ",t.lcZ(6,9,i.form.get(n))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.get(n))))}}function Mt(o,l){if(1&o&&(t.TgZ(0,"div",16),t._UZ(1,"app-input-translations",17),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&o){const n=l.appLet,e=t.oxw().appLet,i=t.oxw().appLet,r=t.oxw(4);let y;t.Q6J("appIsLoading",e),t.xp6(1),t.Q6J("showErrors",r.showErrors$)("type",r.InputTranslationsType.TEXTAREA)("translations",null==(y=t.lcZ(2,7,r.entity$))?null:y.descriptionTranslations)("disabled",i===r.ModalMode.VIEW)("form",r.form.get(n))("label",t.lcZ(3,9,"columns.description"))}}function St(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"form",5)(1,"div",6),t.YNc(2,At,11,15,"div",7)(3,Et,11,15,"div",7)(4,Mt,4,11,"div",8),t.qZA(),t.TgZ(5,"app-entity-modal-buttons",9),t.NdJ("cancel",function(){t.CHM(n);const i=t.oxw(5);return t.KtG(i.hide())})("submit",function(){t.CHM(n);const i=t.oxw(5);return t.KtG(i.send())}),t.qZA(),t._UZ(6,"app-entity-modal-audit",10),t.qZA()}if(2&o){const n=l.appLet,e=t.oxw().appLet,i=t.oxw(3).appLet,r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","location"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("loading",n)("form",r.form)("name",r.names.name(r.Naming.CAMEL_CASE,r.NumberMode.SINGULAR))("modalMode",e),t.xp6(1),t.Q6J("loading",n)("entity",i)("modalMode",e)}}function bt(o,l){1&o&&(t.TgZ(0,"h5",23),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,t.lcZ(3,3,"tables.position.plural"))," "))}function xt(o,l){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,1,t.lcZ(4,3,"columns.name"))))}function Tt(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA()()),2&o){const n=l.$implicit,e=t.oxw(4).appLet,i=t.oxw(2);t.xp6(2),t.Oqu(i.getTranslation(null==e?null:e.acronym,null==n?null:n.nameTranslations))}}const _t=()=>({width:"100%"});function $t(o,l){if(1&o&&(t.TgZ(0,"div",18)(1,"p-table",19),t.YNc(2,bt,4,5,"ng-template",20)(3,xt,5,5,"ng-template",21)(4,Tt,3,1,"ng-template",22),t.qZA()()),2&o){const n=t.oxw(2).appLet,e=t.oxw(2).appLet;t.xp6(1),t.Q6J("value",null==e?null:e.positions)("tableStyle",t.DdM(3,_t))("loading",n)}}const Zt=()=>({width:"100%",maxWidth:"40rem"}),Ut=o=>({name:o});function Nt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"p-dialog",2),t.NdJ("visibleChange",function(i){t.CHM(n);const r=t.oxw(4);return t.KtG(r.visible=i)})("onHide",function(){t.CHM(n);const i=t.oxw(4);return t.KtG(i.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,St,7,11,"form",3),t.ALo(5,"async"),t.YNc(6,$t,5,4,"div",4),t.qZA()}if(2&o){const n=l.appLet,e=t.oxw(4);t.Akn(t.DdM(18,Zt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,9,t.lcZ(2,12,"buttons."+n),t.VKq(19,Ut,t.lcZ(3,14,"tables."+e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",e.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,16,e.loading$)),t.xp6(2),t.um2(6,n===e.ModalMode.VIEW?6:-1)}}function Jt(o,l){if(1&o&&(t.ynx(0),t.YNc(1,Nt,7,21,"p-dialog",1),t.ALo(2,"async"),t.BQk()),2&o){const n=t.oxw(3);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.modalMode$))}}function It(o,l){if(1&o&&(t.ynx(0),t.YNc(1,Jt,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.loading$))}}function Rt(o,l){if(1&o&&(t.ynx(0),t.YNc(1,It,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,n.language$))}}const Qt=[{path:"",title:()=>{const o=(0,t.f3M)(C.yh),l=(0,t.f3M)(A.sK);return o.select(T.$.getOne).pipe((0,v.h)(n=>!!n),(0,b.w)(()=>l.get(`tables.${E.t.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.plural`).pipe((0,L.U)(n=>`${x.R} | ${n}`))))},component:it,children:[{path:"modal",title:o=>{const l=(0,t.f3M)(C.yh),n=(0,t.f3M)(gt.J),e=(0,t.f3M)(A.sK);return l.select(T.$.getOne).pipe((0,v.h)(i=>!!i),(0,b.w)(()=>e.get(`tables.${E.t.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`).pipe(o.paramMap.get("id")?(0,b.w)(i=>(0,st.D)(n.getTitle(o.paramMap.get("id"))).pipe((0,L.U)(r=>`${x.R} | ${i} | ${r.name}`))):(0,L.U)(i=>`${x.R} | ${i} | ${e.instant("buttons.new",{name:""})}`))))},component:(()=>{class o extends ct.${constructor(){super(...arguments),this.router=(0,t.f3M)(h.F0),this.route=(0,t.f3M)(h.gz),this.store=(0,t.f3M)(C.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[p.kI.required]),descriptionTranslations:this.fb.array([]),location:this.fb.control(void 0,[p.kI.required])}),this.unsubscribe$=new I.x,this.params$=this.route.params.pipe((0,f.R)(this.unsubscribe$),(0,L.U)(n=>n)),this.loading$=this.store.select(u.K.getLoading).pipe((0,f.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,f.R)(this.unsubscribe$),(0,L.U)(n=>m.g[n.modalMode])),this.entity$=this.store.select(u.K.getOne).pipe((0,f.R)(this.unsubscribe$),(0,v.h)(n=>!!n)),this.action$=this.store.select(u.K.getAction).pipe((0,f.R)(this.unsubscribe$),(0,lt.T)(1),(0,v.h)(n=>!!n&&(n.type===_.Us.CREATE_ONE||n.type===_.Us.UPDATE_ONE)&&n.status===_.M4.SUCCESS)),this.showErrors$=new R.X(!1),this.language$=this.store.select(T.$.getOne)}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,v.h)(n=>!!n.id)).subscribe(n=>{n.id&&this.store.dispatch(g._.loadOne({id:n.id}))}),this.modalMode$.pipe((0,v.h)(n=>n===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(n=>{n&&(this.form.controls.id||this.form.addControl("id",this.fb.control(n.id,[p.kI.required])),this.form.patchValue({id:n.id,location:n.location,name:n.name,descriptionTranslations:n.descriptionTranslations}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(g._.unload()),this.router.navigate([dt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(mt.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,rt.q)(1)).subscribe(n=>{switch(n){case m.g.CREATE:this.store.dispatch(g._.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(g._.update({payload:this.form.value}))}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return E.t}get InputTranslationsType(){return pt.A}get ModalMode(){return m.g}static#t=this.\u0275fac=(()=>{let n;return function(i){return(n||(n=t.n5z(o)))(i||o)}})();static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-company-modal"]],features:[t.qOj],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup",4,"appLet"],["class","mt-5"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"mt-5"],[3,"value","tableStyle","loading"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"m-0","p-0","f-bold"]],template:function(e,i){1&e&&(t.YNc(0,Rt,3,3,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.entity$))},dependencies:[ut.T,ht.e,vt.s,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,S.jx,M.V,N.iA,U.o,ft.Z,yt.D,d.Ov,d.i8,d.rS,A.X$,Lt.J,Ct.F],changeDetection:0})}return o})()}]}];let Dt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(Qt),h.Bz]})}return o})();var Ot=a(4994);let Gt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#a=this.\u0275inj=t.cJS({providers:[d.rS],imports:[d.ez,w.o,Dt,Q.JF,X.H,p.u5,p.UX,J.EV,Z.hJ,Y.O,M.S,N.U$,F.d,B.D,K.WN,Z.hJ,z._8,M.S,j.kW,U.j,V.Iu,W.A,P.LU,H.q4,q.y,Ot.n,O.K,D.D,k.D,G.G]})}return o})()}}]);