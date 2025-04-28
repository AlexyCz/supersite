type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const LIKES: Project[] = [
  {
    name: 'reading...',
    description: 'Politics and the English Language by George Orwell, c. 1946',
    link: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/',
    video:
      'https://upload.wikimedia.org/wikipedia/en/6/65/PoliticsandtheEnglishLanguage.jpg',
    id: 'project1',
  },
  {
    name: 'admiring...',
    description: 'Quintus Jan Telting, c. 1988',
    link: 'https://teltingcollection.com/wp-content/uploads/2020/01/1797__anno-1988_110-x-140_.jpg',
    video:
      'https://teltingcollection.com/wp-content/uploads/2020/01/1797__anno-1988_110-x-140_.jpg',
    id: 'project2',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'SentimentVroom',
    description:
      "Analyzing your favorite driver's interaction with their race engineer throughout the race with radio transcription and sentiment analysis.",
    link: 'https://sentimentvroom.vercel.app',
    video: 'video_link',
    id: 'project1',
  },
  {
    name: 'Exploratory Data Engineering',
    description:
      'Exploring a variety of data engineering self-directed practicums from @danielbeach on Github.',
    link: 'https://motion-primitives.com/',
    video: 'video\.uri',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Built Technologies',
    title: 'Data Engineer',
    start: '2021',
    end: '2023',
    link: 'https://getbuilt.com/about-us/',
    id: 'work1',
  },
  {
    company: 'Brigade Media',
    title: 'Data Engineer, Intern',
    start: '2018',
    end: '2018',
    link: 'https://www.linkedin.com/company/brigade-/about/',
    id: 'work2',
  },
  {
    company: 'Clover Health',
    title: 'Data Engineer, Intern',
    start: '2018',
    end: '2018',
    link: 'https://www.cloverhealth.com/about-us/about-clover',
    id: 'work3',
  },
  {
    company: 'Foursquare',
    title: 'Software Engineer, Android, Intern',
    start: '2017',
    end: '2017',
    link: 'https://foursquare.com/about-us/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/AlexyCz',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexycrz',
  },
  {
    label: 'Substack',
    link: 'https://substack.com/@cruzcntrl',
  },
]

export const EMAIL = 'your@email.com'
