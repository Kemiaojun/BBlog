var posts=["2024/11/22/2/","/posts/3.html","2024/11/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };