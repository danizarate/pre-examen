import { shallowMount } from "@vue/test-utils";
import Menu from "@/components/Menu.vue";
import Home from "@/views/Home.vue";
/* 
describe("HelloWorld.vue", () => {
  it("Test sobre componente Menu", () => {
    const msg = "new message";
    const wrapper = shallowMount(Menu, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
 */
describe('Menu.vue', ()=>{
  it('carga del componente Menu', ()=>{
    const wrapper = shallowMount(Menu);
    console.log(wrapper.html());
    expect(wrapper.html());
  })
})

describe('Home.vue', ()=>{
  it('carga del componente Home', ()=>{
    const wrapper = shallowMount(Home);
    console.log(wrapper.html());
    expect(wrapper.html());
  })
})