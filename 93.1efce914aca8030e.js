"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[93],{93:(St,C,n)=>{n.r(C),n.d(C,{PositionModule:()=>Et});var x=n(2437),I=n(8122),N=n(3067),U=n(5918),P=n(2983),R=n(9605),J=n(6333),Q=n(6975),D=n(7921),G=n(7871),h=n(3151),t=n(4650),y=n(2997),v=n(3416),F=n(805),f=n(9300),T=n(3900),L=n(4004),S=n(1135),Y=n(8675),E=n(5041),p=n(8426),O=n(1392),c=n(5255),r=n(4363),Z=n(4121),u=n(3369),b=n(8128),g=n(2161),K=n(3926),M=n(6895);let H=(()=>{class a{constructor(){this.store=(0,t.f3M)(y.yh),this.confirmationSrv=(0,t.f3M)(F.YP),this.router=(0,t.f3M)(h.F0),this.translateSrv=(0,t.f3M)(v.sK),this.entities$=this.store.select(g.Y.getAll),this.loading$=this.store.select(g.Y.getLoading),this.count$=this.store.select(g.Y.getCount),this.action$=this.store.select(g.Y.getAction),this.tableConfig$=new S.X(void 0)}ngOnInit(){this.store.dispatch(u.y.count()),this.translateSrv.onLangChange.pipe((0,Y.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(o){this.store.dispatch(u.y.loadAll({payload:o}))}onTableEvent(o){switch(o.type){case p.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:c.g.CREATE}]);break;case p.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:c.g.VIEW,id:o.value.id}]);break;case p.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:c.g.UPDATE,id:o.value.id}]);break;case p.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(u.y.delete({id:o.value.id}))}})}}loadTableConfig(){const o=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.certificateType.singular")})}),o.push({action:"view",icon:"pi pi-search-plus"}),o.push({action:"edit",icon:"pi pi-pencil"}),o.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...O.$,fields:[{field:"nameTranslations",label:this.translateSrv.instant("columns.name"),type:p.E7.TRANSLATIONS,filter:!0,sort:!0},{field:"company.name",label:this.translateSrv.instant("tables.company.singular"),type:p.E7.TEXT,filter:!0,sort:!0},{field:"dateFrom",label:this.translateSrv.instant("columns.dateFrom"),type:p.E7.DATE,filter:!0,sort:!0},{field:"dateTo",label:this.translateSrv.instant("columns.dateTo"),type:p.E7.DATE,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:p.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return b.p}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-position-list"]],decls:11,vars:15,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(l){return s.onLazyLoadEvent(l)})("tableEvent",function(l){return s.onTableEvent(l)}),t.ALo(6,"async"),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()()(),t._UZ(10,"router-outlet")),2&o&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".plural")," "),t.xp6(2),t.Q6J("entities",t.lcZ(6,7,s.entities$))("loading",t.lcZ(7,9,s.loading$))("count",t.lcZ(8,11,s.count$))("config",t.lcZ(9,13,s.tableConfig$)))},dependencies:[h.lC,K.p,M.Ov,v.X$],changeDetection:0}),a})();var d=n(4006),B=n(457),V=n(7579),A=n(2722),W=n(5684),X=n(5698),j=n(7395),$=n(7379),w=n(6977),q=n(611),_=n(2868),k=n(9366),tt=n(7121),ot=n(3570),nt=n(4024),at=n(585),st=n(2210),et=n(1493),it=n(7525),lt=n(4446),rt=n(4844),pt=n(8452),dt=n(6222);function mt(a,i){if(1&a&&(t.TgZ(0,"div",9),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw().appLet,l=t.oxw();let m;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",l.showErrors$)("type",l.InputTranslationsType.INPUT)("translations",null==(m=t.lcZ(2,7,l.entity$))?null:m.nameTranslations)("disabled",e===l.ModalMode.VIEW)("form",l.form.controls[o])("label",t.lcZ(3,9,"columns.name"))}}function ct(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-dropdown",12),t.ALo(3,"async"),t.TgZ(4,"label",13),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"isRequired"),t.TgZ(8,"span",14),t._uU(9),t.ALo(10,"async"),t.ALo(11,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("autoDisplayFirst",!1)("options",t.lcZ(3,9,e.companies$))("formControlName",o)("filter",!0),t.xp6(2),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(6,11,"tables."+o+".singular")," ",t.lcZ(7,13,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(10,15,t.lcZ(11,17,e.form.controls[o])))}}function ut(a,i){if(1&a&&(t.TgZ(0,"div",15),t._UZ(1,"app-input-translations",10),t.ALo(2,"async"),t.ALo(3,"translate"),t.qZA()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw().appLet,l=t.oxw();let m;t.Q6J("appIsLoading",s),t.xp6(1),t.Q6J("showErrors",l.showErrors$)("type",l.InputTranslationsType.TEXTAREA)("translations",null==(m=t.lcZ(2,7,l.entity$))?null:m.descriptionTranslations)("disabled",e===l.ModalMode.VIEW)("form",l.form.controls[o])("label",t.lcZ(3,9,"columns.description"))}}function gt(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-calendar",16),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function ht(a,i){if(1&a&&(t.TgZ(0,"div",9)(1,"span",11),t._UZ(2,"p-calendar",16),t.TgZ(3,"label",13),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",14),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw(2);t.Q6J("appIsLoading",s),t.xp6(2),t.Q6J("formControlName",o)("showIcon",!0),t.xp6(1),t.Q6J("for",o),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+o)," ",t.lcZ(6,9,e.form.controls[o])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,e.form.controls[o])))}}function ft(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.send())}),t.TgZ(1,"div",4),t.YNc(2,mt,4,11,"div",5),t.YNc(3,ct,12,19,"div",5),t.YNc(4,ut,4,11,"div",6),t.YNc(5,gt,11,15,"div",5),t.YNc(6,ht,11,15,"div",5),t.qZA(),t.TgZ(7,"app-entity-modal-buttons",7),t.NdJ("cancel",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.hide())})("submit",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.send())}),t.qZA(),t._UZ(8,"app-entity-modal-audit",8),t.ALo(9,"async"),t.qZA()}if(2&a){const o=i.appLet,s=t.oxw().appLet,e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(2),t.Q6J("appLet","nameTranslations"),t.xp6(1),t.Q6J("appLet","company"),t.xp6(1),t.Q6J("appLet","descriptionTranslations"),t.xp6(1),t.Q6J("appLet","dateFrom"),t.xp6(1),t.Q6J("appLet","dateTo"),t.xp6(1),t.Q6J("loading",o)("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",s),t.xp6(1),t.Q6J("loading",o)("entity",t.lcZ(9,13,e.entity$))("modalMode",s)}}const vt=function(){return{width:"100%",maxWidth:"40rem"}},Lt=function(a){return{name:a}};function At(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(e){t.CHM(o);const l=t.oxw();return t.KtG(l.visible=e)})("onHide",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,ft,10,15,"form",2),t.ALo(5,"async"),t.qZA()}if(2&a){const o=i.appLet,s=t.oxw();t.Akn(t.DdM(17,vt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+o),t.VKq(18,Lt,t.lcZ(3,13,"tables."+s.names.name(s.Naming.CAMEL_CASE,s.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",s.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,s.loading$))}}const yt=[{path:"",title:(a,i)=>{const o=(0,t.f3M)(y.yh),s=(0,t.f3M)(v.sK);return o.select(Z.$.getOne).pipe((0,f.h)(e=>!!e),(0,T.w)(()=>s.get(`tables.${b.p.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`).pipe((0,L.U)(e=>`${E.R} | ${e}`))))},component:H,children:[{path:"modal",title:(a,i)=>{const o=(0,t.f3M)(y.yh),s=(0,t.f3M)(tt.e),e=(0,t.f3M)(v.sK);return o.select(Z.$.getOne).pipe((0,f.h)(l=>!!l),(0,T.w)(l=>e.get(`tables.${b.p.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,T.w)(m=>(0,B.D)(s.getTitle(a.paramMap.get("id"))).pipe((0,L.U)(Mt=>`${E.R} | ${m} | ${Mt.nameTranslations.find(Ct=>Ct.language===l.acronym).value}`))):(0,L.U)(m=>`${E.R} | ${m} | ${e.instant("buttons.new",{name:""})}`))))},component:(()=>{class a{constructor(){this.router=(0,t.f3M)(h.F0),this.route=(0,t.f3M)(h.gz),this.store=(0,t.f3M)(y.yh),this.fb=(0,t.f3M)(d.qu),this.visible=!0,this.form=this.fb.group({nameTranslations:this.fb.array([]),descriptionTranslations:this.fb.array([]),company:this.fb.control(void 0,[d.kI.required]),importance:this.fb.control(0,[d.kI.required,d.kI.min(0),d.kI.max(5)]),dateFrom:this.fb.control(void 0,[d.kI.required]),dateTo:this.fb.control(void 0)}),this.unsubscribe$=new V.x,this.params$=this.route.params.pipe((0,A.R)(this.unsubscribe$),(0,L.U)(o=>o)),this.loading$=this.store.select(g.Y.getLoading).pipe((0,A.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,A.R)(this.unsubscribe$),(0,L.U)(o=>c.g[o.modalMode])),this.entity$=this.store.select(g.Y.getOne).pipe((0,A.R)(this.unsubscribe$),(0,f.h)(o=>!!o)),this.action$=this.store.select(g.Y.getAction).pipe((0,A.R)(this.unsubscribe$),(0,W.T)(1),(0,f.h)(o=>o.type===$.Us.CREATE_ONE&&o.status===$.M4.SUCCESS)),this.showErrors$=new S.X(!1),this.companies$=this.store.select(k.K.getAll)}ngOnInit(){this.store.dispatch(_._.loadAll({})),this.params$.pipe((0,f.h)(o=>!!o.id)).subscribe(o=>this.store.dispatch(u.y.loadOne({id:o.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,f.h)(o=>o===c.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(o=>{this.form.controls.id||this.form.addControl("id",this.fb.control(o.id,[d.kI.required])),this.form.patchValue({id:o.id,nameTranslations:o.nameTranslations,descriptionTranslations:o.descriptionTranslations,importance:o.importance,dateFrom:new Date(o.dateFrom),dateTo:new Date(o.dateTo),company:o.company})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(u.y.unload()),this.router.navigate([q.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?(w.h.markAllAsDirtyAndTouched(this.form),this.showErrors$.next(!0)):this.modalMode$.pipe((0,X.q)(1)).subscribe(o=>{switch(o){case c.g.CREATE:this.store.dispatch(u.y.create({payload:this.form.value}));break;case c.g.UPDATE:this.store.dispatch(u.y.update({payload:this.form.value}))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return b.p}get ModalMode(){return c.g}get InputTranslationsType(){return j.A}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-position-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["appLoading","","class","xs:col-12 md:col-12 lg:col-12 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[3,"showErrors","type","translations","disabled","form","label"],[1,"p-float-label"],["dataKey","id","optionLabel","name","filterBy","name","appendTo","body",1,"p-inputtext-sm",3,"autoDisplayFirst","options","formControlName","filter"],[3,"for"],[1,"error"],["appLoading","",1,"xs:col-12","md:col-12","lg:col-12","mt-3",3,"appIsLoading"],["dateFormat","dd/mm/yy","appendTo","body",1,"p-calendar-sm",3,"formControlName","showIcon"]],template:function(o,s){1&o&&(t.YNc(0,At,6,20,"p-dialog",0),t.ALo(1,"async")),2&o&&t.Q6J("appLet",t.lcZ(1,1,s.modalMode$))},dependencies:[d._Y,d.JJ,d.JL,d.sg,d.u,ot.T,nt.e,at.f,st.Lt,et.V,it.Z,lt.D,rt.s,M.Ov,M.i8,v.X$,pt.J,dt.F],changeDetection:0}),a})()}]}];let bt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(yt),h.Bz]}),a})();var Tt=n(9997);let Et=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[P.S,bt,Q.g,R.y,Tt.K,D.I,N.G,I.K,x.D,G.n,J.D,U.H]}),a})()}}]);