fetch("https://api.3sual.az/api/task")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
