const {withModuleFederationPlugin, share} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    shared:
        share(
            {
                '@angular/core': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                '@angular/common': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                '@angular/common/http': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                '@angular/router': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                '@angular/forms': {singleton: true, strictVersion: true, requiredVersion: 'auto'},
                '@angular/platform-browser': {
                    singleton: true,
                    strictVersion: false,
                    requiredVersion: 'auto',
                    eager: true,
                    import: 'node_modules/@angular/platform-browser'},
                '@angular/platform-browser/animations': {
                    singleton: true,
                    import: 'node_modules/@angular/platform-browser/animations'
                },
            })
});
