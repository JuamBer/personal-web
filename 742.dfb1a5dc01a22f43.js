"use strict";(self.webpackChunkpersonal_web=self.webpackChunkpersonal_web||[]).push([[742],{7742:(u,s,e)=>{e.r(s),e.d(s,{ProyectsModule:()=>m});var g=e(6895),C=e(2967),p=e(3626),a=e(6475),O=e(6990),P=e(4004),t=e(4650),M=e(2997);function y(n,c){if(1&n&&(t.TgZ(0,"div",10)(1,"a",11),t._uU(2),t.ALo(3,"titlecase"),t.qZA()()),2&n){const o=c.$implicit;t.xp6(1),t.s9C("href",o.url,t.LSH),t.xp6(1),t.Oqu(t.lcZ(3,2,o.name))}}function l(n,c){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3)(2,"h2"),t._uU(3),t.qZA()(),t.TgZ(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7)(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"div",8),t.YNc(11,y,4,4,"div",9),t.qZA()()()()),2&n){const o=c.$implicit;t.xp6(3),t.Oqu(o.name),t.xp6(3),t.s9C("src",o.image,t.LSH),t.s9C("alt",o.name),t.xp6(3),t.Oqu(o.description),t.xp6(2),t.Q6J("ngForOf",o.links)}}const _=[{path:"",component:(()=>{class n{constructor(o){this.proyectStore=o,this.proyects$=this.proyectStore.select(O.G.getAll).pipe((0,P.U)(r=>[...r].sort((i,f)=>new Date(f.date).getTime()-new Date(i.date).getTime())),(0,P.U)(r=>[...r].map(i=>({...i,links:JSON.parse(i.links)}))))}ngOnInit(){this.proyectStore.dispatch(a.f.loadAll({payload:null}))}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(M.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-proyects"]],decls:3,vars:3,consts:[[1,"proyects"],["class","proyect",4,"ngFor","ngForOf"],[1,"proyect"],[1,"top"],[1,"bottom"],[1,"left"],[3,"src","alt"],[1,"right"],[1,"buttons"],["class","button",4,"ngFor","ngForOf"],[1,"button"],["target","_blank",3,"href"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.YNc(1,l,12,5,"div",1),t.ALo(2,"async"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,r.proyects$)))},dependencies:[g.sg,g.Ov,g.rS],styles:['.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]{padding:5%;width:90%;border-top:5px solid #4A9E98;background-color:#4a9e981a;margin-bottom:20px}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{width:100%}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:1rem;font-size:30px;font-family:Roboto,Helvetica Neue,"sans-serif"}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:30%;padding:5%;height:100%;float:left}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:300px}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:70%;padding:5%}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-family:Roboto,Helvetica Neue,"sans-serif";text-align:justify}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;margin-top:3.5rem}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-right:10px}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;width:100%;padding:1rem;border:1px solid #4A9E98;border-radius:5px;color:#4a9e98;font-size:1.2rem;font-family:Roboto,Helvetica Neue,"sans-serif";text-align:center;cursor:pointer;font-weight:400;transition:all .3s ease-in-out}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#4a9e98;color:#fff}@media screen and (max-width: 800px){.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]{width:90%}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{width:100%}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:1rem;font-size:30px;font-family:Roboto,Helvetica Neue,"sans-serif"}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:inline}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%;height:100%;display:flex!important;align-items:center!important;justify-content:center!important}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;max-width:70px}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:90%;padding:5%}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-family:Roboto,Helvetica Neue,"sans-serif";text-align:justify}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:3.5rem}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-right:10px}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;width:100%;padding:.7rem;border:1px solid #4A9E98;border-radius:5px;color:#4a9e98;font-size:1.2rem;font-family:Roboto,Helvetica Neue,"sans-serif";text-align:center;cursor:pointer;font-weight:400;transition:all .3s ease-in-out}.proyects[_ngcontent-%COMP%]   .proyect[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#4a9e98;color:#fff}}']}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(_),p.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,d,C.U]}),n})()}}]);