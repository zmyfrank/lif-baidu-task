/**
 * Created by issuser on 2017/5/24.
 */

let value;
let nameIput = document.getElementById('numInput');
//获取添加元素
let numberWraper = document.getElementById('numberWraper');
//获取四个点击按钮
let leftIn = document.getElementById('leftIn');
//检查是否是数字
function cheack() {
	testMethod = /\d+/
	if (!value||!(testMethod.test(value))){
		alert('请输入1位以上的数字')
		return false
	}else {
		return true
	}
}

function leftMe() {
	let cheackResult = cheack();
	let li = document.createElement('li')
	if (!cheackResult){
		return
	}
	li.innerHTML = value;
	numberWraper.append(li);
}

(function () {
	//点击事件
	leftIn.addEventListener('click',leftMe);
	//获取值
	nameIput.addEventListener('change',function () {
		value = nameIput.value
	})
})();