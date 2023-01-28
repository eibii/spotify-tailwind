<template lang="pug">
div
  top-bar(:menu="menu")
  slot
  bottom-bar(:menu="menuGroups", :menuFooter="menuFooter")
</template>

<script setup>
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
useMeta({
  title: "Spotify - Tailwind",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Projeto visa demoonstrar a aplicação do Tailwind a home do Spotify",
    },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
    },
  ],
});
let menu = [
  {
    title: "Premium",
    link: "#",
  },
  {
    title: "Suporte",
    link: "#",
  },
  {
    title: "Baixar",
    link: "#",
  },
  {
    divider: true,
  },
  {
    title: "Inscreva-se",
    link: "#",
  },
  {
    title: "Entrar",
    link: "#",
  },
];

let menuGroups = [
  {
    groupTitle: "Empresa",
    itens: [
      {
        title: "Sobre",
        link: "#",
      },
      {
        title: "Empregos",
        link: "#",
      },
      {
        title: "For the Record",
        link: "#",
      },
    ],
  },
  {
    groupTitle: "Comunidades",
    itens: [
      {
        title: "Para Artistas",
        link: "#",
      },
      {
        title: "Desenvolvedores",
        link: "#",
      },
      {
        title: "Publicidade",
        link: "#",
      },
      {
        title: "Investidores",
        link: "#",
      },
      {
        title: "Fornecedores",
        link: "#",
      },
    ],
  },
  {
    groupTitle: "Links Úteis",
    itens: [
      {
        title: "Suporte",
        link: "#",
      },
      {
        title: "Player da Web",
        link: "#",
      },
      {
        title: "Aplicativo móvel grátis",
        link: "#",
      },
    ],
  },
];

let menuFooter = [
  {
    title: "Legal",
    link: "#",
  },
  {
    title: "Centro de Privacidade",
    link: "#",
  },
  {
    title: "Política de privacidade",
    link: "#",
  },
  {
    title: "Cookies",
    link: "#",
  },
  {
    title: "Sobre anúncios",
    link: "#",
  },
];
</script>