<template>
  <div class="pokeball"></div>
</template>

<style>
.pokeball {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  margin: 4px;
  border-radius: 50%;
  box-shadow: 0 0 2px #444;
  background: linear-gradient(180deg,rgb(255, 255, 255),rgb(255, 255, 255) 45%,rgb(53, 73, 94) 0,rgb(53, 73, 94) 55%,rgb(65, 184, 131) 0,rgb(65, 184, 131));
  transform: rotate(15deg);
}
</style>
