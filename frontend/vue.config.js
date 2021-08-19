module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
        args[0].title = 'DSE Data Dashboard';	// Replace your title here
        return args;
      });
    }
  };