import { expect } from 'chai';
import { createLocalVue, mount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Home from '@/views/Home.vue';

describe('Boostrap Modal', () => {
  it('open and close modal', async () => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    const wrapper = mount(Home, {
      localVue,
      attachToDocument: true,
    });

    const open = wrapper.find('#button-open');
    const modal = wrapper.find({ ref: 'modal-ref' });
    expect(modal.vm.isVisible).to.equal(false);
    open.trigger('click');
    await wrapper.vm.$nextTick();
    console.log(modal.exists());
    expect(modal.vm.isVisible).to.equal(true);
    // find it from home
    // const close = wrapper.find('#button-close');
    // find it from modal
    const close = modal.find('#button-close');
    expect(close.exists()).to.equal(true);
    close.trigger('click');

    await wrapper.vm.$nextTick();
    expect(modal.vm.isVisible).to.equal(false);
    wrapper.destroy();
  });
});
