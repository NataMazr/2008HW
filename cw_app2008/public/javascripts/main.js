console.log('nfdhfghf');
const xhr = new XMLHttpRequest;

xhr.open('GET', 'api/users');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send()
xhr.addEventListener('load', () => {
    const us = JSON.parse(xhr.response);
    // document.querySelector('#root').innerHTML = (JSON.stringify(us));
    // console.log(xhr.response);
    const h3 = document.createElement('h3');
    document.body.appendChild(h3);
    console.log(us);
    us.forEach(function(item, i, usout) {
        usout[i] = ` Это юзер №${i}: зовут его ${item.name}`
        document.querySelector('h3').innerHTML = usout;
    });
});