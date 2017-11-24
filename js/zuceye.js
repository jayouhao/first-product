$(function(){
	h=q;
	$('.hydl-right img').hover(function(){
		$(this).fadeTo(600,0.8).siblings().fadeTo(600,1);
	},function(){
		$(this).fadeTo(600,1);
	})
	//提示信息
	var defaults={
		//图片路径
		del_errorimg:"img/error.png",
		del_successimg:"img/right.png",
		//提示信息
		del_successmsg:"输入正确",
		del_username:"请输入用户名",
		del_password:"请设置密码",
		del_fanweima:'密码范围在6~16位之间,不能使用空格！',
		del_passwordadd:"请再输入一次密码",
		del_errorpassword:"两次密码不一致",
		del_email:"邮箱格式不正确",
		del_emailtwo:"(选填)请输入您常用的邮箱,将用来找回密码",
		del_yanzma:"请输入验证码",
		del_maerror:"验证码输入错误",
		del_xieyi:"请先阅读用户注册协议",
		
	}
	$('table input').blur(function(){
		//设置用户名
		if($(this).is('#username')){	
			var $parent = $(this).parent().siblings().children('.shuruser');
			if($.trim(this.value) == "" || $.trim(this.value).length < 4){
                    //class='msg onError' 中间的空格是层叠样式的格式
                   $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_username + "</span>");
                  
                }
                else{
                    $parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
                }  
		}
		//设置密码
		if($(this).is('#password')){
			var $parent = $(this).parent().siblings().children('.shuruser');
			if($.trim(this.value) == ""){
                    //class='msg onError' 中间的空格是层叠样式的格式
                   $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_password + "</span>");
                  
                }else if($.trim(this.value).length <6){
                	$parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_fanweima + "</span>");
                	return false;
                }
                else{
                    $parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
                }  
		}
		//判断密码是否一致
		if($(this).is('#passworder')){
			var $parent = $(this).parent().siblings().children('.shuruser');
			if($.trim(this.value) == ""){
                    //class='msg onError' 中间的空格是层叠样式的格式
                   $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_passwordadd + "</span>");
                  
                }else if($.trim(this.value)!=$.trim($('#password').val())){
                	$parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_errorpassword + "</span>");
                	return false;
                }
                else{
                    $parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
                }  
		}
		//邮箱验证
		if($(this).is('#email')){
			var $parent = $(this).parent().siblings().children('.shuruser');
			if($.trim(this.value) == ""){
                    //class='msg onError' 中间的空格是层叠样式的格式
                   $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_emailtwo + "</span>");
                  
                }else if(!/.+@.+\.[a-zA-Z]{2,4}$/.test($.trim(this.value))){
                	$parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_email + "</span>");
                	return false;
                }
                else{
                    $parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
                }  
		}
	//用户协议
	if($(this).is('#Selected')){
		 var $parent = $(this).parent().siblings().children('.shuruser');
		if($(this).is(":checked")){
				 $parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
		}else{
				$parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_xieyi + "</span>");
			}
	}
		
		
	
		//验证码校验
		if($(this).is('#CheckCode')){
			var data=[
				"24931",
				"09045",
				"35913",
				"82863",
				"74690",
				"39107",
				"13401",
				"49173",
				"20830",
				"76501",
				"89749",
				"69849",
				"94018",
				"74539",
				"97498",
				"00369",
				"84232",
				"27851",
				"65267",
				"78093",
				"74305",
				"55212",
				"44653",
				"65779",
				"99738",
			]			
			for(i in data){
				if(i<data.length){
//				console.log(i);
				}
			}
			//h是全局变量，这样才能把点击事件的值拿出了
			i=h;
//			console.log(i);
//			console.log(data[i]);
//			console.log(h);
//			console.log(w);
			//判断用户输入值
			var $parent = $(this).parent().siblings().children('.shuruser');			
			if($.trim(this.value) == ""){
                    //class='msg onError' 中间的空格是层叠样式的格式
                   $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_yanzma + "</span>");
                  
               }else if($.trim(this.value)==data[i]){
                	$parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
                }else{
                    $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_maerror + "</span>");
                }
            //声明变量，用另外一张图片与验证码图片对比    
			var y=$('#randnum').attr('src');
