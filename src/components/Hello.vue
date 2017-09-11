<template>
  <div class="container" style="text-align:center">
    <div v-if="countdown === undefined && !set" class="row">
      <div class="column">
        <form id="dateForm">
          <fieldset>
            <label style="color:#7fb6ff">Countdown Date:<br>
              <input v-model="countdown" type="datetime-local">
            </label>
            <span v-bind:class="errorDisplay"><small>{{ errorText }}</small></span>
          </fieldset>
        </form>
        <button @click="setCountdown" class="button button-clear" href="#">Submit</button>
       </div>
    </div>
    <div v-else class="row">
      <div class="column">
        <h3>{{ getCountdownDisplay }}</h3>
        <button @click="newCountdown" class="button button-clear" href="#">New Countdown</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import store from '../store'
let defaultErrorText = 'Invalid input, please try a valid input.'
export default {
  name: 'countdown-view',
  data: () => ({
    countdown: store.fetch(),
    set: false,
    error: false,
    extraError: false,
    errorText: defaultErrorText
  }),
  computed: {
    errorDisplay () {
      return {
        error: this.error,
        hidden: !this.error
      }
    },
    getCountdownDisplay () {
      var s = 'It will be ' + moment(this.countdown).format('dddd, MMMM Do YYYY, h:mm:ss a') + ' '
      return s + moment(this.countdown).fromNow() + ' from now.'
    }
  },
  watch: {
    countdown: {
      deep: true,
      handler: store.save
    }
  },
  methods: {
    setCountdown () {
      if (this.error && !this.extraError) {
        this.errorText += ' (Maybe fully complete the time?)'
        this.extraError = true
      }
      this.error = false
      if (this.countdown === undefined) {
        this.error = true
        return
      }
      this.set = true
    },
    newCountdown () {
      this.errorText = defaultErrorText
      this.countdown = undefined
      this.set = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.button.button-clear {
  color: #7fb6ff;
}
.error {
  visibility: visible;
}
.hidden {
  visibility: hidden;
}
</style>
