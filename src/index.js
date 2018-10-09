import _ from 'lodash';
import './style.sass';
import Icon from './icon.png';
import axios from "axios";

function component() {
    let elements = document.createElement('div');
    let element1 = document.createElement('div');
    let element2 = document.createElement('div');
    elements.innerHTML = _.join(['Hello', 'CuiLei'], ' ');
    elements.classList.add('boxs')
    element1.classList.add('box1')
    element2.classList.add('box2')
    elements.appendChild(element1)
    elements.appendChild(element2)

    var myIcon = new Image();
    myIcon.src = Icon;
    document.body.appendChild(myIcon);

    let abbf = 100

    function a(b) {
        return () => {
            b++
            console.log(b)
        }
    }
    a(abbf)()

    return elements;
}

document.body.appendChild(component());

console.log(axios);

axios.get('/book')