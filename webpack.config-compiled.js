module.exports = {
    entry: {
        bundle: "./src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: [/\.vue$/],
            use: ['vue-loader']

        }]
    },
    devtool: "inline-source-map"
};