module.exports = {
    entry: ['./src/index'],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: '/dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader?presets[]=es2015']},
            {test: /\.tsx?$/, loader: 'babel-loader?presets[]=react!ts-loader'},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            {test: /(\.scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=50000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=100000&mimetype=application/octet-stream'}
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
};