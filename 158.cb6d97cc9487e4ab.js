"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[158],{5158:(F,T,n)=>{n.r(T),n.d(T,{LanguageModule:()=>Ct});var E=n(3516),o=n(3774),I=n(4016),f=n(6814),d=n(6223),_=n(7213),M=n(5609),x=n(3714),u=n(4104),N=n(5),c=n(1532),g=n(6297),l=n(1041),t=n(9212),A=n(4221),Z=n(4119),U=n(5219),C=n(2181),R=n(4664),S=n(7398),O=n(8645),y=n(9773),w=n(5619),K=n(7921),J=n(6401),m=n(5027),W=n(8114),v=n(8906),j=n(7417),r=n(478),V=n(4575),b=n(1975),$=n(9989),L=n(1064),H=n(8131);let Y=(()=>{class a{constructor(){this.store=(0,t.f3M)(A.yh),this.confirmationSrv=(0,t.f3M)(U.YP),this.router=(0,t.f3M)(l.F0),this.translateSrv=(0,t.f3M)(Z.sK),this.titleCasePipe=(0,t.f3M)(f.rS),this.toastSrv=(0,t.f3M)(j.k),this.messageSrv=(0,t.f3M)(U.ez),this.unsubscribe$=new O.x,this.action$=this.store.select(L.b.getAction).pipe((0,y.R)(this.unsubscribe$)),this.entities$=this.store.select(L.b.getAll),this.loading$=this.store.select(L.b.getLoading),this.count$=this.store.select(L.b.getCount),this.tableConfig$=new w.X(void 0)}ngOnInit(){this.store.dispatch(b.p.count()),this.translateSrv.onLangChange.pipe((0,K.O)(this.translateSrv.currentLang)).subscribe(()=>{this.loadTableConfig()}),this.action$.subscribe(e=>{const i=this.toastSrv.getMessage(e,this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR));i&&this.messageSrv.add(i)})}onLazyLoadEvent(e){this.store.dispatch(b.p.loadAll({payload:e}))}onTableEvent(e){switch(e.type){case m.rE.CREATE:this.router.navigate([this.router.url,v.g.CREATE]);break;case m.rE.VIEW:this.router.navigate([this.router.url,v.g.VIEW,e.value.id]);break;case m.rE.UPDATE:this.router.navigate([this.router.url,v.g.UPDATE,e.value.id]);break;case m.rE.DELETE:this.confirmationSrv.confirm({message:this.translateSrv.instant("messages.confirmation.message",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),header:this.translateSrv.instant("messages.confirmation.header"),icon:"pi pi-info-circle",rejectLabel:this.translateSrv.instant("buttons.reject"),acceptLabel:this.translateSrv.instant("buttons.accept"),accept:()=>{this.store.dispatch(b.p.delete({id:e.value.id}))}})}}loadTableConfig(){const e=[];[].push({action:"add",icon:"pi pi-plus",label:this.translateSrv.instant("buttons.new",{name:this.translateSrv.instant("tables.language.singular")})}),e.push({action:"view",icon:"pi pi-search-plus"}),e.push({action:"edit",icon:"pi pi-pencil"}),e.push({action:"delete",icon:"pi pi-trash"}),this.tableConfig$.next({...W.$,title:this.titleCasePipe.transform(this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`)),fields:[{field:"name",label:"Name",type:m.E7.TEXT,filter:!0,sort:!0},{field:"nativeName",label:"Native Name",type:m.E7.TEXT,filter:!0,sort:!0},{field:"acronym",label:"Acronym",type:m.E7.TEXT,filter:!0,sort:!0,format:s=>s.toUpperCase()},{field:"active",label:"Active",type:m.E7.BOOLEAN,filter:!1,sort:!0}],buttons:{top:[{type:"primary",style:"raised",icon:"pi-plus",label:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),tooltip:this.translateSrv.instant("buttons.create",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.CREATE}],start:[],end:[{type:"primary",style:"raised",icon:"pi-eye",tooltip:this.translateSrv.instant("buttons.view",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.VIEW},{type:"primary",style:"raised",icon:"pi-file-edit",tooltip:this.translateSrv.instant("buttons.update",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.UPDATE},{type:"danger",style:"raised",icon:"pi-trash",tooltip:this.translateSrv.instant("buttons.delete",{name:this.translateSrv.instant(`tables.${this.names.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`)}),event:m.rE.DELETE}]}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return $.z}static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-language-list"]],decls:7,vars:13,consts:[[3,"entities","loading","count","config","lazyLoadEvent","tableEvent"],["position","bottom-right",3,"preventDuplicates"]],template:function(i,s){1&i&&(t.TgZ(0,"app-generic-table",0),t.NdJ("lazyLoadEvent",function(D){return s.onLazyLoadEvent(D)})("tableEvent",function(D){return s.onTableEvent(D)}),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async"),t.qZA(),t._UZ(5,"router-outlet")(6,"p-toast",1)),2&i&&(t.Q6J("entities",t.lcZ(1,5,s.entities$))("loading",t.lcZ(2,7,s.loading$))("count",t.lcZ(3,9,s.count$))("config",t.lcZ(4,11,s.tableConfig$)),t.xp6(6),t.Q6J("preventDuplicates",!0))},dependencies:[u.FN,l.lC,H.p,f.Ov],changeDetection:0})}return a})();var k=n(9666),q=n(836),B=n(8180),Q=n(7824),tt=n(7210),G=n(3226),et=n(556),nt=n(1224),at=n(8398),it=n(8808),st=n(9185),ot=n(6946),lt=n(7371);function rt(a,p){if(1&a&&(t.TgZ(0,"div",6)(1,"span",7),t._UZ(2,"input",8),t.TgZ(3,"label",9),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",10),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=p.appLet,i=t.oxw(3).appLet,s=t.oxw();t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,s.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.get(e))))}}function ct(a,p){if(1&a&&(t.TgZ(0,"div",6)(1,"span",7),t._UZ(2,"input",8),t.TgZ(3,"label",9),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",10),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=p.appLet,i=t.oxw(3).appLet,s=t.oxw();t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,s.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.get(e))))}}function pt(a,p){if(1&a&&(t.TgZ(0,"div",6)(1,"span",7),t._UZ(2,"input",8),t.TgZ(3,"label",9),t._uU(4),t.ALo(5,"translate"),t.ALo(6,"isRequired"),t.TgZ(7,"span",10),t._uU(8),t.ALo(9,"async"),t.ALo(10,"errors"),t.qZA()()()()),2&a){const e=p.appLet,i=t.oxw(3).appLet,s=t.oxw();t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("id",e)("formControlName",e),t.xp6(1),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(5,7,"columns."+e)," ",t.lcZ(6,9,s.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(9,11,t.lcZ(10,13,s.form.get(e))))}}function dt(a,p){if(1&a&&(t.TgZ(0,"div",6)(1,"div",11)(2,"label",9),t._uU(3),t.ALo(4,"translate"),t.ALo(5,"isRequired"),t.TgZ(6,"span",10),t._uU(7),t.ALo(8,"async"),t.ALo(9,"errors"),t.qZA()(),t._UZ(10,"p-inputSwitch",12),t.qZA()()),2&a){const e=p.appLet,i=t.oxw(3).appLet,s=t.oxw();t.Q6J("appIsLoading",i),t.xp6(2),t.Q6J("for",e),t.xp6(1),t.AsE(" ",t.lcZ(4,7,"columns."+e)," ",t.lcZ(5,9,s.form.get(e))," "),t.xp6(4),t.Oqu(t.lcZ(8,11,t.lcZ(9,13,s.form.get(e)))),t.xp6(3),t.Q6J("inputId",e)("formControlName",e)}}function ut(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"app-entity-modal-buttons",13),t.NdJ("cancel",function(){t.CHM(e);const s=t.oxw(4);return t.KtG(s.hide())})("submit",function(){t.CHM(e);const s=t.oxw(4);return t.KtG(s.send())}),t.qZA(),t._UZ(1,"app-entity-modal-audit",14)}if(2&a){const e=t.oxw().appLet,i=t.oxw().appLet,s=t.oxw().appLet,h=t.oxw();t.Q6J("loading",s)("form",h.form)("name",h.names.name(h.Naming.CAMEL_CASE,h.NumberMode.SINGULAR))("modalMode",e),t.xp6(1),t.Q6J("loading",s)("entity",i)("modalMode",e)}}const mt=()=>({width:"100%",maxWidth:"40rem"}),gt=a=>({name:a});function ht(a,p){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"p-dialog",1),t.NdJ("visibleChange",function(s){t.CHM(e);const h=t.oxw(3);return t.KtG(h.visible=s)})("onHide",function(){t.CHM(e);const s=t.oxw(3);return t.KtG(s.hide())}),t.ALo(2,"translate"),t.ALo(3,"lowercase"),t.ALo(4,"translate"),t.TgZ(5,"form",2)(6,"div",3),t.YNc(7,rt,11,15,"div",4)(8,ct,11,15,"div",4)(9,pt,11,15,"div",4)(10,dt,11,15,"div",4),t.qZA()(),t.YNc(11,ut,2,7,"ng-template",5),t.qZA(),t.BQk()}if(2&a){const e=p.appLet,i=t.oxw(3);t.xp6(1),t.Akn(t.DdM(19,mt)),t.Q6J("draggable",!1)("resizable",!1)("header",t.xi3(2,12,t.lcZ(3,15,"buttons."+e),t.VKq(20,gt,t.lcZ(4,17,"tables."+i.names.name(i.Naming.CAMEL_CASE,i.NumberMode.SINGULAR)+".singular"))))("modal",!0)("visible",i.visible),t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(2),t.Q6J("appLet","name"),t.xp6(1),t.Q6J("appLet","nativeName"),t.xp6(1),t.Q6J("appLet","acronym"),t.xp6(1),t.Q6J("appLet","active")}}function ft(a,p){if(1&a&&(t.ynx(0),t.YNc(1,ht,12,22,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,e.modalMode$))}}function vt(a,p){if(1&a&&(t.ynx(0),t.YNc(1,ft,3,3,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("appLet",t.lcZ(2,1,e.entity$))}}const P=a=>{const p=(0,t.f3M)(A.yh),e=(0,t.f3M)(et.T),i=(0,t.f3M)(Z.sK);return p.select(V.$.getOne).pipe((0,C.h)(s=>!!s),(0,R.w)(()=>i.get(`tables.${$.z.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.singular`).pipe(a.paramMap.get("id")?(0,R.w)(s=>(0,k.D)(e.getTitle(a.paramMap.get("id"))).pipe((0,S.U)(h=>`${J.R} | ${s} | ${h.nativeName}`))):(0,S.U)(s=>`${J.R} | ${s} | ${i.instant("buttons.new",{name:""})}`))))};let z=(()=>{class a{constructor(){this.router=(0,t.f3M)(l.F0),this.route=(0,t.f3M)(l.gz),this.store=(0,t.f3M)(A.yh),this.fb=(0,t.f3M)(d.qu),this.visible=!0,this.form=this.fb.nonNullable.group({name:this.fb.nonNullable.control(void 0,[d.kI.required]),nativeName:this.fb.nonNullable.control(void 0,[d.kI.required]),acronym:this.fb.nonNullable.control(void 0,[d.kI.required]),active:this.fb.nonNullable.control(!0,[d.kI.required])}),this.unsubscribe$=new O.x,this.params$=this.route.params.pipe((0,y.R)(this.unsubscribe$),(0,S.U)(e=>e)),this.loading$=this.store.select(L.b.getLoading).pipe((0,y.R)(this.unsubscribe$)),this.modalMode$=this.params$.pipe((0,y.R)(this.unsubscribe$),(0,S.U)(e=>v.g[e.modalMode])),this.entity$=this.store.select(L.b.getOne).pipe((0,y.R)(this.unsubscribe$),(0,C.h)(e=>!!e)),this.action$=this.store.select(L.b.getAction).pipe((0,y.R)(this.unsubscribe$),(0,q.T)(1),(0,C.h)(e=>!!e&&(e.type===Q.Us.CREATE_ONE||e.type===Q.Us.UPDATE_ONE)&&e.status===Q.M4.SUCCESS))}ngOnInit(){this.action$.subscribe(()=>{this.hide()}),this.params$.pipe((0,C.h)(e=>!!e.id)).subscribe(e=>{e.id&&this.store.dispatch(b.p.loadOne({id:e.id}))}),this.modalMode$.pipe((0,C.h)(e=>e===v.g.VIEW)).subscribe(()=>{this.form.disable()}),this.entity$.subscribe(e=>{e&&(this.form.controls.id||this.form.addControl("id",this.fb.nonNullable.control(e.id,[d.kI.required])),this.form.patchValue({id:e.id,name:e.name,nativeName:e.nativeName,acronym:e.acronym,active:e.active}))})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.store.dispatch(b.p.unload())}hide(){this.visible=!1,this.modalMode$.pipe((0,B.q)(1)).subscribe(e=>{this.router.navigate(e===v.g.CREATE?[G.A.getParentRoute(this.router.url,1)]:[G.A.getParentRoute(this.router.url,2)])})}send(){this.form.invalid?tt.h.markAllAsDirtyAndTouched(this.form):this.modalMode$.pipe((0,B.q)(1)).subscribe(e=>{switch(e){case v.g.CREATE:this.store.dispatch(b.p.create({payload:this.form.value}));break;case v.g.UPDATE:this.store.dispatch(b.p.update({payload:this.form.value}))}})}get NumberMode(){return r.rm}get Naming(){return r.Si}get names(){return $.z}static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-language-modal"]],decls:2,vars:3,consts:[[4,"appLet"],[3,"draggable","resizable","header","modal","visible","visibleChange","onHide"],[3,"formGroup"],[1,"grid","p-fluid","mt-1"],["appLoading","","class","xs:col-12 md:col-6 lg:col-6 mt-3",3,"appIsLoading",4,"appLet"],["pTemplate","footer"],["appLoading","",1,"xs:col-12","md:col-6","lg:col-6","mt-3",3,"appIsLoading"],[1,"p-float-label"],["type","text","pInputText","",1,"p-inputtext-sm",3,"id","formControlName"],[3,"for"],[1,"error"],[1,"w-full","flex","align-items-center","gap-3"],[3,"inputId","formControlName"],[3,"loading","form","name","modalMode","cancel","submit"],[3,"loading","entity","modalMode"]],template:function(i,s){1&i&&(t.YNc(0,vt,3,3,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("appLet",t.lcZ(1,1,s.loading$))},dependencies:[_.V,U.jx,nt.Z,at.D,M.Ql,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,it.T,st.e,x.o,Z.X$,ot.J,lt.F,f.Ov,f.i8],changeDetection:0})}return a})();const bt=[{path:"",title:()=>{const a=(0,t.f3M)(A.yh),p=(0,t.f3M)(Z.sK);return a.select(V.$.getOne).pipe((0,C.h)(e=>!!e),(0,R.w)(()=>p.get(`tables.${$.z.name(r.Si.CAMEL_CASE,r.rm.SINGULAR)}.plural`).pipe((0,S.U)(e=>`${J.R} | ${e}`))))},component:Y,children:[{path:":modalMode",title:P,component:z},{path:":modalMode/:id",title:P,component:z}]}];let Lt=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(bt),l.Bz]})}return a})();var At=n(6704);let Ct=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({providers:[f.rS],imports:[c.y,At.h,_.S,u.EV,Lt,I.G,o.K,E.D,g.D,M.Iu,d.UX,N.o,x.j,f.ez]})}return a})()},5609:(F,T,n)=>{n.d(T,{Iu:()=>x,Ql:()=>M});var E=n(6814),o=n(9212),I=n(6223);const f=["input"],d=(u,N,c)=>({"p-inputswitch p-component":!0,"p-inputswitch-checked":u,"p-disabled":N,"p-focus":c}),_={provide:I.JU,useExisting:(0,o.Gpc)(()=>M),multi:!0};let M=(()=>{class u{cd;style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;onChange=new o.vpe;input;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};constructor(c){this.cd=c}onClick(c){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:c,checked:this.modelValue}),c.preventDefault(),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(c){this.modelValue=c,this.cd.markForCheck()}registerOnChange(c){this.onModelChange=c}registerOnTouched(c){this.onModelTouched=c}setDisabledState(c){this.disabled=c,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=function(g){return new(g||u)(o.Y36(o.sBO))};static \u0275cmp=o.Xpm({type:u,selectors:[["p-inputSwitch"]],viewQuery:function(g,l){if(1&g&&o.Gf(f,5),2&g){let t;o.iGM(t=o.CRH())&&(l.input=t.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",tabindex:"tabindex",inputId:"inputId",name:"name",disabled:"disabled",readonly:"readonly",trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onChange:"onChange"},features:[o._Bn([_])],decls:5,vars:22,consts:[[3,"ngClass","ngStyle","click"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"checked","disabled","focus","blur"],["input",""],[1,"p-inputswitch-slider"]],template:function(g,l){1&g&&(o.TgZ(0,"div",0),o.NdJ("click",function(A){return l.onClick(A)}),o.TgZ(1,"div",1)(2,"input",2,3),o.NdJ("focus",function(){return l.onFocus()})("blur",function(){return l.onBlur()}),o.qZA()(),o._UZ(4,"span",4),o.qZA()),2&g&&(o.Tol(l.styleClass),o.Q6J("ngClass",o.kEZ(18,d,l.checked(),l.disabled,l.focused))("ngStyle",l.style),o.uIk("data-pc-name","inputswitch")("data-pc-section","root"),o.xp6(1),o.uIk("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),o.xp6(1),o.Q6J("checked",l.checked())("disabled",l.disabled),o.uIk("id",l.inputId)("aria-checked",l.checked())("aria-labelledby",l.ariaLabelledBy)("aria-label",l.ariaLabel)("name",l.name)("tabindex",l.tabindex)("data-pc-section","hiddenInput"),o.xp6(2),o.uIk("data-pc-section","slider"))},dependencies:[E.mk,E.PC],styles:['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n'],encapsulation:2,changeDetection:0})}return u})(),x=(()=>{class u{static \u0275fac=function(g){return new(g||u)};static \u0275mod=o.oAB({type:u});static \u0275inj=o.cJS({imports:[E.ez]})}return u})()}}]);