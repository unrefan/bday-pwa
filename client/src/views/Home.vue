<template>
  <article>
    <h3 class="flex justify-between items-center mb-8">
      <span>Недельный список</span>
      <plus-button @click="openModal" />
    </h3>

    <ul>
      <li
        v-for="bday in bdays"
        :key="bday.name"
        class="bg-indigo-500 py-2 w-full rounded-lg px-4 text-white mb-2"
      >
        <div class="flex justify-between items-center">
          <span>{{ bday.name }}</span>
          <span>{{ bday.date }}</span>
        </div>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import PlusButton from "../components/PlusButton.vue";

export default defineComponent({
  components: {PlusButton},
  setup() {
        const bdays = ref([
          {name: 'test', date: 'date'},
          {name: 'test2', date: 'date'},
        ]);
        const props = ['name'];
        const opts = {multiple: true};

        return {
          bdays,
          props,
          opts
        }
  },
  methods: {
    openModal() {
      const supported = ('contacts' in navigator && 'ContactsManager' in window);
      if (supported) {
        return this.getContacts();
      }
      // todo open input modal
      console.log('not supported')
    },
    async getContacts() {
      try {
        const contacts = await navigator.contacts.select(this.props, this.opts);
        this.handleResults(contacts);
      } catch (ex) {
        console.error(ex);
      }
    },
    handleResults(contacts) {
      console.log(contacts);
    }
  }
})
</script>
