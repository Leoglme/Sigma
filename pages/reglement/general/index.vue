<template>
  <section id="reglements-general">
    <h1 class="title">{{ reglement.name }}</h1>
    <span class="reglement-description" v-html="description"/>
    <span v-if="$fetchState.pending || !loaded">
      <SkeletonTabs/>
    </span>
    <el-tabs class="cap" v-model="currentTabs" v-if="!$fetchState.pending && loaded">
      <client-only v-for="(tab, index) in tabs" :key="index">
        <el-tab-pane  :lazy="true" :label="tab.name" :name="tab.to">
          <template #label>
            <NuxtLink class="center w100" :append="isAppend" :to="tab.to || tab.name">
              {{tab.name}}
            </NuxtLink>
          </template>
          <NuxtChild :defaultTab="defaultTab"/>
        </el-tab-pane>
      </client-only>
    </el-tabs>
  </section>
</template>

<script lang="ts" src="./index.ts"/>

<style lang="scss" scoped src="../reglement.scss"/>
