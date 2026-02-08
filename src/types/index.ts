export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
