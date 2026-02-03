export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/auth"; // redirect to login page
};
