<template>
  <Chart
    :size="{ width: 470, height: 300 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis"
  >
    <template #layers>
      <Grid strokeDasharray="20,3" />
      <Area
        :dataKeys="['name', 'pl']"
        type="monotone"
        :areaStyle="{ fill: 'url(#grad)' }"
      />
      <Line
        :dataKeys="['name', 'pl']"
        type="monotone"
        :lineStyle="{ stroke: '#9f7aea', strokeWidth: 2 }"
      />
      <Marker
        :value="1100"
        label="average"
        class="text-sm"
        color="black"
        strokeWidth="1"
        strokeDasharray="7 7"
      />
      <defs>
        <linearGradient id="grad" gradientTransform="rotate(90)">
          <stop offset="30%" stop-color="white" stop-opacity="1" />
          <stop offset="100%" stop-color="white" stop-opacity="0.6" />
        </linearGradient>
      </defs>
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        backgroundColor="#333"
        :config="{
          pl: {
            color: '#9f7aea',
            label: 'PL Value: ',
          },
          avg: { hide: true },
          inc: { hide: true },
        }"
        :content="tooltipContent"
      />
    </template>
  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Chart, Grid, Line, Area, Marker, Tooltip } from 'vue3-charts'
import { plByMonth } from './data'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line, Area, Marker, Tooltip },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 5,
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
        ticks: 12,
      },
    })

    const tooltipContent = (value: any) => {
      return `PL Value: ${value.pl}`
    }

    return { data, direction, margin, axis, tooltipContent }
  },
})
</script>

<style scoped></style>
