import { expect } from 'chai';
import { createLocalVue, mount, createWrapper } from '@vue/test-utils';
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

    const closeElement = document.getElementById('button-close');
    const closeWrapper = createWrapper(closeElement);
    expect(closeWrapper.exists()).to.equal(true);
    expect(closeWrapper.is('button')).to.equal(true);
    closeWrapper.trigger('click');
    await wrapper.vm.$nextTick();
    expect(modal.vm.isVisible).to.equal(false);
    wrapper.destroy();
  });
});
