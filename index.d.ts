// Type definitions for node-mac-contacts
// Project: node-mac-contacts

export function getAuthStatus(): AuthStatus
export function requestAccess(): Promise<AuthStatus>
export function getAllContacts(extraProperties?: ContactExtraProperties): Contact[]
export function getContactsByName(name: string, extraProperties?: ContactExtraProperties): Contact[]
export function addNewContact(contact: AddOrUpdateContactOptions): boolean
export function updateContact(contact: UpdateContactOptions): boolean
export function deleteContact(contact: DeleteContactOptions): boolean

export declare const listener: ContactListener

interface ContactListener extends NodeJS.EventEmitter {
  setup(): void
  remove(): void
  isListening(): boolean
  on(event: 'contact-changed', listener: (external: boolean) => void): this
  once(event: 'contact-changed', listener: (external: boolean) => void): this
}

export type ContactExtraProperties = Array<'jobTitle' | 'departmentName' | 'organizationName' | 'middleName' | 'note' | 'contactImage' | 'contactThumbnailImage' | 'instantMessageAddresses' | 'socialProfiles' | 'urlAddresses'>

export type AuthStatus = 'Not Determined' | 'Denied' | 'Authorized' | 'Restricted' | 'Limited'

export interface DeleteContactOptions {
  identifier?: string
  name?: string
}

export interface PostalAddress {
  street?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
  /** ISO 3166-1 alpha-2 code, e.g. "US" or "GB". */
  ISOCountryCode?: string
  /** Address label, e.g. "home" or "work". Defaults to "home" if omitted. */
  label?: string
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
  urlAddresses?: string[]
  postalAddresses?: PostalAddress[]
}

export interface UpdateContactOptions {
  identifier?: string
  firstName?: string
  middleName?: string
  lastName?: string
  nickname?: string
  jobTitle?: string
  departmentName?: string
  organizationName?: string
  birthday?: string
  phoneNumbers?: string[]
  emailAddresses?: string[]
  urlAddresses?: string[]
  postalAddresses?: PostalAddress[]
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
  socialProfiles?: { service: string; username: string; url: string }[]
  instantMessageAddresses?: { service: string; username: string }[]
  urlAddresses?: string[]
}