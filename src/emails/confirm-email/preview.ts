import sendTemplate from '.'

export default sendTemplate(
  'accounts@utilhq.com',
  {
    confirmUrl: 'http://localhost:3000/confirm-email?token=abcd',
    isEmailChange: false,
  },
  { preview: true }
)
