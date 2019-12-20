// Import our assertion library
// https://www.chaijs.com/guide/styles/#expect
import { expect } from 'chai'

// Vue Test Utils tests Vue components by mounting them in isolation,
// mocking the necessary inputs (props, injections and user events) and
// asserting the outputs (render result, emitted custom events).
// Here we're using `shallowMount` which will allow us to mount our component
// without rendering its child components.
// https://vue-test-utils.vuejs.org/api/#shallowmount
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

// Import the component you want to test
import ShowAlbum from '@/components/ShowAlbum.vue'

// describe() is how we group tests in Mocha
// It takes two arguments:
// 1) name of the test group
// 2) callback function
describe('ShowAlbum.vue', () => {
    // it() is used for an individual test case.
    // should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc.
    // takes two arguments:
    // 1) a string explaining what the test should do,
    // 2) a callback function which contains our actual test
    it('shows a album', () => {

        // Define a album we can test
        let album = {
            id: 1,
            name: 'Nine Track Mind',
            description:
                'This one is a 2014 release by Charlie Puth that was a chart topper.',
            artist: 'Charlie Puth',
            songlist: ['One Call Away', 'Marvin Gaye']
        }

        // Mount our component
        // Mounted components are returned inside a Wrapper, which exposes
        // many convenience methods for manipulating, traversing and
        // querying the underlying Vue component instance.
        // https://vue-test-utils.vuejs.org/api/wrapper/#properties
        const wrapper = shallowMount(ShowAlbum, {
            propsData: { album },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        // Assert our results
        expect(wrapper.text()).to.include(album.name)
        let foundAlbumLink = wrapper.find('[data-test="album-link"]').exists();
        expect(foundAlbumLink).to.equal(true);
    })
})
