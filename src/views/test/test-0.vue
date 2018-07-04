<template>
  <div class="page test-page">
    test router - 0
    <div class="content">
      <!-- mdc-button -->
      <button class="mdc-button">
        button
      </button>
      <button class="mdc-button">
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
      </button>
      <button class="mdc-button mdc-button--raised">
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
      </button>
      <button class="mdc-button mdc-button--raised mdc-button--dense">
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
      </button>
      <button class="mdc-button mdc-button--unelevated">
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
      </button>
      <button class="mdc-button mdc-button--outlined">
        <i class="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
        Button
      </button>
      <!-- mdc-radio -->
      <div class="mdc-form-field">
        <div class="mdc-radio">
          <input id="radio-1" class="mdc-radio__native-control"  type="radio"  name="radios" checked />
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
        </div>
        <label for="radio-1">Radio 1</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MDCRipple } from '@material/ripple'
import { MDCFormField } from '@material/form-field'
import { MDCRadio } from '@material/radio'

export default Vue.extend({
  name: 'test-index',
  mounted() {
    document.querySelectorAll('.mdc-button').forEach(ele => MDCRipple.attachTo(ele))

    const radio = new MDCRadio(document.querySelector('.mdc-radio')!)
    const formField = new MDCFormField(document.querySelector('.mdc-form-field')!);
    formField.input = radio
  }
})
</script>

<style lang="scss">
// mdc-button
@import "@material/button/mdc-button";
// mdc-radio
@import "@material/form-field/mdc-form-field";
@import "@material/radio/mdc-radio";

.test-page button {
  margin: 12px 24px;
}
</style>
