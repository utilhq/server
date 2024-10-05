// consts that can safely be imported in the browser or server (eg. not secrets)
export const AUTH_COOKIE_NAME = 'utilhq_auth_cookie'
export const REFERRAL_LOCAL_STORAGE_KEY = '__UTILHQ_REFERRAL_INFO'
export const ME_LOCAL_STORAGE_KEY = '__UTILHQ_ME'
export const UTILHQ_USAGE_ENVIRONMENT = '__UTILHQ_USAGE_ENVIRONMENT'
export const TRANSACTION_ID_SEARCH_PARAM_KEY = '__UTILHQ_TRANSACTION_ID'
export const SLACK_OAUTH_SCOPES =
  'im:write,chat:write,channels:read,groups:read,users:read,users:read.email'
export const CLIENT_ISOCKET_ID_SEARCH_PARAM_KEY = '__UTILHQ_CLIENT_ISOCKET_ID'

export const NODE_SDK_NAME = '@utilhq/sdk'
export const PYTHON_SDK_NAME = 'utilhq-py'
