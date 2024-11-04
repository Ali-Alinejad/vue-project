<template>
  <Chart
    :size="{ width: 950, height: 320 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Bar :dataKeys="['name', 'pl']" :barStyle="{ fill: '#886199 ' }" />
      <Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: '#b0b0b0' }" />
      <Bar :dataKeys="['name', 'inc']" :barStyle="{ fill: '#f9f1f2' }" />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#741c8c"
        bgColor="black"
        :config="{
          pl: { color: '#741c8c' },
          avg: { color: '#b0b0b0' },
          inc: { color: '#f2f2f2' },
        }"
      />
    </template>
  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Bar, Tooltip } from 'vue3-charts'
import { plByMonths } from './data2'

export default defineComponent({
  name: 'BarChart',
  components: { Chart, Grid, Bar, Tooltip },
  setup() {
    const data = ref(plByMonths)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    })

    const axis = ref({
      primary: {
        type: 'band',
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8,
      },
    })

    return { data, direction, margin, axis }
  },
})
</script>

<style scoped></style>
