// Type definitions for node-mac-contacts
// Project: node-mac-contacts

export function getAuthStatus(): AuthStatus
export function requestAccess(): Promise<'Denied' | 'Authorized'>
export function getAllContacts(extraProperties?: ContactExtraProperties): Promise<Contact[]>
export function getContactByName(name: string, extraProperties?: ContactExtraProperties): Promise<Contact>
export function addNewContact(contact?: AddOrUpdateContactOptions): boolean
export function updateContact(contact?: AddOrUpdateContactOptions): boolean
export function deleteContact(contact?: DeleteContactOptions): boolean

export interface listener extends NodeJS.EventEmitter {
  setup(): void
  remove(): void
  isListening(): boolean
  on(event: 'contact-changed', listener: (external: Boolean) => void): this
  once(event: 'contact-changed', listener: (external: Boolean) => void): this
}

export type ContactExtraProperties = Array<'jobTitle' | 'departmentName' | 'organizationName' | 'middleName' | 'note' | 'contactImage' | 'contactThumbnailImage' | 'instantMessageAddresses' | 'socialProfiles'>

export type AuthStatus = 'Not Determined' | 'Denied' | 'Authorized' | 'Restricted'

export interface DeleteContactOptions {
  identifier?: string,
  name?: string
}

export interface AddOrUpdateContactOptions {
  firstName: string
  middleName?: string
  lastName?: string
  nickname?: string
  jobTitle?: string
  departmentName?: string
  organizationName?: string
  birthday?: string
  phoneNumbers?: string[]
  emailAddresses?: string[]
}

export interface Contact {
  identifier: string
  firstName: string
  middleName: string
  lastName: string
  nickname: string
  birthday: string
  phoneNumbers: string[]
  emailAddresses: string[]
  postalAddresses: string[]
  jobTitle?: string
  departmentName?: string
  organizationName?: string
  note?: string
  contactImage?: Buffer
  contactThumbnailImage?: Buffer
  socialProfiles?: { service: string, username: string }[]
  instantMessageAddresses?: { service: string, username: string }[]
}