const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Pokémon Map Tracker',
        }
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'src', 'pkmn_data'),
                    to: 'pkmn_data'
                },
                {
                    from: path.resolve(__dirname, 'src', 'game_data'),
                    to: 'game_data'
                },
                {
                    from: path.resolve(__dirname, 'src', 'assets', 'img'),
                    to: 'img'
                }
            ]),
        ]
    },
    productionSourceMap: false,
}