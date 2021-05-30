<template>
  <b-nav-item-dropdown
    :text="this.$themeConfig.locales[this.$localePath].selectText"
  >
    <b-dropdown-item
      v-for="lang in this.languages"
      v-bind:key="lang.localePath"
      href="#"
      @click="changeLocale(lang.localePath)"
      :disabled="!doesPageExist(lang.localePath)"
    >
      {{ lang.label }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  computed: {
    languages() {
      let localesConfig = this.$themeConfig.locales;
      let locales = Object.keys(localesConfig);

      let languages = locales.map((locale) => {
        let language = {
          localePath: locale,
          selectText: localesConfig[locale].selectText,
          label: localesConfig[locale].label,
          ariaLabel: localesConfig[locale].ariaLabel,
        };
        return language;
      });

      return languages;
    },
  },
  methods: {
    changeLocale(locale) {
      let localePath = this.$localePath;
      let pageUri = this.$page.path;

      let destination = locale + this.removeLocaleFromUrl(pageUri, localePath);

      window.location = destination;
    },
    doesPageExist(locale) {
      let pageUri = this.$page.path;
      let rawUrl = this.removeLocaleFromUrl(pageUri, this.$localePath);

      let exists = this.$site.pages.reduce(
        (match, current) => match || current.path == locale + rawUrl,
        false
      );

      return exists;
    },
    removeLocaleFromUrl: (url, locale) =>
      url.substring(locale.length, url.length),
  },
};
</script>

<style lang="scss" scoped>
.nav-item > .nav-link {
  padding: 0 0 !important;
}
</style>
