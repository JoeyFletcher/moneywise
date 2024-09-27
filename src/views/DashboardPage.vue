<template>
  <v-app>
    <UserSidebar :drawer="drawer" @update:drawer="drawer = $event" />

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <DashboardCard title="Metric 1" value="123" icon="mdi-chart-line" />
          </v-col>
          <v-col cols="12" md="4">
            <DashboardCard title="Metric 2" value="456" icon="mdi-currency-usd" />
          </v-col>
          <v-col cols="12" md="4">
            <DashboardCard title="Metric 3" value="789" icon="mdi-account-group" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UserSidebar from '@/components/UserSidebar.vue'
import DashboardCard from '@/components/DashboardCard.vue'

export default {
  components: {
    UserSidebar,
    DashboardCard
  },
  data() {
    return {
      drawer: true // Controls the visibility of the sidebar
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  width: 250px;
  transition: width 0.3s ease;
}

.v-navigation-drawer--mini {
  width: 64px;
}

.v-app-bar {
  background-color: #1976D2; /* Primary color */
}

.v-container {
  padding-top: 20px;
}

.v-col {
  margin-bottom: 20px;
}

.retraction-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
