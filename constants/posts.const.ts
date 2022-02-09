import { IPost } from 'interfaces/post.interface';

export const posts: Array<IPost> = [
  // Post 1
  {
    title: 'Introduction & main goal',
    content: [
      {
        title: 'The main goal',
        content:
          'Put it simply, to retire in 20 years - exactly in 2042. I will achieve this! But during this period  I want to share my every day experience in this topic, so you may set up a similar goal for yourself.',
      },
      {
        title: 'Who am I, you may ask?',
        content:
          'To be honest, I am a young one working in the Software Industry and came across this investment stuff a few years ago. Thankfully a few of my colleagues already had experience, so I just absorbed every information they shared with me. Then I realized that there must be much more in this than just a hobby.',
      },
      {
        title: 'Turns out to be serious',
        content:
          'Story time: I started to take this topic seriously. I remember it was a rainy afternoon. I was listening to Africa from Toto while sipping a mug of tea and suddenly thunder struck through my brain. The following may not be exactly what happened, but what I discovered was that I am the exact age at which almost every book recommends starting this investment.',
      },
      {
        title: 'Since then',
        content:
          'Since then I read a lot of books, participated in webinars (thanks Covid) and started to implement this strategy in real life. I spent 2021 performing calculations, choosing platforms, learning some tips and tricks on how to select ‘worthy’ companies.',
      },
      {
        title: 'Footnote',
        content:
          'You will find some useful resources on this blog, I am sure. If you have questions or would like more information, feel free to contact me.',
      },
    ],
    intro:
      'So here we go! You are reading the first post ever created on this page. I bet you have some great plans for the future! You may want to quit your job earlier and retire before your parents. Or you just want to build a habit for saving up money on a monthly basis. You are at the good place!',
    id: 1,
    published: '05.02.2022',
  },

  // Post 2
  {
    id: 2,
    title: 'Concepts',
    intro: 'Get started with the key terms and concepts',
    content: [
      {
        title: 'Ann and Bob',
        content:
          'There are two types of people who encounter this topic. One of them is Ann, who is familiar with dividends, payout ratios, etc. Bob, on the other hand, has no idea what any of these terms mean, but is nonetheless intrigued and encouraged about them. It is my intention to write both of them. Maybe a post would summarize things in a meaningful way if you already know something. For people who do not know everything, it is recommended to read ahead.',
      },
      {
        title: 'How do I plan to earn from this?',
        content:
          'To start with, and put simply: from the dividend. The dividend itself is the money a company pays from its profit to its shareholders. There are several companies out there with a long (I mean more than 50 years) dividend payout history. This will be backbone for our long term investment process.',
      },
      {
        title: 'Okay, but which companies',
        content:
          'you may ask. It is a perfect question. There are several metrics which guides through the process of choosing a worthy company. The key concept is: high returns = high quality + high current yield + high growth of yield. Stay tuned, because I will share my evaluation of companies when I buy shares from one of them.',
      },
      {
        title: 'Is it applicable at any time?',
        content:
          'I try to measure companies worth-of-buy metrics always compared to some other key metrics in the industry, like Standard and Poor’s average numbers or the long term US bonds yield just to mention a few. This makes measurement a bit easier, as you may encounter the posts and information here later in time. If I tell you that I bought company XYZ in February, 2022 that information wouldn’t be so useful for you 2 years later.',
      },
      {
        title: 'Recommended references',
        content: 'The Single Best Investment by Lowell Miller',
      },
    ],
    published: '06.02.2022',
  },

  // Post 3
  {
    id: 3,
    title: 'Behaviour - the key factor',
    intro:
      'What are the key characteristic that helps you succeed during ups and down?',
    content: [
      {
        title: 'Intro',
        content:
          'Before jumping into the rules and the process to pick potential candidates, there is another important thing. In my opinion, this will be one of the most useful one. The behaviour. Without these characteristic, people can bend easily with the wind and give up an otherwise rock solid plan to build a compounding machine. But enough from small-talk, jump into the details and review them step by step!',
      },
      {
        title: 'Be adoptable',
        content: `I think it speaks for itself. The times fly by as well as all the previous metrics, tips and analysis. One of the crucial mindset one has to have when fighting through the enormous amount of information in this area is to be adoptable. Metric, numbers and key factors measured in 1992, during the dotcom bubble or around the 2008 crisis will not be helpful now. 

        To have a good overall view, one must have to check the valuation of a company based on the current trends - both the industry of which the company operates as well as the overall market.`,
      },
      {
        title: 'Do not buy if there is no good option',
        content:
          'This will rarely be a case, because there will always be another option. But if not, do not buy! Simply just keep your money as a free cash (maybe on your account on something like that) because the sun will rise tomorrow, there will be several news and what might be priced ‘high’ today maybe will be better 3 weeks from now.',
      },
      {
        title: 'Do not "fall in love"',
        content:
          'At least not with companies! People usually like to favor one company over another just because it is fancy or more popular. The sad thing is even a company is hyped can have really bad results if measured with your long-term return eyeglasses on. My suggestion is not to fall in love with brand names, possible future outcomes, Twitter posts.',
      },
      {
        title: 'Do not want to beat the market',
        content:
          'I wish I could have Morgan Freeman’s record as he is whispering this phrase, on repeat. Beating the market is something that you should never sign up for. You do not chase high return from selling TSLA short before Elon Musk’s latest Tweet. You rather want a stable, reliable compounding machine on top of which you can plan a life.',
      },
      {
        title: 'Footnote',
        content: `Please always do your own research when buying! These are just the key characteristics according to my perspective - some of them cited from the Single Best Investment book.
        
        Never forget: high returns = high quality + high current yield + growth of yield.`,
      },
    ],
    published: '09.02.2022',
  },
];
