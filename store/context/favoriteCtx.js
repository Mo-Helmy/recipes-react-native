const { createContext, useState } = require('react');

export const FavoriteCtx = createContext({
  ids: [],
  addToFavorite: (id) => {},
  removeFormFavorite: (id) => {},
});

const FavoriteCtxProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorite = (id) => {
    setFavoriteIds((prev) => [id, ...prev]);
  };

  const removeFormFavorite = (id) => {
    setFavoriteIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteIds,
    addToFavorite,
    removeFormFavorite,
  };
  return <FavoriteCtx.Provider value={value}>{children}</FavoriteCtx.Provider>;
};

export default FavoriteCtxProvider;
