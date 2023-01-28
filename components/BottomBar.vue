<template lang="pug">
.bg-black
  .custom-container
    div(class="py-20 px-2 lg:px-0")
      div(class="grid grid-cols-1 md:grid-cols-6 mb-32")
        div(class="md:col-span-1 mb-10 md:mb-0")
          a(href="#")
            img.custom-logo(src="@/assets/svg/logo.svg", alt="Logo")
        div(v-for="(item, i) in props.menu", :key="i", class="md:col-span-1 mt-4 text-sm mb-10 md:mb-0")
          p.text-gray-400.mb-4.font-bold.uppercase {{item.groupTitle}}
          nav.flex.flex-col.text-white.space-y-4
            div(v-for="(itemMenu, c) in item.itens", :key="`a${c}`")
              a(class="hover:text-primary font-bold", :href="itemMenu.link") {{itemMenu.title}}
        div(class="md:col-span-2 mt-6")
          div(class="flex md:justify-end text-white")
            a(class="flex items-center justify-center text-2xl bg-gray-800 hover:text-primary w-12 h-12 rounded-full", href="#")
              i.bi-instagram
            a(class="flex items-center justify-center text-2xl bg-gray-800 hover:text-primary w-12 h-12 rounded-full ml-4", href="#")
              i.bi-twitter
            a(class="flex items-center justify-center text-2xl bg-gray-800 hover:text-primary w-12 h-12 rounded-full ml-4", href="#")
              i.bi-facebook
      .flex
        .flex-1
          nav(class="flex flex-wrap justify-start md:space-x-7 text-gray-400 text-xs")
            span(v-for="(item, i) in props.menuFooter", :key="`b${i}`", class="mb-4 mr-4 md:mb-0 md:mr-0")
              a(class="hover:text-primary", :href="item.link") {{item.title}}
        div(class="flex-none ml-32 md:ml-0 text-gray-400 text-xs")
          p.text-right
            i.material-icons-outlined.mr-1(style="font-size: 13px;") public
            a(class="hover:text-primary", href="#") Brasil
          p.text-right © 2022 Spotify AB
</template>

<script setup>
const props = defineProps({
  menu: Array,
  menuFooter: Array,
})
</script>
