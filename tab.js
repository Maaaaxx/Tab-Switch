
var TabSwitch = (function(){
    function Tabs($node){
        this.ct = $node;
        this.tab = $node.children('.title').children('li');
        this.pages = $node.children('.page').children('li');
        this.bind();
    }
    Tabs.prototype.bind = function(){
        var _this = this;
        this.tab.click(function(){
            var index = $(this).index();
            _this.tab.removeClass('opt').eq(index).addClass('opt');
            _this.pages.removeClass('opt').eq(index).addClass('opt');
        });
    };
    return {
        init:function($nodeList){
            $nodeList.each(function(){
                new Tabs($(this));
            });
        }
    };
})();
TabSwitch.init($('.tabs'));