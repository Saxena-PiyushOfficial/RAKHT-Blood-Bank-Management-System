const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome user!!!Hello",
      success: true,
    });
  };
  
  module.exports = { testController };