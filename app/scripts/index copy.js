/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const path = require('path');
const url = require("url");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const dotenv = require('dotenv');
const { checkFileExist, exitProcess, ResolveCommand, Logger, clearConsole, verifyEnv } = require("./utils")
const pathConfigs = require("../config/paths")
const envVariate = require('../config/env')
const { name: appName, version: appVersion } = require('../package.json');




function main(envMode, config) {
    // log .env file
    loadEnvFile(envMode)
    // pre check file
    preCheck()
    // get config then create compiler
    const webpackConfig = getWebpackConfig(envMode, config);
    const compiler = createCompiler(webpackConfig)

    if (config.isDev) {
        // run serve
        webpackServe(compiler, webpackConfig, envMode, config)
    } else {
        // run build
        webpackBuild(compiler, webpackConfig, envMode, config)
    }
}



