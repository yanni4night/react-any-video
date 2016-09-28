/**
  * Copyright (C) 2016 yanni4night.com
  * test.js
  *
  * changelog
  * 2016-09-21[09:47:35]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import Video from './index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import assert from 'assert';

var eleIdx = 0;

function createElement(tag) {
    var div = document.createElement(tag || 'section');
    div.className = 'section';
    div.id = ++eleIdx;
    document.body.appendChild(div);
    return div;
}

const FOO_VIDEO_URL = 'http://tb-video.bdstatic.com/tieba-smallvideo-spider/8_060cfcdfec7710d750af7df6a6d9fd1c.mp4';

const isPhantomJS = ~navigator.userAgent.indexOf('PhantomJS');

describe('video', () => {
    describe('render', () => {
        it('video element', () => {
            const div = createElement();

            const params = {
                src: FOO_VIDEO_URL,
                width: 300,
                autoplay: true,
                loop: true,
                preload: true,
                muted: true,
                controls: true
            };

            ReactDOM.render(<Video {...params}/>, div);

            const video = div.querySelector('video');
            assert.ok(video, 'has "video" element');
            assert.ok(video.hasAttribute('width'), 'has "width" attribute');
            assert.ok(video.hasAttribute('src'), 'has "src" attribute');
            assert.ok(video.hasAttribute('loop'), 'has "loop" attribute');
            assert.ok(video.hasAttribute('preload'), 'has "preload" attribute');
            assert.ok(video.hasAttribute('controls'), 'has "controls" attribute');
            assert.ok(video.hasAttribute('autoplay'), 'has "autoplay" attribute');
            assert.ok(video.hasAttribute('muted'), 'has "muted" attribute');
            div.parentNode.removeChild(div);
        });
    });
    describe('set props', () => {
        const boolProps = 'muted,controls,loop,autoplay'.split(',');
        const props = 'src,poster,preload,crossOrigin,height,width'.split(',');

        const propsValue = {
            src: [FOO_VIDEO_URL],
            poster: ['http://ww4.sinaimg.cn/large/801b780ajw1f83ie6f0a6j20ve0vcacv.jpg'],
            preload: ['none', 'metadata', 'auto'],
            crossOrigin: ['anonymous', 'use-credentials'],
            height: [300, 400],
            width: [300, 400]
        };

        boolProps.forEach(prop => {
            it(prop, () => {
                const div = createElement();
                const params = {
                    src: FOO_VIDEO_URL,
                    width: 300,
                    [prop]: true
                };
                ReactDOM.render(<Video {...params}/>, div);
                const video = div.querySelector('video');
                assert.ok(video.hasAttribute(prop) || video[prop], `should has ${prop}`);
                params[prop] = false;
                ReactDOM.render(<Video {...params}/>, div);
                assert.ok(!video.hasAttribute(prop), `should has no ${prop}`);
                div.parentNode.removeChild(div);
            });
        });

        props.forEach(prop => {
            it(prop, () => {
                const div = createElement();
                for (let i = 0; i < propsValue[prop].length ; ++i) {
                    const params = {
                        [prop.toLowerCase()]: propsValue[prop][i]
                    };
                    ReactDOM.render(<Video {...params}/>, div);
                    let video = div.querySelector('video');
                    assert.equal(video.getAttribute(prop), propsValue[prop][i], `${prop} should be "${propsValue[prop][i]}", but is ${video[prop]}`);
                }
                div.parentNode.removeChild(div);
            });
        });
    });
    if (!isPhantomJS) {
        describe('events', () => {
            it('ontimeupdate', done => {
                const div = createElement();
                let doned = false;
                const params = {
                    src: FOO_VIDEO_URL,
                    width: 300,
                    autoplay: true,
                    muted: true,
                    controls: true,
                    events: {
                        ontimeupdate: () => {
                            if (!doned) {
                                done();
                                doned = true;
                                div.parentNode.removeChild(div);
                            }
                        }
                    }
                };
                ReactDOM.render(<Video {...params}/>, div);
            });
            it('onerror', done => {
                const div = createElement();
                const params = {
                    src: '....',
                    width: 300,
                    autoplay: true,
                    muted: true,
                    controls: true,
                    events: {
                        onerror: () => {
                            done();
                            div.parentNode.removeChild(div);
                        }
                    }
                };
                ReactDOM.render(<Video {...params}/>, div);
            });
        });
    }
});

