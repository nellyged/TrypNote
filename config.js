const ENV = process.env.ENV || 'DEV';

try {
    Object.assign(process.env, require('./.env')[ENV]);
} catch (ex) {
    console.warn(ex);
}

const get = (key) => {
    console.log(process.env[key])
    return process.env[key];
};

module.exports = {
  get
};
