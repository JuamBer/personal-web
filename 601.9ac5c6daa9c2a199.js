"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[601],{5601:(A,s,o)=>{o.r(s),o.d(s,{WebsiteModule:()=>_});var r=o(6895),d=o(2216),p=o(9605),m=o(355),h=o(3928),u=o(4585),C=o(6333),c=o(3151),n=o(4650),M=o(2687),O=o(2997),l=o(3416),P=o(4121),f=o(1053);function v(t,a){if(1&t&&(n.TgZ(0,"li")(1,"a",14),n._uU(2),n.ALo(3,"titlecase"),n.qZA()()),2&t){const e=a.$implicit;n.xp6(1),n.Q6J("routerLink","/"+e.page),n.xp6(1),n.Oqu(n.lcZ(3,2,e.name))}}function x(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"a",15),n.NdJ("click",function(){n.CHM(e);const g=n.oxw();return n.KtG(g.closeNav())}),n._uU(1),n.ALo(2,"titlecase"),n.qZA()}if(2&t){const e=a.$implicit;n.Q6J("routerLink","/"+e.page),n.xp6(1),n.Oqu(n.lcZ(2,2,e.name))}}let y=(()=>{class t{constructor(){this.store=(0,n.f3M)(O.yh),this.translateSrv=(0,n.f3M)(l.sK),this.pages=[]}ngOnInit(){this.store.select(P.$.getOne).subscribe(e=>{e&&this.translateSrv.use(e.acronym)}),this.translateSrv.onLangChange.subscribe(e=>{this.loadPage()})}loadPage(){this.pages=[{name:this.translateSrv.instant("pages.home"),page:"home"},{name:this.translateSrv.instant("pages.certificates"),page:"certificates"}]}openNav(){const e=document.getElementById("myNav");e&&(e.style.width="100%")}closeNav(){const e=document.getElementById("myNav");e&&(e.style.width="0%")}get faBars(){return M.xiG}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-sidebar"]],decls:28,vars:7,consts:[[1,"cms"],[3,"routerLink"],[1,"me"],["src","assets/images/me.jpg","alt","Juan"],[1,"mt-2"],[1,"hamburguer-menu",2,"font-size","30px","cursor","pointer",3,"click"],[3,"icon"],[1,"my-container"],[1,"max-width"],[4,"ngFor","ngForOf"],["id","myNav",1,"overlay"],["href","javascript:void(0)",1,"closebtn",3,"click"],[1,"overlay-content"],["routerLinkActive","active",3,"routerLink","click",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink"],["routerLinkActive","active",3,"routerLink","click"]],template:function(e,i){1&e&&(n.TgZ(0,"header")(1,"div",0)(2,"a",1),n._uU(3,"CMS"),n.qZA()(),n.TgZ(4,"div",2)(5,"div"),n._UZ(6,"img",3),n.qZA(),n.TgZ(7,"div")(8,"h1"),n._uU(9,"Juan S\xe1ez Garc\xeda"),n.qZA()(),n.TgZ(10,"div")(11,"span"),n._uU(12),n.ALo(13,"translate"),n.qZA()(),n.TgZ(14,"div",4),n._UZ(15,"app-language-select"),n.qZA()(),n.TgZ(16,"span",5),n.NdJ("click",function(){return i.openNav()}),n._UZ(17,"fa-icon",6),n.qZA(),n.TgZ(18,"div",7)(19,"div",8)(20,"nav")(21,"ul"),n.YNc(22,v,4,4,"li",9),n.qZA()()()()(),n.TgZ(23,"div",10)(24,"a",11),n.NdJ("click",function(){return i.closeNav()}),n._uU(25,"\xd7"),n.qZA(),n.TgZ(26,"div",12),n.YNc(27,x,3,4,"a",13),n.qZA()()),2&e&&(n.xp6(2),n.Q6J("routerLink","/backoffice"),n.xp6(10),n.Oqu(n.lcZ(13,5,"sidebar.description")),n.xp6(5),n.Q6J("icon",i.faBars),n.xp6(5),n.Q6J("ngForOf",i.pages),n.xp6(5),n.Q6J("ngForOf",i.pages))},dependencies:[r.sg,c.rH,c.Od,f.n,d.BN,r.rS,l.X$],styles:["header[_ngcontent-%COMP%]{width:calc(100% - 20px);padding:10px;margin-bottom:2.5%}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:2.5px;border-radius:2px;transition:.25s}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#4a9e98}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{width:100%;margin-bottom:3.5%}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100px;max-height:100px;border-radius:50%;padding:10px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#345;font-weight:800}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:17px;font-weight:400;background-color:#4a9e98;padding:5px;border-radius:5px;color:#fff}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;justify-content:center;display:flex}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;width:100%;max-width:500px;justify-content:space-between;align-items:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:250px;text-align:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:30px;text-decoration:none;color:#d0dadc}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#345;border-bottom:#4a9e98 solid 3px}.my-container[_ngcontent-%COMP%]{width:80%;padding-left:10%;padding-right:10%;display:flex;justify-content:center}.my-container[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{width:100%;max-width:1700px}body[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.overlay[_ngcontent-%COMP%]{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-color:#000;background-color:#000000e6;overflow-x:hidden;transition:.5s}.overlay-content[_ngcontent-%COMP%]{position:relative;top:25%;width:100%;text-align:center;margin-top:30px}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;margin-top:10px;text-decoration:none;font-size:36px;color:#818181;display:block;transition:.3s}.overlay[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#f1f1f1}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#f1f1f1}.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{position:absolute;top:20px;right:45px;font-size:60px}.hamburguer-menu[_ngcontent-%COMP%]{display:none}.hamburguer-menu[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding:.5em;border-radius:5px;width:2em;aspect-ratio:1/1}@media screen and (max-height: 450px){.cms[_ngcontent-%COMP%]{display:none;background-color:red}.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px}.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]{font-size:40px;top:15px;right:35px}}@media screen and (max-width: 800px){.cms[_ngcontent-%COMP%]{display:none}.hamburguer-menu[_ngcontent-%COMP%]{display:inline;width:15%}.my-container[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]{margin-bottom:0%!important;display:flex;align-items:center;justify-content:space-around}header[_ngcontent-%COMP%]   .cms[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{width:85%}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px}header[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:-10px;font-size:12px;text-align:center}header[_ngcontent-%COMP%]   .hamburguer-menu[_ngcontent-%COMP%]{font-size:25px!important;cursor:pointer}header[_ngcontent-%COMP%]   .hamburguer-menu[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover{background:rgb(224,224,224)}}"],changeDetection:0}),t})();const b=[{path:"",component:(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-layout"]],decls:4,vars:0,consts:[[1,"my-container"],[1,"max-width"]],template:function(e,i){1&e&&(n._UZ(0,"app-sidebar"),n.TgZ(1,"div",0)(2,"div",1),n._UZ(3,"router-outlet"),n.qZA()())},dependencies:[c.lC,y],styles:[".my-container[_ngcontent-%COMP%]{width:80%;padding:5% 10% 10%;display:flex;justify-content:center}.my-container[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{width:100%;max-width:1700px}"],changeDetection:0}),t})(),children:[{path:"home",loadChildren:()=>Promise.all([o.e(592),o.e(206)]).then(o.bind(o,3206)).then(t=>t.HomeModule)},{path:"blog",loadChildren:()=>o.e(845).then(o.bind(o,9845)).then(t=>t.BlogModule)},{path:"certificates",loadChildren:()=>Promise.all([o.e(592),o.e(805)]).then(o.bind(o,4805)).then(t=>t.CertificatesModule)},{path:"",redirectTo:"/home",pathMatch:"full"}]}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[c.Bz.forChild(b),c.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,Z,m.o,h.d,p.y,C.D,u.o,d.uH]}),t})()}}]);