<template>
  <div v-editable="blok" id="nav">
    <!-- DRAWERS -->
    <v-navigation-drawer v-model="drawer" v-if="$route.path.startsWith('/sports')" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.sports_sidebar"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" v-if="$route.path.startsWith('/housing')" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.housing_sidebar"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" v-if="$route.path.startsWith('/lit')" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.lit_sidebar"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" v-if="$route.path.startsWith('/legal')" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.legal_sidebar"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" v-if="$route.path.startsWith('/missions')" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.missions_sidebar"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-toolbar
      app
      clipped-left
      :color="blok.color"
      :dark="blok.dark"
      :flat="blok.flat"
      :dense="blok.dense"
      :class="blok.helpers"
      :style="blok.style"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" v-if="currentProgram != 'dev'"></v-toolbar-side-icon>
      <v-menu offset-y attact="#logo">
        <v-layout row slot="activator">
          <v-img :src="`/logos/${currentProgram}.png`" width="120px" class="program-menu"></v-img>
          <v-btn flat icon class="ml-2">
            <v-icon color="#bbb">fa-caret-down</v-icon>
          </v-btn>
        </v-layout>
        <v-list>
          <v-list-tile
            v-for="(program, i) in otherPrograms"
            :key="i"
            router
            exact
            ripple
            :to="program.to"
            class="my-3"
          >
            <v-list-tile-content>
              <v-img :src="program.logo" width="120px"></v-img>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <component
        :key="blok._uid"
        v-for="blok in blok.toolbarcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      drawer: null,
      programs: [
        {
          title: "dev",
          to: "/",
          logo: "/logos/dev.png"
        },
        {
          title: "sports",
          to: "/sports",
          logo: "/logos/sports.png"
        },
        {
          title: "housing",
          to: "/housing",
          logo: "/logos/housing.png"
        },
        {
          title: "lit",
          to: "/lit",
          logo: "/logos/lit.png"
        },
        {
          title: "legal",
          to: "/legal",
          logo: "/logos/legal.png"
        }
      ]
    };
  },
  computed: {
    // a computed getter
    currentProgram() {
      // `this` points to the vm instance
      if (this.$route.path.startsWith("/sports")) {
        return "sports";
      } else if (this.$route.path.startsWith("/housing")) {
        return "housing";
      } else if (this.$route.path.startsWith("/lit")) {
        return "lit";
      } else if (this.$route.path.startsWith("/legal")) {
        return "legal";
      } else {
        return "dev";
      }
    },
		otherPrograms() {
			let otherPrograms = this.programs.filter((program) => {
        return program.title != this.currentProgram;
			})
			return otherPrograms;
		}
  }
};
</script>
