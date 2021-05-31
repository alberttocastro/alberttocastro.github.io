<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" >
        <div class="text-center">
          <h4>{{ texts[locale].title }}</h4>
        </div>
      </b-col>
      <b-col cols="12" md="5"  lg="12">
        <div class="text-center">
          <img
            src="../assets/aboutwritter.png"
            alt="alberttocastro"
            class="w-75 w-md-50 w-lg-75"
          />
        </div>
      </b-col>
      <b-col class="px-0" cols="12" md="7" lg="12">
        <div class="mt-3 text-justify">
          <p>{{ texts[locale].description }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: () => ({
    texts: {
      "/": {
        title: "About the writter",
        description:
          "I'm a web developer passionate about technology. My heart beats faster for back-end development, but I also like front-end. Currently, I'm about to finish my Computer Science Associate Degree, and I work as a developer, in personal projects, and also as an employee. I love learning, and I always look for challenges that can consolidate my knowledge, and that may teach me a little about entrepreneurship.",
      },
      "/pt/": {
        title: "Sobre o autor",
        description:
          "Sou um desenvolvedor web apaixonado por tecnologia. Meu coração bate mais forte por back-end, mas também gosto muito de front-end. Atualmente estou terminando o curso de Ciência da Computação, e já atuo como desenvolvedor, tanto em projetos pessoais, como contratado. Gosto muito de aprender, e não paro de buscar desafios que me consolidem meu conhecimento, e que me ensinem um pouco sobre empreendedorismo.",
      },
    },
  }),
  props: {
    locale: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  border-color: var(--primary);
  border-width: 8px;
  border-style: solid;
}
</style>
