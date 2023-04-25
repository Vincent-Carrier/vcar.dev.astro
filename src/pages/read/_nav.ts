import { CollectionEntry, getCollection } from 'astro:content'
import { groupBy } from 'lodash-es'

type Treebank = CollectionEntry<'treebank'>

const works = groupBy(
  await getCollection('treebank'),
  (tb: Treebank) => tb.data.title
)
export default works

function compareChunks(a: Treebank, b: Treebank) {
  function chunkVal(chunkId: string) {
    return chunkId
      .split('.')
      .map((n) => parseInt(n, 10))
      .reduce((agg, n, i) => agg + n * 10 ** (10 - i * 2), 0)
  }

  const x = chunkVal(a.data.chunkId)
  const y = chunkVal(b.data.chunkId)

  return x - y
}

for (let chunks of Object.values(works)) {
  chunks.sort(compareChunks)
}
