import type { Branch } from './branch'

export type User = {
  id: string
  fullname: string
  gender: 'L' | 'P'
  date_of_birth: string
  position: string
  avatar: string
  branch: Branch
  social_media: SocialMedia[]
}

export type SocialMedia = {
  twitter: string
  facebook: string
  instagram: string
}
