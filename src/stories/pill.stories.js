import MyButton from '../components/pill.vue';

export default {
  title: 'Component/Pill',
  component: MyButton,
  /*
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
  */
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Agypten = Template.bind({});
Agypten.args = {
  label: 'Ägypten',
  price: 'ab € 342',
  link: "https://www.restplatzboerse.at/urlaub/aegypten-lid-143/"
};
