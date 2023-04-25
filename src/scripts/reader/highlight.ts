import $, { Cash } from 'cash-dom'

type Sentence = NodeListOf<HTMLSpanElement>

$('[data-head]').on({
  mouseenter: (ev: MouseEvent) =>
    $deps(ev.target! as HTMLSpanElement).addClass('highlight'),
  mouseleave: (ev: MouseEvent) =>
    $deps(ev.target! as HTMLSpanElement).removeClass('highlight'),
})

function $deps(word: HTMLSpanElement): Cash {
  return $(Array.from(deps(word)))
}

function* deps(
  word: HTMLSpanElement,
  opacity: number = 1
): Generator<HTMLSpanElement> {
  const ds = Array.from(
    word
      .closest('.sentence')!
      .querySelectorAll(`[data-head="${word.dataset.id}"]`) as Sentence
  )
  yield word
  for (const d of ds) {
    //@ts-ignore
    d.style = `--tw-bg-opacity: ${opacity};`
    yield* deps(d, opacity - 0.15)
    yield d
  }
}
