export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const editUser = (req, res) => res.send("Edit User");
export const removeUser = (req, res) => res.send("remove User");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("see User");
};
export const logout = (req, res) => res.send("Log Out");
