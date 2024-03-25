<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue'
const { $client } = useNuxtApp()

const countries = await $client.countries.useQuery()
</script>

<template>
  <div class="flex items-center p-1 bg-gray-100 rounded-full relative" style="z-index: 2000;">
    <!-- Personer -->
    <a-dropdown :trigger="['click']" :align="{offset: [-4, -40]}">
      <a class="p-2 px-4 rounded-full truncate hover:cursor-pointer hover:bg-gray-200" @click.prevent>
        <div class="font-bold">Personer</div>
        <div class="italic text-gray-500">
          Tilføj personer
        </div>
      </a>
      <template #overlay>
        <div class="p-5 bg-white rounded-xl" style="padding-top: 60px">
          <div class="mb-5 text-gray-500 text-lg">
            Vælg antal personer
          </div>
          <div class="flex items-center justify-between">
            <div class="me-5">
              <div class="text-lg">
                Voksne
              </div>
              <div class="text-gray-500">
                18 år eller ældre
              </div>
            </div>
            <div class="flex items-center text-lg">
              <div>
                <a-button shape="circle" type="primary" danger>
                  -
                </a-button>
              </div>
              <div class="px-5">
                0
              </div>
              <div>
                <a-button shape="circle" type="primary" danger>
                  +
                </a-button>
              </div>
            </div>
          </div>
          <hr class="my-5">
          <div class="flex items-center justify-between">
            <div class="me-5">
              <div class="text-lg">
                Børn
              </div>
              <div class="text-gray-500">
                0-17 år
              </div>
            </div>
            <div class="flex items-center text-lg">
              <div>
                <a-button shape="circle" type="primary" danger>
                  -
                </a-button>
              </div>
              <div class="px-5">
                0
              </div>
              <div>
                <a-button shape="circle" type="primary" danger>
                  +
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </a-dropdown>

    <!-- Destination -->
    <a-dropdown :trigger="['click']" :align="{offset: [-4, -40]}">
      <a class="p-2 px-4 rounded-full truncate hover:cursor-pointer hover:bg-gray-200" @click.prevent>
        <div class="font-bold">Destination</div>
        <div class="italic text-gray-500">
          Søg destinationer
        </div>
      </a>
      <template #overlay>
        <div class="p-5 bg-white rounded-xl" style="padding-top: 60px">
          <div class="mb-5 text-gray-500 text-lg">
            Vælg et land herunder<br>
          </div>
          <div class="flex flex-wrap gap-4">
            <div v-for="(country, index) in countries.data.value?.countries" :key="index" class="p-4 w-2/5 rounded-lg flex flex-col items-center justify-center border border-gray-200 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
              <div class="text-lg font-bold">
                {{ country.name }}
              </div>
              <div>
                ({{ country.destinations.length }})
              </div>
            </div>
          </div>
        </div>
      </template>
    </a-dropdown>

    <!-- Spacer -->
    <div class="flex-grow" />

    <!-- Søg cta -->
    <a-button shape="circle" size="large">
      <template #icon>
        <SearchOutlined />
      </template>
    </a-button>
  </div>
</template>
<style scoped>
/* lil' hack for setting active background color and button style */
.ant-dropdown-open {
  background-color: white;
}
</style>
