/*!
* hScroll.js
* Author: Mr. Huang
*
*/;
(function() {
	function hScroll(options) {
		var self = this;
		//$.extend(defaults, options);
		self = Object.assign(self, {
			nav1: '', //导航栏
			nav2: '', //需要监听的内容
			check: '', //选中样式
		}, options);
		self.init();
	}

	hScroll.prototype = {
		init: function() {
			var self = this,
				arr = [],
				kdiv = $(self.nav2);
			for(var i = 0; i < kdiv.length; i++) {
				if(i==0){
					arr.push($(kdiv[i]).offset().top);
				}else{
					arr.push($(kdiv[i]).offset().top-80);
				}
			}

			console.log(arr)
			self.sctopFun(arr);
			$(window).scroll(function(e) {
				self.sctopFun(arr);
			});
			$(self.nav1).on('click',function(e) {				
				$('body,html').animate({
					scrollTop: arr[$(this).index()] + 'px'
				});
			});
		},
		sctopFun: function(arr) {
			var self = this;
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
			var keys = 0,
				flag = true;
			for(var i = 0; i < arr.length; i++) {
				keys++;
				if(flag) {
					console.log(self.check)

					if(scrollTop >= arr[arr.length - keys] - 300) {
						$(self.nav1).eq(arr.length - keys).addClass(self.check).siblings().removeClass(self.check);
						flag = false;
					} else {
						flag = true;
					}
				}
			}
		},
	}
	window.hScroll = hScroll;
}());