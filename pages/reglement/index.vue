<template>
  <section id="reglements">
    <h3 class="title">RÈGLEMENT</h3>
    <span class="reglement-description">
      Vous retrouverez ci-dessous les différentes catégories qu'aborde ce règlement. Il est bien entendu amené à changer.
      Vous devez vous en tenir informés bien que nous vous ferons une annonce si c'est le cas.
      Vous devez connaître le règlement sur le bout des doigts mais n'hésitez pas à le relire si vous avez un doute ou avant de faire une scène..
    </span>
    <div class="buttons">
      <nuxt-link :append="true" to="general">
        <button class="btn btn-sm">Règles générales <i class="el-icon-right bold"/></button>
      </nuxt-link>
      <nuxt-link :append="true" to="legal">
        <button class="btn btn-sm">Règles sur le Légal <i class="el-icon-right bold"/></button>
      </nuxt-link>
      <nuxt-link :append="true" to="illegal">
        <button class="btn btn-sm">Règles sur l'illégal <i class="el-icon-right bold"/></button>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts" src="./script.ts"/>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--grid-gap-static-sm);
}

#reglements {
  gap: var(--grid-gap-static-md);
  margin-top: var(--grid-gap-static-md);
  display: flex;
  flex-direction: column;
  max-width: 1200px;
}

.reglement-description {
  color: var(--grey400);
  font-size: var(--font-size-2);
}
</style>
