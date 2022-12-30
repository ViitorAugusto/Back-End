type MenuOptions = "" | "all" | "dog" | "cat" | "fish" | "turtle" | "birds";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
    turtle: false,
    birds: false,
  };
  if (activeMenu !== "") {
    returnObject[activeMenu] = true;
  }
  return returnObject;
};
