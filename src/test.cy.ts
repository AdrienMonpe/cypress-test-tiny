import Component from './Component.vue';

describe('basic test', () => {
  it('mount component (mutation events deprecation errors should appear in the console)', () => {
    cy.mount(Component);
  });
});
