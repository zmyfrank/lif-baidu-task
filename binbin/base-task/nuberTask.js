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
//检查是否是数字
function cheack() {
	let testMethod = /\d+/;
	if (!value||!(testMethod.test(value))){
		alert('请输入1位以上的数字');
		return false
	}else {
		return true
	}
}
//给添加的元素增加方法
function addClickFn(liSum) {
	for(let i=0;i<liSum.length;i++){
		liSum[i].onclick = function () {
			alert(`${this.innerHTML},已删除！`);
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
	li.innerHTML = value;
	if (statu===1){
		//左添加
		numberWraper.insertBefore(li,numberWraper.childNodes[0])
	}else if(statu===2){
		//右添加
		numberWraper.append(li)
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
		alert(`您已成功删除${firstChild.innerHTML}！`);
		firstChild.remove();
	}else if(statu===2){
		let lastChild = numberWraper.lastChild;
		alert(`您已成功删除${lastChild.innerHTML}`);
		lastChild.remove()
	}
}

(function () {
	//一直都会获取值
	nameIput.addEventListener('change',function () {
		value = nameIput.value
	})
})();