<script setup>
  import AddTeamForm from '../components/AddTeamForm.vue'
  import TeamCard from '../components/TeamCard.vue'
  import TeamData from '../data/teams.json'
</script>

<template>
  <main>
    <div id="divForm">
      <img id="exportIcon" src="../assets/img/export3.png" @click="exportTeams()"/>
      <add-team-form ref="addTeamForm" @add-team="setTeams" @emptyError="displayError" />
      <div id="divError"></div>
    </div>
    <div id="divTeam">
      <div v-for="team in allTeams">
        <team-card
          ref="teamCard"
          :id="team.id"
          :name="team.name"
          :description="
            team.description.length > 20
              ? team.description.substring(0, 20) + '...'
              : team.description
          "
          @modify-team="modifyTeam"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      allTeams: [],
      modify: false
    }
  },
  
  methods: {
    setTeams(newTeam) {
      const divError = document.getElementById('divError')
      divError.innerHTML = ''

      if(this.modify === false){
        this.allTeams.push(newTeam)
      }
      else{
        const team = this.allTeams.find((team) => team.id === newTeam.id)
        team.name = newTeam.name
        team.description = newTeam.description
        this.modify = false
      }
      
      console.log(this.allTeams)
    },

    displayError(error) {
      const divError = document.getElementById('divError')
      divError.innerHTML = error
    },

    modifyTeam(id){
      this.modify = true
      const team = this.allTeams.find((team) => team.id === id)

      this.$refs.addTeamForm.id = team.id;
      this.$refs.addTeamForm.name = team.name;
      this.$refs.addTeamForm.description = team.description;
    },

    exportTeams(){
      console.log(JSON.stringify(this.allTeams, null, 2))
    }
  },
  
  created(){
    this.allTeams = TeamData; 
  },
  
  async beforeDestroy(){
    TeamData = this.allTeams;
  }
}
</script>

<style>
main {
  display: flex;
  flex-direction: row;
  width: auto;
  flex-wrap: wrap;
  height: calc(100vh - 70px);
}

#exportIcon {
  position: absolute;
  top: 9%;
  right: 1%;
  background-color: transparent;
  cursor: pointer;
  width: 35px;
}

#divForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

#divTeam {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  flex-wrap: wrap;
}
</style>
