"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[223],{9223:(Kt,x,a)=>{a.r(x),a.d(x,{CurriculumModule:()=>Bt});var B=a(529),l=a(4006),K=a(2437),O=a(8122),Z=a(3067),P=a(3631),$=a(5593),N=a(585),H=a(4247),V=a(2137),A=a(1493),U=a(2210),J=a(3388),Y=a(7913),j=a(1740),W=a(3054),X=a(2665),w=a(5722),k=a(1765),q=a(8783),_=a(2453),tt=a(2983),et=a(9605),I=a(6333),nt=a(7921),at=a(7611),g=a(550),t=a(4650),R=a(4450),E=a(9653),y=a(3416),ot=a(805),G=a(7579),C=a(9300),rt=a(8675),u=a(8426),p=a(5255),s=a(4363),it=a(4121),st=a(783),f=a(5270);class h extends st.x{constructor(){super(f.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL))}static getInstance(){return h.instance||(h.instance=new h),h.instance}}const c=h.getInstance();var M=a(7379),lt=a(91);const ut={...M.fg},ct=[];class v extends lt.E{constructor(){super(f.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL),c,ut,ct)}static getInstance(){return v.instance||(v.instance=new v),v.instance}}const d=v.getInstance();var mt=a(5818),S=a(6895);let pt=(()=>{class n{constructor(){this.store=(0,t.f3M)(E.yh),this.confirmationSrv=(0,t.f3M)(ot.YP),this.router=(0,t.f3M)(g.F0),this.translateSrv=(0,t.f3M)(y.sK),this.entities$=this.store.select(d.getAll),this.loading$=this.store.select(d.getLoading),this.count$=this.store.select(d.getCount),this.action$=this.store.select(d.getAction),this.tableConfig$=new G.x}ngOnInit(){this.store.dispatch(c.count()),this.store.select(it.$.getOne).pipe((0,C.h)(e=>null!=e)).subscribe(e=>{this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.pipe((0,rt.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(c.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case u.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.CREATE}]);break;case u.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:p.g.VIEW,id:e.value.id}]);break;case u.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:p.g.UPDATE,id:e.value.id}]);break;case u.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...R.N.defaultGenericTableConfig,fields:[{field:"date",label:"Date",type:u.E7.DATE,filter:!0,sort:!0},{field:"language.name",label:"Language",type:u.E7.TEXT,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:u.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:u.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:u.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:u.rE.DELETE}]}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return f.m}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-curriculum-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(m){return o.onLazyLoadEvent(m)})("tableEvent",function(m){return o.onTableEvent(m)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,o.entities$))("loading",t.lcZ(7,9,o.loading$))("count",t.lcZ(8,11,o.count$))("config",t.lcZ(9,13,o.tableConfig$)))},dependencies:[g.lC,mt.p,S.Ov,y.X$],changeDetection:0}),n})();var b=a(5861),gt=a(457),T=a(4004),L=a(2722),ft=a(5684),ht=a(5698),F=a(629);let vt=(()=>{class n{constructor(){this.supabase=F._}generateCurriculumName(e){return"public/CV_JuanSaezGarcia_"+e.acronym.toUpperCase()+"_"+(new Date).getMonth()+"1_"+(new Date).getFullYear()+"_"+(Math.floor(1e3*Math.random())+1)+".pdf"}uploadCurriculumFile(e,o){var r=this;return(0,b.Z)(function*(){return yield r.supabase.storage.from("curriculums").upload(r.generateCurriculumName(e),o)})()}downloadCurriculumFile(e){var o=this;return(0,b.Z)(function*(){return yield o.supabase.storage.from("curriculums").download(e)})()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Ct=a(6977),Lt=a(611),St=a(1384),At=a(8609),Et=a(62);let D=(()=>{class n extends Et.v{constructor(){super(F._,f.m.name(s.Si.SNAKE_CASE,s.rm.PLURAL),'*, "language": "languages" ( * )','*, "language": "languages" ( * )')}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var yt=a(3570),Mt=a(4024),bt=a(7525),Tt=a(4446),xt=a(8452),Zt=a(6222);function $t(n,i){if(1&n&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"p-calendar",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=i.appLet,o=t.oxw().appLet,r=t.oxw(2);t.Q6J("appIsLoading",o),t.xp6(2),t.Q6J("formControlName",e)("showIcon",!0),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,r.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,r.form.controls[e])))}}function Nt(n,i){if(1&n&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"p-dropdown",15),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&n){const e=i.appLet,o=t.oxw().appLet,r=t.oxw(2);t.Q6J("appIsLoading",o),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,r.languages$))("formControlName",e)("filter",!0),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+e+".singular")," ",t.lcZ(7,13,r.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,r.form.controls[e])))}}function Ut(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.send())}),t.TgZ(1,"div",4),t.YNc(2,$t,11,15,"div",5),t.YNc(3,Nt,12,19,"div",5),t.TgZ(4,"div",6)(5,"p-fileUpload",7),t.NdJ("onSelect",function(r){t.CHM(e);const m=t.oxw(2);return t.KtG(m.onSelect(r))}),t.qZA()()(),t.TgZ(6,"app-entity-modal-buttons",8),t.NdJ("cancel",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.hide())})("submit",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.send())}),t.qZA(),t._UZ(7,"app-entity-modal-audit",9),t.ALo(8,"async"),t.qZA()}if(2&n){const e=i.appLet,o=t.oxw().appLet,r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("appLet","date"),t.xp6(1),t.Q6J("appLet","language"),t.xp6(2),t.Q6J("multiple",!1),t.xp6(1),t.Q6J("loading",e)("form",r.form)("name",r.names.name(r.Naming.CAMEL_CASE,r.NumberMode.SINGULAR))("modalMode",o),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(8,11,r.entity$))("modalMode",o)}}const Jt=function(){return{width:"100%",maxWidth:"40rem"}},It=function(n){return{name:n}};function Rt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(r){t.CHM(e);const m=t.oxw();return t.KtG(m.visible=r)})("onHide",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Ut,9,13,"form",2),t.ALo(5,"async"),t.qZA()}if(2&n){const e=i.appLet,o=t.oxw();t.Akn(t.DdM(17,Jt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,It,t.lcZ(3,13,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",o.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,o.loading$))}}const Gt=[{path:"",title:(n,i)=>"Juan S\xe1ez Garc\xeda | Curriculumns",component:pt,children:[{path:"modal",title:(n,i)=>(0,gt.D)((0,t.f3M)(D).getTitle(n.paramMap.get("id"))).pipe((0,T.U)(e=>"Juan S\xe1ez Garc\xeda | Curriculums | "+e.id)),component:(()=>{class n{constructor(){this.router=(0,t.f3M)(g.F0),this.route=(0,t.f3M)(g.gz),this.store=(0,t.f3M)(E.yh),this.fb=(0,t.f3M)(l.qu),this.storageSrv=(0,t.f3M)(vt),this.visible=!0,this.form=this.fb.group({date:this.fb.control(new Date,[l.kI.required]),language:this.fb.control(void 0,[l.kI.required]),pdf:this.fb.control(void 0,[l.kI.required])}),this.unsubscribe$=new G.x,this.params$=this.route.params.pipe((0,L.R)(this.unsubscribe$),(0,T.U)(e=>e)),this.loading$=this.store.select(d.getLoading).pipe((0,L.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,L.R)(this.unsubscribe$),(0,T.U)(e=>p.g[e.modalMode])),this.entity$=this.store.select(d.getOne).pipe((0,L.R)(this.unsubscribe$),(0,C.h)(e=>!!e)),this.action$=this.store.select(d.getAction).pipe((0,L.R)(this.unsubscribe$),(0,ft.T)(1),(0,C.h)(e=>e.type===M.Us.CREATE_ONE&&e.status===M.M4.SUCCESS)),this.languages$=this.store.select(At.b.getAll)}ngOnInit(){this.store.dispatch(St.p.loadAll({})),this.params$.pipe((0,C.h)(e=>!!e.id)).subscribe(e=>this.store.dispatch(c.loadOne({id:e.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,C.h)(e=>e===p.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.controls.id||this.form.addControl("id",this.fb.control(e.id,[l.kI.required])),this.form.patchValue({id:e.id,language:e.language,pdf:e.pdf})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.store.dispatch(c.unload()),this.router.navigate([Lt.A.getParentRoute(this.router.url,1)])}onSelect(e){this.pdf=e.currentFiles[0]}send(){var e=this;this.form.invalid?Ct.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,ht.q)(1)).subscribe(function(){var o=(0,b.Z)(function*(r){switch(r){case p.g.CREATE:const{data:m,error:Q}=yield e.storageSrv.uploadCurriculumFile(e.form.value.language,e.pdf);if(Q)throw Q;e.form.controls.pdf.setValue(R.N.apiUrl+"/storage/v1/object/public/curriculums/"+m.path),e.store.dispatch(c.create({payload:e.form.value}));break;case p.g.UPDATE:e.store.dispatch(c.update({payload:e.form.value}))}});return function(r){return o.apply(this,arguments)}}())}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return f.m}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-curriculum-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],[1,"xs:col-12","md:col-12","lg:col-12","mt-3"],[3,"multiple","onSelect"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"],[3,"for"],[1,"error"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"]],template:function(e,o){1&e&&(t.YNc(0,Rt,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,o.modalMode$))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,yt.T,Mt.e,J.p,A.V,N.f,U.Lt,bt.Z,Tt.D,S.Ov,S.i8,y.X$,xt.J,Zt.F],changeDetection:0}),n})()}]}];let Ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(Gt),g.Bz]}),n})();var z=a(8776),Dt=a(2307);let zt=(()=>{class n extends Dt.P{constructor(e,o){super(e,c,o),this.actions$=e,this.curriculumSrv=o}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(z.eX),t.LFG(D))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),Qt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[S.ez,z.sQ.forFeature([zt]),E.Aw.forFeature(f.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL),d.reducer)]}),n})(),Bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[tt.S,Ft,B.JF,l.u5,l.UX,J.O,_.EV,$.hJ,X.O,A.S,k.U$,H.d,V.D,P.WN,$.hJ,N._8,A.S,U.kW,j.j,Y.Iu,W.A,q.LU,w.q4,et.y,nt.I,Qt,I.D,Z.G,O.K,K.D,I.D,at.h,Z.G]}),n})()}}]);