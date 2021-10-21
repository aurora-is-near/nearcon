export function onClick (behavior, fn) {
  document.querySelector('body').addEventListener('click', event => {
    const thing = event.target.closest(`[data-behavior=${behavior}]`)
    if (thing) fn(event)
  })
}

export const find = selector => document.querySelector(`[data-behavior="${selector}"]`)
