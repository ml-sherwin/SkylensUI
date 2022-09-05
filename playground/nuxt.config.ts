import { defineNuxtConfig } from 'nuxt'
import SkylensUI from '..'

export default defineNuxtConfig({
  modules: [
    SkylensUI
  ],
  imports: {
    autoImport: false
  },
  skylensUI: {
    addPlugin: false
  }
})
