import $ from 'cash-dom'
import ky from 'ky'

const urn = $('.greek').data()!.urn
const perseus = ky.create({ prefixUrl: 'https://www.perseus.tufts.edu/hopper' })
const parser = new DOMParser()

$('[data-subdoc]').on('click', async (ev: MouseEvent) => {
  const span = ev.target as HTMLSpanElement
  const subdoc = span.dataset.subdoc
  try {
    const xml = await perseus
      .get('CTS', {
        searchParams: {
          request: 'GetPassage',
          urn: `${urn}.perseus-eng2:${subdoc}`,
        },
      })
      .text()
    const doc = parser.parseFromString(xml, 'application/xml')
    if (xml.startsWith('<cts:CTSError')) {
      throw new Error($('message', doc).text())
    }
    $('<div class="text-xs text-teal-700 whitespace-normal px-4">')
      .data('translation', subdoc)
      .append($('p', doc).filter((_, p) => p.textContent!.trim() !== ''))
      .insertAfter(span.closest('p'))
  } catch (e) {
    console.error(e)
  }
})
