import { html } from '@rbardini/html'
import Rating from './rating.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['languages']} languages
 * @returns {string | false}
 */
export default function Languages(languages = []) {
  return (
    languages.length > 0 &&
    html`
      <section id="languages">
        <h3>Languages</h3>
        <div class="grid-list">
          ${languages.map(
            ({ fluency, language }) =>
              html`<div class="h5-bold">${language && html`<div>${language}</div>`} ${Rating(fluency)}</div>`,
          )}
        </div>
      </section>
    `
  )
}
