const form = document.querySelector('form');
const postBtn = document.querySelector('#postBtn');
const getBtn = document.querySelector('#getBtn');
const putBtn = document.querySelector('#putBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const output = document.querySelector('#response');



postBtn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://httpbin.org/post');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);

                output.textContent = JSON.stringify(response);
            } 
            else {
                output.textContent = 'Error: ' + this.statusText;
            } 
        }  
    };

    xhr.send(JSON.stringify({id: form.elements['id'].value,
                             article_name: form.elements['article_body'].value,
                             article_body: form.elements['article_body'].value,
                             date: form.elements['date'].value}));
});



getBtn.addEventListener('click', () => {
  
    let url = 'https://httpbin.org/get?';
    if (form.elements['id'].value) {
        url += `id=${form.elements['id'].value}&`;
    } 
    if (form.elements['article_name'].value) {
        url += `article_name=${form.elements['article_name'].value}&`;
    } 
    if (form.elements['article_body'].value) {
        url += `article_body=${form.elements['article_body'].value}&`;
    }
    if (form.elements['date'].value) {
        url += `date=${form.elements['date'].value}`;
    }
  
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                output.textContent = JSON.stringify(response);
            } 
            else {
                output.textContent = 'Error: ' + this.statusText;
            }  
        }
    };

    xhr.send();
  });


putBtn.addEventListener('click', () => {

    const xhr = new XMLHttpRequest();

    xhr.open('PUT', `https://httpbin.org/put`);
    xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                output.textContent = JSON.stringify(response);
            } 
            else {
                output.textContent = 'Error: ' + this.statusText;
            }  
        }
    };

    xhr.send(JSON.stringify({id: form.elements['id'].value,
                             article_name: form.elements['article_body'].value,
                             article_body: form.elements['article_body'].value,
                             date: form.elements['date'].value}));
});

deleteBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('DELETE', `https://httpbin.org/delete`);

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            output.textContent = JSON.stringify(response);
        } 
        else {
            output.textContent = 'Error: ' + this.statusText;
        }  
    }
  };
  
  xhr.send();
});
