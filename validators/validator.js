module.exports.sendJsonResponse = (res, status, content, _next) => {
    res.status(status);
    if (content instanceof Error) {
      console.log('ERROR\n', content, '\nERROR');
      res.json({ message: 'Syntax or Reference Error' });
    } else if (typeof content === 'undefined') {
      res.json({ message: content });
    } else {
      res.json(content);
    }
  };