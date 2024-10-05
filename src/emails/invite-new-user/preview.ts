import sendTemplate from '.'

export default sendTemplate(
  'accounts@utilhq.com',
  {
    organizationName: 'utilhq',
    signupUrl: 'http://localhost:3000/accept-invitation?token=abcd',
    preheader: "You've been invited to join Foo Corp on utilhq.",
  },
  { preview: true }
)
