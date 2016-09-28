# react-any-video
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[React](https://facebook.github.io/react/) wrapper of [video](https://www.w3.org/wiki/HTML/Elements/video) element.

## usage

```jsx
import Video from 'react-any-video';

const attributes = {
    src: 'http://...',
    width: 300,
    height: 200,
    muted: true,
    loop: true,
    autoplay: true,
    controls: true,
    postor: 'http://...',
    preload: 'metadata',
    crossorigin: 'anonymous',
    events: {
        onerror: () => {},
        onabort: () => {},
        onplaying: () => {},
        ontimeupdate: () => {}
    }
};


ReactDOM.render(<Video {...attributes}/>, document.querySelector('#react-dom'))
```

## licence

MIT License

Copyright (c) 2016 Yong Yin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[npm-url]: https://npmjs.org/package/react-any-video
[downloads-image]: http://img.shields.io/npm/dm/react-any-video.svg
[npm-image]: http://img.shields.io/npm/v/react-any-video.svg
[travis-url]: https://travis-ci.org/yanni4night/react-any-video
[travis-image]: http://img.shields.io/travis/yanni4night/react-any-video.svg
[david-dm-url]:https://david-dm.org/yanni4night/react-any-video
[david-dm-image]:https://david-dm.org/yanni4night/react-any-video.svg
[david-dm-dev-url]:https://david-dm.org/yanni4night/react-any-video#type=dev
[david-dm-dev-image]:https://david-dm.org/yanni4night/react-any-video/dev-status.svg