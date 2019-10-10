<template>
  <div class="home">
    <b-button id='button-open' @click="open">open</b-button>
    <b-modal
      ref="modal-ref"
      hide-footer
    >
      <b-button id='button-close' @click="close">close</b-button>
    </b-modal>
  </div>
</template>


<script>
export default {
  methods: {
    open() {
      console.log('open');
      this.$refs['modal-ref'].show();
    },
    close() {
      console.log('ok');
      this.$refs['modal-ref'].hide();
    },
  },
};
</script>
