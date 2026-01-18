<template>
  <div class="page">
    <header class="header">
      <h1 class="header-title">
        <span class="title-line">ROLLING SLOTS</span>
        <span class="title-line">CASINO</span>
      </h1>
      <div class="header-line"></div>
      <p class="header-subtitle">ROLLING SLOTS CASINO</p>
    </header>

    <main class="main-content">
      <h2 class="main-title">ROLLING SLOTS CASINO</h2>
      
      <div class="buttons-top">
        <button class="btn btn-secondary">EINLOGGEN</button>
        <button class="btn btn-primary">ANMELDEN</button>
      </div>

      <h3 class="section-title">Rolling Slots Casino Schnellüberprüfung</h3>

      <table class="info-list">
        <tbody>
          <InfoRow icon="calendar" label="Eröffnet" value="2021" />
          <InfoRow icon="crown" label="Beste Funktion" value="Große Auswahl an Spielen" />
          <InfoRow icon="phone" label="Mobile App" value="Keine" />
          <InfoRow icon="dollar" label="Mindesteinzahlung" value="$20" />
          <InfoRow icon="clock" label="Auszahlungsgeschwindigkeit" value="0-2 Tage" />
          <InfoRow icon="scale" label="Lizenzierung" value="Curacao eGaming" />
          <InfoRow icon="chart" label="Auszahlungsquote" value="96,3%" />
          <InfoRow icon="monitor" label="Angebotene Spiele" value="Über 3.000" />
          <InfoRow icon="star" label="Software" value="Booming Games, Pragmatic Play, Relax Gaming & mehr" />
        </tbody>
      </table>

      <div class="buttons-bottom">
        <button class="btn btn-secondary">EINLOGGEN</button>
        <button class="btn btn-primary">ANMELDEN</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import InfoRow from '~/components/InfoRow.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #f2f2f2;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.header {
  text-align: center;
  background-color: #ffffff;
  padding: 60px 40px 40px;
}

.header-title {
  font-size: 48px;
  font-weight: 700;
  color: #000;
  margin: 0 0 30px;
  text-transform: uppercase;
  line-height: 1.2;
}

.title-line {
  display: block;
}

.header-line {
  width: 66.67%;
  height: 1px;
  background-color: #000;
  margin: 0 auto 20px;
}

.header-subtitle {
  font-size: 14px;
  color: #999;
  margin: 0;
  text-transform: uppercase;
}

.main-content {
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 40px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

.main-title {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin: 0 0 30px;
  text-transform: uppercase;
  text-align: center;
}

.buttons-top,
.buttons-bottom {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 30px 0;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-secondary {
  background-color: #555;
  color: #fff;
}

.btn-primary {
  background-color: #d32f2f;
  color: #fff;
}

.section-title {
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin: 0 0 20px;
  text-align: center;
}

.info-list {
  margin: 20px 0;
  width: 100%;
  border: 1px solid #000;
  border-collapse: collapse;
  table-layout: fixed;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .header {
    padding: 40px 20px 20px;
  }

  .header-title {
    font-size: 32px;
  }

  .header-line {
    width: 80%;
  }

  .main-content {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  .main-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 18px;
  }

  .buttons-top,
  .buttons-bottom {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
