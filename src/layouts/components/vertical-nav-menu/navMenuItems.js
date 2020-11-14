/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
==========================================================================================*/
import store from '../../../../src/store/store.js'

const role = store.state.AppActiveUser.role
let show_menu = []
const menu = [
  {
    url: '/',
    name: 'หน้าแรก',
    slug: 'dashboard',
    icon: 'HomeIcon'
  },
  {
    url: null,
    name: 'จัดการงานวิ่ง',
    slug: 'event',
    icon: 'HeartIcon',
    submenu: [
      {
        url: '/search_event',
        name: 'ค้นหางานวิ่ง',
        slug: 'search_event',
        icon: 'SearchIcon'
      },
      {
        url: '/event',
        name: 'งานวิ่งทั้งหมด',
        slug: 'event',
        icon: 'ListIcon'
      },
      {
        url: '/add_event',
        name: 'เพิ่มงานวิ่ง',
        slug: 'add_event',
        icon: 'AddIcon'
      }
    ]
  },
  {
    url: null,
    name: 'รายการสมัครวิ่ง',
    slug: '',
    icon: 'FolderIcon',
    submenu: [
      {
        url: '/participate_registered',
        name: 'รอชำระเงิน',
        slug: 'participate_registered'
      },
      {
        url: '/participate_pending',
        name: 'รอการยืนยัน',
        slug: 'participate_pending'
      },
      {
        url: '/participate_approved',
        name: 'สมัครวิ่งสำเร็จ',
        slug: 'participate_approved'
      }
    ]
  },
  {
    url: null,
    name: 'รายการส่งผลวิ่ง',
    slug: '',
    icon: 'InboxIcon',
    submenu: [
      {
        url: '/progress_pending',
        name: 'ผลวิ่งรอการยืนยัน',
        slug: 'progress_pending'
      },
      {
        url: '/progress_approved',
        name: 'ผลวิ่งยืนยันแล้ว',
        slug: 'progress_approved'
      }
    ]
  },
  {
    url: null,
    name: 'จัดการผู้ใช้',
    slug: 'user',
    icon: 'UsersIcon',
    submenu: [
      {
        url: '/search_user',
        name: 'ค้นหาผู้ใช้',
        slug: 'search_user'
      },
      {
        url: '/user',
        name: 'ผู้ใช้ทั้งหมด',
        slug: 'user'
      }
    ]
  }
]

const adminOnlyMenus = [
  {
    url: null,
    name: 'เมนูแอดมิน',
    slug: '',
    icon: 'KeyIcon',
    submenu: [
      {
        url: '/admin',
        slug: 'admin',
        name: 'รายชื่อแอดมิน'
      },
      {
        url: '/add_admin',
        slug: 'add_admin',
        name: 'เพิ่มแอดมินใหม่'
      },
      {
        url: '/admin_setting',
        slug: 'admin_setting',
        name: 'ตั้งค่าระบบ'
      }
    ]
  },
  {
    url: null,
    name: 'จัดการธนาคาร',
    slug: 'bank',
    icon: 'CreditCardIcon',
    submenu: [
      {
        url: '/bank',
        name: 'บัญชีธนาคารทั้งหมด',
        slug: 'bank',
        icon: 'ListIcon'
      },
      {
        url: '/add_bank',
        name: 'เพิ่มบัญชีธนาคาร',
        slug: 'add_bank',
        icon: 'AddIcon'
      }
    ]
  },
  {
    url: '/admin_setting',
    slug: 'admin_setting',
    name: 'ตั้งค่าระบบ',
    icon: 'SettingsIcon'
  }
]

const fixedMenus = [
  {
    url: null,
    name: 'Link ต่างๆ',
    slug: '',
    icon: 'ExternalLinkIcon',
    submenu: [
      {
        url: 'https://paiwingkunhub-fe.vercel.app/',
        target: '_blank',
        name: 'ไปยังเว็บไซต์หน้าบ้าน',
        slug: 'external',
        icon: 'HomeIcon'
      },
      {
        url: 'mailto:boon.nm@pm.me',
        target: '_blank',
        name: 'ติดต่อทีมโปรแกรมเมอร์',
        slug: 'external',
        icon: 'MailIcon'
      }
    ]
  }
]

// Only for admin
if (role >= 2) show_menu = menu

// Only for admin
if (role >= 3) {
  adminOnlyMenus.map(menu => show_menu.push(menu))
}

// Default menu (Organizer will see this)
show_menu.push(fixedMenus[0])

export default show_menu
