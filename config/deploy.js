module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'chef-tracker',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
