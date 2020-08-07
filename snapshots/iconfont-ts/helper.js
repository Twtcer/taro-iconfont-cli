const useIconFont = () => {
  return {
    iconfont: `../../../snapshots/iconfont-ts/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  };
};

// es modules is unavaiable.
module.exports.useIconFont = useIconFont;
