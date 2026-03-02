import { atom } from 'jotai'

export const todosAtom = atom([])

export const filterAtom = atom('all')

export const filteredTodosAtom = atom(get => {
  const todos = get(todosAtom)
  const filter = get(filterAtom)
  if (filter === 'active') return todos.filter(t => !t.completed)
  if (filter === 'completed') return todos.filter(t => t.completed)
  return todos
})

export const activeCountAtom = atom(get =>
  get(todosAtom).filter(t => !t.completed).length
)
