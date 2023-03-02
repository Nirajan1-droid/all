module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch((err)=>{
      res.status(500).json(err);
    });
  };