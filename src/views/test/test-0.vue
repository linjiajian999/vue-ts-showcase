<template>
  <div class="page test-page">
    test router - 0
    <div class="test-content">
      <div class="test-block">
        <!-- mdc-button -->
        <a
          class="mdc-typography--subtitle1"
          href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
          target="_blank">
          mdc-button
        </a>
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
      </div>
      <!-- mdc-radio -->
      <div class="test-block">
        <a
          class="mdc-typography--subtitle1"
          href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio"
          target="_blank">
          mdc-radio
        </a>
        <div class="mdc-form-field">
          <div class="mdc-radio">
            <input
              id="radio-1"
              class="mdc-radio__native-control"
              type="radio"
              name="radios"
              checked
              value="456" />
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle"></div>
              <div class="mdc-radio__inner-circle"></div>
            </div>
          </div>
          <label for="radio-1">Radio 2</label>
          <div class="mdc-radio">
            <input
              id="radio-2"
              class="mdc-radio__native-control"
              type="radio"
              name="radios"
              value="123" />
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle"></div>
              <div class="mdc-radio__inner-circle"></div>
            </div>
          </div>
          <label for="radio-2">Radio 2</label>
        </div>
        <button
          class="mdc-button mdc-button--raised"
          @click="getRadioValue">
          getRadioValue
        </button>
      </div>
      <div class="test-block">
        <a
          class="mdc-typography--subtitle1"
          href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox"
          target="_blank">
          mdc-radio
        </a>
        <div class="mdc-form-field">
          <div class="mdc-checkbox">
            <input
              id="checkbox-1"
              type="checkbox"
              class="mdc-checkbox__native-control" />
            <div class="mdc-checkbox__background">
              <svg
                class="mdc-checkbox__checkmark"
                viewBox="0 0 24 24">
                <path
                  class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
              </svg>
              <div class="mdc-checkbox__mixedmark"></div>
            </div>
          </div>
          <label for="checkbox-1">Checkbox 1</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { MDCRipple } from '@material/ripple'
import { MDCFormField } from '@material/form-field'
import { MDCRadio } from '@material/radio'
import { MDCCheckbox } from '@material/checkbox'

export interface Data {
  radio: null | MDCRadio
  checkbox: null | MDCCheckbox
  radioFormField: null | MDCFormField
}

export default Vue.extend({
  name: 'test-index',
  data(): Data {
    return {
      radio: null,
      checkbox: null,
      radioFormField: null
    }
  },
  methods: {
    getRadioValue() {
      console.log(this.radioFormField)
      console.log(this.radio!.value)
      console.log(this.radio!.checked)
    }
  },
  mounted() {
    document.querySelectorAll('.mdc-button').forEach(ele => MDCRipple.attachTo(ele))
    this.radio = new MDCRadio(document.querySelector('.mdc-radio')!)
    this.radioFormField = new MDCFormField(document.querySelector('.mdc-form-field')!)
    this.radioFormField.input = this.radio
    // console.log(this.radio)

    this.checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox')!)
  }
})
</script>

<style lang="scss">
// mdc-button
@import "@material/button/mdc-button";
// mdc-radio
@import "@material/form-field/mdc-form-field";
@import "@material/radio/mdc-radio";
@import "@material/checkbox/mdc-checkbox";
.test-page button {
  margin: 12px 24px;
}
.test-block a {
  display: block;
}
</style>
