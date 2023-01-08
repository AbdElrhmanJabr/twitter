let editableInput = document.querySelector(".editable"),
  placeholder = document.querySelector(".placeholder"),
  button = document.querySelector(".tweet-button"),
  Tweet = document.querySelector(".tweet"),
  user = document.querySelector(".user").cloneNode(true),
  icons = document.querySelector(".tweet-icons").cloneNode(true),
  content = document.querySelector(".content").cloneNode(true),
  tweets = document.querySelector(".tweets");
let reTweet = document.querySelectorAll(".retweet");
let heart = document.querySelectorAll(".heart");

// to write a tweet
editableInput.onkeypress = () => {
  placeholder.style.display = "none";
  if (editableInput.innerText.length >= 0) {
    button.style.backgroundColor = "#1d9bf0";
  }
};

// to add your tweet in the news feed
button.onclick = () => {
  // to make the tweet and adding it
  editableInput.className = "tweet";
  let mydublicate = editableInput.cloneNode(false);
  mydublicate.appendChild(user);
  mydublicate.appendChild(content);
  content.innerText = editableInput.innerText;
  editableInput.innerText = "";
  mydublicate.appendChild(icons);
  icons.querySelector(".heart").className = "your-tweetHeart";
  icons.querySelector(".retweet").className = "your-retweet";
  mydublicate.setAttribute("contenteditable", false);
  tweets.prepend(mydublicate);

  // to like your tweet
  let yourHeart = document.querySelector(".your-tweetHeart");
  yourHeart.onclick = () => {
    yourHeart.style.color = "red";
  };
  // to retweet your tweet
  let yourRetweet = document.querySelector(".your-retweet");
  yourRetweet.onclick = () => {
    let retweeted = yourRetweet.parentElement.parentElement;
    tweets.prepend(retweeted.cloneNode(true));
  };
};

// to like the others tweets

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener(
    "click",
    function () {
      this.style.color = "red";
    },
    false
  );
}

// to retweet the others tweet

for (let i = 0; i < reTweet.length; i++) {
  reTweet[i].addEventListener(
    "click",
    function () {
      let retweeted = reTweet[i].parentElement.parentElement;
      tweets.prepend(retweeted.cloneNode(true));
    },
    false
  );
}

// End The JS