//			console.log(y);
			var g=$('#randnul').attr('src');
//			console.log(g);
			if(y==g){
					   if($.trim(this.value)==24931){
					   	$parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
					   }else{
	                    $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_maerror + "</span>");
	                }
               }
		}
	})
	//验证码图片
		
		var arr=['img/CheckCode.gif','img/CheckCode (1).gif','img/CheckCode (2).gif','img/CheckCode (3).gif','img/CheckCode (4).gif'
				,'img/CheckCode (5).gif','img/CheckCode (6).gif','img/CheckCode (7).gif','img/CheckCode (8).gif'
				,'img/CheckCode (9).gif','img/CheckCode (10).gif','img/CheckCode (11).gif','img/CheckCode (12).gif'
				,'img/CheckCode (13).gif','img/CheckCode (14).gif','img/CheckCode (15).gif','img/CheckCode (16).gif'
				,'img/CheckCode (17).gif','img/CheckCode (18).gif','img/CheckCode (19).gif','img/CheckCode (20).gif'
				,'img/CheckCode (21).gif','img/CheckCode (22).gif','img/CheckCode (23).gif','img/CheckCode (24).gif'
		];
		var q=parseInt(Math.random()*arr.length);	
		$('#randnum').click(function(){
			var q=parseInt(Math.random()*arr.length);			
			h=q;
//			console.log(h);
			$(this).attr('src',arr[q]);	
		})
	//判断用户是否输入完整及注册成功
		$('.madelu').click(function(){
			if($('#username').val()!="" && $('#password').val()!=""&&
			$('#passworder').val()!="" && $('#email').val()!="" &&
			$('#CheckCode').val()!="" && $('#Selected').attr(':checked')){
				console.log('注册成功');
				return false;
			}
			var data=[
				"24931",
				"09045",
				"35913",
				"82863",
				"74690",
				"39107",
				"13401",
				"49173",
				"20830",
				"76501",
				"89749",
				"69849",
				"94018",
				"74539",
				"97498",
				"00369",
				"84232",
				"27851",
				"65267",
				"78093",
				"74305",
				"55212",
				"44653",
				"65779",
				"99738",
			]			
			for(i in data){
				if(i<data.length){
						i=h;
				}
			}
			//h是全局变量，这样才能把点击事件的值拿出了

			var inputs=$('table input');
			for(v in inputs){
				var v=0;
				if(inputs[v].value==""||inputs[v].value.length<4){
					$(inputs[v]).focus();
				}else{
					$(inputs[v+1]).focus();
				}
			    if(inputs[v+1].value.length>5){
					$(inputs[v+2]).focus();
				}
			    if(inputs[v+2].value!=""&&inputs[v+2].value==inputs[v+1].value){
					$(inputs[v+3]).focus();
				}else{
					return false;
				}
			    if(/.+@.+\.[a-zA-Z]{2,4}$/.test(inputs[v+3].value)){
					$(inputs[v+4]).focus();
				}
			    if(inputs[v+4].value==data[h]){
					$(inputs[v+5]).focus();
				}
		    var $parent = $(this).parent().siblings().children('.shuruser');		
		    var y=$('#randnum').attr('src');
			var g=$('#randnul').attr('src');
			if(y==g){
					   if(inputs[v+4].value==24931){
					   	$parent.html("<img class='img_msg'  src="+ defaults.del_successimg+"/>"+"<span class='msg onSuccess' style='color:green'>" + defaults.del_successmsg + "</span>");
					   	$(inputs[v+5]).focus();
					   }else{
	                    $parent.html("<img class='img_msg' src="+ defaults.del_errorimg+"/>"+"<span class='msg onError'>" + defaults.del_maerror + "</span>");
	                }
               }
				return v;
			}
			return false;
		})
		
		
		//判断用户名是否存在
		
		
})
	
