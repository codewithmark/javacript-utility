class JSUtils {
  static autoCode(n = 8) {
    let text = '';
    const t1 = new Date().getTime();
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + t1;
    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  static changePageTitle(newTitle) {
    document.title = newTitle;
  }

  static charCount(element, totalCharsAllowed) {
    const counterId = 'countchars' + this.autoCode();
    element.insertAdjacentHTML('afterend', `<br><span id="${counterId}">${totalCharsAllowed}</span> Characters Remaining.`);
    const charsCountEl = document.getElementById(counterId);
    element.addEventListener('keyup', function () {
      const thisChars = this.value.replace(/{.*}/g, '').length;
      if (thisChars > totalCharsAllowed) {
        this.value = this.value.substring(0, totalCharsAllowed);
      } else {
        charsCountEl.textContent = totalCharsAllowed - thisChars;
      }
    });
  }

  static getFolderPath() {
    const loc = window.location;
    const pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
  }

  static getSiteURL() {
    return `${location.protocol}//${location.host}/`;
  }

  static getFileName(fileUrl) {
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1).split('.')[0];
  }

  static getFileExt(fileUrl) {
    return fileUrl.split('.').pop().toLowerCase();
  }

  static url(lookupType) {
    const type = lookupType.toLowerCase();
    switch (type) {
      case 'host': return location.host;
      case 'hostname': return location.hostname;
      case 'path': return location.pathname;
      case 'href': return location.href;
      case 'hash': return location.hash;
      default: return '';
    }
  }

  static limitChar(str, len) {
    return str.substring(0, len);
  }

  static escape(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  static unescape(str) {
    return str
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
  }

  static getUserRef() {
    return document.referrer !== '' ? document.referrer : 'direct';
  }

  static prettyURL(element) {
    document.addEventListener('keyup', function (e) {
      if (e.target === element) {
        let val = element.value.toLowerCase();
        val = val.replace(/[^\w]+/g, '-').replace(/^[-]+/, '');
        element.value = val;
      }
    });
  }

  static isMobile() {
    const a = navigator.userAgent || navigator.vendor || window.opera;
    return (/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(a.toLowerCase()));
  }

  static isIncluded(fileUrl) {
    const ext = this.getFileExt(fileUrl);
    const elements = ext === 'js' ? document.getElementsByTagName('script') : document.getElementsByTagName('link');
    const key = ext === 'js' ? 'src' : 'href';
    const found = Array.from(elements).filter(el => el[key] === fileUrl).map(el => fileUrl);
    return found.length > 0 ? found : false;
  }

  static includeOnce(fileUrl) {
    if (this.isIncluded(fileUrl)) return;
    const ext = this.getFileExt(fileUrl);
    const head = document.head;

    if (ext === 'js') {
      const script = document.createElement('script');
      script.src = fileUrl;
      script.type = 'text/javascript';
      head.appendChild(script);
    } else if (ext === 'css') {
      const link = document.createElement('link');
      link.href = fileUrl;
      link.rel = 'stylesheet';
      head.appendChild(link);
    }
  }

  static removeOnce(fileUrl) {
    const ext = this.getFileExt(fileUrl);
    const elements = ext === 'js' ? document.getElementsByTagName('script') : document.getElementsByTagName('link');
    const key = ext === 'js' ? 'src' : 'href';

    Array.from(elements).forEach(el => {
      if (el[key] === fileUrl) {
        el.parentNode.removeChild(el);
      }
    });
  }

  static jsonToTable(jsonArray, tableSelector) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) return;

    const table = document.querySelector(tableSelector);
    if (!table) return;

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Get headers from keys of first object
    const headers = Object.keys(jsonArray[0]);
    const headRow = document.createElement('tr');
    headers.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    // Create rows
    jsonArray.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    // Clear and populate the table
    table.innerHTML = '';
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  static  jsonToTable(jsonArray) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) return null;

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = Object.keys(jsonArray[0]);
    const headRow = document.createElement('tr');
    headers.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    jsonArray.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
  }

}
