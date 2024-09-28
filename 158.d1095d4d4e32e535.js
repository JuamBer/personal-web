"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[158],{5158:(K,N,a)=>{a.r(N),a.d(N,{LanguageModule:()=>bt});var C=a(3516),s=a(3774),x=a(4016),E=a(6814),c=a(6223),U=a(7213),y=a(5609),R=a(3714),p=a(4104),J=a(5),u=a(1532),g=a(6297),o=a(4961),t=a(9212),v=a(1993),$=a(4221),Z=a(9515),V=a(5219),S=a(2181),Q=a(4664),M=a(7398),G=a(8645),O=a(9773),X=a(7921),P=a(6401),m=a(5027),H=a(8114),f=a(8906),Y=a(7417),d=a(7824),A=a(2697),r=a(478),F=a(6647),L=a(1975),D=a(9989),b=a(1064),w=a(8131);let q=(()=>{class n{constructor(){this.store=(0,t.f3M)($.yh),this.confirmationSrv=(0,t.f3M)(V.YP),this.router=(0,t.f3M)(o.F0),this.translateSrv=(0,t.f3M)(Z.sK),this.titleCasePipe=(0,t.f3M)(E.rS),this.toastSrv=(0,t.f3M)(Y.k),this.messageSrv=(0,t.f3M)(V.ez),this.destroy$=new G.x,this.entities$=this.store.select(b.b.getAll),this.entities=(0,v.O4)(this.entities$,{initialValue:[]}),this.loading$=(0,d.c$)(this.store.select(b.b.getAction),[d.Us.COUNT,d.Us.LOAD_MANY,d.Us.DELETE_ONE]),this.loading=(0,v.O4)(this.loading$,{initialValue:!1}),this.count$=this.store.select(b.b.getCount),this.count=(0,v.O4)(this.count$,{initialValue:0}),this.tableConfig=(0,t.tdS)(void 0),this.action$=this.store.select(b.b.getAction)}ngOnInit(){this.handleLoadCount(),this.handleLoadTableConfig(),this.handleMessages()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}handleLoadCount(){this.store.dispatch(L.p.count((0,A.I)({feedback:new Set([d.M4.ERROR])})))}handleLoadTableConfig(){this.translateSrv.onLangChange.pipe((0,O.R)(this.destroy$),(0,X.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()})}handleMessages(){this.action$.pipe((0,O.R)(this.destroy$)).subscribe(e=>{const i=this.toastSrv.getMessage(this.translateSrv,e,this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR));i&&this.messageSrv.add(i)})}onLazyLoadEvent(e){this.store.dispatch(L.p.loadAll((0,A.I)({feedback:new Set([d.M4.ERROR]),payload:e})))}onTableEvent(e){switch(e.type){case m.rE.CREATE:this.router.navigate([this.router.url,f.g.CREATE]);break;case m.rE.VIEW:this.router.navigate([this.router.url,f.g.VIEW,e.value.id]);break;case m.rE.UPDATE:this.router.navigate([this.router.url,f.g.UPDATE,e.value.id]);break;case m.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{collectionName:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`),entityName:e.value.getDisplayName(this.translateSrv.currentLang)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(L.p.delete((0,A.I)({feedback:new Set([d.M4.PENDING,d.M4.SUCCESS,d.M4.ERROR]),id:e.value.id})))}})}}loadTableConfig(){this.tableConfig.set({...H.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`)),fields:[{field:"name",label:"Name",type:m.E7.TEXT,filter:!0,sort:!0},{field:"nativeName",label:"Native Name",type:m.E7.TEXT,filter:!0,sort:!0},{field:"acronym",label:"Acronym",type:m.E7.TEXT,filter:!0,sort:!0,format:e=>e.toUpperCase()},{field:"active",label:"Active",type:m.E7.BOOLEAN,filter:!1,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return D.z}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-language-list"]],decls:2,vars:4,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"]],template:function(i,l){1&i&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(I){return l.onLazyLoadEvent(I)})("tableEvent",function(I){return l.onTableEvent(I)}),t.qZA(),t._UZ(1,"router-outlet")),2&i&&t.Q6J("entities",l.entities())("loading",l.loading())("count",l.count())("config",l.tableConfig())},dependencies:[o.lC,w.p],changeDetection:0})}return n})();var _=a(9666),tt=a(2572),et=a(836),z=a(8180),at=a(7210),B=a(3226),nt=a(2380),it=a(1224),st=a(8398),ot=a(8808),lt=a(9185),rt=a(6946),dt=a(7371);function ut(n,h){if(1&n&&(t.TgZ(0,"div",5)(1,"span",6),t._UZ(2,"input",7),t.TgZ(3,"label",8),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",9),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=h.appLet,i=t.oxw();t.Q6J("appIsLoading",i.loading()),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,i.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.get(e))))}}function ct(n,h){if(1&n&&(t.TgZ(0,"div",5)(1,"span",6),t._UZ(2,"input",7),t.TgZ(3,"label",8),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",9),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=h.appLet,i=t.oxw();t.Q6J("appIsLoading",i.loading()),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,i.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.get(e))))}}function pt(n,h){if(1&n&&(t.TgZ(0,"div",5)(1,"span",6),t._UZ(2,"input",7),t.TgZ(3,"label",8),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",9),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&n){const e=h.appLet,i=t.oxw();t.Q6J("appIsLoading",i.loading()),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,i.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,i.form.get(e))))}}function mt(n,h){if(1&n&&(t.TgZ(0,"div",5)(1,"div",10)(2,"label",8),t._uU(3),t.ALo(4,"translate"),t.ALo(5,"isRequired"),t.TgZ(6,"span",9),t._uU(7),t.ALo(8,"async"),t.ALo(9,"errors"),t.qZA()(),t._UZ(10,"p-inputSwitch",11),t.qZA()()),2&n){const e=h.appLet,i=t.oxw();t.Q6J("appIsLoading",i.loading()),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(4,7,"columns."+e)," ",t.lcZ(5,9,i.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(8,11,t.lcZ(9,13,i.form.get(e)))),t.xp6(3),t.Q6J("inputId",e)("formControlName",e)}}function ht(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",12),t.NdJ("cancel",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.hide())})("submitForm",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",13)}if(2&n){const e=t.oxw();t.Q6J("loading",e.loading())("form",e.form)("name",e.names.name(e.Naming.CAMEL_CASE,e.NumberMode.SINGULAR))("modalMode",e.modalMode()),t.xp6(1),t.Q6J("loading",e.loading())("entity",e.entity())("modalMode",e.modalMode())}}const gt=()=>({width:"100%",maxWidth:"40rem"}),ft=n=>({name:n}),W=n=>{const h=(0,t.f3M)($.yh),e=(0,t.f3M)(nt.T),i=(0,t.f3M)(Z.sK);return h.select(F.$.getOne).pipe((0,S.h)(l=>!!l),(0,Q.w)(()=>i.get(`tables.${D.z.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`).pipe(n.paramMap.get("id")?(0,Q.w)(l=>(0,_.D)(e.getTitle(n.paramMap.get("id"))).pipe((0,M.U)(T=>`${P.R} | ${l} | ${T.nativeName}`))):(0,M.U)(l=>`${P.R} | ${l} | ${i.instant("buttons.new",{name:""})}`))))};let j=(()=>{class n{constructor(){this.router=(0,t.f3M)(o.F0),this.route=(0,t.f3M)(o.gz),this.store=(0,t.f3M)($.yh),this.fb=(0,t.f3M)(c.qu),this.visible=!0,this.form=this.fb.nonNullable.group({name:this.fb.nonNullable.control(void 0,[c.kI.required]),nativeName:this.fb.nonNullable.control(void 0,[c.kI.required]),acronym:this.fb.nonNullable.control(void 0,[c.kI.required]),active:this.fb.nonNullable.control(!0,[c.kI.required])}),this.destroy$=new G.x,this.params$=this.route.params.pipe((0,M.U)(e=>e)),this.loading$=(0,d.c$)(this.store.select(b.b.getAction),[d.Us.LOAD_ONE,d.Us.CREATE_ONE,d.Us.UPDATE_ONE]),this.loading=(0,v.O4)(this.loading$,{initialValue:!1}),this.modalMode$=this.params$.pipe((0,M.U)(e=>f.g[e.modalMode])),this.modalMode=(0,v.O4)(this.modalMode$,{initialValue:f.g.VIEW}),this.entity$=this.store.select(b.b.getOne).pipe((0,S.h)(e=>!!e)),this.entity=(0,v.O4)(this.entity$),this.action$=this.store.select(b.b.getAction).pipe((0,et.T)(1),(0,S.h)(e=>!!e&&(e.type===d.Us.CREATE_ONE||e.type===d.Us.UPDATE_ONE)&&e.status===d.M4.SUCCESS))}ngOnInit(){this.handleLoadData(),this.handleParams(),this.handleEntity(),this.handleAction()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.store.dispatch(L.p.unload())}handleLoadData(){}handleParams(){this.params$.pipe((0,O.R)(this.destroy$),(0,S.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(L.p.loadOne((0,A.I)({feedback:new Set([d.M4.ERROR]),id:e.id})))})}handleEntity(){(0,tt.a)([this.entity$,this.modalMode$]).subscribe(([e,i])=>{!e||!i||(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[c.kI.required])),this.form.patchValue(e),i===f.g.VIEW&&this.form.disable())})}handleAction(){this.action$.pipe((0,O.R)(this.destroy$)).subscribe(()=>{this.hide()})}hide(){this.visible=!1,this.modalMode$.pipe((0,z.q)(1)).subscribe(e=>{this.router.navigate(e===f.g.CREATE?[B.A.getParentRoute(this.router.url,1)]:[B.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?at.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,z.q)(1)).subscribe(e=>{switch(e){case f.g.CREATE:this.store.dispatch(L.p.create((0,A.I)({feedback:new Set([d.M4.PENDING,d.M4.SUCCESS,d.M4.ERROR]),payload:this.form.value})));break;case f.g.UPDATE:this.store.dispatch(L.p.update((0,A.I)({feedback:new Set([d.M4.PENDING,d.M4.SUCCESS,d.M4.ERROR]),payload:this.form.value})))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return D.z}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-language-modal"]],decls:11,vars:22,consts:[[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],[1,"w-full","flex","align-items-center","gap-3"],[3,"inputId","formControlName"],[3,"loading","form","name","modalMode","cancel","submitForm"],[3,"loading","entity","modalMode"]],template:function(i,l){1&i&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(I){return l.visible=I})("onHide",function(){return l.hide()}),t.ALo(1,"translate"),t.ALo(2,"lowercase"),t.ALo(3,"translate"),t.TgZ(4,"form",1)(5,"div",2),t.YNc(6,ut,11,15,"div",3)(7,ct,11,15,"div",3)(8,pt,11,15,"div",3)(9,mt,11,15,"div",3),t.qZA()(),t.YNc(10,ht,2,7,"ng-template",4),t.qZA()),2&i&&(t.Akn(t.DdM(19,gt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(1,12,t.lcZ(2,15,"buttons."+l.modalMode()),t.VKq(20,ft,t.lcZ(3,17,"tables."+l.names.name(l.Naming.CAMEL_CASE,l.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",l.visible),t.xp6(4),t.Q6J("formGroup",l.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","nativeName"),t.xp6(1),t.Q6J("appLet","acronym"),t.xp6(1),t.Q6J("appLet","active"))},dependencies:[U.V,V.jx,it.Z,st.D,y.Ql,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,ot.T,lt.e,R.o,Z.X$,rt.J,dt.F,E.Ov,E.i8],changeDetection:0})}return n})();const vt=[{path:"",title:()=>{const n=(0,t.f3M)($.yh),h=(0,t.f3M)(Z.sK);return n.select(F.$.getOne).pipe((0,S.h)(e=>!!e),(0,Q.w)(()=>h.get(`tables.${D.z.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`).pipe((0,M.U)(e=>`${P.R} | ${e}`))))},component:q,children:[{path:":modalMode",title:W,component:j},{path:":modalMode/:id",title:W,component:j}]}];let Et=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(vt),o.Bz]})}return n})();var Lt=a(6704);let bt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({providers:[E.rS],imports:[u.y,Lt.h,U.S,p.EV,Et,x.G,s.K,C.D,g.D,y.Iu,c.UX,J.o,R.j,E.ez]})}return n})()},5609:(K,N,a)=>{a.d(N,{Iu:()=>R,Ql:()=>y});var C=a(6814),s=a(9212),x=a(6223);const E=["input"],c=(p,J,u)=>({"p-inputswitch p-component":!0,"p-inputswitch-checked":p,"p-disabled":J,"p-focus":u}),U={provide:x.JU,useExisting:(0,s.Gpc)(()=>y),multi:!0};let y=(()=>{class p{cd;style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;onChange=new s.vpe;input;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(u){this.cd=u}onClick(u){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:u,checked:this.modelValue}),u.preventDefault(),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(u){this.modelValue=u,this.cd.markForCheck()}registerOnChange(u){this.onModelChange=u}registerOnTouched(u){this.onModelTouched=u}setDisabledState(u){this.disabled=u,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=function(g){return new(g||p)(s.Y36(s.sBO))};static \u0275cmp=s.Xpm({type:p,selectors:[["p-inputSwitch"]],viewQuery:function(g,o){if(1&g&&s.Gf(E,5),2&g){let t;s.iGM(t=s.CRH())&&(o.input=t.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",tabindex:"tabindex",inputId:"inputId",name:"name",disabled:"disabled",readonly:"readonly",trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onChange:"onChange"},features:[s._Bn([U])],decls:5,vars:22,consts:[[3,"ngClass","ngStyle","click"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"checked","disabled","focus","blur"],["input",""],[1,"p-inputswitch-slider"]],template:function(g,o){1&g&&(s.TgZ(0,"div",0),s.NdJ("click",function(v){return o.onClick(v)}),s.TgZ(1,"div",1)(2,"input",2,3),s.NdJ("focus",function(){return o.onFocus()})("blur",function(){return o.onBlur()}),s.qZA()(),s._UZ(4,"span",4),s.qZA()),2&g&&(s.Tol(o.styleClass),s.Q6J("ngClass",s.kEZ(18,c,o.checked(),o.disabled,o.focused))("ngStyle",o.style),s.uIk("data-pc-name","inputswitch")("data-pc-section","root"),s.xp6(1),s.uIk("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),s.xp6(1),s.Q6J("checked",o.checked())("disabled",o.disabled),s.uIk("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),s.xp6(2),s.uIk("data-pc-section","slider"))},dependencies:[C.mk,C.PC],styles:['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n'],encapsulation:2,changeDetection:0})}return p})(),R=(()=>{class p{static \u0275fac=function(g){return new(g||p)};static \u0275mod=s.oAB({type:p});static \u0275inj=s.cJS({imports:[C.ez]})}return p})()}}]);