var i =1;
var html='';

window.onload=function() {
	//获取box
	choosePic()
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	var img5 = document.getElementById("img5");

	//开启img
	drag(img1);
	drag(img2);
	drag(img3);
	drag(img4);
	drag(img5);
}

function choosePic() {
	    var myPix1 = new Array("./zhong/1.jpg","./zhong/6.jpg","./zhi/11.jpg","./nian/1.jpg","./zhi/6.jpg","./fu/2.jpg",
	    	"./gao/1.jpg","./guang/1.jpg","./jia/1.jpg","./nei/1.jpg","./nei/6.jpg","./nian/1.jpg","./zhi/1.jpg","./tian/1.jpg",
	    	"./zhi/6.jpg","./zhi/11.jpg","./zhi/16.jpg","./zhi/6.jpg","./bu/1.jpg","./bu/6.jpg","./da/1.jpg","./da/6.jpg",
	    	"./er/1.jpg","./er/6.jpg","./fu/1.jpg","./gao/1.jpg","./guang/1.jpg","./qing/1.jpg","./ren/1.jpg","./ren/6.jpg",
	    	"./san/1.jpg","./shi/1.jpg","./wei/1.jpg","./wei/6.jpg","./you/1.jpg","./you/6.jpg","./zhou/1.jpg","./zhou/6.jpg",
	    	"./other/91.jpg","./other/92.jpg","./other/93.jpg","./other/94.jpg","./other/95.jpg","./other/96.jpg","./other/97.jpg",
	    	"./other/98.jpg","./other/99.jpg","./other/100.jpg");

	    var myPix2 = new Array("./zhong/3.jpg","./zhi/7.jpg","./zhi/12.jpg","./fu/2.jpg","./gao/2.jpg","./guang/2.jpg",
	    	"./jia/2.jpg","./nei/2.jpg","./nei/7.jpg","./nian/2.jpg","./zhi/1.jpg","./zhi/6.jpg","./zhi/11.jpg","./zhi/6.jpg",
	    	"./bu/2.jpg","./bu/7.jpg","./da/2.jpg","./da/7.jpg","./er/2.jpg","./er/7.jpg","./fu/2.jpg","./gao/2.jpg",
	    	"./guang/2.jpg","./ren/2.jpg","./san/2.jpg","./shi/2.jpg","./wei/2.jpg","./wei/7.jpg","./you/1.jpg","./you/6.jpg",
	    	"./zhou/2.jpg","./zhou/7.jpg","./other/81.jpg","./other/82.jpg","./other/83.jpg","./other/84.jpg","./other/85.jpg",
	    	"./other/86.jpg","./other/87.jpg","./other/88.jpg","./other/89.jpg","./other/90.jpg");

	    var myPix3 = new Array("./guo/2.jpg","./zhong/4.jpg","./san/3.jpg","./fu/3.jpg","./gao/3.jpg","./guang/3.jpg","./jia/3.jpg",
	    	"./nei/3.jpg","./nian/3.jpg","./zhi/1.jpg","./bu/3.jpg","./bu/8.jpg","./da/3.jpg","./da/8.jpg","./er/3.jpg","./er/8.jpg",
	    	"./fu/3.jpg","./gao/3.jpg","./guang/3.jpg","./ren/3.jpg","./wei/3.jpg","./you/3.jpg","./you/8.jpg","./other/71.jpg",
	    	"./other/72.jpg","./other/73.jpg","./other/74.jpg","./other/75.jpg","./other/76.jpg","./other/77.jpg","./other/78.jpg",
	    	"./other/79.jpg","./other/80.jpg","./zhou/3.jpg","./zhou/8.jpg");

	    var myPix4 = new Array("./qing/2.jpg","./nian/3.jpg","./zhi/14.jpg","./san/4.jpg","./gao/4.jpg","./jia/4.jpg","./nei/4.jpg",
	    	"./nian/4.jpg","./bu/4.jpg","./da/4.jpg","./da/9.jpg","./er/4.jpg","./gao/4.jpg","./ren/4.jpg","./wei/4.jpg","./you/4.jpg",
	    	"./you/9.jpg","./zhou/4.jpg","./zhou/9.jpg","./other/41.jpg","./other/42.jpg","./other/43.jpg","./other/44.jpg","./other/45.jpg",
	    	"./other/46.jpg","./other/47.jpg","./other/49.jpg","./other/50.jpg","./other/51.jpg","./other/52.jpg",
	    	"./other/53.jpg","./other/54.jpg","./other/55.jpg","./other/56.jpg","./other/57.jpg","./other/58.jpg","./other/59.jpg","./other/60.jpg",
	    	"./other/61.jpg","./other/62.jpg","./other/63.jpg","./other/64.jpg","./other/65.jpg","./other/66.jpg","./other/67.jpg","./other/68.jpg",
	    	"./other/69.jpg","./other/70.jpg");

	    var myPix5 = new Array("./qiang/1.jpg","./zhi/10.jpg","./zhi/20.jpg","./guo/1.jpg","./gao/5.jpg","./nei/5.jpg","./nian/5.jpg","./bu/5.jpg",
	    	"./da/5.jpg","./er/5.jpg","./gao/5.jpg","./ren/5.jpg","./wei/5.jpg","./you/5.jpg","./you/9.jpg","./zhou/5.jpg","./other/1.jpg","./other/2.jpg",
	    	"./other/3.jpg","./other/4.jpg","./other/5.jpg","./other/6.jpg","./other/7.jpg","./other/8.jpg","./other/9.jpg","./other/10.jpg","./other/11.jpg","./other/2.jpg",
	    	"./other/13.jpg","./other/14.jpg","./other/15.jpg","./other/16.jpg","./other/17.jpg","./other/18.jpg","./other/19.jpg","./other/20.jpg","./other/21.jpg",
	    	"./other/22.jpg","./other/23.jpg","./other/24.jpg","./other/25.jpg","./other/26.jpg","./other/27.jpg","./other/28.jpg","./other/29.jpg","./other/30.jpg",
	    	"./other/31.jpg","./other/32.jpg","./other/33.jpg","./other/34.jpg","./other/35.jpg","./other/36.jpg","./other/37.jpg","./other/38.jpg","./other/39.jpg",
	    	"./other/40.jpg");
	    var randomNum1 = Math.floor((Math.random() * myPix1.length));
	    var randomNum2 = Math.floor((Math.random() * myPix2.length));
	    var randomNum3 = Math.floor((Math.random() * myPix3.length));
	    var randomNum4 = Math.floor((Math.random() * myPix4.length));
	    var randomNum5 = Math.floor((Math.random() * myPix5.length));
	    document.getElementById("imgName1").src = myPix1[randomNum1];
	    document.getElementById("imgName2").src = myPix2[randomNum2];
	    document.getElementById("imgName3").src = myPix3[randomNum3];
	    document.getElementById("imgName4").src = myPix4[randomNum4];
	    document.getElementById("imgName5").src = myPix5[randomNum5];
	}	

