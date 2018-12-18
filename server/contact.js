const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '{email}',
    pass: '{password}'
  }
})

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${email} <FROM>`
  const message = {
    from,
    to: 'TO',
    subject: `Contact Us: New message from ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

const handle = (server) => {
  server.use(bodyParser())
  server.post('/api/contact', (req, res) => {
    const { email = '', name = '', message = ' ', phone = '' } = req.body
    const text = `Phone Number: ${phone || 'Not Provided'}
Message: ${message}`
    send({ email, name, text }).then(() => {
      console.log(`${new Date().toString()}: Email Success`)
      res.send('Success')
    }).catch((error) => {
      console.log('Email Error', error)
      res.send('Error')
    })
  })
}

module.exports = handle
