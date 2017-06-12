/**
 * Created by issuser on 2017/5/24.
 */
'use strict';
//输入的值
let value;
//input框
let nameIput = document.getElementById('numInput');
//获取添加元素
let numberWraper = document.getElementById('numberWraper');
//新建数组储存写入数据
let dataArr = [];
//检查是否是数字
function cheack() {
	let testMethod = /^[0-9]*$/;
	//没有值、不为数字、大于100、小于10判断
	if (!value||!(testMethod.test(value))||value>100||value<10){
		alert('只能输入10-100的数字');
		return false
		//控制最多只能60个
	}else if(numberWraper.getElementsByTagName('li').length>60){
		alert('最多只能60个哦！');
		return false
	} else {
		return true
	}
}
//给添加的元素增加方法
function addClickFn(liSum) {
	for(let i=0;i<liSum.length;i++){
		liSum[i].onclick = function () {
			//删除的时候提示
			alert(`${this.style.height.replace('%',"")},已删除！`);
			this.remove();
			//移除后需要再添加一次，因为元素减少了
			addClickFn(liSum);
		}
	}
}
//添加的方法,1左2右
function addNum(statu) {
	let cheackResult = cheack();
	let li = document.createElement('li');
	if (!cheackResult){
		return
	}
	//li.innerHTML = value;
	//设置高度
	li.style.height=`${value}%`;
	if (statu===1){
		//左添加
		numberWraper.insertBefore(li,numberWraper.childNodes[0]);
		dataArr.unshift(+value);
	}else if(statu===2){
		//右添加
		numberWraper.append(li);
		dataArr.push(+value);
	}
	//获取每一个循环出来的元素，添加点击事件
	let liSum = numberWraper.getElementsByTagName('li');
	addClickFn(liSum);
}
//删除方法,1左2右
function delNum(statu) {
	let liSum = numberWraper.getElementsByTagName('li');
	if (liSum.length===0){
		alert('没有可以删除的元素！');
		return
	}
	if(statu===1){
		let firstChild = numberWraper.firstChild;
		alert(`您已成功删除${firstChild.style.height.replace('%',"")}！`);
		firstChild.remove()
	}else if(statu===2){
		let lastChild = numberWraper.lastChild;
		alert(`您已成功删除${lastChild.style.height.replace('%',"")}！`);
		lastChild.remove()
	}
}

function sort() {
	let sum = numberWraper.getElementsByTagName('li');
	console.log(sum);
	//冒泡排序
	for (let i = 0;i<sum.length;i++){
		for (let j = 0 , s = sum.length-i;j<s;j++){
            setTimeout(function () {
            	if(!!sum[j+1]){
            		//取出每一个的高度
            		let firstH = +sum[j].style.height.replace('%',"");
            		let secondH = +sum[j+1].style.height.replace('%',"");
            		//对比高度，开始改变
                    if (firstH>secondH){
                        let height = firstH;
                        sum[j].style.height = `${secondH}%`;
                        sum[j+1].style.height = `${height}%`;
                    }
				}
            },i*1000)
		}
	}
}
/*添加一段注释，用于测试是否能够使用git*/
(function () {
	//给值绑定change事件
	nameIput.addEventListener('change',function () {
		value = nameIput.value
	})
})();