function empty() {
	document.getElementById('input').innerHTML="";
	html = '';
	i=1;
}

function refresh() {
	choosePic();
	}

function drag(obj) {
	var init=obj.getAttribute("style");
	obj.onmousedown=function(event) {    //鼠标被按下
		event = event || window.event;

		//div的水平偏移量  鼠标.clentX-元素.offsetLeft
		//div的垂直偏移量  鼠标.clentY-元素.offsetTop
		var ol=event.clientX-obj.offsetLeft;
		var ot=event.clientY-obj.offsetTop;
			
		//绑定鼠标移动事件z
		document.onmousemove=function(event) {
			event = event || window.event;
			var left=event.clientX-ol;
			var top=event.clientY-ot;
			obj.style.left=left+"px";
			obj.style.top=top+"px";

		}
		
		//为document绑定一个鼠标松开事件
		document.onmouseup=function() {
			//当鼠标松开时，被拖拽元素固定在当前位置
			//取消document.onmousemove事件
			document.onmousemove=null;
			document.onmouseup=null;
			objStyle = obj.getAttribute("style");
			var img = obj.innerHTML;

			console.log(objStyle);
			html += "<div id=copy" + i + " style='width: 150px; height: 150px; position: absolute; background: url(word_bg.png); "+ objStyle + "'>" + obj.innerHTML +"</div>";
			i++;
			document.getElementById('input').innerHTML=html;

			obj.style=init;
			}
		}
	}
