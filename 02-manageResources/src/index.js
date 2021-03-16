import _ from 'loadsh';
import './style.css';
import pic from './9.png';


function component() {
	const element = document.createElement('div');
  
	// lodash（目前通过一个 script 引入）对于执行这一行是必需的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const myImages = new Image();
	myImages.src = pic;
	element.appendChild(myImages)
  
	return element;
}
  
document.body.appendChild(component());