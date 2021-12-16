'use strict'
const APP = {
  version: process.env.VUE_APP_VERSION,
  title: process.env.VUE_APP_TITLE,
  documentId: process.env.VUE_APP_DOCUMENT_ID
}

const API_CONFIG = {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  timeout: 100000,
  debug: process.env.NODE_ENV !== 'production'
}

const HTTP_STATUS = {
  ok: '200'
}

export {
  APP,
  API_CONFIG,
  HTTP_STATUS
}
