//加载app.less
require('../less/app.less');

window.onload = function () {
    
    let person = ['kevin', 'mark','iven'];

    let ul = document.createElement('ul');

    // person.map((v,i,o) => {
    person.map((v) => {
        let li = document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);

    })

    document.body.appendChild(ul);


}