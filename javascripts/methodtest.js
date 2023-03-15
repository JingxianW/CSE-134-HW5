const form = document.querySelector('form');
const postBtn = document.querySelector('#postBtn');
const getBtn = document.querySelector('#getBtn');
const putBtn = document.querySelector('#putBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const output = document.querySelector('#response');



postBtn.addEventListener('click', () => {
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://httpbin.org/post');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                output.querySelector('#format_response').textContent = JSON.stringify(response, null, 4);
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
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }
  
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://httpbin.org/get?' + `id=${form.elements['id'].value}&` + `article_name=${form.elements['article_name'].value}&` + `article_body=${form.elements['article_body'].value}&` +  `date=${form.elements['date'].value}`);

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                output.querySelector('#format_response').textContent = JSON.stringify(response, null, 4);
            } 
            else {
                output.textContent = 'Error: ' + this.statusText;
            }  
        }
    };

    xhr.send();
  });


putBtn.addEventListener('click', () => {
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('PUT', `https://httpbin.org/put`);
    xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);

                output.querySelector('#format_response').textContent = JSON.stringify(response, null, 4);
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
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('DELETE', `https://httpbin.org/delete`);

    xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            output.querySelector('#format_response').textContent = JSON.stringify(response, null, 4);
        } 
        else {
            output.textContent = 'Error: ' + this.statusText;
        }  
    }
    };

    xhr.send();
});
