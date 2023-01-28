<template lang="pug">
//- Content
main(class="flex flex-col justify-center text-center text-primary bg-secondary bg-img-mobile md:bg-img-tablet lg:bg-img-desk bg-215% sm:bg-153% lg:bg-175% bg-banner-mobile md:bg-banner-tablet lg:bg-banner-desk py-72 px-4")
  h1(class="text-5xl md:text-9xl font-bold mb-10 max-w-5xl mx-auto leading-none") Escutar muda tudo
  p(class="text-md md:text-lg mb-10") Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
  a(class="bg-primary text-secondary uppercase text-sm rounded-full px-10 py-3 font-bold max-w-xl mx-auto hover:scale-105", href="#") Baixe o Spotify Free
</template>

<script setup>
  definePageMeta({
    layout: 'home',
  })
</script>