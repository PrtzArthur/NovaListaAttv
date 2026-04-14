import { ref, computed } from 'vue'

export function useTarefas() {
  const tarefas = ref(['Tarefa 1', 'Tarefa 2', 'Tarefa 3'])

  const novaTarefa = ref('')
  const posAlterada = ref(-1)

  function addTarefa() {
    if (posAlterada.value == -1) {
      if (novaTarefa.value.trim().length >= 5) {
        tarefas.value.push(novaTarefa.value)
      }
    }
    else {
      tarefas.value.splice(posAlterada.value, 1, novaTarefa.value);
      posAlterada.value = -1;
    }

    novaTarefa.value = ''
  }

  function delTarefa(item) {
    const posicao = tarefas.value.indexOf(item)
    tarefas.value.splice(posicao, 1)
  }

  function editTarefa(item) {
    posAlterada.value = tarefas.value.indexOf(item)
    novaTarefa.value = item;
  }

  function ordenar() {
    tarefas.value.sort()
  }

  function concluirTarefa(item) {
    const posicao = tarefas.value.indexOf(item)
    const lista = document.querySelectorAll(".texto")
    lista[posicao].classList.add("concluida")
  }

  const filtro = ref('')

  const tarefasFiltradas = computed (() => {
    if (filtro.value.trim().length > 0) {
      return tarefas.value.filter( item => item.includes(filtro.value));
    }
    else {
      return tarefas.value; 
    }
  })

  return {
    tarefas,
    novaTarefa,
    posAlterada,
    filtro,
    tarefasFiltradas,
    addTarefa,
    delTarefa,
    editTarefa,
    ordenar,
    concluirTarefa
  }
}