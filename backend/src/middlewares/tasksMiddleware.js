const validateBody = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    res.status(400).json({ message: "The field 'title' is required" });
    return;
  }

  if (body.title === "") {
    res.status(400).json({ message: "title cannot be empty" });
    return;
  }

  next();
};

const validateStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    res.status(400).json({ message: "The field'status' is required" });
    return;
  }

  if (body.status === "") {
    res.status(400).json({ message: "status cannot be empty" });
    return;
  }
  next();
};

module.exports = {
  validateBody,
  validateStatus,
};
