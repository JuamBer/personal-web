"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[19],{3019:(N,d,o)=>{o.r(d),o.d(d,{WebsiteModule:()=>F});var c=o(6895),r=o(4006),u=o(2216),n=o(4650),p=o(1795);const C=function(e,i){return{"p-button-icon":!0,"p-button-icon-left":e,"p-button-icon-right":i}};function m(e,i){if(1&e&&n._UZ(0,"span",3),2&e){const t=n.oxw();n.Tol(t.checked?t.onIcon:t.offIcon),n.Q6J("ngClass",n.WLB(3,C,"left"===t.iconPos,"right"===t.iconPos))}}function M(e,i){if(1&e&&(n.TgZ(0,"span",4),n._uU(1),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Oqu(t.checked?t.hasOnLabel?t.onLabel:"":t.hasOffLabel?t.offLabel:"")}}const O=function(e,i,t){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":e,"p-highlight":i,"p-disabled":t}},P={provide:r.JU,useExisting:(0,n.Gpc)(()=>h),multi:!0};let h=(()=>{class e{constructor(t){this.cd=t,this.iconPos="left",this.onChange=new n.vpe,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(t){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[n._Bn([P])],decls:3,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"ngClass"],[1,"p-button-label"]],template:function(t,a){1&t&&(n.TgZ(0,"div",0),n.NdJ("click",function(g){return a.toggle(g)})("keydown.enter",function(g){return a.toggle(g)}),n.YNc(1,m,1,6,"span",1),n.YNc(2,M,2,1,"span",2),n.qZA()),2&t&&(n.Tol(a.styleClass),n.Q6J("ngClass",n.kEZ(8,O,a.onIcon&&a.offIcon&&!a.hasOnLabel&&!a.hasOffLabel,a.checked,a.disabled))("ngStyle",a.style),n.uIk("tabindex",a.disabled?null:"0")("aria-checked",a.checked),n.xp6(1),n.Q6J("ngIf",a.onIcon||a.offIcon),n.xp6(1),n.Q6J("ngIf",a.onLabel||a.offLabel))},dependencies:[c.mk,c.O5,c.PC,p.H],styles:['.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}'],changeDetection:0}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.ez,p.T]}),e})();var v=o(9605),y=o(355),x=o(3928),_=o(4585),T=o(6333),s=o(3151),L=o(2687),Z=o(2997),f=o(3416),k=o(5019),B=o(1053);function w(e,i){if(1&e&&(n.TgZ(0,"li")(1,"a",15),n._uU(2),n.ALo(3,"titlecase"),n.qZA()()),2&e){const t=i.$implicit;n.xp6(1),n.Q6J("routerLink","/"+t.page),n.xp6(1),n.Oqu(n.lcZ(3,2,t.name))}}function A(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"a",16),n.NdJ("click",function(){n.CHM(t);const l=n.oxw();return n.KtG(l.closeNav())}),n._uU(1),n.ALo(2,"titlecase"),n.qZA()}if(2&e){const t=i.$implicit;n.Q6J("routerLink","/"+t.page),n.xp6(1),n.Oqu(n.lcZ(2,2,t.name))}}let S=(()=>{class e{constructor(){this.store=(0,n.f3M)(Z.yh),this.translateSrv=(0,n.f3M)(f.sK),this.fb=(0,n.f3M)(r.qu),this.colorModeFormControl=this.fb.control(!0),this.pages=[]}ngOnInit(){this.store.select(k.$.getOne).subscribe(t=>{t&&this.translateSrv.use(t.acronym)}),this.translateSrv.onLangChange.subscribe(t=>{this.loadPage()}),this.colorModeFormControl.valueChanges.subscribe(t=>{document.body.classList.remove("dark","light"),document.body.classList.add(t?"light":"dark")})}loadPage(){this.pages=[{name:this.translateSrv.instant("pages.home"),page:"home"},{name:this.translateSrv.instant("pages.certificates"),page:"certificates"}]}openNav(){const t=document.getElementById("myNav");t&&(t.style.width="100%")}closeNav(){const t=document.getElementById("myNav");t&&(t.style.width="0%")}get faBars(){return L.xiG}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sidebar"]],decls:29,vars:10,consts:[[1,"cms"],[3,"routerLink"],[1,"me"],["src","assets/images/me.jpg","alt","Juan"],[1,"mt-2","flex","gap-2","align-items-stretch"],["ariaLabel","Color mode",3,"formControl","offIcon","onIcon"],[1,"hamburger-button-menu",3,"click"],[3,"icon"],[1,"my-container"],[1,"max-width"],[4,"ngFor","ngForOf"],["id","myNav",1,"overlay"],[1,"close-button",3,"click"],[1,"overlay-content"],["routerLinkActive","active",3,"routerLink","click",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"],["routerLinkActive","active",3,"routerLink","click"]],template:function(t,a){1&t&&(n.TgZ(0,"header")(1,"div",0)(2,"a",1),n._uU(3,"CMS"),n.qZA()(),n.TgZ(4,"div",2)(5,"div"),n._UZ(6,"img",3),n.qZA(),n.TgZ(7,"div")(8,"h1"),n._uU(9,"Juan S\xe1ez Garc\xeda"),n.qZA()(),n.TgZ(10,"div")(11,"span"),n._uU(12),n.ALo(13,"translate"),n.qZA()(),n.TgZ(14,"div",4),n._UZ(15,"app-language-select")(16,"p-toggleButton",5),n.qZA()(),n.TgZ(17,"span",6),n.NdJ("click",function(){return a.openNav()}),n._UZ(18,"fa-icon",7),n.qZA(),n.TgZ(19,"div",8)(20,"div",9)(21,"nav")(22,"ul"),n.YNc(23,w,4,4,"li",10),n.qZA()()()()(),n.TgZ(24,"div",11)(25,"a",12),n.NdJ("click",function(){return a.closeNav()}),n._uU(26,"\xd7"),n.qZA(),n.TgZ(27,"div",13),n.YNc(28,A,3,4,"a",14),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("routerLink","/backoffice"),n.xp6(10),n.Oqu(n.lcZ(13,8,"sidebar.description")),n.xp6(4),n.Q6J("formControl",a.colorModeFormControl)("offIcon","fa fa-moon")("onIcon","fa fa-sun"),n.xp6(2),n.Q6J("icon",a.faBars),n.xp6(5),n.Q6J("ngForOf",a.pages),n.xp6(5),n.Q6J("ngForOf",a.pages))},dependencies:[c.sg,s.rH,s.Od,r.JJ,r.oH,B.n,h,u.BN,c.rS,f.X$],styles:["header[_ngcontent-%COMP%]{width:calc(100% - 20px);padding:10px;margin-bottom:2.5%}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2.5px;border-radius:2px;transition:.25s;color:var(--bgColor)}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--accentColor);color:#fff}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{width:100%;margin-bottom:3.5%}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100px;max-height:100px;border-radius:50%;padding:10px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:var(--accentTextColor);font-weight:800}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:400;background-color:var(--accentColor);padding:5px;border-radius:5px;color:#fff}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;justify-content:center;display:flex}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;width:100%;max-width:500px;justify-content:space-between;align-items:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:250px;text-align:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:30px;text-decoration:none;color:#d0dadc}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accentTextColor);transition:color .25s ease-in-out}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--accentTextColor);border-bottom:var(--accentColor) solid 3px}.my-container[_ngcontent-%COMP%]{width:80%;padding-left:10%;padding-right:10%;display:flex;justify-content:center}.my-container[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{width:100%;max-width:1700px}body[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.overlay[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-color:#000;background-color:#000000e6;overflow-x:hidden;transition:.5s}.overlay-content[_ngcontent-%COMP%]{position:relative;top:25%;width:100%;text-align:center;margin-top:30px}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;margin-top:10px;text-decoration:none;font-size:36px;color:#818181;display:block;transition:.3s}.overlay[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#f1f1f1}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#f1f1f1}.overlay[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{position:absolute;top:20px;right:45px;font-size:60px}.hamburger-button-menu[_ngcontent-%COMP%]{display:none}.hamburger-button-menu[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:.5em;border-radius:5px;width:2em;aspect-ratio:1/1}@media screen and (max-height: 450px){.cms[_ngcontent-%COMP%]{display:none}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px}.overlay[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{font-size:40px;top:15px;right:35px}}@media screen and (max-width: 800px){.cms[_ngcontent-%COMP%]{display:none}.hamburger-button-menu[_ngcontent-%COMP%]{display:inline;width:15%;font-size:30px;cursor:pointer}.my-container[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]{margin-bottom:0%!important;display:flex;align-items:center;justify-content:space-around}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{width:85%}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:-10px;font-size:12px;text-align:center}header[_ngcontent-%COMP%]   .hamburger-button-menu[_ngcontent-%COMP%]{font-size:25px!important;cursor:pointer;transition:all .15s ease-in-out}header[_ngcontent-%COMP%]   .hamburger-button-menu[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:.5em;border-radius:5px;width:2em;aspect-ratio:1/1;transition:all .15s ease-in-out}header[_ngcontent-%COMP%]   .hamburger-button-menu[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover{background:var(--accentColor);color:#fff}header[_ngcontent-%COMP%]   .hamburger-button-menu[_ngcontent-%COMP%]:hover{transform:scale(1.05)}}"],changeDetection:0}),e})();const I=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"my-container"],[1,"max-width"]],template:function(t,a){1&t&&(n._UZ(0,"app-sidebar"),n.TgZ(1,"div",0)(2,"div",1),n._UZ(3,"router-outlet"),n.qZA()())},dependencies:[s.lC,S],styles:[".my-container[_ngcontent-%COMP%]{width:80%;padding:5% 10% 10%;display:flex;justify-content:center}.my-container[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{width:100%;max-width:1700px}"],changeDetection:0}),e})(),children:[{path:"home",loadChildren:()=>Promise.all([o.e(592),o.e(886)]).then(o.bind(o,886)).then(e=>e.HomeModule)},{path:"blog",loadChildren:()=>o.e(376).then(o.bind(o,9845)).then(e=>e.BlogModule)},{path:"certificates",loadChildren:()=>Promise.all([o.e(592),o.e(805)]).then(o.bind(o,4805)).then(e=>e.CertificatesModule)},{path:"",redirectTo:"/home",pathMatch:"full"}]}];let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.Bz.forChild(I),s.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.ez,J,r.UX,y.o,x.d,b,v.y,T.D,_.o,u.uH]}),e})()}}]);