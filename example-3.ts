let globalConfig = {
    name: 'Global',
    pref1: 'pref1',
    pref2: 'pref2'
};

let appConfig = {
    appPref1: 'pref1',
    appPref2: 'pref3',
    pref1: 'reassigned from appConfig'
};

let customerConfig = {
    name: 'Reassigned from Customer',
    customerPref3: 'pref3'
};

let config = Object.assign({},globalConfig, customerConfig, appConfig);
console.log(config);

// R.compose(
//     userConfig,
//     groupConfig,
//     customerConfig,
//     appConfig,
//     globalConfig
// );

