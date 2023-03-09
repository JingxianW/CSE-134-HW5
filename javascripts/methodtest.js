const form = document.querySelector('form');
const postBtn = document.querySelector('#postBtn');
const output = document.querySelector('#response');
// const getBtn = document.querySelector('#getBtn');
// const putBtn = document.querySelector('#putBtn');
// const deleteBtn = document.querySelector('#deleteBtn');

postBtn.addEventListener('click', () => {
    const id = form.elements['id'].value;
    const article_name = form.elements['article_name'].value;
    const article_body = form.elements['article_body'].value;
    const date = form.elements['date'].value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://httpbin.org/post');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const response = JSON.parse(this.responseText);
                // response.form = {
                //     id: id,
                //     article_name: article_name,
                //     article_body: article_body,
                //     date: date
                // };
                output.textContent = JSON.stringify(response);
            } 
            else {
                output.textContent = 'Error: ' + this.statusText;
            } 
        }  
    };
    const data = {
        id: id,
        article_name: article_name,
        article_body: article_body,
        date: date
    };
    xhr.send(JSON.stringify(data));
});



// getBtn.addEventListener('click', function(event) {
//     event.preventDefault();
  
//     const id = form.elements['id'].value;
//     const article_name = form.elements['article_name'].value;
//     const article_body = form.elements['article_body'].value;
  
//     let url = 'https://httpbin.org/get';
//     if (id) {
//       url += `?id=${id}`;
//     } else if (article_name) {
//       url += `?article_name=${article_name}`;
//     } else if (article_body) {
//       url += `?article_body=${article_body}`;
//     }
  
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         output.textContent = JSON.stringify(response, null, 2);
//       } else {
//         output.textContent = 'Error: ' + xhr.status;
//       }
//     };
//     xhr.onerror = function() {
//       output.textContent = 'Error: ' + xhr.status;
//     };
//     xhr.send();
//   });


//   putBtn.addEventListener('click', function(event) {
//     event.preventDefault();
  
//     const id = form.elements['id'].value;
//     const article_name = form.elements['article_name'].value;
//     const article_body = form.elements['article_body'].value;
//     const date = form.elements['date'].value;
  
//     const xhr = new XMLHttpRequest();
//     xhr.open('PUT', `https://httpbin.org/put?id=${id}`);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         response.args = {
//           id: id,
//           article_name: article_name,
//           article_body: article_body,
//           date: date
//         };
//         output.textContent = JSON.stringify(response, null, 2);
//       } else {
//         output.textContent = 'Error: ' + xhr.status;
//       }
//     };
//     xhr.onerror = function() {
//       output.textContent = 'Error: ' + xhr.status;
//     };
//     xhr.send(JSON.stringify({
//       id: id,
//       article_name: article_name,
//       article_body: article_body,
//       date: date
//     }));
//   });

// deleteBtn.addEventListener('click', function(event) {
//   event.preventDefault();

//   const id = form.elements['id'].value;
//   const article_name = form.elements['article_name'].value;
//   const article_body = form.elements['article_body'].value;

//   // Find the appropriate parameter to use based on which fields have been filled in
//   let deleteParam = '';
//   if (id !== '') {
//     deleteParam = `id=${id}`;
//   } else if (article_name !== '') {
//     deleteParam = `article_name=${article_name}`;
//   } else if (article_body !== '') {
//     deleteParam = `article_body=${article_body}`;
//   }

//   const xhr = new XMLHttpRequest();
//   xhr.open('DELETE', `https://httpbin.org/delete?${deleteParam}`);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       output.textContent = JSON.stringify(response, null, 2);
//     } else {
//       output.textContent = 'Error: ' + xhr.status;
//     }
//   };
//   xhr.onerror = function() {
//     output.textContent = 'Error: ' + xhr.status;
//   };
//   xhr.send();
// });
