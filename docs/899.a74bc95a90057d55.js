"use strict";(self.webpackChunkprodutos_importados=self.webpackChunkprodutos_importados||[]).push([[899],{1899:(v,p,a)=>{a.r(p),a.d(p,{CarrinhoModule:()=>x});var l=a(6814),h=a(33),t=a(9468),d=a(8594),c=a(95);function C(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(e){const u=t.CHM(o).$implicit;return t.KtG(u.quantidade=e)})("change",function(){t.CHM(o);const e=t.oxw(2);return t.KtG(e.calculaTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw(2);return t.KtG(u.removerProdutoCarrinho(s.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&n){const o=i.$implicit;t.xp6(1),t.Q6J("src",o.imagem,t.LSH),t.xp6(2),t.hij("",o.descricao," "),t.xp6(2),t.hij("Pre\xe7o: ",t.xi3(6,4,o.preco,"BRL"),""),t.xp6(4),t.Q6J("ngModel",o.quantidade)}}function g(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,C,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.comprar())}),t._uU(7,"Comprar"),t.qZA()()}if(2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.itensCarrinho),t.xp6(2),t.hij("Total:",t.xi3(5,2,o.total,"BRL"),"")}}function m(n,i){1&n&&t._uU(0,"Nenhum produto foi adicionado ao carrinho")}const _=[{path:"",component:(()=>{var n;class i{constructor(r,e){this.carrinhoService=r,this.router=e,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((r,e)=>r+e.preco*e.quantidade,0)}removerProdutoCarrinho(r){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==r),this.carrinhoService.removerProdutoCarrinho(r),this.calculaTotal()}comprar(){alert("Parab\xe9ns, voc\xea finalizou a sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return(n=i).\u0275fac=function(r){return new(r||n)(t.Y36(d.e),t.Y36(h.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(r,e){if(1&r&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,g,8,5,"div",1),t.YNc(3,m,1,0,"ng-template",null,2,t.W1O)),2&r){const s=t.MAs(4);t.xp6(2),t.Q6J("ngIf",e.itensCarrinho.length>0)("ngIfElse",s)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),i})()}];let f=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(_),h.Bz]}),i})(),x=(()=>{var n;class i{}return(n=i).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,f,c.u5]}),i})()}}]);