const formStep = {
  props: {
    invalid: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    validate(prop) {
      // console.log('prop', prop);
      // console.log('$v', this.$v);
      // console.log('$v[prop]', this.$v[prop]);

      this.$v[prop].$touch();

      const invalid = this.$v.$invalid;
      if (this.invalid !== invalid) {
        this.$emit('invalid-change', invalid);
      }
    },

    touch() {
      this.$v.$touch();
    },
  },
};

export default formStep;
