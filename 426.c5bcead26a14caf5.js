"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[426],{9426:(Zt,y,n)=>{n.r(y),n.d(y,{SkillModule:()=>xt});var N=n(529),r=n(4006),J=n(3631),E=n(5593),U=n(585),R=n(4247),I=n(2137),f=n(1493),C=n(2210),D=n(7913),b=n(1740),G=n(3054),Q=n(2665),O=n(5722),M=n(8177),z=n(1765),F=n(8783),H=n(2453),K=n(2437),j=n(8122),k=n(3067),B=n(2983),P=n(9605),V=n(6333),W=n(7921),X=n(6068),u=n(550),t=n(4650),Y=n(4450),T=n(9653),L=n(3416),w=n(805),x=n(7579),g=n(9300),q=n(8675),d=n(8426),p=n(5255),l=n(4363),_=n(4121),m=n(5862),Z=n(61),c=n(1674),tt=n(5818),S=n(6895);let nt=(()=>{class o{constructor(){this.store=(0,t.f3M)(T.yh),this.confirmationSrv=(0,t.f3M)(w.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(L.sK),this.entities$=this.store.select(c.x.getAll),this.loading$=this.store.select(c.x.getLoading),this.count$=this.store.select(c.x.getCount),this.action$=this.store.select(c.x.getAction),this.tableConfig$=new x.x}ngOnInit(){this.store.dispatch(m.D.count()),this.store.select(_.$.getOne).pipe((0,g.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.pipe((0,q.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(m.D.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case d.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.CREATE}]);break;case d.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:p.g.VIEW,id:e.value.id}]);break;case d.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.UPDATE,id:e.value.id}]);break;case d.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(m.D.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...Y.N.defaultGenericTableConfig,fields:[{field:"name",label:"Name",type:d.E7.TEXT,filter:!0,sort:!0},{field:"percentage",label:"Percentage",type:d.E7.PERCENTAGE,filter:!0,sort:!0},{field:"skillType.name",label:"Skill Type",type:d.E7.TEXT,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:d.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return Z.Z}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-skill-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(v){return a.onLazyLoadEvent(v)})("tableEvent",function(v){return a.onTableEvent(v)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,a.entities$))("loading",t.lcZ(7,9,a.loading$))("count",t.lcZ(8,11,a.count$))("config",t.lcZ(9,13,a.tableConfig$)))},dependencies:[u.lC,tt.p,S.Ov,L.X$],changeDetection:0}),o})();var ot=n(457),A=n(4004),h=n(2722),at=n(5684),it=n(5698),$=n(7379),st=n(6977),lt=n(611),rt=n(8898),dt=n(5776),pt=n(4354),mt=n(3570),ct=n(4024),ut=n(4446),gt=n(7525),ht=n(8452),vt=n(6222);function ft(o,s){if(1&o&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"input",11),t.TgZ(3,"label",12),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&o){const e=s.appLet,a=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,i.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.controls[e])))}}function Lt(o,s){if(1&o&&(t.TgZ(0,"div",9)(1,"span",10),t._UZ(2,"p-dropdown",14),t.ALo(3,"async"),t.TgZ(4,"label",12),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",13),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&o){const e=s.appLet,a=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,i.skillTypes$))("formControlName",e)("filter",!0),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+e+".singular")," ",t.lcZ(7,13,i.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,i.form.controls[e])))}}function St(o,s){if(1&o&&(t.TgZ(0,"div",15)(1,"div",16)(2,"label",12),t._uU(3),t.ALo(4,"translate"),t.ALo(5,"isRequired"),t.TgZ(6,"span",13),t._uU(7),t.ALo(8,"async"),t.ALo(9,"errors"),t.qZA()(),t.TgZ(10,"div",17),t._UZ(11,"p-slider",18),t.qZA()()()),2&o){const e=s.appLet,a=t.oxw().appLet,i=t.oxw(2);t.Q6J("appIsLoading",a),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(4,7,"columns."+e)," ",t.lcZ(5,9,i.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(8,11,t.lcZ(9,13,i.form.controls[e]))),t.xp6(4),t.Q6J("step",10)("formControlName",e)}}function At(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.send())}),t.TgZ(1,"div",4),t.YNc(2,ft,11,15,"div",5),t.YNc(3,Lt,12,19,"div",5),t.YNc(4,St,12,15,"div",6),t.qZA(),t.TgZ(5,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.hide())})("submit",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.send())}),t.qZA(),t._UZ(6,"app-entity-modal-audit",8),t.ALo(7,"async"),t.qZA()}if(2&o){const e=s.appLet,a=t.oxw().appLet,i=t.oxw();t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","skillType"),t.xp6(1),t.Q6J("appLet","percentage"),t.xp6(1),t.Q6J("loading",e)("form",i.form)("name",i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR))("modalMode",a),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(7,11,i.entity$))("modalMode",a)}}const yt=function(){return{width:"100%",maxWidth:"40rem"}},Et=function(o){return{name:o}};function Ct(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(i){t.CHM(e);const v=t.oxw();return t.KtG(v.visible=i)})("onHide",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,At,8,13,"form",2),t.ALo(5,"async"),t.qZA()}if(2&o){const e=s.appLet,a=t.oxw();t.Akn(t.DdM(17,yt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,Et,t.lcZ(3,13,"tables."+a.names.name(a.Naming.CAMEL_CASE,a.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",a.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,a.loading$))}}const bt=[{path:"",title:(o,s)=>"Juan S\xe1ez Garc\xeda | Skills",component:nt,children:[{path:"modal",title:(o,s)=>(0,ot.D)((0,t.f3M)(pt.m).getTitle(o.paramMap.get("id"))).pipe((0,A.U)(e=>"Juan S\xe1ez Garc\xeda | Skills | "+e.name)),component:(()=>{class o{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(T.yh),this.fb=(0,t.f3M)(r.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[r.kI.required]),skillType:this.fb.control(void 0,[r.kI.required]),percentage:this.fb.control(0,[r.kI.required])}),this.unsubscribe$=new x.x,this.params$=this.route.params.pipe((0,h.R)(this.unsubscribe$),(0,A.U)(e=>e)),this.loading$=this.store.select(c.x.getLoading).pipe((0,h.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,h.R)(this.unsubscribe$),(0,A.U)(e=>p.g[e.modalMode])),this.entity$=this.store.select(c.x.getOne).pipe((0,h.R)(this.unsubscribe$),(0,g.h)(e=>!!e)),this.action$=this.store.select(c.x.getAction).pipe((0,h.R)(this.unsubscribe$),(0,at.T)(1),(0,g.h)(e=>e.type===$.Us.CREATE_ONE&&e.status===$.M4.SUCCESS)),this.skillTypes$=this.store.select(dt.b.getAll)}ngOnInit(){this.store.dispatch(rt.J.loadAll({})),this.params$.pipe((0,g.h)(e=>!!e.id)).subscribe(e=>this.store.dispatch(m.D.loadOne({id:e.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,g.h)(e=>e===p.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.controls.id||this.form.addControl("id",this.fb.control(e.id,[r.kI.required])),this.form.patchValue({id:e.id,name:e.name,skillType:e.skillType,percentage:e.percentage})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(m.D.unload()),this.router.navigate([lt.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?st.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,it.q)(1)).subscribe(e=>{switch(e){case p.g.CREATE:this.store.dispatch(m.D.create({payload:this.form.value}));break;case p.g.UPDATE:this.store.dispatch(m.D.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return Z.Z}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-skill-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],[1,"w-full","flex","align-items-center","gap-3"],[1,"w-full"],[3,"step","formControlName"]],template:function(e,a){1&e&&(t.YNc(0,Ct,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,a.modalMode$))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,mt.T,ct.e,f.V,M.iR,C.Lt,b.o,ut.D,gt.Z,S.Ov,S.i8,L.X$,ht.J,vt.F],changeDetection:0}),o})()}]}];let Mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(bt),u.Bz]}),o})();var Tt=n(31);let xt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[B.S,Mt,N.JF,r.u5,r.UX,H.EV,E.hJ,Q.O,f.S,z.U$,R.d,I.D,J.WN,E.hJ,U._8,f.S,M.JH,C.kW,b.j,D.Iu,G.A,F.LU,O.q4,P.y,W.I,Tt.l,X.H,V.D,K.D,j.K,k.G]}),o})()}}]);