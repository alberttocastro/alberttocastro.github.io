<template>
  <div>
    <my-nav />
    <b-container fluid>
      <b-row>
        <!-- <b-col lg="9"> -->
        <div
          id="post-header"
          class="vw-100"
          :style="
            'background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' +
              $page.frontmatter.image +
              ')'
          "
        >
          <b-container>
            <div class="post-header my-5">
              <div class="d-flex justify-content-between mt-3 ml-1">
                <span id="post-date">
                  {{ formatDate($page.frontmatter.date) }}
                </span>
                <span id="post-last-edited" class="ml-auto">
                  {{ lastUpdated }}
                </span>
              </div>
              <h1 class="mt-2" v-if="$page.title">{{ $page.title }}</h1>
              <b-badge
                v-for="tag in $page.frontmatter.tag"
                v-bind:key="tag"
                pill
                variant="white"
                class="text-primary mr-2 px-2 py-1"
                :href="'/tags/' + tag"
              >
                #{{ tag }}
              </b-badge>
            </div>
          </b-container>
        </div>
        <b-container class="shadow-lg pt-5">
          <Content class="mb-5" />
          <div class="my-5 text-center" v-if="$page.frontmatter.devto_url">
            <a 
              :href="$page.frontmatter.devto_url" 
              target="_blank" 
              class="btn-devto-comment"
            >
              {{ $localePath === '/pt/' ? 'Comentar no DEV.to' : 'Comment on DEV.to' }}
            </a>
          </div>
          <div>
            <social-share is-plain />
          </div>
        </b-container>
        <!-- </b-col> -->
        <!-- <b-col lg="3" v-if="false">
          <about-writter :locale="this.$localePath" class="mt-5" />
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavOptions from "../components/NavOptions";
import AboutWritter from "../components/AboutWritter";
import Moment from "moment";
import MyNav from "../components/MyNav.vue";
export default {
  components: { NavOptions, AboutWritter, MyNav },
  computed: {
    lastUpdated() {
      Moment.locale(this.$lang);
      return Moment(this.$page.frontmatter.date).fromNow();
    },
  },
  methods: {
    formatDate(date) {
      let dateObject = new Date(date);
      let locale = this.$site.locales[this.$localePath].lang;

      return dateObject.toLocaleDateString(locale);
    },
  },
};
</script>

<style lang="scss" scoped>
#post-date {
  font-size: 0.8rem;
}

#post-last-edited {
  font-size: 0.8rem;
}

.content__default::v-deep img {
  max-width: 90%;
}

#post-header {
  background-position: center;
}

.btn-devto-comment {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff !important;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
}

.btn-devto-comment:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
  text-decoration: none;
}
</style>
