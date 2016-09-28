/**
  * Copyright (C) 2016 yanni4night.com
  * pantofile.js
  *
  * changelog
  * 2016-09-20[17:37:33]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
 'use strict';
module.exports = panto => {
    require('load-panto-transformers')(panto);
    require('time-panto')(panto);
    
    panto.setOptions({
        cwd: __dirname,
        src: '.',
        output: 'dist'
    });

    panto.$('*.jsx').tag('JSX').read().babel({
        extend: '.babelrc'
    }).browserify({
        entry: 'test.jsx',
        bundle: 'test.js',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        }
    }).write();
};