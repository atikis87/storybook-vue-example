import MyButton from '../components/pills.vue';

export default {
  title: 'Components/Pills',
  component: MyButton,
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
  link: 'https://www.restplatzboerse.at/urlaub/aegypten-lid-143/'
};

export const Spanien = Template.bind({});
Spanien.args = {
  label: 'Spanien',
  price: "ab € 242",
  link: 'https://www.restplatzboerse.at/urlaub/spanien-lid-116/'
};

export const Griechenland = Template.bind({});
Griechenland.args = {
  label: 'Griechenland',
  price: 'ab € 372',
  link: 'https://www.restplatzboerse.at/urlaub/griechenland-lid-37/'
};

export const AlleReiseZiele = Template.bind({});
AlleReiseZiele.args = {
  label: 'Alle Reiseziele',
  link: 'https://www.restplatzboerse.at/urlaub/'
};
