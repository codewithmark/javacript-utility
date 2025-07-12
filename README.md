# j 🛠️

A simple, self-contained utility class for common frontend tasks. No dependencies — no jQuery, no Lodash. Great for beginner web developers or small projects!

## 🚀 Features 

* Generate random codes
* Modify page title dynamically
* Character counter for textareas
* Get site info (URL, folder path, etc.)
* Escape/unescape HTML safely
* Mobile device detection
* Pretty URL slugs
* Include/remove JS and CSS files dynamically

## 📦 Installation

Just copy the `j` class into your JavaScript file.

```js
// You can use it directly after copying the class
j.autoCode();
```

## 📚 API & Examples

---

### `j.autoCode(length = 8)`

Generate a random alphanumeric string with a timestamp mix.

```js
j.autoCode();        // e.g. "G7a9jkYz1234567890"
j.autoCode(12);      // e.g. "xM4aT29eQ5Tf"
```

---

### `j.changePageTitle("New Title")`

Dynamically change the page title.

```js
j.changePageTitle("Welcome to My Page");
```

---

### `j.charCount(textareaElement, maxChars)`

Attach a live character counter to a textarea input.

```js
const textarea = document.querySelector("#myTextarea");
j.charCount(textarea, 200);
```

---

### `j.getFolderPath()`

Returns current folder path (excluding file name).

```js
j.getFolderPath(); 
// e.g. "https://yoursite.com/blog/"
```

---

### `j.getSiteURL()`

Returns the root domain URL.

```js
j.getSiteURL(); 
// e.g. "https://yoursite.com/"
```

---

### `j.getFileName(url)`

Get file name without extension from a URL.

```js
j.getFileName("https://yoursite.com/test/file.mp3"); // "file"
```

---

### `j.getFileExt(url)`

Get file extension from a URL.

```js
j.getFileExt("test.mp4"); // "mp4"
```

---

### `j.url(type)`

Returns part of the current page URL.

Options: `"host"`, `"hostname"`, `"path"`, `"href"`, `"hash"`

```js
j.url("host");  // "yoursite.com"
j.url("href");  // full current URL
```

---

### `j.limitChar(string, length)`

Trim string to given length.

```js
j.limitChar("Hello World", 5); // "Hello"
```

---

### `j.escape(string)` & `j.unescape(string)`

Escape or unescape HTML entities.

```js
j.escape('<div>"hi"</div>'); 
// &lt;div&gt;&quot;hi&quot;&lt;/div&gt;

j.unescape('&lt;b&gt;bold&lt;/b&gt;'); 
// <b>bold</b>
```

---

### `j.getUserRef()`

Returns the referring URL or `'direct'`.

```js
j.getUserRef(); // e.g. "https://google.com" or "direct"
```

---

### `j.prettyURL(inputElement)`

Attach real-time slugifier to an input field.

```js
const input = document.querySelector("#slug");
j.prettyURL(input);
```

---

### `j.isMobile()`

Detect if the visitor is using a mobile device.

```js
if (j.isMobile()) {
  console.log("You're on mobile!");
}
```

---

### `j.isIncluded(fileUrl)`

Check if a CSS or JS file is already included.

```js
j.isIncluded("style.css"); // true or false
```

---

### `j.includeOnce(fileUrl)`

Add CSS/JS file to `<head>` only once.

```js
j.includeOnce("theme.css");
j.includeOnce("custom.js");
```

---

### `j.removeOnce(fileUrl)`

Remove previously included CSS/JS file from `<head>`.

```js
j.removeOnce("theme.css");
```

---

## 📁 Example Setup

```html
<textarea id="bio"></textarea>
<script>
  j.charCount(document.querySelector('#bio'), 150);
</script>
```

---

## 🧑‍💻 Author

Built with ❤️ for beginner devs by \[Your Name].

---

## 📄 License

MIT — free for personal and commercial use.
