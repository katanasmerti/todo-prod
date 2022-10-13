"use strict";(self.webpackChunkassignment_frontend=self.webpackChunkassignment_frontend||[]).push([[501],{501:(x,l,s)=>{s.r(l),s.d(l,{TodosModule:()=>C});var d=s(895),c=s(199),u=s(727),o=s(256),g=s(824);function m(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"div",5),o.NdJ("click",function(){const p=o.CHM(t).$implicit,a=o.oxw();return o.KtG(a.toggleTodo(p))}),o.TgZ(1,"div",6)(2,"div"),o._uU(3),o.qZA(),o.TgZ(4,"div",7)(5,"div",8),o._uU(6),o.ALo(7,"date"),o.qZA(),o.TgZ(8,"i",9),o.NdJ("click",function(r){const a=o.CHM(t).$implicit,h=o.oxw();return o.KtG(h.onEditTask(r,a))}),o.qZA()()()()}if(2&n){const t=i.$implicit,e=i.last;o.Gre("card priority-",t.priority,""),o.ekj("done",t.done)("mb-3",!e),o.xp6(3),o.Oqu(t.title),o.xp6(3),o.Oqu(o.lcZ(7,9,t.date))}}function f(n,i){1&n&&(o.TgZ(0,"div",10),o._uU(1,"You have no todos."),o.qZA())}const T=[{path:"",component:(()=>{class n{constructor(t,e){this.appService=t,this.router=e,this.subscription=new u.w0,this.todos=[],console.debug("TodosComponent initiated.")}ngOnInit(){this.subscription.add(this.appService.todos$.subscribe({next:t=>{this.todos=t}}))}ngOnDestroy(){this.subscription.unsubscribe()}toggleTodo(t){t.done=!t.done,this.appService.todos$.next(this.todos)}clean(){this.appService.todos$.next(this.todos.filter(t=>!t.done))}onEditTask(t,e){t.stopPropagation(),this.appService.taskForEditing$.next(e),this.router.navigate(["/new"])}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(g.z),o.Y36(c.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-todos"]],decls:7,vars:2,consts:[[1,"page-header"],[1,"fw-bold"],["title","Delete completed tasks",1,"btn","btn-danger","btn-sm","ms-auto","text-light",3,"click"],[3,"done","mb-3","class","click",4,"ngFor","ngForOf"],["class","text-secondary",4,"ngIf"],[3,"click"],[1,"card-body","d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-center","card-date"],[1,"small","text-secondary"],[1,"card-icon","bi","bi-pencil-square","edit-icon",3,"click"],[1,"text-secondary"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2,"My Todos"),o.qZA(),o.TgZ(3,"button",2),o.NdJ("click",function(){return e.clean()}),o._uU(4," Clean "),o.qZA()(),o.YNc(5,m,9,11,"div",3),o.YNc(6,f,2,0,"div",4)),2&t&&(o.xp6(5),o.Q6J("ngForOf",e.todos),o.xp6(1),o.Q6J("ngIf",!e.todos.length))},dependencies:[d.sg,d.O5,d.uU],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;border-left-width:4px}.card-icon[_ngcontent-%COMP%]{font-size:25px}.card-icon[_ngcontent-%COMP%]:hover{transition:.2s;color:#123f0545}.card-date[_ngcontent-%COMP%]{gap:15px;text-align:end}.card[_ngcontent-%COMP%]:hover:not(.done){background:rgba(0,0,0,.01)}.card.done[_ngcontent-%COMP%]{opacity:.5;text-decoration:line-through}.card.priority-0[_ngcontent-%COMP%]{border-left-color:#0d6efd}.card.priority-1[_ngcontent-%COMP%]{border-left-color:#f1c40f}.card.priority-2[_ngcontent-%COMP%]{border-left-color:#e74c3c}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.Bz.forChild(T),c.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,v]}),n})()}}]);