<template>
  <section id="reglements">
    <h3 class="title">RÈGLEMENT général</h3>
    <span class="reglement-description">
      Les règles générales sont amenées à évoluer. Si un changement survint, il vous sera annoncé.
Cependant, tenez-vous au courant tout de même en regardant le règlement régulièrement et surtout si vous avez des doutes.
    </span>
    <span v-if="$fetchState.pending || !loaded">
      <SkeletonTabs/>
    </span>
    <el-tabs class="cap" v-model="currentTabs" v-if="!$fetchState.pending && loaded">
      <client-only v-for="(tab, index) in tabs" :key="index">
        <el-tab-pane  :lazy="true" :label="tab.name" :name="tab.name">
          <template #label>
            <NuxtLink class="center w100" :append="isAppend" :to="tab.to || tab.name">
              {{tab.name}}
            </NuxtLink>
          </template>
          <NuxtChild/>
        </el-tab-pane>
      </client-only>
    </el-tabs>
  </section>
</template>

<script lang="ts" src="./index.ts"/>

<style lang="scss" scoped>
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
