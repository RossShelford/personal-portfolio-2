import build from './images/build.png';
import define from './images/define.png';
import strategy from './images/strategy.png';
import test from './images/test.png';
import launch from './images/launch.png';
import idea from './images/idea.png';

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
        copytext: `Once the concept is outlined, A roadmap is created and maintained. This identifies the features that will make up the final product and is reactive to situations that may\u00A0occur.`,
    },
    {
        id: 2,
        image: build,
        title: 'Step 3 - Build',
        titleColor: 'rgb(162, 122, 250)',
        copytext: 'UX designers and developers begin work on their first iteration of the project. Daily Stand-up meetings with the team to check on progress or if there are any new forseeable\u00A0roadblocks.',
    },
    {
        id: 3,
        image: test,
        title: 'Step 4 - Test',
        titleColor: 'rgb(81, 194, 237)',
        copytext: 'Either myself or a quality assurance team should test functionality, detect bugs, and record wins and losses to incorperate them into the\u00A0schedule.',
    },
    {
        id: 4,
        image: launch,
        title: 'Step 5 - Launch',
        titleColor: 'rgb(125, 120, 250)',
        copytext: 'After the end of the sprint, review with the project stakeholders to show them the product. With another meeting internally if the task load was too heavy or too light for each\u00A0member.',
    },
    {
        id: 5,
        image: idea,
        title: 'Conclusion',
        titleColor: 'rgb(105, 176, 250)',
        copytext: 'To me, a project manager is not there to enforce a rigid structure but instead should shape themselves around the team and unite everyone towards a common\u00A0goal.',
    },
]

export default data;