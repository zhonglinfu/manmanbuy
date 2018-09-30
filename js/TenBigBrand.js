var productId = 0;
$(function() {
    var tenBrand = new TenBrand();
    tenBrand.getBrand();
    tenBrand.getBrandProductList();
    tenBrand.getProductCom();
})
var TenBrand = function() {

};

TenBrand.prototype = {
    baseUrl: 'http://localhost:9090/api/',
    brandtitleid: function() {
        var href = location.href;
        var brandtitleid;
        var id = href.substr(-2);
        if (id[0] != '=') {
            brandtitleid = id;
        } else {
            brandtitleid = id.substr(-1);
        }

        return brandtitleid;
    },
    getBrand: function() {

        $.ajax({
            url: this.baseUrl + 'getbrand',
            data: { brandtitleid: this.brandtitleid() },
            success: function(data) {
                var html = template('tenBrandtpl', data);
                console.log(1111111111);
                 console.log(html);
                $('.brandList').html(html);
                console.log($('.brandList i'));
                $('.brandList i').eq(0).css('backgroundColor', 'red');
                $('.brandList i').eq(1).css('backgroundColor', 'yellow');
                $('.brandList i').eq(2).css('backgroundColor', 'green');


            }
        })
    },

    getBrandProductList: function() {
        $.ajax({
            url: this.baseUrl + 'getbrandproductlist',
            async: false,
            data: { brandtitleid: this.brandtitleid(), pagesize: 5 },
            success: function(data) {
                // console.log(data);
                productId = data.result[0].productId;
                console.log(productId);

                console.log(33333333);
                var html = template('getBrandListtpl', data);
                $('#main>.sales').html(html);


            }
        })
    },
    getProductCom: function() {
        console.log(productId, 9);
        $.ajax({
            url: this.baseUrl + 'getproductcom',
            data: { productid: 1 },
            success: function(data) {
                console.log(data);
                console.log(55555555);
                var html = template('getproductcomtpl', data);
                $('#main>.comment').html(html);
            }
        })
    }

}
