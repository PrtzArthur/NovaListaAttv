<script setup>
const props = defineProps({
  tarefa: String
})

const emit = defineEmits(['editar', 'deletar', 'concluir'])
</script>

<template>
  <li>
    <span class="texto">{{ tarefa }}</span>
    <span>
      <a href="#" @click.prevent="emit('editar', tarefa)">Edit</a>
      <a href="#" @click.prevent="emit('deletar', tarefa)">Delete</a>
      <a href="#" @click.prevent="emit('concluir', tarefa)">Concluir</a>
    </span>
  </li>
</template>

<style scoped>
span a {
  color: brown;
  margin-left: 10px;
}
</style>