$(function(){
	var brand=new Brand();
	brand.getBrandTitle();
})
var Brand=function(){

}
Brand.prototype={
	baseUrl:'http://localhost:9090/api/',
	getBrandTitle:function(){
		$.ajax({
			url:this.baseUrl+'getbrandtitle',
			success:function(data) {
				console.log(data);
				var html=template('getbrandtpl',data)
				$('#brandList ul').html(html);
			}
		})
	}
}