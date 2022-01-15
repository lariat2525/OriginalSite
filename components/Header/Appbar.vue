<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        Video Collector
        <v-icon>mdi-video-box</v-icon>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'ApplicationBar',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Top Page',
          to: '/'
        },
        {
          icon: 'mdi-video',
          title: 'Contents',
          to: '/contents'
        }
      ],
    }
  }
}
</script>