/*
 * Yet Another UserAgent Analyzer
 * Copyright (C) 2013-2019 Niels Basjes
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var pkg = require('./package.json');

module.exports = {
    // Documentation for Yauaa is stored under "src/main/docs"
    root: './main/docs',
    title: 'Yauaa: Yet Another UserAgent Analyzer',

    // Enforce use of GitBook v3
    gitbook: '3.2.3',

    // Use the "official" theme
    // plugins: ['theme-official@2.1.1', '-sharing', '-fontsettings', 'sitemap'],
    plugins: ['sitemap'],

    variables: {
        version: pkg.version,
        YauaaVersion: "5.9"
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://yauaa.basjes.nl'
        }
    }
};
