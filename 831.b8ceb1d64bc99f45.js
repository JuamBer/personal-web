"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[831],{2831:(Lt,y,a)=>{a.r(y),a.d(y,{LanguageModule:()=>vt});var $=a(2437),N=a(8122),U=a(3067),T=a(7913),R=a(2983),I=a(9605),J=a(6333),Q=a(6975),G=a(7921),u=a(3151),t=a(4650),A=a(2997),v=a(3416),O=a(805),h=a(9300),C=a(3900),f=a(4004),z=a(1135),D=a(8675),M=a(5041),r=a(8426),F=a(1392),m=a(5255),l=a(4363),Z=a(4121),c=a(1384),b=a(9290),g=a(8609),K=a(3926),E=a(6895);let H=(()=>{class n{constructor(){this.store=(0,t.f3M)(A.yh),this.confirmationSrv=(0,t.f3M)(O.YP),this.router=(0,t.f3M)(u.F0),this.translateSrv=(0,t.f3M)(v.sK),this.entities$=this.store.select(g.b.getAll),this.loading$=this.store.select(g.b.getLoading),this.count$=this.store.select(g.b.getCount),this.action$=this.store.select(g.b.getAction),this.tableConfig$=new z.X(void 0)}ngOnInit(){this.store.dispatch(c.p.count()),this.translateSrv.onLangChange.pipe((0,D.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}onLazyLoadEvent(e){this.store.dispatch(c.p.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case r.rE.CREATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.CREATE}]);break;case r.rE.VIEW:this.router.navigate([this.router.url,"modal",{modalMode:m.g.VIEW,id:e.value.id}]);break;case r.rE.UPDATE:this.router.navigate([this.router.url,"modal",{modalMode:m.g.UPDATE,id:e.value.id}]);break;case r.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(c.p.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.language.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...F.$,fields:[{field:"name",label:"Name",type:r.E7.TEXT,filter:!0,sort:!0},{field:"nativeName",label:"Native Name",type:r.E7.TEXT,filter:!0,sort:!0},{field:"acronym",label:"Acronym",type:r.E7.TEXT,filter:!0,sort:!0,format:o=>o.toUpperCase()},{field:"active",label:"Active",type:r.E7.BOOLEAN,filter:!0,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`)}),event:r.rE.DELETE}]}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return b.z}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-language-list"]],decls:12,vars:17,consts:[[1,"ui-g"],[1,"p-col-12"],[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-generic-table",2),t.NdJ("lazyLoadEvent",function(d){return i.onLazyLoadEvent(d)})("tableEvent",function(d){return i.onTableEvent(d)}),t.ALo(7,"async"),t.ALo(8,"async"),t.ALo(9,"async"),t.ALo(10,"async"),t.qZA()()(),t._UZ(11,"router-outlet")),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,5,t.lcZ(5,7,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".plural"))," "),t.xp6(3),t.Q6J("entities",t.lcZ(7,9,i.entities$))("loading",t.lcZ(8,11,i.loading$))("count",t.lcZ(9,13,i.count$))("config",t.lcZ(10,15,i.tableConfig$)))},dependencies:[u.lC,K.p,E.Ov,E.rS,v.X$],changeDetection:0}),n})();var p=a(4006),j=a(457),X=a(7579),L=a(2722),Y=a(5684),V=a(5698),x=a(7379),P=a(6977),W=a(611),w=a(5288),q=a(3570),_=a(4024),k=a(1740),tt=a(1493),et=a(7525),at=a(4446),nt=a(8452),ot=a(6222);function it(n,s){if(1&n&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"input",10),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=s.appLet,i=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,o.form.controls[e])))}}function st(n,s){if(1&n&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"input",10),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=s.appLet,i=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,o.form.controls[e])))}}function lt(n,s){if(1&n&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"input",10),t.TgZ(3,"label",11),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",12),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=s.appLet,i=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,o.form.controls[e])))}}function rt(n,s){if(1&n&&(t.TgZ(0,"div",8)(1,"div",13)(2,"label",11),t._uU(3),t.ALo(4,"translate"),t.ALo(5,"isRequired"),t.TgZ(6,"span",12),t._uU(7),t.ALo(8,"async"),t.ALo(9,"errors"),t.qZA()(),t._UZ(10,"p-inputSwitch",14),t.qZA()()),2&n){const e=s.appLet,i=t.oxw().appLet,o=t.oxw(2);t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(4,7,"columns."+e)," ",t.lcZ(5,9,o.form.controls[e])," "),t.xp6(4),t.Oqu(t.lcZ(8,11,t.lcZ(9,13,o.form.controls[e]))),t.xp6(3),t.Q6J("inputId",e)("formControlName",e)}}function pt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.send())}),t.TgZ(1,"div",4),t.YNc(2,it,11,15,"div",5),t.YNc(3,st,11,15,"div",5),t.YNc(4,lt,11,15,"div",5),t.YNc(5,rt,11,15,"div",5),t.qZA(),t.TgZ(6,"app-entity-modal-buttons",6),t.NdJ("cancel",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.hide())})("submit",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.send())}),t.qZA(),t._UZ(7,"app-entity-modal-audit",7),t.ALo(8,"async"),t.qZA()}if(2&n){const e=s.appLet,i=t.oxw().appLet,o=t.oxw();t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","nativeName"),t.xp6(1),t.Q6J("appLet","acronym"),t.xp6(1),t.Q6J("appLet","active"),t.xp6(1),t.Q6J("loading",e)("form",o.form)("name",o.names.name(o.Naming.CAMEL_CASE,o.NumberMode.SINGULAR))("modalMode",i),t.xp6(1),t.Q6J("loading",e)("entity",t.lcZ(8,12,o.entity$))("modalMode",i)}}const dt=function(){return{width:"100%",maxWidth:"40rem"}},mt=function(n){return{name:n}};function ct(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"p-dialog",1),t.NdJ("visibleChange",function(o){t.CHM(e);const d=t.oxw();return t.KtG(d.visible=o)})("onHide",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hide())}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.YNc(4,pt,9,14,"form",2),t.ALo(5,"async"),t.qZA()}if(2&n){const e=s.appLet,i=t.oxw();t.Akn(t.DdM(17,dt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,8,t.lcZ(2,11,"buttons."+e),t.VKq(18,mt,t.lcZ(3,13,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("appLet",t.lcZ(5,15,i.loading$))}}const gt=[{path:"",title:(n,s)=>{const e=(0,t.f3M)(A.yh),i=(0,t.f3M)(v.sK);return e.select(Z.$.getOne).pipe((0,h.h)(o=>!!o),(0,C.w)(()=>i.get(`tables.${b.z.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.plural`).pipe((0,f.U)(o=>`${M.R} | ${o}`))))},component:H,children:[{path:"modal",title:(n,s)=>{const e=(0,t.f3M)(A.yh),i=(0,t.f3M)(w.T),o=(0,t.f3M)(v.sK);return e.select(Z.$.getOne).pipe((0,h.h)(d=>!!d),(0,C.w)(d=>o.get(`tables.${b.z.name(l.Si.CAMEL_CASE,l.rm.SINGULAR)}.singular`).pipe(n.paramMap.get("id")?(0,C.w)(S=>(0,j.D)(i.getTitle(n.paramMap.get("id"))).pipe((0,f.U)(ft=>`${M.R} | ${S} | ${ft.nativeName}`))):(0,f.U)(S=>`${M.R} | ${S} | ${o.instant("buttons.new",{name:""})}`))))},component:(()=>{class n{constructor(){this.router=(0,t.f3M)(u.F0),this.route=(0,t.f3M)(u.gz),this.store=(0,t.f3M)(A.yh),this.fb=(0,t.f3M)(p.qu),this.visible=!0,this.form=this.fb.group({name:this.fb.control(void 0,[p.kI.required]),nativeName:this.fb.control(void 0,[p.kI.required]),acronym:this.fb.control(void 0,[p.kI.required]),active:this.fb.control(!0,[p.kI.required])}),this.unsubscribe$=new X.x,this.params$=this.route.params.pipe((0,L.R)(this.unsubscribe$),(0,f.U)(e=>e)),this.loading$=this.store.select(g.b.getLoading).pipe((0,L.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,L.R)(this.unsubscribe$),(0,f.U)(e=>m.g[e.modalMode])),this.entity$=this.store.select(g.b.getOne).pipe((0,L.R)(this.unsubscribe$),(0,h.h)(e=>!!e)),this.action$=this.store.select(g.b.getAction).pipe((0,L.R)(this.unsubscribe$),(0,Y.T)(1),(0,h.h)(e=>e.type===x.Us.CREATE_ONE&&e.status===x.M4.SUCCESS))}ngOnInit(){this.params$.pipe((0,h.h)(e=>!!e.id)).subscribe(e=>this.store.dispatch(c.p.loadOne({id:e.id}))),this.action$.subscribe(()=>{this.hide()}),this.modalMode$.pipe((0,h.h)(e=>e===m.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{this.form.controls.id||this.form.addControl("id",this.fb.control(e.id,[p.kI.required])),this.form.patchValue({id:e.id,name:e.name,nativeName:e.nativeName,acronym:e.acronym,active:e.active})})}ngOnDestroy(){this.unsubscribe$.next(!0),this.unsubscribe$.complete()}hide(){this.visible=!1,this.store.dispatch(c.p.unload()),this.router.navigate([W.A.getParentRoute(this.router.url,1)])}send(){this.form.invalid?P.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,V.q)(1)).subscribe(e=>{switch(e){case m.g.CREATE:this.store.dispatch(c.p.create({payload:this.form.value}));break;case m.g.UPDATE:this.store.dispatch(c.p.update({payload:this.form.value}))}})}get NumberMode(){return l.rm}get Naming(){return l.Si}get names(){return b.z}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-language-modal"]],decls:2,vars:3,consts:[[3,"draggable","resizable","header","modal","visible","style","visibleChange","onHide",4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup","ngSubmit",4,"appLet"],[3,"formGroup","ngSubmit"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],[1,"w-full","flex","align-items-center","gap-3"],[3,"inputId","formControlName"]],template:function(e,i){1&e&&(t.YNc(0,ct,6,20,"p-dialog",0),t.ALo(1,"async")),2&e&&t.Q6J("appLet",t.lcZ(1,1,i.modalMode$))},dependencies:[p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,q.T,_.e,k.o,T.Ql,tt.V,et.Z,at.D,E.Ov,E.i8,v.X$,nt.J,ot.F],changeDetection:0}),n})()}]}];let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(gt),u.Bz]}),n})();var ht=a(7611);let vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[R.S,Q.g,I.y,ht.h,G.I,ut,U.G,N.K,$.D,J.D,T.Iu]}),n})()}}]);