<template>
  <main>
    <div class="wrapper">
      <div class="box">
        <div class="logo-box">
          <LogoSmall/>
        </div>
      </div>
      <div class="box">
        <h1 class="title">Changement de site</h1>
        <h2 class="subtitle">Le serveur gta 5 Sigma rp à changer de nom pour Primea rp. Vous pouvez retrouver le nouveau site web
          et la page top-serveurs de primea ci-dessous.</h2>
        <div class="footer">
          <a href="https://top-serveurs.net/gta/primearp" role="button" class="btn-outlined">Top-serveurs</a>
          <a href="https://primea-rp.fr/" role="button" class="btn">Site web</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import LogoSmall from "@/components/common/LogoSmall/index.vue"
export default Vue.extend({
  name: 'IndexPage',
  components: {LogoSmall},
})
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
.logo-box {
  max-width: 180px;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 56px;
}
.box:nth-child(1){
  background: var(--primary);
}
.box:nth-child(2){
  padding: 0 32px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6px;
  grid-row-gap:6px;
  height: 100%;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 24px;

  a {
    width: 100%;
  }
}

@media (max-width: 900px){
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-size: 24px;
  }
  .subtitle {
    font-size: 16px;
  }
  .logo-box {
    max-width: 120px;
  }
  .footer {
    flex-direction: column;
  }
}
</style>
