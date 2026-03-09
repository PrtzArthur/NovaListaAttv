<script setup>
  import { ref } from 'vue'
  const tarefas = ref(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']);

  const novaTarefa = ref('');

  function addTarefa() {
    if (novaTarefa.value.trim().length >= 5) {
      tarefas.value.push(novaTarefa.value);
    }
    novaTarefa.value = '';
  }

  function delTarefa(item) {
    const posicao = tarefas.value.indexOf(item);
    tarefas.value.splice(posicao, 1)
  }

  function ordenar() {
    tarefas.value.sort();
  }
</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa">
    <button @click="addTarefa">Add</button>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa">
        {{ tarefa }}
        <span> 
          <a href="#" @click.prevent="editTarefa(tarefa)">Edit</a>
          <a href="#" @click.prevent="delTarefa(tarefa)">Delete</a>
        </span>
      </li> 
    </ul>
    <button @click="ordenar">Ordenar</button>
  </div>
</template>

<style scoped>
</style>
