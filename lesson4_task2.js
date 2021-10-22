/* // es05
function Post(options) {
  this.author = options.author;
  this.text = options.text;
  this.date = options.date;
}

Post.prototype.edit = function (userText) {
  userText = prompt("submit here some text: ");
  this.text = userText;
  return this.text;
};

Post.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

const AttachedPosts = function (...args) {
  Post.apply(this, args);
  this.highlighted = false;
};

AttachedPosts.prototype = Object.create(Post.prototype);
AttachedPosts.prototype.constructor = AttachedPosts;

const post = new AttachedPosts({
  author: "Poe",
  text: "Red Mask",
  date: 1827,
  highlighted: false,
});

console.log(post); */

// es06

class Post {
  constructor(options) {
    this.author = options.author;
    this.text = options.text;
    this.date = options.date;
  }

  edit = function (userText) {
    userText = prompt("submit here some text: ");
    this.text = userText;
    return this.text;
  };
}

const post = new Post({
  author: "Poe",
  text: "american writer",
  date: 1827,
  highlighted: false,
});

console.log(post);

class AttachedPosts extends Post {
  constructor(options) {
    super(options);
    this.highlighted = false;
  }
}

const postAttached = new AttachedPosts({
  author: "Poe",
  text: "american writer",
  date: 1827,
  highlighted: false,
});

Object.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};
