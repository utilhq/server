import sendTemplate from '.'

export default sendTemplate(
  'accounts@utilhq.com',
  {
    message: 'A charge of $10 has been refunded.',
    title: 'Refund over threshold',
    metadata: {
      orgSlug: 'demo',
      createdAt: 'Apr 18, 2022, 11:11 AM',
    },
    failedDetails: [
      {
        error: 'No such Slack user in your workspace: @not_a_person',
        to: '@not_a_person',
        method: 'SLACK',
      },
      {
        error:
          'The utilhq app is not installed in this Slack channel: #utilhq-notifications',
        to: '#utilhq-notifications',
        method: 'SLACK',
      },
    ],
  },
  { preview: true }
)
