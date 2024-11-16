async function generateCarpoolingMap() {
  // replace with loading
  let e = document.getElementById("gen");
  e.innerHTML = "Loading...";
  e.disabled = true;

  await new Promise((resolve) => setTimeout(resolve, 500));

  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(async (response) => {
      if (response.ok) {
        e.innerHTML = "Success!";
        e.disabled = false;
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.href = "./search";
      } else {
        e.innerHTML = "Error!";
        e.disabled = false;
      }
    })
    .catch((error) => {
      e.innerHTML = "Error!";
      e.disabled = false;
    });
}