"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[223],{9223:(Vt,U,n)=>{n.r(U),n.d(U,{CurriculumModule:()=>jt});var K=n(529),l=n(4006),O=n(2437),P=n(8122),N=n(3067),j=n(3631),R=n(5593),I=n(585),H=n(4247),V=n(2137),b=n(1493),J=n(2210),F=n(3388),Y=n(7913),W=n(1740),X=n(3054),w=n(2665),k=n(5722),q=n(1765),_=n(8783),tt=n(2453),et=n(2983),nt=n(9605),G=n(6333),at=n(7921),ot=n(7611),f=n(3151),t=n(4650),A=n(2997),L=n(3416),rt=n(805),h=n(9300),$=n(3900),E=n(4004),st=n(1135),it=n(8675),T=n(5041),c=n(8426),lt=n(1392),g=n(5255),s=n(4363),D=n(4121),ut=n(783),d=n(5270);class v extends ut.x{constructor(){super(d.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL))}static getInstance(){return v.instance||(v.instance=new v),v.instance}}const m=v.getInstance();var x=n(7379),ct=n(91);const mt={...x.fg},dt=[];class C extends ct.E{constructor(){super(d.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL),m,mt,dt)}static getInstance(){return C.instance||(C.instance=new C),C.instance}}const p=C.getInstance();var pt=n(3926),M=n(6895);let ft=(()=>{class a{constructor(){this.store=(0,t.f3M)(A.yh),this.confirmationSrv=(0,t.f3M)(rt.YP),this.router=(0,t.f3M)(f.F0),this.translateSrv=(0,t.f3M)(L.sK),this.entities$=this.store.select(p.getAll),this.loading$=this.store.select(p.getLoading),this.count$=this.store.select(p.getCount),this.action$=this.store.select(p.getAction),this.tableConfig$=new st.X(void 0)}ngOnInit(){this.store.dispatch(m.count()),this.translateSrv.onLangChange.pipe((0,it.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(m.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case c.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:g.g.CREATE}]);break;case c.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:g.g.VIEW,id:e.value.id}]);break;case c.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:g.g.UPDATE,id:e.value.id}]);break;case c.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(m.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...lt.$,fields:[{field:"date",label:"Date",type:c.E7.DATE,filter:!0,sort:!0},{field:"language.name",label:"Language",type:c.E7.TEXT,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`)}),event:c.rE.DELETE}]}})}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return d.m}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-curriculum-list"]],decls:12,vars:17,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(u){return o.onLazyLoadEvent(u)})("tableEvent",function(u){return o.onTableEvent(u)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()(),t._UZ(11,"router-outlet")),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,t.lcZ(5,7,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".plural"))," "),t.xp6(3),t.Q6J("entities",t.lcZ(7,9,o.entities$))("loading",t.lcZ(8,11,o.loading$))("count",t.lcZ(9,13,o.count$))("config",t.lcZ(10,15,o.tableConfig$)))},dependencies:[f.lC,pt.p,M.Ov,M.rS,L.X$],changeDetection:0}),a})();var Z=n(5861),ht=n(2340),vt=n(457),Ct=n(7579),y=n(2722),St=n(5684),At=n(5698),Q=n(629);let Lt=(()=>{class a{constructor(){this.supabase=Q._}generateCurriculumName(e){return"public/CV_JuanSaezGarcia_"+e.acronym.toUpperCase()+"_"+(new Date).getMonth()+"1_"+(new Date).getFullYear()+"_"+(Math.floor(1e3*Math.random())+1)+".pdf"}uploadCurriculumFile(e,o){var r=this;return(0,Z.Z)(function*(){return yield r.supabase.storage.from("curriculums").upload(r.generateCurriculumName(e),o)})()}downloadCurriculumFile(e){var o=this;return(0,Z.Z)(function*(){return yield o.supabase.storage.from("curriculums").download(e)})()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Et=n(6977),Mt=n(611),yt=n(1384),bt=n(8609),$t=n(62);let z=(()=>{class a extends $t.v{constructor(){super(Q._,d.m.name(s.Si.SNAKE_CASE,s.rm.PLURAL),'*, "language": "languages" ( * )','*, "language": "languages" ( * )','"language": "languages" ( * )')}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Tt=n(3570),xt=n(4024),Zt=n(7525),Ut=n(4446),Nt=n(8452),Rt=n(6222);function It(a,i){if(1&a&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"p-calendar",12),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=i.appLet,o=t.oxw().appLet,r=t.oxw(2);t.Q6J("appIsLoading",o),t.xp6(2),t.Q6J("formControlName",e)("showIcon",!0),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,r.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,r.form.controls[e])))}}function Jt(a,i){if(1&a&&(t.TgZ(0,"div",10)(1,"span",11),t._UZ(2,"p-dropdown",15),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&a){const e=i.appLet,o=t.oxw().appLet,r=t.oxw(2);t.Q6J("appIsLoading",o),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,r.languages$))("formControlName",e)("filter",!0),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+e+".singular")," ",t.lcZ(7,13,r.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,r.form.controls[e])))}}function Ft(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.send())}),t.TgZ(1,"div",4),t.YNc(2,It,11,15,"div",5),t.YNc(3,Jt,12,19,"div",5),t.TgZ(4,"div",6)(5,"p-fileUpload",7),t.NdJ("onSelect",function(r){t.CHM(e);const u=t.oxw(2);return t.KtG(u.onSelect(r))}),t.qZA()()(),t.TgZ(6,"app-entity-modal-buttons",8),t.NdJ("cancel",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.hide())})("submit",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.send())}),t.qZA(),t._UZ(7,"app-entity-modal-audit",9),t.ALo(8,"async"),t.qZA()}if(2&a){const e=i.appLet,o=t.oxw().appLet,r=t.oxw();t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("appLet","date"),t.xp6(1),t.Q6J("appLet","language"),t.xp6(2),t.Q6J("multiple",!1),t.xp6(1),t.Q6J("loading",e)("form",r.form)("name",r.names.name(r.Naming.CAMEL_CASE,r.NumberMode.SINGULAR))("modalMode",o),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(8,11,r.entity$))("modalMode",o)}}const Gt=function(){return{width:"100%",maxWidth:"40rem"}},Dt=function(a){return{name:a}};function Qt(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.visible=r)})("onHide",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,Ft,9,13,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const e=i.appLet,o=t.oxw();t.Akn(t.DdM(17,Gt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,Dt,t.lcZ(3,13,"tables."+o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",o.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,o.loading$))}}const zt=[{path:"",title:(a,i)=>{const e=(0,t.f3M)(A.yh),o=(0,t.f3M)(L.sK);return e.select(D.$.getOne).pipe((0,h.h)(r=>!!r),(0,$.w)(()=>o.get(`tables.${d.m.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.plural`).pipe((0,E.U)(r=>`${T.R} | ${r}`))))},component:ft,children:[{path:"modal",title:(a,i)=>{const e=(0,t.f3M)(A.yh),o=(0,t.f3M)(z),r=(0,t.f3M)(L.sK);return e.select(D.$.getOne).pipe((0,h.h)(u=>!!u),(0,$.w)(u=>r.get(`tables.${d.m.name(s.Si.CAMEL_CASE,s.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,$.w)(S=>(0,vt.D)(o.getTitle(a.paramMap.get("id"))).pipe((0,E.U)(Ht=>`${T.R} | ${S} | ${Ht.language.acronym}`))):(0,E.U)(S=>`${T.R} | ${S} | ${r.instant("buttons.new",{name:""})}`))))},component:(()=>{class a{constructor(){this.router=(0,t.f3M)(f.F0),this.route=(0,t.f3M)(f.gz),this.store=(0,t.f3M)(A.yh),this.fb=(0,t.f3M)(l.qu),this.storageSrv=(0,t.f3M)(Lt),this.visible=!0,this.form=this.fb.group({date:this.fb.control(new Date,[l.kI.required]),language:this.fb.control(void 0,[l.kI.required]),pdf:this.fb.control(void 0,[l.kI.required])}),this.unsubscribe$=new Ct.x,this.params$=this.route.params.pipe((0,y.R)(this.unsubscribe$),(0,E.U)(e=>e)),this.loading$=this.store.select(p.getLoading).pipe((0,y.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,y.R)(this.unsubscribe$),(0,E.U)(e=>g.g[e.modalMode])),this.entity$=this.store.select(p.getOne).pipe((0,y.R)(this.unsubscribe$),(0,h.h)(e=>!!e)),this.action$=this.store.select(p.getAction).pipe((0,y.R)(this.unsubscribe$),(0,St.T)(1),(0,h.h)(e=>e.type===x.Us.CREATE_ONE&&e.status===x.M4.SUCCESS)),this.languages$=this.store.select(bt.b.getAll)}ngOnInit(){this.store.dispatch(yt.p.loadAll({})),this.params$.pipe((0,h.h)(e=>!!e.id)).subscribe(e=>this.store.dispatch(m.loadOne({id:e.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,h.h)(e=>e===g.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.controls.id||this.form.addControl("id",this.fb.control(e.id,[l.kI.required])),this.form.patchValue({id:e.id,language:e.language,pdf:e.pdf})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(m.unload()),this.router.navigate([Mt.A.getParentRoute(this.router.url,1)])}onSelect(e){this.pdf=e.currentFiles[0]}send(){var e=this;this.form.invalid?Et.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,At.q)(1)).subscribe(function(){var o=(0,Z.Z)(function*(r){switch(r){case g.g.CREATE:const{data:u,error:S}=yield e.storageSrv.uploadCurriculumFile(e.form.value.language,e.pdf);if(S)throw S;e.form.controls.pdf.setValue(ht.N.apiUrl+"/storage/v1/object/public/curriculums/"+u.path),e.store.dispatch(m.create({payload:e.form.value}));break;case g.g.UPDATE:e.store.dispatch(m.update({payload:e.form.value}))}});return function(r){return o.apply(this,arguments)}}())}get NumberMode(){return s.rm}get Naming(){return s.Si}get names(){return d.m}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-curriculum-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],[1,"xs:col-12","md:col-12","lg:col-12","mt-3"],[3,"multiple","onSelect"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"],[3,"for"],[1,"error"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"]],template:function(e,o){1&e&&(t.YNc(0,Qt,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,o.modalMode$))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,Tt.T,xt.e,F.p,b.V,I.f,J.Lt,Zt.Z,Ut.D,M.Ov,M.i8,L.X$,Nt.J,Rt.F],changeDetection:0}),a})()}]}];let Bt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(zt),f.Bz]}),a})();var B=n(8776),Kt=n(2307);let Ot=(()=>{class a extends Kt.P{constructor(e,o){super(e,m,o),this.actions$=e,this.curriculumSrv=o}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(B.eX),t.LFG(z))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})(),Pt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[M.ez,B.sQ.forFeature([Ot]),A.Aw.forFeature(d.m.name(s.Si.KEBAB_CASE,s.rm.PLURAL),p.reducer)]}),a})(),jt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[et.S,Bt,K.JF,l.u5,l.UX,F.O,tt.EV,R.hJ,w.O,b.S,q.U$,H.d,V.D,j.WN,R.hJ,I._8,b.S,J.kW,W.j,Y.Iu,X.A,_.LU,k.q4,nt.y,at.I,Pt,G.D,N.G,P.K,O.D,G.D,ot.h,N.G]}),a})()}}]);