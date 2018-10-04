module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.(tsx)?$/,
        loader: 'ts-loader'
    });
    defaultConfig.resolve.extensions.push('.tsx');

    return defaultConfig;
};