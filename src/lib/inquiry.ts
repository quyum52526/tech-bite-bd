// Lets any "Request a demo" button pre-select the matching option in the contact form.
export const INQUIRY_EVENT = "techbite:inquiry";

export type InquiryDetail = { service: string; message?: string };

export function requestInquiry(detail: InquiryDetail) {
  window.dispatchEvent(new CustomEvent<InquiryDetail>(INQUIRY_EVENT, { detail }));
}
