<template lang="pug">
//- Navbar
.bg-black
  .custom-container
    div(class="flex py-5 px-2 lg:px-0")
      .flex-none
        a(href="#")
          img.custom-logo(
            src="@/assets/svg/logo.svg",
            alt="Logo")

      .flex-1.my-auto
        div(class="md:hidden text-white")
          .flex.justify-end
            i.material-icons-outlined menu

        nav(class="hidden md:flex justify-end space-x-10")
          span(v-for="(item, i) in props.menu", :key="i")
            a(v-if="!item.divider", :href="item.link", class="justify-self-auto text-base font-medium text-white hover:text-primary") {{ item.title }}
            .justify-self-auto.text-base.font-medium.text-white(v-else) |
</template>

<script setup>
const props = defineProps({
  menu: Array
})
</script>