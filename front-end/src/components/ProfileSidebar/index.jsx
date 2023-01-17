import React from 'react'
import { SSidebarContainer, SButtonContainer, SUserDeleteButtonContainer } from './styles'

const ProfileSidebar = () => {
  return (
    <SSidebarContainer>
      <SButtonContainer>
        <button>프로필</button>
        <div className='profile-page'></div>
      </SButtonContainer>
      <SButtonContainer>
        <button>일정</button>
        <div></div>
      </SButtonContainer>
      <SButtonContainer>
        <button>미확정 강의</button>
        <div></div>
      </SButtonContainer>
      <SButtonContainer>
        <button>메시지함</button>
        <div></div>
      </SButtonContainer>
      <SUserDeleteButtonContainer>
        <button>회원탈퇴</button>
      </SUserDeleteButtonContainer>
    </SSidebarContainer>
  )
}

export default ProfileSidebar