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
      "Analyzing your favorite driver's interaction with their race engineer throughout a race with sentiment analysis of broadcasted audio clips.",
    link: 'https://github.com/AlexyCz/F1RadioSentiment',
    video: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGk1dWt6ZDdhNjk2MGt3aXUyeWdwajRkcXk2M3B1cmhwZzM2b29icCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0IybCqTvCr3bDoIw/giphy.gif',
    id: 'project1',
  },
  {
    name: 'Exploratory Data Engineering',
    description:
      'Exploring a variety of data engineering self-directed practicums forked from @danielbeach on Github.',
    link: 'https://github.com/AlexyCz/data-engineering-practice',
    // video: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh2bDM2ZHJvYmhrYnh4Ymd5cnE4eXF4NTMxODdndWVscXJuMjNjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzE4X805YG1APcYuhT/giphy.gifhttps://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh2bDM2ZHJvYmhrYnh4Ymd5cnE4eXF4NTMxODdndWVscXJuMjNjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzE4X805YG1APcYuhT/giphy.gif',
    video: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhzN3p1YTZlMGt3bGg1d29idnB2NmtnNTBrdTlsb2drNjl6dmo3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OkHnEyxwMOk1O1jXWL/giphy.gif',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Braid - University of Michigan PIT-KN',
    title: 'Open Source Developer',
    industry: 'Public Interest Technology',
    start: '2025',
    end: 'Present',
    link: 'https://braider.io',
    id: 'work0',
  },
  {
    company: 'Built Technologies',
    title: 'Data Engineer',
    industry: 'Construction Real Estate',
    start: '2021',
    end: '2023',
    link: 'https://getbuilt.com/about-us/',
    id: 'work1',
  },
  {
    company: 'Brigade Media',
    title: 'Data Engineer, Intern',
    industry: 'Civic',
    start: 'Fall',
    end: '2018',
    link: 'https://www.linkedin.com/company/brigade-/about/',
    id: 'work2',
  },
  {
    company: 'Clover Health',
    title: 'Data Engineer, Intern',
    industry: 'Healthcare',
    start: 'Summer',
    end: '2018',
    link: 'https://www.cloverhealth.com/about-us/about-clover',
    id: 'work3',
  },
  {
    company: 'Foursquare',
    title: 'Software Engineer, Android, Intern',
    industry: 'Social Network',
    start: 'Summer',
    end: '2017',
    link: 'https://foursquare.com/about-us/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring writing something of substance to read.',
    description: 'How can I write.',
    link: '/blog/english-major-mode',
    uid: 'blog-1',
  },
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexycrz',
  },
  {
    label: 'Github',
    link: 'https://github.com/AlexyCz',
  },
  {
    label: 'Substack',
    link: 'https://substack.com/@cruzcntrl',
  },
]

export const EMAIL = 'your@email.com'
