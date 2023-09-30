import React from 'react';

function FileForm() {
  function submitToAPI(data) {
    fetch('http://localhost:3000/api/v1/items', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append('item[name]', event.target.name.value);
    data.append('item[image]', event.target.image.files[0]);
    submitToAPI(data);
  }
  return (
    <div>
      <h1>FileForm</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />
        <br />
        <label htmlFor="image">Name</label>
        <input type="file" name="image" id="image" placeholder="Image" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FileForm;
