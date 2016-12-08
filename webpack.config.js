var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: __dirname + "/index.js",
	output: {filename: "bundle.js"},

	externals: [
		{
		}
	],
	
	module:{
		loaders:[
			{test:/\.html$/, exclude: /^index\.html/, loader:"ng-cache"},
			{test:/\.css$/, loader:"style!css"},
			{ 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
		],
	},
}
