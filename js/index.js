window.onload=function(){
	var bnImg=getClass("jsBane")[0].getElementsByTagName("a");
	// console.log(bnImg);
	var bnBtn=getClass("kogjian1_",getClass("kongjian1")[0]);
	// console.log(bnBtn);
	var num=0;
	var rr=setInterval(move,3000);
	bnImg[0].style.opacity=1; //下标为0的 也就是第一张图的透明度不设置 默认显示第一张
	function move(){ // 函数当作参数
			num++;
			if(num>5){
				num=0;
			}
			for(var i=0;i<bnImg.length;i++){
				// bnImg[i].style.opacity=0;
				animate(bnImg[i],{opacity:0},300);
				bnBtn[i].style.background="";
			}
			// bnImg[num].style.opacity=1;
			animate(bnImg[num],{opacity:1},1000)
			bnBtn[num].style.background="#b61b1f";

	}

	//点击 切换图片
	for(var i=0;i<bnBtn.length;i++){
		bnBtn[i].index=i;
		bnBtn[i].onclick=function(){
			for(var j=0;j<bnBtn.length;j++){
			bnImg[j].style.opacity=0;//将所有的图片透明度变成0
			bnBtn[j].style.background="";
			}
			bnImg[this.index].style.opacity=1;//将当前的图片透明度变成1
			bnBtn[this.index].style.background="#b61b1f";
		num=this.index;
		}

	}
	//点击 切换 结束

	// banner实现鼠标移动暂停 显示隐藏
	var baneBtns=getClass("baneBtn")[0];
	// console.log(baneBtns)
	var baneWheel=getClass("bannerCenter")[0];
	// console.log(baneWheel)
	baneWheel.onmouseover=function(){
		clearInterval(rr);
		baneBtns.style.display="block";
	}
	// 实现鼠标移动暂停部分结束
	//鼠标离开 继续轮播
	baneWheel.onmouseout=function(){
		rr=setInterval(move,2000);
		baneBtns.style.display="none";
	}
	//鼠标离开 继续轮播 结束
	
	//左右控件
	var baneBtnR=getClass("right")[0];
	// console.log(baneBtnR)
	baneBtnR.onclick=function(){
		move();
	}

	var baneBtnL=getClass('left',getClass("baneBtn")[0])[0];
	// for(var i=0;i<bnImg.length;i++){
		
		baneBtnL.onclick=function(){
			// for(var j=0;j<bnImg.length;j++){
			// 	bnImg[j].style.display="none";
			// }
			// bnImg[this.index].style.display="block";
			num--;
			if(num<0){
				num=bnImg.length-1;
			}
			for(var i=0;i<bnImg.length;i++){
				bnImg[i].style.opacity=0;
				bnBtn[i].style.background="";
			}
			bnImg[num].style.opacity=1;
			bnBtn[num].style.background="#b61b1f";
	}
	
	
	
	//左右控件结束
	var fzBtns=getClass("titleRight")[0].getElementsByTagName("a");
	// console.log(fzBtns)
	var fzBxs=getClass("fzBoxs");
	// console.log(fzBxs)
	var fzspan=getClass("titleRight")[0].getElementsByTagName("span");
	// console.log(fzspan)
	for(var i=0;i<fzBtns.length;i++){
		fzBtns[i].index=i;
		fzBtns[i].onmouseover=function(){
			for(var j=0;j<fzBxs.length;j++){
				fzBxs[j].style.display="none";
				fzBtns[j].className="";
			}
			for(var j=0;j<fzspan.length;j++){
				fzspan[j].className="";
			}
			fzBxs[this.index].style.display="block";
			fzBtns[this.index].className="fzJS";
			fzspan[this.index].className="fzSpan";
		}
	}
	
//fz轮播
	// var fzlunbo=getClass("ope4");
	// // console.log(fzlunbo)
	// var fzlbkj=getClass("ope4-kj")[0].getElementsByTagName("span");
	// var fzBtn=getClass("fzBtns")[0];
	// // console.log(fzBtn)
	// var fznum=0;
	// var t1=setInterval(move2,2000);
	// function move2(){
	// 		fznum++;
	// 		if(fznum>3){
	// 			fznum=0;
	// 		}
	// 		for(var i=0;i<fzlunbo.length;i++){
	// 			fzlunbo[i].style.display="none";
	// 			fzlbkj[i].className="";
	// 		}
	// 		fzlunbo[fznum].style.display="block";
	// 		fzlbkj[fznum].className="yuanyuan";
	// }
	// //fz鼠标移动暂停
	// var fzBox=getClass("fzlunbo")[0];
	// // console.log(fzBox);
	// fzBox.onmouseover=function(){ 
	// 	clearInterval(t1);		//清除时间间隔函数
	// 	fzBtn.style.display="block";
	// }
	// fzBox.onmouseout=function(){
	// 	t1=setInterval(move2,2000);//重新上边调用时间函数
	// 	fzBtn.style.display="none";
	// }
	// //点击按钮切换图片
	// for(var i=0;i<fzlbkj.length;i++){
	// 	fzlbkj[i].index=i;//下标保存到index属性
	// 	fzlbkj[i].onclick=function(){
	// 		for(var j=0;j<fzlbkj.length;j++){//通过循环隐藏所有
	// 			fzlunbo[j].style.display="none";
	// 			fzlbkj[j].className="";
	// 		}
	// 		fzlunbo[this.index].style.display="block";//显示当前下标的
	// 		fzlbkj[this.index].className="yuanyuan";
	// 		fznum=this.index;
	// 	}
	// }
	// //右控件
	// var fzBtnr=getClass("right",getClass("fzBtns")[0])[0];
	// // console.log(fzBtnr);
	// fzBtnr.onclick=function(){
	// 	move2();
	// }
	// //左控件
	// var fzbtnl=getClass("left",getClass("fzBtns")[0])[0];
	// // console.log(fzbtnl)
	// fzbtnl.onclick=function(){
	// 		fznum--;
	// 		if(fznum<0){
	// 			fznum=fzlunbo.length-1;
	// 		}
	// 		for(var i=0;i<fzlunbo.length;i++){
	// 			fzlunbo[i].style.display="none";
	// 			fzlbkj[i].className="";
	// 		}
	// 		fzlunbo[fznum].style.display="block";
	// 		fzlbkj[fznum].className="yuanyuan";
	// }
//1L轮播部分
	var fzBox=getClass("fzlunbo")[0];
	// console.log(fzBox);
	var fzBigB=getClass("fzlbBox")[0];
	var imgs=fzBox.getElementsByTagName("a");
	// console.log(imgs)
	var imgw=parseInt(getStyle(imgs[0],"width"));
	var fzBtnss=getClass("ope4-kj")[0].getElementsByTagName("span");
	// console.log(fzBtns)
	// console.log(imgw)  获取每张图片的宽度
	var fznum=0;//声明下标
	var fzt=setInterval(fzMove,2000);
		function fzMove(){
			fznum++;	
			if(fznum>imgs.length-1){	//下标超出变成0
				fznum=0;
			}
			animate(fzBox,{marginLeft:-fznum*imgw},500)	//动画函数 每次改变marginleft值实现动画
			for(var i=0;i<fzBtnss.length;i++){
				fzBtnss[i].className="";
			}
			fzBtnss[fznum].className="yuanyuan"; //循环改变样式
		}
//点击改变图片
	for(var i=0;i<fzBtnss.length;i++){
		fzBtnss[i].index=i;//把当前下标村给index属性
		fzBtnss[i].onclick=function(){
			animate(fzBox,{marginLeft:-this.index*imgw},500);
			for(var i=0;i<fzBtnss.length;i++){
			fzBtnss[i].className="";
		}
		fzBtnss[this.index].className="yuanyuan"; 
		fznum=this.index;
		}
	}
//右箭头
 	var fzjtR=getClass("right",getClass("fzBtns")[0])[0];
 	// console.log(fzjtR);
 	fzjtR.onclick=function(){
 		fzMove();//每点击一次执行 一次 动画函数
 	}
//左箭头
	var fzjtL=getClass("left",getClass("fzBtns")[0])[0];
	fzjtL.onclick=function(){
		fznum--;
		if(fznum<0){
			fznum=imgs.length-1;
		}
		animate(fzBox,{marginLeft:-fznum*imgw},500);
		for(var i=0;i<fzBtnss.length;i++){
			fzBtnss[i].className="";
		}
		fzBtnss[fznum].className="yuanyuan"; 
	}
	//鼠标移上去 停止
	fzBigB.onmouseover=function(){
		clearInterval(fzt);
	}
	//鼠标 移上去 继续执行
	fzBigB.onmouseout=function(){
		fzt=setInterval(fzMove,2000);
	}
	//2L
	var ghBtns=getClass("ghmzRight")[0].getElementsByTagName("a");
	// console.log(ghBtns)
	var ghBxs=getClass("mhContentRight");
	// console.log(ghBxs)
	var ghspan=getClass("ghmzRight")[0].getElementsByTagName("span");
	// console.log(ghspan)
	for(var i=0;i<ghBtns.length;i++){
		ghBtns[i].index=i;
		ghBtns[i].onmouseover=function(){
			for(var j=0;j<ghBtns.length;j++){
				ghBxs[j].style.display="none";
				ghBtns[j].className="";
				ghspan[j].className="";
			}
			ghBxs[this.index].style.display="block";
			ghBtns[this.index].className="ghJS";
			ghspan[this.index].className="ghSpan";
		}
	}





// 	var mhlunbo=getClass("lunbo-l");
// 	// console.log(mhlunbo)
// 	var mhkjs=getClass("mhlbkj")[0].getElementsByTagName("span");
// 	// console.log(mhkjs)
	
// 	var mhnum=0;
// 	var q=setInterval(mhMove,2000);
// 	function mhMove(){
// 			mhnum++;
// 			if(mhnum>3){
// 				mhnum=0;
// 			}
// 			for(var i=0;i<mhlunbo.length;i++){
// 				mhlunbo[i].style.display="none";
// 				mhkjs[i].className="";
				
// 			}

// 			mhlunbo[mhnum].style.display="block";
// 			mhkjs[mhnum].className="smlbxs";
			
// 	}


// 	//个护美妆 点击换图
// 	for(var i=0;i<mhkjs.length;i++){ //遍历控件
// 		mhkjs[i].index=i;
// 		mhkjs[i].onclick=function(){
// 			for(var j=0;j<mhlunbo.length;j++){
// 				mhlunbo[j].style.display="none";
// 				mhkjs[j].className="";
// 			}
// 			mhlunbo[this.index].style.display="block";
// 			mhkjs[this.index].className="smlbxs";
// 			mhnum=this.index;
// 		}

// 	}
// 	//鼠标移入 停止轮播
// 	var mhBox=getClass("mhlunbo")[0];//获取2L轮播图的外盒子
// 	// console.log(mhBox)
// 	mhBox.onmouseover=function(){
// 		clearInterval(q);		//清除进程号是q的时间函数
// 		rBtn.style.display="block";
// 		lBtn.style.display="block";
// 	}
// 	mhBox.onmouseout=function(){
// 		q=setInterval(mhMove,2000);	//重新调用setInterval函数   只能有一个setInterval函数在执行 所以声明称全局变量
// 		rBtn.style.display="none";
// 		lBtn.style.display="none";
// 	}
// 	//右箭头
// 	var rBtn=getClass("mhBtr",getClass('mhlunbo')[0])[0];
// 	rBtn.onclick=function(){
// 		mhMove();//执行一次 函数   与轮播图思想一样
// 	}
// 	var lBtn=getClass("mhBtl",getClass('mhlunbo')[0])[0];
// 	lBtn.onclick=function(){
// 			mhnum--;
// 			if(mhnum<0){
// 				mhnum=mhlunbo.length-1;
// 			}
// 			for(var i=0;i<mhlunbo.length;i++){
// 				mhlunbo[i].style.display="none";
// 				mhkjs[i].className="";
				
// 			}

// 			mhlunbo[mhnum].style.display="block";
// 			mhkjs[mhnum].className="smlbxs";
// 	}

		//2L
		var mhBox=getClass("mhlbBox")[0];
		var mhlbBox=getClass("mhlbBox0");
		// console.log(mhBox)
		var mhimgW=parseInt(getStyle(mhlbBox[0],"width"));
		// console.log(mhimgW)
		var mhBtns=getClass("mhlbkj")[0].getElementsByTagName("span");
		// console.log(mhBtns)
		var mhnum=0; 
	var mht=setInterval(mhMove,2000);
		function mhMove(){
			mhnum++;
			if(mhnum>mhlbBox.length-1){
				mhnum=0;
			}
			animate(mhBox,{marginLeft:-mhnum*mhimgW},500);//动画函数
			for(var j=0;j<mhlbBox.length;j++){
				mhBtns[j].className="";
			}
			mhBtns[mhnum].className="smlbxs";
		}
	//点击改变图片
	for(var i=0;i<mhlbBox.length;i++){
		mhBtns[i].index=i;//把当前下标村给index属性
		mhBtns[i].onclick=function(){
			animate(mhBox,{marginLeft:-this.index*mhimgW},500);//动画函数
			for(var i=0;i<mhlbBox.length;i++){//遍历
			mhBtns[i].className="";
		}
		mhBtns[this.index].className="smlbxs"; 
		mhnum=this.index;
		}
	}
	//右箭头
	var mhbtnr=getClass("mhBtr")[0];//获取右箭头
	// console.log(mhbtnl)
	mhbtnr.onclick=function(){
		mhMove();	//直接调用一次轮播动画函数
	}
	// 左箭头
	var mhbtnl=getClass("mhBtl")[0];//获取左箭头
	mhbtnl.onclick=function(){
			mhnum--;
			if(mhnum<0){
				mhnum=mhlbBox.length-1;//下标小于0后变成最大下标
			}
			animate(mhBox,{marginLeft:-mhnum*mhimgW},500);//点击一次执行一次动画函数
			for(var j=0;j<mhlbBox.length;j++){
				mhBtns[j].className="";
			}
			mhBtns[mhnum].className="smlbxs";		
	}
	//鼠标移上去 停止执行动画函数
	var mhBigB=getClass("mhlunbo")[0];//获取最大的盒子
	// console.log(mhBigB)
	mhBigB.onmouseover=function(){
		clearInterval(mht);//清除时间间隔函数
	}
	mhBigB.onmouseout=function(){
		mht=setInterval(mhMove,2000);//重新调用时间间隔函数 智能存在一个
	}



	//购物车部分
	// var slidT=getClass("slideTop")[0];
	// var slidBtm=getClass("slideBtm")[0];
	// var slidW=parseInt(getStyle(slidT,"width"));
	// var slidW2=parseInt(getStyle(slidBtm,"width"));
	// var slideB=getClass("slideBox",getClass("slide")[0]);//获取每个slide盒子
	// for(var i=0;i<slideB.length;i++){	//遍历每个slide盒子，找出每个盒子的tName和bName属性
	// 	var tName=getClass("slideTop",slideB[i])[0];
		
	// 	var bName=getClass("slideBtm",slideB[i])[0];
	// 	var slideBox=getClass("slideBox",getClass("slide")[0]);
	// 	slideMove(tName,bName,slideBox);//调用封装函数
	// }
	// function slideMove(tname,bname,bigB){//将这两个事件封装，设置形参
	// 	bigB.onmouseover=function(){
	// 	animate(bname,{marginLeft:-70},300,Tween.Quad.easeIn);
	// 	tname.style.background="#b61d1d";
	// 	}
	// 	bigB.onmouseout=function(){
	// 	animate(bname,{marginLeft:0},300,Tween.Quad.easeIn);
	// 	tname.style.background="#7a6e6e";
	// 	}
	// }
	var slide=$(".slide")[0];
	var slideBox=$(".slideBox",slide);
	
	for(var i=0;i<slideBox.length;i++){
		 var sldBtm=$(".slideBtm",slideBox[i]);
		 for(var j=0;j<sldBtm.length;j++){
		 	slideM(slideBox[i],sldBtm[j])
		 }
	}
	function slideM(bigBox,boxBtm){
		bigBox.onmouseover=function(){
		animate(boxBtm,{marginLeft:-70},300,Tween.Quad.easeIn);
		}
		bigBox.onmouseout=function(){
		animate(boxBtm,{marginLeft:0},300,Tween.Quad.easeIn);
	}
	}
	var backTop=$(".backTop")[0];
	var backs=document.body;
	backTop.onclick=function(){
		animate(backs,{scrollTop:0})
	}

	//banner下边 的轮播
	var banebtm=getClass("jrtjLB")[0];
	var banebtmBox=getClass("jrtjLB-B")[0];
	var banebtmW=parseInt(getStyle(banebtm,"width"));
	var banCount=getClass("jrtjLB00");
	// console.log(banebtmW);
	var jrnum=0;
	var pp=setInterval(banBtmMove,2000);
	function banBtmMove(){
		jrnum++;
		if(jrnum>banCount.length-1){
			jrnum=0;
		}
		animate(banebtmBox,{marginLeft:-jrnum*banebtmW},500);

	}
	var banBtmR=getClass("right",getClass("jrtjLB")[0])[0];//取得右箭头
	// console.log(banBtmR);
	banBtmR.onclick=function(){
		banBtmMove();	
	}
	var banBtmL=getClass("left",getClass("jrtjLB")[0])[0];//取得左箭头
	banBtmL.onclick=function(){
		jrnum--;
		if(jrnum<0){
			jrnum=banCount.length-1;
		}
		animate(banebtmBox,{marginLeft:-jrnum*banebtmW},500);
	}
	//鼠标移动上去停止轮播
	banebtm.onmouseover=function(){
		clearInterval(pp);	//清除时间间隔函数
	}
	banebtm.onmouseout=function(){
		pp=setInterval(banBtmMove,2000);	//调用时间间隔函数 Pp声明全局变量 智能有一个时间函数存在
	}
	//onmouseover 小图片动
	var tsBox=getClass("jdtsBox1"); //获取外面最大的盒子
	// console.log(tsBox)
	// var imgs=tsBox.getElementsByTagName("img")[0];//获取图片
	// console.log(imgs)
	for(var i=0;i<tsBox.length;i++){	//循环遍历调用
		img=tsBox[i].getElementsByTagName("img")[0];
		movePic(tsBox[i],img)
	}
	function movePic(imgBox,img){	//封装函数
		imgBox.onmouseover=function(){
		animate(img,{marginLeft:-6},500)//鼠标移入向左移动
		}
		imgBox.onmouseout=function(){
		animate(img,{marginLeft:0},500)
		}
	}
	var tsBox2=getClass("jdtsBox2")[0];
	var img2=tsBox2.getElementsByTagName("img")[0];
	movePic(tsBox2,img2);	//



	//3L 轮播
	var sjImgW=parseInt(getStyle(getClass("phoneWheel")[0],"width"));//获取一张图片宽度
	// console.log(sjImgW);
	var sjImgB=getClass("phoneImgBox")[0];
	var sjBoxss=sjImgB.getElementsByTagName("a");
	// console.log(sjBoxss)
	var	sjyq=getClass("phoneBtn")[0].getElementsByTagName("span");
	// console.log(sjBtns)
	var sjnum=0;
	var ss=setInterval(sjMove,2000);
		function sjMove(){
			sjnum++;

			if(sjnum>sjBoxss.length-1){
				sjnum=0;
			}
			
			animate(sjImgB,{marginLeft:-sjnum*sjImgW},500);
			for(var j=0;j<sjyq.length;j++){
				sjyq[j].className="";
			}
			sjyq[sjnum].className="phBtnSy"; //给当前下标span添加类名
		}
	//点击换图
	for(var i=0;i<sjyq.length;i++){
		sjyq[i].index=i;
		sjyq[i].onclick=function(){
			animate(sjImgB,{marginLeft:-this.index*sjImgW},500);
			for(var j=0;j<sjyq.length;j++){
				sjyq[j].className="";
			}
			sjyq[this.index].className="phBtnSy";
		}
		zjnum=this.index;
	}
	//移入停止轮播
	var sjbigBox=getClass("phoneWheel")[0];
	sjbigBox.onmouseover=function(){
		clearInterval(ss);
	}
	//移出继续轮播
	sjbigBox.onmouseout=function(){
		ss=setInterval(sjMove,2000);
	}
	//右箭头
	var rightBtn=getClass("phonejtR")[0];
	rightBtn.onclick=function(){
		sjMove();
	}
	//左箭头
	var leftBtn=getClass("phonejtL")[0];
	leftBtn.onclick=function(){
		sjnum--;

			if(sjnum<0){
				sjnum=sjBoxss.length-1;
			}
			
			animate(sjImgB,{marginLeft:-sjnum*sjImgW},500);
			for(var j=0;j<sjyq.length;j++){
				sjyq[j].className="";
			}
			sjyq[sjnum].className="phBtnSy"; 
	}
	//3L选项卡效果
	var sjBtns=getClass("sjtxTitleT")[0].getElementsByTagName("a");//获取所有的选项卡
	// console.log(sjBtns)
	var sjCtBox=getClass("sjtxContRight");
	// console.log(sjCtBox);
	var sjSpan=getClass("sjtxTitleT")[0].getElementsByTagName("span");
	sjSpan[0].style.background="#c81623";
	for(var i=0;i<sjBtns.length;i++){//遍历选项卡
		sjBtns[i].index=i;
		sjBtns[i].onmouseover=function(){
			for(var i=0;i<sjCtBox.length;i++){//遍历box
				sjCtBox[i].style.display="none";
				sjBtns[i].className="";
				sjSpan[i].style.background="";
			}
			sjCtBox[this.index].style.display="block";
			sjBtns[this.index].className="sjJS";
			sjSpan[this.index].style.background="#c81623";
		}
	}











//天天特价部分
var tttjSmallBox=getClass("tttjSmallBox");
	for(var i=0;i<tttjSmallBox.length;i++){	//循环遍历调用
			imgtj=tttjSmallBox[i].getElementsByTagName("img")[0];
			movePic(tttjSmallBox[i],imgtj);//直接调用封装函数
		}

//天天特价轮播
var tjsmB=$(".tttjBox3");
// console.log(tjsmB);
var tjsmBw=parseInt(getStyle(tjsmB[0],"width"));
console.log(tjsmBw)
var tjWheel=$(".rmBox")[0];
// console.log(tjWheel)
var tjnum=0;
var yy=setInterval(Tmove,2000);
	function Tmove(){
		tjnum++;
		if(tjnum>tjsmB.length-1){
			tjnum=0;
		}
		animate(tjWheel,{marginTop:-tjsmBw*tjnum},300);
	}
tjWheel.onmouseover=function(){
	clearInterval(yy)
}
tjWheel.onmouseout=function(){
	yy=setInterval(Tmove,2000);
}
 //4L家用电器
 var jyBox=getClass("jydqBody");//获取4L选项卡大框
 // console.log(jyBox)
 var jyBtns=getClass("jydqHdRt")[0].getElementsByTagName("a");//获取选项卡按钮
 	// console.log(jyBtns)
 var jySpans=getClass("jydqHdRt")[0].getElementsByTagName("span");//获取span 修改颜色
 	for(var i=0;i<jyBtns.length;i++){
 		jyBtns[i].index=i;
 		jyBtns[i].onmouseover=function(){//移入事件
 			for(var j=0;j<jyBox.length;j++){//遍历 先将所有的隐藏
 				jyBox[j].style.display="none";
 				jyBtns[j].className="";
 				jySpans[j].className="";
 			}
 			jyBox[this.index].style.display="block";//将当前下标的显示出来
 			jyBtns[this.index].className="jyBtnSty";
 			jySpans[this.index].className="jyspSty";
 		}
 	}

 	//4L家用电器
 	var jyBoxW=parseInt(getStyle(getClass("jydqBox1")[0],"width"));//获取一张图片的宽度
 	// console.log(jyBoxW);
 	var jyB=getClass("jydq-lb")[0];
 	var jyBcount=jyB.getElementsByTagName("a");
 	// console.log(jyB);
 	var jydot=getClass("bigJB")[0].getElementsByTagName("div");
 	var jynum=0;
 	var gg=setInterval(jyMove,2000);
	 	function jyMove(){
	 		jynum++;
	 		if(jynum>jyBcount.length-1){
	 			jynum=0;
	 		}
	 		animate(jyB,{marginLeft:-jynum*jyBoxW},500)
	 		for(var i=0;i<jydot.length;i++){
	 			jydot[i].className="";
	 		}
	 		jydot[jynum].className="smallBox";
	 	}
 	//点击换图
 	for(var i=0;i<jydot.length;i++){
 		jydot[i].index=i;
 		jydot[i].onclick=function(){
 			animate(jyB,{marginLeft:-this.index*jyBoxW},500);
 			for(var i=0;i<jydot.length;i++){
 			jydot[i].className="";
	 		}
	 		jydot[this.index].className="smallBox";
	 		jynum=this.index;
	 		}
	 		
 	}
 	//鼠标移上去 停止轮播
 	var bigjyBox=getClass("jydqBox1")[0];
	bigjyBox.onmouseover=function(){
		clearInterval(gg);
	}
	bigjyBox.onmouseout=function(){
		gg=setInterval(jyMove,2000)
	}
	//右箭头
	var jyRight=getClass("jydq-jtr")[0];
	jyRight.onclick=function(){
		jyMove();
	}
	//左箭头
	var jyLeft=getClass("jydq-jtl")[0];
	jyLeft.onclick=function(){
			jynum--;
	 		if(jynum<0){
	 			jynum=jyBcount.length-1;
	 		}
	 		animate(jyB,{marginLeft:-jynum*jyBoxW},500)
	 		for(var i=0;i<jydot.length;i++){
	 			jydot[i].className="";
	 		}
	 		jydot[jynum].className="smallBox";
	}

	//五楼选项卡
	var dnbts=$(".tab",$(".jydqSelect")[0])[0].getElementsByTagName("a");
	// console.log(dnbts);
	var dnBoxs=$(".dnsm-body");
	// console.log(dnBoxs)
	var dnspans=$(".tab",$(".jydqSelect")[0])[0].getElementsByTagName("span");
	
	function selectCard(btns,boxs,spans){
	for(var i=0;i<btns.length;i++){
		btns[i].index=i;
		spans[0].style.background="red";
		btns[i].onmouseover=function(){
			for(var i=0;i<boxs.length;i++){
				boxs[i].style.display="none";
				btns[i].className="";
				spans[i].style.background="";
			}
			boxs[this.index].style.display="block";
			btns[this.index].className="hot";
			spans[this.index].style.background="red";
		}
	}
}
	selectCard(dnbts,dnBoxs,dnspans);
	var ydbtns=$(".tab",$(".yundjj")[0])[0].getElementsByTagName("a");
	var ydBoxs=$(".ydjjBox-o",$(".ydongjj")[0]);
	var ydspans=$(".tab",$(".yundjj")[0])[0].getElementsByTagName("span");
	// console.log(ydBoxs);
	// console.log(ydbtns);
	selectCard(ydbtns,ydBoxs,ydspans);

	var jjbtns=$(".tab",$(".jujsh")[0])[0].getElementsByTagName("a");
	var jjBoxs=$(".ydjjBox-o",$(".jujhuo")[0]);
	var jjspans=$(".tab",$(".jujsh")[0])[0].getElementsByTagName("span");
	// console.log(ydBoxs);
	// console.log(ydbtns);
	selectCard(jjbtns,jjBoxs,jjspans);

	var etbtns=$(".tab",$(".balou")[0])[0].getElementsByTagName("a");
	var etBoxs=$(".ydjjBox-o",$(".balouB")[0]);
	var etspans=$(".tab",$(".balou")[0])[0].getElementsByTagName("span");
	// console.log(ydBoxs);
	// console.log(ydbtns);
	selectCard(etbtns,etBoxs,etspans);

	var nebtns=$(".tab",$(".nine")[0])[0].getElementsByTagName("a");
	var neBoxs=$(".ydjjBox-o",$(".nineB")[0]);
	var nespans=$(".tab",$(".nine")[0])[0].getElementsByTagName("span");
	// console.log(ydBoxs);
	// console.log(ydbtns);
	selectCard(nebtns,neBoxs,nespans);

	var tenbtns=$(".tab",$(".ten")[0])[0].getElementsByTagName("a");
	var tenBoxs=$(".mhContentRight",$(".tenB")[0]);
	var tenspans=$(".tab",$(".ten")[0])[0].getElementsByTagName("span");
	// console.log(ydBoxs);
	// console.log(ydbtns);
	selectCard(tenbtns,tenBoxs,tenspans);








	//轮播
	var dnBoxW=parseInt(getStyle($(".dnsm-lunbo")[0],"width"));
	var dnBox=$(".dnsm-lb")[0];
	var dahezi=$(".dnsm-lunbo")[0];
	var dnBoxs=$("a",dnBox);
	var dnDots=$(".dnsm-btns",$(".dnsm-lunbo")[0])[0].getElementsByTagName("div");
	// console.log(dnBoxs);
	// console.log(dnBoxW)
	var rightD=$(".right",$(".dnsm-lunbo")[0])[0];//右箭头
	var leftD=$(".left",$(".dnsm-lunbo")[0])[0];//左按钮
	wheelB(dnBox,dnBoxW,dnBoxs,dnDots,rightD,leftD,dahezi);
	function wheelB(box,width,boxs,dots,rtbtn,lfbtn,bigB){
		var num=0;
 		var t=setInterval(go,2000);
 		function go(){
	 		num++;
	 		if(num>boxs.length-1){
	 			num=0;
	 		}
	 		animate(box,{marginLeft:-num*width},500)
	 		for(var i=0;i<boxs.length;i++){
	 			dots[i].className="";
	 		}
	 		dots[num].className="smallBox";
	 	}
	 	//右按钮
			rtbtn.onclick=function(){
			go();
			}
		//左按钮
			lfbtn.onclick=function(){
			num--;
	 		if(num<0){
	 			num=boxs.length-1;
	 		}
	 		animate(box,{marginLeft:-num*width},500)
	 		for(var i=0;i<boxs.length;i++){
	 			dots[i].className="";
	 		}
	 		dots[num].className="smallBox";
			} 
			//鼠标移上去 停止 离开  继续
			bigB.onmouseover=function(){
				clearInterval(t);
			}
			bigB.onmouseout=function(){
				t=setInterval(go,2000);
			}	
	}
	//点击换图
	changeImg(dnDots,dnBox,dnBoxW)

	function changeImg(dots,box,width){
		for(var i=0;i<dots.length;i++){
 		dots[i].index=i;
 		dots[i].onclick=function(){
 			animate(box,{marginLeft:-this.index*width},500);
 			for(var i=0;i<dots.length;i++){
 			dots[i].className="";
	 		}
	 		dots[this.index].className="smallBox";
	 		num=this.index;
	 		}
	 		
 		}
	}



//六楼开始
	var oneBox=$(".lunboo",$(".ydongjj")[0])[0];
	// console.log(oneBox);
	var whelBox=$(".ydoneB",$(".ydongjj")[0])[0];
	// console.log(whelBox);
	var oneBoxw=parseInt(getStyle(oneBox,"width"));
	// console.log(oneBoxw);
	var onedots=$(".lbtnss",$(".ydongjj")[0])[0].getElementsByTagName("div");
	var oneribtn=$(".right",$(".lunboo",$(".ydongjj")[0])[0])[0];
	var onelfbtn=$(".left",$(".lunboo",$(".ydongjj")[0])[0])[0];
	wheelB(whelBox,oneBoxw,onedots,onedots,oneribtn,onelfbtn,oneBox);
	changeImg(onedots,whelBox,oneBoxw);



//7楼开始
	var twoBox=$(".lunboo",$(".jujhuo")[0])[0];
	// console.log(oneBox);
	var whelBox2=$(".ydoneB",$(".jujhuo")[0])[0];
	// console.log(whelBox);
	var twoBoxw=parseInt(getStyle(oneBox,"width"));
	// console.log(oneBoxw);
	var twodots=$(".lbtnss",$(".jujhuo")[0])[0].getElementsByTagName("div");
	var tworibtn=$(".right",$(".lunboo",$(".jujhuo")[0])[0])[0];
	var twolfbtn=$(".left",$(".lunboo",$(".jujhuo")[0])[0])[0];
	wheelB(whelBox2,twoBoxw,twodots,twodots,tworibtn,twolfbtn,twoBox);
	changeImg(twodots,whelBox2,twoBoxw);

//8楼开始
	var baBox=$(".lunboo",$(".balouB")[0])[0];
	// console.log(oneBox);
	var whelBox8=$(".ydoneB",$(".balouB")[0])[0];
	// console.log(whelBox);
	var baBoxw=parseInt(getStyle(oneBox,"width"));
	// console.log(oneBoxw);
	var badots=$(".lbtnss",$(".balouB")[0])[0].getElementsByTagName("div");
	var baribtn=$(".right",$(".lunboo",$(".balouB")[0])[0])[0];
	var balfbtn=$(".left",$(".lunboo",$(".balouB")[0])[0])[0];
	wheelB(whelBox8,baBoxw,badots,badots,baribtn,balfbtn,baBox);
	changeImg(badots,whelBox8,baBoxw);

//9楼开始
	var jiuBox=$(".lunboo",$(".nineB")[0])[0];
	// console.log(oneBox);
	var whelBox9=$(".ydoneB",$(".nineB")[0])[0];
	// console.log(whelBox);
	var jiuBoxw=parseInt(getStyle(oneBox,"width"));
	// console.log(oneBoxw);
	var jiudots=$(".lbtnss",$(".nineB")[0])[0].getElementsByTagName("div");
	var jiuribtn=$(".right",$(".lunboo",$(".nineB")[0])[0])[0];
	var jiulfbtn=$(".left",$(".lunboo",$(".nineB")[0])[0])[0];
	wheelB(whelBox9,jiuBoxw,jiudots,jiudots,jiuribtn,jiulfbtn,jiuBox);
	changeImg(jiudots,whelBox9,jiuBoxw);

//10楼
	var tenBox=$(".lbb",$(".tenB")[0])[0];
	var tenbox0=$(".lbbB",tenBox)[0];
	var tenWidth=parseInt(getStyle(tenBox,"width"));
	// console.log(tenWidth)
	var tenBtns=$(".bigJB",tenBox)[0].getElementsByTagName("div");
	// console.log(tenBtns)
	var tenright=$(".right",tenBox)[0];
	var tenleft=$(".left",tenBox)[0];
	wheelB(tenbox0,tenWidth,tenBtns,tenBtns,tenright,tenleft,tenBox);
	changeImg(tenBtns,tenbox0,tenWidth);


//11楼
	var eleBox=$(".shlunbo-b",$(".shfw")[0])[0];
	console.log(eleBox)
	var eleBox0=$(".shlb",eleBox)[0];
	console.log(eleBox0)
	var elewid=parseInt(getStyle(eleBox,"width"));
	console.log(elewid)
	var elebtns=$(".shfwbtns",eleBox)[0].getElementsByTagName("div");
	// console.log(elewid);
	var elerit=$(".right",eleBox)[0];
	var elelft=$(".left",eleBox)[0];
	// console.log(elerit)
	wheelB(eleBox0,elewid,elebtns,elebtns,elerit,elelft,eleBox);
	changeImg(elebtns,eleBox0,elewid);



	var bigBox11=$(".shlunbo-b")[1];
	// console.log(bigBox11)
	var lbBox11=$(".shlb")[1];
	var btns11=$(".shfwbtns",$(".shfw")[0])[1].getElementsByTagName("div");
	var rig11=$(".right",$(".shfw")[0])[1];
	var lft11=$(".left",$(".shfw")[0])[1];
	wheelB(lbBox11,elewid,btns11,btns11,rig11,lft11,bigBox11);
	changeImg(btns11,lbBox11,elewid);





	//左侧选项卡
	var rooms=$(".room");
	var ovBtns=$("li",$(".gdxl")[0]);
	// console.log(ovBtns)
	var boxArr=[];
	var nums=$(".num",$(".gdxl")[0]);
	console.log(nums)
	var Fonts=$(".fonts",$(".gdxl")[0]);
	for(var i=0;i<rooms.length;i++){
		boxArr.push(rooms[i].offsetTop);    
	}
	for(var i=0;i<ovBtns.length;i++){
		ovBtns[i].index=i;
		ovBtns[i].onclick=function(){
			animate(document.body,{scrollTop:boxArr[this.index]})
			// animate(document.documentElement,{scrollTop:boxArr[this.index]})
		// 	for(var i=0;i<ovBtns.length;i++){
		// 		nums[i].style.display="block";
		// 		Fonts[i].style.display="none";
		// 	}
		// 	nums[this.index].style.display="none";
		// 	Fonts[this.index].style.display="block";
		}
		// ovBtns[i].onmouseover=function(){
		// 	for(var j=0;j<ovBtns.length;j++){
		// 		nums[j].style.display="block";
		// 		Fonts[j].style.display="none";
		// 	}
		// 	nums[this.index].style.display="none";
		// 	Fonts[this.index].style.display="block";
		// }
	}
window.onscroll=function(){	
	var sctop=document.body.scrollTop;
	for(var i=0;i<boxArr.length;i++){
		if(sctop>=boxArr[i]){
			for(var j=0;j<ovBtns.length;j++){
				nums[j].style.display="block";
				Fonts[j].style.display="none";
			}
			nums[i].style.display="none";
			Fonts[i].style.display="block";
		}
	}
	var sideNav=getClass('gdxl')[0];
	if(document.body.scrollTop>1474&&document.body.scrollTop<8465){
		sideNav.style.display="block";
	}else{
		sideNav.style.display="none";
	}
}
}	




