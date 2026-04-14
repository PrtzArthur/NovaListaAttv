<script setup>
import { ref, computed } from 'vue'
import Item from './components/Item.vue'
import { useTarefas } from './composables/useTarefas.js'

const {
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
} = useTarefas()

</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" />  
    <button @click="addTarefa">Add</button>
    <ul>
      <li v-for="tarefa in tarefasFiltradas" :key="tarefa">
        <span class="texto">{{ tarefa }}</span>
        <span>
          <a href="#" @click.prevent="editTarefa(tarefa)">Edit</a>
          <a href="#" @click.prevent="delTarefa(tarefa)">Delete</a>
          <a href="#" @click.prevent="concluirTarefa(tarefa)">Concluir</a>
        </span>
      </li>
    </ul>
    <button @click="ordenar">Ordenar</button>
    <input type="text" v-model="filtro" placeholder="Filtrar tarefas..." /> <button @click="tarefasFiltradas">Filtrar</button>
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
ul {
  list-style-type: none;
}
</style>