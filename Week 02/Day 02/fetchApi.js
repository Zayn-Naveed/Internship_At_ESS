// Fetch API is a built-in browser function used to make HTTP requests to servers and retrieve data asynchronously.

async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log(post.title);
    console.log(post.body);
  } catch(error) {
    console.log("Error:", error);
  }
}

getPost();