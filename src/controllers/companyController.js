export const universe = (req, res) =>
  res.render("universe", { mainName: "universe" });
export const data = (req, res) => res.render("companyData");
export const chart = (req, res) => res.render("companyChart");
export const rim = (req, res) => res.send("company rim");
export const upload = (req, res) => res.send("Upload Company Data");
export const editData = (req, res) => res.send("Edit company Data");
export const search = (req, res) => res.send("Search Company");
