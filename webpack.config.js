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
		],
	},
}
