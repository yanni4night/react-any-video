/**
  * Copyright (C) 2016 yanni4night.com
  * index.jsx
  *
  * changelog
  * 2016-09-20[17:41:26]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Video';
        this._events = [];
    }
    componentDidMount() {
        const video = this.refs.video;
        
        const events = Object.keys(this.props.events || {}).filter(key => {
            return /^on\w+$/i.test(key);
        }).map(key => key.slice(2).toLowerCase());

        events.forEach(evt => {
            const func = this.props.events['on' + evt];
            video.addEventListener(evt, func, false);

            this._events.push({
                event: evt,
                func
            });
        });
    }
    componentWillUpdate(nextProps) {
        const boolProps = 'muted,controls,loop,autoplay'.split(',');
        const props = 'src,poster,preload,crossorigin,height,width'.split(',');

        props.forEach(prop => {
            if (prop in nextProps) {
                this.refs.video[prop] = nextProps[prop];
                this.refs.video.setAttribute(prop, nextProps[prop]);
            }
        });

        boolProps.forEach(prop => {
            if (!nextProps[prop]) {
                this.refs.video.removeAttribute(prop);
                delete this.refs.video[prop];
            } else {
                this.refs.video.setAttribute(prop, true);
                this.refs.video[prop] = true;
            }
        });

        return false;
    }
    componentWillUnmount() {
        const video = this.refs.video;
        this._events.forEach(({event, func}) => {
            video.removeEventListener(event, func);
        });
    }
    _computeVideoParams() {
        const {src, muted, controls, autoplay, height, width, poster, preload, loop, crossorigin} = this.props;

        const param = {};

        if (src) {
            param.src = src;
        }

        if (controls) {
            param.controls = 'controls';
        }
        
        if (muted) {
            param.muted = 'muted';
        }

        if (preload) {
            param.preload = preload;
        }

        if (autoplay) {
            param.autoPlay = 'autoplay';
        }

        if (loop) {
            param.loop = 'loop';
        }

        if (poster) {
            param.poster = poster;
        }

        if (crossorigin) {
            param.crossOrigin = crossorigin;
        }

        if (height) {
            param.height = height;
        }

        if (width) {
            param.width = width;
        }

        return param;
    }
    render() {
        const params = this._computeVideoParams();

        return (
            <video {...params} ref="video">
                {this.props.children}
            </video>
        );
    }
}

Video.propTypes = {
    src: React.PropTypes.string,
    poster: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    crossorigin: React.PropTypes.oneOf(['anonymous', 'use-credentials']),
    preload: React.PropTypes.oneOf(['none', 'metadata', 'auto']),
    autoplay: React.PropTypes.bool,
    controls: React.PropTypes.bool,
    muted: React.PropTypes.bool,
    events: React.PropTypes.object
};

export default Video;
