import sendTemplate from '.'

export default sendTemplate(
  'ye@utilhq.com',
  {
    resetUrl: 'https://utilhq.com/reset-password?seal=seal123',
  },
  { preview: true }
)
