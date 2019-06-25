const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new VueLoaderPlugin

    ],

    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},

        ]
    }
}