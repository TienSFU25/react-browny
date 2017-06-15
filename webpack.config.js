const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.tsx',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: __dirname,
        // match the output path

        publicPath: '/'
    },

    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader?presets[]=es2015']},
            {test: /\.tsx?$/, loader: 'babel-loader?presets[]=react!ts-loader'},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            {test: /(\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],    
};