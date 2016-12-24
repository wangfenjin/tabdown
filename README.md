# TabDown

Start (GitHub-Flavored) Markdown from new tabs in your favourite web browsers.

### How to install:

 * [Chrome Extensions](https://chrome.google.com/webstore/detail/tabdown/edhcokobegnpjbjhkpoadfeonghjcecn?hl=zh-CN&gl=001)
 * [Firefox Addons](https://addons.mozilla.org/en-US/firefox/addon/tabdown/)
 * Safari Extensions is on the way, need apply Apple's developer programs.

### Why build this:

I encounter [Papier](https://getpapier.com) on Safari and found it very helpful to me. But it has a bug that sometimes new tab from google will be redirect to it's extension page.

I searched around and think it will be very interesting to make an extension so I can customize the feature by myself.

### Basic useful feature list:

 * Ctrl+S / Cmd+S to save the file
 * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
 * Drag and drop a file into here to load it

I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

And here's some code! :+1:

```javascript
$(function(){
  $('div').html('I am a div.');
});
```

This is [on GitHub](https://github.com/WangFenjin/tabdown) so let me know if I've b0rked it somewhere.

### Project Structure

 * All extension share the same code from markdown-editor
 * background.js and manifest.json used by chrome/Firefox
 * Info.plist and opentab.html used by Safari

### Stuff used to make this:

 * jbt [markdown-editor](https://github.com/jbt/markdown-editor)
