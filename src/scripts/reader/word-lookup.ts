import tippy from 'tippy.js'

function flagsToString(flags: string) {
  const pos = {
    n: 'noun',
    v: '',
    t: 'participle',
    a: 'adj.',
    d: 'adv.',
    l: 'article',
    g: 'particle',
    c: 'conj.',
    r: 'prep.',
    p: 'pronoun',
    m: 'numeral',
    i: 'interj.',
    e: 'exclam.',
    u: 'punct.',
    '-': '',
  }[flags[0]]

  const person = {
    '1': '1<sup>st</sup> p.',
    '2': '2<sup>nd</sup> p.',
    '3': '3<sup>rd</sup> p.',
    '-': '',
  }[flags[1]]

  const number = {
    s: 'sing.',
    p: 'plur.',
    d: 'dual',
    '-': '',
  }[flags[2]]

  const tense = {
    p: 'pres.',
    i: 'imperf.',
    r: 'perf.',
    l: 'pluperf.',
    t: 'fut. perf.',
    f: 'fut.',
    a: 'aor.',
    '-': '',
  }[flags[3]]

  const mood = {
    i: '',
    s: 'subj.',
    o: 'opt.',
    n: 'inf.',
    m: 'imp.',
    p: '',
    '-': '',
  }[flags[4]]

  const voice = {
    a: '',
    p: 'passive',
    m: 'middle',
    e: 'medio-passive',
    '-': '',
  }[flags[5]]

  const gender = {
    m: 'm.',
    f: 'f.',
    n: 'n.',
    '-': '',
  }[flags[6]]

  const kase = {
    n: 'nom.',
    g: 'gen.',
    d: 'dat.',
    a: 'acc.',
    v: 'voc.',
    l: 'loc.',
    '-': '',
  }[flags[7]]

  const degree = {
    c: 'comparative',
    s: 'superlative',
  }[flags[8]]

  return [pos, person, number, tense, mood, voice, gender, kase, degree]
    .filter(Boolean)
    .join(' ')
}

const externalLink = `<svg class="w-8 h8 inline-block -mt-1 text-teal-100 px-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"/></svg>`

tippy('[data-lemma]', {
  trigger: 'click',
  content: (span) => {
    const { dataset: d } = span as HTMLSpanElement
    return `<a class="font-bold text-lg" href="https://logeion.uchicago.edu/${
      d.lemma
    }" target="_blank">${d.lemma}${externalLink}</a><br />
    ${d.def ? `${d.def}<br />` : ''}
    <div class="text-xs text-teal-100">${flagsToString(d.flags!)}</div>`
  },
  allowHTML: true,
  interactive: true,
  appendTo: document.body,
})
