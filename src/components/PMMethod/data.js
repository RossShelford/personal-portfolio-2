import build from './images/build.png';
import define from './images/define.png';
import strategy from './images/strategy.png';
import test from './images/test.png';
import launch from './images/launch.png';
// import idea from './images/idea.png';

const data = [
    {
        id: 0,
        image: define,
        title: 'Step 1 - Define',
        titleColor: 'rgb(237, 62, 122)',
        copytext: 'Before the work starts, there should be a discussion where the whole team should understand the end goal, the value that will be provided, and how it will be\u00A0achieved.',
    },
    {
        id: 1,
        image: strategy,
        title: 'Step 2 - Strategy',
        titleColor: 'rgb(240, 126, 60)',
        copytext: `Gather information on the target audience, competitors, and industry trends. Use this information to gain insights that will inform the design.`,
    },
    {
        id: 2,
        image: build,
        title: 'Step 3 - Ideation',
        titleColor: 'rgb(162, 122, 250)',
        copytext: 'Ddesigners and developers begin work on their first iteration of the project. Generate a wide range of ideas for how to solve the problem and achieve the goals. Being open to unconventional solutions.',
    },
    {
        id: 3,
        image: test,
        title: 'Step 4 - Test',
        titleColor: 'rgb(81, 194, 237)',
        copytext: 'Select the best ideas and develop them further through sketching, prototyping, and testing. Be prepared to make changes and iterate as needed.',
    },
    {
        id: 4,
        image: launch,
        title: 'Step 5 - Launch',
        titleColor: 'rgb(125, 120, 250)',
        copytext: 'Continuously evaluate the design by gathering feedback from users and analyzing its performance. Use this information to make improvements and optimize the design for better results.',
    },
    // {
    //     id: 5,
    //     image: idea,
    //     title: 'Conclusion',
    //     titleColor: 'rgb(105, 176, 250)',
    //     copytext: 'To me, a project manager is not there to enforce a rigid structure but instead should shape themselves around the team and unite everyone towards a common\u00A0goal.',
    // },
]

export default data;