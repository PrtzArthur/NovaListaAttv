<script setup>
import { ref } from 'vue'
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

</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" />
    <button @click="addTarefa">Add</button>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa">
        <span class="texto">{{ tarefa }}</span>
        <span>
          <a href="#" @click.prevent="editTarefa(tarefa)">Edit</a>
          <a href="#" @click.prevent="delTarefa(tarefa)">Delete</a>
          <a href="#" @click.prevent="concluirTarefa(tarefa)">Concluir</a>
        </span>
      </li>
    </ul>
    <button @click="ordenar">Ordenar</button>
  </div>
</template>

<style scoped>
div.container ul li span a {
  color: brown;
  margin-left: 10px;
}

.concluida {
  text-decoration: line-through;
  color: gray;
  opacity: 0.6;
}

</style>
