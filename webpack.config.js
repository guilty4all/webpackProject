const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                {
                                  // Options
                                },
                              ],
                            ],
                          },
                        },
                      },
                    "sass-loader" 
                ],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }


        ]
    },
    plugins:[new MiniCssExtractPlugin()],

    devtool: "source-map",

    devServer: {
        contentBase: './dist',
        hot: true,
    }
}