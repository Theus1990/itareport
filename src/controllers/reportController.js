const reportService = require("../services/reportService");
const userService = require("../services/usuarioService");


async function createReport(req, res) {
  try {
    const { id } = req.params;
    const user = userService.findUserById(id); 
    const { title, content, adress } = req.body;
    
    let report = await reportService.createReport(title, content, adress, user);

    return res.json({
      success: true,
      data: report,
      message: "Report created successfully",
    });
  } catch (error) {
    return res.json({ error });
  }
}

module.exports = {
  createReport,
};
