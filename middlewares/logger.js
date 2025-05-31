function logger(req, res, next) {
  const timestamp = new Date().toLocaleDateString("sv-SE");
  const method = req.method;
  const url = req.url;
  console.log(`[${timestamp}], ${method} ${url}`);
  next();
}

export default logger;
