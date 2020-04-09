import { createElement } from './helpers.js';

const about = createElement('div', { class: 'about' });
const aboutHeading = createElement('h1', { class: 'about__heading' });
const aboutInner = createElement('div', { class: 'about__inner' });
const paragraph = createElement('p', { class: 'about__paragraph' });


aboutHeading.textContent = 'About us';
paragraph.textContent = `Mealy is one of the country’s most celebrated restaurants;
                        the creation of leading Australian restaurant group, 
                        Fink, and Executive Chef John Doe.The restaurant is 
                        an organic space reflective of John Doe’s nature inspired 
                        cuisine. The interplay of textures and colour brings life and 
                        a vibrance that embraces the restaurant’s place in the dress 
                        circle of Sydney Harbour. An ode to the Australian landscape, 
                        from the vast ocean floor, to the cracked bark of a paperbark 
                        tree, every detail from the ground up has been thoughtfully considered. 
                        The dining room is perfectly suited for a romantic dinner for 2, 
                        family gatherings,  larger parties, dinner meetings and corporate 
                        events- inquire about reserving our dining room for your next event.
                        In addition to dining on-premise, Sidel’s also offers off-premise 
                        catering for all events.`


aboutInner.append(paragraph)
about.append(aboutHeading, aboutInner);


export { about }
