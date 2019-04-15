<template>
  <div class="power-buttons">
    <div class="Power">Power</div>
    <div class="power-indication-lights">
      <div class="power-light-low"></div>
      <div class="power-light-medium"></div>
      <div class="power-light-high"></div>
    </div>
  </div>
</template>

<style lang="scss">

.power-buttons {
  position: relative;
  width: 400px;
  height: 85px;
  display: flex;
  background: #266d4d;
  border-radius: 30px 0 0;

  &::after {
    display: block;
    width: 240px;
    height: 100px;
    position: absolute;
    top: 50px;
    right: -30px;
    background: #41b883;
    background: linear-gradient(90deg,#41b883,#41b883 210px,transparent 0,transparent);
    border-radius: 160px 0 0 0;
    content: '';
  }
}

.Power {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  color: white;
  background: linear-gradient(145deg,#35495e,#1c2631),#35495e;
  border: 4px solid #dcdcdc;
  border-radius: 50%;
  margin: 15px;
  font-family: VT323,monospace;
  cursor: pointer;
  outline: none;
}

.power-indication-lights {
  display: flex;
  margin-top: 15px;

  [class*="power-light"] {
    width: 20px;
    height: 20px;
    background: green;
    border-radius: 50%;
    margin-right: 8px;
  }

  [class*="light-low"] {
    background: #c12525;
  }

  [class*="light-medium"] {
    background: #bdad32;
  }

  [class*="light-high"] {
    background: #00e780;
  }
}

</style>
