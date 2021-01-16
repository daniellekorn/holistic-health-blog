server.post('/api/contact', (req, res) => {
    const { email, name, message } = req.body
    console.log(req.body)
    res.send('success')
  })