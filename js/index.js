$(function(){
	var mmb=new Mmb();
	mmb.getindexmenu();
	mmb.getmoneyctrl();
})
var Mmb=function(){

};
Mmb.prototype={
	baseUrl:'http://localhost:9090/api/',
	getindexmenu:function(){
		$.ajax({
			url:this.baseUrl+'getindexmenu',
			/*dataType:'json',*/
			success:function(data){
				// console.log(data);
				var html=template('indexMeultpl',data);
				var ul=document.querySelector('#nav ul');
				ul.innerHTML=html;
			}
		})
	},
	// 获取首页的折扣列表中的数据
	getmoneyctrl:function(){
		$.ajax({
			url:this.baseUrl+'getmoneyctrl',
			success:function(data){
				var html=template('getmoneyctrltpl',data);
				var ul=document.querySelector('#productList ul',data);
				console.log(data);
				$(ul).html(html);
			}
		})
	}
}
