const reportService = require("../services/reportService");

async function createReport(req, res) {
  try {
    const { id } = req.params;
    const { title, content, adress } = req.body;
    
    let report = await reportService.createReport(title, content, adress, id);

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
