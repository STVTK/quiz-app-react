module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Question: 'app/components/Question.jsx',
            Initial: 'app/components/Initial.jsx',
            Result: 'app/components/Result.jsx',
            Layout: 'app/components/Layout.jsx',
            Nav: 'app/components/Nav.jsx',
            QuizApp: 'app/components/QuizApp.jsx',
            QuizPage: 'app/components/QuizPage.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
