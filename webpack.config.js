const path=require('path')
//console.log(path.join(__dirname,'public'))
//console.log(__dirname);
const ExtractTextPlugin=require('extract-text-webpack-plugin')
const CSSExtract =new ExtractTextPlugin('styles.css')
module.exports=(env)=>{
    const isProduction =env==='production'
    
return{
 entry:'./src/app.js',
 output:{
     path: path.join(__dirname, 'public'),
     filename:'bundle.js'
 },
 module:{
     rules:[{
         loader:'babel-loader',
         test:/\.js$/,
         exclude:/node_modules/
     },
     {test:/\.s?css$/,
    use:CSSExtract.extract({
        use:[
            {loader:'css-loader',
            options:{
                sourceMap:true
            }
            },
            'sass-loader'
        ]
     })}
    ]
 },
 plugins:[
     CSSExtract
 ],
 devtool: isProduction ? 'source-map': 'inline-source-map' ,
    devServer: { 
        contentBase: path.join(__dirname, 'public'),
    historyApiFallback:true
} 
}
}
