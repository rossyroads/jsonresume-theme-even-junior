import { html } from '@rbardini/html'

const TOTAL_CIRCLES = 5

export default function Rating(fullCircles = 0) {
  // Ensure we never render more than TOTAL_CIRCLES
  const filled = Math.min(fullCircles, TOTAL_CIRCLES)

  return html`
    <div class="circle-rating">
      <ul class="circle-rating-list">
        ${Array.from({ length: TOTAL_CIRCLES }).map((_, idx) => {
          // idx is zero‑based, so compare with `filled`
          const isFull = idx < filled
          const circle = isFull ? '<li class="circle full"></li>' : '<li class="circle"></li>'
          return html`${circle}`
        })}
      </ul>
    </div>
  `
}
