(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ajd8:function(n,t,e){"use strict";e.r(t),e.d(t,"JokesModule",function(){return h});var o=e("ofXK"),c=e("tyNb"),i=e("fXoL");let r=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Bb({type:n,selectors:[["app-joke-view"]],decls:2,vars:0,template:function(n,t){1&n&&(i.Mb(0,"p"),i.rc(1,"joke-view works!"),i.Lb())},styles:[""]}),n})();var s=e("tk/3");let a=(()=>{class n{constructor(n){this._http=n,this.jokeApi="https://official-joke-api.appspot.com/"}getAll(){return this._http.get(this.jokeApi+"random_ten")}getRandom(n){return this._http.get(this.jokeApi+n)}}return n.\u0275fac=function(t){return new(t||n)(i.Qb(s.b))},n.\u0275prov=i.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function g(n,t){if(1&n){const n=i.Nb();i.Mb(0,"div",5),i.Ib(1,"img",6),i.Mb(2,"h3",7),i.rc(3),i.Lb(),i.Mb(4,"div",8),i.Mb(5,"p",9),i.rc(6,"You can add navigation (navigation and pills) to card header"),i.Lb(),i.Mb(7,"button",10),i.Tb("click",function(){return i.lc(n),i.Xb(2).likeBtn()}),i.rc(8,"like"),i.Lb(),i.Lb(),i.Lb()}if(2&n){const n=t.$implicit;i.xb(3),i.sc(n.punchline)}}function b(n,t){if(1&n&&(i.Kb(0),i.Mb(1,"article",2),i.Mb(2,"h2",3),i.rc(3,"Jokes List"),i.Lb(),i.qc(4,g,9,1,"div",4),i.Lb(),i.Jb()),2&n){const n=i.Xb();i.xb(4),i.ac("ngForOf",n.jokes)}}function d(n,t){1&n&&(i.Kb(0),i.Mb(1,"article",11),i.Ib(2,"div",12),i.Lb(),i.Jb())}const l=[{path:"",component:(()=>{class n{constructor(n){this._jokesService=n,this.isLoader=!1,this.jokes=[]}ngOnInit(){this.getJoke(),this.getRandom("jokes/random"),console.log(navigator.geolocation)}getJoke(){this.isLoader=!0,this._jokesService.getAll().subscribe(n=>{n&&(this.jokes=n,this.isLoader=!1)})}getRandom(n){this.isLoader=!0,this._jokesService.getRandom(n).subscribe(n=>{n?(this.randomJokes=n[0],console.log(n),this.isLoader=!1):console.log(n)})}likeBtn(){this.likecount=1,this.likecount+=this.isSelected?-1:1,this.isSelected=!this.isSelected,console.log(this.likecount)}}return n.\u0275fac=function(t){return new(t||n)(i.Hb(a))},n.\u0275cmp=i.Bb({type:n,selectors:[["app-jokes"]],decls:3,vars:2,consts:[[1,"jokesbg"],[4,"ngIf"],[1,"container"],[1,"w-100"],["class","card col-3",4,"ngFor","ngForOf"],[1,"card","col-3"],["src","https://source.unsplash.com/daily?human","alt","Card image top",1,"card-img-top"],[1,"card-title"],[1,"focus-content"],[1,"card-text"],[1,"btn","btn-success",3,"click"],[1,"container","loader"],[1,"shapes-5"]],template:function(n,t){1&n&&(i.Mb(0,"section",0),i.qc(1,b,5,1,"ng-container",1),i.qc(2,d,3,0,"ng-container",1),i.Lb()),2&n&&(i.xb(1),i.ac("ngIf",t.jokes),i.xb(1),i.ac("ngIf",t.isLoader))},directives:[o.j,o.i],styles:[".jokesbg[_ngcontent-%COMP%]{background:url(jokebg.a2c2c522f4e02204e0b5.svg) center 0;background-size:contain;background-attachment:fixed}.jokesbg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#678dd6;margin-bottom:3.125rem}.jokesbg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{left:0;background:#ffc107}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;background:hsla(0,0%,100%,.9);border-left:2px solid rgba(103,141,214,.3);border-right:2px solid rgba(103,141,214,.3);padding-top:1.25rem;padding-bottom:1.25rem}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:18.75rem;padding:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);border-radius:8px;box-sizing:border-box;overflow:hidden;cursor:pointer}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transition:all .3s ease}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0;width:300px;height:224px;object-fit:cover;display:block}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;padding:12px 12px 48px;line-height:32px;font-weight:500;font-size:20px}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .focus-content[_ngcontent-%COMP%]{display:block;padding:8px 12px}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .focus-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;line-height:1.5}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus-within   img[_ngcontent-%COMP%], .jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{margin-top:-80px}.jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus-within   h3[_ngcontent-%COMP%], .jokesbg[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{padding:8px 12px 0}"]}),n})(),children:[{path:"joke-view:id",component:r}]}];let p=(()=>{class n{}return n.\u0275mod=i.Fb({type:n}),n.\u0275inj=i.Eb({factory:function(t){return new(t||n)},imports:[[c.f.forChild(l)],c.f]}),n})(),h=(()=>{class n{}return n.\u0275mod=i.Fb({type:n}),n.\u0275inj=i.Eb({factory:function(t){return new(t||n)},imports:[[o.b,c.f,p]]}),n})()}}]);