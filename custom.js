// Sample data
const posts = [];
let lastActivityTime = null;

// Function to simulate creating a post
async function createPost(post) {
  try {
    // Call updateLastUserActivityTime before creating the post
    const updatedLastActivityTime = await updateLastUserActivityTime();
    console.log("Last activity time before creating post:", updatedLastActivityTime);

    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Function to simulate updating the user's last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Function to simulate deleting a post
function deletePost(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
        resolve(true);
      } else {
        reject(new Error('Invalid index for deleting post'));
      }
    }, 1000);
  });
}

// Simulate the user creating a post and updating last activity time
(async function simulateUserActions() {
  try {
    const createdPost = await createPost("First post");
    console.log("Posts after creating:", posts);

    // Call updateLastUserActivityTime after creating the post
    const updatedLastActivityTime = await updateLastUserActivityTime();
    console.log("Last activity time after creating post:", updatedLastActivityTime);

    // Simulate deleting the last post
    const deleteResult = await deletePost(posts.length - 1);
    if (deleteResult) {
      console.log("Post deleted successfully.");
      console.log("Remaining posts:", posts);
    } else {
      console.log("Failed to delete the post.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
})();