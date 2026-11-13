import { profile } from '../profile'

// 오른쪽 아래에 떠 있는 원형 버튼 (스타벅스 "Frap" 버튼)
export default function Frap() {
  return (
    <a className="frap" href={`mailto:${profile.contact.email}`} aria-label="메일 보내기">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V7H4Zm16 2.75-7.47 4.67a1 1 0 0 1-1.06 0L4 9.75V17h16V9.75Z"
        />
      </svg>
    </a>
  )
}
