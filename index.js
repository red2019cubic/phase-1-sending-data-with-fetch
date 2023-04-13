// Add your code here

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const div = document.createElement("div");
    
      document.querySelector("body").appendChild(div);
      document.querySelector("div").textContent = data.id;
    })
    .catch(function (error) {
      document.querySelector("body").textContent = error.message;
    });
}
