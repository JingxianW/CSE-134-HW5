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

    fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({id: form.elements['id'].value,
                              article_name: form.elements['article_body'].value,
                              article_body: form.elements['article_body'].value,
                              date: form.elements['date'].value})
    })
    .then(response => response.json())
    .then(data => {
        output.querySelector('#format_response').textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error(error));
});

getBtn.addEventListener('click', () => {
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    fetch('https://httpbin.org/get?' + `id=${form.elements['id'].value}&` + `article_name=${form.elements['article_name'].value}&` + `article_body=${form.elements['article_body'].value}&` +  `date=${form.elements['date'].value}`)
    .then(response => response.json())
    .then(data => {
      output.querySelector('#format_response').textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error(error));
});

putBtn.addEventListener('click', () => {
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    fetch('https://httpbin.org/put', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({id: form.elements['id'].value,
                              article_name: form.elements['article_body'].value,
                              article_body: form.elements['article_body'].value,
                              date: form.elements['date'].value})
    })
    .then(response => response.json())
    .then(data => {
      output.querySelector('#format_response').textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error(error));
});

deleteBtn.addEventListener('click', () => {
    if (!form.elements['id'].value || !form.elements['article_body'].value || !form.elements['article_body'].value || !form.elements['date'].value) {
        alert('There are empty fields!');
        return;
    }

    fetch('https://httpbin.org/delete', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        output.querySelector('#format_response').textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => console.error(error));
});


